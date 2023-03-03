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
import { MocoSettingsCollectionResponseLinks } from './moco-settings-collection-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { MocoSettingsCollectionResponseMeta } from './moco-settings-collection-response-meta';
// May contain unused imports in some cases
// @ts-ignore
import { MocoSettingsResource } from './moco-settings-resource';
// May contain unused imports in some cases
// @ts-ignore
import { OrganizationResource } from './organization-resource';

/**
 * 
 * @export
 * @interface MocoSettingsCollectionResponse
 */
export interface MocoSettingsCollectionResponse {
    /**
     * 
     * @type {MocoSettingsCollectionResponseLinks}
     * @memberof MocoSettingsCollectionResponse
     */
    'links': MocoSettingsCollectionResponseLinks;
    /**
     * 
     * @type {MocoSettingsCollectionResponseMeta}
     * @memberof MocoSettingsCollectionResponse
     */
    'meta': MocoSettingsCollectionResponseMeta;
    /**
     * 
     * @type {Set<MocoSettingsResource>}
     * @memberof MocoSettingsCollectionResponse
     */
    'data': Set<MocoSettingsResource>;
    /**
     * 
     * @type {Set<OrganizationResource>}
     * @memberof MocoSettingsCollectionResponse
     */
    'included'?: Set<OrganizationResource>;
}

