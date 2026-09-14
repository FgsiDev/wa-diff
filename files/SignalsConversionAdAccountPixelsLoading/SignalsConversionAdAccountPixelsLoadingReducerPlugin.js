__d(
  "SignalsConversionAdAccountPixelsLoadingReducerPlugin",
  ["mapSet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.merge(
            r("mapSet")(n.adAccountIDs, function (e) {
              return [e, t.get(e).loading()];
            }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
