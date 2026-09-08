# Homepage brush lettering

`yuji-syuku-hero-v1.woff2` is a Japanese headline subset of **Yuji Syuku** by
Kinuta Font Factory, based on calligraphy by Yuji Kataoka.

- Upstream: https://github.com/Kinutafontfactory/Yuji
- Google Fonts source: https://github.com/google/fonts/tree/main/ofl/yujisyuku
- License: SIL Open Font License 1.1; see `OFL.txt`.
- Downloaded from the Google Fonts CSS API on 2026-09-08, version `v8`.
- Served locally; there is no runtime request to Google Fonts.

The subset covers all three homepage headlines, including their punctuation:

```text
学ぶほど、見える景色が広がる。
積み上げてきたことが、君の武器になる。
人事を尽くして天命を待つ。
```

If the headlines change, regenerate the subset using the Google Fonts CSS API
(`family=Yuji Syuku`, `text=` containing every headline) and update the font URL,
preload, and `unicode-range` in `shared/home-magazine.css`. Keep this subset scoped
to the large hero headings, not to interface labels or body text.
