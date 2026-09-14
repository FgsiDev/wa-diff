__d(
  "AdsUEditorAdgroupMessageMarketingRemoveMediaReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingRemoveMediaActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                (n = r("AdsAdgroupRecordAccessors")).creative.object_story_spec
                  .video_data.delete,
                n.creative.object_story_spec.link_data.message.set(
                  t.currentBodyText,
                ),
                n.creative.object_story_spec.link_data.name.set(
                  t.currentHeadlineText,
                ),
                n.creative.object_type.set(r("ApiAdObjectTypes").SHARE),
                n.creative.object_story_spec.link_data.image_hash.delete,
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingRemoveMediaActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
