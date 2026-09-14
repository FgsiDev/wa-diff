__d(
  "AdsUEditorAdgroupMessageMarketingSetHeadlineReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetHeadlineActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.isUsingDPMHeadline
                ? o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.name.set(null),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.message.set(
                      t.headline,
                    ),
                  )(e)
                : t.isUsingImageHeadline
                  ? o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.name.set(null),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.message.set(
                        t.headline,
                      ),
                    )(e)
                  : t.isUsingVideoHeadline
                    ? o("AdsMutators").chain(
                        r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.link_data.name.set(null),
                        r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.video_data.message.set(
                          t.headline,
                        ),
                      )(e)
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.name.set(
                        t.headline,
                        e,
                      );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetHeadlineActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
