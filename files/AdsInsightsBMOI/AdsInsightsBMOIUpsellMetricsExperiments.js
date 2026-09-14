__d(
  "AdsInsightsBMOIUpsellMetricsExperiments",
  ["AdsAccountStore", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("1829") ? d() || m() : !1;
    }
    function s() {
      return d() || m();
    }
    function u() {
      return m() || p();
    }
    function c() {
      return r("gkx")("1830") && m();
    }
    function d() {
      return r("AdsAccountStore").getSelectedAccountID() != null
        ? r("gkx")("4295")
        : !1;
    }
    function m() {
      return r("AdsAccountStore").getSelectedAccountID() != null
        ? r("gkx")("4296")
        : !1;
    }
    function p() {
      return r("AdsAccountStore").getSelectedAccountID() != null
        ? r("gkx")("2310")
        : !1;
    }
    function _() {
      return e()
        ? "NEW_ADVERTISER_PURCHASE_METRICS"
        : c()
          ? "EXISTING_ADVERTISER_ORDER_METRICS"
          : u()
            ? "EXISTING_ADVERTISER_CONTACT_METRICS"
            : s()
              ? "NEW_ADVERTISER_CONVERSATION_METRICS"
              : null;
    }
    ((l.getShowPurchasesSuggestedColumns = e),
      (l.getShowConversationsSuggestedColumns = s),
      (l.getShowContactsSuggestedColumns = u),
      (l.getShowOrdersSuggestedColumns = c),
      (l.isCTWAUpperFunnelTMCRMCTargetedAdvertiser = p),
      (l.getTargetAudience = _));
  },
  98,
);
