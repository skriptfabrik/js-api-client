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
import { MocoSettingsRelationship } from './moco-settings-relationship';
// May contain unused imports in some cases
// @ts-ignore
import { UserRelationship } from './user-relationship';

/**
 * 
 * @export
 * @interface MocoServiceCreateRequestRelationships
 */
export interface MocoServiceCreateRequestRelationships {
    /**
     * 
     * @type {MocoSettingsRelationship}
     * @memberof MocoServiceCreateRequestRelationships
     */
    'settings': MocoSettingsRelationship;
    /**
     * 
     * @type {UserRelationship}
     * @memberof MocoServiceCreateRequestRelationships
     */
    'user': UserRelationship;
}

