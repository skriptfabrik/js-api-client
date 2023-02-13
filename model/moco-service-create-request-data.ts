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
import { MocoServiceAttributes } from './moco-service-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { MocoServiceCreateRequestRelationships } from './moco-service-create-request-relationships';

/**
 * 
 * @export
 * @interface MocoServiceCreateRequestData
 */
export interface MocoServiceCreateRequestData {
    /**
     * Resource type
     * @type {string}
     * @memberof MocoServiceCreateRequestData
     */
    'type': MocoServiceCreateRequestDataTypeEnum;
    /**
     * 
     * @type {MocoServiceAttributes}
     * @memberof MocoServiceCreateRequestData
     */
    'attributes': MocoServiceAttributes;
    /**
     * 
     * @type {MocoServiceCreateRequestRelationships}
     * @memberof MocoServiceCreateRequestData
     */
    'relationships': MocoServiceCreateRequestRelationships;
}

export const MocoServiceCreateRequestDataTypeEnum = {
    MocoService: 'MocoService'
} as const;

export type MocoServiceCreateRequestDataTypeEnum = typeof MocoServiceCreateRequestDataTypeEnum[keyof typeof MocoServiceCreateRequestDataTypeEnum];

