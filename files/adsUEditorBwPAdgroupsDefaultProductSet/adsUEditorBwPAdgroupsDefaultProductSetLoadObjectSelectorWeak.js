__d(
  "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
  ["adsCreateStoreSelector", "immutable", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    r("requireWeak")(
      "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelector",
      function (t) {
        e = t;
      },
    );
    var s = r("adsCreateStoreSelector")(
        function (t) {
          var n, r;
          return (n = (r = e) == null ? void 0 : r.getStores(t)) != null
            ? n
            : [];
        },
        function (n) {
          return e ? e(n) : r("immutable").Map();
        },
        {
          name:
            i.id +
            ".adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
