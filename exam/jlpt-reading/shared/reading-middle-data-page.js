(function () {
    'use strict';

    const body = document.body;
    const examKey = body && body.dataset ? body.dataset.examKey : '';
    const database = window.ReadingN1MiddleData
        || window.ReadingN1Middle2015
        || window.ReadingN1Middle2014
        || {};
    const exam = database[examKey];
    const root = document.getElementById('reading-data-root');

    if (!exam || !root) return;

    /* The data-driven middle papers share the common reading shell, but the
       passage and its question list also need one continuous paper baseline. */
    body.classList.add('reading-middle-data-page');

    const sequence = ['一', '二', '三', '四', '五'];

    function node(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text !== undefined && text !== null) element.textContent = text;
        return element;
    }

    function getPromptUnderline(question) {
        if (question && question.promptUnderline) return question.promptUnderline;
        const prompt = question && typeof question.prompt === 'string' ? question.prompt : '';
        const markerIndex = prompt.indexOf('とあるが');
        return markerIndex > 0 ? prompt.slice(0, markerIndex).trim() : '';
    }

    function appendUnderlinedText(parent, text, underlineTexts) {
        const matches = [];
        Array.from(new Set((underlineTexts || []).filter(Boolean)))
            .sort((left, right) => right.length - left.length)
            .forEach((term) => {
                let start = text.indexOf(term);
                while (start >= 0) {
                    const end = start + term.length;
                    if (!matches.some((match) => start < match.end && end > match.start)) {
                        matches.push({ start, end, term });
                    }
                    start = text.indexOf(term, start + term.length);
                }
            });

        matches.sort((left, right) => left.start - right.start);
        let cursor = 0;
        matches.forEach((match) => {
            if (match.start > cursor) parent.appendChild(document.createTextNode(text.slice(cursor, match.start)));
            parent.appendChild(node('span', 'exam-underline', match.term));
            cursor = match.end;
        });
        if (cursor < text.length) parent.appendChild(document.createTextNode(text.slice(cursor)));
    }

    function appendEvidenceText(parent, text, evidenceTexts, underlineTexts) {
        const matches = [];
        Array.from(new Set(evidenceTexts.filter(Boolean)))
            .sort((left, right) => right.length - left.length)
            .forEach((term) => {
                let start = text.indexOf(term);
                while (start >= 0) {
                    const end = start + term.length;
                    if (!matches.some((match) => start < match.end && end > match.start)) {
                        matches.push({ start, end, term });
                    }
                    start = text.indexOf(term, start + term.length);
                }
            });

        matches.sort((left, right) => left.start - right.start);
        let cursor = 0;
        matches.forEach((match) => {
            if (match.start > cursor) appendUnderlinedText(parent, text.slice(cursor, match.start), underlineTexts);
            // Evidence is metadata until the learner submits an answer. The shared
            // practice renderer adds the visible highlight at that point.
            const marked = node('span', 'ks-target');
            marked.dataset.readingEvidenceText = match.term;
            appendUnderlinedText(marked, match.term, underlineTexts);
            parent.appendChild(marked);
            cursor = match.end;
        });
        if (cursor < text.length) appendUnderlinedText(parent, text.slice(cursor), underlineTexts);
    }

    function renderParagraph(paragraph, articleEvidence, articleUnderlines, articleIndex, paragraphIndex) {
        const wrapper = node('div', 'paragraph');
        wrapper.id = `article-${articleIndex + 1}-paragraph-${paragraphIndex + 1}`;
        wrapper.dataset.paraId = String(paragraphIndex + 1);

        const japanese = node('p', 'japanese');
        appendEvidenceText(japanese, paragraph.jp, articleEvidence, articleUnderlines);
        wrapper.appendChild(japanese);

        const analysis = node('div', 'paragraph-analysis analysis-element');
        const translation = node('div', 'para-translation');
        translation.appendChild(node('span', 'trans-title', '文章译文'));
        translation.appendChild(document.createTextNode(paragraph.zh));
        analysis.appendChild(translation);
        wrapper.appendChild(analysis);
        return wrapper;
    }

    function renderNotes(notes) {
        if (!Array.isArray(notes) || !notes.length) return null;
        const section = node('div', 'article-notes');
        notes.forEach((note, index) => {
            const item = node('div', 'note-item');
            item.appendChild(node('span', 'note-mark', `（注${index + 1}）${note.term}：`));
            item.appendChild(document.createTextNode(note.meaning));
            section.appendChild(item);
        });
        return section;
    }

    function renderQuestion(question, localIndex, globalIndex) {
        const section = node('div', 'qa-section question-block');
        section.dataset.qId = String(globalIndex + 1);
        section.dataset.readingQuestionType = question.type || '';
        section.dataset.readingAnalysisId = `${examKey || 'n1-middle'}-${String(globalIndex + 1).padStart(2, '0')}`;
        section.dataset.readingEvidence = (question.evidenceTexts || []).join('|');

        const title = node('div', 'question-title');
        const titleMain = node('div', 'question-title-main');
        const badge = node('button', 'question-num-badge question-note-btn', String(localIndex + 1).padStart(2, '0'));
        badge.type = 'button';
        badge.dataset.qId = String(globalIndex + 1);
        badge.setAttribute('aria-pressed', 'false');
        badge.title = '记题';
        titleMain.appendChild(badge);
        const prompt = node('span', 'question-title-text');
        const underline = getPromptUnderline(question);
        const underlineStart = underline ? question.prompt.indexOf(underline) : -1;
        if (underlineStart < 0) {
            prompt.textContent = question.prompt;
        } else {
            if (underlineStart > 0) {
                prompt.appendChild(document.createTextNode(question.prompt.slice(0, underlineStart)));
            }
            prompt.appendChild(node('span', 'exam-underline', underline));
            const underlineEnd = underlineStart + underline.length;
            if (underlineEnd < question.prompt.length) {
                prompt.appendChild(document.createTextNode(question.prompt.slice(underlineEnd)));
            }
        }
        titleMain.appendChild(prompt);
        title.appendChild(titleMain);
        section.appendChild(title);

        question.options.forEach((option, optionIndex) => {
            const optionRow = node('div', `option-item${option.correct ? ' is-correct' : ''}`);
            optionRow.setAttribute('role', 'radio');
            optionRow.setAttribute('aria-checked', 'false');
            optionRow.dataset.optionNumber = String(optionIndex + 1);
            optionRow.dataset.readingErrorType = option.error || '';
            optionRow.dataset.readingExplanation = option.explanation || '';
            if (option.correct) optionRow.dataset.readingAnswer = 'correct';

            const content = node('div', 'option-content');
            content.appendChild(node('span', 'option-number', String(optionIndex + 1)));
            const group = node('div', 'option-text-group');
            group.appendChild(node('span', 'option-text', option.text));
            group.appendChild(node('span', 'option-translation', option.translation));
            content.appendChild(group);
            optionRow.appendChild(content);

            const legacy = node('div', 'option-explanation');
            legacy.appendChild(node('span', `badge ${option.correct ? 'correct' : 'wrong'}`, option.correct ? '正解' : '誤り'));
            legacy.appendChild(document.createTextNode(option.explanation));
            optionRow.appendChild(legacy);
            section.appendChild(optionRow);
        });
        return section;
    }

    let globalQuestionIndex = 0;
    exam.articles.forEach((article, articleIndex) => {
        const page = node('div', `page-content${articleIndex === 0 ? ' active' : ''}`);
        page.id = `page-${articleIndex + 1}`;
        page.appendChild(node('h2', 'header-title', `${exam.period} 中篇（${sequence[articleIndex] || articleIndex + 1}）`));

        const articleContent = node('div', 'article-content');
        const articleEvidence = article.questions.flatMap((question) => question.evidenceTexts || []);
        const articleUnderlines = article.questions.map(getPromptUnderline).filter(Boolean);
        article.paragraphs.forEach((paragraph, paragraphIndex) => {
            articleContent.appendChild(renderParagraph(paragraph, articleEvidence, articleUnderlines, articleIndex, paragraphIndex));
        });
        const notes = renderNotes(article.notes);
        if (notes) articleContent.appendChild(notes);
        if (article.source) articleContent.appendChild(node('p', 'source', `（${article.source}）`));

        const questionContainer = node('div', 'qa-container');
        article.questions.forEach((question, localIndex) => {
            questionContainer.appendChild(renderQuestion(question, localIndex, globalQuestionIndex));
            globalQuestionIndex += 1;
        });
        articleContent.appendChild(questionContainer);
        page.appendChild(articleContent);
        root.appendChild(page);
    });

    const navigation = node('div', 'article-navigation');
    const previous = node('button', 'nav-btn', '← 上一篇');
    previous.id = 'prev-btn';
    previous.type = 'button';
    const submit = node('button', 'submit-btn', '判定答案');
    submit.id = 'study-submit-btn';
    submit.type = 'button';
    const next = node('button', 'nav-btn', '下一篇 →');
    next.id = 'next-btn';
    next.type = 'button';
    navigation.append(previous, submit, next);
    root.appendChild(navigation);
})();
