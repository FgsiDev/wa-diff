__d(
  "adsProductAudienceSpecsGetAllMatchingTargetingTypes",
  [
    "AdsDynamicTargetingCategories",
    "AdsDynamicTargetingPackageOrderedPluginList",
    "FBLogger",
    "adsProductAudienceSpecsTargetingTypeMatchesSpecs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a, i;
      if (e != null && e.length > 0) {
        if (t != null && t.length !== 0)
          return (
            r("FBLogger")("dpa").warn(
              "Encountered invalid audience setup, cant have both productAudienceSpecs and excludedProductAudienceSpecs",
            ),
            []
          );
        ((a = r("AdsDynamicTargetingCategories").RETARGETING),
          (i = e != null ? e : []));
      } else
        ((a = r("AdsDynamicTargetingCategories").PROSPECTING),
          (i = t != null ? t : []));
      return r("AdsDynamicTargetingPackageOrderedPluginList")
        .withShape({ targetingCategory: a })
        .getArray()
        .map(function (e) {
          return e.key;
        })
        .filter(function (e) {
          return r("adsProductAudienceSpecsTargetingTypeMatchesSpecs")(
            e,
            i,
            n,
            o,
          );
        });
    }
    l.default = e;
  },
  98,
);
