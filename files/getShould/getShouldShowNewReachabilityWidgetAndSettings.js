__d(
  "getShouldShowNewReachabilityWidgetAndSettings",
  ["adsIsIGLoginSelector", "igAccessAdsManagerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsIsIGLoginSelector")();
    function s() {
      return e && !o("igAccessAdsManagerUtils").isIGAccessParityEnabled();
    }
    function u() {
      return !s();
    }
    function c() {
      return !s();
    }
    function d() {
      return !s();
    }
    ((l.getIGLoginStatusForNewReachabilitySettings = s),
      (l.getShouldShowNewReachabilitySettings = u),
      (l.getShouldShowReachabilityWidgetBanner = c),
      (l.getShouldShowNewReachabilityWidget = d));
  },
  98,
);
