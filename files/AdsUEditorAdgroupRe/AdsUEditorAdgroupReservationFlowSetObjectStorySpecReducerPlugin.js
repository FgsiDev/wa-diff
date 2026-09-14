__d(
  "AdsUEditorAdgroupReservationFlowSetObjectStorySpecReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCampaignDraftFragmentStore",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignReachFrequencyFlowSetPredictionIdActionFlux",
    "firstx",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              a = t.campaignIDs,
              i = t.destinationID,
              l = t.instagramDestinationID,
              s = t.instagramUserID,
              u = t.shouldUpdateInitialDraftAdgroupObjectStorySpec,
              c = u === void 0 ? !1 : u,
              d = r("firstx")(a),
              m = !r("AdsCampaignDraftFragmentStore").isNew(d);
            return m || i == null || c === !1
              ? e
              : ((r("gkx")("15865") ? s == null : l == null) &&
                  o("AdsMutators").mutateEach(e, n, function (e) {
                    return o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.page_id.set(i),
                      o("AdsInstagramUserIdMigrationUtils")
                        .IGIDV2MigrationAccessors.creative.object_story_spec
                        .instagram_user_id.delete,
                    )(e);
                  }),
                o("AdsMutators").mutateEach(e, n, function (e) {
                  return o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.page_id.set(i),
                    o(
                      "AdsInstagramUserIdMigrationUtils",
                    ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
                      l,
                      s,
                    ),
                  )(e);
                }));
          },
          o("AdsUEditorCampaignReachFrequencyFlowSetPredictionIdActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
