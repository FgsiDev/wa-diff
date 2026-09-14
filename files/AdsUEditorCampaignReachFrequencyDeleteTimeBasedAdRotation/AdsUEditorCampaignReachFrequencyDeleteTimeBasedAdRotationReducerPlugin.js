__d(
  "AdsUEditorCampaignReachFrequencyDeleteTimeBasedAdRotationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReachFrequencyDeleteTimeBasedAdRotationActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.index;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = e.time_based_ad_rotation_intervals;
              if (!t || t.size < 3) return e;
              var n = t.slice(),
                i = r("nullthrows")(e.time_based_ad_rotation_id_blocks).slice();
              return (
                a === t.size - 1
                  ? (n.splice(a, 1), i.splice(a, 1))
                  : ((n = n.splice(a + 1, 1)), (i = i.splice(a + 1, 1))),
                o("AdsMutators").chain(
                  r(
                    "AdsCampaignRecordAccessors",
                  ).time_based_ad_rotation_intervals.set(n),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).time_based_ad_rotation_id_blocks.set(i),
                )(e)
              );
            });
          },
          o(
            "AdsUEditorCampaignReachFrequencyDeleteTimeBasedAdRotationActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
