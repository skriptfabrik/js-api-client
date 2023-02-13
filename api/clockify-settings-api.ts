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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ClockifySettingsCollectionResponse } from '../model';
// @ts-ignore
import { ClockifySettingsCreateRequest } from '../model';
// @ts-ignore
import { ClockifySettingsResponse } from '../model';
// @ts-ignore
import { ClockifySettingsUpdateRequest } from '../model';
// @ts-ignore
import { JsonApiError } from '../model';
/**
 * ClockifySettingsApi - axios parameter creator
 * @export
 */
export const ClockifySettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Create Clockify Settings
         * @param {string} [include] The Include Query Parameter.
         * @param {ClockifySettingsCreateRequest} [clockifySettingsCreateRequest] Create Clockify Settings Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClockifySettings: async (include?: string, clockifySettingsCreateRequest?: ClockifySettingsCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/clockify_settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(clockifySettingsCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Delete Clockify Settings
         * @param {string} clockifySettingsId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClockifySettings: async (clockifySettingsId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clockifySettingsId' is not null or undefined
            assertParamExists('deleteClockifySettings', 'clockifySettingsId', clockifySettingsId)
            const localVarPath = `/api/admin/clockify_settings/{clockifySettingsId}`
                .replace(`{${"clockifySettingsId"}}`, encodeURIComponent(String(clockifySettingsId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Retrieve MOCO Settings
         * @param {string} clockifySettingsId 
         * @param {string} [include] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifySettings: async (clockifySettingsId: string, include?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clockifySettingsId' is not null or undefined
            assertParamExists('getClockifySettings', 'clockifySettingsId', clockifySettingsId)
            const localVarPath = `/api/admin/clockify_settings/{clockifySettingsId}`
                .replace(`{${"clockifySettingsId"}}`, encodeURIComponent(String(clockifySettingsId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the [Clockify Settings Resource](/schemas/ClockifySettingsResource) collection.
         * @summary Retrieve Clockify Settings Collection
         * @param {number} [limit] The Limit Query Parameter. 
         * @param {number} [page] The Page Query Parameter. 
         * @param {string} [included] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifySettingsCollection: async (limit?: number, page?: number, included?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/clockify_settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (included !== undefined) {
                localVarQueryParameter['included'] = included;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Update Clockify Settings
         * @param {string} clockifySettingsId 
         * @param {ClockifySettingsUpdateRequest} [clockifySettingsUpdateRequest] Update Clockify Settings Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClockifySettings: async (clockifySettingsId: string, clockifySettingsUpdateRequest?: ClockifySettingsUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clockifySettingsId' is not null or undefined
            assertParamExists('updateClockifySettings', 'clockifySettingsId', clockifySettingsId)
            const localVarPath = `/api/admin/clockify_settings/{clockifySettingsId}`
                .replace(`{${"clockifySettingsId"}}`, encodeURIComponent(String(clockifySettingsId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(clockifySettingsUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClockifySettingsApi - functional programming interface
 * @export
 */
export const ClockifySettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClockifySettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Create Clockify Settings
         * @param {string} [include] The Include Query Parameter.
         * @param {ClockifySettingsCreateRequest} [clockifySettingsCreateRequest] Create Clockify Settings Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createClockifySettings(include?: string, clockifySettingsCreateRequest?: ClockifySettingsCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClockifySettingsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createClockifySettings(include, clockifySettingsCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Delete Clockify Settings
         * @param {string} clockifySettingsId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteClockifySettings(clockifySettingsId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteClockifySettings(clockifySettingsId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Retrieve MOCO Settings
         * @param {string} clockifySettingsId 
         * @param {string} [include] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClockifySettings(clockifySettingsId: string, include?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClockifySettingsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClockifySettings(clockifySettingsId, include, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the [Clockify Settings Resource](/schemas/ClockifySettingsResource) collection.
         * @summary Retrieve Clockify Settings Collection
         * @param {number} [limit] The Limit Query Parameter. 
         * @param {number} [page] The Page Query Parameter. 
         * @param {string} [included] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClockifySettingsCollection(limit?: number, page?: number, included?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClockifySettingsCollectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClockifySettingsCollection(limit, page, included, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Update Clockify Settings
         * @param {string} clockifySettingsId 
         * @param {ClockifySettingsUpdateRequest} [clockifySettingsUpdateRequest] Update Clockify Settings Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateClockifySettings(clockifySettingsId: string, clockifySettingsUpdateRequest?: ClockifySettingsUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClockifySettings(clockifySettingsId, clockifySettingsUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClockifySettingsApi - factory interface
 * @export
 */
export const ClockifySettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClockifySettingsApiFp(configuration)
    return {
        /**
         * Creates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Create Clockify Settings
         * @param {ClockifySettingsApiCreateClockifySettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClockifySettings(requestParameters: ClockifySettingsApiCreateClockifySettingsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ClockifySettingsResponse> {
            return localVarFp.createClockifySettings(requestParameters.include, requestParameters.clockifySettingsCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Delete Clockify Settings
         * @param {ClockifySettingsApiDeleteClockifySettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClockifySettings(requestParameters: ClockifySettingsApiDeleteClockifySettingsRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteClockifySettings(requestParameters.clockifySettingsId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Retrieve MOCO Settings
         * @param {ClockifySettingsApiGetClockifySettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifySettings(requestParameters: ClockifySettingsApiGetClockifySettingsRequest, options?: AxiosRequestConfig): AxiosPromise<ClockifySettingsResponse> {
            return localVarFp.getClockifySettings(requestParameters.clockifySettingsId, requestParameters.include, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the [Clockify Settings Resource](/schemas/ClockifySettingsResource) collection.
         * @summary Retrieve Clockify Settings Collection
         * @param {ClockifySettingsApiGetClockifySettingsCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifySettingsCollection(requestParameters: ClockifySettingsApiGetClockifySettingsCollectionRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ClockifySettingsCollectionResponse> {
            return localVarFp.getClockifySettingsCollection(requestParameters.limit, requestParameters.page, requestParameters.included, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
         * @summary Update Clockify Settings
         * @param {ClockifySettingsApiUpdateClockifySettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClockifySettings(requestParameters: ClockifySettingsApiUpdateClockifySettingsRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateClockifySettings(requestParameters.clockifySettingsId, requestParameters.clockifySettingsUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createClockifySettings operation in ClockifySettingsApi.
 * @export
 * @interface ClockifySettingsApiCreateClockifySettingsRequest
 */
export interface ClockifySettingsApiCreateClockifySettingsRequest {
    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof ClockifySettingsApiCreateClockifySettings
     */
    readonly include?: string

    /**
     * Create Clockify Settings Request
     * @type {ClockifySettingsCreateRequest}
     * @memberof ClockifySettingsApiCreateClockifySettings
     */
    readonly clockifySettingsCreateRequest?: ClockifySettingsCreateRequest
}

/**
 * Request parameters for deleteClockifySettings operation in ClockifySettingsApi.
 * @export
 * @interface ClockifySettingsApiDeleteClockifySettingsRequest
 */
export interface ClockifySettingsApiDeleteClockifySettingsRequest {
    /**
     * 
     * @type {string}
     * @memberof ClockifySettingsApiDeleteClockifySettings
     */
    readonly clockifySettingsId: string
}

/**
 * Request parameters for getClockifySettings operation in ClockifySettingsApi.
 * @export
 * @interface ClockifySettingsApiGetClockifySettingsRequest
 */
export interface ClockifySettingsApiGetClockifySettingsRequest {
    /**
     * 
     * @type {string}
     * @memberof ClockifySettingsApiGetClockifySettings
     */
    readonly clockifySettingsId: string

    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof ClockifySettingsApiGetClockifySettings
     */
    readonly include?: string
}

/**
 * Request parameters for getClockifySettingsCollection operation in ClockifySettingsApi.
 * @export
 * @interface ClockifySettingsApiGetClockifySettingsCollectionRequest
 */
export interface ClockifySettingsApiGetClockifySettingsCollectionRequest {
    /**
     * The Limit Query Parameter. 
     * @type {number}
     * @memberof ClockifySettingsApiGetClockifySettingsCollection
     */
    readonly limit?: number

    /**
     * The Page Query Parameter. 
     * @type {number}
     * @memberof ClockifySettingsApiGetClockifySettingsCollection
     */
    readonly page?: number

    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof ClockifySettingsApiGetClockifySettingsCollection
     */
    readonly included?: string
}

/**
 * Request parameters for updateClockifySettings operation in ClockifySettingsApi.
 * @export
 * @interface ClockifySettingsApiUpdateClockifySettingsRequest
 */
export interface ClockifySettingsApiUpdateClockifySettingsRequest {
    /**
     * 
     * @type {string}
     * @memberof ClockifySettingsApiUpdateClockifySettings
     */
    readonly clockifySettingsId: string

    /**
     * Update Clockify Settings Request
     * @type {ClockifySettingsUpdateRequest}
     * @memberof ClockifySettingsApiUpdateClockifySettings
     */
    readonly clockifySettingsUpdateRequest?: ClockifySettingsUpdateRequest
}

/**
 * ClockifySettingsApi - object-oriented interface
 * @export
 * @class ClockifySettingsApi
 * @extends {BaseAPI}
 */
export class ClockifySettingsApi extends BaseAPI {
    /**
     * Creates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
     * @summary Create Clockify Settings
     * @param {ClockifySettingsApiCreateClockifySettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifySettingsApi
     */
    public createClockifySettings(requestParameters: ClockifySettingsApiCreateClockifySettingsRequest = {}, options?: AxiosRequestConfig) {
        return ClockifySettingsApiFp(this.configuration).createClockifySettings(requestParameters.include, requestParameters.clockifySettingsCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
     * @summary Delete Clockify Settings
     * @param {ClockifySettingsApiDeleteClockifySettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifySettingsApi
     */
    public deleteClockifySettings(requestParameters: ClockifySettingsApiDeleteClockifySettingsRequest, options?: AxiosRequestConfig) {
        return ClockifySettingsApiFp(this.configuration).deleteClockifySettings(requestParameters.clockifySettingsId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
     * @summary Retrieve MOCO Settings
     * @param {ClockifySettingsApiGetClockifySettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifySettingsApi
     */
    public getClockifySettings(requestParameters: ClockifySettingsApiGetClockifySettingsRequest, options?: AxiosRequestConfig) {
        return ClockifySettingsApiFp(this.configuration).getClockifySettings(requestParameters.clockifySettingsId, requestParameters.include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the [Clockify Settings Resource](/schemas/ClockifySettingsResource) collection.
     * @summary Retrieve Clockify Settings Collection
     * @param {ClockifySettingsApiGetClockifySettingsCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifySettingsApi
     */
    public getClockifySettingsCollection(requestParameters: ClockifySettingsApiGetClockifySettingsCollectionRequest = {}, options?: AxiosRequestConfig) {
        return ClockifySettingsApiFp(this.configuration).getClockifySettingsCollection(requestParameters.limit, requestParameters.page, requestParameters.included, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a [Clockify Settings Resource](/schemas/ClockifySettingsResource).
     * @summary Update Clockify Settings
     * @param {ClockifySettingsApiUpdateClockifySettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifySettingsApi
     */
    public updateClockifySettings(requestParameters: ClockifySettingsApiUpdateClockifySettingsRequest, options?: AxiosRequestConfig) {
        return ClockifySettingsApiFp(this.configuration).updateClockifySettings(requestParameters.clockifySettingsId, requestParameters.clockifySettingsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}