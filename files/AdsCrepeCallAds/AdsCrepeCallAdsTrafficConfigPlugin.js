__d(
  "AdsCrepeCallAdsTrafficConfigPlugin",
  [
    "AdsCrepeCallAdsAllSettingsConstants",
    "AdsPECrepePackages",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "callAdsTrafficPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          content: {
            presetSettings: o("AdsCrepeCallAdsAllSettingsConstants")
              .CALL_ADS_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages").CALL_ADS_TRAFFIC_CREATION_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function (t) {
              return !1;
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
