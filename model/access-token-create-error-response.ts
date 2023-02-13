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
 * 
 * @export
 * @interface AccessTokenCreateErrorResponse
 */
export interface AccessTokenCreateErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof AccessTokenCreateErrorResponse
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof AccessTokenCreateErrorResponse
     */
    'title': string;
    /**
     * 
     * @type {number}
     * @memberof AccessTokenCreateErrorResponse
     */
    'status': AccessTokenCreateErrorResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AccessTokenCreateErrorResponse
     */
    'detail': string;
}

export const AccessTokenCreateErrorResponseStatusEnum = {
    NUMBER_400: 400
} as const;

export type AccessTokenCreateErrorResponseStatusEnum = typeof AccessTokenCreateErrorResponseStatusEnum[keyof typeof AccessTokenCreateErrorResponseStatusEnum];

