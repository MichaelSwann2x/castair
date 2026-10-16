# Castair Architecture

## High-Level

```
┌─────────────────────────────────────────────────────────────┐
│                     Castair Edge / CDN                      │
└────────────────────────────┬────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────┐
│              Auth + Tenant Router (zero-trust)              │
└────────────────────────────┬────────────────────────────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
┌─────────▼────────┐ ┌───────▼────────┐ ┌───────▼────────┐
│  Tenant Sandbox  │ │  Tenant Sandbox │ │  Tenant Sandbox │
│  (encrypted)     │ │  (encrypted)    │ │  (encrypted)    │
│                  │ │                 │ │                 │
│  • CRM DB        │ │  • CRM DB       │ │  • CRM DB       │
│  • Agent Runtime │ │  • Agent Runtime│ │  • Agent Runtime│
│  • Object Store  │ │  • Object Store │ │  • Object Store │
│  • Audit Log     │ │  • Audit Log    │ │  • Audit Log    │
└──────────────────┘ └─────────────────┘ └─────────────────┘
```

Each tenant sandbox is a hard isolation boundary (process, network, storage, encryption keys). Cross-tenant queries are architecturally impossible.

## Data Model (core entities)

- Organisation (tenant)
- User (role: Inspector | RTS Authority | CAMO Engineer | Admin | Viewer)
- Aircraft / Fleet
- Work Package
- Finding / Discrepancy
- Task Card / Work Order
- Engineering Order
- AD / SB Record + Applicability
- Inspection Session (with imagery, NDT results, timestamps, shift context)
- Audit Event (immutable)

## Agent Runtime

Carstair Departmental Agentic OS:
- Command issues tickets
- Specialists (AD Monitor, Visual Inspection, Knowledge Transfer, etc.) execute inside the tenant sandbox only
- Verification Bureau gates every safety-critical claim
- Human approval required for RTS / airworthiness sign-off
- Full provenance ledger attached to every deliverable

## Security Controls

1. Tenant-specific encryption keys (KMS)
2. Database row-level + schema-level isolation
3. Agent prompts and tools scoped to tenant data only
4. Immutable append-only audit log (tamper-evident)
5. Optional customer-managed keys / air-gapped mode
6. Session isolation + hardware security key support

## Regulatory Stance

Castair never auto-signs airworthiness. All RTS, final inspection, and regulatory disposition paths require explicit human authority approval with recorded identity and timestamp.
