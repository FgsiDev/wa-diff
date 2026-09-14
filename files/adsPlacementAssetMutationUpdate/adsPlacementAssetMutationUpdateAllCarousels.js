__d(
  "adsPlacementAssetMutationUpdateAllCarousels",
  ["AdsAdgroupRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.carousels;
      return o != null
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.carousels.set(
            o.map(t),
            e,
          )
        : e;
    }
    l.default = e;
  },
  98,
);
