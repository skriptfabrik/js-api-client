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
import { MocoSettingsAttributes } from './moco-settings-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { MocoSettingsUpdateRequestRelationships } from './moco-settings-update-request-relationships';

/**
 * 
 * @export
 * @interface MocoSettingsUpdateRequestData
 */
export interface MocoSettingsUpdateRequestData {
    /**
     * Resource type
     * @type {string}
     * @memberof MocoSettingsUpdateRequestData
     */
    'type': MocoSettingsUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {MocoSettingsAttributes}
     * @memberof MocoSettingsUpdateRequestData
     */
    'attributes': MocoSettingsAttributes;
    /**
     * 
     * @type {MocoSettingsUpdateRequestRelationships}
     * @memberof MocoSettingsUpdateRequestData
     */
    'relationships': MocoSettingsUpdateRequestRelationships;
}

export const MocoSettingsUpdateRequestDataTypeEnum = {
    MocoSettings: 'MocoSettings'
} as const;

export type MocoSettingsUpdateRequestDataTypeEnum = typeof MocoSettingsUpdateRequestDataTypeEnum[keyof typeof MocoSettingsUpdateRequestDataTypeEnum];


