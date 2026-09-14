__d(
  "AdsCrepeAACPGDPackageConfigPlugin",
  [
    "AdsAccountStore",
    "AdsCrepeAACAllSettingsConstants",
    "AdsCrepeAACPGDEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "AdsProgressiveDisclosureUtils",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "aacPGDPackageConfig",
        package_id:
          o("AdsPECrepePackages").ADVANTAGE_PLUS_APP_CAMPAIGN_PGD_PACKAGE_ID,
        config: {
          editorStructure: r("AdsCrepeAACPGDEditorStructurePackageConfig"),
          editorModifications: {
            isCampaignManuallyEditable: !1,
            useDeprecatedStyles: !0,
          },
          content: {
            presetSettings: o("AdsCrepeAACAllSettingsConstants")
              .AAC_UNIFICATION_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [r("AdsAccountStore").getSelectedAccount],
            function (t) {
              return [
                o("AdsProgressiveDisclosureUtils")
                  .getProgressiveDisclosureUnifiedAppSalesVariation,
              ].some(function (e) {
                return o(
                  "AdsProgressiveDisclosureUtils",
                ).getIsPGDVariationEligibleForUnificationPackage(
                  e(t.getValueEnforcing(), !1),
                );
              });
            },
            { name: i.id },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
