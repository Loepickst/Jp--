(() => {
    "use strict";
    const hero = document.querySelector(".magazine-hero");
    if (!hero) return;
    const quotes = [...hero.querySelectorAll("[data-magazine-quote]")];
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const quoteInterval = 12000;
    let current = Math.max(0, quotes.findIndex((quote) => !quote.hidden));
    let timer = null;
    let pointerReading = false;
    let pageInactive = false;
    const canRotate = () => quotes.length > 1 && desktop.matches && !reducedMotion.matches &&
        !document.hidden && !pageInactive && !pointerReading &&
        document.body.classList.contains("is-home-view") && !hero.contains(document.activeElement);
    const stopRotation = () => {
        if (timer !== null) window.clearTimeout(timer);
        timer = null;
    };
    const scheduleRotation = () => {
        stopRotation();
        if (!canRotate()) return;
        timer = window.setTimeout(() => {
            timer = null;
            if (canRotate() && !document.querySelector('.modal-overlay[aria-hidden="false"]')) {
                // A random nonzero offset cannot select the current quote again.
                current = (current + 1 + Math.floor(Math.random() * (quotes.length - 1))) % quotes.length;
                quotes.forEach((quote, i) => { quote.hidden = i !== current; });
            }
            scheduleRotation();
        }, quoteInterval);
    };
    hero.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "touch") return;
        pointerReading = true;
        scheduleRotation();
    });
    hero.addEventListener("pointerleave", () => {
        pointerReading = false;
        scheduleRotation();
    });
    hero.addEventListener("focusin", scheduleRotation);
    hero.addEventListener("focusout", () => queueMicrotask(scheduleRotation));
    document.addEventListener("visibilitychange", scheduleRotation);
    desktop.addEventListener("change", scheduleRotation);
    reducedMotion.addEventListener("change", scheduleRotation);
    new MutationObserver(scheduleRotation).observe(document.body, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("pagehide", () => { pageInactive = true; stopRotation(); });
    window.addEventListener("pageshow", () => { pageInactive = false; scheduleRotation(); });
    scheduleRotation();

    const search = document.querySelector("[data-global-site-search] input");
    if (!search) return;
    const hint = document.createElement("kbd");
    hint.className = "magazine-search-key";
    hint.textContent = navigator.platform.includes("Mac") ? "⌘ K" : "Ctrl + K";
    hint.setAttribute("aria-hidden", "true");
    search.parentElement.append(hint);
    document.addEventListener("keydown", (event) => {
        if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "k") return;
        if (!search.getClientRects().length ||
            document.querySelector('.modal-overlay[aria-hidden="false"]')) return;
        event.preventDefault();
        search.focus();
        search.select();
    });
})();
