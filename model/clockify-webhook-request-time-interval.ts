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
import { ClockifyWebhookRequestTimeIntervalDuration } from './clockify-webhook-request-time-interval-duration';
// May contain unused imports in some cases
// @ts-ignore
import { ClockifyWebhookRequestTimeIntervalEnd } from './clockify-webhook-request-time-interval-end';

/**
 * 
 * @export
 * @interface ClockifyWebhookRequestTimeInterval
 */
export interface ClockifyWebhookRequestTimeInterval {
    /**
     * 
     * @type {Date}
     * @memberof ClockifyWebhookRequestTimeInterval
     */
    'start': Date;
    /**
     * 
     * @type {ClockifyWebhookRequestTimeIntervalEnd}
     * @memberof ClockifyWebhookRequestTimeInterval
     */
    'end'?: ClockifyWebhookRequestTimeIntervalEnd;
    /**
     * 
     * @type {ClockifyWebhookRequestTimeIntervalDuration}
     * @memberof ClockifyWebhookRequestTimeInterval
     */
    'duration'?: ClockifyWebhookRequestTimeIntervalDuration;
}
