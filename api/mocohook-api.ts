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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { JsonApiError } from '../model';
// @ts-ignore
import { MocoHookCollectionResponse } from '../model';
// @ts-ignore
import { MocoHookCreateRequest } from '../model';
// @ts-ignore
import { MocoHookResponse } from '../model';
// @ts-ignore
import { MocoHookUpdateRequest } from '../model';
/**
 * MOCOHookApi - axios parameter creator
 * @export
 */
export const MOCOHookApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Create MOCO Hook
         * @param {string} [include] The Include Query Parameter.
         * @param {MocoHookCreateRequest} [mocoHookCreateRequest] Create MOCO Hook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMocoHook: async (include?: string, mocoHookCreateRequest?: MocoHookCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/moco_hooks`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(mocoHookCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Delete MOCO Hook
         * @param {string} mocoHookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMocoHook: async (mocoHookId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mocoHookId' is not null or undefined
            assertParamExists('deleteMocoHook', 'mocoHookId', mocoHookId)
            const localVarPath = `/api/admin/moco_hooks/{mocoHookId}`
                .replace(`{${"mocoHookId"}}`, encodeURIComponent(String(mocoHookId)));
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
         * Retrieves a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Retrieve MOCO Hook
         * @param {string} mocoHookId 
         * @param {string} [include] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMocoHook: async (mocoHookId: string, include?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mocoHookId' is not null or undefined
            assertParamExists('getMocoHook', 'mocoHookId', mocoHookId)
            const localVarPath = `/api/admin/moco_hooks/{mocoHookId}`
                .replace(`{${"mocoHookId"}}`, encodeURIComponent(String(mocoHookId)));
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
         * Retrieves the [MOCO Hook Resource](/schemas/MocoHookResource) collection.
         * @summary Retrieve MOCO Hook Collection
         * @param {number} [limit] The Limit Query Parameter. 
         * @param {number} [page] The Page Query Parameter. 
         * @param {string} [included] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMocoHookCollection: async (limit?: number, page?: number, included?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/moco_hooks`;
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
         * Updates a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Update MOCO Hook
         * @param {string} mocoHookId 
         * @param {MocoHookUpdateRequest} [mocoHookUpdateRequest] Update MOCO Hook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMocoHook: async (mocoHookId: string, mocoHookUpdateRequest?: MocoHookUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mocoHookId' is not null or undefined
            assertParamExists('updateMocoHook', 'mocoHookId', mocoHookId)
            const localVarPath = `/api/admin/moco_hooks/{mocoHookId}`
                .replace(`{${"mocoHookId"}}`, encodeURIComponent(String(mocoHookId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(mocoHookUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MOCOHookApi - functional programming interface
 * @export
 */
export const MOCOHookApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MOCOHookApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Create MOCO Hook
         * @param {string} [include] The Include Query Parameter.
         * @param {MocoHookCreateRequest} [mocoHookCreateRequest] Create MOCO Hook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMocoHook(include?: string, mocoHookCreateRequest?: MocoHookCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MocoHookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMocoHook(include, mocoHookCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Delete MOCO Hook
         * @param {string} mocoHookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMocoHook(mocoHookId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMocoHook(mocoHookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Retrieve MOCO Hook
         * @param {string} mocoHookId 
         * @param {string} [include] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMocoHook(mocoHookId: string, include?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MocoHookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMocoHook(mocoHookId, include, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the [MOCO Hook Resource](/schemas/MocoHookResource) collection.
         * @summary Retrieve MOCO Hook Collection
         * @param {number} [limit] The Limit Query Parameter. 
         * @param {number} [page] The Page Query Parameter. 
         * @param {string} [included] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMocoHookCollection(limit?: number, page?: number, included?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MocoHookCollectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMocoHookCollection(limit, page, included, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Update MOCO Hook
         * @param {string} mocoHookId 
         * @param {MocoHookUpdateRequest} [mocoHookUpdateRequest] Update MOCO Hook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMocoHook(mocoHookId: string, mocoHookUpdateRequest?: MocoHookUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMocoHook(mocoHookId, mocoHookUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MOCOHookApi - factory interface
 * @export
 */
export const MOCOHookApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MOCOHookApiFp(configuration)
    return {
        /**
         * Creates a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Create MOCO Hook
         * @param {MOCOHookApiCreateMocoHookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMocoHook(requestParameters: MOCOHookApiCreateMocoHookRequest = {}, options?: AxiosRequestConfig): AxiosPromise<MocoHookResponse> {
            return localVarFp.createMocoHook(requestParameters.include, requestParameters.mocoHookCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Delete MOCO Hook
         * @param {MOCOHookApiDeleteMocoHookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMocoHook(requestParameters: MOCOHookApiDeleteMocoHookRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteMocoHook(requestParameters.mocoHookId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Retrieve MOCO Hook
         * @param {MOCOHookApiGetMocoHookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMocoHook(requestParameters: MOCOHookApiGetMocoHookRequest, options?: AxiosRequestConfig): AxiosPromise<MocoHookResponse> {
            return localVarFp.getMocoHook(requestParameters.mocoHookId, requestParameters.include, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the [MOCO Hook Resource](/schemas/MocoHookResource) collection.
         * @summary Retrieve MOCO Hook Collection
         * @param {MOCOHookApiGetMocoHookCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMocoHookCollection(requestParameters: MOCOHookApiGetMocoHookCollectionRequest = {}, options?: AxiosRequestConfig): AxiosPromise<MocoHookCollectionResponse> {
            return localVarFp.getMocoHookCollection(requestParameters.limit, requestParameters.page, requestParameters.included, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a [MOCO Hook Resource](/schemas/MocoHookResource).
         * @summary Update MOCO Hook
         * @param {MOCOHookApiUpdateMocoHookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMocoHook(requestParameters: MOCOHookApiUpdateMocoHookRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateMocoHook(requestParameters.mocoHookId, requestParameters.mocoHookUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createMocoHook operation in MOCOHookApi.
 * @export
 * @interface MOCOHookApiCreateMocoHookRequest
 */
export interface MOCOHookApiCreateMocoHookRequest {
    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof MOCOHookApiCreateMocoHook
     */
    readonly include?: string

    /**
     * Create MOCO Hook Request
     * @type {MocoHookCreateRequest}
     * @memberof MOCOHookApiCreateMocoHook
     */
    readonly mocoHookCreateRequest?: MocoHookCreateRequest
}

/**
 * Request parameters for deleteMocoHook operation in MOCOHookApi.
 * @export
 * @interface MOCOHookApiDeleteMocoHookRequest
 */
export interface MOCOHookApiDeleteMocoHookRequest {
    /**
     * 
     * @type {string}
     * @memberof MOCOHookApiDeleteMocoHook
     */
    readonly mocoHookId: string
}

/**
 * Request parameters for getMocoHook operation in MOCOHookApi.
 * @export
 * @interface MOCOHookApiGetMocoHookRequest
 */
export interface MOCOHookApiGetMocoHookRequest {
    /**
     * 
     * @type {string}
     * @memberof MOCOHookApiGetMocoHook
     */
    readonly mocoHookId: string

    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof MOCOHookApiGetMocoHook
     */
    readonly include?: string
}

/**
 * Request parameters for getMocoHookCollection operation in MOCOHookApi.
 * @export
 * @interface MOCOHookApiGetMocoHookCollectionRequest
 */
export interface MOCOHookApiGetMocoHookCollectionRequest {
    /**
     * The Limit Query Parameter. 
     * @type {number}
     * @memberof MOCOHookApiGetMocoHookCollection
     */
    readonly limit?: number

    /**
     * The Page Query Parameter. 
     * @type {number}
     * @memberof MOCOHookApiGetMocoHookCollection
     */
    readonly page?: number

    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof MOCOHookApiGetMocoHookCollection
     */
    readonly included?: string
}

/**
 * Request parameters for updateMocoHook operation in MOCOHookApi.
 * @export
 * @interface MOCOHookApiUpdateMocoHookRequest
 */
export interface MOCOHookApiUpdateMocoHookRequest {
    /**
     * 
     * @type {string}
     * @memberof MOCOHookApiUpdateMocoHook
     */
    readonly mocoHookId: string

    /**
     * Update MOCO Hook Request
     * @type {MocoHookUpdateRequest}
     * @memberof MOCOHookApiUpdateMocoHook
     */
    readonly mocoHookUpdateRequest?: MocoHookUpdateRequest
}

/**
 * MOCOHookApi - object-oriented interface
 * @export
 * @class MOCOHookApi
 * @extends {BaseAPI}
 */
export class MOCOHookApi extends BaseAPI {
    /**
     * Creates a [MOCO Hook Resource](/schemas/MocoHookResource).
     * @summary Create MOCO Hook
     * @param {MOCOHookApiCreateMocoHookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MOCOHookApi
     */
    public createMocoHook(requestParameters: MOCOHookApiCreateMocoHookRequest = {}, options?: AxiosRequestConfig) {
        return MOCOHookApiFp(this.configuration).createMocoHook(requestParameters.include, requestParameters.mocoHookCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a [MOCO Hook Resource](/schemas/MocoHookResource).
     * @summary Delete MOCO Hook
     * @param {MOCOHookApiDeleteMocoHookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MOCOHookApi
     */
    public deleteMocoHook(requestParameters: MOCOHookApiDeleteMocoHookRequest, options?: AxiosRequestConfig) {
        return MOCOHookApiFp(this.configuration).deleteMocoHook(requestParameters.mocoHookId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a [MOCO Hook Resource](/schemas/MocoHookResource).
     * @summary Retrieve MOCO Hook
     * @param {MOCOHookApiGetMocoHookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MOCOHookApi
     */
    public getMocoHook(requestParameters: MOCOHookApiGetMocoHookRequest, options?: AxiosRequestConfig) {
        return MOCOHookApiFp(this.configuration).getMocoHook(requestParameters.mocoHookId, requestParameters.include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the [MOCO Hook Resource](/schemas/MocoHookResource) collection.
     * @summary Retrieve MOCO Hook Collection
     * @param {MOCOHookApiGetMocoHookCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MOCOHookApi
     */
    public getMocoHookCollection(requestParameters: MOCOHookApiGetMocoHookCollectionRequest = {}, options?: AxiosRequestConfig) {
        return MOCOHookApiFp(this.configuration).getMocoHookCollection(requestParameters.limit, requestParameters.page, requestParameters.included, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a [MOCO Hook Resource](/schemas/MocoHookResource).
     * @summary Update MOCO Hook
     * @param {MOCOHookApiUpdateMocoHookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MOCOHookApi
     */
    public updateMocoHook(requestParameters: MOCOHookApiUpdateMocoHookRequest, options?: AxiosRequestConfig) {
        return MOCOHookApiFp(this.configuration).updateMocoHook(requestParameters.mocoHookId, requestParameters.mocoHookUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
