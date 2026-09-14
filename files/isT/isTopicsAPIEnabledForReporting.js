__d(
  "isTopicsAPIEnabledForReporting",
  ["FBLogger", "gpsTopicsConstants", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (navigator.userAgent.indexOf("Chrome") < 0) {
        if (r("justknobx")._("4782")) {
          var e =
            r("gpsTopicsConstants").MESSAGE_PREFIX +
            " user-agent topic reporting check failed for agent: " +
            navigator.userAgent;
          r("FBLogger")(
            r("gpsTopicsConstants").LOGGING_PROJECT_NAME,
            r("gpsTopicsConstants").LOGGING_EVENT_NAME,
          ).debug(e);
        }
        return !1;
      }
      return !1;
    }
    l.default = e;
  },
  98,
);
