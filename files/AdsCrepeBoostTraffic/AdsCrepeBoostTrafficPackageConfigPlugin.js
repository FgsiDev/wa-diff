__d(
  "AdsCrepeBoostTrafficPackageConfigPlugin",
  [
    "AdsCrepeBoostTrafficAllSettingsConstants",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "adsIsIGLoginSelector",
    "gkx",
    "isTrafficCreationPackageDeprecatedUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "boostTrafficPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          visibility: {
            adgroupVisibility: {
              keysToAdd: ["adgroupWebTrafficAcqCreationPackageAdDestination"],
            },
          },
          content: {
            presetSettings: o("AdsCrepeBoostTrafficAllSettingsConstants")
              .BOOST_TRAFFIC_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages").BOOST_TRAFFIC_ACQUISITION_POST_PACKAGE_ID,
        visibilitySelector: function () {
          return o(
            "isTrafficCreationPackageDeprecatedUtil",
          ).isTrafficCreationPackageDeprecatedUtil()
            ? r("adsCreateSelector")(
                [],
                function () {
                  return !1;
                },
                { name: i.id },
              )
            : r("adsCreateSelector")(
                [r("adsIsIGLoginSelector")],
                function (t) {
                  return t || r("gkx")("8100");
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
