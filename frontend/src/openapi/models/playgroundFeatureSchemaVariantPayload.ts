/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { PlaygroundFeatureSchemaVariantPayloadType } from './playgroundFeatureSchemaVariantPayloadType';

/**
 * An optional payload attached to the variant.
 */
export type PlaygroundFeatureSchemaVariantPayload = {
    /** The format of the payload. */
    type: PlaygroundFeatureSchemaVariantPayloadType;
    /** The payload value stringified. */
    value: string;
};
