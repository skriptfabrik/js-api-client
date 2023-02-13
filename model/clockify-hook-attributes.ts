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



/**
 * The Clockify Hook Attributes.
 * @export
 * @interface ClockifyHookAttributes
 */
export interface ClockifyHookAttributes {
    /**
     * Clockify hook identifier
     * @type {string}
     * @memberof ClockifyHookAttributes
     */
    '_id'?: string;
    /**
     * Clockify hook status
     * @type {string}
     * @memberof ClockifyHookAttributes
     */
    'status': ClockifyHookAttributesStatusEnum;
    /**
     * Clockify signature
     * @type {string}
     * @memberof ClockifyHookAttributes
     */
    'signature': string;
    /**
     * 
     * @type {string}
     * @memberof ClockifyHookAttributes
     */
    'event': ClockifyHookAttributesEventEnum;
}

export const ClockifyHookAttributesStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;

export type ClockifyHookAttributesStatusEnum = typeof ClockifyHookAttributesStatusEnum[keyof typeof ClockifyHookAttributesStatusEnum];
export const ClockifyHookAttributesEventEnum = {
    TimeEntryCreated: 'TIME_ENTRY_CREATED',
    TimeEntryUpdated: 'TIME_ENTRY_UPDATED',
    TimeEntryDeleted: 'TIME_ENTRY_DELETED',
    TimerStopped: 'TIMER_STOPPED'
} as const;

export type ClockifyHookAttributesEventEnum = typeof ClockifyHookAttributesEventEnum[keyof typeof ClockifyHookAttributesEventEnum];


