__d(
  "AdsPACRelaxationUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsInterfacesLogger",
    "WAMOStatusAdsManagerUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null ||
        (t = t.pac_relaxation) == null
          ? void 0
          : t.enroll_status) === "OPT_OUT"
      );
    }
    function s(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null ||
        (t = t.pac_relaxation) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function u(e) {
      var t;
      return !!(
        (t = e.creative) != null &&
        (t = t.degrees_of_freedom_spec) != null &&
        (t = t.creative_features_spec) != null &&
        t.pac_relaxation
      );
    }
    function c(t, n, r, o) {
      var a = n;
      return (!r && u(t) && (a = !e(t)), I(t, o, n, r, a), a);
    }
    function d(e) {
      return e ? r("gkx")("12730") : r("gkx")("11217");
    }
    function m() {
      return r("gkx")("11218");
    }
    function p(e) {
      return m() && !d(e);
    }
    function _() {
      return r("gkx")("7841");
    }
    function f(e, t) {
      var n = o("AdsAutomaticFlowUtils").isAdvantagePlusCreativeEligible(e, t);
      return n ? !r("gkx")("17958") : !1;
    }
    function g(e) {
      return !(
        r("gkx")("13500") ||
        o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromAdObjects(e)
      );
    }
    function h(e) {
      var t = e.adgroup.source_app_id;
      return (
        t != null && t !== (0x6c6c24b58878).toString() && E(e.adgroup),
        !(
          o("AdsDynamicAdsUtils").isDynamicAd(e.adgroup) ||
          o("AdsChildAttachmentsUtils").isCarouselAd(e.adgroup) ||
          o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e.adgroup) ||
          o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromAdObjects(
            e,
          )
        )
      );
    }
    var y =
      "https://www.facebook.com/business/help/1126725172362626?ref=search_new_0";
    function C(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data:
          ((n = {}),
          (n.adgroup_id = e.id),
          (n.status = t ? "OPT_IN" : "OPT_OUT"),
          n),
        eventName: "ads_pac_relaxation__checkbox_interaction",
      });
    }
    function b(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        data: ((t = {}), (t.adgroup_id = e.id), t),
        eventName: "ads_pac_relaxation__l1_field_impression",
      });
    }
    function v(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        data: ((t = {}), (t.adgroup_id = e.id), t),
        eventName: "ads_pac_relaxation__l1_tooltip_hover",
      });
    }
    function S(e) {
      var t;
      r("AdsInterfacesLogger").log({
        data: ((t = {}), (t.adgroup_id = e.id), t),
        eventName: "ads_pac_relaxation__l1_field_interaction",
      });
    }
    function R(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data:
          ((n = {}),
          (n.adgroup_id = e.id),
          (n.status = t ? "OPT_IN" : "OPT_OUT"),
          n),
        eventName: "ads_pac_relaxation__enroll_status_change",
      });
    }
    function L(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((n = {}),
          (n.adgroup_id = e.id),
          (n.status = t ? "L1_SHOW" : "L1_NOT_SHOW"),
          (n.event_source = "L1_FIELD_VISIBILITY_CHECK"),
          n),
        eventName: "ads_pac_relaxation__l1_field_impression",
      });
    }
    function E(e) {
      var t;
      r("AdsInterfacesLogger").log({
        data:
          ((t = {}),
          (t.adgroup_id = e.id),
          (t.adgroup_source_app = e.source_app_id),
          t),
        eventName: "ads_pac_relaxation__source_app",
      });
    }
    function k(t) {
      var n,
        a = u(t),
        i = e(t),
        l = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t);
      r("AdsInterfacesLogger").logOnce({
        data:
          ((n = {}),
          (n.adgroup_id = t.id),
          (n.status = a ? (i ? "OPT_OUT" : "OPT_IN") : "NO_SPEC"),
          (n.is_enabled = l),
          n),
        eventName: "ads_pac_relaxation__publish",
      });
    }
    function I(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e.id),
          (i.event_source = t),
          (i.status = n ? "DEFAULT_ON" : "DEFAULT_OFF"),
          (i.subsequent_data = JSON.stringify({
            account_segment: T(),
            is_duplication_draft: o,
            is_opted_in: a,
          })),
          i),
        eventName: "ads_pac_relaxation__default_on",
      });
    }
    function T() {
      return _()
        ? "sensitive"
        : p()
          ? "gbg_in_market"
          : m()
            ? "gbg_scaled_unmanaged"
            : "sbg";
    }
    var D = r("immutable").List([
      "previews/instagram_stream",
      "previews/facebook_reels_mobile",
      "previews/mobile_feed_standard",
      "previews/instagram_reels",
      "previews/instagram_story",
    ]);
    ((l.isPACRelaxationOptedOutFromAdgroup = e),
      (l.isPACRelaxationOptedInFromAdgroup = s),
      (l.doesAdgroupHavePACRelaxationSpec = u),
      (l.getAdgroupPACRelaxationInitialOptInStatus = c),
      (l.isGBGAdAccount = m),
      (l.isGBGInMarketAdAccount = p),
      (l.isSensitiveAdAccount = _),
      (l.isEligibleForPACRelaxationAPlusC = f),
      (l.isPACRelaxationEligibleFromAdAccount = g),
      (l.isPACRelaxationEligibleFromAdSetup = h),
      (l.PAC_RELAXATION_LEARN_MORE_LINK = y),
      (l.logPACRelaxationCheckboxInteraction = C),
      (l.logPACRelaxationL1Impression = b),
      (l.logPACRelaxationL1TooltipImpression = v),
      (l.logPACRelaxationL1EditInteraction = S),
      (l.logPACRelaxationL1ToggleInteraction = R),
      (l.logPACRelaxationFieldEligibility = L),
      (l.logPACRelaxationPublishAd = k),
      (l.getAccountSegment = T),
      (l.PAC_RELAXATION_AFFECTED_PLACEMENTS = D));
  },
  98,
);
