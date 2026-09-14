__d(
  "adsConvergenceDefaultAdgroupImage",
  ["AdsAdgroupMediaMutators", "getDefaultImageURL", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (n == null) return e;
      var a = r("getDefaultImageURL")(n);
      return r("isFalsey")(a)
        ? e
        : o("AdsAdgroupMediaMutators").setImage(e, t, { imageURL: a });
    }
    l.default = e;
  },
  98,
);
