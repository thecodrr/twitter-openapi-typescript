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
 * @interface SocialContext
 */
export interface SocialContext {
    /**
     * 
     * @type {string}
     * @memberof SocialContext
     */
    contextType?: string;
    /**
     * 
     * @type {string}
     * @memberof SocialContext
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof SocialContext
     */
    type?: string;
}

/**
 * Check if a given object implements the SocialContext interface.
 */
export function instanceOfSocialContext(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SocialContextFromJSON(json: any): SocialContext {
    return SocialContextFromJSONTyped(json, false);
}

export function SocialContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contextType': !exists(json, 'contextType') ? undefined : json['contextType'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function SocialContextToJSON(value?: SocialContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contextType': value.contextType,
        'text': value.text,
        'type': value.type,
    };
}

