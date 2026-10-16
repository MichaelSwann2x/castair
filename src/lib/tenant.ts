/**
 * Tenant isolation primitives.
 * Every data access path must carry a verified tenantId.
 * Cross-tenant access is architecturally forbidden.
 */

import { z } from "zod";

export const TenantIdSchema = z.string().uuid();
export type TenantId = z.infer<typeof TenantIdSchema>;

export interface TenantContext {
  tenantId: TenantId;
  organisationName: string;
  encryptionKeyId: string;
  roles: string[];
}

/**
 * Runtime guard: any function that touches tenant data must receive this.
 * In production this is derived from the authenticated session + KMS.
 */
export function assertTenantContext(ctx: TenantContext | null | undefined): asserts ctx is TenantContext {
  if (!ctx?.tenantId) {
    throw new Error("CASTAIR_SECURITY: missing tenant context — request rejected");
  }
}

/** Placeholder for per-tenant encrypted storage boundary */
export function getTenantStoragePrefix(tenantId: TenantId): string {
  return `tenant/${tenantId}/`;
}
