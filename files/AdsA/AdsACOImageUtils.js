__d(
  "AdsACOImageUtils",
  ["AdsAPIObjectives", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Set(["BUY_TICKETS", "DONATE_NOW"]),
      u = r("immutable").Set([
        (e = r("AdsAPIObjectives")).APP_INSTALLS,
        e.LINK_CLICKS,
        e.WEBSITE_CONVERSIONS,
        e.CONVERSIONS,
        e.OUTCOME_SALES,
      ]);
    function c(e) {
      return !s.includes(e);
    }
    function d(e) {
      return e != null && u.includes(e);
    }
    ((l.isCTASupported = c), (l.isObjectiveSupported = d));
  },
  98,
);
