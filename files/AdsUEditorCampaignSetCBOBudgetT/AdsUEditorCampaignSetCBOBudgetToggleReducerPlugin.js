__d(
  "AdsUEditorCampaignSetCBOBudgetToggleReducerPlugin",
  [
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsMutators",
    "AdsTargetFrequencyInAuctionUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupSetBudgetToggleActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsTargetFrequencyInAuctionMutationUtils",
    "adsUEditorAccountSelector",
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
                var l,
                  s,
                  u = r("nullthrows")(i.get(n));
                if (t.isOptedInForCampaignGroupBudget)
                  return o(
                    "AdsBudgetScalingMutationUtils",
                  ).clearCampaignBudgetScaling(
                    o(
                      "AdsCampaignGroupBudgetMutationUtils",
                    ).resetCampaignWhenCampaignGroupBudgetEnabled(a, e, u),
                  );
                var c =
                    (l =
                      (s = t.campaignsByCampaignGroupID) == null ||
                      (s = s.get(u.id)) == null
                        ? void 0
                        : s.length) != null
                      ? l
                      : 1,
                  d =
                    t.previousCampaignGroupDailyBudget != null
                      ? Math.floor(t.previousCampaignGroupDailyBudget / c)
                      : null,
                  m =
                    t.previousCampaignGroupLifetimeBudget != null
                      ? Math.floor(t.previousCampaignGroupLifetimeBudget / c)
                      : null,
                  p = t.previousCampaignGroupDailyBudget != null,
                  _ = o(
                    "AdsTargetFrequencyInAuctionUtils",
                  ).shouldEnableTargetFrequencyByDefaultForCampaign(
                    u.objective,
                    e.optimization_goal,
                  ),
                  f = o(
                    "AdsCampaignGroupBudgetMutationUtils",
                  ).resetCampaignWhenCampaignBudgetEnabled(a, u, e, {
                    hostIDType: t.hostID,
                    isBudgetFlexOn: t.isBudgetFlexOn === !0,
                    savedCampaignDailyBudget: d,
                    savedCampaignLifetimeBudget: m,
                    shouldDefaultToLifetimeForTargetFrequency: _,
                    shouldRetainDayparting: p,
                  });
                return _
                  ? o(
                      "adsTargetFrequencyInAuctionMutationUtils",
                    ).maybeDefaultScheduleForTargetFrequencyAuction(
                      f,
                      a.timezone_id,
                    )
                  : f;
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
