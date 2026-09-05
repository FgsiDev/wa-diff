__d(
  "AdsCampaignGroupLVACardUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsUEditorSkipLiveVideoFragmentInSchedule.entrypointutils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      return s._(
        /*BTDS*/ "To create a live video ad, turn off catalog ads in campaign details.",
      );
    }
    function c() {
      return r("gkx")("13780") || r("gkx")("5608");
    }
    function d() {
      return r("gkx")("1741");
    }
    function m(e) {
      var t,
        n = [
          (t = r("AdsAPIObjectives")).OUTCOME_ENGAGEMENT,
          t.OUTCOME_AWARENESS,
          t.OUTCOME_SALES,
          t.OUTCOME_LEADS,
        ];
      return (
        r("justknobx")._("5440") && n.push(r("AdsAPIObjectives").LINK_CLICKS),
        r("justknobx")._("5522") && n.push(r("AdsAPIObjectives").APP_INSTALLS),
        n.includes(e)
      );
    }
    var p = new Set([(e = r("AdsAPIObjectives")).OUTCOME_LEADS]),
      _ = new Set([e.OUTCOME_ENGAGEMENT, e.OUTCOME_SALES, e.LINK_CLICKS]);
    function f(e, t) {
      var n = (t == null ? void 0 : t.silent) === !0,
        o = [];
      return (
        p.has(e) ||
          ((n ? r("gkx")("1741") : r("gkx")("13780")) && o.push("FACEBOOK")),
        _.has(e) &&
          (n ? r("gkx")("25196") : r("gkx")("5608")) &&
          o.push("INSTAGRAM"),
        o
      );
    }
    function g(e) {
      return e === "CURRENT_LIVE" || e === "SCHEDULED_LIVE";
    }
    ((l.isEligibleForCampaignGroupLVACard = o(
      "AdsUEditorSkipLiveVideoFragmentInSchedule.entrypointutils",
    ).isEligibleForCampaignGroupLVACard),
      (l.getLiveVideoDisabledByCatalogAdsMessage = u),
      (l.isEligibleForCampaignGroupLVACardWithExposureLogging = c),
      (l.isFBDestinationEligibleForCampaignGroupLVACard = d),
      (l.isEligibleObjectiveForCampaignGroupLVACard = m),
      (l.getEligibleLVADestinations = f),
      (l.isFBLiveVideoAdType = g));
  },
  226,
);
