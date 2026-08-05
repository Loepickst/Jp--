#!/usr/bin/env python3
"""Build the TRY! N1 lesson bundles from the existing lesson templates."""

from __future__ import annotations

import copy
import json
import re
from pathlib import Path

from lxml import etree, html


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "exam" / "textbook" / "try-n1.html"
OUTPUT_DIR = Path(__file__).resolve().parent / "data" / "lessons"
CATALOG_OUTPUT = Path(__file__).resolve().parent / "data" / "lesson-catalog.js"

LESSONS = [
    {
        "lesson": 1,
        "title": "オクトーバーフェスト",
        "parts": [1],
        "audio": ["audio/1.mp3"],
    },
    {
        "lesson": 2,
        "title": "産業医を増やそう",
        "parts": [2],
        "audio": ["audio/2.mp3"],
    },
    {
        "lesson": 3,
        "title": "飯食わぬ女房",
        "parts": [3, 4],
        "audio": [
            "audio/3.2.mp3",
            "audio/3.1.mp3",
        ],
    },
    {
        "lesson": 4,
        "title": "上司との付き合い方",
        "parts": [5, 6],
        "audio": [
            "audio/4.1.mp3",
            "audio/4.2.mp3",
        ],
    },
    {
        "lesson": 5,
        "title": "転職",
        "parts": [7, 8, 9],
        "audio": [
            "audio/5.1.mp3",
            "audio/5.2.mp3",
            "audio/5.3.mp3",
        ],
    },
    {
        "lesson": 6,
        "title": "研修を終えて",
        "parts": [10],
        "audio": ["audio/6.mp3"],
    },
    {
        "lesson": 7,
        "title": "さすが本田君",
        "parts": [11, 12],
        "audio": [
            "audio/7.1.mp3",
            "audio/7.2.mp3",
        ],
    },
    {
        "lesson": 8,
        "title": "楽園の萌花",
        "parts": [13, 14],
        "audio": [
            "audio/8.1.mp3",
            "audio/8.2.mp3",
        ],
    },
    {
        "lesson": 9,
        "title": "トリアージ",
        "parts": [15],
        "audio": ["audio/9.mp3"],
    },
    {
        "lesson": 10,
        "title": "前衛書道",
        "parts": [16],
        "audio": ["audio/010.mp3"],
    },
]


def has_class(name: str) -> str:
    return (
        "contains(concat(' ', normalize-space(@class), ' '), "
        f"' {name} ')"
    )


def compact_text(node) -> str:
    return re.sub(r"\s+", " ", "".join(node.itertext())).strip()


def inner_html(node) -> str:
    chunks = []
    if node.text:
        chunks.append(node.text)
    for child in node:
        chunks.append(etree.tostring(child, encoding="unicode", method="html"))
    return "".join(chunks).strip()


def text_without_ruby_readings(node) -> str:
    clone = copy.deepcopy(node)
    for reading in clone.xpath(".//rt"):
        reading.getparent().remove(reading)
    return compact_text(clone)


def text_as_reading(node) -> str:
    clone = copy.deepcopy(node)
    for ruby in clone.xpath(".//ruby"):
        readings = ruby.xpath(".//rt")
        reading = "".join(compact_text(item) for item in readings)
        base = text_without_ruby_readings(ruby)
        tail = ruby.tail
        ruby.clear()
        ruby.text = reading or base
        ruby.tail = tail
    return compact_text(clone)


def replace_with_text(node, value: str) -> None:
    parent = node.getparent()
    if parent is None:
        return
    index = parent.index(node)
    text = f"{value}{node.tail or ''}"
    if index:
        previous = parent[index - 1]
        previous.tail = f"{previous.tail or ''}{text}"
    else:
        parent.text = f"{parent.text or ''}{text}"
    parent.remove(node)


def normalize_redundant_ruby(root) -> None:
    for ruby in list(root.xpath(".//ruby")):
        base = text_without_ruby_readings(ruby)
        reading = "".join(compact_text(item) for item in ruby.xpath(".//rt"))
        if base and base == reading:
            replace_with_text(ruby, base)


def extract_key(node) -> str:
    onclick = node.get("onclick", "")
    match = re.search(r"\(\s*['\"]([^'\"]+)['\"]\s*\)", onclick)
    if match:
        return match.group(1)
    return re.sub(r"\s+", "", compact_text(node))


