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
import { ClockifyServiceCollectionResponseLinks } from './clockify-service-collection-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { ClockifyServiceCollectionResponseMeta } from './clockify-service-collection-response-meta';
// May contain unused imports in some cases
// @ts-ignore
import { ClockifyServiceResource } from './clockify-service-resource';

/**
 * 
 * @export
 * @interface ClockifyServiceCollectionResponse
 */
export interface ClockifyServiceCollectionResponse {
    /**
     * 
     * @type {ClockifyServiceCollectionResponseLinks}
     * @memberof ClockifyServiceCollectionResponse
     */
    'links': ClockifyServiceCollectionResponseLinks;
    /**
     * 
     * @type {ClockifyServiceCollectionResponseMeta}
     * @memberof ClockifyServiceCollectionResponse
     */
    'meta': ClockifyServiceCollectionResponseMeta;
    /**
     * 
     * @type {Set<ClockifyServiceResource>}
     * @memberof ClockifyServiceCollectionResponse
     */
    'data': Set<ClockifyServiceResource>;
    /**
     * 
     * @type {Set<ClockifyServiceCollectionResponseIncludedInner>}
     * @memberof ClockifyServiceCollectionResponse
     */
    'included'?: Set<ClockifyServiceCollectionResponseIncludedInner>;
}
