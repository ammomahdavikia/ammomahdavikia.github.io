---
title: "Mixture-of-Experts in Medical AI: A Comprehensive Survey"
collection: publications
permalink: /publications/2025-moe-medical-survey
date: 2025-06-01
venue: "Under Review"
paperurl: ''
slidesurl: ''
citation: 'Mahdavikia, A. (2025). Mixture-of-Experts in Medical AI: A Comprehensive Survey. <i>Under Review</i>.'
excerpt: "A systematic review of Mixture-of-Experts architectures applied across medical imaging, clinical NLP, and multimodal health data — synthesizing 200+ studies, covering routing mechanisms, expert characterization, and emergent modularity in clinical AI systems."
---

## Abstract

Mixture-of-Experts (MoE) architectures have emerged as a principled solution to a fundamental tension in medical AI: clinical tasks are heterogeneous by nature, yet most deep learning models are trained toward a single monolithic representation. MoE enables **conditional computation** — activating specialized sub-networks (experts) for each input — making it architecturally suited to the diversity of clinical presentations, imaging modalities, and disease subtypes encountered in real-world medicine.

This survey systematically reviews MoE research as applied to medical AI across **200+ studies**, with coverage spanning:

- Foundational MoE theory (Jacobs 1991 → Shazeer 2017 → Fedus 2022)
- Routing mechanisms: sparse top-k, soft routing, task-conditioned gating, learned vs. fixed dispatch
- Expert characterization axes: modality-specialized, anatomy-specialized, disease-specialized, patient-subgroup–specialized
- Expert similarity and load balancing: collapse prevention, auxiliary loss design, Zhou 2022 expert-choice routing
- Medical applications: multi-organ segmentation, pathology grading, multimodal diagnosis, federated learning with heterogeneous sites
- MICCAI 2024 contributions: M4oE, Med-MoE, MoE-Health

---

## Motivation

The clinical case for MoE is not merely technical. A radiologist reading a chest CT activates different perceptual and inferential strategies for nodule detection, cardiac sizing, and incidental bone findings — not a single unified process. MoE formalizes this as an architectural prior: let the model learn *which* expert to consult, rather than forcing all knowledge through a single pathway.

This survey argues that MoE's relevance to medicine extends beyond parameter efficiency. It is a **structural hypothesis about clinical reasoning** — that expertise is modular, conditional, and context-dependent.

---

## Structure

| Section | Content |
|---|---|
| 1. Introduction | Clinical motivation, scope, survey methodology |
| 2. Foundations | MoE theory, gating functions, sparse vs. dense routing |
| 3. Expert Characterization | Taxonomy of expert specialization axes in medical contexts |
| 4. Routing Mechanisms | Top-k, expert-choice, soft routing, auxiliary losses |
| 5. Expert Similarity | Collapse, diversity objectives, representation analysis |
| 6. Medical Applications | Imaging, NLP, multimodal, federated |
| 7. Open Problems | Interpretability, expert assignment stability, clinical trust |
| 8. Conclusion | Research agenda and outlook |

---

## Status

Manuscript in preparation. Target venue: a top-tier medical AI or machine learning venue (MICCAI, Nature Machine Intelligence, or similar).

*Preprint and full citation will be added upon submission.*
