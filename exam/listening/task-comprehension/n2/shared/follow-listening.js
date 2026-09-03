(function () {
    'use strict';

    let enabled = false;
    let activeButton = null;
    let sentenceAudio = null;
    let playbackToken = 0;
    let boundaryFrame = 0;
    let boundaryTimer = 0;
    let pendingSeekCancel = null;
    let preciseAudioContext = null;
    let preciseSource = null;
    let preciseGain = null;
    let adapting = false;
    let renderScheduled = false;
    let currentSentenceIndex = 0;
    let currentTimelineKey = '';
    let sentenceRateIndex = 1;
    const decodedAudioCache = new Map();
    const SENTENCE_RATES = [0.75, 1, 1.25];
    const FALLBACK_END_GUARD_SECONDS = 0.06;
    const PRECISE_FADE_SECONDS = 0.018;
    const SEEK_TOLERANCE_SECONDS = 0.08;
    const SEEK_TIMEOUT_MS = 800;

    function getAudioKey(audioSrc) {
        if (!audioSrc) return '';
        const cleanSrc = String(audioSrc).split(/[?#]/, 1)[0];
        const fileName = cleanSrc.slice(cleanSrc.lastIndexOf('/') + 1);
        return fileName.replace(/\.[^.]+$/, '');
    }

    function getCurrentTimeline() {
        const audio = document.getElementById('audioElement');
        const source = audio && (audio.getAttribute('src') || audio.currentSrc || audio.src);
        const key = getAudioKey(source);
        return {
            key,
            timeline: (
                window.KijiN2TaskTimelineMap
                || window.KijiN1TaskTimelineMap
                || window.KijiN1PointTimelineMap
                || {}
            )[key] || null
        };
    }

    function normalizeSegment(segment, inheritedEndGuard, inheritedSampleAccurate, inheritedFadeOut) {
        if (!segment) return null;
        if (typeof segment === 'string') {
            return {
                src: segment,
                start: 0,
                end: null,
                endGuard: null,
                sampleAccurate: Boolean(inheritedSampleAccurate),
                fadeOut: Number.isFinite(Number(inheritedFadeOut)) ? Math.max(0, Number(inheritedFadeOut)) : null
            };
        }
        const start = Number(segment.start);
        const end = Number(segment.end);
        const ownEndGuard = Number(segment.endGuard);
        const sharedEndGuard = Number(inheritedEndGuard);
        const ownFadeOut = Number(segment.fadeOut);
        const sharedFadeOut = Number(inheritedFadeOut);
        if (!segment.src || !Number.isFinite(start)) return null;
        return {
            src: segment.src,
            start: Math.max(0, start),
            end: Number.isFinite(end) && end > start ? end : null,
            endGuard: Number.isFinite(ownEndGuard)
                ? Math.max(0, ownEndGuard)
                : (Number.isFinite(sharedEndGuard) ? Math.max(0, sharedEndGuard) : null),
            sampleAccurate: segment.sampleAccurate == null
                ? Boolean(inheritedSampleAccurate)
                : Boolean(segment.sampleAccurate),
            fadeOut: Number.isFinite(ownFadeOut)
                ? Math.max(0, ownFadeOut)
                : (Number.isFinite(sharedFadeOut) ? Math.max(0, sharedFadeOut) : null)
        };
    }

    function createSentenceButton(segment, label, timeline) {
        const normalized = normalizeSegment(
            segment,
            timeline && timeline.endGuard,
            timeline && timeline.sampleAccurate,
            timeline && timeline.fadeOut
        );
        if (!normalized) return null;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'sentence-listen-button';
        button.dataset.audioSrc = normalized.src;
        button.dataset.audioStart = String(normalized.start);
        if (normalized.end != null) button.dataset.audioEnd = String(normalized.end);
        if (normalized.endGuard != null) button.dataset.audioEndGuard = String(normalized.endGuard);
        if (normalized.sampleAccurate) button.dataset.audioSampleAccurate = 'true';
        if (normalized.fadeOut != null) button.dataset.audioFadeOut = String(normalized.fadeOut);
        button.setAttribute('aria-label', label || 'この文を聞く');
        button.setAttribute('aria-pressed', 'false');
        button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zm-2.5-8.77v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z"/></svg>';
        button.addEventListener('click', (event) => play(event, button));
        return button;
    }

    function configureSource(source) {
        source.classList.add('follow-listening-source');
        source.removeAttribute('role');
        source.tabIndex = -1;
        source.removeAttribute('aria-label');
        if (source.dataset.followListeningBound === 'true') return;
        source.dataset.followListeningBound = 'true';
        source.addEventListener('click', (event) => reveal(event, source));
        source.addEventListener('keydown', (event) => keydown(event, source));
    }

    function getSentenceEntries() {
        const sources = [];
        const question = document.getElementById('questionText');
        if (question && question.classList.contains('follow-listening-source')) sources.push(question);
        document.querySelectorAll('#conversationText .follow-listening-source').forEach((source) => sources.push(source));
        return sources.map((source, index) => {
            const button = source.querySelector('.sentence-listen-button');
            source.dataset.followSentenceIndex = String(index);
            if (button) button.dataset.followSentenceIndex = String(index);
            return button ? { source, button } : null;
        }).filter(Boolean);
    }

    function setConsoleStatus(message) {
        const status = document.querySelector('[data-follow-listening-status]');
        if (status) status.textContent = message;
    }

    function syncConsoleUi(options = {}) {
        const entries = getSentenceEntries();
        const count = entries.length;
        const panel = document.getElementById('followListeningConsole');
        const wrapper = document.querySelector('.audio-wrapper');
        const progress = document.querySelector('[data-follow-listening-progress]');
        const previous = document.querySelector('[data-follow-listening-prev]');
        const next = document.querySelector('[data-follow-listening-next]');
        const original = document.querySelector('[data-follow-listening-original]');
        const visibility = document.querySelector('[data-follow-listening-visibility]');
        const speed = document.querySelector('[data-follow-listening-speed]');

        if (count) currentSentenceIndex = Math.max(0, Math.min(count - 1, currentSentenceIndex));
        else currentSentenceIndex = 0;

        entries.forEach(({ source }, index) => {
            const selected = enabled && index === currentSentenceIndex;
            source.classList.toggle('is-follow-listening-current', selected);
            if (enabled) {
                source.setAttribute('role', 'button');
                source.tabIndex = 0;
                source.setAttribute('aria-label', source.classList.contains('is-revealed')
                    ? '原文已显示'
                    : '点击显示原文和译文');
                if (selected) source.setAttribute('aria-current', 'true');
                else source.removeAttribute('aria-current');
            } else {
                source.removeAttribute('role');
                source.removeAttribute('aria-current');
                source.removeAttribute('aria-label');
                source.tabIndex = -1;
            }
        });

        if (panel) panel.hidden = !enabled;
        if (wrapper) wrapper.classList.toggle('is-follow-listening-mode', enabled);
        document.body.classList.toggle('follow-listening-mode', enabled);
        if (progress) progress.textContent = count ? `第 ${currentSentenceIndex + 1} / ${count} 句` : '暂无可播放语句';
        if (previous) previous.disabled = !count || currentSentenceIndex === 0;
        if (next) next.disabled = !count || currentSentenceIndex === count - 1;
        if (speed) {
            const rate = SENTENCE_RATES[sentenceRateIndex];
            speed.textContent = `${rate}×`;
            speed.setAttribute('aria-label', `当前原音速度${rate}倍，点击切换`);
        }

        const current = entries[currentSentenceIndex];
        const isPlaying = Boolean(current && activeButton === current.button);
        if (original) {
            original.classList.toggle('is-playing', isPlaying);
            original.setAttribute('aria-pressed', String(isPlaying));
            const label = original.querySelector('span');
            if (label) label.textContent = isPlaying ? '停止' : '听原音';
        }
        if (visibility) {
            const revealed = Boolean(current && current.source.classList.contains('is-revealed'));
            visibility.classList.toggle('is-revealed', revealed);
            visibility.setAttribute('aria-pressed', String(revealed));
            visibility.setAttribute('aria-label', revealed ? '隐藏当前句原文' : '显示当前句原文');
            const label = visibility.querySelector('span');
            if (label) label.textContent = revealed ? '隐藏原文' : '显示原文';
        }

        if (options.scroll && current) {
            current.source.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function selectSentence(index, options = {}) {
        const entries = getSentenceEntries();
        if (!entries.length) return;
        const nextIndex = Math.max(0, Math.min(entries.length - 1, Number(index) || 0));
        const changed = nextIndex !== currentSentenceIndex;
        if (changed && options.stopPlayback !== false) stop();
        currentSentenceIndex = nextIndex;
        if (changed && options.announce !== false) setConsoleStatus(`已切换到第 ${currentSentenceIndex + 1} 句。`);
        syncConsoleUi({ scroll: options.scroll !== false });
    }

    function adaptQuestion(timeline, key) {
        const questionText = document.getElementById('questionText');
        const questionTrans = document.getElementById('questionTrans');
        if (!questionText || !questionTrans || !timeline || !timeline.question) return;
        if (questionText.dataset.followTimelineKey === key && questionText.querySelector('.follow-listening-mainline')) return;

        const content = questionText.innerHTML;
        const mainline = document.createElement('div');
        mainline.className = 'follow-listening-mainline';
        const contentNode = document.createElement('span');
        contentNode.className = 'follow-listening-content';
        contentNode.innerHTML = content;
        mainline.appendChild(contentNode);
        const button = createSentenceButton(timeline.question, '問題文を聞く', timeline);
        if (button) mainline.appendChild(button);
        questionText.replaceChildren(mainline);
        configureSource(questionText);
        questionText.classList.add('follow-listening-question');
        questionText.dataset.followTimelineKey = key;
        questionTrans.classList.add('follow-listening-translation');
    }

    function adaptDialogue(timeline, key) {
        if (!timeline || !Array.isArray(timeline.lines)) return;
        const lines = Array.from(document.querySelectorAll('#conversationText .conversation-line'));
        lines.forEach((line, index) => {
            const speakerText = line.querySelector('.speaker-text');
            const clip = timeline.lines[index];
            if (!speakerText || !clip || speakerText.dataset.followTimelineKey === key) return;
            const children = Array.from(speakerText.children);
            const textNode = children[0];
            const translationNode = children.find((child) => child.classList.contains('translation')) || children[1];
            if (!textNode) return;

            const source = document.createElement('div');
            configureSource(source);
            const mainline = document.createElement('div');
            mainline.className = 'follow-listening-mainline';
            const contentNode = document.createElement('span');
            contentNode.className = 'follow-listening-content';
            contentNode.innerHTML = textNode.innerHTML;
            mainline.appendChild(contentNode);
            const button = createSentenceButton(clip, `第${index + 1}句を聞く`, timeline);
            if (button) mainline.appendChild(button);
            source.appendChild(mainline);
            if (translationNode && translationNode.innerHTML) {
                const translation = document.createElement('div');
                translation.className = 'translation follow-listening-translation';
                translation.innerHTML = translationNode.innerHTML;
                source.appendChild(translation);
            }
            speakerText.replaceChildren(source);
            speakerText.dataset.followTimelineKey = key;
        });
    }

    function adaptTranscript() {
        if (adapting) return;
        const { key, timeline } = getCurrentTimeline();
        if (!key || !timeline) return;
        // Prime the hidden sentence player as soon as a question is rendered.
        // Every sentence in one question uses the same source file, so this
        // makes metadata available before the first speaker-button click and
        // prevents a cold player from briefly starting at 0:00.
        const preloadClip = timeline.question || (Array.isArray(timeline.lines) && timeline.lines.find(Boolean));
        const normalizedPreloadClip = normalizeSegment(
            preloadClip,
            timeline.endGuard,
            timeline.sampleAccurate,
            timeline.fadeOut
        );
        const preloadAudio = getAudio();
        if (normalizedPreloadClip && preloadAudio) {
            const preloadSrc = new URL(normalizedPreloadClip.src, document.baseURI).href;
            if (preloadAudio.src !== preloadSrc) {
                preloadAudio.src = preloadSrc;
                preloadAudio.load();
            }
        }
        if (currentTimelineKey !== key) {
            stop();
            currentSentenceIndex = 0;
            currentTimelineKey = key;
        }
        adapting = true;
        try {
            adaptQuestion(timeline, key);
            adaptDialogue(timeline, key);
        } finally {
            adapting = false;
        }
        getSentenceEntries();
        syncConsoleUi();
    }

    function scheduleAdaptTranscript() {
        if (renderScheduled) return;
        renderScheduled = true;
        requestAnimationFrame(() => {
            renderScheduled = false;
            adaptTranscript();
        });
    }

    function isSentenceInlineControl(target) {
        if (!(target instanceof Element)) return false;
        return Boolean(target.closest([
            '.sentence-listen-button',
            '[onclick*="showTooltip"]',
            '[data-tooltip]',
            '.keyword',
            '.explain-correct',
            '.explain-wrong',
            'a',
            'button',
            'input',
            'select',
            'textarea'
        ].join(',')));
    }

    function getAnalysisTrigger(target) {
        if (!(target instanceof Element)) return null;
        const direct = target.closest('[onclick*="showTooltip"], [data-tooltip]');
        if (direct) return direct;
        const highlight = target.closest('.highlight-correct, .highlight-wrong');
        return highlight && highlight.querySelector(
            '.explain-correct[onclick*="showTooltip"], .explain-wrong[onclick*="showTooltip"], [data-tooltip]'
        );
    }

    function reveal(event, source) {
        if (!source) return;
        if (event) {
            const analysisTrigger = getAnalysisTrigger(event.target);
            if (analysisTrigger) {
                // The inline tooltip handler has already run when the click
                // originated inside the trigger. Stop here so the page-level
                // "click anywhere to close" handler cannot immediately hide it.
                event.stopPropagation();
                if (!analysisTrigger.contains(event.target)) {
                    event.preventDefault();
                    analysisTrigger.click();
                }
                return;
            }
        }
        if (!enabled) return;
        // Sentence-level reveal must never consume clicks intended for the
        // vocabulary / answer-analysis popovers nested inside the sentence.
        if (event && isSentenceInlineControl(event.target)) {
            event.stopPropagation();
            return;
        }
        const index = Number(source.dataset.followSentenceIndex);
        if (Number.isFinite(index)) selectSentence(index, { scroll: false });
        source.classList.add('is-revealed');
        source.setAttribute('aria-label', '原文已显示');
        setConsoleStatus('当前句原文已显示；点击喇叭仍可单独播放。');
        syncConsoleUi();
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
        syncConsoleUi();
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

    function releasePrecisePlayback() {
        const source = preciseSource;
        const gain = preciseGain;
        preciseSource = null;
        preciseGain = null;
        if (source) {
            source.onended = null;
            try {
                source.stop(0);
            } catch (error) {
                // A one-shot source may already have ended; disconnecting it is sufficient.
            }
            try {
                source.disconnect();
            } catch (error) {
                // Ignore already-disconnected nodes.
            }
        }
        if (gain) {
            try {
                gain.disconnect();
            } catch (error) {
                // Ignore already-disconnected nodes.
            }
        }
    }

    function getPreciseAudioContext() {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return null;
        if (!preciseAudioContext) preciseAudioContext = new AudioContextClass();
        return preciseAudioContext;
    }

    function decodeAudioBuffer(context, arrayBuffer) {
        return new Promise((resolve, reject) => {
            let settled = false;
            const complete = (buffer) => {
                if (settled) return;
                settled = true;
                resolve(buffer);
            };
            const fail = (error) => {
                if (settled) return;
                settled = true;
                reject(error || new Error('音频解码失败'));
            };
            try {
                const result = context.decodeAudioData(arrayBuffer, complete, fail);
                if (result && typeof result.then === 'function') result.then(complete, fail);
            } catch (error) {
                fail(error);
            }
        });
    }

    function getDecodedAudio(context, audioSrc) {
        const resolvedSrc = new URL(audioSrc, document.baseURI).href;
        if (decodedAudioCache.has(resolvedSrc)) return decodedAudioCache.get(resolvedSrc);
        const pending = fetch(resolvedSrc, { credentials: 'same-origin' })
            .then((response) => {
                if (!response.ok) throw new Error(`音频载入失败：${response.status}`);
                return response.arrayBuffer();
            })
            .then((arrayBuffer) => decodeAudioBuffer(context, arrayBuffer))
            .catch((error) => {
                decodedAudioCache.delete(resolvedSrc);
                throw error;
            });
        decodedAudioCache.set(resolvedSrc, pending);
        return pending;
    }

    function getBoundaryEndTime(startTime, endTime, configuredEndGuard) {
        if (!Number.isFinite(endTime)) return endTime;
        const endGuard = Number.isFinite(configuredEndGuard)
            ? Math.max(0, configuredEndGuard)
            : FALLBACK_END_GUARD_SECONDS;
        return Math.max(startTime + 0.03, endTime - endGuard);
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
        releasePrecisePlayback();
        const audio = getAudio();
        if (audio) {
            audio.pause();
            audio.onended = null;
            audio.onerror = null;
        }
        resetButton();
    }

    function startFallbackPlayback(audioSrc, startTime, endTime, boundaryEndTime, token) {
        const audio = getAudio();
        if (!audio || token !== playbackToken) return;
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
            boundaryTimer = window.setTimeout(scheduleBoundaryCheck, Math.max(5, Math.min(remaining * 1000 - 4, 120)));
        };
        const start = () => {
            if (token !== playbackToken) return;
            audio.playbackRate = SENTENCE_RATES[sentenceRateIndex];
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
        const resolvedSrc = new URL(audioSrc, document.baseURI).href;
        if (audio.src !== resolvedSrc) {
            audio.src = resolvedSrc;
            audio.load();
        }
        seekBeforePlayback(audio, startTime, token, start, finish);
    }

    async function startPrecisePlayback(options) {
        const {
            context,
            button,
            audioSrc,
            startTime,
            endTime,
            boundaryEndTime,
            fadeOut,
            token
        } = options;
        try {
            if (context.state === 'suspended') await context.resume();
            const buffer = await getDecodedAudio(context, audioSrc);
            if (token !== playbackToken || activeButton !== button) return;

            const sampleRate = buffer.sampleRate;
            const startFrame = Math.max(0, Math.min(buffer.length, Math.round(startTime * sampleRate)));
            const requestedEnd = Number.isFinite(boundaryEndTime) ? boundaryEndTime : buffer.duration;
            const endFrame = Math.max(startFrame + 1, Math.min(buffer.length, Math.round(requestedEnd * sampleRate)));
            const frameCount = endFrame - startFrame;
            if (frameCount <= 1) throw new Error('单句时间范围无效');

            const source = context.createBufferSource();
            const gain = context.createGain();
            source.buffer = buffer;
            source.playbackRate.value = SENTENCE_RATES[sentenceRateIndex];
            source.connect(gain);
            gain.connect(context.destination);
            preciseSource = source;
            preciseGain = gain;

            const offset = startFrame / sampleRate;
            const duration = frameCount / sampleRate;
            const playbackRate = SENTENCE_RATES[sentenceRateIndex];
            const wallDuration = duration / playbackRate;
            const requestedFade = Number.isFinite(fadeOut) ? Math.max(0, fadeOut) : PRECISE_FADE_SECONDS;
            const fadeDuration = Math.min(requestedFade, wallDuration / 2);
            const startAt = context.currentTime + 0.004;
            gain.gain.cancelScheduledValues(startAt);
            gain.gain.setValueAtTime(1, startAt);
            if (fadeDuration > 0) {
                gain.gain.setValueAtTime(1, startAt + wallDuration - fadeDuration);
                gain.gain.linearRampToValueAtTime(0.0001, startAt + wallDuration);
            }

            source.onended = () => {
                if (token !== playbackToken || preciseSource !== source) return;
                preciseSource = null;
                preciseGain = null;
                source.disconnect();
                gain.disconnect();
                resetButton();
            };
            source.start(startAt, offset, duration);
        } catch (error) {
            if (token !== playbackToken || activeButton !== button) return;
            releasePrecisePlayback();
            startFallbackPlayback(audioSrc, startTime, endTime, boundaryEndTime, token);
        }
    }

    function play(event, button) {
        event.preventDefault();
        event.stopPropagation();
        const index = Number(button.dataset.followSentenceIndex);
        if (Number.isFinite(index) && index !== currentSentenceIndex) {
            selectSentence(index, { scroll: false });
        }
        playButton(button);
    }

    function playButton(button) {
        const audioSrc = button.dataset.audioSrc;
        const startTime = Number(button.dataset.audioStart || 0);
        const endTime = Number(button.dataset.audioEnd);
        const configuredEndGuard = Number(button.dataset.audioEndGuard);
        const sampleAccurate = button.dataset.audioSampleAccurate === 'true';
        const fadeOut = Number(button.dataset.audioFadeOut);
        if (!audioSrc || !getAudio()) return;
        if (activeButton === button) {
            stop();
            return;
        }

        stop();
        activeButton = button;
        const token = playbackToken;
        const boundaryEndTime = getBoundaryEndTime(startTime, endTime, configuredEndGuard);
        button.classList.add('is-playing');
        button.setAttribute('aria-pressed', 'true');
        setConsoleStatus(`正在播放第 ${currentSentenceIndex + 1} 句原音。`);
        syncConsoleUi();

        const context = sampleAccurate ? getPreciseAudioContext() : null;
        if (context && Number.isFinite(endTime)) {
            startPrecisePlayback({
                context,
                button,
                audioSrc,
                startTime,
                endTime,
                boundaryEndTime,
                fadeOut,
                token
            });
            return;
        }
        startFallbackPlayback(audioSrc, startTime, endTime, boundaryEndTime, token);
    }

    function playCurrentSentence() {
        const entry = getSentenceEntries()[currentSentenceIndex];
        if (!entry) return;
        playButton(entry.button);
    }

    function moveSentence(delta) {
        selectSentence(currentSentenceIndex + delta, { scroll: true });
    }

    function toggleCurrentSentenceVisibility() {
        const entry = getSentenceEntries()[currentSentenceIndex];
        if (!entry) return;
        const revealed = entry.source.classList.toggle('is-revealed');
        entry.source.setAttribute('aria-label', revealed ? '原文已显示' : '点击显示原文和译文');
        setConsoleStatus(revealed ? '当前句原文已显示。' : '当前句原文已隐藏，可继续盲听。');
        syncConsoleUi();
    }

    function cycleSentenceRate() {
        sentenceRateIndex = (sentenceRateIndex + 1) % SENTENCE_RATES.length;
        const rate = SENTENCE_RATES[sentenceRateIndex];
        const audio = getAudio();
        if (audio) audio.playbackRate = rate;
        setConsoleStatus(`原音速度已切换为 ${rate} 倍。`);
        syncConsoleUi();
    }

    function setEnabled(next) {
        enabled = Boolean(next && getSentenceEntries().length);
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
        if (enabled) {
            const mainAudio = document.getElementById('audioElement');
            if (mainAudio) mainAudio.pause();
            setConsoleStatus('逐句选择已开启：可听原音、切换语句或显示当前句。');
        } else {
            stop();
        }
        syncConsoleUi();
    }

    function toggle() {
        setEnabled(!enabled);
    }

    function syncMode() {
        const container = document.getElementById('appContainer');
        const toggleButton = document.getElementById('followListeningToggle');
        const explanation = Boolean(container && container.classList.contains('mode-explanation'));
        const available = Boolean(getCurrentTimeline().timeline && getSentenceEntries().length);
        if (!explanation || !available) {
            setEnabled(false);
            if (toggleButton) toggleButton.hidden = true;
        } else if (toggleButton) {
            toggleButton.hidden = false;
        }
    }

    function ensureUi() {
        const unifiedRight = document.querySelector('.kiki-unified-header-right');
        const sourceHeader = document.querySelector(
            'body > header:not(.kiki-unified-header), .site-header:not(.kiki-unified-header), header:not(.kiki-unified-header)'
        );
        let button = document.getElementById('followListeningToggle');

        if (!button) {
            button = document.createElement('button');
            button.type = 'button';
            button.id = 'followListeningToggle';
            button.className = 'follow-listening-toggle';
            button.hidden = true;
            button.textContent = '精听模式';
            button.setAttribute('aria-pressed', 'false');
            button.addEventListener('click', toggle);
        }

        if (unifiedRight) {
            let slot = unifiedRight.querySelector('[data-kiki-follow-listening-slot]');
            if (!slot) {
                slot = document.createElement('div');
                slot.className = 'header-right-slot';
                slot.setAttribute('data-kiki-header-utility', '');
                slot.setAttribute('data-kiki-follow-listening-slot', '');
                unifiedRight.appendChild(slot);
            }
            if (!slot.contains(button)) slot.appendChild(button);
        } else if (sourceHeader && !sourceHeader.contains(button)) {
            const placeholder = Array.from(sourceHeader.children).find((child) => child.matches('div[style*="width"]'));
            const slot = placeholder || document.createElement('div');
            slot.removeAttribute('style');
            slot.className = 'header-right-slot';
            slot.setAttribute('data-kiki-header-utility', '');
            slot.setAttribute('data-kiki-follow-listening-slot', '');
            if (!slot.parentNode) sourceHeader.appendChild(slot);
            slot.appendChild(button);
        }
        if (!document.getElementById('sentenceAudioElement')) {
            const audio = document.createElement('audio');
            audio.id = 'sentenceAudioElement';
            audio.preload = 'auto';
            audio.hidden = true;
            document.body.appendChild(audio);
        }

        const audioWrapper = document.querySelector('.audio-wrapper');
        if (audioWrapper && !document.getElementById('followListeningConsole')) {
            const consolePanel = document.createElement('section');
            consolePanel.id = 'followListeningConsole';
            consolePanel.className = 'follow-listening-console';
            consolePanel.hidden = true;
            consolePanel.setAttribute('aria-label', '逐句精听控制台');
            consolePanel.innerHTML = `
                <div class="follow-listening-console-head">
                    <div class="follow-listening-console-summary">
                        <span class="follow-listening-console-kicker">逐句精听</span>
                        <strong data-follow-listening-progress>第 1 句</strong>
                        <span class="follow-listening-console-status" data-follow-listening-status aria-live="polite">逐句选择已开启。</span>
                    </div>
                    <button class="follow-listening-console-exit" type="button" data-follow-listening-exit>退出</button>
                </div>
                <div class="follow-listening-console-controls">
                    <button class="follow-listening-console-icon" type="button" data-follow-listening-prev aria-label="上一句" title="上一句">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button class="follow-listening-console-command" type="button" data-follow-listening-original aria-pressed="false">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><span>听原音</span>
                    </button>
                    <button class="follow-listening-console-speed" type="button" data-follow-listening-speed>1×</button>
                    <button class="follow-listening-console-command follow-listening-console-visibility" type="button" data-follow-listening-visibility aria-pressed="false">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg><span>显示原文</span>
                    </button>
                    <button class="follow-listening-console-icon" type="button" data-follow-listening-next aria-label="下一句" title="下一句">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            `;
            consolePanel.querySelector('[data-follow-listening-prev]').addEventListener('click', () => moveSentence(-1));
            consolePanel.querySelector('[data-follow-listening-next]').addEventListener('click', () => moveSentence(1));
            consolePanel.querySelector('[data-follow-listening-original]').addEventListener('click', playCurrentSentence);
            consolePanel.querySelector('[data-follow-listening-speed]').addEventListener('click', cycleSentenceRate);
            consolePanel.querySelector('[data-follow-listening-visibility]').addEventListener('click', toggleCurrentSentenceVisibility);
            consolePanel.querySelector('[data-follow-listening-exit]').addEventListener('click', () => setEnabled(false));
            audioWrapper.appendChild(consolePanel);
        }
    }

    function refreshHeaderUi() {
        ensureUi();
        syncMode();
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

    function initialize() {
        ensureUi();
        bindPlayer();
        adaptTranscript();
        syncMode();

        const conversation = document.getElementById('conversationText');
        const question = document.getElementById('questionText');
        const container = document.getElementById('appContainer');
        if (conversation || question) {
            const transcriptObserver = new MutationObserver(scheduleAdaptTranscript);
            if (conversation) transcriptObserver.observe(conversation, { childList: true, subtree: true });
            if (question) transcriptObserver.observe(question, { childList: true, subtree: true });
        }
        if (container) {
            const modeObserver = new MutationObserver(syncMode);
            modeObserver.observe(container, { attributes: true, attributeFilter: ['class'] });
        }
        window.setTimeout(() => {
            ensureUi();
            bindPlayer();
            adaptTranscript();
            syncMode();
        }, 300);
    }

    window.KijiListeningFollow = {
        toggle,
        stop,
        adaptTranscript,
        syncMode,
        selectSentence,
        playCurrentSentence,
        toggleCurrentSentenceVisibility
    };
    window.addEventListener('kiki-unified-header:ready', refreshHeaderUi);
    document.addEventListener('DOMContentLoaded', initialize);
})();
