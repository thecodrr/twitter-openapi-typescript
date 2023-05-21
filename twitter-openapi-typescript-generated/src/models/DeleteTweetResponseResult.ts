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
/**
 * 
 * @export
 * @interface DeleteTweetResponseResult
 */
export interface DeleteTweetResponseResult {
    /**
     * 
     * @type {object}
     * @memberof DeleteTweetResponseResult
     */
    tweetResults: object;
}

/**
 * Check if a given object implements the DeleteTweetResponseResult interface.
 */
export function instanceOfDeleteTweetResponseResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tweetResults" in value;

    return isInstance;
}

export function DeleteTweetResponseResultFromJSON(json: any): DeleteTweetResponseResult {
    return DeleteTweetResponseResultFromJSONTyped(json, false);
}

export function DeleteTweetResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteTweetResponseResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tweetResults': json['tweet_results'],
    };
}

export function DeleteTweetResponseResultToJSON(value?: DeleteTweetResponseResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tweet_results': value.tweetResults,
    };
}

