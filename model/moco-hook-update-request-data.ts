/* tslint:disable */
/* eslint-disable */
/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 2.0.0+0fee254
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { MocoHookAttributes } from './moco-hook-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { MocoHookUpdateRequestRelationships } from './moco-hook-update-request-relationships';

/**
 * 
 * @export
 * @interface MocoHookUpdateRequestData
 */
export interface MocoHookUpdateRequestData {
    /**
     * Resource type
     * @type {string}
     * @memberof MocoHookUpdateRequestData
     */
    'type': MocoHookUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {MocoHookAttributes}
     * @memberof MocoHookUpdateRequestData
     */
    'attributes': MocoHookAttributes;
    /**
     * 
     * @type {MocoHookUpdateRequestRelationships}
     * @memberof MocoHookUpdateRequestData
     */
    'relationships': MocoHookUpdateRequestRelationships;
}

export const MocoHookUpdateRequestDataTypeEnum = {
    MocoHook: 'MocoHook'
} as const;

export type MocoHookUpdateRequestDataTypeEnum = typeof MocoHookUpdateRequestDataTypeEnum[keyof typeof MocoHookUpdateRequestDataTypeEnum];

