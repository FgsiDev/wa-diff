__d(
  "adsMgmtGetChangedAdObjectCountByColumnKey",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return r("immutable").Map();
      var t = r("immutable").Map();
      return (
        e.forEach(function (e) {
          return e.forEach(function (e) {
            t = t.set(e, t.get(e, 0) + 1);
          });
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
