__d(
  "AdsUEditorCampaignGroupMutationForLightweightBestPracticesReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsExperimentsLightweightTestBudgetUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignMutationForLightweightBestPracticesActionFlux",
    "filterNulls",
    "getLightweightABTestDuplicatedDefaultName",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignGroupIDs;
            return t.studyLevel !== "campaign"
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  n != null ? n : [],
                  function (e) {
                    var n = t.originalData.campaignGroupIDs.includes(e.id);
                    return o("AdsMutators").chain.apply(
                      o("AdsMutators"),
                      r("filterNulls")(
                        [].concat(c(n, t), [
                          d(e, n),
                          u(e, n, t.lightweightType),
                        ]),
                      ),
                    )(e);
                  },
                );
          },
          r("AdsUEditorCampaignMutationForLightweightBestPracticesActionFlux")
            .actionType,
        ),
      };
    function u(e, t, n) {
      return t || n === "ADVANTAGE_SHOPPING_CAMPAIGN"
        ? null
        : r("AdsCampaignGroupRecordAccessors").name.set(
            r("getLightweightABTestDuplicatedDefaultName")(e.name).toString(),
          );
    }
    function c(e, t) {
      return [
        e
          ? null
          : r("AdsCampaignGroupRecordAccessors").include_in_ad_study_id.set(
              t.studyID,
            ),
        e
          ? null
          : r(
              "AdsCampaignGroupRecordAccessors",
            ).include_in_ad_study_cell_id.set(t.studyCellID),
      ];
    }
    function d(t, n) {
      var a = t.lifetime_budget != null || t.daily_budget != null;
      if (!a) return null;
      var i = o(
          "AdsExperimentsLightweightTestBudgetUtils",
        ).getSplitBudgetMutatorValues({
          campaign: null,
          campaignGroup: t,
          isForExisting: n,
          numberOfCells: e,
        }),
        l = i.isDailyBudget,
        s = i.newBudgetPerCell;
      return l
        ? r("AdsCampaignGroupRecordAccessors").daily_budget.set(
            String(o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(s)),
          )
        : r("AdsCampaignGroupRecordAccessors").lifetime_budget.set(
            String(o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(s)),
          );
    }
    var m = s;
    l.default = m;
  },
  98,
);
