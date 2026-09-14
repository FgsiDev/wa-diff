__d(
  "adsMgmtColumnGetRootColumn",
  ["adsMgmtColumnToDescriptor", "memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        for (var e, n = r("adsMgmtColumnToDescriptor")(t); n.base; ) n = n.base;
        return (e = n.columnID) != null ? e : "";
      },
      s = r("memoizeStringOnly")(e);
    l.default = s;
  },
  98,
);
