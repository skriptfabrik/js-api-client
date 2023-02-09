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
import { ClockifyWebhookRequest } from '../model';
// @ts-ignore
import { MOCOWebhookRequest } from '../model';
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Executes a Clockify Webhook.
         * @summary Execute Clockify Webhook
         * @param {string} clockifyHookId 
         * @param {string} clockifySignature Signing secret from webhook configuration
         * @param {'NEW_TIME_ENTRY' | 'TIME_ENTRY_UPDATED' | 'TIMER_STOPPED' | 'TIME_ENTRY_DELETED'} clockifyWebhookEventType Webhook event name
         * @param {ClockifyWebhookRequest} [clockifyWebhookRequest] Execute Clockify Webhook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeClockifyWebhook: async (clockifyHookId: string, clockifySignature: string, clockifyWebhookEventType: 'NEW_TIME_ENTRY' | 'TIME_ENTRY_UPDATED' | 'TIMER_STOPPED' | 'TIME_ENTRY_DELETED', clockifyWebhookRequest?: ClockifyWebhookRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clockifyHookId' is not null or undefined
            assertParamExists('executeClockifyWebhook', 'clockifyHookId', clockifyHookId)
            // verify required parameter 'clockifySignature' is not null or undefined
            assertParamExists('executeClockifyWebhook', 'clockifySignature', clockifySignature)
            // verify required parameter 'clockifyWebhookEventType' is not null or undefined
            assertParamExists('executeClockifyWebhook', 'clockifyWebhookEventType', clockifyWebhookEventType)
            const localVarPath = `/api/webhooks/clockify/{clockifyHookId}`
                .replace(`{${"clockifyHookId"}}`, encodeURIComponent(String(clockifyHookId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (clockifySignature != null) {
                localVarHeaderParameter['clockify-signature'] = String(clockifySignature);
            }

            if (clockifyWebhookEventType != null) {
                localVarHeaderParameter['clockify-webhook-event-type'] = String(clockifyWebhookEventType);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(clockifyWebhookRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Executes a [MOCO Webhook](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/README.md#webhooks).
         * @summary Execute MOCO Webhook
         * @param {string} mocoHookId 
         * @param {string} xMocoAccountUrl The subdomain for the account
         * @param {'create' | 'update' | 'delete' | 'archive'} xMocoEvent The name of the event that has been occured
         * @param {string} xMocoSignature The signature representing a checksum of the request
         * @param {'Company' | 'Project' | 'Task' | 'User'} xMocoTarget The target resource of the event
         * @param {number} xMocoTimestamp The timestamp of the event, it is not guaranteed that Webhooks are triggered in order
         * @param {number} xMocoUserId The user ID that triggered this hook
         * @param {MOCOWebhookRequest} [mOCOWebhookRequest] Execute MOCO Webhook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeMocoWebhook: async (mocoHookId: string, xMocoAccountUrl: string, xMocoEvent: 'create' | 'update' | 'delete' | 'archive', xMocoSignature: string, xMocoTarget: 'Company' | 'Project' | 'Task' | 'User', xMocoTimestamp: number, xMocoUserId: number, mOCOWebhookRequest?: MOCOWebhookRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mocoHookId' is not null or undefined
            assertParamExists('executeMocoWebhook', 'mocoHookId', mocoHookId)
            // verify required parameter 'xMocoAccountUrl' is not null or undefined
            assertParamExists('executeMocoWebhook', 'xMocoAccountUrl', xMocoAccountUrl)
            // verify required parameter 'xMocoEvent' is not null or undefined
            assertParamExists('executeMocoWebhook', 'xMocoEvent', xMocoEvent)
            // verify required parameter 'xMocoSignature' is not null or undefined
            assertParamExists('executeMocoWebhook', 'xMocoSignature', xMocoSignature)
            // verify required parameter 'xMocoTarget' is not null or undefined
            assertParamExists('executeMocoWebhook', 'xMocoTarget', xMocoTarget)
            // verify required parameter 'xMocoTimestamp' is not null or undefined
            assertParamExists('executeMocoWebhook', 'xMocoTimestamp', xMocoTimestamp)
            // verify required parameter 'xMocoUserId' is not null or undefined
            assertParamExists('executeMocoWebhook', 'xMocoUserId', xMocoUserId)
            const localVarPath = `/api/webhooks/moco/{mocoHookId}`
                .replace(`{${"mocoHookId"}}`, encodeURIComponent(String(mocoHookId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xMocoAccountUrl != null) {
                localVarHeaderParameter['x-moco-account-url'] = String(xMocoAccountUrl);
            }

            if (xMocoEvent != null) {
                localVarHeaderParameter['x-moco-event'] = String(xMocoEvent);
            }

            if (xMocoSignature != null) {
                localVarHeaderParameter['x-moco-signature'] = String(xMocoSignature);
            }

            if (xMocoTarget != null) {
                localVarHeaderParameter['x-moco-target'] = String(xMocoTarget);
            }

            if (xMocoTimestamp != null) {
                localVarHeaderParameter['x-moco-timestamp'] = typeof xMocoTimestamp === 'string' 
                    ? xMocoTimestamp 
                    : JSON.stringify(xMocoTimestamp);
            }

            if (xMocoUserId != null) {
                localVarHeaderParameter['x-moco-user-id'] = typeof xMocoUserId === 'string' 
                    ? xMocoUserId 
                    : JSON.stringify(xMocoUserId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(mOCOWebhookRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Executes a Clockify Webhook.
         * @summary Execute Clockify Webhook
         * @param {string} clockifyHookId 
         * @param {string} clockifySignature Signing secret from webhook configuration
         * @param {'NEW_TIME_ENTRY' | 'TIME_ENTRY_UPDATED' | 'TIMER_STOPPED' | 'TIME_ENTRY_DELETED'} clockifyWebhookEventType Webhook event name
         * @param {ClockifyWebhookRequest} [clockifyWebhookRequest] Execute Clockify Webhook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeClockifyWebhook(clockifyHookId: string, clockifySignature: string, clockifyWebhookEventType: 'NEW_TIME_ENTRY' | 'TIME_ENTRY_UPDATED' | 'TIMER_STOPPED' | 'TIME_ENTRY_DELETED', clockifyWebhookRequest?: ClockifyWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeClockifyWebhook(clockifyHookId, clockifySignature, clockifyWebhookEventType, clockifyWebhookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Executes a [MOCO Webhook](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/README.md#webhooks).
         * @summary Execute MOCO Webhook
         * @param {string} mocoHookId 
         * @param {string} xMocoAccountUrl The subdomain for the account
         * @param {'create' | 'update' | 'delete' | 'archive'} xMocoEvent The name of the event that has been occured
         * @param {string} xMocoSignature The signature representing a checksum of the request
         * @param {'Company' | 'Project' | 'Task' | 'User'} xMocoTarget The target resource of the event
         * @param {number} xMocoTimestamp The timestamp of the event, it is not guaranteed that Webhooks are triggered in order
         * @param {number} xMocoUserId The user ID that triggered this hook
         * @param {MOCOWebhookRequest} [mOCOWebhookRequest] Execute MOCO Webhook Request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async executeMocoWebhook(mocoHookId: string, xMocoAccountUrl: string, xMocoEvent: 'create' | 'update' | 'delete' | 'archive', xMocoSignature: string, xMocoTarget: 'Company' | 'Project' | 'Task' | 'User', xMocoTimestamp: number, xMocoUserId: number, mOCOWebhookRequest?: MOCOWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.executeMocoWebhook(mocoHookId, xMocoAccountUrl, xMocoEvent, xMocoSignature, xMocoTarget, xMocoTimestamp, xMocoUserId, mOCOWebhookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * Executes a Clockify Webhook.
         * @summary Execute Clockify Webhook
         * @param {WebhooksApiExecuteClockifyWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeClockifyWebhook(requestParameters: WebhooksApiExecuteClockifyWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.executeClockifyWebhook(requestParameters.clockifyHookId, requestParameters.clockifySignature, requestParameters.clockifyWebhookEventType, requestParameters.clockifyWebhookRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Executes a [MOCO Webhook](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/README.md#webhooks).
         * @summary Execute MOCO Webhook
         * @param {WebhooksApiExecuteMocoWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        executeMocoWebhook(requestParameters: WebhooksApiExecuteMocoWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.executeMocoWebhook(requestParameters.mocoHookId, requestParameters.xMocoAccountUrl, requestParameters.xMocoEvent, requestParameters.xMocoSignature, requestParameters.xMocoTarget, requestParameters.xMocoTimestamp, requestParameters.xMocoUserId, requestParameters.mOCOWebhookRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for executeClockifyWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiExecuteClockifyWebhookRequest
 */
export interface WebhooksApiExecuteClockifyWebhookRequest {
    /**
     * 
     * @type {string}
     * @memberof WebhooksApiExecuteClockifyWebhook
     */
    readonly clockifyHookId: string

    /**
     * Signing secret from webhook configuration
     * @type {string}
     * @memberof WebhooksApiExecuteClockifyWebhook
     */
    readonly clockifySignature: string

    /**
     * Webhook event name
     * @type {'NEW_TIME_ENTRY' | 'TIME_ENTRY_UPDATED' | 'TIMER_STOPPED' | 'TIME_ENTRY_DELETED'}
     * @memberof WebhooksApiExecuteClockifyWebhook
     */
    readonly clockifyWebhookEventType: 'NEW_TIME_ENTRY' | 'TIME_ENTRY_UPDATED' | 'TIMER_STOPPED' | 'TIME_ENTRY_DELETED'

    /**
     * Execute Clockify Webhook Request
     * @type {ClockifyWebhookRequest}
     * @memberof WebhooksApiExecuteClockifyWebhook
     */
    readonly clockifyWebhookRequest?: ClockifyWebhookRequest
}

/**
 * Request parameters for executeMocoWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiExecuteMocoWebhookRequest
 */
export interface WebhooksApiExecuteMocoWebhookRequest {
    /**
     * 
     * @type {string}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly mocoHookId: string

    /**
     * The subdomain for the account
     * @type {string}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly xMocoAccountUrl: string

    /**
     * The name of the event that has been occured
     * @type {'create' | 'update' | 'delete' | 'archive'}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly xMocoEvent: 'create' | 'update' | 'delete' | 'archive'

    /**
     * The signature representing a checksum of the request
     * @type {string}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly xMocoSignature: string

    /**
     * The target resource of the event
     * @type {'Company' | 'Project' | 'Task' | 'User'}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly xMocoTarget: 'Company' | 'Project' | 'Task' | 'User'

    /**
     * The timestamp of the event, it is not guaranteed that Webhooks are triggered in order
     * @type {number}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly xMocoTimestamp: number

    /**
     * The user ID that triggered this hook
     * @type {number}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly xMocoUserId: number

    /**
     * Execute MOCO Webhook Request
     * @type {MOCOWebhookRequest}
     * @memberof WebhooksApiExecuteMocoWebhook
     */
    readonly mOCOWebhookRequest?: MOCOWebhookRequest
}

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export class WebhooksApi extends BaseAPI {
    /**
     * Executes a Clockify Webhook.
     * @summary Execute Clockify Webhook
     * @param {WebhooksApiExecuteClockifyWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public executeClockifyWebhook(requestParameters: WebhooksApiExecuteClockifyWebhookRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).executeClockifyWebhook(requestParameters.clockifyHookId, requestParameters.clockifySignature, requestParameters.clockifyWebhookEventType, requestParameters.clockifyWebhookRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Executes a [MOCO Webhook](https://github.com/hundertzehn/mocoapp-api-docs/blob/master/README.md#webhooks).
     * @summary Execute MOCO Webhook
     * @param {WebhooksApiExecuteMocoWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public executeMocoWebhook(requestParameters: WebhooksApiExecuteMocoWebhookRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).executeMocoWebhook(requestParameters.mocoHookId, requestParameters.xMocoAccountUrl, requestParameters.xMocoEvent, requestParameters.xMocoSignature, requestParameters.xMocoTarget, requestParameters.xMocoTimestamp, requestParameters.xMocoUserId, requestParameters.mOCOWebhookRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
