/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */

export interface InstanceAdminStatsSchema {
    instanceId: string;
    timestamp?: string | null;
    versionOSS?: string;
    versionEnterprise?: string;
    users?: number;
    featureToggles?: number;
    projects?: number;
    contextFields?: number;
    roles?: number;
    groups?: number;
    environments?: number;
    segments?: number;
    strategies?: number;
    SAMLenabled?: number;
    OIDCenabled?: number;
    sum?: string;
}
