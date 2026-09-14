__d(
  "AdsMediaAspectRatioUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "SQUARE",
      "FULLSCREEN_VERTICAL",
      "VERTICAL",
      "HORIZONTAL",
      "FULLSCREEN_LANDSCAPE",
    ];
    function s(t) {
      var n = e.indexOf(t);
      return n >= 0 ? n : 1 / 0;
    }
    function u(e) {
      return e.reduce(function (e, t) {
        return e != null && s(e) <= s(t) ? e : t;
      }, null);
    }
    function c(e) {
      return e.sort(function (e, t) {
        return s(e) - s(t);
      });
    }
    function d(e) {
      var t = c(e.keySeq().toSet());
      return r("immutable").OrderedMap(
        t.map(function (t) {
          return [t, e.get(t)];
        }),
      );
    }
    ((l.getDefaultAspectRatioPriority = s),
      (l.getDefaultAspectRatio = u),
      (l.sortAspectRatios = c),
      (l.getPlacementsOrderedMapByAspectRatios = d));
  },
  98,
);
