__d(
  "AdsCrepeWebTrafficPackageConfigPlugin",
  [
    "AdsCrepeSBSWebTrafficAllSettingsConstants",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "gkx",
    "isTrafficCreationPackageDeprecatedUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "webTrafficPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          visibility: {
            adgroupVisibility: {
              keysToAdd: ["adgroupWebTrafficAcqCreationPackageAdDestination"],
            },
          },
          content: {
            presetSettings: o("AdsCrepeSBSWebTrafficAllSettingsConstants")
              .SBS_WEB_TRAFFIC_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id: o("AdsPECrepePackages").WEB_TRAFFIC_ACQUISITION_PACKAGE_ID,
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
                [],
                function () {
                  return !r("gkx")("1502") && r("gkx")("21778");
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
