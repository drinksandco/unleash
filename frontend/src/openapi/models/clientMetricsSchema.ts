/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { ClientMetricsSchemaBucket } from './clientMetricsSchemaBucket';

export interface ClientMetricsSchema {
    appName: string;
    instanceId?: string;
    environment?: string;
    bucket: ClientMetricsSchemaBucket;
}
