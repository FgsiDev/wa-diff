__d(
  "AdsToplineListBatchLoadedDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = new Map();
          return (
            n.responses.forEach(function (t, n) {
              t.forEach(function (t) {
                return e.set(t.id, t);
              });
            }),
            t.setMultipleValueOrError(e)
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
