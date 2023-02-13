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
import { ClockifyServiceCollectionResponseIncludedInner } from './clockify-service-collection-response-included-inner';
// May contain unused imports in some cases
// @ts-ignore
import { ClockifyServiceResource } from './clockify-service-resource';

/**
 * 
 * @export
 * @interface ClockifyServiceResponse
 */
export interface ClockifyServiceResponse {
    /**
     * 
     * @type {ClockifyServiceResource}
     * @memberof ClockifyServiceResponse
     */
    'data': ClockifyServiceResource;
    /**
     * 
     * @type {Set<ClockifyServiceCollectionResponseIncludedInner>}
     * @memberof ClockifyServiceResponse
     */
    'included'?: Set<ClockifyServiceCollectionResponseIncludedInner>;
}

