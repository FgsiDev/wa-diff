__d(
  "AdsReachFrequencyDestinationUtils",
  ["AdsAPIObjectives", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Set([
        (e = r("AdsAPIObjectives")).REACH,
        e.BRAND_AWARENESS,
        e.POST_ENGAGEMENT,
        e.VIDEO_VIEWS,
        e.LINK_CLICKS,
        e.CONVERSIONS,
        e.OUTCOME_AWARENESS,
        e.OUTCOME_ENGAGEMENT,
      ]),
      u = r("immutable").Set([e.APP_INSTALLS, e.MOBILE_APP_INSTALLS]),
      c = r("immutable").Set([e.REACH, e.OUTCOME_AWARENESS]);
    function d(e) {
      return s.has(e);
    }
    function m(e) {
      return u.has(e);
    }
    function p(e) {
      return c.has(e);
    }
    function _(e, t) {
      return m(t) ? e.destinationID : null;
    }
    ((l.isDestinationPage = d),
      (l.isDestinationApp = m),
      (l.isDestinationPromotedObjectPage = p),
      (l.getAppID = _));
  },
  98,
);
