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
 * @interface CreateAccessTokenErrorResponse
 */
export interface CreateAccessTokenErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateAccessTokenErrorResponse
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccessTokenErrorResponse
     */
    'title': string;
    /**
     * 
     * @type {number}
     * @memberof CreateAccessTokenErrorResponse
     */
    'status': CreateAccessTokenErrorResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateAccessTokenErrorResponse
     */
    'detail': string;
}

export const CreateAccessTokenErrorResponseStatusEnum = {
    NUMBER_400: 400
} as const;

export type CreateAccessTokenErrorResponseStatusEnum = typeof CreateAccessTokenErrorResponseStatusEnum[keyof typeof CreateAccessTokenErrorResponseStatusEnum];


