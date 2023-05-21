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
import type { BookmarksTimeline } from './BookmarksTimeline';
import {
    BookmarksTimelineFromJSON,
    BookmarksTimelineFromJSONTyped,
    BookmarksTimelineToJSON,
} from './BookmarksTimeline';

/**
 * 
 * @export
 * @interface BookmarksResponseData
 */
export interface BookmarksResponseData {
    /**
     * 
     * @type {BookmarksTimeline}
     * @memberof BookmarksResponseData
     */
    bookmarkTimelineV2: BookmarksTimeline;
}

/**
 * Check if a given object implements the BookmarksResponseData interface.
 */
export function instanceOfBookmarksResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bookmarkTimelineV2" in value;

    return isInstance;
}

export function BookmarksResponseDataFromJSON(json: any): BookmarksResponseData {
    return BookmarksResponseDataFromJSONTyped(json, false);
}

export function BookmarksResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarksResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmarkTimelineV2': BookmarksTimelineFromJSON(json['bookmark_timeline_v2']),
    };
}

export function BookmarksResponseDataToJSON(value?: BookmarksResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookmark_timeline_v2': BookmarksTimelineToJSON(value.bookmarkTimelineV2),
    };
}

