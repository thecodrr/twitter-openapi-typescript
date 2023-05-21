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
import type { UserResultByScreenNameResult } from './UserResultByScreenNameResult';
import {
    UserResultByScreenNameResultFromJSON,
    UserResultByScreenNameResultFromJSONTyped,
    UserResultByScreenNameResultToJSON,
} from './UserResultByScreenNameResult';

/**
 * 
 * @export
 * @interface UserResultByScreenName
 */
export interface UserResultByScreenName {
    /**
     * 
     * @type {string}
     * @memberof UserResultByScreenName
     */
    id: string;
    /**
     * 
     * @type {UserResultByScreenNameResult}
     * @memberof UserResultByScreenName
     */
    result: UserResultByScreenNameResult;
}

/**
 * Check if a given object implements the UserResultByScreenName interface.
 */
export function instanceOfUserResultByScreenName(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function UserResultByScreenNameFromJSON(json: any): UserResultByScreenName {
    return UserResultByScreenNameFromJSONTyped(json, false);
}

export function UserResultByScreenNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResultByScreenName {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'result': UserResultByScreenNameResultFromJSON(json['result']),
    };
}

export function UserResultByScreenNameToJSON(value?: UserResultByScreenName | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'result': UserResultByScreenNameResultToJSON(value.result),
    };
}

