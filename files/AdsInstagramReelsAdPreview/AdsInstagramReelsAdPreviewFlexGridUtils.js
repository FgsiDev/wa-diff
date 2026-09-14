__d(
  "AdsInstagramReelsAdPreviewFlexGridUtils",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.8,
      s = 5,
      u = 6;
    function c(e) {
      var t,
        n =
          (t =
            e == null
              ? void 0
              : e.mediaDataCells.filter(function (e) {
                  var t;
                  return (
                    ((t = e.imageMediaData) == null ? void 0 : t.imageURL) !=
                    null
                  );
                })) != null
            ? t
            : [],
        o = n.filter(function (e) {
          var t;
          return ((t = e.videoMediaData) == null ? void 0 : t.videoURL) != null;
        }).length;
      o > 1 &&
        r("FBLogger")("ads_previews").debug(
          "Reels flex grid preview received %s video cells, expected at most 1. Rendering the first as the hero video and the rest as image tiles.",
          o,
        );
      var a = n.findIndex(function (e) {
        var t;
        return ((t = e.videoMediaData) == null ? void 0 : t.videoURL) != null;
      });
      if (a < 0) return n;
      var i = n[a],
        l = [].concat(n.slice(0, a), n.slice(a + 1)).map(function (e) {
          var t;
          return ((t = e.videoMediaData) == null ? void 0 : t.videoURL) != null
            ? babelHelpers.extends({}, e, { videoMediaData: null })
            : e;
        });
      return [i].concat(l);
    }
    function d(t) {
      var n,
        r = (n = c(t)[0]) == null ? void 0 : n.videoMediaData;
      if ((r == null ? void 0 : r.videoURL) == null) return !1;
      var o = r.height,
        a = r.width;
      return a == null || o == null || o === 0 ? !1 : a / o < e;
    }
    function m(e) {
      return d(e) ? c(e).length >= s : !1;
    }
    function p(e) {
      var t = c(e).length,
        n = t - s;
      return n <= 0 ? 1 : 1 + Math.ceil(n / u);
    }
    function _(e, t) {
      if (t <= 0) return e.slice(0, s);
      var n = s + (t - 1) * u;
      return e.slice(n, n + u);
    }
    ((l.REELS_FLEX_GRID_TALL_RATIO = e),
      (l.FLEX_GRID_TOTAL_CELLS = s),
      (l.FLEX_GRID_IMAGE_PAGE_CELLS = u),
      (l.getReelsGridRenderableCells = c),
      (l.isTallHeroVideo = d),
      (l.shouldRenderReelsFlexGrid = m),
      (l.getReelsFlexGridTotalCards = p),
      (l.getReelsFlexGridPageCells = _));
  },
  98,
);
