__d(
  "AdsCrepeALAOdaxPackageConfigPlugin",
  ["AdsPECrepePackages", "adsCreateSelectorWithValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "ALAODAXPackageConfig",
        package_id: o("AdsPECrepePackages").ALA_POST_ODAX_PACKAGE_ID,
        config: { visibility: { campaignVisibility: { keysToAdd: [] } } },
        visibilitySelector: function () {
          return r("adsCreateSelectorWithValue")(!1);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
