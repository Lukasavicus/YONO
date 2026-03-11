# 📌 YONO

![Phase](https://img.shields.io/badge/phase-idea-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

> **YONO** — *You Only Need Once* (or *You Only Need One*). Computer vision app to find duplicate and similar images, then plan actions (remove, group).

---

## 📋 Project Phase

> **Current phase:** `💡 Idea`
>
> **Owner:** Arrow-Head-Tech

---

## 📝 Description

**YONO** is a **computer vision** project: an image/photo analyzer that determines whether photos are **duplicates** or **similar**, and to what degree. You point it at a folder (or set of folders, or an entire disk), and it runs the analysis for you.

### Core idea

- **Input:** A target directory, multiple directories, or a whole disk (scale depends on file count).
- **Output:** Which files are duplicates, which are similar (with a similarity level), and an **action planner** — e.g. “these files are identical / similar; difference is X; you can remove one, merge, etc.”
- **Extra:** Grouping by image content (e.g. “beach photos”) and/or by **metadata** (e.g. “beach photos from February 2025” for a specific trip).

### Algorithm challenges

The core difficulty is recognizing “the same” or “very similar” images across real-world variation:

| Challenge | Example | Goal |
|-----------|---------|------|
| **Different dimensions** | Same photo, one resized | Still treat as duplicate |
| **Different color** | Same photo in B&W vs color | Still recognize as same |
| **Small displacement** | Burst/sequence with a few pixels shift | Treat as near-duplicates and surface for review |

So: hashing or naive pixel diff is not enough; the pipeline needs to be robust to resize, color changes, and small shifts.

### Form factor

- **Desktop** application: run locally, point at folder(s) or disk, run analysis, then use the action planner to deduplicate or organize.

---

## 🛠️ Tech Stack

- To be determined (computer vision / image hashing / similarity; likely Python or similar for prototyping).

---

## 📦 Installation

```bash
git clone https://github.com/Arrow-Head-Tech/YONO.git
cd YONO
```

*(Dependencies TBD when implementation starts.)*

---

## 📈 Changelog

| Version | Date       | Changes                              |
|---------|------------|--------------------------------------|
| 0.1.0   | 2025-10-29 | Initial repository documentation     |
| 0.2.0   | 2026-03-10 | Full vision: CV duplicate/similarity detector, action planner, grouping by content/metadata. Phase: idea. |

---

## 📄 License

This project is licensed under the MIT License.
