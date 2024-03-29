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
import { ClockifyUserResource } from './clockify-user-resource';
// May contain unused imports in some cases
// @ts-ignore
import { ClockifyUsersCollectionResponseLinks } from './clockify-users-collection-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { ClockifyUsersCollectionResponseMeta } from './clockify-users-collection-response-meta';
// May contain unused imports in some cases
// @ts-ignore
import { UserResource } from './user-resource';

/**
 * 
 * @export
 * @interface ClockifyUsersCollectionResponse
 */
export interface ClockifyUsersCollectionResponse {
    /**
     * 
     * @type {ClockifyUsersCollectionResponseLinks}
     * @memberof ClockifyUsersCollectionResponse
     */
    'links': ClockifyUsersCollectionResponseLinks;
    /**
     * 
     * @type {ClockifyUsersCollectionResponseMeta}
     * @memberof ClockifyUsersCollectionResponse
     */
    'meta': ClockifyUsersCollectionResponseMeta;
    /**
     * 
     * @type {Array<ClockifyUserResource>}
     * @memberof ClockifyUsersCollectionResponse
     */
    'data'?: Array<ClockifyUserResource>;
    /**
     * 
     * @type {Array<UserResource>}
     * @memberof ClockifyUsersCollectionResponse
     */
    'included'?: Array<UserResource>;
}

