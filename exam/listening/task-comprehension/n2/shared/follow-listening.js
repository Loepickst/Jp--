(function () {
    'use strict';

    let enabled = false;
    let activeButton = null;
    let sentenceAudio = null;
    let playbackToken = 0;
    let boundaryFrame = 0;
    let boundaryTimer = 0;
    let adapting = false;
    let renderScheduled = false;
    const FALLBACK_END_GUARD_SECONDS = 0.06;

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
            timeline: (window.KijiN2TaskTimelineMap || {})[key] || null
        };
    }

    function normalizeSegment(segment, inheritedEndGuard) {
        if (!segment) return null;
        if (typeof segment === 'string') return { src: segment, start: 0, end: null, endGuard: null };
        const start = Number(segment.start);
        const end = Number(segment.end);
        const ownEndGuard = Number(segment.endGuard);
        const sharedEndGuard = Number(inheritedEndGuard);
        if (!segment.src || !Number.isFinite(start)) return null;
        return {
            src: segment.src,
            start: Math.max(0, start),
            end: Number.isFinite(end) && end > start ? end : null,
            endGuard: Number.isFinite(ownEndGuard)
                ? Math.max(0, ownEndGuard)
                : (Number.isFinite(sharedEndGuard) ? Math.max(0, sharedEndGuard) : null)
        };
    }

    function createSentenceButton(segment, label, inheritedEndGuard) {
        const normalized = normalizeSegment(segment, inheritedEndGuard);
        if (!normalized) return null;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'sentence-listen-button';
        button.dataset.audioSrc = normalized.src;
        button.dataset.audioStart = String(normalized.start);
        if (normalized.end != null) button.dataset.audioEnd = String(normalized.end);
        if (normalized.endGuard != null) button.dataset.audioEndGuard = String(normalized.endGuard);
        button.setAttribute('aria-label', label || 'この文を聞く');
        button.setAttribute('aria-pressed', 'false');
        button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zm-2.5-8.77v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z"/></svg>';
        button.addEventListener('click', (event) => play(event, button));
        return button;
    }

    function configureSource(source) {
        source.classList.add('follow-listening-source');
        source.setAttribute('role', 'button');
        source.tabIndex = 0;
        source.setAttribute('aria-label', '点击显示原文和译文');
        if (source.dataset.followListeningBound === 'true') return;
        source.dataset.followListeningBound = 'true';
        source.addEventListener('click', (event) => reveal(event, source));
        source.addEventListener('keydown', (event) => keydown(event, source));
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
        const button = createSentenceButton(timeline.question, '問題文を聞く', timeline.endGuard);
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
            const button = createSentenceButton(clip, `第${index + 1}句を聞く`, timeline.endGuard);
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
        const normalizedPreloadClip = normalizeSegment(preloadClip, timeline.endGuard);
        const preloadAudio = getAudio();
        if (normalizedPreloadClip && preloadAudio) {
            const preloadSrc = new URL(normalizedPreloadClip.src, document.baseURI).href;
            if (preloadAudio.src !== preloadSrc) {
                preloadAudio.src = preloadSrc;
                preloadAudio.load();
            }
        }
        adapting = true;
        try {
            adaptQuestion(timeline, key);
            adaptDialogue(timeline, key);
        } finally {
            adapting = false;
        }
    }

    function scheduleAdaptTranscript() {
        if (renderScheduled) return;
        renderScheduled = true;
        requestAnimationFrame(() => {
            renderScheduled = false;
            adaptTranscript();
        });
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

    function stop() {
        playbackToken += 1;
        clearBoundaryMonitor();
        const audio = getAudio();
        if (audio) {
            audio.pause();
            if (Number.isFinite(audio.duration)) audio.currentTime = 0;
        }
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
            boundaryTimer = window.setTimeout(scheduleBoundaryCheck, Math.max(5, Math.min(remaining * 1000 - 4, 120)));
        };
        const start = () => {
            if (token !== playbackToken) return;
            try {
                audio.currentTime = Math.max(0, startTime);
            } catch (error) {
                finish();
                return;
            }
            audio.playbackRate = 1;
            audio.muted = false;
            audio.volume = 1;
            if (Number.isFinite(endTime)) {
                const endGuard = Number.isFinite(configuredEndGuard)
                    ? Math.max(0, configuredEndGuard)
                    : FALLBACK_END_GUARD_SECONDS;
                boundaryEndTime = Math.max(startTime + 0.03, endTime - endGuard);
            }
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
        if (audio.readyState < HTMLMediaElement.HAVE_METADATA) {
            audio.addEventListener('loadedmetadata', start, { once: true });
            return;
        }
        start();
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

    function syncMode() {
        const container = document.getElementById('appContainer');
        const toggleButton = document.getElementById('followListeningToggle');
        const explanation = Boolean(container && container.classList.contains('mode-explanation'));
        if (!explanation) {
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

    window.KijiListeningFollow = { toggle, stop, adaptTranscript, syncMode };
    window.addEventListener('kiki-unified-header:ready', refreshHeaderUi);
    document.addEventListener('DOMContentLoaded', initialize);
})();
