__d(
  "AdsCrepeAutomatedLeadsBundlePackageConfigPlugin",
  [
    "fbt",
    "AdsCrepeAutomatedBundleAllSettingsConstants",
    "AdsCrepeAutomatedBundleEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCrepeAutomatedBundleVisibilitySelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "AutomatedLeadsBundlePackageConfig",
        package_id: o("AdsPECrepePackages").AUTOMATED_LEADS_BUNDLE_PACKAGE_ID,
        config: {
          content: {
            packageInfoSectionDescription: s._(
              /*BTDS*/ "We're improving your campaign's potential with the best setup for your goal.",
            ),
            packageInfoSectionTitle: s._(/*BTDS*/ "Using recommended settings"),
            presetSettings: o("AdsCrepeAutomatedBundleAllSettingsConstants")
              .AUTOMATED_BUNDLE_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
          editorModifications: {
            isPlacementGroupsHidden: !0,
            useDeprecatedStyles: !0,
          },
          editorStructure: r(
            "AdsCrepeAutomatedBundleEditorStructurePackageConfig",
          ),
        },
        visibilitySelector: function () {
          return r("adsCrepeAutomatedBundleVisibilitySelector")();
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
