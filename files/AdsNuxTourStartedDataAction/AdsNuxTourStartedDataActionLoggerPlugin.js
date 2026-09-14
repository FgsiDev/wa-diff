__d(
  "AdsNuxTourStartedDataActionLoggerPlugin",
  ["adsMgmtLogger", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("nux_tour_started", {
            type: r("getByPath")(t, ["logData", "tour_id"]),
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
