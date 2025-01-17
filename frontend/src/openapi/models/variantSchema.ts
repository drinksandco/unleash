/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { VariantSchemaPayload } from './variantSchemaPayload';
import type { OverrideSchema } from './overrideSchema';

export interface VariantSchema {
    name: string;
    weight: number;
    weightType?: string;
    stickiness?: string;
    payload?: VariantSchemaPayload;
    overrides?: OverrideSchema[];
}
