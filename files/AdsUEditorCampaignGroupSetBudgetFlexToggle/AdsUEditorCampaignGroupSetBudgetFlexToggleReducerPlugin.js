__d(
  "AdsUEditorCampaignGroupSetBudgetFlexToggleReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBudgetFlexToggleActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                var n = o(
                  "AdsCampaignGroupBudgetMutationUtils",
                ).resetCampaignGroupWhenCampaignBudgetEnabled(
                  e,
                  t.isBudgetFlexOn,
                );
                return (
                  t.isBudgetFlexOn &&
                    t.hasExistingDayPartingSchedule === !0 &&
                    (n = r("AdsCampaignGroupRecordAccessors").pacing_type.set(
                      r("immutable").List(["day_parting"]),
                      n,
                    )),
                  n
                );
              },
            );
          },
          r("AdsUEditorCampaignGroupSetBudgetFlexToggleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
