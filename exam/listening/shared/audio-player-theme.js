(function() {
    const DEFAULT_SKIP_SECONDS = 6;

    const playerState = {
        initialized: false,
        playbackSpeed: 1.0,
        isLooping: false,
        skipSeconds: DEFAULT_SKIP_SECONDS
    };
    let practicePetController = null;
    let listeningPetAssetsPromise = null;
    let listeningPetHooksInstalled = false;
    let listeningLayoutInstalled = false;

    function installListeningHighlightAlignmentFix() {
        if (document.getElementById('listening-highlight-alignment-fix')) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'listening-highlight-alignment-fix';
        style.textContent = `
            .mode-explanation .highlight-correct,
            .mode-explanation .highlight-wrong {
                display: inline !important;
                padding: 0 0.14em !important;
                border-bottom: 0 !important;
                border-radius: 2px !important;
                line-height: inherit !important;
                font-weight: 700 !important;
                -webkit-box-decoration-break: clone;
                box-decoration-break: clone;
            }

            .mode-explanation .highlight-correct {
                background: linear-gradient(transparent 52%, rgba(129, 199, 132, 0.62) 52%) !important;
            }

            .mode-explanation .highlight-wrong {
                background: linear-gradient(transparent 52%, rgba(244, 143, 177, 0.62) 52%) !important;
            }

            .mode-explanation .highlight-correct .keyword,
            .mode-explanation .highlight-wrong .keyword,
            .mode-explanation .highlight-correct .explain-correct,
            .mode-explanation .highlight-wrong .explain-wrong {
                display: inline !important;
            }

            .mode-explanation .opt-tag {
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                box-sizing: border-box !important;
                width: auto !important;
                min-width: 1.35em !important;
                height: 1.35em !important;
                padding: 0 0.22em !important;
                margin: 0 0.28em 0 0.12em !important;
                line-height: 1 !important;
                vertical-align: -0.16em !important;
                position: relative !important;
                top: 0 !important;
                text-align: center !important;
                font-size: 0.72em !important;
                font-weight: 900 !important;
                text-decoration: none !important;
                white-space: nowrap !important;
            }
        `;

        (document.head || document.documentElement).appendChild(style);
    }

    installListeningHighlightAlignmentFix();

    function detectListeningPracticeSubType() {
        const path = String(window.location.pathname || '').toLowerCase();
        if (path.includes('/immediate-response/')) return 'immediate';
        if (path.includes('/task-comprehension/')) return 'task';
        if (path.includes('/summary-comprehension/')) return 'summary';
        if (path.includes('/point-comprehension/')) return 'point';
        if (path.includes('/integrated-comprehension/')) return 'integrated';
        return 'listening';
    }

    function ensureListeningPetAssets() {
        if (window.HomePetSystem) {
            return Promise.resolve(window.HomePetSystem);
        }

        if (listeningPetAssetsPromise) {
            return listeningPetAssetsPromise;
        }

        listeningPetAssetsPromise = new Promise((resolve, reject) => {
            const cssHref = new URL('../../../../../shared/home-pet.css', document.baseURI).href;
            const scriptSrc = new URL('../../../../../shared/home-pet.js', document.baseURI).href;

            if (!document.querySelector(`link[data-listening-pet-css="true"][href="${cssHref}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = cssHref;
                link.dataset.listeningPetCss = 'true';
                document.head.appendChild(link);
            }

            const existingScript = document.querySelector(`script[data-listening-pet-js="true"][src="${scriptSrc}"]`);
            if (existingScript) {
                existingScript.addEventListener('load', () => resolve(window.HomePetSystem), { once: true });
                existingScript.addEventListener('error', reject, { once: true });
                return;
            }

            const script = document.createElement('script');
            script.src = scriptSrc;
            script.dataset.listeningPetJs = 'true';
            script.addEventListener('load', () => resolve(window.HomePetSystem), { once: true });
            script.addEventListener('error', reject, { once: true });
            document.head.appendChild(script);
        });

        return listeningPetAssetsPromise;
    }

    function ensureListeningPetMounted() {
        return ensureListeningPetAssets()
            .then((petSystem) => {
                if (!petSystem || practicePetController) {
                    return practicePetController;
                }

                practicePetController = petSystem.initNonHomeSurface({
                    mountSelector: '#home-pet-root',
                    pageShellSelector: '.practice-container, .card-shell, .question-block, .container, body',
                    surfaceType: 'practice',
                    activeSection: 'exam',
                    practiceDetail: {
                        module: 'listening',
                        subType: detectListeningPracticeSubType()
                    }
                });
                return practicePetController;
            })
            .catch((error) => {
                console.warn('Listening pet init failed:', error);
                return null;
            });
    }

    function reactListeningPet(phase, extra = {}) {
        if (!practicePetController || typeof practicePetController.reactToPractice !== 'function') {
            return;
        }

        practicePetController.reactToPractice({
            module: 'listening',
            subType: detectListeningPracticeSubType(),
            phase,
            ...extra
        });
    }

    function installListeningPracticeHooks() {
        if (listeningPetHooksInstalled) {
            return;
        }

        const wrapFunction = (name, handler) => {
            if (typeof window[name] !== 'function') {
                return;
            }

            const original = window[name];
            window[name] = function(...args) {
                return handler.call(this, original, args);
            };
        };

        wrapFunction('renderQuestion', function(original, args) {
            const result = original.apply(this, args);
            window.setTimeout(() => {
                refreshListeningPracticeLayout();
                setListeningGuideMessage('thinking');
                const questionIndex = getListeningQuestionPosition().current;
                reactListeningPet('enter', { questionIndex });
            }, 0);
            return result;
        });

        wrapFunction('checkAnswer', function(original, args) {
            let isCorrect = false;
            let hasSelection = false;
            try {
                const selected = document.querySelector('#appContainer .options-list li.selected');
                if (selected) {
                    hasSelection = true;
                    isCorrect = selected.classList.contains('correct-answer');
                }
            } catch (error) {
                console.warn('Listening pet answer inspection failed:', error);
            }

            const result = original.apply(this, args);
            const questionPosition = getListeningQuestionPosition();
            const questionIndex = questionPosition.current;

            window.setTimeout(refreshListeningPracticeLayout, 0);

            if (hasSelection) {
                setListeningGuideMessage(isCorrect ? 'correct' : 'wrong');
                reactListeningPet(isCorrect ? 'answer_correct' : 'answer_wrong', { questionIndex });
                const total = questionPosition.total;
                if (total > 0 && questionIndex === total) {
                    window.setTimeout(() => {
                        reactListeningPet('clear', { questionIndex });
                    }, 1050);
                }
            }

            return result;
        });

        listeningPetHooksInstalled = true;
    }

    function detectListeningLevel() {
        const pathMatch = String(window.location.pathname || '').match(/\/n([123])\//i);
        if (pathMatch) {
            return `N${pathMatch[1]}`;
        }

        const titleMatch = String(document.title || '').match(/\bN([123])\b/i);
        return titleMatch ? `N${titleMatch[1]}` : 'N1';
    }

    function getListeningQuestionPosition() {
        const select = document.getElementById('questionSelect');
        if (!select) {
            return { current: 1, total: 1 };
        }

        const current = Math.max(1, Number(select.selectedIndex) + 1);
        const total = Math.max(1, Number(select.options.length) || 1);
        return { current, total };
    }

    function buildListeningIntro(labelText) {
        const level = detectListeningLevel();
        const queryYear = new URLSearchParams(window.location.search).get('year');
        const queryYearMatch = String(queryYear || '').match(/^(\d{4})-(\d{1,2})$/);
        const yearLabel = queryYearMatch
            ? `${queryYearMatch[1]}年${Number(queryYearMatch[2])}月`
            : '';
        const normalizedLabel = String(labelText || '')
            .replace(/\s*\(N[123]\)\s*/gi, '')
            .replace(/\s*✔.*$/, '')
            .trim();
        const displayLabel = yearLabel || (normalizedLabel && !/理解|応答|聴解|練習/.test(normalizedLabel)
            ? normalizedLabel
            : '年度练习');

        const intro = document.createElement('section');
        intro.className = 'listening-page-intro';
        intro.innerHTML = `
            <div>
                <p class="listening-page-eyebrow">日本語能力試験 ・ ${level} ・ 年度练习</p>
                <h2 class="listening-page-title">[${level}] ${displayLabel}</h2>
            </div>
            <div class="listening-progress" aria-label="题目进度">
                <div class="listening-progress-meta"><span>问题</span><strong>1</strong><span>/</span><span class="listening-progress-total">1</span></div>
                <div class="listening-progress-track"><span class="listening-progress-value"></span></div>
            </div>
        `;
        return intro;
    }

    function ensureListeningMentor(cardHeader) {
        if (!cardHeader || cardHeader.querySelector('.listening-mentor-note')) {
            return;
        }

        const note = document.createElement('div');
        note.className = 'listening-mentor-note';
        const avatarUrl = new URL('../../../../../assets/listening/music-duo-cover-longhair-headphones-v3.png', document.baseURI).href;
        note.innerHTML = `
            <span class="listening-mentor-avatar"><img src="${avatarUrl}" alt="一二三"></span>
            <span data-listening-guide-text>先听清条件，再看图判断吧。</span>
        `;
        cardHeader.appendChild(note);
    }

    function ensureListeningCardFooter(container) {
        const content = container && container.querySelector('.content-wrapper');
        if (!content || content.querySelector('.listening-card-footer')) {
            return;
        }

        const footer = document.createElement('div');
        footer.className = 'listening-card-footer';
        footer.innerHTML = `
            <span>选择答案后进入反馈</span>
            <button type="button" class="listening-skip-button">暂时跳过&nbsp;›</button>
        `;
        const skip = footer.querySelector('.listening-skip-button');
        if (skip) {
            skip.addEventListener('click', () => {
                if (typeof window.nextQuestion === 'function') {
                    window.nextQuestion();
                }
            });
        }
        content.appendChild(footer);
    }

    function setListeningGuideMessage(state) {
        const target = document.querySelector('[data-listening-guide-text]');
        if (!target) {
            return;
        }

        const messages = {
            thinking: '先听清条件，再判断彼此的关系吧。',
            correct: '节奏抓得很准，继续保持。',
            wrong: '差一点，再听一次关键条件吧。'
        };
        target.textContent = messages[state] || messages.thinking;
    }

    function refreshListeningPracticeLayout() {
        const position = getListeningQuestionPosition();
        const questionSelect = document.getElementById('questionSelect');
        if (questionSelect) {
            Array.from(questionSelect.options).forEach((option, index) => {
                option.textContent = `${index + 1}番`;
            });
        }
        const intro = document.querySelector('.listening-page-intro');
        if (intro) {
            const current = intro.querySelector('.listening-progress-meta strong');
            const total = intro.querySelector('.listening-progress-total');
            const bar = intro.querySelector('.listening-progress-value');
            if (current) current.textContent = String(position.current);
            if (total) total.textContent = String(position.total);
            if (bar) bar.style.width = `${Math.min(100, (position.current / position.total) * 100)}%`;
        }

        const footerMessage = document.querySelector('.listening-card-footer > span');
        if (footerMessage) {
            footerMessage.textContent = document.getElementById('appContainer')?.classList.contains('mode-explanation')
                ? '解析已展开，可继续下一题'
                : '选择答案后进入反馈';
        }

        document.querySelectorAll('.options-list .option-text').forEach((optionText) => {
            if (optionText.dataset.listeningNumberNormalized === 'true') {
                return;
            }

            const walker = document.createTreeWalker(optionText, NodeFilter.SHOW_TEXT);
            let node = walker.nextNode();
            while (node) {
                if (/\S/.test(node.nodeValue || '')) {
                    node.nodeValue = String(node.nodeValue || '').replace(/^\s*\d+[.．、]\s*/, '');
                    break;
                }
                node = walker.nextNode();
            }
            optionText.dataset.listeningNumberNormalized = 'true';
        });
    }

    function ensureListeningPracticeLayout() {
        const container = document.querySelector('.practice-container');
        if (!container) {
            return;
        }

        const subType = detectListeningPracticeSubType();
        // 综合理解的两道子问题在正式试卷中会明确给出选项；
        // 只有概要理解和即时应答需要在作答阶段隐藏选项正文。
        const audioOnlyOptionTypes = new Set(['summary', 'immediate']);

        document.body.classList.add('listening-practice-redesign');
        document.body.dataset.listeningPracticeType = subType;
        document.body.classList.toggle('listening-options-audio-only', audioOnlyOptionTypes.has(subType));
        document.body.classList.toggle('listening-image-explanation-only', subType === 'immediate');
        const header = document.querySelector('body > header');
        const yearSource = header && header.querySelector('#yearLabel');
        const titleTarget = header && (
            header.querySelector('.kiki-unified-header-title') ||
            header.querySelector('h1:not(#yearLabel)') ||
            yearSource
        );
        const originalLabel = yearSource ? yearSource.textContent : (titleTarget ? titleTarget.textContent : document.title);
        const level = detectListeningLevel();

        if (header) {
            const back = header.querySelector('.back-btn');
            if (back) {
                back.href = new URL('../index.html?browse=year', window.location.href).href;
                back.setAttribute('aria-label', '年度一覧へ戻る');
                back.setAttribute('title', '年度一覧へ戻る');
                back.innerHTML = `
                    <svg class="kiki-unified-back-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"></path></svg>
                    <span class="kiki-unified-back-label">年度一覧へ戻る</span>
                    <span class="kiki-unified-back-label-mobile" aria-hidden="true">戻る</span>
                `;
            }
            if (yearSource && yearSource !== titleTarget) {
                yearSource.dataset.listeningSourceLabel = 'true';
            }
            if (titleTarget) {
                titleTarget.classList.add('listening-header-title');
                titleTarget.textContent = `${level} 聴解特訓`;
            }
        }

        if (!document.querySelector('.listening-page-intro')) {
            container.insertAdjacentElement('beforebegin', buildListeningIntro(originalLabel));
        }

        ensureListeningMentor(container.querySelector('.card-header'));
        ensureListeningCardFooter(container);
        if (container.dataset.listeningLayoutObserver !== 'true') {
            const observer = new MutationObserver((mutations) => {
                if (mutations.some((mutation) => mutation.type === 'attributes' && mutation.attributeName === 'class')) {
                    refreshListeningPracticeLayout();
                }
            });
            observer.observe(container, { attributes: true, attributeFilter: ['class'] });
            container.dataset.listeningLayoutObserver = 'true';
        }
        refreshListeningPracticeLayout();
        listeningLayoutInstalled = true;
    }

    const playIcon = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    const pauseIcon = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

    function getSkipIcon(direction, seconds) {
        const text = String(seconds);

        if (direction === 'rewind') {
            return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><text x="12" y="16.5" font-size="8.5" font-weight="bold" font-family="sans-serif" stroke-width="0" fill="currentColor" text-anchor="middle">${text}</text></svg>`;
        }

        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><text x="12" y="16.5" font-size="8.5" font-weight="bold" font-family="sans-serif" stroke-width="0" fill="currentColor" text-anchor="middle">${text}</text></svg>`;
    }

    function getRefs() {
        return {
            audio: document.getElementById('audioElement'),
            playBtn: document.getElementById('playBtn'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            rewindBtn: document.getElementById('rewindBtn'),
            forwardBtn: document.getElementById('forwardBtn'),
            loopBtn: document.getElementById('loopBtn'),
            speedBtn: document.getElementById('speedBtn'),
            trackTitle: document.getElementById('trackTitle'),
            trackSubtitle: document.getElementById('trackSubtitle'),
            progressContainer: document.getElementById('progressContainer'),
            progressBar: document.getElementById('progressBar'),
            timeCurrent: document.getElementById('timeCurrent'),
            timeDurationDesktop: document.getElementById('timeDurationDesktop'),
            timeDurationMobile: document.getElementById('timeDurationMobile')
        };
    }

    function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) {
            return '0:00';
        }

        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    function setPlayButton(refs, isPlaying) {
        if (refs.playBtn) {
            refs.playBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
        }
    }

    function syncLoopState(refs) {
        if (!refs.audio || !refs.loopBtn) {
            return;
        }

        refs.audio.loop = playerState.isLooping;
        refs.loopBtn.classList.toggle('active', playerState.isLooping);
    }

    function syncSpeedState(refs) {
        if (!refs.audio || !refs.speedBtn) {
            return;
        }

        refs.audio.playbackRate = playerState.playbackSpeed;
        refs.speedBtn.textContent = playerState.playbackSpeed === 1.0 ? '1.0x' : '0.75x';
    }

    function syncSkipButtons(refs) {
        const skipSeconds = Number.isFinite(playerState.skipSeconds) && playerState.skipSeconds > 0
            ? playerState.skipSeconds
            : DEFAULT_SKIP_SECONDS;

        if (refs.rewindBtn) {
            refs.rewindBtn.title = `${skipSeconds}秒戻る (退回${skipSeconds}秒)`;
            refs.rewindBtn.setAttribute('aria-label', `${skipSeconds}秒戻る`);
            refs.rewindBtn.innerHTML = getSkipIcon('rewind', skipSeconds);
        }

        if (refs.forwardBtn) {
            refs.forwardBtn.title = `${skipSeconds}秒進む (快进${skipSeconds}秒)`;
            refs.forwardBtn.setAttribute('aria-label', `${skipSeconds}秒進む`);
            refs.forwardBtn.innerHTML = getSkipIcon('forward', skipSeconds);
        }
    }

    function resetPlayerUi(refs) {
        if (refs.progressBar) {
            refs.progressBar.style.width = '0%';
        }

        if (refs.timeCurrent) {
            refs.timeCurrent.textContent = '0:00';
        }

        if (refs.timeDurationDesktop) {
            refs.timeDurationDesktop.textContent = '0:00';
        }

        if (refs.timeDurationMobile) {
            refs.timeDurationMobile.textContent = '-0:00';
        }

        setPlayButton(refs, false);
    }

    function updateTimeDisplay(refs) {
        if (!refs.audio) {
            return;
        }

        const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
        const currentTime = Number.isFinite(refs.audio.currentTime) ? refs.audio.currentTime : 0;
        const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

        if (refs.progressBar) {
            refs.progressBar.style.width = `${progress}%`;
        }

        if (refs.timeCurrent) {
            refs.timeCurrent.textContent = formatTime(currentTime);
        }

        if (refs.timeDurationDesktop) {
            refs.timeDurationDesktop.textContent = formatTime(duration);
        }

        if (refs.timeDurationMobile) {
            refs.timeDurationMobile.textContent = `-${formatTime(Math.max(0, duration - currentTime))}`;
        }
    }

    function normalizeAudioSrc(audioSrc) {
        if (!audioSrc) {
            return '';
        }

        return new URL(audioSrc, document.baseURI).href;
    }

    window.setupListeningPlayer = function setupListeningPlayer(options) {
        const refs = getRefs();
        const subtitle = options && typeof options.subtitle === 'string'
            ? options.subtitle
            : document.title.replace(/\s*\((N1|N2|N3)\)\s*$/, '');
        const requestedSkipSeconds = Number(options && options.skipSeconds);

        if (!refs.audio) {
            return;
        }

        playerState.skipSeconds = Number.isFinite(requestedSkipSeconds) && requestedSkipSeconds > 0
            ? requestedSkipSeconds
            : DEFAULT_SKIP_SECONDS;

        if (refs.trackSubtitle) {
            refs.trackSubtitle.textContent = subtitle;
        }

        if (playerState.initialized) {
            syncLoopState(refs);
            syncSpeedState(refs);
            syncSkipButtons(refs);
            return;
        }

        playerState.initialized = true;
        resetPlayerUi(refs);
        syncLoopState(refs);
        syncSpeedState(refs);
        syncSkipButtons(refs);

        if (refs.playBtn) {
            refs.playBtn.addEventListener('click', () => {
                if (!refs.audio.getAttribute('src')) {
                    return;
                }

                if (refs.audio.paused) {
                    const playPromise = refs.audio.play();
                    if (playPromise && typeof playPromise.then === 'function') {
                        playPromise.catch((error) => {
                            console.warn('音频播放失败，找不到相关文件源或不支持的格式:', error);
                            setPlayButton(refs, false);
                        });
                    }
                } else {
                    refs.audio.pause();
                }
            });
        }

        refs.audio.addEventListener('play', () => {
            setPlayButton(refs, true);
        });

        refs.audio.addEventListener('pause', () => {
            setPlayButton(refs, false);
        });

        refs.audio.addEventListener('timeupdate', () => {
            updateTimeDisplay(refs);
        });

        if (refs.progressContainer) {
            refs.progressContainer.addEventListener('click', (event) => {
                const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
                if (duration <= 0) {
                    return;
                }

                const rect = refs.progressContainer.getBoundingClientRect();
                const offset = Math.min(Math.max(0, event.clientX - rect.left), rect.width);
                refs.audio.currentTime = (offset / rect.width) * duration;
            });
        }

        refs.audio.addEventListener('loadedmetadata', () => {
            if (refs.timeCurrent) {
                refs.timeCurrent.textContent = '0:00';
            }

            const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
            if (refs.timeDurationDesktop) {
                refs.timeDurationDesktop.textContent = formatTime(duration);
            }

            if (refs.timeDurationMobile) {
                refs.timeDurationMobile.textContent = `-${formatTime(duration)}`;
            }

            syncSpeedState(refs);
            syncLoopState(refs);
        });

        refs.audio.addEventListener('ended', () => {
            if (!refs.audio.loop) {
                setPlayButton(refs, false);
                if (refs.progressBar) {
                    refs.progressBar.style.width = '0%';
                }
            }
        });

        if (refs.rewindBtn) {
            refs.rewindBtn.addEventListener('click', () => {
                refs.audio.currentTime = Math.max(0, refs.audio.currentTime - playerState.skipSeconds);
            });
        }

        if (refs.forwardBtn) {
            refs.forwardBtn.addEventListener('click', () => {
                const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
                refs.audio.currentTime = Math.min(duration, refs.audio.currentTime + playerState.skipSeconds);
            });
        }

        if (refs.loopBtn) {
            refs.loopBtn.addEventListener('click', () => {
                playerState.isLooping = !playerState.isLooping;
                syncLoopState(refs);
            });
        }

        if (refs.speedBtn) {
            refs.speedBtn.addEventListener('click', () => {
                playerState.playbackSpeed = playerState.playbackSpeed === 1.0 ? 0.75 : 1.0;
                syncSpeedState(refs);
            });
        }
    };

    window.updateListeningPlayer = function updateListeningPlayer(config) {
        const refs = getRefs();
        if (!refs.audio) {
            return;
        }

        const title = config && config.title ? config.title : '';
        const audioSrc = config && typeof config.audioSrc === 'string' ? config.audioSrc : '';
        const hasPrev = !!(config && config.hasPrev);
        const hasNext = !!(config && config.hasNext);

        if (refs.trackTitle) {
            refs.trackTitle.textContent = title;
        }

        if (refs.prevBtn) {
            refs.prevBtn.disabled = !hasPrev;
        }

        if (refs.nextBtn) {
            refs.nextBtn.disabled = !hasNext;
        }

        const currentSrc = normalizeAudioSrc(refs.audio.getAttribute('src'));
        const nextSrc = normalizeAudioSrc(audioSrc);

        if (!nextSrc) {
            refs.audio.pause();
            refs.audio.removeAttribute('src');
            refs.audio.load();
            resetPlayerUi(refs);
            syncLoopState(refs);
            syncSpeedState(refs);
            return;
        }

        if (currentSrc !== nextSrc) {
            refs.audio.pause();
            refs.audio.src = audioSrc;
            refs.audio.currentTime = 0;
            refs.audio.load();
            resetPlayerUi(refs);
        }

        syncLoopState(refs);
        syncSpeedState(refs);
    };

    window.addEventListener('DOMContentLoaded', () => {
        window.setTimeout(() => {
            ensureListeningPracticeLayout();
            refreshListeningPracticeLayout();
        }, 0);
        ensureListeningPetMounted().then(() => {
            installListeningPracticeHooks();
        });
    });

    window.addEventListener('pagehide', () => {
    });
})();
