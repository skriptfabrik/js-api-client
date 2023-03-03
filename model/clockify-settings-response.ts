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
import { ClockifySettingsResource } from './clockify-settings-resource';
// May contain unused imports in some cases
// @ts-ignore
import { OrganizationResource } from './organization-resource';

/**
 * 
 * @export
 * @interface ClockifySettingsResponse
 */
export interface ClockifySettingsResponse {
    /**
     * 
     * @type {ClockifySettingsResource}
     * @memberof ClockifySettingsResponse
     */
    'data': ClockifySettingsResource;
    /**
     * 
     * @type {Set<OrganizationResource>}
     * @memberof ClockifySettingsResponse
     */
    'included'?: Set<OrganizationResource>;
}

