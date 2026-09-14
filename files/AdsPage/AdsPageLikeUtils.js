__d(
  "AdsPageLikeUtils",
  ["AdsAPIObjectives", "AdsAdgroupUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t === r("AdsAPIObjectives").PAGE_LIKES) {
        var n,
          a = e == null || (n = e.creative) == null ? void 0 : n.object_type,
          i = o("AdsAdgroupUtils").getMediaFormatForObjectType(a);
        if (i === "VIDEO") return !0;
      }
      return !1;
    }
    l.isPageLikeVideo = e;
  },
  98,
);
