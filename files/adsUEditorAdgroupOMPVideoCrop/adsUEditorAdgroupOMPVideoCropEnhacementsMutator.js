__d(
  "adsUEditorAdgroupOMPVideoCropEnhacementsMutator",
  ["AdsAdgroupUtils", "AdsUEditorAdgroupVideoVariationMutators", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("immutable").Set(
          [].concat(t ? ["CROPPING_ACF"] : []).filter(Boolean),
        ),
        a = o("AdsAdgroupUtils").isPoliticalAd(e)
          ? r("immutable").Set()
          : r("immutable").Set(["CROPPING_ACF"]);
      n = n.intersect(a);
      var i = r("immutable").Set(["CROPPING_ACF"]).subtract(n),
        l = o(
          "AdsUEditorAdgroupVideoVariationMutators",
        ).addVideoOptimizationFileds(e, r("immutable").List(n));
      return (
        (l = o(
          "AdsUEditorAdgroupVideoVariationMutators",
        ).removeVideoOptimizationFileds(l, r("immutable").List(i))),
        l
      );
    }
    l.default = e;
  },
  98,
);
