__d(
  "adsPageIDSelector",
  ["AdsAdgroupEditorStore", "AdsPageUtils", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsAdgroupEditorStore")],
        function (t) {
          var e = t.adgroup;
          return (
            o("AdsPageUtils").getPageID(e) ||
            r("AdsAdgroupEditorStore").getCachedPageID(e.id)
          );
        },
        { name: i.id + ".adsPageIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
