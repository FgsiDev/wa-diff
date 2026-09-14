__d(
  "AdsOnsiteCRMSingleEventOptimizationUtil",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsOnsiteCRMSingleEventOptimizationUtil_leadGenQualityDataSourceConfig.graphql",
    "AdsOptimizationGoalUtils",
    "SignalsIntegrationCRMSetupLocation",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return !0;
    }
    var u =
      e !== void 0
        ? e
        : (e = n(
            "AdsOnsiteCRMSingleEventOptimizationUtil_leadGenQualityDataSourceConfig.graphql",
          ));
    function c(e) {
      var t;
      if (e == null) return !1;
      var n =
        (e == null || (t = e.lead_gen_quality_data_source_config) == null
          ? void 0
          : t.funnel_config_update_surface) ===
        r("SignalsIntegrationCRMSetupLocation").ADS_MANAGER;
      return n;
    }
    function d(e, t, n) {
      var a = r("qex")._("845");
      if (a === !0) return !0;
      var i = r("qex")._("2907");
      if (i === !0 && e) return !0;
      var l = t.some(function (e) {
        var t = e.crmEvents;
        return Array.isArray(t) && t.length > 0
          ? t.some(function (e) {
              return (
                e.eventName.toLowerCase() !== "lead" &&
                e.eventName.toLowerCase() !== "initial_lead"
              );
            })
          : !1;
      });
      return l
        ? e ||
            n <
              o("AdsOptimizationGoalUtils")
                .LeadGenQualityDataSourceOnboardingFinished
        : !1;
    }
    function m(e, t, n) {
      if (e !== !0 || n == null || Object.keys(n).length === 0) return null;
      if (t != null && t.length > 0) {
        var r = t.find(function (e) {
          return e.recommendation === "defaulted_conversion_event";
        });
        if (r != null) return r.pixel_id;
        var o = t.find(function (e) {
          return e.recommendation === "high_quality_conversion_event";
        });
        return o != null ? o.pixel_id : t[0].pixel_id;
      }
      return Object.keys(n)[0];
    }
    function p(e, t, n) {
      return (
        t === r("AdsAPIOptimizationGoals").QUALITY_LEAD &&
        e === r("AdsAPIObjectives").OUTCOME_LEADS &&
        n === "onsite_crm_single_event"
      );
    }
    function _(e, t, n, o, a, i, l, s) {
      var u;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_seo_campaign_published",
        data:
          ((u = {}),
          (u.campaign_id = t),
          (u.campaign_group_id = e),
          (u.is_edit = !n),
          (u.pixel_id = o),
          (u.custom_event_type = a),
          (u.accountid = i),
          (u.source = l),
          (u.error_name = s),
          u),
      });
    }
    function f(e, t, n, o, a, i) {
      var l;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_seo_event_selected",
        data:
          ((l = {}),
          (l.campaign_id = t),
          (l.campaign_group_id = e),
          (l.accountid = n),
          (l.pixel_id = o),
          (l.custom_event_type = a),
          (l.clo_optimization_event_type = i),
          l),
      });
    }
    function g(e, t, n, o, a, i) {
      var l;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_seo_event_defaulted",
        data:
          ((l = {}),
          (l.campaign_id = t),
          (l.campaign_group_id = e),
          (l.accountid = n),
          (l.pixel_id = o),
          (l.custom_event_type = a),
          (l.event_source = i),
          l),
      });
    }
    function h(e, t, n, o, a, i) {
      var l;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_seo_event_recommended",
        data:
          ((l = {}),
          (l.campaign_id = t),
          (l.campaign_group_id = e),
          (l.accountid = n),
          (l.pixel_id = o),
          (l.custom_event_type = a),
          (l.event_source = i),
          l),
      });
    }
    function y(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_seo_pixel_selected",
        data:
          ((a = {}),
          (a.campaign_id = t),
          (a.campaign_group_id = e),
          (a.accountid = n),
          (a.pixel_id = o),
          a),
      });
    }
    function C(e, t) {
      return e === "OTHER" ? t : e;
    }
    ((l.isOnsiteCRMSingleEventOptimization = s),
      (l.seoLeadGenQualityDataSourceConfigFragment = u),
      (l.getHasConfiguredMLRecommendation = c),
      (l.getQualifyForSingleEventOptimization = d),
      (l.getSEODefaultPixelID = m),
      (l.isSEOPublishLoggingEligible = p),
      (l.logSEOCampaignPublished = _),
      (l.logSEOEventSelected = f),
      (l.logSEOEventDefaulted = g),
      (l.logSEOEventRecommended = h),
      (l.logSEOPixelSelected = y),
      (l.getCRMEventName = C));
  },
  98,
);
