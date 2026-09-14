__d(
  "AdsUEditorCampaignUnifiedCreationUpdateBudgetDefaultReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignMutatorUtils",
    "AdsEditingCampaignEditorContext",
    "AdsMutators",
    "AdsUEditorAdgroupUnifiedCreationUpdateDefaultHeadlineAndBudgetActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorMessagingDestinationUtils",
    "CTMAdsOptimizationStoreUtils",
    "CTXDynamicBudgetNonCBOUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            budgetDefaultParams: o(
              "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
            ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector,
          },
          function (e, t, n) {
            var a = n.budgetDefaultParams;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              if (
                (t.destinationType === r("AdCampaignDestination").MESSENGER &&
                  o(
                    "CTMAdsOptimizationStoreUtils",
                  ).getIsPhase2PurchaseConversionsOptimizationEligible(
                    t == null ? void 0 : t.pageID,
                  )) ||
                (e.optimization_goal !==
                  r("AdsAPIOptimizationGoals").CONVERSATIONS &&
                  e.optimization_goal !==
                    r("AdsAPIOptimizationGoals").LINK_CLICKS)
              )
                return e;
              if (t.previousDestinationType !== t.destinationType) {
                var n = o(
                    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
                  ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
                    r("AdsEditingCampaignEditorContext"),
                  ),
                  i = n.account,
                  l = n.isCBOEnabled,
                  s = n.isCreationPackageEnabled,
                  u = n.objective,
                  c = n.optimizationGoal,
                  d = o(
                    "ClickToMessageCTMAdoptionFeatureGating",
                  ).eligibleCTXAMSABRZOCombinedBudgetGuidance(
                    l,
                    t.destinationType,
                    c,
                  ),
                  m =
                    o(
                      "ClickToMessageCTWAFeatureGating",
                    ).isEligibleForCTXOptimizationGoal(u, c) &&
                    o(
                      "CTXDynamicBudgetNonCBOUtils",
                    ).enableCTXDynamicBudgetRecommendationNonCBO(
                      !1,
                      "UpdateBudgetReducerPlugin",
                    );
                if (
                  d &&
                  (s
                    ? o(
                        "ClickToMessageCTMAdoptionFeatureGating",
                      ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceCreationPackagesQE(
                        !1,
                      )
                    : r("isTruthy")(u) &&
                      (o(
                        "ClickToMessageCTMAdoptionFeatureGating",
                      ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE(
                        !1,
                        "CTXAMSABRZOCombinedBudgetGuidance",
                        "AdsUEditorCampaignUnifiedCreationUpdateBudgetDefaultReducerPlugin",
                      ) ||
                        m))
                ) {
                  var p = o(
                    "AdsUEditorMessagingDestinationUtils",
                  ).getPromotedObjectTypeForDestination(t.destinationType);
                  return o(
                    "AdsCampaignMutatorUtils",
                  ).setDefaultBudgetForCampaign(
                    i,
                    e,
                    r("AdsAPIObjectives").MESSAGES,
                    p,
                    a.objective,
                  );
                }
                var _ = o(
                  "AdsUEditorMessagingDestinationUtils",
                ).getPromotedObjectTypeForDestination(t.destinationType);
                return o("AdsCampaignMutatorUtils").setDefaultBudgetForCampaign(
                  i,
                  e,
                  r("AdsAPIObjectives").MESSAGES,
                  _,
                  a.objective,
                );
              }
              return e;
            });
          },
          r(
            "AdsUEditorAdgroupUnifiedCreationUpdateDefaultHeadlineAndBudgetActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
