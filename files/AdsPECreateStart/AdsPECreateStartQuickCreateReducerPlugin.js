__d(
  "AdsPECreateStartQuickCreateReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.data,
            r = e.level,
            o = e.source;
          return t.merge({
            creationStartLevel: r,
            quickCreateSource: o,
            quickCreateStarted: !0,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
