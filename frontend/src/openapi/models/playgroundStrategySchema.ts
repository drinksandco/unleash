/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { PlaygroundStrategySchemaResult } from './playgroundStrategySchemaResult';
import type { PlaygroundSegmentSchema } from './playgroundSegmentSchema';
import type { PlaygroundConstraintSchema } from './playgroundConstraintSchema';
import type { ParametersSchema } from './parametersSchema';

export interface PlaygroundStrategySchema {
    /** The strategy's name. */
    name: string;
    /** The strategy's id. */
    id: string;
    /** The strategy's evaluation result. If the strategy is a custom strategy that Unleash can't evaluate, `evaluationStatus` will be `unknown`. Otherwise, it will be `true` or `false` */
    result: PlaygroundStrategySchemaResult;
    /** The strategy's segments and their evaluation results. */
    segments: PlaygroundSegmentSchema[];
    /** The strategy's constraints and their evaluation results. */
    constraints: PlaygroundConstraintSchema[];
    /** The strategy's constraints and their evaluation results. */
    parameters: ParametersSchema;
}
