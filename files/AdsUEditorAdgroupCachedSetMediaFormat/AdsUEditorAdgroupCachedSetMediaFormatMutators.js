__d(
  "AdsUEditorAdgroupCachedSetMediaFormatMutators",
  ["AdsUEditorAdgroupCachedRecord"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r) {
        var e;
        if (t == null) return r;
        var o = (e = t.creative) == null ? void 0 : e.asset_feed_spec;
        return n === "VIDEO"
          ? r.set("imageAssetFeedSpec", o)
          : n === "IMAGE"
            ? r.set("videoAssetFeedSpec", o)
            : r;
      },
      s = function (n, o, a, i) {
        var t = i;
        return (
          o.forEach(function (o) {
            var i = e(
              n.get(o),
              a,
              t.get(o) || new (r("AdsUEditorAdgroupCachedRecord"))(),
            );
            t = t.set(o, i);
          }),
          t
        );
      };
    ((l.getUpdatedCache = e), (l.updateCacheForAdgroupIDs = s));
  },
  98,
);
