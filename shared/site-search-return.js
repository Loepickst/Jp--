/* Only a search-origin visit changes the lesson's usual home link. */
(() => {
    const source = new URLSearchParams(location.search).get("return");
    if (!source) return;
    const searchPage = new URL("../index.html#site-search", document.currentScript.src);
    try {
        if (new URL(source, location.href).href !== searchPage.href) return;
    } catch (_) { return; }
    const link = document.querySelector(".classic-page-home");
    if (!link) return;
    link.href = searchPage.href;
    link.setAttribute("aria-label", "返回搜索结果");
    link.title = "返回搜索结果";
    const label = link.querySelector("span");
    if (label) label.textContent = "返回搜索";
})();
