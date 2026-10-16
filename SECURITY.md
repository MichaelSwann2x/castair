# Castair Security Model

## Isolation Guarantee
Every organisation (tenant) runs inside a hard sandbox:
- Dedicated encryption keys
- Dedicated database schema / row isolation
- Dedicated object storage prefix
- Agent runtime cannot see or reach other tenants
- Network policies prevent lateral movement

## Encryption
- Data at rest: AES-256-GCM with tenant-specific keys
- Data in transit: TLS 1.3 only
- Optional customer-managed keys (CMK)
- Optional air-gapped / on-prem deployment

## Audit
Immutable, append-only audit log for every:
- Agent action
- Human approval / rejection
- Data access
- Configuration change

Log entries are cryptographically chained and cannot be altered by the tenant or platform operators without detection.

## Airworthiness Control
No agent may issue or finalise:
- Return-to-Service
- Airworthiness release
- Final inspection sign-off

These actions require explicit human authority with recorded identity, timestamp, and regulatory basis.

## Roles
- Inspector
- RTS Authority / Certifying Staff
- CAMO Engineer
- Admin
- Viewer (read-only)

Principle of least privilege is enforced at API and agent-tool level.
