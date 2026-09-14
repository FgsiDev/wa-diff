__d(
  "AdsCrepeConvAcqOdaxPackageConfigPlugin",
  [
    "AdsCrepeConvAcqPackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "convAcqODAXPackageConfig",
        package_id:
          o("AdsPECrepePackages").CONV_ACQUISITION_POST_ODAX_PACKAGE_ID,
        config: r("AdsCrepeConvAcqPackageConfig"),
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function () {
              return r("gkx")("1502");
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
