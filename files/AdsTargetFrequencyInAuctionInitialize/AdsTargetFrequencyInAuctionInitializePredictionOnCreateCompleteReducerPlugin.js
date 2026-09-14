__d(
  "AdsTargetFrequencyInAuctionInitializePredictionOnCreateCompleteReducerPlugin",
  [
    "AdsBuyingTypes",
    "AdsDataAtom",
    "AdsFrequencyControlEditorConstants",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
    "AdsTargetFrequencyInAuctionUtils",
    "AdsUEditorHostIDs",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          var t = a.campaignIDs;
          if (t == null || t.length === 0) return n;
          var l = o("AdsPECampaignSelectors").getByFieldsSelector(),
            s = o("AdsPECampaignGroupSelectors").getByFieldsSelector(),
            u = t.filter(function (e) {
              var t, a, i, u;
              if (n.get(e) != null) return !1;
              var c =
                (t = l(e, {
                  campaign_id: null,
                  frequency_control_specs: null,
                  optimization_goal: null,
                  rf_prediction_id: null,
                })) == null
                  ? void 0
                  : t.getValue();
              if (c == null) return !1;
              var d =
                (a = s(c.campaign_id, { buying_type: null })) == null
                  ? void 0
                  : a.getValue();
              if (d == null) return !1;
              var m =
                  (i = r("first")(
                    (u = c.frequency_control_specs) != null ? u : [],
                  )) == null
                    ? void 0
                    : i.type,
                p =
                  c.rf_prediction_id != null &&
                  c.rf_prediction_id !==
                    o("AdsFrequencyControlEditorConstants").NO_PREDICTION_ID;
              return !(
                d.buying_type !== r("AdsBuyingTypes").AUCTION ||
                m !== "TARGET" ||
                p ||
                !o(
                  "AdsTargetFrequencyInAuctionUtils",
                ).shouldEnableTargetFrequencyByDefault(c.optimization_goal)
              );
            });
          return (
            u.length > 0 &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
                  ).dispatch(
                    { campaignIDs: u, hostID: r("AdsUEditorHostIDs").EDITING },
                    {
                      line: "89",
                      module:
                        "AdsTargetFrequencyInAuctionInitializePredictionOnCreateCompleteReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ),
            n
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
