__d(
  "AdsUEditorCampaignUpdateLifetimeFlexScheduleFlagReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetValidLifetimeFlexScheduleFlagActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                return o("AdsMutators").chain(function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).is_lifetime_flex_with_valid_schedule.set(
                    t.isValidLifetimeFlexSchedule,
                    e,
                  );
                })(e);
              },
            );
          },
          r("AdsUEditorCampaignSetValidLifetimeFlexScheduleFlagActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
