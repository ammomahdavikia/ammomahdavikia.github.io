---
title: "Lumbar Spine MRI Segmentation (RSNA 2024 / SPIDER)"
excerpt: "Automated segmentation of lumbar spinal structures from 35GB of multimodal MRI data using nnUNet, with custom slice-fusion pipelines for vertebrae, intervertebral discs, and spinal canal."
collection: portfolio
date: 2024-09-01
tags:
  - Medical Imaging
  - Segmentation
  - nnUNet
  - MRI
  - Radiology AI
header:
  teaser: images/projects/spider-teaser.png
---

## Overview

The [SPIDER dataset](https://spider.grand-challenge.org/) and RSNA 2024 challenge target automatic segmentation of lumbar spine structures from MRI — a task with direct clinical value in diagnosing disc herniation, spinal stenosis, and degenerative disease. This project designed and trained a full segmentation pipeline handling **35GB of DICOM and NIfTI data** across multiple MRI modalities.

---

## Pipeline

### Data Engineering

Working with raw clinical MRI data required substantial preprocessing before any model training:

- **DICOM metadata extraction** — series UID parsing, acquisition plane detection, sequence type identification (T1, T2, STIR)
- **NIfTI conversion and alignment** — resampling to isotropic voxel spacing, orientation normalization (RAS standard)
- **Modality fusion** — co-registered T1 and T2 volumes merged as multi-channel input to provide complementary tissue contrast

35GB of heterogeneous clinical data with inconsistent acquisition parameters is a different problem from a clean benchmark dataset. A significant fraction of pipeline effort went into making inputs consistent before a model sees them.

### Model — nnUNet

[nnUNet](https://github.com/MIC-DKFZ/nnUNet) was selected for its self-configuring behavior: it automatically determines patch size, batch size, network topology, and normalization strategy from dataset fingerprints — well-suited when compute budget for hyperparameter search is limited.

- **3D full-resolution configuration** for volumetric context
- **Slice-based ensemble** for structures with high inter-slice variability (discs vs. vertebral bodies)
- Custom **postprocessing** to enforce anatomical ordering of predicted vertebral labels (L1–L5, S1)

### Targets

| Structure | Challenge |
|---|---|
| Vertebral bodies (L1–S1) | Instance segmentation, label ordering |
| Intervertebral discs | Small structures, high shape variability |
| Spinal canal | Thin tubular structure, requires volumetric context |

---

## Key Learnings

- Self-configuring frameworks like nnUNet dramatically reduce engineering overhead but require domain knowledge to interpret their automatic decisions (e.g., understanding why it selects a given patch size)
- Multi-modality fusion is only beneficial when co-registration is accurate — misaligned T1/T2 inputs actively degrade performance
- Anatomical label ordering is a post-prediction problem, not a modeling problem — enforcing L1→S1 ordering heuristically is more reliable than relying on softmax outputs alone

---

## Tools & Stack

`Python` `nnUNet` `MONAI` `SimpleITK` `Pydicom` `NiBabel` `Docker` `Kaggle GPU`
