/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { LegalValueSchema } from './legalValueSchema';

export interface UpsertContextFieldSchema {
    name: string;
    description?: string;
    stickiness?: boolean;
    sortOrder?: number;
    legalValues?: LegalValueSchema[];
}
