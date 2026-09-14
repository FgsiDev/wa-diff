__d(
  "AdsUEditorReachFrequencyUpdateTimeBasedAdRotationIdBlocksReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorReachFrequencyUpdateTimeBasedAdRotationIdBlocksActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.idBlock,
              i = t.index;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = e.time_based_ad_rotation_id_blocks;
              if (t && i < t.size) {
                var n = t.set(i, a);
                return r(
                  "AdsCampaignRecordAccessors",
                ).time_based_ad_rotation_id_blocks.set(n, e);
              } else return e;
            });
          },
          o(
            "AdsUEditorReachFrequencyUpdateTimeBasedAdRotationIdBlocksActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
