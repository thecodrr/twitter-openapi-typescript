/* tslint:disable */
/* eslint-disable */
/**
 * Twitter OpenAPI
 * Twitter OpenAPI(Swagger) specification
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: yuki@yuki0311.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PostDeleteTweetRequestVariables } from './PostDeleteTweetRequestVariables';
import {
    PostDeleteTweetRequestVariablesFromJSON,
    PostDeleteTweetRequestVariablesFromJSONTyped,
    PostDeleteTweetRequestVariablesToJSON,
} from './PostDeleteTweetRequestVariables';

/**
 * 
 * @export
 * @interface PostUnfavoriteTweetRequest
 */
export interface PostUnfavoriteTweetRequest {
    /**
     * 
     * @type {string}
     * @memberof PostUnfavoriteTweetRequest
     */
    queryId: string;
    /**
     * 
     * @type {PostDeleteTweetRequestVariables}
     * @memberof PostUnfavoriteTweetRequest
     */
    variables: PostDeleteTweetRequestVariables;
}

/**
 * Check if a given object implements the PostUnfavoriteTweetRequest interface.
 */
export function instanceOfPostUnfavoriteTweetRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "queryId" in value;
    isInstance = isInstance && "variables" in value;

    return isInstance;
}

export function PostUnfavoriteTweetRequestFromJSON(json: any): PostUnfavoriteTweetRequest {
    return PostUnfavoriteTweetRequestFromJSONTyped(json, false);
}

export function PostUnfavoriteTweetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUnfavoriteTweetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'queryId': json['queryId'],
        'variables': PostDeleteTweetRequestVariablesFromJSON(json['variables']),
    };
}

export function PostUnfavoriteTweetRequestToJSON(value?: PostUnfavoriteTweetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'queryId': value.queryId,
        'variables': PostDeleteTweetRequestVariablesToJSON(value.variables),
    };
}
