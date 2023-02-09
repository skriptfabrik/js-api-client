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
import { ClockifySettingsRelationship } from './clockify-settings-relationship';
// May contain unused imports in some cases
// @ts-ignore
import { OrganizationRelationship } from './organization-relationship';

/**
 * 
 * @export
 * @interface ClockifyServiceUpdateRequestRelationships
 */
export interface ClockifyServiceUpdateRequestRelationships {
    /**
     * 
     * @type {OrganizationRelationship}
     * @memberof ClockifyServiceUpdateRequestRelationships
     */
    'organization': OrganizationRelationship;
    /**
     * 
     * @type {ClockifySettingsRelationship}
     * @memberof ClockifyServiceUpdateRequestRelationships
     */
    'settings': ClockifySettingsRelationship;
}

