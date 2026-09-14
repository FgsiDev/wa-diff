__d(
  "AdsMetadataWebsiteDestinationUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        (e = r("AdsPromotedObjectTypes")).PIXEL,
        e.WEB_AND_APP,
        e.WEB_AND_SHOP,
        e.WEBSITE_AND_IN_STORE,
        e.WEBSITE_APP_AND_IN_STORE,
      ]),
      c = new Map([
        [(s = r("AdsAPIObjectives")).OUTCOME_TRAFFIC, new Set([e.WEBSITE])],
        [s.LINK_CLICKS, new Set([e.WEBSITE])],
        [s.OUTCOME_SALES, u],
        [s.OUTCOME_LEADS, new Set([e.PIXEL])],
        [s.OUTCOME_ENGAGEMENT, new Set([e.PIXEL])],
        [s.CONVERSIONS, u],
      ]);
    function d(e, t) {
      var n;
      return e == null || t == null
        ? !1
        : ((n = c.get(e)) == null ? void 0 : n.has(t)) === !0;
    }
    l.isWebsiteDestinationAd = d;
  },
  98,
);
