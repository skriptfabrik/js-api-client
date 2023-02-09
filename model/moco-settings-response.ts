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
import { MocoSettingsResource } from './moco-settings-resource';
// May contain unused imports in some cases
// @ts-ignore
import { OrganizationResource } from './organization-resource';

/**
 * 
 * @export
 * @interface MocoSettingsResponse
 */
export interface MocoSettingsResponse {
    /**
     * 
     * @type {MocoSettingsResource}
     * @memberof MocoSettingsResponse
     */
    'data': MocoSettingsResource;
    /**
     * 
     * @type {Set<OrganizationResource>}
     * @memberof MocoSettingsResponse
     */
    'included'?: Set<OrganizationResource>;
}

