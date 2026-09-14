__d(
  "AdsPEErrorDismissReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (t.size === 0) return t;
          var e = t.keySeq().last();
          return t.delete(e);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
