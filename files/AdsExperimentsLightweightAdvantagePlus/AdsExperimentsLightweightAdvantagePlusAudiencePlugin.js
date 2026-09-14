__d(
  "AdsExperimentsLightweightAdvantagePlusAudiencePlugin",
  [
    "fbt",
    "AdsDuplicationUpgradeConstants",
    "AdsExperiments2025H1GKUtils",
    "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
    "AdsExperimentsLightweightTestEligibilityIsEligibleUtils",
    "AdsExperimentsLightweightTestMutationUtils",
    "adsExperimentsIsFunnelEntranceActionForABTModal",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        getAdObjectLevel: function () {
          return "ad_set";
        },
        eligibilityConfig: r("immutable").Map({
          opt_in_l2_recommendation: {
            errorMessage: o(
              "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
            ).getOptInL2TestErrorMessage,
            getIneligibleData: o(
              "AdsExperimentsLightweightTestEligibilityIsEligibleUtils",
            ).isAdvantagePlusAudienceAlreadyEnabled,
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
        }),
        getLoggingEntryPoint: function (t) {
          return r("adsExperimentsIsFunnelEntranceActionForABTModal")(t)
            ? "LightweightRecommendedTestsABTModal"
            : "LightweightCheckboxAdvantageAudience";
        },
        getUnificationName: function () {
          return s._(/*BTDS*/ "audience");
        },
        hasOptInUXSupportForAdObjectTestRecovery: !0,
        isVisibleForAdvertiser: function (t, n) {
          return n === "LightweightCTAEntrypointButton"
            ? o(
                "AdsExperiments2025H1GKUtils",
              ).getDoesPassEntrypointForAdvantageAudienceFrictionModalGK(t)
            : !0;
        },
        getName: function () {
          return s._(/*BTDS*/ "Advantage+ audience");
        },
        key: "ADVANTAGE_PLUS_AUDIENCE",
        duplicationUpgradeSolutionID: o("AdsDuplicationUpgradeConstants")
          .ADVANTAGE_AUDIENCE_SOLUTION_ID,
        mutationConfig: {
          getDuplicateCopyMutationOptions: function (t) {
            return o(
              "AdsExperimentsLightweightTestMutationUtils",
            ).getLightweightCampaignMutationOptions(
              t,
              "TURN_ON_ADVANTAGE_AUDIENCE_TARGETING_AUTOMATION",
            );
          },
          hasClientSideMutation: function () {
            return !1;
          },
        },
        type: "lightweightABTest",
      },
      u = e;
    l.default = u;
  },
  226,
);
