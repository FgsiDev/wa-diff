__d(
  "FunnelLoggerSampler",
  ["FunnelLoggerConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = s(e);
      return t === 0 ? !1 : Math.random() * t < 1;
    }
    function s(e) {
      var t = r("FunnelLoggerConfig.experimental").freq[e];
      return (
        t === void 0 && (t = r("FunnelLoggerConfig.experimental").freq.default),
        t
      );
    }
    i.exports = { shouldLog: e, getSamplingRate: s };
  },
  34,
);
