/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { OidcSettingsSchemaDefaultRootRole } from './oidcSettingsSchemaDefaultRootRole';

export interface OidcSettingsSchema {
    enabled?: boolean;
    discoverUrl?: string;
    clientId: string;
    secret: string;
    autoCreate?: boolean;
    enableSingleSignOut?: boolean;
    defaultRootRole?: OidcSettingsSchemaDefaultRootRole;
    emailDomains?: string;
    acrValues?: string;
}
