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



/**
 * 
 * @export
 * @interface ClockifySettingsRelationshipData
 */
export interface ClockifySettingsRelationshipData {
    /**
     * Resource identifier
     * @type {string}
     * @memberof ClockifySettingsRelationshipData
     */
    'id': string;
    /**
     * Resource type
     * @type {string}
     * @memberof ClockifySettingsRelationshipData
     */
    'type': ClockifySettingsRelationshipDataTypeEnum;
}

export const ClockifySettingsRelationshipDataTypeEnum = {
    ClockifySettings: 'ClockifySettings'
} as const;

export type ClockifySettingsRelationshipDataTypeEnum = typeof ClockifySettingsRelationshipDataTypeEnum[keyof typeof ClockifySettingsRelationshipDataTypeEnum];


