---
title: "RNA 3D Structure Prediction"
excerpt: "Benchmarked and ensembled six CASP16-derived folding frameworks for RNA tertiary structure prediction, achieving a bronze medal in the Stanford Kaggle competition."
collection: portfolio
date: 2025-03-01
tags:
  - Structural Biology
  - PyTorch
  - AlphaFold3
  - Kaggle
header:
  teaser: images/projects/rna-teaser.png
links:
  kaggle: "https://www.kaggle.com/competitions/stanford-rna-3d-folding/writeups/state-of-the-rnart"
---

## Overview

RNA tertiary structure prediction is a fundamental unsolved problem in structural biology, with direct implications for drug design, gene regulation, and synthetic biology. This project was conducted as part of the [Stanford RNA 3D Folding Kaggle Competition](https://www.kaggle.com/competitions/stanford-rna-3d-folding/writeups/state-of-the-rnart), where I earned a **bronze medal**.

The work involved a systematic survey and benchmarking of state-of-the-art folding frameworks derived from CASP16, followed by the design of a multi-model ensemble inference pipeline.

---

## Methods

### Model Survey

I independently investigated and ran inference with six distinct frameworks:

| Model | Paradigm | Notes |
|---|---|---|
| Protenix (AF3-based) | End-to-end deep learning | AlphaFold3 architecture, fine-tuned on RNA |
| DRFold2 | Geometric deep learning | Coevolution + structure module |
| NuFold | Template-free | Language model–derived embeddings |
| RhoFold+ | MSA-based | Trained on RNAStralign + PDB |
| DeepFoldRNA | Contact-guided | Predicted contacts as structural constraints |
| trRosettaRNA | Hybrid | Rosetta energy + DL distance predictions |

### Ensemble Design

Rather than selecting a single best model, I designed a **multi-model ensemble** that integrates outputs from inference and refinement stages across frameworks. Key design decisions:

- **TM-score weighted averaging** of predicted coordinates
- **Sequence chunking** for long RNA chains under 16GB GPU memory constraints
- **Fine-tuning exploration** of AlphaFold3-based models on newly released PDB structures not present in training

---

## Tools & Stack

`Python` `PyTorch` `BioPython` `py3Dmol` `GPU` `Protenix` `Boltz` `AlphaFold3` `trRosettaRNA`

---

## Reflections

This project deepened my understanding of how cross-domain AI transfer works in practice — the same architectural ingredients that power protein folding translate to RNA with non-trivial modifications. It also made concrete the gap between benchmark performance and biological usefulness, a distinction I intend to keep central in future research.
