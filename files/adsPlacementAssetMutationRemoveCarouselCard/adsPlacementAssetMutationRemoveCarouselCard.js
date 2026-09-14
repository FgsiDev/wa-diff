__d(
  "adsPlacementAssetMutationRemoveCarouselCard",
  [
    "AdsAPIAdgroupPaths",
    "AdsPlacementAssetUtils",
    "adsPlacementAssetMutationRemoveCarouselCardDetail",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = ["images", "videos", "titles", "descriptions", "link_urls"];
    function u(t, n, a, i) {
      var l, u;
      i === void 0 && (i = !1);
      var c =
        (l = t.creative) == null || (l = l.asset_feed_spec) == null
          ? void 0
          : l.carousels;
      if (c == null) return t;
      var d = c.findIndex(function (e) {
        return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === n;
      });
      if (d === -1) return t;
      var m = (u = c.get(d)) == null ? void 0 : u.get("child_attachments");
      if (!(m instanceof r("immutable").List) || (!i && m.size <= e)) return t;
      var p = s.reduce(function (e, t) {
          return r("adsPlacementAssetMutationRemoveCarouselCardDetail")(
            e,
            n,
            a,
            t,
          );
        }, t),
        _ = m.delete(a);
      return p.updateIn(
        [].concat(r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CAROUSELS, [
          d.toString(),
          "child_attachments",
        ]),
        function () {
          return _;
        },
      );
    }
    l.default = u;
  },
  98,
);
