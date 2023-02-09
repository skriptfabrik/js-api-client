/* tslint:disable */
/* eslint-disable */
/**
 * skriptfabrik API
 * This is the specification for the skriptfabrik API.
 *
 * The version of the OpenAPI document: 1.1.3+af59792
 * Contact: info@skriptfabrik.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AdminEntryPointResponseLinks } from './admin-entry-point-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { JsonApiServerDescription } from './json-api-server-description';

/**
 * 
 * @export
 * @interface AdminEntryPointResponse
 */
export interface AdminEntryPointResponse {
    /**
     * 
     * @type {object}
     * @memberof AdminEntryPointResponse
     */
    'meta': object;
    /**
     * 
     * @type {JsonApiServerDescription}
     * @memberof AdminEntryPointResponse
     */
    'jsonapi': JsonApiServerDescription;
    /**
     * 
     * @type {AdminEntryPointResponseLinks}
     * @memberof AdminEntryPointResponse
     */
    'links': AdminEntryPointResponseLinks;
}

