__d(
  "AdsExperimentsLightweightAutomaticPlacementPlugin",
  [
    "fbt",
    "AdsDuplicationUpgradeConstants",
    "AdsEditingCampaignContext",
    "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
    "AdsExperimentsLightweightTestMutationUtils",
    "AdsPlacementRawSpecUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorContextFactory",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        var e = t.campaign;
        if ((e == null ? void 0 : e.id) != null) {
          var n = o("AdsUEditorContextFactory").getForIDs(
              r("AdsEditingCampaignContext"),
              [e.id],
              i.id,
            ),
            a =
              o("AdsPlacementRawSpecUtils").getPlacementValue(
                o("AdsUEditorCampaignSelectors").rawEligibilityInformationMap(
                  n,
                ),
              ) === "automatic";
          if (a) return { campaignIDs: new Set([e.id]) };
        }
      },
      u = {
        getAdObjectLevel: function () {
          return "ad_set";
        },
        eligibilityConfig: r("immutable").Map({
          opt_in_l2_recommendation: {
            errorMessage: o(
              "AdsExperimentsLightweightTestEligibilityErrorMessagesUtils",
            ).getOptInL2TestErrorMessage,
            getIneligibleData: e,
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
        }),
        duplicationUpgradeSolutionID: o("AdsDuplicationUpgradeConstants")
          .ADVANTAGE_PLUS_PLACEMENTS_SOLUTION_ID,
        getUnificationName: function () {
          return s._(/*BTDS*/ "placements");
        },
        getLoggingEntryPoint: function () {
          return "LightweightCheckboxAdvantagePlacements";
        },
        hasOptInUXSupportForAdObjectTestRecovery: !0,
        isVisibleForAdvertiser: function () {
          return !0;
        },
        key: "AUTOMATIC_PLACEMENT",
        mutationConfig: {
          getDuplicateCopyMutationOptions: function (t) {
            return o(
              "AdsExperimentsLightweightTestMutationUtils",
            ).getLightweightCampaignMutationOptions(
              t,
              "TURN_ON_ADVANTAGE_PLACEMENTS",
            );
          },
          hasClientSideMutation: function () {
            return !1;
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "Advantage+ placements");
        },
        type: "lightweightABTest",
      },
      c = u;
    l.default = c;
  },
  226,
);
