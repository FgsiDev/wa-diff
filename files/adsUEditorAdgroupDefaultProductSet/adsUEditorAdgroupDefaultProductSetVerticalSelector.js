__d(
  "adsUEditorAdgroupDefaultProductSetVerticalSelector",
  [
    "CatalogVertical",
    "ProductSetDataProvider",
    "adsCreateSelector",
    "adsUEditorAdgroupDefaultProductSetIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdgroupDefaultProductSetIDSelector"),
          r("ProductSetDataProvider").toFluxSelector(),
        ],
        function (t, n) {
          return t.mapValue(function (e) {
            return e != null
              ? n.get(e).mapValue(function (e) {
                  return e.vertical;
                })
              : r("CatalogVertical").NONE;
          });
        },
        { name: i.id + ".adsUEditorAdgroupDefaultProductSetVerticalSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
