__d(
  "AdsUEditorCampaignGroupSetBudgetTypeReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBudgetTypeActionFlux",
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
                var i = o(
                  "AdsCampaignGroupBudgetMutationUtils",
                ).resetCampaignGroupBudgetMode(
                  a,
                  e,
                  t.budgetType,
                  t.campaignsByCampaignGroupID
                    ? t.campaignsByCampaignGroupID.get(n) || []
                    : [],
                  t.hostID,
                  t.prevBudgetAmount,
                );
                if (t.budgetAmount != null) {
                  var l =
                    t.budgetType === "daily"
                      ? r("AdsCampaignGroupRecordAccessors").daily_budget
                      : r("AdsCampaignGroupRecordAccessors").lifetime_budget;
                  i = l.set(
                    String(
                      o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                        t.budgetAmount,
                      ),
                    ),
                  )(i);
                }
                t.budgetType === "lifetime" &&
                  (i = r("AdsCampaignGroupRecordAccessors").spend_cap.delete(
                    i,
                  ));
                var s = e.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
                if (t.budgetType === "lifetime" && !s) {
                  var u = t.campaignsByCampaignGroupID
                      ? t.campaignsByCampaignGroupID.get(n) || []
                      : [],
                    c = u.some(function (e) {
                      var t = e.adset_schedule;
                      return t == null
                        ? !1
                        : Array.isArray(t)
                          ? t.length > 0
                          : t.size > 0;
                    });
                  if (c) {
                    var d = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).pacing_type.get(i);
                    (d == null || !d.includes("day_parting")) &&
                      (i = r("AdsCampaignGroupRecordAccessors").pacing_type.set(
                        r("immutable").List(["day_parting"]),
                        i,
                      ));
                  }
                } else {
                  var m = r("AdsCampaignGroupRecordAccessors").pacing_type.get(
                    i,
                  );
                  m != null &&
                    m.includes("day_parting") &&
                    (i = r("AdsCampaignGroupRecordAccessors").pacing_type.set(
                      r("immutable").List(["standard"]),
                      i,
                    ));
                }
                return (
                  t.budgetType === "daily" &&
                    (i = o(
                      "AdsCampaignGroupBudgetMutationUtils",
                    ).maybeResetTargetFrequencyToCap(i)),
                  i
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetBudgetTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
