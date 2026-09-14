__d(
  "adsUEditorAdgroupIsPCAUnifiedFormatSelector",
  [
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdgroupIsPCAUnifiedFormatSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.metadata) == null ? void 0 : t.adgroup_media_source;
            }),
          ),
        ],
        function (t) {
          return o(
            "adsUEditorAdgroupIsPCAUnifiedFormatSelectorUtils",
          ).adsUEditorAdgroupIsPCAUnifiedFormat(t);
        },
        { name: i.id + ".adsUEditorAdgroupIsPCAUnifiedFormatSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
