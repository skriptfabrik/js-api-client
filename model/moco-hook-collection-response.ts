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


// May contain unused imports in some cases
// @ts-ignore
import { MocoHookCollectionResponseLinks } from './moco-hook-collection-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { MocoHookCollectionResponseMeta } from './moco-hook-collection-response-meta';
// May contain unused imports in some cases
// @ts-ignore
import { MocoHookResource } from './moco-hook-resource';
// May contain unused imports in some cases
// @ts-ignore
import { OrganizationResource } from './organization-resource';

/**
 * 
 * @export
 * @interface MocoHookCollectionResponse
 */
export interface MocoHookCollectionResponse {
    /**
     * 
     * @type {MocoHookCollectionResponseLinks}
     * @memberof MocoHookCollectionResponse
     */
    'links': MocoHookCollectionResponseLinks;
    /**
     * 
     * @type {MocoHookCollectionResponseMeta}
     * @memberof MocoHookCollectionResponse
     */
    'meta': MocoHookCollectionResponseMeta;
    /**
     * 
     * @type {Set<MocoHookResource>}
     * @memberof MocoHookCollectionResponse
     */
    'data': Set<MocoHookResource>;
    /**
     * 
     * @type {Set<OrganizationResource>}
     * @memberof MocoHookCollectionResponse
     */
    'included'?: Set<OrganizationResource>;
}

