__d(
  "AdsCrepeCallAdsODAXSalesConfigPlugin",
  [
    "AdsCrepeCallAdsAllSettingsConstants",
    "AdsPECrepePackages",
    "adsCreateSelectorWithValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "callAdsOdaxSalesPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          content: {
            presetSettings: o("AdsCrepeCallAdsAllSettingsConstants")
              .CALL_ADS_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages").CALL_ADS_ODAX_SALES_CREATION_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelectorWithValue")(!1);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
