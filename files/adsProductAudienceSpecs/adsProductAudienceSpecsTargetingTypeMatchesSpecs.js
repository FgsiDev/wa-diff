__d(
  "adsProductAudienceSpecsTargetingTypeMatchesSpecs",
  [
    "AdsDynamicTargetingPackagePlugins",
    "AdsDynamicTargetingTypes",
    "adsProductAudienceSpecsHasSameProductAudience",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      return r("AdsDynamicTargetingPackagePlugins").get(o)
        .shouldMatchPromotedProductSet
        ? e.every(function (e) {
            return e.product_set_id === t;
          })
        : r("AdsDynamicTargetingPackagePlugins").get(o)
              .shouldMatchCpasCategoryProductSet === !0
          ? e.every(function (e) {
              return e.product_set_id === n;
            })
          : !0;
    }
    function s(t, n, o, a) {
      return t === r("AdsDynamicTargetingTypes").CUSTOM_COMBINATION ||
        t === r("AdsDynamicTargetingTypes").EXCLUDE_CUSTOM
        ? !0
        : e(n, o, a, t) &&
            u(n) &&
            r("adsProductAudienceSpecsHasSameProductAudience")(n, t);
    }
    function u(e) {
      var t;
      for (var n of e)
        for (var r of ["inclusions", "exclusions"]) {
          var o = n[r] || [];
          for (var a of o) {
            var i = a.retention_seconds;
            if (t === void 0) t = i;
            else if (t != i) return !1;
          }
        }
      return !0;
    }
    l.default = s;
  },
  98,
);
