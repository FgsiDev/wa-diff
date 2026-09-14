__d(
  "AdsAdgroupTrackingSpecsUtils",
  ["AdsAppUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return !r("AdsAppUtils").isMobileAppObjective(e, t);
    }
    function s(e) {
      var t;
      return [
        ((t = {}),
        (t["action.type"] = ["offsite_conversion"]),
        (t.fb_pixel = [e]),
        t),
      ];
    }
    ((l.supportsMobileAppTracking = e), (l.getTrackingSpecFromPixelID = s));
  },
  98,
);
