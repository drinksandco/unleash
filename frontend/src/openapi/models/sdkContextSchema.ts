/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { SdkContextSchemaProperties } from './sdkContextSchemaProperties';

/**
 * The Unleash context as modeled in client SDKs
 */
export interface SdkContextSchema {
    appName: string;
    currentTime?: string;
    /** @deprecated */
    environment?: string;
    properties?: SdkContextSchemaProperties;
    remoteAddress?: string;
    sessionId?: string;
    userId?: string;
    [key: string]: any;
}
