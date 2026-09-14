__d(
  "adsUEditorAdgroupPlainObjectSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          return e.adgroupPlainObjectSelector.getStores();
        },
        function (t) {
          var e = t.adgroupID,
            n = t.adgroupPlainObjectSelector;
          return n(e);
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUeditorAdgroupPlainObjectSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
