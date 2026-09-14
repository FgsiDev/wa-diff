__d(
  "AdsUEditorCampaignSetRFObjectiveReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignGroupSetRFObjectiveActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignSetObjectiveReduceFn",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t;
            }),
          },
          function (e, t, n) {
            var a = t.isSetBuyingType
              ? r("adsUEditorCampaignSetObjectiveReduceFn")(e, t, n)
              : e;
            return o("AdsMutators").mutateEach(
              a,
              t.campaignIDs,
              function (e, t) {
                return e.withMutations(function (e) {
                  (e.delete("promoted_object"),
                    e.delete("rf_prediction_id"),
                    e.delete("external_bid"),
                    e.delete("daily_budget"),
                    e.delete("lifetime_budget"),
                    e.delete("start_time"),
                    e.delete("end_time"),
                    e.delete("is_autobid"),
                    e.delete("bid_info"),
                    e.delete("bid_type"),
                    e.delete("optimization_goal"),
                    e.delete("billing_event"));
                });
              },
            );
          },
          o("AdsUEditorCampaignGroupSetRFObjectiveActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
