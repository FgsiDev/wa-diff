__d(
  "AdsMetadataBrandKitGetColorCacheKey",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e != null) {
        var t = [e.primaryColors[0], e.bannerColors[0], e.secondaryColors[0]],
          n = t[0],
          r = t[1],
          o = t[2];
        return [n, r, o];
      }
    }
    function l(t) {
      var n, r;
      return (n = (r = e(t)) == null ? void 0 : r.filter(Boolean).join(",")) !=
        null
        ? n
        : "";
    }
    i.default = l;
  },
  66,
);
