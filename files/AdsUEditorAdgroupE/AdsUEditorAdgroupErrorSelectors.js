__d(
  "AdsUEditorAdgroupErrorSelectors",
  [
    "adsCreateStoreSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "concatArrays",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      function (e) {
        return [].concat(
          e.adgroupErrorsSelector.getStores(),
          r("adsUEditorSelectedAdgroupIDsSelector").getStores(e),
        );
      },
      function (t) {
        var e = r("adsUEditorSelectedAdgroupIDsSelector")(t),
          n = e.map(function (e) {
            return t.adgroupErrorsSelector(e);
          });
        return r("concatArrays")(n);
      },
      { name: i.id + ".allErrorsForSelectedAdgroupsSelector" },
    );
    l.allErrorsForSelectedAdgroupsSelector = e;
  },
  98,
);
