__d(
  "AdsCrepeASAPGDPackageConfigPlugin",
  [
    "AdsAccountStore",
    "AdsCrepeASAAllSettingsConstants",
    "AdsCrepeASAPGDEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "AdsProgressiveDisclosureUtils",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        campaignGroupVisibility: {
          keysToRemove: [
            "campaignGroupDetailsSection",
            "campaignGroupAllLevelsNameSection",
            "campaignGroupSplitTestConvergenceMessageSection",
          ],
        },
        campaignVisibility: {
          keysToRemove: [
            "campaignFreeformABTestSection",
            "campaignDynamicCreativeOptimizationSection",
            "campaignOptimizationSection",
            "campaignAsaReportingSection",
            "campaignAudienceBudgetSection",
          ],
        },
        adgroupVisibility: {
          keysToRemove: [
            "adsAutomaticFlowToggleEditorComponent",
            "acoToggleEditorComponent",
          ],
        },
      };
    }
    var s = {
        type: "crepePackageConfig",
        key: "asaPGDPackageConfig",
        package_id: o("AdsPECrepePackages").ASA_PGD_PACKAGE_ID,
        config: {
          editorStructure: r("AdsCrepeASAPGDEditorStructurePackageConfig"),
          editorModifications: {
            isCampaignManuallyEditable: !1,
            useDeprecatedStyles: !0,
          },
          content: {
            isAdvantageIconEnabled: !0,
            presetSettings: o("AdsCrepeASAAllSettingsConstants")
              .ASA_PACKAGE_CAMPAIGN_SETTINGS,
          },
          lightweightABTestType: "ADVANTAGE_SHOPPING_CAMPAIGN",
          visibility: e(),
        },
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [r("AdsAccountStore").getSelectedAccount],
            function (t) {
              return r("gkx")("1502")
                ? o(
                    "AdsProgressiveDisclosureUtils",
                  ).getIsPGDVariationEligibleForUnificationPackage(
                    o(
                      "AdsProgressiveDisclosureUtils",
                    ).getProgressiveDisclosureUnifiedAppSalesVariation(
                      t.getValueEnforcing(),
                      !1,
                    ),
                  )
                : !1;
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
