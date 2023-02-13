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
import { MocoSettingsRelationship } from './moco-settings-relationship';
// May contain unused imports in some cases
// @ts-ignore
import { UserRelationship } from './user-relationship';

/**
 * 
 * @export
 * @interface MocoServiceRelationships
 */
export interface MocoServiceRelationships {
    /**
     * 
     * @type {MocoSettingsRelationship}
     * @memberof MocoServiceRelationships
     */
    'settings': MocoSettingsRelationship;
    /**
     * 
     * @type {UserRelationship}
     * @memberof MocoServiceRelationships
     */
    'user': UserRelationship;
}

