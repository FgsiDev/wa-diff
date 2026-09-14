__d(
  "AdsCrepeMessageAcqOdaxAudienceExpansionPackageConfigPlugin",
  [
    "AdsCrepeSBSMessageAcqAllSettingsConstants",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = {
        campaignGroupVisibility: {
          keysToAdd: ["campaignGroupSplitTestConvergenceMessageSection"],
          keysToRemove: [
            "campaignGroupDetailsSection",
            "campaignGroupBudgetSection",
            "campaignGroupNameSection",
          ],
        },
        campaignVisibility: {
          keysToRemove: [
            "campaignFreeformABTestSection",
            "campaignABTestSummarySection",
            "campaignABTestSummarySection",
            "campaignOptimizationSection",
            "campaignPlacementSection",
            "campaignNameSection",
          ],
        },
        adgroupVisibility: {
          keysToAdd: ["sbsMessageTemplateComponent"],
          keysToRemove: [
            "draftABTestSummarySection",
            "adgroupMessageTemplateEditorComponent",
          ],
        },
        creativeVisibility: {
          keysToRemove: [
            "callToActionField",
            "destinationPageField",
            "textLiquidityToggleField",
          ],
        },
      };
      return e;
    }
    var s = {
        type: "crepePackageConfig",
        key: "messageAcqOdaxAudienceExpansionPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          visibility: e(),
          content: {
            presetSettings: o("AdsCrepeSBSMessageAcqAllSettingsConstants")
              .SBS_MESSAGE_ACQ_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages")
            .MESSAGE_ACQUISITION_POST_ODAX_CTWA_AUDIENCE_EXPANSION_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function () {
              return r("gkx")("1502") && r("gkx")("21772");
            },
            { name: i.id },
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
