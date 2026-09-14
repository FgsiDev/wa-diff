__d(
  "AdsUEditorCampaignGroupSetBudgetToggleReducerPlugin",
  [
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBudgetToggleActionFlux",
    "adsUEditorAccountSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e, n) {
                var i,
                  l,
                  s =
                    e.pacing_type != null &&
                    e.pacing_type.includes("day_parting"),
                  u = !!e.daily_budget,
                  c = t.isOptedInForCampaignGroupBudget
                    ? o(
                        "AdsCampaignGroupBudgetMutationUtils",
                      ).resetCampaignGroupWhenCampaignGroupBudgetEnabled(
                        a,
                        e,
                        t.campaignsByCampaignGroupID
                          ? t.campaignsByCampaignGroupID.get(n) || []
                          : [],
                        t.hostID,
                      )
                    : o(
                        "AdsCampaignGroupBudgetMutationUtils",
                      ).resetCampaignGroupWhenCampaignBudgetEnabled(
                        e,
                        t.isBudgetFlexOn === !0,
                      );
                if (
                  (t.isOptedInForCampaignGroupBudget ||
                    (c = o(
                      "AdsBudgetScalingMutationUtils",
                    ).clearCampaignGroupBudgetScaling(c)),
                  !t.isOptedInForCampaignGroupBudget &&
                    u &&
                    s &&
                    (c = r("AdsCampaignGroupRecordAccessors").pacing_type.set(
                      r("immutable").List(["day_parting"]),
                      c,
                    )),
                  !t.duplicationTipTypeByCampaignGroupID)
                )
                  return c;
                var d = t.duplicationTipTypeByCampaignGroupID.get(n);
                return d == null
                  ? c
                  : c.merge(
                      ((l = {}),
                      (l.metrics_metadata =
                        ((i = {}),
                        (i.duplication_flow_tips = r("immutable").List([d])),
                        i)),
                      l),
                    );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetBudgetToggleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
