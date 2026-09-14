__d(
  "PECatalogStickyOptOutInputs",
  ["AdsAPIAdgroupRecordUtils", "PECatalogStickyOptOutUrlType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r;
      return (n = o("AdsAPIAdgroupRecordUtils").getPageID(e, t)) != null
        ? n
        : (r = e.creative) == null || (r = r.object_story_spec) == null
          ? void 0
          : r.page_id;
    }
    function s(e, t, n) {
      var r = t != null ? String(t) : null;
      return {
        objective: e != null && e !== "" ? String(e) : null,
        pageId: r != null && r !== "" ? r : null,
        urlType: o("PECatalogStickyOptOutUrlType").getStickyOptOutUrlType(n),
      };
    }
    ((l.resolveStickyOptOutPageID = e),
      (l.resolveGranularStickyOptOutInputs = s));
  },
  98,
);
