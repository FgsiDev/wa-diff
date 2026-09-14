__d(
  "AdsExperimentsLightweightValueOptimizationGoalPlugin",
  [
    "fbt",
    "AdsAccountUtils",
    "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
    "AdsExperimentsLightweightTestMutationUtils",
    "AdsValueOptimizationUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        getAdObjectLevel: function () {
          return "ad_set";
        },
        eligibilityConfig: r("immutable").Map({
          invalid_objective: {
            errorMessage: function () {
              return o(
                "AdsValueOptimizationUtils",
              ).getObjectiveCompatibilityErrorMessageForValueOptimizationGoalABTest(
                { featureName: e.getName() },
              );
            },
            getIneligibleData: function (t) {
              var e,
                n = (e = t.campaignGroup) == null ? void 0 : e.objective;
              if (
                n != null &&
                o(
                  "AdsValueOptimizationUtils",
                ).getInvalidObjectiveErrorForValueOptimizationGoalABTest(n) !=
                  null
              ) {
                var r;
                return {
                  campaignGroupID:
                    (r = t.campaignGroup) == null ? void 0 : r.id,
                };
              }
            },
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          opt_in_l2_recommendation: {
            errorMessage: o(
              "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
            ).getOptInL2TestErrorMessage,
            getIneligibleData: o("AdsValueOptimizationUtils")
              .isPerformanceGoalNotEligibleForVoABTest,
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          campaign_already_published: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "This test is only available for unpublished campaigns.",
              );
            },
            getIneligibleData: function (t) {
              var e,
                n = (e = t.campaignGroup) == null ? void 0 : e.effective_status;
              if (n != null) {
                var r;
                return {
                  campaignGroupID:
                    (r = t.campaignGroup) == null ? void 0 : r.id,
                };
              }
            },
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          invalid_conversion_location: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "This test is only available for campaigns with Website or Website and app as the conversion location.",
              );
            },
            getIneligibleData: o("AdsValueOptimizationUtils")
              .isConversionLocationNotEligibleForVoABTest,
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          low_trust_tier: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "Ad accounts owned by businesses new to Meta Products can use value optimization for ad delivery after several weeks of following our policies. If you don't want to wait, verify your business.",
              );
            },
            getIneligibleData: function (t, n) {
              var e = n.adAccount;
              if (e != null) {
                var o = r("AdsAccountUtils").hasCapability(
                    e,
                    "ADS_TRUST_TIER_0_FULL",
                  ),
                  a = r("AdsAccountUtils").hasCapability(e, "ADS_TRUST_TIER_1");
                if (o || a) {
                  var i;
                  return {
                    campaignGroupID:
                      (i = t.campaignGroup) == null ? void 0 : i.id,
                  };
                }
              }
            },
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
        }),
        getLoggingEntryPoint: function () {
          return "LightweightCheckboxValueOptimizationGoal";
        },
        hasOptInUXSupportForAdObjectTestRecovery: !0,
        shouldShowAutoAdoptWinner: !1,
        isVisibleForAdvertiser: function (t, n) {
          return r("gkx")("16890");
        },
        key: "VALUE_OPTIMIZATION_GOAL",
        mutationConfig: {
          getDuplicateCopyMutationOptions: function (t) {
            return o(
              "AdsExperimentsLightweightTestMutationUtils",
            ).getLightweightCampaignMutationOptions(
              t,
              "CONVERT_TO_VALUE_OPTIMIZATION_GOAL",
            );
          },
          hasClientSideMutation: function () {
            return !1;
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "Maximize value of conversions");
        },
        type: "lightweightABTest",
      },
      u = e;
    l.default = u;
  },
  226,
);
