__d(
  "AdsUEditorCampaignSetCBOBudgetTypeReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignGroupSetBudgetTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "LifetimeDefaultDurationUtils",
    "adsUEditorAccountSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsMap: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.mapTransform(function (e) {
              return e;
            }),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignGroupsMap;
            if (t.budgetType === "lifetime") {
              var l = i.values().next().value;
              o(
                "LifetimeDefaultDurationUtils",
              ).isSevenDayLifetimeDurationEnabledForObjective(
                l == null ? void 0 : l.objective,
                !0,
              );
            }
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var l = e.campaign_id,
                  s = i.get(l),
                  u = o(
                    "AdsCampaignGroupBudgetMutationUtils",
                  ).resetCampaignBudgetMode(
                    a,
                    e,
                    t.budgetType,
                    null,
                    s == null ? void 0 : s.objective,
                  );
                if (t.budgetType === "lifetime") {
                  var c = r("AdsCampaignRecordAccessors").adset_schedule.get(u);
                  if (c != null && c.size > 0) {
                    var d = r("AdsCampaignRecordAccessors").pacing_type.get(u);
                    (d == null || !d.includes("day_parting")) &&
                      (u = r("AdsCampaignRecordAccessors").pacing_type.set(
                        r("immutable").List(["day_parting"]),
                      )(u));
                  }
                } else
                  u = o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").adset_schedule.set(
                      r("immutable").List(),
                    ),
                    r("AdsCampaignRecordAccessors").pacing_type.set(
                      r("immutable").List(["standard"]),
                    ),
                  )(u);
                return u;
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
