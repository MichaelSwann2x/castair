/**
 * Human-in-the-loop approval gate for airworthiness-relevant actions.
 * No RTS or final airworthiness decision may bypass this module.
 */

import { z } from "zod";
import type { TenantId } from "../tenant";

export const ApprovalRequestSchema = z.object({
  tenantId: z.string().uuid(),
  agentId: z.string(),
  actionType: z.enum([
    "return-to-service",
    "airworthiness-release",
    "final-inspection-signoff",
    "engineering-order-issue",
    "concession-accept",
    "other-safety-critical",
  ]),
  summary: z.string().min(1),
  evidenceRefs: z.array(z.string()).default([]),
  proposedBy: z.string(), // agent or user id
  aircraftId: z.string().optional(),
  workPackageId: z.string().optional(),
});

export type ApprovalRequest = z.infer<typeof ApprovalRequestSchema>;

export interface ApprovalDecision {
  requestId: string;
  approved: boolean;
  decidedBy: string; // human user id with authority
  decidedAt: string; // ISO timestamp
  regulatoryBasis?: string;
  notes?: string;
}

/**
 * Stub: in production this writes an immutable audit record and
 * only returns success when a qualified human has signed.
 */
export async function requestHumanApproval(
  req: ApprovalRequest
): Promise<{ requestId: string; status: "pending" }> {
  // TODO: persist to tenant-scoped audit log + notify RTS Authority
  const requestId = crypto.randomUUID();
  return { requestId, status: "pending" };
}

export function isAirworthinessAction(actionType: ApprovalRequest["actionType"]): boolean {
  return [
    "return-to-service",
    "airworthiness-release",
    "final-inspection-signoff",
    "engineering-order-issue",
  ].includes(actionType);
}
