__d(
  "AdsCrepeASAOdaxPackageConfigPlugin",
  [
    "AdsAccountStore",
    "AdsCrepeASAAllSettingsConstants",
    "AdsCrepeASAEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "AdsProgressiveDisclosureUtils",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "ASAOdaxPackageConfig",
        package_id: o("AdsPECrepePackages").ASA_ODAX_PACKAGE_ID,
        config: {
          editorStructure: r("AdsCrepeASAEditorStructurePackageConfig"),
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
        },
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [r("AdsAccountStore").getSelectedAccount],
            function (t) {
              if (!r("gkx")("1502")) return !1;
              var e = o(
                "AdsProgressiveDisclosureUtils",
              ).getIsPGDVariationEligibleForUnificationPackage(
                o(
                  "AdsProgressiveDisclosureUtils",
                ).getProgressiveDisclosureUnifiedAppSalesVariation(
                  t.getValueEnforcing(),
                  !1,
                ),
              );
              return !e;
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
