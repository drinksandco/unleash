/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { ProxyMetricsSchemaBucket } from './proxyMetricsSchemaBucket';

export interface ProxyMetricsSchema {
    appName: string;
    instanceId: string;
    environment?: string;
    bucket: ProxyMetricsSchemaBucket;
}
