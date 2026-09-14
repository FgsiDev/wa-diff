__d(
  "AdsUEditorReachFrequencyUpdateTimeBasedAdRotationIntervalReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorReachFrequencyUpdateTimeBasedAdRotationIntervalActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.index,
              i = t.interval;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = e.time_based_ad_rotation_intervals;
              if (t && a < t.size) {
                var n = t.set(a, i);
                return r(
                  "AdsCampaignRecordAccessors",
                ).time_based_ad_rotation_intervals.set(n, e);
              } else return e;
            });
          },
          o(
            "AdsUEditorReachFrequencyUpdateTimeBasedAdRotationIntervalActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
