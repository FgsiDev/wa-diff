__d(
  "AdsUEditorCampaignClearSpendingControlsReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignClearSpendingControlsActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignIDToCampaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (e, t, n) {
            var a = n.campaignIDToCampaignGroupMap;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                var n = e,
                  i = a.get(t);
                if (i == null) return n;
                var l = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getBudgetTypeEnforcing(i),
                  s = e.daily_spend_cap != null,
                  u = e.daily_min_spend_target != null,
                  c = e.lifetime_spend_cap != null,
                  d = e.lifetime_min_spend_target != null,
                  m = l === "daily";
                return (
                  m && (c || d)
                    ? (n = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors")
                          .lifetime_min_spend_target.delete,
                        r("AdsCampaignRecordAccessors").lifetime_spend_cap
                          .delete,
                      )(n))
                    : !m &&
                      (s || u) &&
                      (n = o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").daily_min_spend_target
                          .delete,
                        r("AdsCampaignRecordAccessors").daily_spend_cap.delete,
                      )(n)),
                  m
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").daily_spend_cap.set(
                          922337203685478,
                        ),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).daily_min_spend_target.set(0),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).min_budget_spend_percentage.set(0),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).max_budget_spend_percentage.set(0),
                      )(e)
                    : o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").lifetime_spend_cap.set(
                          922337203685478,
                        ),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).lifetime_min_spend_target.set(0),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).min_budget_spend_percentage.set(0),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).max_budget_spend_percentage.set(0),
                      )(n)
                );
              },
            );
          },
          o("AdsUEditorCampaignClearSpendingControlsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
