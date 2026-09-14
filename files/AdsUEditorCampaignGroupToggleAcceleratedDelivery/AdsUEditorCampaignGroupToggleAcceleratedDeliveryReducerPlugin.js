__d(
  "AdsUEditorCampaignGroupToggleAcceleratedDeliveryReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux",
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
                var n = t.useAcceleratedDelivery ? "no_pacing" : "standard";
                return o(
                  "AdsCampaignGroupBudgetMutationUtils",
                ).setCampaignGroupPacingType(e, n);
              },
            );
          },
          o("AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
