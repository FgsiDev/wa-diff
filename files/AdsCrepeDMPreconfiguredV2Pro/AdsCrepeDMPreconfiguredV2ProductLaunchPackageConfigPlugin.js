__d(
  "AdsCrepeDMPreconfiguredV2ProductLaunchPackageConfigPlugin",
  [
    "AdsCrepeDMBroadcastCampaignPreconfiguredCampaignEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "DMPreconfiguredV2ProductLaunchPackageConfig",
        config: {
          editorStructure: r(
            "AdsCrepeDMBroadcastCampaignPreconfiguredCampaignEditorStructurePackageConfig",
          ),
          editorModifications: {
            isPackageInfoSectionHidden: !0,
            isTopHeaderHidden: !1,
          },
        },
        package_id:
          o("AdsPECrepePackages").DM_PRECONFIGURED_V2_PRODUCT_LAUNCH_PACKAGE_ID,
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
