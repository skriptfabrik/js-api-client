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
import { JsonApiServerDescriptionMeta } from './json-api-server-description-meta';

/**
 * An object describing the server implementation
 * @export
 * @interface JsonApiServerDescription
 */
export interface JsonApiServerDescription {
    /**
     * The JSON:API version supported by the server.
     * @type {string}
     * @memberof JsonApiServerDescription
     */
    'version'?: string;
    /**
     * 
     * @type {JsonApiServerDescriptionMeta}
     * @memberof JsonApiServerDescription
     */
    'meta'?: JsonApiServerDescriptionMeta;
}