def make_entry(node) -> dict:
    key = extract_key(node)
    clone = copy.deepcopy(node)
    normalize_redundant_ruby(clone)
    title = text_without_ruby_readings(clone)
    return {
        "key": key,
        "title": title,
        "titleHtml": inner_html(clone),
        "speakText": text_as_reading(clone),
    }


def ordered_unique(items: list[dict]) -> list[dict]:
    seen = set()
    result = []
    for item in items:
        key = item.get("key")
        if not key or key in seen:
            continue
        seen.add(key)
        result.append(item)
    return result


def prepare_article(article, part_index: int, part_count: int) -> str:
    clone = copy.deepcopy(article)
    normalize_redundant_ruby(clone)
    for class_name in ("lesson-header", "lesson-title", "lesson-intro", "paper-holes"):
        for node in clone.xpath(f'.//*[{has_class(class_name)}]'):
            parent = node.getparent()
            if parent is not None:
                parent.remove(node)

    for node in clone.xpath(
        f'.//*[{has_class("vocab-point")}]'
        f' | .//*[{has_class("grammar-point")}]'
        f' | .//*[{has_class("grammar-review")}]'
    ):
        key = extract_key(node)
        if key:
            node.set("data-key", key)
        node.attrib.pop("onclick", None)

    clone.attrib.pop("style", None)
    clone.set("class", "lesson-paper lesson-paper-source")
    content = etree.tostring(clone, encoding="unicode", method="html")
    heading = (
        f'<p class="lesson-fragment-heading">第 {part_index} 部分</p>'
        if part_count > 1
        else ""
    )
    return (
        f'<section class="lesson-fragment" data-fragment="{part_index}">'
        f"{heading}{content}</section>"
    )


def get_template_article(document, part: int):
    template = document.get_element_by_id(f"lesson-{part}-content")
    articles = template.xpath(f'.//*[{has_class("lesson-paper")}]')
    if not articles:
        articles = template.xpath(".//article")
    if not articles:
        raise RuntimeError(f"lesson-{part}-content has no article")
    return articles[0]


def write_js(path: Path, assignment: str, payload: dict | list) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        f"{assignment} = {json.dumps(payload, ensure_ascii=False, separators=(',', ':'))};\n",
        encoding="utf-8",
    )


def build() -> None:
    document = html.parse(str(SOURCE)).getroot()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    catalog = []
    for config in LESSONS:
        lesson = config["lesson"]
        articles = [get_template_article(document, part) for part in config["parts"]]
        article_html = "".join(
            prepare_article(article, index, len(articles))
            for index, article in enumerate(articles, start=1)
        )

        vocab = []
        patterns = []
        for article in articles:
            vocab.extend(
                make_entry(node)
                for node in article.xpath(f'.//*[{has_class("vocab-point")}]')
            )
            patterns.extend(
                make_entry(node)
                for node in article.xpath(
                    f'.//*[{has_class("grammar-point")}]'
                    f' | .//*[{has_class("grammar-review")}]'
                )
            )

        vocab = ordered_unique(vocab)
        patterns = ordered_unique(patterns)
        for entry in patterns:
            # TRY! N1 currently has no separately maintained textbook-example set.
            entry["examples"] = []

        bundle = {
            "lesson": lesson,
            "title": config["title"],
            "parts": len(config["parts"]),
            "audioSrc": config["audio"],
            "articleHtml": article_html,
            "vocab": vocab,
            "patterns": patterns,
        }
        output = OUTPUT_DIR / f"lesson-{lesson:02d}.js"
        output.write_text(
            "window.tryN1LessonBundles=window.tryN1LessonBundles||{};\n"
            f"window.tryN1LessonBundles[{lesson}]="
            f"{json.dumps(bundle, ensure_ascii=False, separators=(',', ':'))};\n",
            encoding="utf-8",
        )

        catalog.append(
            {
                "lesson": lesson,
                "title": config["title"],
                "lessonSrc": f"data/lessons/lesson-{lesson:02d}.js",
                "audioSrc": config["audio"],
            }
        )

    CATALOG_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    CATALOG_OUTPUT.write_text(
        "window.tryN1LessonCatalog="
        f"{json.dumps(catalog, ensure_ascii=False, separators=(',', ':'))};\n",
        encoding="utf-8",
    )
    print(
        f"Built {len(catalog)} lessons: "
        f"{sum(len(item['parts']) for item in LESSONS)} source parts."
    )


if __name__ == "__main__":
    build()
