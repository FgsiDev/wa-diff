__d(
  "AdsPostClickUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAssetFeedUtils",
    "AdsDynamicAdsUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "gkx",
    "immutable",
    "isTruthy",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Set([(e = r("AdsAPIObjectives")).CONVERSIONS]),
      u = r("immutable").Set([
        e.VIDEO_VIEWS,
        e.POST_ENGAGEMENT,
        e.APP_INSTALLS,
        e.LEAD_GENERATION,
        e.EVENT_RESPONSES,
      ]),
      c = r("immutable").Set([e.REACH, e.BRAND_AWARENESS, e.LINK_CLICKS]);
    function d(e) {
      return s.has(e);
    }
    function m(e, t, n) {
      return (
        _(n, t) === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
        r("qex")._("1901") === !0
      );
    }
    function p(e) {
      return d(e);
    }
    function _(e, t) {
      var n,
        r = o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, t),
        a = (n = t.promoted_object) == null ? void 0 : n.full_funnel_objective;
      return o("AdsODAXUtils").maybeTranslateObjective(
        a || e,
        r,
        t.optimization_goal,
      );
    }
    function f(e, t, n, r) {
      var a,
        i = (a = r.promoted_object) == null ? void 0 : a.full_funnel_objective,
        l = _(i || t, r),
        s = d(l),
        p = u.has(l),
        f = c.has(l);
      return (
        (s || p || f || m(e, r, l)) &&
        !o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(n)
      );
    }
    function g(e, t) {
      var n = o("AdsDynamicAdsUtils").isDynamicAd(e),
        a = o("AdsAPICampaignGroupRecordUtils").isAutomatedShoppingAds(t);
      return t.objective === r("AdsAPIObjectives").OUTCOME_SALES && n && !a;
    }
    function h() {
      return r("gkx")("15179");
    }
    function y(e, t, n) {
      return b(e, g(t, n));
    }
    function C(e, t, n) {
      return v(e, g(t, n));
    }
    function b(e, t, n) {
      return (
        e === r("AdsPromotedObjectTypes").MOBILE_APP &&
        (t || r("isTruthy")(n)) &&
        h()
      );
    }
    function v(e, t) {
      return e === r("AdsPromotedObjectTypes").PIXEL && t;
    }
    ((l.isPostClickExperienceEnabledForPCS = m),
      (l.isAccountInPostClickExperienceQEWithExp = p),
      (l.isEligibleForPostClickExperience = f),
      (l.isBAUSalesDynamicAd = g),
      (l.isUnifiedCardForDeeplinksApp = h),
      (l.enableUnifiedCardApp = y),
      (l.enableUnifiedCardWeb = C),
      (l.enableUnifiedCardAppWithCheck = b),
      (l.enableUnifiedCardWebWithCheck = v));
  },
  98,
);
