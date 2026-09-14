__d(
  "AdsInstagramMediaV2LoadedDataReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.specs,
            o = t;
          for (var a of e) {
            var l = a[0],
              s = a[1];
            o = o.set(
              l,
              r("LoadObject").withValue(s, { creatorModuleID: i.id }),
            );
          }
          return o;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
