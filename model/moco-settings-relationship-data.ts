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



/**
 * 
 * @export
 * @interface MocoSettingsRelationshipData
 */
export interface MocoSettingsRelationshipData {
    /**
     * Resource identifier
     * @type {string}
     * @memberof MocoSettingsRelationshipData
     */
    'id': string;
    /**
     * Resource type
     * @type {string}
     * @memberof MocoSettingsRelationshipData
     */
    'type': MocoSettingsRelationshipDataTypeEnum;
}

export const MocoSettingsRelationshipDataTypeEnum = {
    MocoSettings: 'MocoSettings'
} as const;

export type MocoSettingsRelationshipDataTypeEnum = typeof MocoSettingsRelationshipDataTypeEnum[keyof typeof MocoSettingsRelationshipDataTypeEnum];


