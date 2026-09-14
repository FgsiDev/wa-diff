__d(
  "AdsUEditorCampaignSetBudgetFlexToggleReducerPlugin",
  [
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupSetBudgetFlexToggleActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignGroupMap;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                if (t.isBudgetFlexOn) {
                  var l = r("AdsCampaignRecordAccessors").adset_schedule.get(e),
                    s = l != null && l.size > 0,
                    u = o(
                      "AdsCampaignGroupBudgetMutationUtils",
                    ).resetCampaignWhenBudgetFlexEnabled(a, e, i.get(n));
                  return (
                    (u = o(
                      "AdsBudgetScalingMutationUtils",
                    ).clearCampaignBudgetScaling(u)),
                    s &&
                      (u = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").adset_schedule.set(l),
                        r("AdsCampaignRecordAccessors").pacing_type.set(
                          r("immutable").List(["day_parting"]),
                        ),
                      )(u)),
                    u
                  );
                } else {
                  var c = r("nullthrows")(i.get(n)),
                    d = r("AdsCampaignRecordAccessors").adset_schedule.get(e),
                    m = d != null && d.size > 0,
                    p = o(
                      "AdsCampaignGroupBudgetMutationUtils",
                    ).resetBiddingFieldsWhenCampaignBudgetEnabled(a, c, e);
                  return (
                    m &&
                      (p = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").adset_schedule.set(d),
                        r("AdsCampaignRecordAccessors").pacing_type.set(
                          r("immutable").List(["day_parting"]),
                        ),
                      )(p)),
                    (p = r(
                      "AdsCampaignRecordAccessors",
                    ).cost_bidding_mode.delete(p)),
                    p
                  );
                }
              },
            );
          },
          o("AdsUEditorCampaignGroupSetBudgetFlexToggleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
