__d(
  "AdsUEditorAdgroupMessageMarketingAutoReplySelectVideoReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingAutoReplySelectVideoActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.autoreply.video_id.set(
                  t.videoID,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.autoreply.video_thumbnail_url.set(
                  t.thumbnailUrl,
                ),
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingAutoReplySelectVideoActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
