__d(
  "AdsCrepeNAACSalesPackageConfigPlugin",
  ["AdsPECrepePackages", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "naacSalesPackageConfig",
        package_id: o("AdsPECrepePackages").NAAC_SALES_PACKAGE_ID,
        config: { editorModifications: { useDeprecatedStyles: !0 } },
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function () {
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
