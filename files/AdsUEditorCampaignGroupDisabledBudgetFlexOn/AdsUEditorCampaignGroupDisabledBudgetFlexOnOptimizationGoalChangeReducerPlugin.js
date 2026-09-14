__d(
  "AdsUEditorCampaignGroupDisabledBudgetFlexOnOptimizationGoalChangeReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeActionFlux",
    "adsBudgetFlexGKUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a,
              i,
              l =
                (n =
                  (a = t.changedSettings) == null
                    ? void 0
                    : a.optimizationGoal) != null
                  ? n
                  : t == null
                    ? void 0
                    : t.optimizationGoal,
              s = l != null,
              u =
                ((i = t.changedSettings) == null
                  ? void 0
                  : i.promotedObjectType) != null;
            if (s || u) {
              var c,
                d,
                m =
                  ((c = t.campaignGroupIDs) != null ? c : []).length > 0
                    ? (d = t.campaignGroupIDs) != null
                      ? d
                      : []
                    : e.keySeq().toArray();
              return m.length > 0
                ? o("AdsMutators").mutateEach(e, m, function (e) {
                    var n = e,
                      a = e.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
                    if (s && t.isChangingAllCampaigns !== !0 && a) {
                      var i =
                        o("adsBudgetFlexGKUtils").isEngagementObjective(
                          n.objective,
                        ) && o("adsBudgetFlexGKUtils").isRelativeFlexEnabled();
                      i ||
                        (n = o("AdsMutators").chain(
                          r("AdsCampaignGroupRecordAccessors").budget_strategy
                            .delete,
                        )(n));
                    }
                    var l =
                      r("AdsCampaignGroupRecordAccessors").effective_status.get(
                        e,
                      ) == null;
                    if (l || a) {
                      var u = r(
                        "AdsCampaignGroupRecordAccessors",
                      ).pacing_type.get(n);
                      u != null &&
                        u.includes("day_parting") &&
                        (n = r(
                          "AdsCampaignGroupRecordAccessors",
                        ).pacing_type.set(
                          r("immutable").List(["standard"]),
                          n,
                        ));
                    }
                    return n;
                  })
                : e;
            }
            return e;
          },
          [
            r(
              "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeActionFlux",
            ).actionType,
            o("AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
