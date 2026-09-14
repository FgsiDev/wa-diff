__d(
  "formatPageID",
  ["AdsPagePostUtils", "adsAutoNamingStringify", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("adsAutoNamingStringify")(
          (t = e.creative) == null || (t = t.object_story_spec) == null
            ? void 0
            : t.page_id,
        );
      if (r("isFalsey")(n)) {
        var a,
          i = r("adsAutoNamingStringify")(
            (a = e.creative) == null ? void 0 : a.object_story_id,
          );
        i &&
          o("AdsPagePostUtils").isPagePostId_BROKEN(i) &&
          (n = o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(i));
      }
      if (r("isFalsey")(n)) {
        var l;
        n = r("adsAutoNamingStringify")(
          (l = e.creative) == null ? void 0 : l.object_id,
        );
      }
      return n || "";
    }
    l.default = e;
  },
  98,
);
