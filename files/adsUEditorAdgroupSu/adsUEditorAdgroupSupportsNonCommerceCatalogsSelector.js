__d(
  "adsUEditorAdgroupSupportsNonCommerceCatalogsSelector",
  [
    "AdsUEditorAdgroupAdObjectsUtils",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupCreativePluginSelector",
    "adsUEditorAdgroupIsSlideshowSelectedSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          r("adsUEditorAdgroupCreativePluginSelector"),
          r("adsUEditorAdgroupIsSlideshowSelectedSelector"),
        ],
        function (t, n, r) {
          return t.every(function (e) {
            var t = o("AdsUEditorAdgroupAdObjectsUtils").getCreativeFormat(
              e,
              r,
            );
            return n.supportsNonCommerceCatalogs(t);
          });
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
