/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { SamlSettingsSchemaDefaultRootRole } from './samlSettingsSchemaDefaultRootRole';

export interface SamlSettingsSchema {
    enabled?: boolean;
    entityId: string;
    signOnUrl: string;
    certificate: string;
    signOutUrl?: string;
    spCertificate?: string;
    autoCreate?: boolean;
    defaultRootRole?: SamlSettingsSchemaDefaultRootRole;
    emailDomains?: string;
}
