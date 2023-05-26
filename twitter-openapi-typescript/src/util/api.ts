import * as i from 'twitter-openapi-typescript-generated';
import { TweetApiUtils } from '../types/tweet';
import { UserApiUtils } from '../types/user_list';
import { CursorApiUtilsResponse } from '../types/timeline';

export const instructionToEntry = (item: i.InstructionUnion[]): i.TimelineAddEntry[] => {
  return item.flatMap((e) => (e.type == i.InstructionType.TimelineAddEntries ? [e as i.TimelineAddEntries] : []))[0]
    .entries;
};

export const tweetEntriesConverter = (item: i.TimelineAddEntry[]): i.ItemResult[] => {
  return item
    .map((e) => {
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        const timeline = item.itemType == i.ContentItemType.TimelineTweet ? (item as i.TimelineTweet) : null;
        if (timeline == null) return null;
        return timeline.tweetResults;
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineModule) {
        const item = (e.content as i.TimelineTimelineModule).items ?? [];
        const timelineList = item
          .filter((e) => e.item.itemContent.itemType == i.ContentItemType.TimelineTweet)
          .map((e) => e.item.itemContent as i.TimelineTweet);
        if (timelineList.length == 0) return null;
        const timeline = timelineList[0];
        return timeline.tweetResults;
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
};

type buildTweetApiUtilsArgs = {
  result: i.ItemResult;
  promotedMetadata?: any;
  reply?: i.TimelineTweet[];
};
export const buildTweetApiUtils = (args: buildTweetApiUtilsArgs): TweetApiUtils | undefined => {
  const tweet = tweetResultsConverter(args.result);
  if (tweet == null) return undefined;
  const quoted = tweet.quotedStatusResult;
  const retweeted = tweet.legacy.retweetedStatusResult;
  return {
    raw: args.result,
    promotedMetadata: args.promotedMetadata,
    tweet: tweet,
    user: tweet.core.userResults.result,
    reply:
      args.reply
        ?.map((e) => buildTweetApiUtils({ result: e.tweetResults, promotedMetadata: e.promotedMetadata }))
        .filter((e): e is NonNullable<typeof e> => e != null) ?? [],
    quoted: quoted == undefined ? undefined : buildTweetApiUtils({ result: quoted }),
  };
};

export const tweetResultsConverter = (tweetResults: i.ItemResult): i.Tweet | undefined => {
  if (tweetResults.typename == i.TypeName.Tweet) {
    return tweetResults.result as i.Tweet;
  } else if (tweetResults.typename == i.TypeName.TweetWithVisibilityResults) {
    return (tweetResults.result as i.TweetWithVisibilityResults).tweet;
  } else if (tweetResults.typename == i.TypeName.TweetTombstone) {
    return undefined;
  }
  throw Error();
};

export const userEntriesConverter = (item: i.TimelineAddEntry[]): i.TimelineUser[] => {
  return item
    .map((e) => {
      if (e.content.typename == i.TypeName.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        return item.itemType == i.ContentItemType.TimelineUser ? (item as i.TimelineUser) : null;
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
};

export const buildUserResponse = (user: i.TimelineUser): UserApiUtils => {
  return {
    raw: user,
    user: user.userResults.result,
  };
};

export const entriesCursor = (item: i.TimelineAddEntry[]): CursorApiUtilsResponse => {
  const cursorList = item
    .map((e) => {
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineCursor) {
        return e.content as i.TimelineTimelineCursor;
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = e.content as i.TimelineTimelineItem;
        if (item.itemContent.itemType == i.ContentItemType.TimelineTimelineCursor) {
          return item.itemContent as i.TimelineTimelineCursor;
        }
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
  return buildCursor(cursorList);
};

export const buildCursor = (cursorList: i.TimelineTimelineCursor[]): CursorApiUtilsResponse => {
  return {
    top: cursorList.find((e) => e.cursorType == i.TimelineTimelineCursorCursorTypeEnum.Top),
    bottom: cursorList.find((e) => e.cursorType == i.TimelineTimelineCursorCursorTypeEnum.Bottom),
  };
};
