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
import { ClockifyServiceAttributes } from './clockify-service-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { ClockifyServiceRelationships } from './clockify-service-relationships';

/**
 * The Clockify Service Resource.
 * @export
 * @interface ClockifyServiceResource
 */
export interface ClockifyServiceResource {
    /**
     * Resource identifier
     * @type {string}
     * @memberof ClockifyServiceResource
     */
    'id': string;
    /**
     * Resource type
     * @type {string}
     * @memberof ClockifyServiceResource
     */
    'type': ClockifyServiceResourceTypeEnum;
    /**
     * 
     * @type {ClockifyServiceAttributes}
     * @memberof ClockifyServiceResource
     */
    'attributes': ClockifyServiceAttributes;
    /**
     * 
     * @type {ClockifyServiceRelationships}
     * @memberof ClockifyServiceResource
     */
    'relationships': ClockifyServiceRelationships;
}

export const ClockifyServiceResourceTypeEnum = {
    ClockifyService: 'ClockifyService'
} as const;

export type ClockifyServiceResourceTypeEnum = typeof ClockifyServiceResourceTypeEnum[keyof typeof ClockifyServiceResourceTypeEnum];

