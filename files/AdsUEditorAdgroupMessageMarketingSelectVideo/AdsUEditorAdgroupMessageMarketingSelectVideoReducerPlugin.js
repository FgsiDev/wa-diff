__d(
  "AdsUEditorAdgroupMessageMarketingSelectVideoReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSelectVideoActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "ApiAdObjectTypes",
    "getMergedHeaderAndBodyTextForTemplate",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = r("getMergedHeaderAndBodyTextForTemplate")(
                t.headline,
                t.body,
              ),
              a = r("isStringNullOrEmpty")(t.headline) ? t.body : n;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.video_id.set(t.videoID),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.message.set(a),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.image_url.set(
                  t.thumbnailUrl,
                ),
                r("AdsAdgroupRecordAccessors").creative.object_type.set(
                  r("ApiAdObjectTypes").VIDEO,
                ),
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .link_data.delete,
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingSelectVideoActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
