/**
 * Castair Agent Registry
 * All agents execute only inside the caller's tenant sandbox.
 * Safety-critical outputs require human approval gates.
 */

export type AgentCategory =
  | "document-compliance"
  | "inspection-to-action"
  | "scheduling"
  | "materials"
  | "diagnostic-knowledge"
  | "orchestrator"
  | "carstair-core";

export interface AgentDefinition {
  id: string;
  name: string;
  category: AgentCategory;
  description: string;
  requiresHumanApproval: boolean;
  airworthinessRelevant: boolean;
}

export const AGENT_REGISTRY: AgentDefinition[] = [
  {
    id: "ad-sb-monitor",
    name: "AD/SB Monitor",
    category: "document-compliance",
    description: "Continuous OEM portal monitoring, structured extraction, applicability evaluation",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "eo-drafter",
    name: "Engineering Order Drafter",
    category: "document-compliance",
    description: "Drafts Engineering Orders from AD/SB + aircraft configuration",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "work-package-completeness",
    name: "Work-Package Completeness Checker",
    category: "document-compliance",
    description: "Verifies required cards, materials and certifications are present",
    requiresHumanApproval: false,
    airworthinessRelevant: true,
  },
  {
    id: "closed-loop-visual",
    name: "Closed-Loop Visual Inspection Agent",
    category: "inspection-to-action",
    description: "Imagery → SRM tolerance measure → disposition language → write-up + task cards",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "ndt-visual-records",
    name: "Integrated NDT + Visual + Records Agent",
    category: "inspection-to-action",
    description: "Correlates NDT, visual findings and logbook history in one pass",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "inspection-wo-generator",
    name: "Inspection Work Order Generator",
    category: "inspection-to-action",
    description: "Turns findings into structured work orders and task cards",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "scheduler",
    name: "Work Order Scheduler",
    category: "scheduling",
    description: "Matches technicians by certification and availability",
    requiresHumanApproval: false,
    airworthinessRelevant: false,
  },
  {
    id: "multi-site-travel",
    name: "Multi-Site Travel Prep Agent",
    category: "scheduling",
    description: "Local regulatory differences, forms, language packs, MRO capability matrix",
    requiresHumanApproval: false,
    airworthinessRelevant: false,
  },
  {
    id: "parts-prediction",
    name: "Parts Prediction & Reservation",
    category: "materials",
    description: "Predicts, reserves and kits parts under certification rules",
    requiresHumanApproval: false,
    airworthinessRelevant: false,
  },
  {
    id: "concession-agent",
    name: "Supplier Concession Agent",
    category: "materials",
    description: "Drafts concession requests with predicted acceptance probability and tracks status",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "repetitive-defect",
    name: "Cross-Fleet Repetitive Defect Agent",
    category: "diagnostic-knowledge",
    description: "MEL/CDL impact and deferred-item risk scoring",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "knowledge-transfer",
    name: "Expert Knowledge Transfer Agent",
    category: "diagnostic-knowledge",
    description: "Captures senior inspector reasoning and surfaces it to juniors in real time",
    requiresHumanApproval: false,
    airworthinessRelevant: false,
  },
  {
    id: "explainable-airworthiness",
    name: "Explainable Airworthiness Reasoning Agent",
    category: "diagnostic-knowledge",
    description: "Shows exact regulatory path and historical precedents in audit-ready language",
    requiresHumanApproval: true,
    airworthinessRelevant: true,
  },
  {
    id: "fatigue-human-factors",
    name: "Fatigue / Human-Factors Agent",
    category: "diagnostic-knowledge",
    description: "Adjusts checklists or flags high-risk zones based on shift and workload history",
    requiresHumanApproval: false,
    airworthinessRelevant: true,
  },
  {
    id: "master-context",
    name: "Master Context Orchestrator",
    category: "orchestrator",
    description: "Maintains shared real-time aircraft condition, decisions and deadlines",
    requiresHumanApproval: false,
    airworthinessRelevant: true,
  },
];

export function getAgent(id: string): AgentDefinition | undefined {
  return AGENT_REGISTRY.find((a) => a.id === id);
}

export function listAgentsByCategory(category: AgentCategory): AgentDefinition[] {
  return AGENT_REGISTRY.filter((a) => a.category === category);
}
