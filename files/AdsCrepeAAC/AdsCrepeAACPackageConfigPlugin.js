__d(
  "AdsCrepeAACPackageConfigPlugin",
  [
    "AdsAccountStore",
    "AdsCrepeAACAllSettingsConstants",
    "AdsCrepeAACEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "AdsProgressiveDisclosureUtils",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "aacPackageConfig",
        config: {
          editorStructure: r("AdsCrepeAACEditorStructurePackageConfig"),
          editorModifications: {
            isCampaignManuallyEditable: !1,
            useDeprecatedStyles: !0,
          },
          content: {
            presetSettings: o("AdsCrepeAACAllSettingsConstants")
              .AAC_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages").ADVANTAGE_PLUS_APP_CAMPAIGN_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [r("AdsAccountStore").getSelectedAccount],
            function (t) {
              return [
                o("AdsProgressiveDisclosureUtils")
                  .getProgressiveDisclosureUnifiedAppSalesVariation,
              ].every(function (e) {
                return !o(
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
