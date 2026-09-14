__d(
  "AdsUEditorCampaignCBOToggleAcceleratedDeliveryReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.useAcceleratedDelivery
              ? o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var t;
                  return o("AdsMutators").chain(
                    (t = r("AdsCampaignRecordAccessors")).daily_min_spend_target
                      .delete,
                    t.daily_spend_cap.delete,
                    t.lifetime_min_spend_target.delete,
                    t.lifetime_spend_cap.delete,
                    t.min_budget_spend_percentage.delete,
                    t.max_budget_spend_percentage.delete,
                  )(e);
                })
              : e;
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
