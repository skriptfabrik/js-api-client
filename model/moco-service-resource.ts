/* tslint:disable */
/* eslint-disable */
/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 2.1.0+e417cb8
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
import { MocoServiceRelationships } from './moco-service-relationships';

/**
 * The MOCO Service Resource.
 * @export
 * @interface MocoServiceResource
 */
export interface MocoServiceResource {
    /**
     * Resource identifier
     * @type {string}
     * @memberof MocoServiceResource
     */
    'id': string;
    /**
     * Resource type
     * @type {string}
     * @memberof MocoServiceResource
     */
    'type': MocoServiceResourceTypeEnum;
    /**
     * 
     * @type {MocoServiceAttributes}
     * @memberof MocoServiceResource
     */
    'attributes': MocoServiceAttributes;
    /**
     * 
     * @type {MocoServiceRelationships}
     * @memberof MocoServiceResource
     */
    'relationships': MocoServiceRelationships;
}

export const MocoServiceResourceTypeEnum = {
    MocoService: 'MocoService'
} as const;

export type MocoServiceResourceTypeEnum = typeof MocoServiceResourceTypeEnum[keyof typeof MocoServiceResourceTypeEnum];


