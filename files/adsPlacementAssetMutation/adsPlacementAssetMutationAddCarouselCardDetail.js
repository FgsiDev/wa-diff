__d(
  "adsPlacementAssetMutationAddCarouselCardDetail",
  [
    "AdsAPIAdgroupPaths",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsPlacementAssetUtils",
    "adsPACgetExistingLabelForValue",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List();
    function s(t, n, a, i, l) {
      var s = r("AdsAssetFeedFieldToRuleLabelMapping").get(i);
      if (s == null) return t;
      var u = [].concat(r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path, [
          i,
        ]),
        c = [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CAROUSELS,
          [n.toString(), "child_attachments", a.toString(), s, "name"],
        ),
        d = r("adsPACgetExistingLabelForValue")(t, i, l);
      if (d != null) return t.setIn(c, d);
      var m = o(
          "AdsPlacementAssetUtils",
        ).makeUniqueLabelNameForPlacementAsset(),
        p = r("immutable").fromJS(
          babelHelpers.extends({}, l, { adlabels: [{ name: m }] }),
        );
      return t.setIn(c, m).updateIn(u, function (t) {
        return (t != null ? t : e).push(p);
      });
    }
    function u(e, t, n, r, a) {
      var i,
        l = e,
        u = (i = e.creative) == null ? void 0 : i.asset_feed_spec,
        c = u == null ? void 0 : u.carousels;
      if (u == null || c == null) return l;
      var d = c.findIndex(function (e) {
        return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === t;
      });
      return (d == -1 || (l = s(l, d, n, r, a)), l);
    }
    l.default = u;
  },
  98,
);
