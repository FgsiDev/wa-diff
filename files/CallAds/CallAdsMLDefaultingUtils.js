__d(
  "CallAdsMLDefaultingUtils",
  [
    "AdsDefaultPageDataProvider",
    "AdsInterfacesLogger",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.75,
      s = 0.85,
      u = 0.75,
      c = 0.85,
      d = 0.9,
      m = 0.75,
      p = 0.75,
      _ = 0.85,
      f = 0.9,
      g = {
        conversion_location: r("AdsPromotedObjectTypes").PHONE_CALL,
        source: "call_ads_ml_defaulting",
      };
    function h(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5482") === !0 : r("qex")._("5483") === !0
      );
    }
    function y() {
      var t;
      return (t = r("qex")._("5484")) != null ? t : e;
    }
    function C(e) {
      var t = D(e);
      return t == null ? void 0 : t.call_ads_traffic_default_ml_score;
    }
    function b(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5485") === !0 : r("qex")._("5486") === !0
      );
    }
    function v() {
      var e;
      return (e = r("qex")._("5487")) != null ? e : u;
    }
    function S(e) {
      var t = D(e);
      return t == null ? void 0 : t.call_ads_sales_default_ml_score;
    }
    function R(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5488") === !0 : r("qex")._("5489") === !0
      );
    }
    function L() {
      var e;
      return (e = r("qex")._("5490")) != null ? e : m;
    }
    function E(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5491") === !0 : r("qex")._("5492") === !0
      );
    }
    function k() {
      var e;
      return (e = r("qex")._("5493")) != null ? e : p;
    }
    function I(e) {
      var t = D(e);
      return t == null ? void 0 : t.call_ads_engagement_default_ml_score;
    }
    function T(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "call_ads_l2_defaulting_decision",
        data:
          ((n = {}),
          (n.objective = e),
          (n.message = JSON.stringify({
            control_default: t.controlDefault,
            final_default: t.finalDefault,
            ml_score: t.mlScore,
            test_default: t.testDefault,
          })),
          n),
      });
    }
    function D(e) {
      var t,
        n,
        o =
          (t = r("AdsDefaultPageDataProvider")().get(e).getValue()) == null
            ? void 0
            : t.pageID,
        a =
          o != null
            ? (n = r("AdsPageStore").getLoadObject(o)) == null
              ? void 0
              : n.getValue()
            : null;
      return a;
    }
    ((l.TRAFFIC_THRESHOLD_A = e),
      (l.TRAFFIC_THRESHOLD_B = s),
      (l.SALES_THRESHOLD_A = u),
      (l.SALES_THRESHOLD_B = c),
      (l.SALES_THRESHOLD_C = d),
      (l.LEADS_THRESHOLD_A = m),
      (l.ENGAGEMENT_THRESHOLD_A = p),
      (l.ENGAGEMENT_THRESHOLD_B = _),
      (l.ENGAGEMENT_THRESHOLD_C = f),
      (l.CALL_ADS_ML_DEFAULT_DATA = g),
      (l.isCallAdsMLDefaultingEnabledTraffic = h),
      (l.getCallAdsMLGroupThresholdTraffic = y),
      (l.getCallAdsTrafficDefaultMLScore = C),
      (l.isCallAdsMLDefaultingEnabledSales = b),
      (l.getCallAdsMLGroupThresholdSales = v),
      (l.getCallAdsSalesDefaultMLScore = S),
      (l.isCallAdsMLDefaultingEnabledLeads = R),
      (l.getCallAdsMLGroupThresholdLeads = L),
      (l.isCallAdsMLDefaultingEnabledEngagement = E),
      (l.getCallAdsMLGroupThresholdEngagement = k),
      (l.getCallAdsEngagementDefaultMLScore = I),
      (l.logCallAdsMLDefaultingDecision = T));
  },
  98,
);
