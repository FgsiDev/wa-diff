__d(
  "adsPlacementAssetMutationSetInitialTargetingRule",
  ["AdsAdgroupRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a,
        i = r("immutable").Map(),
        l = o != null ? o : r("immutable").Map();
      return (
        (l = l.set(t, r("immutable").Map(((a = {}), (a.name = n), a)))),
        (l = l.set("customization_spec", i)),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(
          r("immutable").List([l]),
          e,
        )
      );
    }
    l.default = e;
  },
  98,
);
