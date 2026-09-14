__d(
  "AdsUEditorCampaignGroupToggleDayPartingReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupToggleDayPartingActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return o(
                  "AdsCampaignGroupBudgetMutationUtils",
                ).setCampaignGroupDayParting(e, t.useDayParting);
              },
            );
          },
          o("AdsUEditorCampaignGroupToggleDayPartingActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
