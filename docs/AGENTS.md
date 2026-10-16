# Castair Agent Catalogue

All agents run inside the tenant sandbox under Carstair Departmental OS + Verification gates. Human-in-the-loop is mandatory for airworthiness outcomes.

## Document / Compliance Agents
- **AD/SB Monitor** — continuous OEM portal watch, structured extraction, applicability evaluation
- **Engineering Order Drafter** — produces draft EOs from AD/SB + aircraft configuration
- **Work-Package Completeness Checker** — verifies required cards, materials, certifications present
- **AMM Revision Engineer** — tracks manual updates and impact on open work

## Inspection-to-Action Agents
- **Closed-Loop Visual Inspection Agent** — imagery (borescope/drone/surface) → SRM tolerance measurement → disposition language → write-up + follow-on task cards
- **Integrated NDT + Visual + Records Agent** — correlates NDT results with visual findings and logbook history in one pass
- **Inspection Work Order Generator**
- **Post-Maintenance Doc Reviewer**

## Scheduling / Capacity
- **Work Order Scheduler** — technician matching by certs + availability
- **TAT / Bay Scenario Planner**
- **Multi-Site Travel Prep Agent** — local regulatory differences, forms, language packs, MRO capability matrix

## Materials / Procurement
- **Parts Prediction & Reservation**
- **Supplier Ranking & Concession Agent** — drafts concession requests with predicted acceptance probability, tracks status

## Diagnostic / Knowledge
- **Cross-Fleet Repetitive Defect Agent** — MEL/CDL impact + deferred-item risk scoring
- **Expert Knowledge Transfer Agent** — captures senior reasoning, surfaces to juniors in real time
- **Explainable Airworthiness Reasoning Agent** — regulatory path + historical precedents in audit-ready language
- **Fatigue / Human-Factors Agent** — adjusts checklists or flags high-risk zones based on shift/workload history

## Orchestrator
- **Master Context Agent** — shared real-time aircraft condition, decisions, deadlines across all specialists

## Carstair Cores (always available)
Illyana, Human Voice, Departmental OS, RAVP, Spin-Up, ImHex Pattern Language, REA reverse-engineering workflows.
