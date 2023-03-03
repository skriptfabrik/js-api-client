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


// May contain unused imports in some cases
// @ts-ignore
import { MOCOProjectWebhookRequestContract } from './mocoproject-webhook-request-contract';
// May contain unused imports in some cases
// @ts-ignore
import { MOCOProjectWebhookRequestCustomer } from './mocoproject-webhook-request-customer';

/**
 * Project Request Object
 * @export
 * @interface MOCOProjectWebhookRequest
 */
export interface MOCOProjectWebhookRequest {
    /**
     * 
     * @type {number}
     * @memberof MOCOProjectWebhookRequest
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof MOCOProjectWebhookRequest
     */
    'name': string;
    /**
     * 
     * @type {MOCOProjectWebhookRequestCustomer}
     * @memberof MOCOProjectWebhookRequest
     */
    'customer': MOCOProjectWebhookRequestCustomer;
    /**
     * 
     * @type {Set<MOCOProjectWebhookRequestContract>}
     * @memberof MOCOProjectWebhookRequest
     */
    'contracts': Set<MOCOProjectWebhookRequestContract>;
}

