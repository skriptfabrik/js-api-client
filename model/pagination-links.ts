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
import { JsonApiLink } from './json-api-link';

/**
 * Pagination specifc links
 * @export
 * @interface PaginationLinks
 */
export interface PaginationLinks {
    /**
     * 
     * @type {JsonApiLink}
     * @memberof PaginationLinks
     */
    'self': JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof PaginationLinks
     */
    'first'?: JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof PaginationLinks
     */
    'last'?: JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof PaginationLinks
     */
    'prev'?: JsonApiLink;
    /**
     * 
     * @type {JsonApiLink}
     * @memberof PaginationLinks
     */
    'next'?: JsonApiLink;
}
