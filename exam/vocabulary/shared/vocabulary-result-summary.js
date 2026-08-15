(function () {
    'use strict';

    const state = {
        startedAt: 0,
        elapsedSeconds: 0,
        mainWasVisible: false,
        observer: null
    };

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function isVisible(node) {
        return Boolean(node && !node.classList.contains('hidden'));
    }

    function startTimer() {
        state.startedAt = Date.now();
        state.elapsedSeconds = 0;
        state.mainWasVisible = isVisible(document.getElementById('view-main'));
    }

    function syncTimer() {
        const main = document.getElementById('view-main');
        const summary = document.getElementById('view-summary');
        const mainVisible = isVisible(main);
        const summaryVisible = isVisible(summary);

        if (mainVisible && !state.mainWasVisible) {
            state.startedAt = Date.now();
            state.elapsedSeconds = 0;
        }
        if (summaryVisible && state.startedAt) {
            state.elapsedSeconds = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));
            state.startedAt = 0;
        }
        state.mainWasVisible = mainVisible;
    }

    function initTimer() {
        if (state.observer) return;
        const targets = [document.getElementById('view-main'), document.getElementById('view-summary')].filter(Boolean);
        if (!targets.length) return;
        document.addEventListener('click', (event) => {
            const trigger = event.target.closest('.intro-primary-btn, .difficulty-btn');
            if (trigger) startTimer();
        }, true);
        state.observer = new MutationObserver(syncTimer);
        targets.forEach((target) => state.observer.observe(target, { attributes: true, attributeFilter: ['class'] }));
        syncTimer();
    }

    function getElapsedSeconds() {
        if (state.startedAt) {
            return Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));
        }
        return state.elapsedSeconds;
    }

    function formatDuration(seconds) {
        const value = Math.max(0, Number(seconds) || 0);
        const minutes = Math.floor(value / 60);
        const rest = value % 60;
        return String(minutes).padStart(2, '0') + ':' + String(rest).padStart(2, '0');
    }

    function getMentorInfo(options) {
        const speaker = document.querySelector('.practice-mentor-speaker');
        const image = document.querySelector('#enemy-avatar img, .intro-avatar img');
        return {
            name: String(options.mentorName || (speaker && speaker.textContent) || '导师').trim(),
            avatar: String(options.mentorAvatar || (image && image.getAttribute('src')) || '').trim()
        };
    }

    function stripRubyHtml(value) {
        const holder = document.createElement('div');
        holder.innerHTML = String(value || '');
        holder.querySelectorAll('rt, rp').forEach((node) => node.remove());
        return String(holder.textContent || '').trim();
    }

    function getReadingFromHtml(value) {
        const holder = document.createElement('div');
        holder.innerHTML = String(value || '');
        const readings = Array.from(holder.querySelectorAll('rt')).map((node) => String(node.textContent || '').trim()).filter(Boolean);
        return readings.join('');
    }

    function getWordTerm(word, options) {
        if (typeof options.getDisplayText === 'function') {
            const result = options.getDisplayText(word);
            if (result) return String(result).trim();
        }
        return stripRubyHtml(word && (word.word_html || word.word || word.term || ''));
    }

    function getWordReading(word, options) {
        if (typeof options.getReading === 'function') {
            const result = options.getReading(word);
            if (result) return String(result).trim();
        }
        return String((word && (word.reading || word.kana)) || getReadingFromHtml(word && word.word_html) || '').trim();
    }

    function getWordMeaning(word, options) {
        if (typeof options.getMeaning === 'function') {
            const result = options.getMeaning(word);
            if (result) return String(result).trim();
        }
        const raw = word && (word.mean || word.meaning || word.definition || '');
        if (Array.isArray(raw)) return raw.filter(Boolean).join('；');
        return String(raw || '').replace(/<[^>]+>/g, '').trim();
    }

    function getPracticeReason(type) {
        const labels = {
            reading: '读音混淆',
            meaning: '词义混淆',
            sentence: '用法判断'
        };
        return labels[String(type || '').toLowerCase()] || '需要巩固';
    }

    function getWrongDetail(word, options, index) {
        if (typeof options.getWrongDetail === 'function') {
            const result = options.getWrongDetail(word, index);
            if (result) return result;
        }
        return word && word.__resultWrongDetail ? word.__resultWrongDetail : null;
    }

    function buildOptionAnalysisMarkup(detail) {
        const options = Array.isArray(detail && detail.options) ? detail.options.filter(Boolean) : [];
        if (!options.length) return '';
        const rows = options.map((option, index) => {
            const value = String(option.value || option.wordLabel || '').trim();
            const wordLabel = String(option.wordLabel || '').trim();
            const meaning = String(option.meaning || '').trim();
            const usage = String(option.usage || '').trim();
            const labels = [];
            if (option.isSelected) labels.push('你的选择');
            if (option.isCorrect) labels.push('正确项');
            return '<li class="vocab-result-option-item' + (option.isCorrect ? ' is-correct' : '') + (option.isSelected && !option.isCorrect ? ' is-selected-wrong' : '') + '">'
                + '<span class="vocab-result-option-index">' + String(index + 1).padStart(2, '0') + '</span>'
                + '<div class="vocab-result-option-copy">'
                + '<div class="vocab-result-option-title"><strong lang="ja">' + escapeHtml(value || wordLabel || '未命名选项') + '</strong>'
                + (wordLabel && wordLabel !== value ? '<span>' + escapeHtml(wordLabel) + '</span>' : '') + '</div>'
                + (meaning ? '<p><b>词义</b>' + escapeHtml(meaning) + '</p>' : '')
                + (usage ? '<p><b>用法</b>' + escapeHtml(usage) + '</p>' : '')
                + (!meaning && !usage ? '<p>结合题干语境判断该选项。</p>' : '')
                + '</div>'
                + (labels.length ? '<em>' + escapeHtml(labels.join(' · ')) + '</em>' : '')
                + '</li>';
        }).join('');
        return '<section class="vocab-result-option-analysis">'
            + '<h5>选项用法</h5>'
            + '<ol>' + rows + '</ol>'
            + '</section>';
    }

    function buildWrongDetailMarkup(word, options, index, detailId) {
        const detail = getWrongDetail(word, options, index);
        if (!detail) return '';
        const term = getWordTerm(word, options) || '未命名词汇';
        const meaning = getWordMeaning(word, options) || '暂无释义';
        const questionType = String(detail.questionType || getPracticeReason(options.practiceType));
        const prompt = String(detail.prompt || term);
        const submittedAnswer = String(detail.submittedAnswer || '未作答');
        const correctAnswer = String(detail.correctAnswer || '暂无');
        const translation = String(detail.translation || meaning);
        const translationLabel = String(detail.translationLabel || '中文翻译');

        return '<div class="vocab-result-word-detail" id="' + escapeHtml(detailId) + '" hidden>'
            + '<section class="vocab-result-question-review">'
            + '<div class="vocab-result-question-head"><h4 class="vocab-result-detail-section-title">题目解析</h4>'
            + '<span class="vocab-result-question-type">' + escapeHtml(questionType) + '</span></div>'
            + '<p class="vocab-result-question-prompt" lang="ja">' + escapeHtml(prompt) + '</p>'
            + '<div class="vocab-result-question-translation"><span>' + escapeHtml(translationLabel) + '</span><p>' + escapeHtml(translation) + '</p></div>'
            + '<div class="vocab-result-answer-compare">'
            + '<div class="vocab-result-answer-item is-wrong"><span>你的答案</span><strong>' + escapeHtml(submittedAnswer) + '</strong></div>'
            + '<span class="vocab-result-answer-arrow" aria-hidden="true">→</span>'
            + '<div class="vocab-result-answer-item is-correct"><span>正确答案</span><strong>' + escapeHtml(correctAnswer) + '</strong></div>'
            + '</div>'
            + buildOptionAnalysisMarkup(detail)
            + '</section>'
            + '</div>';
    }

    function getLevel(options) {
        if (options.level) return String(options.level).toUpperCase();
        const titleMatch = String(document.title || '').match(/N[123]/i);
        if (titleMatch) return titleMatch[0].toUpperCase();
        const pathMatch = String(location.pathname || '').match(/\/n([123])\//i);
        return pathMatch ? 'N' + pathMatch[1] : 'N1';
    }

    function render(options) {
        options = options || {};
        const root = options.root || document.getElementById('view-summary');
        if (!root) return;

        syncTimer();
        const card = root.querySelector('.vocab-result-sheet') || document.createElement('div');
        if (!card.parentNode) root.appendChild(card);
        card.className = 'vocab-result-sheet result-enter';
        root.classList.add('vocabulary-result-active');

        const mentor = getMentorInfo(options);
        const wrongWords = Array.isArray(options.wrongWords) ? options.wrongWords.filter(Boolean) : [];
        const total = Math.max(0, Number(options.total) || 0);
        const correct = Math.max(0, Math.min(total || Number(options.correct) || 0, Number(options.correct) || 0));
        const mastered = total ? correct : 0;
        const level = getLevel(options);
        const title = String(options.title || '本轮词汇练习').trim();
        const elapsed = options.elapsedSeconds == null ? getElapsedSeconds() : Number(options.elapsedSeconds);
        const reason = String(options.reasonLabel || getPracticeReason(options.practiceType));
        const feedback = String(options.feedback || '').trim()
            || (wrongWords.length
                ? '先把这 ' + wrongWords.length + ' 个词重新看一遍，下一次会更稳。'
                : '这一轮很稳，词义和用法都掌握住了。');

        const rows = wrongWords.map((word, index) => {
            const term = getWordTerm(word, options) || '未命名词汇';
            const reading = getWordReading(word, options);
            const meaning = getWordMeaning(word, options) || '查看词卡中的完整释义';
            const detailId = 'vocab-result-detail-' + index;
            const wrongDetail = getWrongDetail(word, options, index);
            const detailMarkup = buildWrongDetailMarkup(word, options, index, detailId);
            const interactive = Boolean(detailMarkup);
            const rowTag = interactive ? 'button' : 'div';
            const rowAttributes = interactive
                ? ' type="button" class="vocab-result-word-row" data-result-word-index="' + index + '" aria-label="' + escapeHtml(term + '，查看题目解析') + '" aria-expanded="false" aria-controls="' + detailId + '"'
                : ' class="vocab-result-word-row is-static"';
            const rowReason = String((wrongDetail && wrongDetail.questionType) || reason);
            const actionLabel = String(options.wordActionLabel || (interactive ? '查看解析' : '')).trim();
            return '<div class="vocab-result-word-item">'
                + '<' + rowTag + rowAttributes + '>'
                + '<span class="vocab-result-word-main">'
                + '<span class="vocab-result-word-index">' + String(index + 1).padStart(2, '0') + '</span>'
                + '<span class="vocab-result-word-term">' + escapeHtml(term) + '</span>'
                + (reading ? '<span class="vocab-result-word-reading">' + escapeHtml(reading) + '</span>' : '')
                + '</span>'
                + '<span class="vocab-result-word-meaning">' + escapeHtml(meaning) + '</span>'
                + '<span class="vocab-result-word-reason">' + escapeHtml(rowReason) + '</span>'
                + '<span class="vocab-result-word-link">' + escapeHtml(actionLabel) + (interactive ? '&nbsp; ↓' : '') + '</span>'
                + '</' + rowTag + '>'
                + detailMarkup
                + '</div>';
        }).join('');

        const avatarMarkup = mentor.avatar
            ? '<span class="vocab-result-avatar"><img src="' + escapeHtml(mentor.avatar) + '" alt=""></span>'
            : '<span class="vocab-result-avatar" aria-hidden="true"></span>';
        const hasWrongWords = wrongWords.length > 0;
        const secondaryText = String(options.secondaryText || (hasWrongWords ? '返回词汇目录' : '再练一次'));
        const primaryText = String(options.primaryText || (hasWrongWords ? '用词卡复习这 ' + wrongWords.length + ' 个词' : '返回词汇目录'));

        card.innerHTML = '<section class="vocab-result-hero">'
            + '<div>'
            + '<p class="vocab-result-eyebrow">' + escapeHtml(level) + ' 词汇练习 · 本轮完成</p>'
            + '<h1 class="vocab-result-title">' + escapeHtml(title) + '</h1>'
            + '</div>'
            + '<div class="vocab-result-mentor">' + avatarMarkup
            + '<div><span class="vocab-result-mentor-name">' + escapeHtml(mentor.name) + '</span>'
            + '<p class="vocab-result-mentor-copy">“' + escapeHtml(feedback) + '”</p></div></div>'
            + '</section>'
            + '<section class="vocab-result-metrics" aria-label="本轮学习数据">'
            + '<div class="vocab-result-metric"><span class="vocab-result-metric-label">已掌握</span><strong class="vocab-result-metric-value">' + mastered + ' / ' + total + '</strong></div>'
            + '<div class="vocab-result-metric"><span class="vocab-result-metric-label">待巩固</span><strong class="vocab-result-metric-value is-accent">' + wrongWords.length + '</strong></div>'
            + '<div class="vocab-result-metric"><span class="vocab-result-metric-label">用时</span><strong class="vocab-result-metric-value">' + escapeHtml(formatDuration(elapsed)) + '</strong></div>'
            + '</section>'
            + '<section class="vocab-result-review">'
            + '<div class="vocab-result-review-head"><div><h2 class="vocab-result-review-title">' + (hasWrongWords ? '本次需要巩固的词汇' : '本轮词汇已全部掌握') + '</h2>'
            + '<span class="vocab-result-review-note">' + (hasWrongWords ? '点击词汇查看原题、答案与翻译' : '没有需要额外回看的错词') + '</span></div>'
            + '<span class="vocab-result-review-count">' + wrongWords.length + ' 词</span></div>'
            + '<div class="vocab-result-wrong-list">' + (rows || '<div class="vocab-result-empty">保持这份节奏，继续下一组学习吧。</div>') + '</div>'
            + '</section>'
            + '<div class="vocab-result-actions">'
            + '<button type="button" class="vocab-result-action is-secondary">' + secondaryText + '</button>'
            + '<button type="button" class="vocab-result-action is-primary">' + primaryText + '</button>'
            + '</div>'
            ;

        card.querySelectorAll('[data-result-word-index]').forEach((button) => {
            button.addEventListener('click', () => {
                const wasExpanded = button.getAttribute('aria-expanded') === 'true';
                card.querySelectorAll('[data-result-word-index][aria-expanded="true"]').forEach((openButton) => {
                    openButton.setAttribute('aria-expanded', 'false');
                    const openTerm = openButton.querySelector('.vocab-result-word-term');
                    openButton.setAttribute('aria-label', String((openTerm && openTerm.textContent) || '词汇') + '，查看题目解析');
                    const openDetail = card.querySelector('#' + openButton.getAttribute('aria-controls'));
                    if (openDetail) openDetail.hidden = true;
                    const openLink = openButton.querySelector('.vocab-result-word-link');
                    if (openLink) openLink.innerHTML = escapeHtml(String(options.wordActionLabel || '查看解析')) + '&nbsp; ↓';
                });
                if (wasExpanded) return;
                button.setAttribute('aria-expanded', 'true');
                const termNode = button.querySelector('.vocab-result-word-term');
                button.setAttribute('aria-label', String((termNode && termNode.textContent) || '词汇') + '，收起题目解析');
                const detail = card.querySelector('#' + button.getAttribute('aria-controls'));
                if (detail) detail.hidden = false;
                const link = button.querySelector('.vocab-result-word-link');
                if (link) link.innerHTML = '收起&nbsp; ↑';
            });
        });

        const secondaryButton = card.querySelector('.vocab-result-action.is-secondary');
        const primaryButton = card.querySelector('.vocab-result-action.is-primary');
        if (secondaryButton) {
            secondaryButton.addEventListener('click', typeof options.onSecondary === 'function'
                ? options.onSecondary
                : (hasWrongWords
                    ? function (event) { if (typeof options.onReturn === 'function') options.onReturn(event); }
                    : function () { if (typeof options.onRestart === 'function') options.onRestart(); }));
        }
        if (primaryButton) {
            primaryButton.addEventListener('click', typeof options.onPrimary === 'function'
                ? options.onPrimary
                : (hasWrongWords
                    ? function () {
                        const temporaryUnit = window.VocabularyTemporaryUnit;
                        if (temporaryUnit && options.temporaryUnitKey && options.temporaryUnitUrl) {
                            const opened = temporaryUnit.open({
                                moduleKey: options.temporaryUnitKey,
                                url: options.temporaryUnitUrl,
                                words: wrongWords,
                                getWordId: options.getWordId
                            });
                            if (opened) return;
                        }
                        const firstRow = card.querySelector('[data-result-word-index]');
                        if (firstRow) {
                            if (firstRow.getAttribute('aria-expanded') !== 'true') firstRow.click();
                            firstRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                    : function (event) { if (typeof options.onReturn === 'function') options.onReturn(event); }));
        }
    }

    window.VocabularyResultSummary = {
        render,
        getElapsedSeconds,
        formatDuration
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTimer, { once: true });
    } else {
        initTimer();
    }
}());
