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
import { ClockifyServiceCollectionResponse } from '../model';
// @ts-ignore
import { ClockifyServiceCreateRequest } from '../model';
// @ts-ignore
import { ClockifyServiceResponse } from '../model';
// @ts-ignore
import { ClockifyServiceUpdateRequest } from '../model';
// @ts-ignore
import { JsonApiError } from '../model';
/**
 * ClockifyServiceApi - axios parameter creator
 * @export
 */
export const ClockifyServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Create MOCO Service
         * @param {string} [include] The Include Query Parameter.
         * @param {ClockifyServiceCreateRequest} [clockifyServiceCreateRequest] Create Clockify Service Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClockifyService: async (include?: string, clockifyServiceCreateRequest?: ClockifyServiceCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/clockify_services`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(clockifyServiceCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Delete Clockify Service
         * @param {string} clockifyServiceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClockifyService: async (clockifyServiceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clockifyServiceId' is not null or undefined
            assertParamExists('deleteClockifyService', 'clockifyServiceId', clockifyServiceId)
            const localVarPath = `/api/admin/clockify_services/{clockifyServiceId}`
                .replace(`{${"clockifyServiceId"}}`, encodeURIComponent(String(clockifyServiceId)));
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
         * Retrieves a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Retrieve Clockify Service
         * @param {string} clockifyServiceId 
         * @param {string} [include] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifyService: async (clockifyServiceId: string, include?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clockifyServiceId' is not null or undefined
            assertParamExists('getClockifyService', 'clockifyServiceId', clockifyServiceId)
            const localVarPath = `/api/admin/clockify_services/{clockifyServiceId}`
                .replace(`{${"clockifyServiceId"}}`, encodeURIComponent(String(clockifyServiceId)));
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
         * Retrieves the [Clockify Service Resource](/schemas/ClockifyServiceResource) collection.
         * @summary Retrieve Clockify Service Collection
         * @param {number} [limit] The Limit Query Parameter. 
         * @param {number} [page] The Page Query Parameter. 
         * @param {string} [included] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifyServiceCollection: async (limit?: number, page?: number, included?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/clockify_services`;
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
         * Updates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Update Clockify Service
         * @param {string} clockifyServiceId 
         * @param {ClockifyServiceUpdateRequest} [clockifyServiceUpdateRequest] Update Clockify Service Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClockifyService: async (clockifyServiceId: string, clockifyServiceUpdateRequest?: ClockifyServiceUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clockifyServiceId' is not null or undefined
            assertParamExists('updateClockifyService', 'clockifyServiceId', clockifyServiceId)
            const localVarPath = `/api/admin/clockify_services/{clockifyServiceId}`
                .replace(`{${"clockifyServiceId"}}`, encodeURIComponent(String(clockifyServiceId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(clockifyServiceUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClockifyServiceApi - functional programming interface
 * @export
 */
export const ClockifyServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClockifyServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Create MOCO Service
         * @param {string} [include] The Include Query Parameter.
         * @param {ClockifyServiceCreateRequest} [clockifyServiceCreateRequest] Create Clockify Service Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createClockifyService(include?: string, clockifyServiceCreateRequest?: ClockifyServiceCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClockifyServiceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createClockifyService(include, clockifyServiceCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Delete Clockify Service
         * @param {string} clockifyServiceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteClockifyService(clockifyServiceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteClockifyService(clockifyServiceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Retrieve Clockify Service
         * @param {string} clockifyServiceId 
         * @param {string} [include] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClockifyService(clockifyServiceId: string, include?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClockifyServiceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClockifyService(clockifyServiceId, include, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the [Clockify Service Resource](/schemas/ClockifyServiceResource) collection.
         * @summary Retrieve Clockify Service Collection
         * @param {number} [limit] The Limit Query Parameter. 
         * @param {number} [page] The Page Query Parameter. 
         * @param {string} [included] The Include Query Parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClockifyServiceCollection(limit?: number, page?: number, included?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClockifyServiceCollectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClockifyServiceCollection(limit, page, included, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Update Clockify Service
         * @param {string} clockifyServiceId 
         * @param {ClockifyServiceUpdateRequest} [clockifyServiceUpdateRequest] Update Clockify Service Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateClockifyService(clockifyServiceId: string, clockifyServiceUpdateRequest?: ClockifyServiceUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateClockifyService(clockifyServiceId, clockifyServiceUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClockifyServiceApi - factory interface
 * @export
 */
export const ClockifyServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClockifyServiceApiFp(configuration)
    return {
        /**
         * Creates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Create MOCO Service
         * @param {ClockifyServiceApiCreateClockifyServiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createClockifyService(requestParameters: ClockifyServiceApiCreateClockifyServiceRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ClockifyServiceResponse> {
            return localVarFp.createClockifyService(requestParameters.include, requestParameters.clockifyServiceCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Delete Clockify Service
         * @param {ClockifyServiceApiDeleteClockifyServiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteClockifyService(requestParameters: ClockifyServiceApiDeleteClockifyServiceRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteClockifyService(requestParameters.clockifyServiceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Retrieve Clockify Service
         * @param {ClockifyServiceApiGetClockifyServiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifyService(requestParameters: ClockifyServiceApiGetClockifyServiceRequest, options?: AxiosRequestConfig): AxiosPromise<ClockifyServiceResponse> {
            return localVarFp.getClockifyService(requestParameters.clockifyServiceId, requestParameters.include, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the [Clockify Service Resource](/schemas/ClockifyServiceResource) collection.
         * @summary Retrieve Clockify Service Collection
         * @param {ClockifyServiceApiGetClockifyServiceCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClockifyServiceCollection(requestParameters: ClockifyServiceApiGetClockifyServiceCollectionRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ClockifyServiceCollectionResponse> {
            return localVarFp.getClockifyServiceCollection(requestParameters.limit, requestParameters.page, requestParameters.included, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
         * @summary Update Clockify Service
         * @param {ClockifyServiceApiUpdateClockifyServiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateClockifyService(requestParameters: ClockifyServiceApiUpdateClockifyServiceRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateClockifyService(requestParameters.clockifyServiceId, requestParameters.clockifyServiceUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createClockifyService operation in ClockifyServiceApi.
 * @export
 * @interface ClockifyServiceApiCreateClockifyServiceRequest
 */
export interface ClockifyServiceApiCreateClockifyServiceRequest {
    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof ClockifyServiceApiCreateClockifyService
     */
    readonly include?: string

    /**
     * Create Clockify Service Request
     * @type {ClockifyServiceCreateRequest}
     * @memberof ClockifyServiceApiCreateClockifyService
     */
    readonly clockifyServiceCreateRequest?: ClockifyServiceCreateRequest
}

/**
 * Request parameters for deleteClockifyService operation in ClockifyServiceApi.
 * @export
 * @interface ClockifyServiceApiDeleteClockifyServiceRequest
 */
export interface ClockifyServiceApiDeleteClockifyServiceRequest {
    /**
     * 
     * @type {string}
     * @memberof ClockifyServiceApiDeleteClockifyService
     */
    readonly clockifyServiceId: string
}

/**
 * Request parameters for getClockifyService operation in ClockifyServiceApi.
 * @export
 * @interface ClockifyServiceApiGetClockifyServiceRequest
 */
export interface ClockifyServiceApiGetClockifyServiceRequest {
    /**
     * 
     * @type {string}
     * @memberof ClockifyServiceApiGetClockifyService
     */
    readonly clockifyServiceId: string

    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof ClockifyServiceApiGetClockifyService
     */
    readonly include?: string
}

/**
 * Request parameters for getClockifyServiceCollection operation in ClockifyServiceApi.
 * @export
 * @interface ClockifyServiceApiGetClockifyServiceCollectionRequest
 */
export interface ClockifyServiceApiGetClockifyServiceCollectionRequest {
    /**
     * The Limit Query Parameter. 
     * @type {number}
     * @memberof ClockifyServiceApiGetClockifyServiceCollection
     */
    readonly limit?: number

    /**
     * The Page Query Parameter. 
     * @type {number}
     * @memberof ClockifyServiceApiGetClockifyServiceCollection
     */
    readonly page?: number

    /**
     * The Include Query Parameter.
     * @type {string}
     * @memberof ClockifyServiceApiGetClockifyServiceCollection
     */
    readonly included?: string
}

/**
 * Request parameters for updateClockifyService operation in ClockifyServiceApi.
 * @export
 * @interface ClockifyServiceApiUpdateClockifyServiceRequest
 */
export interface ClockifyServiceApiUpdateClockifyServiceRequest {
    /**
     * 
     * @type {string}
     * @memberof ClockifyServiceApiUpdateClockifyService
     */
    readonly clockifyServiceId: string

    /**
     * Update Clockify Service Request
     * @type {ClockifyServiceUpdateRequest}
     * @memberof ClockifyServiceApiUpdateClockifyService
     */
    readonly clockifyServiceUpdateRequest?: ClockifyServiceUpdateRequest
}

/**
 * ClockifyServiceApi - object-oriented interface
 * @export
 * @class ClockifyServiceApi
 * @extends {BaseAPI}
 */
export class ClockifyServiceApi extends BaseAPI {
    /**
     * Creates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
     * @summary Create MOCO Service
     * @param {ClockifyServiceApiCreateClockifyServiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifyServiceApi
     */
    public createClockifyService(requestParameters: ClockifyServiceApiCreateClockifyServiceRequest = {}, options?: AxiosRequestConfig) {
        return ClockifyServiceApiFp(this.configuration).createClockifyService(requestParameters.include, requestParameters.clockifyServiceCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a [Clockify Service Resource](/schemas/ClockifyServiceResource).
     * @summary Delete Clockify Service
     * @param {ClockifyServiceApiDeleteClockifyServiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifyServiceApi
     */
    public deleteClockifyService(requestParameters: ClockifyServiceApiDeleteClockifyServiceRequest, options?: AxiosRequestConfig) {
        return ClockifyServiceApiFp(this.configuration).deleteClockifyService(requestParameters.clockifyServiceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a [Clockify Service Resource](/schemas/ClockifyServiceResource).
     * @summary Retrieve Clockify Service
     * @param {ClockifyServiceApiGetClockifyServiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifyServiceApi
     */
    public getClockifyService(requestParameters: ClockifyServiceApiGetClockifyServiceRequest, options?: AxiosRequestConfig) {
        return ClockifyServiceApiFp(this.configuration).getClockifyService(requestParameters.clockifyServiceId, requestParameters.include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the [Clockify Service Resource](/schemas/ClockifyServiceResource) collection.
     * @summary Retrieve Clockify Service Collection
     * @param {ClockifyServiceApiGetClockifyServiceCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifyServiceApi
     */
    public getClockifyServiceCollection(requestParameters: ClockifyServiceApiGetClockifyServiceCollectionRequest = {}, options?: AxiosRequestConfig) {
        return ClockifyServiceApiFp(this.configuration).getClockifyServiceCollection(requestParameters.limit, requestParameters.page, requestParameters.included, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a [Clockify Service Resource](/schemas/ClockifyServiceResource).
     * @summary Update Clockify Service
     * @param {ClockifyServiceApiUpdateClockifyServiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClockifyServiceApi
     */
    public updateClockifyService(requestParameters: ClockifyServiceApiUpdateClockifyServiceRequest, options?: AxiosRequestConfig) {
        return ClockifyServiceApiFp(this.configuration).updateClockifyService(requestParameters.clockifyServiceId, requestParameters.clockifyServiceUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
