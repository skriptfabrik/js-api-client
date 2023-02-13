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
 * Company Request Object
 * @export
 * @interface MOCOCompanyWebhookRequest
 */
export interface MOCOCompanyWebhookRequest {
    /**
     * 
     * @type {number}
     * @memberof MOCOCompanyWebhookRequest
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof MOCOCompanyWebhookRequest
     */
    'type': MOCOCompanyWebhookRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MOCOCompanyWebhookRequest
     */
    'name': string;
}

export const MOCOCompanyWebhookRequestTypeEnum = {
    Customer: 'customer',
    Supplier: 'supplier',
    Organization: 'organization'
} as const;

export type MOCOCompanyWebhookRequestTypeEnum = typeof MOCOCompanyWebhookRequestTypeEnum[keyof typeof MOCOCompanyWebhookRequestTypeEnum];


