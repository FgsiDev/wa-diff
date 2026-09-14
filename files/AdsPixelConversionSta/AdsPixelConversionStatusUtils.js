__d(
  "AdsPixelConversionStatusUtils",
  ["AdsConversionPixelStatusUI", "AdsPixelStatus", "AdsPixelStatusUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.status) {
        var t = o("AdsConversionPixelStatusUI").getStatus(e);
        return o("AdsPixelStatusUtils").convertLegacyPixelStatus(t);
      }
      return s(e).getStatus();
    }
    function s(e) {
      var t = e.lastFiredTime || e.last_fired_time || e.last_firing_time;
      return new (r("AdsPixelStatus"))(t);
    }
    ((l.getStatusFromConversion = e), (l.getStatusObjectFromConversion = s));
  },
  98,
);
