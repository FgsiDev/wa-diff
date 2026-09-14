__d(
  "AdsPEErrorInitialWarningsReducerPlugin",
  ["AdsError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.warnings.forEach(function (t, n) {
              var o = r("AdsError").createNotice("server_warnings_" + n, t);
              e = e.remove(o.key).set(o.key, o);
            }),
            e
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
