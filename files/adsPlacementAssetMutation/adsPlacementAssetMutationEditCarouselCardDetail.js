__d(
  "adsPlacementAssetMutationEditCarouselCardDetail",
  [
    "AdsAPIAdgroupPaths",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsPlacementAssetUtils",
    "adsPACgetAdLabelCount",
    "adsPACgetExistingLabelForValue",
    "adsPlacementAssetMutationAddCarouselCardDetail",
    "adsPlacementAssetMutationRemoveCarouselCardDetail",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        s = e,
        u = r("AdsAssetFeedFieldToRuleLabelMapping").get(a),
        c =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.carousels,
        d =
          c == null
            ? void 0
            : c.findIndex(function (e) {
                return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === t;
              });
      if (d == null || d == -1 || u == null) return s;
      (a === "images" &&
        (s = r("adsPlacementAssetMutationRemoveCarouselCardDetail")(
          s,
          t,
          n,
          "videos",
        )),
        a === "videos" &&
          (s = r("adsPlacementAssetMutationRemoveCarouselCardDetail")(
            s,
            t,
            n,
            "images",
          )));
      var m = [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CAROUSELS,
          [d.toString(), "child_attachments", n.toString(), u, "name"],
        ),
        p = e.getIn(m),
        _ = r("adsPACgetAdLabelCount")(e, u, p);
      if (_ === 0 || _ > 1)
        return r("adsPlacementAssetMutationAddCarouselCardDetail")(
          s,
          t,
          n,
          a,
          i,
        );
      var f = [].concat(r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path, [
          a,
        ]),
        g = r("adsPACgetExistingLabelForValue")(e, a, i);
      if (g === p) return e;
      if (g == null) {
        var h = r("immutable").fromJS(
          babelHelpers.extends({}, i, { adlabels: [{ name: p }] }),
        );
        return s.updateIn(f, function (e) {
          return e.map(function (e) {
            return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === p ? h : e;
          });
        });
      }
      return s.setIn(m, g).updateIn(f, function (e) {
        return e.filter(function (e) {
          return o("AdsPlacementAssetUtils").getFirstAdLabel(e) !== p;
        });
      });
    }
    l.default = e;
  },
  98,
);
