__d(
  "AdsMgmtTableScrollToColumnReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.column != null
            ? n.column
            : n.columnScrollPosition != null
              ? n.columnScrollPosition
              : null;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
