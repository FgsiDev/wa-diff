__d(
  "AdsCrepeCtmLiveBoostingPackageConfigPlugin",
  ["AdsPECrepePackages", "adsCreateSelector", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "ctmLiveBoostingPackageConfig",
        package_id: o("AdsPECrepePackages").CTM_LIVE_BOOSTING_PACKAGE_ID,
        config: {
          editorModifications: { disableCampaignBudgetSelectorMode: !0 },
        },
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function (t) {
              return !r("gkx")("21771");
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
