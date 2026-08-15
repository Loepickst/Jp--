(function () {
    const bootstrapScript = document.currentScript;
    const bootstrapBase = bootstrapScript?.src || location.href;
    const inferredLevel = (location.pathname.match(/\/(n\d)\//i)?.[1] || 'N1').toUpperCase();

    // N1 and N2 now share one practice-page shell. Older N2 documents only
    // provide the content nodes, so normalise their semantic hooks before the
    // unified header and the redesign layer inspect the page.
    document.body.classList.add('grammar-app', 'cloze-app', 'cloze-practice-page');
    if (!document.body.dataset.readingHighlightLevel) {
        document.body.dataset.readingHighlightLevel = inferredLevel;
    }
    const legacyHeader = document.querySelector('body > .page-header');
    if (legacyHeader) {
        legacyHeader.classList.add('top-bar');
        const legacyBack = legacyHeader.querySelector('button');
        const legacyTitle = legacyHeader.querySelector('h1');
        const legacyActionGroup = legacyHeader.querySelector(':scope > div:last-child');
        if (legacyBack && !legacyBack.id) legacyBack.id = 'page-back-btn';
        legacyTitle?.classList.add('top-title');
        legacyActionGroup?.classList.add('top-actions', 'header-right-slot');
    }
    // The unified header runs after this bootstrap file. Mark the original
    // action group as the reusable right-hand slot before it inspects the
    // legacy header, so timer controls are moved instead of duplicated.
    const legacyActions = document.querySelector('body > .page-header.top-bar .top-actions');
    if (legacyActions) legacyActions.classList.add('header-right-slot');
    [
        ['cloze-shared-grammar-redesign', new URL('../../grammar/grammar-redesign.css', bootstrapBase).href],
        ['cloze-shared-practice-redesign', new URL('./cloze-redesign.css', bootstrapBase).href],
        ['cloze-shared-reading-tools', new URL('../../../jlpt-reading/shared/reading-tools.css', bootstrapBase).href],
        ['cloze-shared-mobile', new URL('./cloze-practice-mobile.css', bootstrapBase).href]
    ].forEach(([id, href]) => {
        if (document.getElementById(id)) return;
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    });
    if (!document.getElementById('cloze-practice-redesign-script')) {
        const redesignScript = document.createElement('script');
        redesignScript.id = 'cloze-practice-redesign-script';
        redesignScript.src = new URL('./cloze-practice-redesign.js', bootstrapBase).href;
        document.body.appendChild(redesignScript);
    }

    const params = new URLSearchParams(window.location.search);
    const isStudyMode = params.get('readingMode') !== 'test';
    if (!isStudyMode) return;

    const state = {
        elapsedSeconds: 0,
        timerId: null,
        finished: false
    };

    function formatClock(totalSeconds) {
        const safeSeconds = Math.max(0, Number(totalSeconds) || 0);
        const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, '0');
        const seconds = String(safeSeconds % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    function ensureStyle() {
        if (document.getElementById('cloze-study-timer-style')) return;
        const style = document.createElement('style');
        style.id = 'cloze-study-timer-style';
        style.textContent = `
            .cloze-study-elapsed-display {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 86px;
                padding: 4px 10px;
                border: 1.5px solid #333333;
                border-radius: 2px 8px 3px 6px / 6px 3px 8px 2px;
                background: rgba(255, 213, 79, 0.28);
                color: #333333;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 0.04em;
                white-space: nowrap;
            }
            .cloze-study-result-time {
                margin-top: 16px;
                padding: 12px 14px;
                border: 1.5px solid #333333;
                border-radius: 2px 12px 3px 10px / 10px 3px 12px 2px;
                background: rgba(255, 253, 238, 0.9);
                color: #333333;
                display: inline-flex;
                align-items: center;
                gap: 12px;
                font-weight: 800;
            }
            .cloze-study-result-time span {
                color: #666666;
                font-size: 12px;
                letter-spacing: 0.12em;
            }
            .cloze-study-result-time strong {
                font-family: "Noto Sans SC", "Noto Sans JP", sans-serif;
                font-size: 1.25rem;
            }
            @media (max-width: 768px) {
                .page-header .top-actions,
                .page-header > .w-\\[100px\\].flex.justify-end {
                    gap: 6px;
                    align-items: center;
                }
                .cloze-study-elapsed-display {
                    min-width: 76px;
                    padding: 4px 8px;
                    font-size: 11px;
                    letter-spacing: 0.02em;
                }
            }
            @media (max-width: 520px) {
                .cloze-study-elapsed-display {
                    min-width: 70px;
                    padding: 3px 7px;
                    font-size: 10px;
                }
                .cloze-study-result-time {
                    width: 100%;
                    justify-content: center;
                    margin-top: 12px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function getActionsContainer() {
        return document.querySelector('.kiki-unified-header-right .top-actions')
            || document.querySelector('.top-actions.header-right-slot')
            || document.querySelector('.page-header .top-actions')
            || document.querySelector('.page-header > .w-\\[100px\\].flex.justify-end')
            || document.querySelector('.page-header > div:last-child');
    }

    function ensureDisplay() {
        // The reading timer is now the single visible timer control. Keep this
        // lightweight clock only as the result-summary data source.
        document.getElementById('cloze-study-elapsed-display')?.remove();
        return null;
    }

    function updateDisplay() {
        ensureDisplay();
        const translationToggle = document.getElementById('translation-toggle-btn');
        const showHeaderTimer = !state.finished;
        if (translationToggle) {
            translationToggle.hidden = showHeaderTimer;
        }
    }

    function start() {
        if (state.timerId || state.finished) return;
        ensureStyle();
        updateDisplay();
        state.timerId = window.setInterval(() => {
            state.elapsedSeconds += 1;
            updateDisplay();
        }, 1000);
    }

    function finish() {
        if (state.timerId) {
            window.clearInterval(state.timerId);
            state.timerId = null;
        }
        state.finished = true;
        updateDisplay();
        return state.elapsedSeconds;
    }

    function getSummaryHtml() {
        return `
            <div id="cloze-study-result-time" class="cloze-study-result-time">
                <span>所用时间</span>
                <strong>${formatClock(state.elapsedSeconds)}</strong>
            </div>
        `;
    }

    function injectResultTime() {
        const resultSection = document.getElementById('result-section');
        if (
            !resultSection
            || resultSection.dataset.clozeRedesigning
            || resultSection.querySelector('.grammar-result-sheet')
            || document.getElementById('cloze-study-result-time')
        ) return;
        resultSection.insertAdjacentHTML('beforeend', getSummaryHtml());
    }

    function completeAndInject() {
        finish();
        window.setTimeout(injectResultTime, 0);
    }

    function wrapSubmit() {
        if (typeof window.handleSubmit !== 'function' || window.handleSubmit.__clozeStudyTimerWrapped) return;
        const originalHandleSubmit = window.handleSubmit;
        window.handleSubmit = function (...args) {
            const result = originalHandleSubmit.apply(this, args);
            completeAndInject();
            return result;
        };
        window.handleSubmit.__clozeStudyTimerWrapped = true;
    }

    document.addEventListener('click', (event) => {
        if (event.target.closest('#submit-btn')) {
            window.setTimeout(() => {
                const resultSection = document.getElementById('result-section');
                if (resultSection && !resultSection.classList.contains('hidden')) {
                    completeAndInject();
                }
            }, 0);
        }
    }, true);

    wrapSubmit();

    document.addEventListener('DOMContentLoaded', () => {
        ensureStyle();
        wrapSubmit();
        start();
    });

    window.ClozeStudyTimer = {
        finish,
        getElapsedSeconds: () => state.elapsedSeconds,
        getElapsedText: () => formatClock(state.elapsedSeconds),
        injectResultTime
    };
})();
