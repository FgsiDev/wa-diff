__d(
  "adsUEditorAdObjectsAdgroupErrorsSelector",
  [
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          return e.adgroupErrorsSelector.getStores();
        },
        function (t) {
          return function (e) {
            return t.adgroupErrorsSelector(e);
          };
        },
        { name: i.id + ".contextToErrorSelectorSelector" },
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector"), e],
        function (t, n) {
          return t.map(function (e) {
            return { adObjects: e, errors: n(e.adgroup.id) };
          });
        },
        { name: i.id + ".adsUEditorAdObjectsAdgroupErrorsSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
