__d(
  "adsPlacementAssetMutationRemoveCarouselCardDetail",
  [
    "AdsAPIAdgroupPaths",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsPlacementAssetUtils",
    "adsPACgetAdLabelCount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l = e,
        s = r("AdsAssetFeedFieldToRuleLabelMapping").get(a),
        u =
          (i = e.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.carousels,
        c =
          u == null
            ? void 0
            : u.findIndex(function (e) {
                return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === t;
              });
      if (c == null || c == -1 || s == null) return l;
      var d = [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CAROUSELS,
          [c.toString(), "child_attachments", n.toString(), s],
        ),
        m = e.getIn([].concat(d, ["name"]));
      if (m == null) return l;
      var p = r("adsPACgetAdLabelCount")(e, s, m);
      if (p === 1) {
        var _ = [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path,
          [a],
        );
        l = l.updateIn(_, function (e) {
          return e.filter(function (e) {
            return o("AdsPlacementAssetUtils").getFirstAdLabel(e) !== m;
          });
        });
      }
      return l.deleteIn(d);
    }
    l.default = e;
  },
  98,
);
