__d(
  "adsUEditorAdgroupErrorMessageSpecSelector_DEPRECATED",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.adgroupErrorMessageSpecSelector_DEPRECATED;
          return t.getStores();
        },
        function (t) {
          var e = t.adgroupErrorMessageSpecSelector_DEPRECATED,
            n = t.adgroupID;
          return e(n);
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
