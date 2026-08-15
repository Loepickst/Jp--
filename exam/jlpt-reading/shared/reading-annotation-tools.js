(function () {
    'use strict';

    if (window.__kikiReadingAnnotationToolsLoaded) return;
    window.__kikiReadingAnnotationToolsLoaded = true;

    const body = document.body;
    if (!body || !body.classList.contains('reading-content-page')) return;

    const SURFACE_SELECTOR = '.reading-editorial-copy, .article-content';
    const BLOCK_SELECTOR = [
        'p',
        'li',
        'td',
        'th',
        'dd',
        'dt',
        'figcaption',
        '.paragraph',
        '.paragraph-group',
        '.event-item',
        '.schedule-item',
        '.poster-box'
    ].join(',');
    const EXCLUDED_SELECTOR = [
        'button',
        'a',
        'input',
        'textarea',
        'select',
        '[contenteditable="true"]',
        '.translation',
        '.article-translation',
        '.para-translation',
        '.analysis-element',
        '.paragraph-analysis',
        '.reading-cloze-explanation',
        '.explanation-box',
        '.exp'
    ].join(',');
    const QUESTION_SELECTOR = [
        '.reading-editorial-questions',
        '.question-section',
        '.questions',
        '.question-card',
        '.qcard'
    ].join(',');
    const REVIEWED_SELECTOR = [
        '.question-card.reviewed',
        '.qcard.reviewed',
        '.options.reviewed',
        '.options-group.reviewed',
        '.article-content.reviewed'
    ].join(',');
    const GLOBAL_ANALYSIS_CLASSES = [
        'show-analysis',
        'show-article-analysis',
        'show-option-analysis',
        'reading-paper-submitted'
    ];
    const ANNOTATION_CLASSES = [
        'reading-user-annotation--highlight',
        'reading-user-annotation--bold',
        'reading-user-annotation--underline'
    ];

    const state = {
        range: null,
        surface: null,
        toolbar: null,
        syncQueued: false,
        selectionQueued: false,
        unitModes: new WeakMap()
    };

    function unique(nodes) {
        return Array.from(new Set(nodes));
    }

    function elementFromNode(node) {
        if (!node) return null;
        return node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    }

    function isGlobalAnalysisVisible() {
        return GLOBAL_ANALYSIS_CLASSES.some((className) => body.classList.contains(className));
    }

    function getUnits() {
        const units = Array.from(document.querySelectorAll('.reading-editorial-unit'));
        return units.length ? units : [body];
    }

    function isUnitInAnalysis(unit) {
        if (isGlobalAnalysisVisible()) return true;
        if (unit.matches && unit.matches(REVIEWED_SELECTOR)) return true;
        return Boolean(unit.querySelector && unit.querySelector(REVIEWED_SELECTOR));
    }

    function ownWordBankLock(unit) {
        if (!unit.hasAttribute('data-word-bank-ignore')) {
            unit.setAttribute('data-word-bank-ignore', '');
            unit.dataset.readingWordBankLock = 'true';
        }
    }

    function releaseWordBankLock(unit) {
        if (unit.dataset.readingWordBankLock !== 'true') return;
        unit.removeAttribute('data-word-bank-ignore');
        delete unit.dataset.readingWordBankLock;
    }

    function unitForSurface(surface) {
        return surface && (surface.closest('.reading-editorial-unit') || body);
    }

    function isSurfaceInPractice(surface) {
        const unit = unitForSurface(surface);
        return Boolean(unit && !isUnitInAnalysis(unit));
    }

    function getArticleSurfaces() {
        return unique(Array.from(document.querySelectorAll(SURFACE_SELECTOR))).filter((surface) => {
            if (!surface.isConnected || surface.closest(QUESTION_SELECTOR)) return false;
            return !surface.closest('.reading-cloze-explanation, .explanation-box, .exp');
        });
    }

    function currentSelectionUnit() {
        const selection = window.getSelection();
        if (!selection || !selection.rangeCount || selection.isCollapsed) return null;
        const start = elementFromNode(selection.getRangeAt(0).startContainer);
        return start && (start.closest('.reading-editorial-unit') || body);
    }

    function hideWordBankFloatIfLocked() {
        const unit = currentSelectionUnit();
        if (!unit || isUnitInAnalysis(unit)) return;
        const float = document.getElementById('kiki-word-bank-float');
        if (float) {
            float.classList.remove('is-visible');
            float.setAttribute('aria-hidden', 'true');
        }
    }

    function clearSavedSelection() {
        state.range = null;
        state.surface = null;
        const selection = window.getSelection();
        if (selection) selection.removeAllRanges();
    }

    function syncModes() {
        state.syncQueued = false;
        const units = getUnits();
        const hasVisibleAnalysis = units.some(isUnitInAnalysis);

        /* Before any answer is reviewed, lock the entire exercise page as
           well as its article units. This prevents selections in headings or
           question text from falling through to the global word-bank tool. */
        if (units[0] !== body) {
            if (hasVisibleAnalysis) releaseWordBankLock(body);
            else ownWordBankLock(body);
        }

        units.forEach((unit) => {
            const practice = !isUnitInAnalysis(unit);
            const previousPractice = state.unitModes.get(unit);
            state.unitModes.set(unit, practice);
            unit.classList.toggle('reading-annotation-practice', practice);
            if (practice) ownWordBankLock(unit);
            else releaseWordBankLock(unit);

            if (previousPractice === true && !practice && state.surface && unit.contains(state.surface)) {
                hideToolbar();
                clearSavedSelection();
            }
        });
        hideWordBankFloatIfLocked();
    }

    function queueModeSync() {
        if (state.syncQueued) return;
        state.syncQueued = true;
        window.requestAnimationFrame(syncModes);
    }

    function createToolbar() {
        if (state.toolbar) return state.toolbar;
        const toolbar = document.createElement('div');
        toolbar.className = 'reading-annotation-toolbar';
        toolbar.setAttribute('role', 'toolbar');
        toolbar.setAttribute('aria-label', '文章标注工具');
        toolbar.setAttribute('aria-hidden', 'true');
        toolbar.innerHTML = `
            <button type="button" data-annotation-action="highlight"><span class="reading-annotation-swatch" aria-hidden="true"></span><span>高亮</span></button>
            <button type="button" data-annotation-action="bold"><b aria-hidden="true">B</b><span>加粗</span></button>
            <button type="button" data-annotation-action="underline"><u aria-hidden="true">U</u><span>下划线</span></button>
            <button type="button" data-annotation-action="clear"><span aria-hidden="true">×</span><span>清除</span></button>
        `;
        toolbar.addEventListener('pointerdown', (event) => event.preventDefault());
        toolbar.addEventListener('click', (event) => {
            const button = event.target.closest('[data-annotation-action]');
            if (!button) return;
            event.preventDefault();
            applyAction(button.dataset.annotationAction);
        });
        document.body.appendChild(toolbar);
        state.toolbar = toolbar;
        return toolbar;
    }

    function hideToolbar() {
        if (!state.toolbar) return;
        state.toolbar.classList.remove('is-visible');
        state.toolbar.setAttribute('aria-hidden', 'true');
    }

    function showToolbar(rect) {
        const toolbar = createToolbar();
        toolbar.classList.add('is-visible');
        toolbar.setAttribute('aria-hidden', 'false');
        toolbar.style.left = '0px';
        toolbar.style.top = '0px';

        const toolbarRect = toolbar.getBoundingClientRect();
        const pageLeft = window.scrollX;
        const pageTop = window.scrollY;
        const viewportGap = 10;
        const desiredLeft = rect.left + pageLeft + (rect.width - toolbarRect.width) / 2;
        const minimumLeft = pageLeft + viewportGap;
        const maximumLeft = pageLeft + window.innerWidth - toolbarRect.width - viewportGap;
        const left = Math.min(Math.max(desiredLeft, minimumLeft), Math.max(minimumLeft, maximumLeft));
        const above = rect.top + pageTop - toolbarRect.height - 10;
        const below = rect.bottom + pageTop + 10;
        const top = above >= pageTop + viewportGap ? above : below;
        toolbar.style.left = `${Math.round(left)}px`;
        toolbar.style.top = `${Math.round(top)}px`;
    }

    function closestSurface(node) {
        const element = elementFromNode(node);
        return element && element.closest(SURFACE_SELECTOR);
    }

    function isExcluded(node) {
        const element = elementFromNode(node);
        return Boolean(element && element.closest(EXCLUDED_SELECTOR));
    }

    function sameTextBlock(range, surface) {
        const start = elementFromNode(range.startContainer);
        const end = elementFromNode(range.endContainer);
        if (!start || !end) return false;
        const startBlock = start.closest(BLOCK_SELECTOR) || surface;
        const endBlock = end.closest(BLOCK_SELECTOR) || surface;
        return startBlock === endBlock;
    }

    function captureSelection() {
        state.selectionQueued = false;
        const selection = window.getSelection();
        if (!selection || selection.rangeCount !== 1 || selection.isCollapsed) {
            hideToolbar();
            return;
        }

        const range = selection.getRangeAt(0);
        const surface = closestSurface(range.startContainer);
        const endSurface = closestSurface(range.endContainer);
        const text = selection.toString().replace(/\s+/g, ' ').trim();
        if (!surface || surface !== endSurface || !text || !isSurfaceInPractice(surface) ||
            isExcluded(range.startContainer) || isExcluded(range.endContainer) ||
            !sameTextBlock(range, surface)) {
            hideToolbar();
            return;
        }

        const rects = range.getClientRects();
        const rect = rects.length ? rects[rects.length - 1] : range.getBoundingClientRect();
        if (!rect || (!rect.width && !rect.height)) {
            hideToolbar();
            return;
        }

        state.range = range.cloneRange();
        state.surface = surface;
        hideWordBankFloatIfLocked();
        showToolbar(rect);
    }

    function queueSelectionCapture() {
        if (state.selectionQueued) return;
        state.selectionQueued = true;
        window.requestAnimationFrame(captureSelection);
    }

    function closestAnnotation(node) {
        const element = elementFromNode(node);
        return element && element.closest('.reading-user-annotation');
    }

    function annotationClassFor(action) {
        return `reading-user-annotation--${action}`;
    }

    function restoreSelection(range) {
        const selection = window.getSelection();
        if (!selection) return;
        selection.removeAllRanges();
        selection.addRange(range);
        state.range = range.cloneRange();
    }

    function wrapRange(range, action) {
        const wrapper = document.createElement('span');
        wrapper.className = `reading-user-annotation ${annotationClassFor(action)}`;
        const fragment = range.extractContents();
        wrapper.appendChild(fragment);
        range.insertNode(wrapper);
        const restored = document.createRange();
        restored.selectNodeContents(wrapper);
        restoreSelection(restored);
        return wrapper;
    }

    function unwrap(node) {
        if (!node || !node.parentNode) return;
        const parent = node.parentNode;
        while (node.firstChild) parent.insertBefore(node.firstChild, node);
        node.remove();
        parent.normalize();
    }

    function clearAnnotations(range) {
        if (!state.surface) return;
        const annotations = Array.from(state.surface.querySelectorAll('.reading-user-annotation')).filter((node) => {
            try {
                return range.intersectsNode(node);
            } catch (error) {
                return false;
            }
        });
        annotations.forEach((node) => {
            ANNOTATION_CLASSES.forEach((className) => node.classList.remove(className));
            unwrap(node);
        });
        hideToolbar();
        clearSavedSelection();
    }

    function applyAction(action) {
        if (!state.range || !state.surface || !state.range.toString().trim() || !isSurfaceInPractice(state.surface)) {
            hideToolbar();
            return;
        }

        const range = state.range.cloneRange();
        if (action === 'clear') {
            clearAnnotations(range);
            return;
        }

        const className = annotationClassFor(action);
        const startAnnotation = closestAnnotation(range.startContainer);
        const endAnnotation = closestAnnotation(range.endContainer);
        let target = null;
        if (startAnnotation && startAnnotation === endAnnotation) {
            startAnnotation.classList.add('reading-user-annotation');
            startAnnotation.classList.toggle(className);
            target = startAnnotation;
        } else {
            target = wrapRange(range, action);
        }

        if (target && !ANNOTATION_CLASSES.some((name) => target.classList.contains(name))) unwrap(target);
        hideToolbar();
    }

    document.addEventListener('mouseup', queueSelectionCapture, true);
    document.addEventListener('touchend', () => window.setTimeout(queueSelectionCapture, 120), { passive: true, capture: true });
    document.addEventListener('selectionchange', () => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) hideToolbar();
    });
    document.addEventListener('pointerdown', (event) => {
        if (state.toolbar && state.toolbar.contains(event.target)) return;
        if (!event.target.closest(SURFACE_SELECTOR)) hideToolbar();
    }, true);
    window.addEventListener('resize', hideToolbar, { passive: true });
    window.addEventListener('scroll', hideToolbar, { passive: true });

    const observer = new MutationObserver(queueModeSync);
    observer.observe(body, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['class']
    });

    syncModes();
})();
