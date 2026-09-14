__d(
  "AdsUEditorCampaignLiveVideoSectionUtils",
  [
    "AdsAPICampaignGroupRecord",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsCampaignGroupLVACardUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "gkx",
    "isNullish",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "1472239313020616",
      s = "1070511804898496",
      u = [s];
    function c() {
      var e,
        t,
        n = new Map([
          [(e = r("AdsAPIObjectives")).VIDEO_VIEWS, []],
          [e.POST_ENGAGEMENT, []],
          [e.MESSAGES, []],
          [
            e.CONVERSIONS,
            [(t = r("AdsPromotedObjectTypes")).PIXEL, t.MESSENGER],
          ],
          [e.LINK_CLICKS, [t.WEBSITE, t.MESSENGER]],
          [e.REACH, []],
        ]);
      if (
        (r("gkx")("5152") && n.set(r("AdsAPIObjectives").APP_INSTALLS, []),
        r("gkx")("23026"))
      ) {
        var o,
          a = (o = n.get(r("AdsAPIObjectives").LINK_CLICKS)) != null ? o : [];
        (a.push(r("AdsPromotedObjectTypes").MOBILE_APP),
          n.set(r("AdsAPIObjectives").LINK_CLICKS, a));
      }
      if (r("justknobx")._("5482")) {
        var i,
          l,
          s = (i = n.get(r("AdsAPIObjectives").LINK_CLICKS)) != null ? i : [];
        (s.push(r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE),
          s.push(r("AdsPromotedObjectTypes").PHONE_CALL),
          n.set(r("AdsAPIObjectives").LINK_CLICKS, s));
        var u = (l = n.get(r("AdsAPIObjectives").CONVERSIONS)) != null ? l : [];
        (u.push(r("AdsPromotedObjectTypes").PHONE_CALL),
          n.set(r("AdsAPIObjectives").CONVERSIONS, u));
      }
      return n;
    }
    var d = c();
    function m(e, t) {
      var n,
        r,
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          t.objective,
          e,
        ),
        i = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          a,
          e == null ? void 0 : e.optimization_goal,
        ),
        l = !!(
          d.has(i) &&
          (((n = d.get(i)) == null ? void 0 : n.length) === 0 ||
            ((r = d.get(i)) != null && r.includes(a)))
        );
      return l;
    }
    function p(e, t) {
      var n = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
        t.objective,
        e,
      );
      return n === r("AdsPromotedObjectTypes").LIVE_VIDEO;
    }
    function _(e) {
      if (e instanceof r("AdsAPICampaignGroupRecord")) {
        var t = e.collaborative_ads_partner_info,
          n =
            typeof (t == null ? void 0 : t.get) == "function"
              ? t.get("merchant_partner_business_id")
              : t == null
                ? void 0
                : t.merchant_partner_business_id;
        return n != null && u.includes(n);
      }
      return (
        e.collaborative_ads_partner_info != null &&
        e.collaborative_ads_partner_info.merchant_partner_business_id != null &&
        u.includes(
          String(e.collaborative_ads_partner_info.merchant_partner_business_id),
        )
      );
    }
    function f(e, t) {
      return r("isNullish")(e) || r("isNullish")(t) ? !1 : g(e, t);
    }
    function g(e, t) {
      return p(e, t)
        ? !0
        : o(
              "AdsCampaignGroupLVACardUtils",
            ).isFBDestinationEligibleForCampaignGroupLVACard()
          ? !1
          : (m(e, t) && o("AdsCampaignLiveVideoAdsUtils").isSLVAEligible()) ||
            _(t);
    }
    function h(e, t, n) {
      var r, a, i;
      return o("AdsCampaignLiveVideoAdsUtils").shouldApplyLVAOptimizedSettings(
        e == null || (r = e.live_video_advertiser_details) == null
          ? void 0
          : r.is_lva_toggle_on,
        e == null || (a = e.live_video_advertiser_details) == null
          ? void 0
          : a.should_default_toggle_on_from_model,
        f(t, n),
        (n == null || (i = n.promoted_object) == null
          ? void 0
          : i.live_video_destination) != null,
      );
    }
    ((l.SHOPEE_BUSINESS_ACCOUNT = e),
      (l.SHOPEE_LIVE_BUSINESS_ACCOUNT = s),
      (l.isLVACardVisible = f),
      (l.shouldApplyLVAOptimizedSettingsForCampaign = h));
  },
  98,
);
