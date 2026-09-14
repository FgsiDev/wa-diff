__d(
  "AdsUEditorAdgroupMessageMarketingAutoReplyRemoveMediaReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingAutoReplyRemoveMediaActionFlux",
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
                r("AdsAdgroupRecordAccessors").creative
                  .marketing_message_structured_spec.autoreply.video_id.delete,
                r("AdsAdgroupRecordAccessors").creative
                  .marketing_message_structured_spec.autoreply
                  .video_thumbnail_url.delete,
                r("AdsAdgroupRecordAccessors").creative
                  .marketing_message_structured_spec.autoreply.image_hash
                  .delete,
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingAutoReplyRemoveMediaActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
