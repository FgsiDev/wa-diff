__d(
  "AdsCreativeGenAIEligibilityUtils",
  [
    "$InternalEnum",
    "AdsAPIAdgroupRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsBuyingTypes",
    "AdsCreativeGenAIRegulatedAdsEligibilityUtils",
    "AdsCreativeGenAIVideoGenLoggingUtils",
    "AdsCreativeVideoGenPortfolioAdexUtils",
    "AdsGenAISpecUtils",
    "AdsInterfacesLogger",
    "AdsObjectTypeUtils",
    "ApiAdObjectTypes",
    "FBLogger",
    "GenAIMVPEntryPoint",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "WAMOStatusAdsManagerUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2,
      u = 3,
      c = "1p_test",
      d = "3p_test";
    function m(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("8376") : r("gkx")("5138")
      );
    }
    var p = n("$InternalEnum").Mirrored([
        "TEST_WITH_DELIVERY",
        "TEST_WITHOUT_DELIVERY",
        "TEST_MULTI_ASSETS_WITHOUT_DELIVERY",
        "EMPLOYEE_TEST",
      ]),
      _ = n("$InternalEnum").Mirrored([
        "NON_AUCTION_CAMPAGIN",
        "REGULATED_CATEGORY",
        "SENSITIVE_AD_ACCOUNT_VERTICAL",
        "TRUST_TIER_AD_ACCOUNT",
        "ADS_TRUST_TIER_0",
        "DCO_OR_DLO_AD",
        "AAA_OR_FLEXIBLE_FORMAT_AD",
        "SHOP_AD",
        "NOT_STATIC_SINGLE_IMAGE_AD",
        "NO_LINK_DATA",
        "NON_SHARE_AD_OBJECT_TYPE",
        "CREATIVE_HUB",
        "MESSAGE_CAMPAIGN",
        "NON_ELIGIBLE_OPTIMIZATION_GOAL_FOR_VIDEO_GEN",
        "MEDIA_PICKER_GK",
        "WAMO_ONLY",
        "EXISTING_POST_AD",
        "VIDEO_ONLY_AD_BUT_NO_MVP_V2I",
        "NO_IMAGE_NO_VIDEO",
        "FAIL_GEN_AI_MVP_GATING",
      ]);
    function f(e, t, n) {
      return o("AdsObjectTypeUtils").isMessageCampaign(e)
        ? _.MESSAGE_CAMPAIGN
        : e.buying_type !== r("AdsBuyingTypes").AUCTION
          ? _.NON_AUCTION_CAMPAGIN
          : o(
                "AdsCreativeGenAIRegulatedAdsEligibilityUtils",
              ).isAdsRegulatedCategoryAllowlistedForGenAI(e)
            ? o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(n) ||
              o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(n) ||
              o("AdsAPICampaignGroupRecordUtils").isAdvantageAppCampaign(e)
              ? _.AAA_OR_FLEXIBLE_FORMAT_AD
              : o(
                    "ShopsAdsOffsiteCheckoutAdsUtils",
                  ).adgroupHasWebsiteAndShopDestinationSpec(n)
                ? _.SHOP_AD
                : e.objective === o("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY
                  ? _.CREATIVE_HUB
                  : null
            : _.REGULATED_CATEGORY;
    }
    function g(e) {
      return o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e) ||
        o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)
        ? _.DCO_OR_DLO_AD
        : null;
    }
    function h(e) {
      var t = !r("gkx")("13406");
      return o("AdsAPIAdgroupRecordUtils").getObjectType(e) ===
        r("ApiAdObjectTypes").PHOTO && t
        ? null
        : o("AdsAPIAdgroupRecordUtils").getObjectType(e) !==
            r("ApiAdObjectTypes").SHARE
          ? _.NON_SHARE_AD_OBJECT_TYPE
          : null;
    }
    function y() {
      var e = r("gkx")("24803");
      return e && r("gkx")("13414");
    }
    function C() {
      return r("gkx")("5895");
    }
    function b(e) {
      var t;
      return (
        (e == null || (t = e.creative) == null ? void 0 : t.media_type) ===
        "SINGLE_VIDEO"
      );
    }
    function v(e, t) {
      var n,
        a,
        i,
        l,
        s =
          (e == null || (n = e.creative) == null ? void 0 : n.media_type) ===
            "EXISTING_POST" ||
          (e == null || (a = e.creative) == null ? void 0 : a.media_type) ===
            "EXISTING_INSTAGRAM_POST",
        u =
          s &&
          ((e == null || (i = e.creative) == null ? void 0 : i.object_type) ===
            r("ApiAdObjectTypes").PHOTO ||
            (e == null || (l = e.creative) == null ? void 0 : l.object_type) ===
              r("ApiAdObjectTypes").SHARE);
      if (u) {
        var c,
          d = e instanceof r("AdsAPIAdgroupRecord") ? e.id : null,
          m = e instanceof r("AdsAPIAdgroupRecord") ? e.account_id : null;
        r("AdsInterfacesLogger").logOnce({
          eventName: "ads_gen_ai__image_gen_existing_post_eligible",
          data: ((c = {}), (c.ad_account_id = m), (c.adgroup_id = d), c),
        });
      }
      if (u) {
        var p = !1;
        if ((t == null ? void 0 : t.feature) === "video_gen") {
          var f;
          p = y();
          var g = e instanceof r("AdsAPIAdgroupRecord") ? e.id : null,
            v = e instanceof r("AdsAPIAdgroupRecord") ? e.account_id : null;
          r("AdsInterfacesLogger").logOnce({
            eventName: p
              ? "ads_gen_ai__video_gen_existing_post_eligible"
              : "ads_gen_ai__video_gen_existing_post_ineligible",
            data: ((f = {}), (f.ad_account_id = v), (f.adgroup_id = g), f),
          });
        } else
          (t == null ? void 0 : t.feature) === "image_gen" &&
            (p = r("gkx")("8333"));
        return p ? null : _.EXISTING_POST_AD;
      }
      var S =
        o("AdsAutomaticFlowUtils").isSingleImageFormat(e) ||
        ((t == null ? void 0 : t.entryPoint) === "l1" &&
          (t == null ? void 0 : t.feature) === "image_gen" &&
          e instanceof r("AdsAPIAdgroupRecord") &&
          o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e)) ||
        ((t == null ? void 0 : t.feature) === "video_gen" && b(e) && C());
      if (!S) return _.NOT_STATIC_SINGLE_IMAGE_AD;
      var R =
        (t == null ? void 0 : t.feature) === "image_gen" &&
        r("qex")._("3156") === !0;
      return R ? null : h(e);
    }
    function S(e) {
      if (r("gkx")("395") && !r("gkx")("341"))
        return _.SENSITIVE_AD_ACCOUNT_VERTICAL;
      if (
        !r("AdsAccountUtils").hasCapability(e, "ELIGIBLE_FOR_IMAGE_GEN") &&
        !r("gkx")("341")
      ) {
        var t;
        r("AdsInterfacesLogger").log({
          eventName: "genai_image_gen_pao_account_check",
          data:
            ((t = {}), (t.metadata = "pao_check_would_block_ad_account"), t),
        });
      }
      return r("AdsAccountUtils").hasCapability(e, "ADS_TRUST_TIER_0_FULL") &&
        !r("gkx")("1028")
        ? _.ADS_TRUST_TIER_0
        : null;
    }
    function R(e, t, n) {
      var r = String(e);
      switch (e) {
        case _.NOT_STATIC_SINGLE_IMAGE_AD: {
          var a,
            i = n == null || (a = n.creative) == null ? void 0 : a.media_type;
          return i != null ? r + ":" + String(i) : r;
        }
        case _.NON_SHARE_AD_OBJECT_TYPE: {
          var l,
            s = n == null || (l = n.creative) == null ? void 0 : l.object_type;
          return s != null ? r + ":" + String(s) : r;
        }
        case _.REGULATED_CATEGORY: {
          var u = t.special_ad_categories;
          if (u != null) {
            var c = Array.from(u);
            if (c.length > 0) return r + ":" + c.join(",");
          }
          return r;
        }
        case _.AAA_OR_FLEXIBLE_FORMAT_AD:
          return o("AdsAPICampaignGroupRecordUtils").isAdvantageAppCampaign(t)
            ? r + ":AAA"
            : o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(n)
              ? r + ":CAG"
              : o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(n)
                ? r + ":FLEXIBLE"
                : r;
        case _.DCO_OR_DLO_AD:
          return o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(n)
            ? r + ":DLO"
            : o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(n)
              ? r + ":DCO"
              : r;
        default:
          return r;
      }
    }
    function L(e, t, n, a, i) {
      if (
        (i == null ? void 0 : i.entryPoint) === "l1" &&
        (i == null ? void 0 : i.campaignTargeting) != null &&
        o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromCampaign({
          targeting: i.campaignTargeting,
        })
      )
        return _.WAMO_ONLY;
      var l = r("AdsAccountUtils").hasCapability(e, "ELIGIBLE_FOR_IMAGE_GEN");
      if (!l) {
        var s,
          u = a instanceof r("AdsAPIAdgroupRecord") ? a.account_id : null,
          c = a instanceof r("AdsAPIAdgroupRecord") ? a.id : null;
        r("AdsInterfacesLogger").log({
          eventName: "genai_image_gen_pao_integrity_shadow_check",
          data:
            ((s = {}),
            (s.ad_account_id = u),
            (s.adgroup_id = c),
            (s.metadata = "blocked_by_ad_image_generation_feature_grant"),
            s),
        });
      }
      var d = S(e);
      if (d != null) return d;
      var p = g(a);
      if (p != null) return p;
      var h = f(t, n, a);
      if (h != null) return h;
      if ((i == null ? void 0 : i.entryPoint) !== "media_picker") {
        var y = v(a, i);
        if (y != null) return y;
      }
      return (i == null ? void 0 : i.entryPoint) === "media_picker" &&
        !m((i == null ? void 0 : i.silent) === !0)
        ? _.MEDIA_PICKER_GK
        : null;
    }
    function E(e, t, n, a, i) {
      if (r("gkx")("3496") && !r("gkx")("17013"))
        return { eligible: !0, reason: null };
      var l = L(
          e,
          t,
          n,
          a,
          babelHelpers.extends(
            { entryPoint: "l1", campaignTargeting: n.targeting },
            i,
          ),
        ),
        s = l == null;
      if (o("AdsGenAISpecUtils").isGenAIAds(a))
        return { eligible: !0, reason: null };
      if (l != null) {
        var u,
          c = R(l, t, a);
        r("AdsInterfacesLogger").logOnce({
          eventName: "ads_gen_ai__image_gen_l1_ineligible",
          data:
            ((u = {}),
            (u.ad_account_id = e.account_id),
            (u.adgroup_id = a.id),
            (u.metadata = c),
            u),
        });
      }
      return (
        o("AdsGenAISpecUtils").logSpecMismatch(a, l),
        { eligible: s, reason: l }
      );
    }
    function k() {
      return r("gkx")("526");
    }
    function I(e, t, n, o) {
      if ((n === void 0 && (n = !1), (t == null ? void 0 : t.adgroup) == null))
        return (T(e, t, "adgroup is null", o), !1);
      var a = L(e, t.campaignGroup, t.campaign, t.adgroup, {
        entryPoint: "media_picker",
        silent: n,
      });
      if (a != null) {
        var i = R(a, t.campaignGroup, t.adgroup);
        return (T(e, t, "ineligible: " + i, o), !1);
      }
      return (
        r("FBLogger")(
          "ads_gen_ai_experiences",
          "ads_gen_ai_image_gen_eligibility_check_pass",
        ),
        !0
      );
    }
    function T(e, t, n, o) {
      var a, i;
      (r("AdsInterfacesLogger").logOnce(
        Object.freeze({
          eventName: "ads_gen_ai__image_gen_media_picker_ineligible",
          data:
            ((i = {}),
            (i.ad_account_id = e.account_id),
            (i.adgroup_id =
              t == null || (a = t.adgroup) == null ? void 0 : a.id),
            (i.metadata = JSON.stringify({ reason: n, callsite: o })),
            i),
        }),
      ),
        r("FBLogger")(
          "ads_gen_ai_experiences",
          "ads_gen_ai_image_gen_eligibility_check_fail",
        ).warn(n));
    }
    function D(e) {
      var t;
      return ((t = e.creative) == null ? void 0 : t.product_set_id) == null;
    }
    function x() {
      return r("gkx")("20378");
    }
    function $(e, t) {
      e === void 0 && (e = !1);
      var n = e ? r("gkx")("24803") : r("gkx")("24804"),
        a = n;
      return (
        a ||
          o(
            "AdsCreativeGenAIVideoGenLoggingUtils",
          ).logVideoGenAnimationCheckIneligible(n, e, t),
        a
      );
    }
    function P() {
      return r("gkx")("5200");
    }
    function N() {
      return $(!1);
    }
    var M = [
      (e = r("AdsAPIOptimizationGoals")).VIDEO_VIEWS,
      e.POST_ENGAGEMENT,
      e.APP_INSTALLS_AND_OFFSITE_CONVERSIONS,
      e.LEAD_GENERATION,
      e.APP_INSTALLS,
      e.QUALITY_LEAD,
      e.CONVERSATIONS,
      e.MESSAGING_PURCHASE_CONVERSION,
      e.REPLIES,
      e.PROFILE_VISIT,
      e.PROFILE_AND_PAGE_ENGAGEMENT,
      e.PAGE_LIKES,
      e.VISIT_INSTAGRAM_PROFILE,
      e.AUTOMATIC_OBJECTIVE,
      e.ONSITE_CONVERSIONS,
      e.BRAND_AWARENESS,
      e.ENGAGED_USERS,
      e.EVENT_RESPONSES,
      e.IN_APP_VALUE,
      e.INCREMENTAL_OFFSITE_CONVERSIONS,
      e.MEANINGFUL_CALL_ATTEMPT,
      e.NONE,
      e.RESEARCH_POLL_RESPONSES,
      e.SUBSCRIBERS,
      e.ADVERTISER_SILOED_VALUE,
      e.OFFLINE_CONVERSIONS,
      e.ENGAGED_REACH,
      e.REMINDERS_SET,
    ];
    function w(e) {
      return r("gkx")("18560") &&
        (e.optimization_goal == null || M.includes(e.optimization_goal))
        ? _.NON_ELIGIBLE_OPTIMIZATION_GOAL_FOR_VIDEO_GEN
        : null;
    }
    function A(e, t, n, a) {
      if (r("gkx")("18561")) return { video_reason: null, image_reason: null };
      if (
        o("AdsGenAISpecUtils").isGenAIAdsWithGeneratedVideo(
          t == null ? void 0 : t.adgroup,
        )
      )
        return { video_reason: null, image_reason: null };
      if (w(t.campaign) != null)
        return {
          video_reason: F.INELIGIBLE_OPTIMIZATION_GOAL,
          image_reason: null,
        };
      if (a) return { video_reason: F.PRE_WIZARD_SETUP, image_reason: null };
      var i = E(e, t.campaignGroup, t.campaign, t.adgroup, {
        feature: "video_gen",
      });
      return i.eligible
        ? $(!1, {
            adgroupID: t.adgroup.id,
            adAccountID: e.account_id,
            callsite: "getVideoGenIneligibilityReasonInL1",
            isDuplicatedAdgroup: o(
              "AdsAPIAdgroupRecordUtils",
            ).isDuplicatedAdgroup(t.adgroup),
          })
          ? (n &&
              o("AdsCreativeGenAIVideoGenLoggingUtils").logL1MultiMediaEligible(
                t.adgroup.id,
              ),
            { video_reason: null, image_reason: null })
          : {
              video_reason: F.VIDEO_GEN_ANIMATION_INELIGIBLE,
              image_reason: null,
            }
        : {
            video_reason: F.GENAI_IMAGE_GEN_INELIGIBLE,
            image_reason: i.reason,
          };
    }
    var F = n("$InternalEnum")({
      GENAI_IMAGE_GEN_INELIGIBLE: "genai_image_gen_ineligible",
      MULTI_UPLOAD_AD: "multi_upload_ad",
      INELIGIBLE_OPTIMIZATION_GOAL: "ineligible_optimization_goal",
      PRE_WIZARD_SETUP: "pre_wizard_setup",
      VIDEO_GEN_ANIMATION_INELIGIBLE: "video_gen_animation_ineligible",
    });
    function O(e, t) {
      if (
        o("AdsGenAISpecUtils").isGenAIAdsWithGeneratedVideo(
          t == null ? void 0 : t.adgroup,
        )
      )
        return { video_reason: null, image_reason: null };
      if (w(t.campaign) != null)
        return {
          video_reason: F.INELIGIBLE_OPTIMIZATION_GOAL,
          image_reason: null,
        };
      var n =
        (t == null ? void 0 : t.adgroup) == null
          ? null
          : L(e, t.campaignGroup, t.campaign, t.adgroup, {
              entryPoint: "media_picker",
              silent: !0,
            });
      if (n != null)
        return { video_reason: F.GENAI_IMAGE_GEN_INELIGIBLE, image_reason: n };
      var a = $(!1, {
          adgroupID: t.adgroup.id,
          adAccountID: e.account_id,
          callsite: "getVideoGenIneligibilityReasonInMediaPicker",
          isDuplicatedAdgroup: o(
            "AdsAPIAdgroupRecordUtils",
          ).isDuplicatedAdgroup(t.adgroup),
        }),
        i = r("gkx")("11229");
      return (
        o(
          "AdsCreativeGenAIVideoGenLoggingUtils",
        ).logVideoGenAnimationGKComparison(a, i, {
          adgroupID: t.adgroup.id,
          adAccountID: e.account_id,
          callsite: "getVideoGenIneligibilityReasonInMediaPicker",
          isDuplicatedAdgroup: o(
            "AdsAPIAdgroupRecordUtils",
          ).isDuplicatedAdgroup(t.adgroup),
        }),
        a
          ? { video_reason: null, image_reason: null }
          : {
              video_reason: F.VIDEO_GEN_ANIMATION_INELIGIBLE,
              image_reason: null,
            }
      );
    }
    function B(e, t, r, a) {
      var i = $(!0),
        l = A(e, t, r, a),
        s = l.image_reason,
        u = l.video_reason;
      if (i) {
        var c = n("AdsCreativeGenAIVideoGenLoggingUtils"),
          d = c.logL1Eligible,
          m = c.logL1Ineligibility,
          p = n("GenAIMVPEntryPoint");
        u != null
          ? m(
              t,
              p.ADS_MANAGER__A_PLUS_C,
              o("AdsAPIAdgroupRecordUtils").isDuplicatedAdgroup(t.adgroup),
              o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t.adgroup),
              u,
              s != null ? s : null,
              t.campaign.optimization_goal,
            )
          : d(
              t,
              p.ADS_MANAGER__A_PLUS_C,
              o("AdsAPIAdgroupRecordUtils").isDuplicatedAdgroup(t.adgroup),
              o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t.adgroup),
              t.campaign.optimization_goal,
            );
      }
      return u == null;
    }
    function W(e, t) {
      var r = O(e, t),
        a = r.image_reason,
        i = r.video_reason;
      if (i != null) {
        var l = n("AdsCreativeGenAIVideoGenLoggingUtils"),
          s = l.logStepIneligible,
          u = n("GenAIMVPEntryPoint");
        s(
          t,
          u.ADS_MANAGER__MEDIA_PICKER,
          o("AdsAPIAdgroupRecordUtils").isDuplicatedAdgroup(t.adgroup),
          o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t.adgroup),
          i,
          t.campaign.optimization_goal,
          a != null ? a : null,
          a == null,
        );
      }
      return i == null;
    }
    function q() {
      return !0;
    }
    function U(e, t, n, o) {
      var a = t != null,
        i = { isSilent: a, loggingContext: n, source: o },
        l = r("justknobx")._("4678");
      if (!l) return (V("jk_killswitch", i), !1);
      var s = e == null ? void 0 : e.optimization_goal,
        u = [
          r("AdsAPIOptimizationGoals").COMPLETED_VIDEO_VIEWS,
          r("AdsAPIOptimizationGoals").THRUPLAY,
          r("AdsAPIOptimizationGoals").VIDEO_VIEWS,
          r("AdsAPIOptimizationGoals").VIDEO_LONG_VIEWS,
          r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        ];
      return s != null && u.includes(s)
        ? (V(
            "blocked_optimization_goal",
            babelHelpers.extends({}, i, { optimizationGoal: s }),
          ),
          !1)
        : (a === !0 ? r("gkx")("26444") : r("gkx")("26446"))
          ? (V("eligible", babelHelpers.extends({}, i, { gkTargetingV2: !0 })),
            !0)
          : (V(
              "v2_gk_ineligible",
              babelHelpers.extends({}, i, { gkTargetingV2: !1 }),
            ),
            !1);
    }
    function V(e, t) {
      var n,
        o = t.gkTargetingV2,
        a = t.isSilent,
        i = t.loggingContext,
        l = t.optimizationGoal,
        s = t.source,
        u =
          e === "eligible"
            ? "ads_gen_ai__v2i_eligible"
            : "ads_gen_ai__v2i_ineligible";
      r("AdsInterfacesLogger").logOnce(
        Object.freeze({
          eventName: u,
          data: babelHelpers.extends(
            {},
            i,
            ((n = {}),
            (n.metadata = JSON.stringify({
              filter_reason: e,
              is_silent: a,
              optimization_goal: l != null ? l : null,
              sales_segment_v2: null,
              destination_url: null,
              is_non_pdp: null,
              gk_targeting_v2: o != null ? o : null,
              source: s != null ? s : null,
            })),
            n),
          ),
        }),
      );
    }
    function H(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("12220") : r("gkx")("12193")
      );
    }
    function G(e) {
      e === void 0 && (e = !1);
      var t = e ? r("qex")._("2642") : r("qex")._("2757");
      return t === !0;
    }
    function z() {
      return r("gkx")("14844");
    }
    function j(e) {
      if ((e === void 0 && (e = !0), r("gkx")("4997"))) return 1;
      if (z()) return -1;
      var t = e ? r("qex")._("197") : r("qex")._("275"),
        n = r("gkx")("21609");
      return n && t != null ? t : -1;
    }
    var K = {
        adoption_gap_improvement: 0,
        image_adopters: 0,
        recipe_diversification: 0,
      },
      Q = new Map([
        [-1, K],
        [0, K],
        [
          1,
          {
            adoption_gap_improvement: 1,
            image_adopters: 0,
            recipe_diversification: 0,
          },
        ],
        [
          2,
          {
            adoption_gap_improvement: 1,
            image_adopters: 0,
            recipe_diversification: 1,
          },
        ],
        [
          3,
          {
            adoption_gap_improvement: 0,
            image_adopters: 2,
            recipe_diversification: 0,
          },
        ],
      ]);
    function X(e) {
      var t;
      if ((e === void 0 && (e = !0), j(e) !== 2)) return K;
      var n = e ? r("qex")._("5884") : r("qex")._("5885");
      return (t = Q.get(n != null ? n : -1)) != null ? t : K;
    }
    function Y(e) {
      return (e === void 0 && (e = !0), X(e).image_adopters);
    }
    function J(e) {
      return e === 1 || e === 2;
    }
    function Z() {
      return z() ? r("gkx")("26565") : j() === 2;
    }
    function ee(e) {
      e === void 0 && (e = !1);
      var t = te(e),
        n = t === c || t === d;
      return n;
    }
    function te(e) {
      e === void 0 && (e = !1);
      var t = e ? r("qex")._("5566") : r("qex")._("5567");
      return t === s ? c : t === u ? d : null;
    }
    function ne(e) {
      e === void 0 && (e = !1);
      var t = e ? r("qex")._("1761") : r("qex")._("1936");
      return t != null ? t : -1;
    }
    function re(e) {
      e === void 0 && (e = !1);
      var t = e ? r("qex")._("840") : r("qex")._("905");
      return t != null ? t : -1;
    }
    function oe(e) {
      return (
        e === void 0 && (e = !1),
        ne(e) === 3 ||
          re(e) ===
            o("AdsCreativeVideoGenPortfolioAdexUtils")
              .PORTFOLIO_EXPANSION_CACHING_TREATMENT
      );
    }
    function ae(e) {
      e === void 0 && (e = !1);
      var t = j(e);
      return t >= 0 ? (e ? r("gkx")("21144") : r("gkx")("21889")) : oe(e);
    }
    function ie() {
      return r("gkx")("19567");
    }
    function le(e) {
      e === void 0 && (e = !1);
      var t = e ? r("qex")._("5078") : r("qex")._("5079");
      return t != null ? t : -1;
    }
    function se(e) {
      return (e === void 0 && (e = !1), ee(e) || le(e) > 0);
    }
    function ue() {
      return r("gkx")("25185");
    }
    function ce() {
      return r("qex")._("742");
    }
    function de() {
      return r("gkx")("26490");
    }
    function me(e, t) {
      (e === void 0 && (e = !0), t === void 0 && (t = !1));
      var n = r("gkx")("20614");
      if (!(n || t)) return !1;
      var o = e ? r("qex")._("2829") : r("qex")._("2830"),
        a = e ? r("gkx")("5873") : r("gkx")("15372");
      return (o != null ? o : 0) > 0 && a;
    }
    function pe() {
      return r("gkx")("2247");
    }
    ((l.GenAIBackendTestPurpose = p),
      (l.GenAIEntryIneligiblityReason = _),
      (l.isExistingPostAdEligibleForVideoGen = y),
      (l.isEligibleForVideoGenTabInVideoCreation = C),
      (l.getIneligibleReasonForGenAI = L),
      (l.isGenAIEligible = E),
      (l.isVoiceoverRound2Eligible = k),
      (l.isGenAIEligibleInMediaPicker = I),
      (l.getIsStaticAd = D),
      (l.isEligibleForSourcingExplainabilityImprovement = x),
      (l.isEligibleForVideoGenAnimation = $),
      (l.isEligibleForL1VideoEditing = P),
      (l.isEligibleForMultiSceneProgressiveScripting = N),
      (l.getAdSetupIneligibleReasonForGenAIVideoGen = w),
      (l.checkAndLogVideoGenIneligibilityInL1 = B),
      (l.checkAndLogVideoGenIneligibilityInMediaPicker = W),
      (l.shouldShowIntentAtBAU = q),
      (l.isEligibleImageGenInVideoAds = U),
      (l.isEligibleForMultisceneShadowTraffic = H),
      (l.isFlexibleInfraEnabled = G),
      (l.isUnifiedL1Targeted = z),
      (l.getGrabAndGoTreatment = j),
      (l.getGrabAndGoV2QEConfig = X),
      (l.getImageAdoptersUpsellTreatment = Y),
      (l.isGrabAndGoTreatment = J),
      (l.isEligibleForVideoEnhancement = Z),
      (l.isEligibleForOfflineGenMediumIntentExperiment = ee),
      (l.getOfflineGenMediumIntentExperimentArm = te),
      (l.getPortfolioAdexRound3QETreatment = ne),
      (l.isEligibleForPortfolioCaching = oe),
      (l.isEligibleForVideoGenSessionCaching = ae),
      (l.isMultiScenePreGenToastEnabled = ie),
      (l.shouldUseV2Design = se),
      (l.isEligibleForLanguageExpansion = ue),
      (l.getMultiSceneAssetGenerationModel = ce),
      (l.isEligibleForServiceExpansion = de),
      (l.isPortfolioInsightsV2Enabled = me),
      (l.isV2IEligibleForDynamicHeight = pe));
  },
  98,
);
