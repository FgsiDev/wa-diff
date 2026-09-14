__d(
  "AdsUEditorCampaignRFAdjustRotationOnCampaignChangeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignRFAdjustRotationOnCampaignChangeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "DateConsts",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.endTime,
              a = t.startTime;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t = e.time_based_ad_rotation_intervals;
              return !t || t.size === 0
                ? e
                : n - a <= o("DateConsts").SEC_PER_DAY ||
                    t.get(0) !== a ||
                    t.last() >= n
                  ? o("AdsMutators").chain(
                      r(
                        "AdsCampaignRecordAccessors",
                      ).time_based_ad_rotation_intervals.set(
                        r("immutable").List(),
                      ),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).time_based_ad_rotation_id_blocks.set(
                        r("immutable").List(),
                      ),
                    )(e)
                  : e;
            });
          },
          o("AdsUEditorCampaignRFAdjustRotationOnCampaignChangeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
