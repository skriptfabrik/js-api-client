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
 * The Clockify Service Attributes.
 * @export
 * @interface ClockifyServiceAttributes
 */
export interface ClockifyServiceAttributes {
    /**
     * Clockify service identifier
     * @type {string}
     * @memberof ClockifyServiceAttributes
     */
    '_id'?: string;
    /**
     * MOCO service status
     * @type {string}
     * @memberof ClockifyServiceAttributes
     */
    'status': ClockifyServiceAttributesStatusEnum;
    /**
     * MOCO API key
     * @type {string}
     * @memberof ClockifyServiceAttributes
     */
    'apiKey': string;
}

export const ClockifyServiceAttributesStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;

export type ClockifyServiceAttributesStatusEnum = typeof ClockifyServiceAttributesStatusEnum[keyof typeof ClockifyServiceAttributesStatusEnum];


