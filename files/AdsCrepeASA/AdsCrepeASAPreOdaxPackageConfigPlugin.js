__d(
  "AdsCrepeASAPreOdaxPackageConfigPlugin",
  [
    "AdsCrepeASAAllSettingsConstants",
    "AdsCrepeASAEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "ASAPreOdaxPackageConfig",
        package_id: o("AdsPECrepePackages").ASA_PRE_ODAX_PACKAGE_ID,
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
        },
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function () {
              return !r("gkx")("1502");
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
