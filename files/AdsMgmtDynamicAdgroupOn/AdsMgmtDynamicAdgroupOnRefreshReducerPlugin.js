__d(
  "AdsMgmtDynamicAdgroupOnRefreshReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.allLevels === !0 || n.adLevel === "adgroup" ? t.clear() : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
