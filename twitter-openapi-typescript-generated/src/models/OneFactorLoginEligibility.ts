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
 * @interface OneFactorLoginEligibility
 */
export interface OneFactorLoginEligibility {
    /**
     * 
     * @type {string}
     * @memberof OneFactorLoginEligibility
     */
    fetchStatus: string;
}

/**
 * Check if a given object implements the OneFactorLoginEligibility interface.
 */
export function instanceOfOneFactorLoginEligibility(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fetchStatus" in value;

    return isInstance;
}

export function OneFactorLoginEligibilityFromJSON(json: any): OneFactorLoginEligibility {
    return OneFactorLoginEligibilityFromJSONTyped(json, false);
}

export function OneFactorLoginEligibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): OneFactorLoginEligibility {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fetchStatus': json['fetchStatus'],
    };
}

export function OneFactorLoginEligibilityToJSON(value?: OneFactorLoginEligibility | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fetchStatus': value.fetchStatus,
    };
}

