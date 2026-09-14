__d(
  "AdsEventsManagerCustomAttributionHoldoutUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "AppendAttribution",
      "AppendClickAttribution",
      "UpdatePurchase",
      "UpdateVisit",
    ];
    function s(t) {
      return t == null
        ? !1
        : e.some(function (e) {
            return e === t;
          });
    }
    function u() {
      return r("gkx")("11891") || r("gkx")("170");
    }
    function c(e) {
      return u() && s(e);
    }
    function d() {
      return r("gkx")("13212") || r("gkx")("5940");
    }
    ((l.CUSTOM_ATTRIBUTION_EVENTS = e),
      (l.isCustomAttributionEvent = s),
      (l.canSeeCustomAttributionOpenBetaUX = u),
      (l.isCustomAttributionScenario = c),
      (l.isCustomAttributionCampaignCreationEnabled = d));
  },
  98,
);
