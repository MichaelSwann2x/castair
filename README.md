# Castair

**Aircraft Quality Control Inspector · Return-to-Service (RTS) Inspector · Aviation Safety Inspector Platform**

Castair is a singular, highly encrypted, multi-tenant agentic service for aviation inspection and quality control. It unifies the Carstair agentic cores (Illyana engineering, Human Voice, Departmental Agentic OS, RAVP, Spin-Up mass agents, ImHex binary patterns, REA reverse-engineering) with a full suite of aviation-specific agents and the features inspectors actually ask for.

Every tenant lives in a hard-isolated encrypted sandbox. No cross-tenant data leakage is possible by design.

**Live product direction:** agentic-aviation.com style agents + the missing closed-loop visual, human-factors, knowledge-transfer, multi-site, and explainable-airworthiness capabilities, delivered in an Attio-grade CRM interface.

---

## Core Promise

- Human-in-the-loop on every airworthiness / RTS / final sign-off decision
- Full attribution & immutable audit trail of every agent action
- Dual-authority (FAA + EASA) support
- Sandboxed, encrypted, private accounts — aircraft-quality isolation
- Attio-inspired minimal, data-dense, precise UI

## Product Modules

### 1. Inspection CRM (Attio-style)
- Aircraft, fleet, work packages, findings, task cards, work orders as first-class records
- Relational views, custom attributes, activity timeline, universal context
- Mobile / hangar-floor usable

### 2. Agentic Workforce (always-on specialists)
**Document & Compliance**
- AD/SB Monitor & Applicability Engine
- Engineering Order Drafter
- Work-package Completeness Checker
- AMM / FIM / SB Knowledge Retrieval

**Inspection → Action**
- Closed-loop Visual Inspection Agent (borescope / drone / surface → SRM tolerance measure → disposition language → exact write-up + follow-on task cards)
- Integrated NDT + Visual + Records correlator
- Inspection Work Order Generator

**Scheduling & Capacity**
- Technician matching by certification & availability
- TAT / bay scenario planning
- Multi-site / multi-country travel prep agent (local regs, forms, language packs, MRO capability matrix)

**Materials & Procurement**
- Parts prediction, reservation, kitting
- Supplier ranking & concession request agent with predicted acceptance probability

**Diagnostic & Knowledge**
- Cross-fleet repetitive-defect agent with MEL/CDL impact & deferred-item risk scoring
- Expert-knowledge transfer agent (captures senior inspector reasoning, surfaces to juniors in real time)
- Explainable Airworthiness Reasoning Agent (exact regulatory path + historical precedents in audit-ready plain language)
- Fatigue / human-factors aware checklist adjuster

**Orchestrator**
- Master agent maintains shared real-time context (aircraft condition, decisions, deadlines) across all specialists

### 3. Security Model
- Per-tenant encrypted data plane (AES-256-GCM at rest, TLS 1.3 in transit)
- Hard process / database / storage isolation (sandbox per organisation)
- Zero-trust internal API
- Full audit log that cannot be altered by the tenant
- Optional air-gapped / on-prem deployment path

### 4. Carstair Engine
The underlying agent runtime is the Carstair skill:
- Illyana (senior engineering + YAGNI + TDD)
- Human Voice (natural, non-AI prose)
- Departmental Agentic OS + Verification gates
- RAVP claim verification
- Spin-Up company structure for large investigations
- ImHex Pattern Language for binary / firmware structure work
- REA workflows for reverse-engineering of proprietary tooling or data formats

## Tech Stack (initial)
- Frontend: Next.js + TypeScript, Attio-inspired design tokens (Inter, minimal cards, precise grids)
- Backend: Node / TypeScript, hard multi-tenancy
- Agents: Carstair runtime + specialised aviation agents
- Storage: encrypted per-tenant databases + object store
- Auth: SSO + hardware-key ready, role-based (Inspector, RTS Authority, CAMO, Admin)

## Status
Foundation commit. Architecture, security model, agent catalogue and design system are defined. Implementation proceeds module by module with verification gates.

## Licence
Proprietary — Castair / MichaelSwann2x
