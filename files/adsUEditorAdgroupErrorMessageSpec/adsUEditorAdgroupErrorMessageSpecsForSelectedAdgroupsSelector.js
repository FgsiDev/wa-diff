__d(
  "adsUEditorAdgroupErrorMessageSpecsForSelectedAdgroupsSelector",
  [
    "adsCreateStoreSelector",
    "adsUEditorAdgroupErrorMessageSpecSelector_DEPRECATED",
    "adsUEditorSelectedAdgroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          return [].concat(
            r("adsUEditorAdgroupErrorMessageSpecSelector_DEPRECATED").getStores(
              {
                adgroupErrorMessageSpecSelector_DEPRECATED:
                  e.adgroupErrorMessageSpecSelector_DEPRECATED,
              },
            ),
            r("adsUEditorSelectedAdgroupIDsSelector").getStores(e),
          );
        },
        function (t) {
          var e = r("adsUEditorSelectedAdgroupIDsSelector")(t);
          return e.map(function (e) {
            return {
              adgroupID: e,
              errorSpec: r(
                "adsUEditorAdgroupErrorMessageSpecSelector_DEPRECATED",
              )({
                adgroupErrorMessageSpecSelector_DEPRECATED:
                  t.adgroupErrorMessageSpecSelector_DEPRECATED,
                adgroupID: e,
              }),
            };
          });
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
