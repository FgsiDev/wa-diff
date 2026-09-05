__d(
  "AdsPlacementsNSClosedBetaGatingUtils",
  ["AdsAPIObjectives", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIObjectives")).OUTCOME_SALES,
        e.CONVERSIONS,
        e.WEBSITE_CONVERSIONS,
        e.PRODUCT_CATALOG_SALES,
        e.XPLATFORM_SALES,
        e.OUTCOME_LEADS,
        e.LEAD_GENERATION,
        e.APP_INSTALLS,
        e.MOBILE_APP_INSTALLS,
        e.CANVAS_APP_INSTALLS,
        e.OUTCOME_ENGAGEMENT,
        e.POST_ENGAGEMENT,
        e.PAGE_LIKES,
        e.EVENT_RESPONSES,
        e.VIDEO_VIEWS,
        e.MESSAGES,
      ],
      u = [
        e.OUTCOME_AWARENESS,
        e.OUTCOME_TRAFFIC,
        e.BRAND_AWARENESS,
        e.REACH,
        e.LINK_CLICKS,
      ],
      c = "MESSENGER",
      d = new Set(s);
    function m(e) {
      return d.has(e);
    }
    function p() {
      return r("gkx")("23358");
    }
    function _(e) {
      var t, n;
      if (!m(e)) return !1;
      var o = r("gkx")("5560");
      return o
        ? p()
          ? (t = r("qex")._("692")) != null
            ? t
            : !1
          : (n = r("qex")._("2724")) != null
            ? n
            : !1
        : !1;
    }
    function f(e) {
      return e !== c || p() ? !1 : r("qex")._("2727") === !0;
    }
    function g(e) {
      return (
        e.length > 0 &&
        e.every(function (e) {
          return e === c;
        }) &&
        f(c)
      );
    }
    function h(e) {
      var t = e.conversionLocation,
        n = e.isCurrentlyAdvantagePlusPlacement,
        r = e.isNewCampaign,
        o = e.objective,
        a = e.wasPublishedWithAutomaticPlacement;
      return _(o) && (r ? n : a) && !f(t);
    }
    function y() {
      return p() ? !0 : r("gkx")("8108") ? r("qex")._("2733") === !1 : !1;
    }
    function C(e) {
      return h(e) && y();
    }
    function b(e) {
      return m(e) ? r("gkx")("5587") : !1;
    }
    function v(e) {
      return m(e) ? r("gkx")("10178") : !1;
    }
    function S(e) {
      var t, n;
      return v(e)
        ? p()
          ? (t = r("qex")._("922")) != null
            ? t
            : !1
          : (n = r("qex")._("2753")) != null
            ? n
            : !1
        : !1;
    }
    function R(e) {
      return S(e) !== !0
        ? !1
        : p()
          ? r("qex")._("1364") === !1
          : r("qex")._("2965") === !1;
    }
    function L(e) {
      return e ? r("gkx")("13804") : r("gkx")("8994");
    }
    var E = new Set(["ad", "ad_set", "campaign"]);
    ((l.ELIGIBLE_OBJECTIVES = s),
      (l.INELIGIBLE_OBJECTIVES = u),
      (l.isNSEligibleObjective = m),
      (l.isAdAccountInNSClosedBetaCohort = p),
      (l.isAdAccountEligibleForNSClosedBetaL2Changes = _),
      (l.isNSCTXCampaignExcluded = f),
      (l.areNSCTXCampaignsExcluded = g),
      (l.shouldHideNSClosedBetaL2PlacementControls = h),
      (l.isNSDeviceControlsRelaxed = y),
      (l.shouldHideNSDeviceControls = C),
      (l.isAdAccountEligibleForNSClosedBetaL2ChangesBanner = b),
      (l.isAdAccountEligibleForNSClosedBetaL1Changes = v),
      (l.isAdAccountEligibleForNSClosedBetaL1ChangesWithQE = S),
      (l.isAdAccountEligibleForNSClosedBetaMMFullExclusion = R),
      (l.isAdAccountEligibleForNSPartnershipAdsOrganic = L),
      (l.NS_BANNER_ENABLED_DUPLICATION_LEVELS = E));
  },
  98,
);
