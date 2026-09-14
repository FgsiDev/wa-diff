__d(
  "adsUEditorAdgroupCreativePluginSelector",
  [
    "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorProductCatalogVerticalSelector",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return r("firstx")(t);
        },
        { name: i.id + ".firstAdObjectsSelector" },
      ),
      s = r("adsCreateSelector")(
        [e, r("adsUEditorProductCatalogVerticalSelector")],
        function (t, n) {
          return o(
            "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
          ).getAdgroupCreativePlugin(t, n);
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
