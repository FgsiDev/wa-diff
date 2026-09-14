__d(
  "VideoPlayerQualitiesArray",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 720,
      l = 2160;
    function s(e) {
      return e;
    }
    function u(e) {
      return e.length > 0 ? e[e.length - 1] : void 0;
    }
    function c(e) {
      return e.length > 0 ? e[0] : void 0;
    }
    function d(e) {
      return e.length > 1;
    }
    function m(e, t) {
      var n = u(e);
      return n != null && t != null && t === n;
    }
    function p(t) {
      return t != null && (t === "HD" || parseInt(t, 10) >= e);
    }
    function _(e) {
      return e != null && parseInt(e, 10) >= l;
    }
    function f(e, t) {
      var n = c(e),
        r = u(e);
      if (m(e, t)) {
        if (n != null) return n;
      } else if (r != null) return r;
    }
    ((i.ensureVideoPlayerQualitiesArray = s),
      (i.getHighestVideoQuality = u),
      (i.getLowestVideoQuality = c),
      (i.hasHDVideoQuality = d),
      (i.isHDSelectedVideoQuality = m),
      (i.isVideoQualityTypicallyConsideredHD = p),
      (i.isVideoQualityTypicallyConsideredHD4K = _),
      (i.getPreferredVideoQualityForToggleHD = f));
  },
  66,
);
