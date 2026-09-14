__d(
  "AdsExperimentsLightweightAdvantageShoppingCampainsPlugin",
  [
    "fbt",
    "ix",
    "AdsAPIObjectives",
    "AdsASCReusableFBTsUtil",
    "AdsAdObjectsSelectors",
    "AdsDuplicationUpgradeChangesSummaryModalAction",
    "AdsExperiments2026QEUtils",
    "AdsExperimentsRecommendedTestsRankingUtil",
    "AdsPECrepePackages",
    "IPB4BImage.react",
    "adsExperimentsAreAllOptimizationGoalsEqual",
    "adsExperimentsGetConversionLocationsForCampaigns",
    "adsExperimentsGetDefaultDurationDays",
    "adsExperimentsGetIneligibleCampaignsWithMixedBudgets",
    "adsExperimentsGetInvalidConversionLocationErrorMessage",
    "adsExperimentsGetMismatchedConversionLocationErrorMessage",
    "adsExperimentsGetMixedBudgetErrorMessage",
    "adsExperimentsGetObjectiveCompatibilityErrorMessage",
    "adsExperimentsGetP25BudgetThresholdInUSD",
    "adsExperimentsGetPerformanceCompatibilityErrorMessage",
    "adsExperimentsGetTooManyAdsErrorMessage",
    "adsExperimentsIsFunnelEntranceActionForABTModal",
    "getInvalidObjectiveErrorForASA",
    "getSourceCampaignInvalidErrorForDuplicationToASA",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = 5,
      m = 50,
      p = {
        getAdObjectLevel: function () {
          return "campaign";
        },
        eligibilityConfig: r("immutable").Map({
          invalid_objective: {
            errorMessage: function () {
              return r("adsExperimentsGetObjectiveCompatibilityErrorMessage")({
                featureName: p.getName(),
                objective: r("AdsAPIObjectives").OUTCOME_SALES,
              });
            },
            getIneligibleData: function (t) {
              var e,
                n = (e = t.campaignGroup) == null ? void 0 : e.objective;
              if (n != null && r("getInvalidObjectiveErrorForASA")(n) != null) {
                var o;
                return {
                  campaignGroupID:
                    (o = t.campaignGroup) == null ? void 0 : o.id,
                };
              }
            },
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          invalid_conversion_location: {
            errorMessage: function (t, n) {
              var e;
              return r(
                "adsExperimentsGetInvalidConversionLocationErrorMessage",
              )({
                featureName: p.getName(),
                objective:
                  n == null || (e = n.campaignGroup) == null
                    ? void 0
                    : e.objective,
              });
            },
            getIneligibleData: function (t, n) {
              if (_(t) && t.campaign != null) {
                var e;
                return {
                  campaignIDs: new Set([
                    (e = t.campaign) == null ? void 0 : e.id,
                  ]),
                };
              }
            },
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          too_many_ads: {
            errorMessage: function () {
              return r("adsExperimentsGetTooManyAdsErrorMessage")(m);
            },
            getIneligibleData: function (t, n) {
              var e = t.campaignGroup,
                r = n.adAccount;
              if (
                !((e == null ? void 0 : e.id) == null || n.adAccount.account_id)
              )
                return o("AdsAdObjectsSelectors")
                  .getChildCampaignsLoadObjectSelector({
                    accountID: r.account_id,
                    campaignGroupIDs: [e == null ? void 0 : e.id],
                  })
                  .mapValue(function (t) {
                    var n = t.reduce(function (e, t) {
                      var n;
                      return (
                        e +
                        ((n = t == null ? void 0 : t.ad_count) != null ? n : 0)
                      );
                    }, 0);
                    if (n >= m)
                      return { campaignGroupID: e == null ? void 0 : e.id };
                  })
                  .getValue();
            },
            isRecoverable: !0,
            isPublishOnlyCheck: !1,
          },
          mixed_budget_types: {
            errorMessage: function () {
              return r("adsExperimentsGetMixedBudgetErrorMessage")();
            },
            getIneligibleData: function (t, n) {
              var e = n.adAccount,
                a = t.campaignGroup;
              if ((a == null ? void 0 : a.id) != null) {
                var i = o("AdsAdObjectsSelectors")
                  .getChildCampaignsLoadObjectSelector({
                    accountID: e.account_id,
                    campaignGroupIDs: [a == null ? void 0 : a.id],
                  })
                  .getValue();
                if (i != null) {
                  var l = r(
                    "adsExperimentsGetIneligibleCampaignsWithMixedBudgets",
                  )({ campaignGroup: a, campaigns: i });
                  if (l != null) return l;
                }
              }
            },
            isRecoverable: !0,
            isPublishOnlyCheck: !1,
          },
          mismatched_conversion_location: {
            errorMessage: function () {
              return r(
                "adsExperimentsGetMismatchedConversionLocationErrorMessage",
              )();
            },
            getIneligibleData: function (t, n) {
              var e = n.adAccount,
                a = t.campaignGroup;
              if ((a == null ? void 0 : a.id) != null) {
                var i = o("AdsAdObjectsSelectors")
                  .getChildCampaignsLoadObjectSelector({
                    accountID: e.account_id,
                    campaignGroupIDs: [a == null ? void 0 : a.id],
                  })
                  .getValue();
                if (i != null) {
                  var l = r("adsExperimentsGetConversionLocationsForCampaigns")(
                    { campaignGroup: a, campaigns: i },
                  );
                  if (l.toSet().size > 1)
                    return { campaignIDs: new Set(l.keys()) };
                }
              }
            },
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          mismatched_optimization_goals: {
            errorMessage: function (t, n) {
              var e;
              return r("adsExperimentsGetPerformanceCompatibilityErrorMessage")(
                {
                  featureName: p.getName(),
                  objective:
                    n == null || (e = n.campaignGroup) == null
                      ? void 0
                      : e.objective,
                },
              );
            },
            getIneligibleData: function (t, n) {
              var e = n.adAccount,
                a = t.campaignGroup;
              if ((a == null ? void 0 : a.id) != null) {
                var i = o("AdsAdObjectsSelectors")
                  .getChildCampaignsLoadObjectSelector({
                    accountID: e.account_id,
                    campaignGroupIDs: [a == null ? void 0 : a.id],
                  })
                  .getValue();
                if (
                  i != null &&
                  !r("adsExperimentsAreAllOptimizationGoalsEqual")({
                    campaigns: i,
                  })
                )
                  return {
                    campaignGroupID: a == null ? void 0 : a.id,
                    campaignIDs: new Set(i.keys()),
                  };
              }
            },
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
        }),
        getBudgetLowerBoundRecommendation: function (t) {
          return r("adsExperimentsGetP25BudgetThresholdInUSD")(t);
        },
        getOnPublishSuccessToastCardContent: function () {
          return {
            bodyText: s._(
              /*BTDS*/ '_j{"*":"A copy was made of your manual sales campaign to create version B for this A\\\/B test. You\\u2019ll get results in {number} days.","_1":"A copy was made of your manual sales campaign to create version B for this A\\\/B test. You\\u2019ll get results in 1 day."}',
              [
                s._plural(
                  r("adsExperimentsGetDefaultDurationDays")(),
                  "number",
                ),
              ],
            ),
            callToActionLabel: s._(/*BTDS*/ "See test details"),
          };
        },
        getLoggingEntryPoint: function (t) {
          return r("adsExperimentsIsFunnelEntranceActionForABTModal")(t)
            ? "LightweightRecommendedTestsABTModal"
            : "LightweightCheckboxAdvantageShoppingCampaign";
        },
        getTestRecommendationConfig: function () {
          return {
            description: s._(
              /*BTDS*/ "See if using an Advantage+ sales campaign can help you reach more people and improve performance. Select an eligible campaign and we'll copy it to create an Advantage+ sales campaign so you can compare results.",
            ),
            getDuplicationSuccessToastMessage: function () {
              return {
                bodyText: o("AdsASCReusableFBTsUtil")
                  .ASC_DUPLICATION_SUCCESS_TOAST_BODY,
                callsToAction: [
                  {
                    label: o("AdsASCReusableFBTsUtil")
                      .ASC_VIEW_DETAILS_CALL_TO_ACTION_LABEL,
                    onClick: function () {
                      r(
                        "AdsDuplicationUpgradeChangesSummaryModalAction",
                      ).dispatch(
                        {
                          shouldShow: !0,
                          packageKey: "ascCampaignGroupDuplicationPackage",
                        },
                        {
                          line: "289",
                          module:
                            "AdsExperimentsLightweightAdvantageShoppingCampainsPlugin.js",
                          moduleID: i.id,
                        },
                      );
                    },
                    testID:
                      "ads-experiments-lightweight-asc-duplication-success-toast-card-cta",
                    use: "default",
                  },
                ],
              };
            },
            getPreviewCardSubtext: function () {
              return s._(
                /*BTDS*/ "We'll copy version A to create an Advantage+ sales campaign.",
              );
            },
            getUpsellContent: function () {
              return {
                label: o("AdsASCReusableFBTsUtil")
                  .ASC_UPSELL_POTENTIAL_OUTCOME_LABEL,
                summary: o("AdsASCReusableFBTsUtil")
                  .ASC_UPSELL_POTENTIAL_OUTCOME_GUIDANCE,
                tooltipDescription: o("AdsASCReusableFBTsUtil")
                  .ASC_UPSELL_TOOLTIP_DESCRIPTION,
              };
            },
            icon: c.jsx(r("IPB4BImage.react"), { src: u("869767") }),
            name: s._(/*BTDS*/ "Test manual against Advantage+ sales campaign"),
            opportunityScore: o("AdsExperimentsRecommendedTestsRankingUtil")
              .ADVANTAGE_SHOPPING_CAMPAIGN_TEST_OPPORTUNITY_SCORE,
          };
        },
        getTestDuration: function () {
          return {
            maxRecommendedWeeks: 4,
            minRecommendedWeeks: 2,
            minRequiredDays: 7,
          };
        },
        hasOptInUXSupportForAdObjectTestRecovery: !1,
        isVisibleForAdvertiser: function (t, n) {
          return o(
            "AdsExperiments2026QEUtils",
          ).getIsEligibleForMarSciTestRecommendations();
        },
        key: "ADVANTAGE_SHOPPING_CAMPAIGN",
        minDailyBudget: d,
        mutationConfig: {
          getDuplicateCopyMutationOptions: function () {
            return {
              creationPackageConfigID:
                o("AdsPECrepePackages").ASA_ODAX_PACKAGE_CONFIG_ID,
            };
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "Advantage+ sales campaign");
        },
        type: "lightweightABTest",
      };
    function _(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s = e.campaign;
      if (s == null) return !0;
      var u = {
        destination_type: s.destination_type,
        is_dynamic_creative: s.is_dynamic_creative,
        is_dynamic_creative_asset_customization:
          s.is_dynamic_creative_asset_customization,
        is_dynamic_creative_optimization: s.is_dynamic_creative_optimization,
        promoted_object: {
          application_id:
            (t = s.promoted_object) == null ? void 0 : t.application_id,
          omnichannel_object:
            (n = s.promoted_object) != null && n.omnichannel_object
              ? {
                  offline:
                    (o =
                      (a = s.promoted_object) == null ||
                      (a = a.omnichannel_object) == null ||
                      (a = a.offline) == null
                        ? void 0
                        : a.toArray().map(function (e) {
                            return e.toJS();
                          })) != null
                      ? o
                      : null,
                  onsite:
                    (i =
                      (l = s.promoted_object) == null ||
                      (l = l.omnichannel_object) == null ||
                      (l = l.onsite) == null
                        ? void 0
                        : l.toArray().map(function (e) {
                            return e.toJS();
                          })) != null
                      ? i
                      : null,
                }
              : null,
        },
      };
      return (
        r("getSourceCampaignInvalidErrorForDuplicationToASA")(u, !0) != null
      );
    }
    var f = p;
    l.default = f;
  },
  226,
);
