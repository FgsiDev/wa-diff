__d(
  "AdsUEditorCampaignSetBudgetReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsMutators",
    "AdsUEditorCampaignInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetBudgetActionFlux",
    "LoadObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignGroupsByCampaignID: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t;
            }),
          },
          function (e, t, n) {
            var a = n.campaignGroupsByCampaignID;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var l = a.get(n),
                  s =
                    l != null
                      ? r("LoadObject").withValue(l, { creatorModuleID: i.id })
                      : r("LoadObject").loading({ creatorModuleID: i.id });
                return (t.dailyBudget != null && t.dailyBudget !== 0) ||
                  (t.lifetimeBudget != null && t.lifetimeBudget !== 0)
                  ? o("AdsCampaignBudgetMutationUtils").setBudget(
                      t.dailyBudget,
                      t.lifetimeBudget,
                      t.isCorporate,
                      e,
                      s,
                    )
                  : e;
              },
            );
          },
          [
            o("AdsUEditorCampaignInstantPublishBudgetFieldActionFlux")
              .actionType,
            o("AdsUEditorCampaignSetBudgetActionFlux").actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
