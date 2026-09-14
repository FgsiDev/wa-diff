__d(
  "adsProductAudienceSpecsGetNewTargetingProductSetID",
  ["AdsDynamicTargetingPackagePlugins", "concatArrays"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = r("AdsDynamicTargetingPackagePlugins").get(e),
        i = r("concatArrays")(
          [n, o].filter(Boolean).map(function (e) {
            return e.toJS();
          }),
        )
          .map(function (e) {
            return e.product_set_id;
          })
          .find(Boolean);
      return a.shouldMatchPromotedProductSet
        ? t
        : a.allowEmptyDefaultTargetProductSetID === !0
          ? void 0
          : i != null
            ? i
            : t;
    }
    l.default = e;
  },
  98,
);
