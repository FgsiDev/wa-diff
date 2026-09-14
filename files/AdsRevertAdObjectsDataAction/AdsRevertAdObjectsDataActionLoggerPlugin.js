__d(
  "AdsRevertAdObjectsDataActionLoggerPlugin",
  ["AdsPERevertLoggerHelper", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = o("AdsPERevertLoggerHelper").getRevertEvent(t),
            n = e[0],
            a = e[1];
          r("adsMgmtLogger")(
            n,
            o("AdsPERevertLoggerHelper").getRevertData(t),
            a,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
