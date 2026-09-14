__d(
  "adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector",
  ["AdsBulkValueUtils", "AdsUEditorSelectors", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
          var t;
          return (t = e.creative) == null ||
            (t = t.marketing_message_structured_spec) == null
            ? void 0
            : t.is_optimized_text;
        }),
      ],
      function (t) {
        return s(t);
      },
      {
        name:
          i.id + ".adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector",
      },
    );
    function s(e) {
      var t = o("AdsBulkValueUtils").getUniformValue(e, null);
      return t === !0;
    }
    ((l.adsUEditorAdgroupMessageMarketingIsTextOptimizedSelector = e),
      (l.adsUEditorAdgroupMessageMarketingIsTextOptimized = s));
  },
  98,
);
