(function () {
    'use strict';

    let enabled = false;
    let activeButton = null;
    let sentenceAudio = null;
    let playbackToken = 0;
    let boundaryFrame = 0;
    let boundaryTimer = 0;
    let pendingSeekCancel = null;
    const FALLBACK_END_GUARD_SECONDS = 0.06;
    const SEEK_TOLERANCE_SECONDS = 0.08;
    const SEEK_TIMEOUT_MS = 800;

    function getAudioKey(audioSrc) {
        if (!audioSrc) return '';
        const cleanSrc = String(audioSrc).split(/[?#]/, 1)[0];
        const fileName = cleanSrc.slice(cleanSrc.lastIndexOf('/') + 1);
        return fileName.replace(/\.[^.]+$/, '');
    }

    function applyClips(data) {
        if (!data || !data.script) return data;
        const clipMap = window.KijiN1TaskTimelineMap || {};
        const clips = clipMap[getAudioKey(data.audio)];
        if (!clips) return data;

        const inheritedEndGuard = Number(clips.endGuard);
        const applyInheritedEndGuard = (clip) => {
            if (!clip || !Number.isFinite(inheritedEndGuard) || clip.endGuard != null) return clip;
            return { ...clip, endGuard: Math.max(0, inheritedEndGuard) };
        };

        if (clips.question) {
            data.script.questionClip = applyInheritedEndGuard(clips.question);
        }
        (data.script.dialogue || []).forEach((line, index) => {
            if (clips.lines && clips.lines[index]) {
                line.clip = applyInheritedEndGuard(clips.lines[index]);
            }
        });
        return data;
    }

    function normalizeSegment(segment) {
        if (!segment) return null;
        if (typeof segment === 'string') {
            return { src: segment, start: 0, end: null };
        }
        const start = Number(segment.start);
        const end = Number(segment.end);
        const endGuard = Number(segment.endGuard);
        if (!segment.src || !Number.isFinite(start)) return null;
        return {
            src: segment.src,
            start: Math.max(0, start),
            end: Number.isFinite(end) && end > start ? end : null,
            endGuard: Number.isFinite(endGuard) ? Math.max(0, endGuard) : null
        };
    }

    function sentenceButton(audioSegment, label) {
        const segment = normalizeSegment(audioSegment);
        if (!segment) return '';
        const endAttribute = segment.end == null ? '' : ` data-audio-end="${segment.end}"`;
        const endGuardAttribute = segment.endGuard == null ? '' : ` data-audio-end-guard="${segment.endGuard}"`;
        return `<button type="button"
                    class="sentence-listen-button"
                    data-audio-src="${segment.src}"
                    data-audio-start="${segment.start}"
                    ${endAttribute}
                    ${endGuardAttribute}
                    aria-label="${label || 'この文を聞く'}"
                    aria-pressed="false"
                    onclick="KijiListeningFollow.play(event, this)">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zm-2.5-8.77v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z"/></svg>
                </button>`;
    }

    function renderSource(content, translation, audioSrc, label) {
        return `<div class="follow-listening-source"
                     role="button"
                     tabindex="0"
                     aria-label="点击显示原文和译文"
                     onclick="KijiListeningFollow.reveal(event, this)"
                     onkeydown="KijiListeningFollow.keydown(event, this)">
                    <div class="follow-listening-mainline">
                        <span class="follow-listening-content">${content || ''}</span>${sentenceButton(audioSrc, label)}
                    </div>
                    ${translation ? `<div class="translation follow-listening-translation">${translation}</div>` : ''}
                </div>`;
    }

    function reveal(event, source) {
        if (!enabled || !source) return;
        if (event && event.target && event.target.closest('.sentence-listen-button')) return;
        source.classList.add('is-revealed');
        source.setAttribute('aria-label', '原文已显示');
        if (event && event.type === 'click' && event.detail > 0) source.blur();
    }

    function keydown(event, source) {
        if (!enabled || !['Enter', ' '].includes(event.key)) return;
        event.preventDefault();
        reveal(event, source);
    }

    function getAudio() {
        if (!sentenceAudio) sentenceAudio = document.getElementById('sentenceAudioElement');
        return sentenceAudio;
    }

    function resetButton() {
        if (activeButton) {
            activeButton.classList.remove('is-playing');
            activeButton.setAttribute('aria-pressed', 'false');
        }
        activeButton = null;
    }

    function clearBoundaryMonitor() {
        if (boundaryFrame) cancelAnimationFrame(boundaryFrame);
        if (boundaryTimer) clearTimeout(boundaryTimer);
        boundaryFrame = 0;
        boundaryTimer = 0;
    }

    function clearPendingSeek() {
        if (typeof pendingSeekCancel === 'function') pendingSeekCancel();
        pendingSeekCancel = null;
    }

    function seekBeforePlayback(audio, targetTime, token, onReady, onFailure) {
        clearPendingSeek();
        const target = Math.max(0, targetTime);
        let cancelled = false;
        let metadataHandler = null;
        let seekHandler = null;
        let timeoutId = 0;
        let attempts = 0;

        const cleanup = () => {
            if (metadataHandler) audio.removeEventListener('loadedmetadata', metadataHandler);
            if (seekHandler) audio.removeEventListener('seeked', seekHandler);
            if (timeoutId) window.clearTimeout(timeoutId);
            metadataHandler = null;
            seekHandler = null;
            timeoutId = 0;
        };
        const cancel = () => {
            cancelled = true;
            cleanup();
            if (pendingSeekCancel === cancel) pendingSeekCancel = null;
        };
        const fail = () => {
            cancel();
            if (token === playbackToken && typeof onFailure === 'function') onFailure();
        };
        const confirmPosition = () => {
            if (cancelled || token !== playbackToken) {
                cancel();
                return;
            }
            const current = Number(audio.currentTime);
            if (Number.isFinite(current) && Math.abs(current - target) <= SEEK_TOLERANCE_SECONDS) {
                cancel();
                onReady();
                return;
            }
            if (attempts >= 2) {
                fail();
                return;
            }
            requestSeek();
        };
        const armTimeout = (delay) => {
            if (timeoutId) window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(confirmPosition, delay);
        };
        const requestSeek = () => {
            if (cancelled || token !== playbackToken) {
                cancel();
                return;
            }
            if (audio.readyState < 1) {
                if (!metadataHandler) {
                    metadataHandler = () => {
                        metadataHandler = null;
                        requestSeek();
                    };
                    audio.addEventListener('loadedmetadata', metadataHandler, { once: true });
                }
                armTimeout(SEEK_TIMEOUT_MS * 2);
                return;
            }
            const current = Number(audio.currentTime);
            if (Number.isFinite(current) && Math.abs(current - target) <= 0.015) {
                cancel();
                onReady();
                return;
            }
            attempts += 1;
            if (seekHandler) audio.removeEventListener('seeked', seekHandler);
            seekHandler = () => {
                seekHandler = null;
                confirmPosition();
            };
            audio.addEventListener('seeked', seekHandler, { once: true });
            try {
                audio.currentTime = target;
            } catch (error) {
                fail();
                return;
            }
            armTimeout(SEEK_TIMEOUT_MS);
        };

        pendingSeekCancel = cancel;
        requestSeek();
    }

    function stop() {
        playbackToken += 1;
        clearBoundaryMonitor();
        clearPendingSeek();
        const audio = getAudio();
        if (audio) audio.pause();
        resetButton();
    }

    function play(event, button) {
        event.preventDefault();
        event.stopPropagation();
        const audioSrc = button.dataset.audioSrc;
        const startTime = Number(button.dataset.audioStart || 0);
        const endTime = Number(button.dataset.audioEnd);
        const configuredEndGuard = Number(button.dataset.audioEndGuard);
        const audio = getAudio();
        if (!audioSrc || !audio) return;
        if (activeButton === button) {
            stop();
            return;
        }

        stop();
        activeButton = button;
        const token = playbackToken;
        let boundaryEndTime = endTime;
        if (Number.isFinite(endTime)) {
            const requestedEndGuard = Number.isFinite(configuredEndGuard)
                ? Math.max(0, configuredEndGuard)
                : FALLBACK_END_GUARD_SECONDS;
            const endGuard = Math.max(FALLBACK_END_GUARD_SECONDS, requestedEndGuard);
            boundaryEndTime = Math.max(startTime + 0.03, endTime - endGuard);
        }
        button.classList.add('is-playing');
        button.setAttribute('aria-pressed', 'true');

        const finish = () => {
            if (token !== playbackToken) return;
            clearBoundaryMonitor();
            audio.pause();
            if (Number.isFinite(audio.duration)) audio.currentTime = Math.max(0, startTime);
            resetButton();
        };
        const monitorBoundary = () => {
            if (token !== playbackToken || !Number.isFinite(endTime)) return;
            if (audio.currentTime >= boundaryEndTime - 0.006) {
                finish();
                return;
            }
            boundaryFrame = requestAnimationFrame(monitorBoundary);
        };
        const scheduleBoundaryCheck = () => {
            if (token !== playbackToken || !Number.isFinite(endTime)) return;
            const remaining = boundaryEndTime - audio.currentTime;
            if (remaining <= 0.006) {
                finish();
                return;
            }
            boundaryTimer = window.setTimeout(
                scheduleBoundaryCheck,
                Math.max(5, Math.min(remaining * 1000 - 4, 120))
            );
        };
        const start = () => {
            if (token !== playbackToken) return;
            audio.playbackRate = 1;
            audio.muted = false;
            audio.volume = 1;
            const promise = audio.play();
            if (promise && typeof promise.then === 'function') {
                promise.then(() => {
                    if (token !== playbackToken) return;
                    boundaryFrame = requestAnimationFrame(monitorBoundary);
                    scheduleBoundaryCheck();
                }).catch(finish);
            } else {
                boundaryFrame = requestAnimationFrame(monitorBoundary);
                scheduleBoundaryCheck();
            }
        };

        audio.onended = finish;
        audio.onerror = finish;
        audio.ontimeupdate = null;
        const resolvedSrc = new URL(audioSrc, document.baseURI).href;
        if (audio.src !== resolvedSrc) {
            audio.src = resolvedSrc;
            audio.load();
        }
        seekBeforePlayback(audio, startTime, token, start, finish);
    }

    function setEnabled(next) {
        enabled = Boolean(next);
        const container = document.getElementById('appContainer');
        const toggle = document.getElementById('followListeningToggle');
        if (container) {
            container.classList.toggle('follow-listening-enabled', enabled);
            if (!enabled) {
                container.querySelectorAll('.follow-listening-source.is-revealed').forEach((source) => {
                    source.classList.remove('is-revealed');
                    source.setAttribute('aria-label', '点击显示原文和译文');
                });
            }
        }
        if (toggle) {
            toggle.setAttribute('aria-pressed', String(enabled));
            toggle.textContent = '精听模式';
            toggle.setAttribute('aria-label', enabled ? '关闭精听模式' : '开启精听模式');
            toggle.title = enabled ? '关闭精听模式' : '开启精听模式';
        }
        if (!enabled) stop();
    }

    function toggle() {
        setEnabled(!enabled);
    }

    function syncMode(mode) {
        const toggleButton = document.getElementById('followListeningToggle');
        if (mode === 'practice') {
            setEnabled(false);
            if (toggleButton) toggleButton.hidden = true;
        } else if (toggleButton) {
            toggleButton.hidden = false;
        }
    }

    function bindPlayer() {
        const audio = document.getElementById('audioElement');
        if (!audio || audio.dataset.followListeningBound === 'true') return;
        audio.dataset.followListeningBound = 'true';
        audio.addEventListener('play', stop);
        ['playBtn', 'rewindBtn', 'forwardBtn', 'prevBtn', 'nextBtn'].forEach((id) => {
            const control = document.getElementById(id);
            if (control) control.addEventListener('click', stop, true);
        });
        const progress = document.getElementById('progressContainer');
        if (progress) progress.addEventListener('pointerdown', stop, true);
    }

    window.KijiListeningFollow = {
        applyClips,
        renderSource,
        reveal,
        keydown,
        play,
        stop,
        toggle,
        syncMode,
        bindPlayer
    };
})();
