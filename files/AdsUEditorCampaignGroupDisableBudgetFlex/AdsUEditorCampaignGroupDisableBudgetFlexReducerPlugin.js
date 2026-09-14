__d(
  "AdsUEditorCampaignGroupDisableBudgetFlexReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeBudgetModeActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n;
            if (t.shouldDisableFlex === !0) {
              var a;
              return o("AdsMutators").mutateEach(
                e,
                (a = t.campaignGroupIDs) != null ? a : [],
                function (e) {
                  return o(
                    "AdsCampaignGroupBudgetMutationUtils",
                  ).resetCampaignGroupWhenCampaignBudgetEnabled(e, !1);
                },
              );
            }
            if (t.budgetMode !== "lifetime") return e;
            var i = (n = t.campaignGroupIDs) != null ? n : [];
            return i.length > 0
              ? o("AdsMutators").mutateEach(e, i, function (e) {
                  var t = r("AdsCampaignGroupRecordAccessors").pacing_type.get(
                    e,
                  );
                  return t != null && t.includes("day_parting")
                    ? r("AdsCampaignGroupRecordAccessors").pacing_type.set(
                        r("immutable").List(["standard"]),
                        e,
                      )
                    : e;
                })
              : e;
          },
          [
            o("AdsUEditorCampaignDeliveryChangeBudgetModeActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
