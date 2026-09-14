__d(
  "AdsCampaignFullFunnelEntryReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsFullFunnelEntryActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.full_funnel_objective.set(
                r("AdsAPIObjectives").OUTCOME_AWARENESS,
                e,
              );
            });
          },
          r("AdsFullFunnelEntryActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
