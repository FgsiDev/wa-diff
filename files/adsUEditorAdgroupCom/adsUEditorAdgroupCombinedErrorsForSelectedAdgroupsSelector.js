__d(
  "adsUEditorAdgroupCombinedErrorsForSelectedAdgroupsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.adgroupCombinedErrorsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.adgroupCombinedErrorsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name:
            i.id +
            ".adsUEditorAdgroupCombinedErrorsForSelectedAdgroupsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
