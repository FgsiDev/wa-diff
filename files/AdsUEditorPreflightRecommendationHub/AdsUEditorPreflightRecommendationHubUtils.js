__d(
  "AdsUEditorPreflightRecommendationHubUtils",
  [
    "AdsAdoptSingleMediaAdFormatBundleQEUtils",
    "AdsApluscStandardEnhancementBundleQEUtils",
    "AdsApluscStandardEnhancementsBundleVisibilityUtils",
    "AdsPreflightRecommendationPluginType",
    "AdsUEditorPreflightRecommendationHubEditingQEUtils",
    "AdsUEditorPreflightRecommendationPerformanceScoreUtils",
    "gkx",
    "memoize",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        if (!r("gkx")("13496")) return t;
        var e = new Map(t);
        return (
          ["atleast_six_placements", "advantage_plus_placement"].forEach(
            function (r) {
              var o = t.get(r);
              if (o != null) {
                var a = o.filter(function (e) {
                  return n.get(e) === !1;
                });
                a.length === 0 ? e.delete(r) : e.set(r, a);
              }
            },
          ),
          e
        );
      },
      s = ["aplusc_standard_enhancements_bundle"],
      u = function (t, n, a, i, l, u, d, m, p) {
        var e =
          t.find(function (e) {
            return e.key === "advantage_plus_creative" && n.has(e.key);
          }) != null;
        return t.filter(function (t) {
          if (!n.has(t.key)) return !1;
          if (t.key === "product_extensions_guidance") {
            var _,
              C,
              b =
                (_ = n.get("adopt_single_media_ad_format_bundle")) != null
                  ? _
                  : [],
              v = (C = n.get(t.key)) != null ? C : [],
              S =
                b.length > 0 &&
                v.length > 0 &&
                v.every(function (e) {
                  return b.includes(e);
                }) &&
                o(
                  "AdsAdoptSingleMediaAdFormatBundleQEUtils",
                ).getIsPreflightFormatsBundleContainerEnabled() === !0 &&
                o(
                  "AdsAdoptSingleMediaAdFormatBundleQEUtils",
                ).getIsInPreflightFormatsBundleTestGroup(
                  l == null ? void 0 : l.account_id,
                  u.adgroupIDs,
                  !1,
                ) === !0;
            if (S) return !1;
          }
          if (i != null) {
            if (f.includes(t.key))
              return t.getVisibility(
                a,
                l,
                u,
                d,
                m,
                p == null ? void 0 : p.get(t.key),
              );
            var R = o(
              "AdsUEditorPreflightRecommendationPerformanceScoreUtils",
            ).getPerformanceScoreForRecType(
              [t.recommendationTypeForLogging],
              i,
            );
            if (R === 0) {
              if (r("gkx")("8042"))
                return t.getVisibility(
                  a,
                  l,
                  u,
                  d,
                  m,
                  p == null ? void 0 : p.get(t.key),
                );
              if (a === !0 && s.includes(t.key)) {
                var L;
                c(l == null ? void 0 : l.account_id, u.adgroupIDs, t.key, p, a);
                var E =
                    p != null && p.has(t.key)
                      ? p == null
                        ? void 0
                        : p.get(t.key)
                      : null,
                  k = (
                    (L = E == null ? void 0 : E.child_rec_types) != null
                      ? L
                      : []
                  ).some(function (e) {
                    return e !== "aplusc_flexible_media";
                  });
                k &&
                  o(
                    "AdsApluscStandardEnhancementBundleQEUtils",
                  ).getIsInPreflightApluscBundleTestGroup(
                    l == null ? void 0 : l.account_id,
                    u.adgroupIDs,
                    a,
                    o(
                      "AdsApluscStandardEnhancementBundleQEUtils",
                    ).getApluscBundlePocketDeltoidVariant(e),
                  );
              }
              return !1;
            }
          }
          if (
            (m === !0 && g.includes(t.key)) ||
            (m === !0 &&
              h.includes(t.key) &&
              !o(
                "AdsUEditorPreflightRecommendationHubEditingQEUtils",
              ).isPassingEditingBundleInventoryGK())
          )
            return !1;
          if (
            t.key === "asc_automation" ||
            t.key === "cbo2_advantage_campaign_budget"
          )
            return t.getVisibility(
              a,
              l,
              u,
              d,
              m,
              p == null ? void 0 : p.get(t.key),
            );
          if (
            !y.includes(t.key) &&
            t.key !== "wtwa_upsell_in_duplication" &&
            t.key !== "web_engaged_view_conversions" &&
            t.key !== "advantage_plus_creative" &&
            t.key !== "aplusc_standard_enhancements_bundle" &&
            t.key !== "adopt_creative_audience_pairing" &&
            t.key !== "lead_ads_dfca_lookalike_adoption" &&
            t.key !== "adopt_related_media_suggestions" &&
            t.key !== "advantage_device_guidance"
          )
            return !0;
          if (t.key === "aplusc_standard_enhancements_bundle") {
            var I,
              T =
                c(
                  l == null ? void 0 : l.account_id,
                  u.adgroupIDs,
                  t.key,
                  p,
                  a,
                ) === !0,
              D =
                p != null && p.has(t.key)
                  ? p == null
                    ? void 0
                    : p.get(t.key)
                  : null,
              x = !1,
              $ = (
                (I = D == null ? void 0 : D.child_rec_types) != null ? I : []
              ).some(function (e) {
                return e !== "aplusc_flexible_media";
              });
            $ &&
              (x =
                o(
                  "AdsApluscStandardEnhancementBundleQEUtils",
                ).getIsInPreflightApluscBundleTestGroup(
                  l == null ? void 0 : l.account_id,
                  u.adgroupIDs,
                  a,
                  o(
                    "AdsApluscStandardEnhancementBundleQEUtils",
                  ).getApluscBundlePocketDeltoidVariant(e),
                ) === !0);
            var P = o(
              "AdsApluscStandardEnhancementsBundleVisibilityUtils",
            ).getDisplayableChildren({
              serverEligibleCreativeFeatures:
                D == null ? void 0 : D.eligible_creative_features,
              serverChildRecTypes: D == null ? void 0 : D.child_rec_types,
              cfpToolStates: null,
              enrolledCreativeFeatures: [],
              isApluscSEBundleTest: x,
              isApluscFMTest: T,
            });
            return (T || x) && P.recTypes.length > 0;
          }
          return t.getVisibility(
            a,
            l,
            u,
            d,
            m,
            p == null ? void 0 : p.get(t.key),
          );
        });
      };
    function c(e, t, n, r, a) {
      if (n === "aplusc_standard_enhancements_bundle") {
        var i,
          l = r != null && r.has(n) ? (r == null ? void 0 : r.get(n)) : null;
        if (
          l != null &&
          (i = l.child_rec_types) != null &&
          i.includes("aplusc_flexible_media") &&
          o(
            "AdsApluscStandardEnhancementBundleQEUtils",
          ).getIsInApluscFlexibleMediaCompositeQETestGroup(
            e,
            t,
            a,
            "pfr_hub",
          ) === !0
        )
          return !0;
      }
      return !1;
    }
    var d = r("memoize")(function () {
        return r("uuidv4")();
      }),
      m = r("memoize")(function () {
        return r("uuidv4")();
      });
    function p(e) {
      switch (e) {
        case o("AdsPreflightRecommendationPluginType").PFRGuidanceTypes
          .RECOMMENDATION:
          return "recommendation-personal";
        case o("AdsPreflightRecommendationPluginType").PFRGuidanceTypes
          .RECOMMENDATION_NEW_PRODUCT_AND_FEATURES:
          return "new-products-and-features";
        case o("AdsPreflightRecommendationPluginType").PFRGuidanceTypes.ERROR:
          return "error";
        case o("AdsPreflightRecommendationPluginType").PFRGuidanceTypes.WARNING:
          return "warning";
      }
    }
    var _ = function (t, n, r, o, a, i) {
        var e = t.get("advantage_plus_audience"),
          l = e == null;
        e != null && e.length > 0 && (l = e.length < r.length);
        var s = t.get("advantage_plus_placement"),
          u = t.get("atleast_six_placements"),
          c = t.get("cbo2_advantage_campaign_budget"),
          d = t.get("ad_set_budget_sharing_guidance"),
          m = n.get("asc_automation"),
          p = !1,
          _ = !1,
          f = !1;
        if (m) {
          var g;
          (g = m.extra_data_asc) == null ||
            g.forEach(function (e) {
              ((e == null
                ? void 0
                : e.advantage_campaign_budget_eligible_ids.length) >= 1 &&
                (f = !0),
                (e == null
                  ? void 0
                  : e.advantage_plus_audience_eligible_ids.length) >= 1 &&
                  (_ = !0),
                (e == null
                  ? void 0
                  : e.automatic_placements_eligible_ids.length) >= 1 &&
                  (p = !0));
            });
        }
        var h = r.length === 1;
        return {
          isAdvantageAudienceEnabled: l && !_,
          isAdvantageBudgetEnabled:
            (c == null && d == null && i === !0 && !f) || h,
          isAdvantagePlacementEnabled: s == null && u == null && !p && !o,
        };
      },
      f = [
        "conversion_leads_optimization",
        "signals_down_funnel_event_optimization",
        "ctx_ctmpo_upgrade",
        "broadgeo_am_upsell_guidance",
        "ctx_multi_message_destination",
        "vo_vt_1d_defaulting",
        "ig_surfaces_manual_placements",
        "gen_ai_mvp",
        "ctx_ctwapo_upgrade",
        "ctm_leads_optimization_upsell",
        "shops_ads_saoff",
        "pixelless_lpv_optimization_goal",
        "catalog_dynamic_media",
        "ctx_value_optimization_ctm_po_to_vo",
        "website_and_instant_form_l2",
        "in_app_ad_impression_roas_android",
        "partnership_ads_dynamic_header",
        "promo_ads_upsell_guidance",
        "email_capture_upsell_guidance",
        "website_and_calls_upsell",
        "ctd_purchase_optimization",
        "ctd_leads_optimization",
        "b2p_messaging_upsell",
        "opt_into_chat_on_whatsapp_post_lead",
        "web_engaged_view_conversions",
        "call_ads_l2_dayparting",
        "product_extensions_guidance",
        "adopt_sms_verification_for_lead_quality",
        "adopt_single_media_ad_format_bundle",
        "adopt_related_media_suggestions",
        "marketing_messages",
        "placements_bundle",
        "advantage_plus_placement",
        "atleast_six_placements",
        "advantage_device_guidance",
      ],
      g = ["mixed_formats"],
      h = [
        "ctx_multi_message_destination",
        "threeco_web_plus_app_upsell",
        "lead_ads",
        "offsite_conversion",
        "conversion_leads_optimization",
      ],
      y = [
        "delivery_dependent_creative_limited",
        "creative_fatigue",
        "scale_good_campaign",
        "budget_limited",
      ];
    function C(e, t, n, r) {
      switch (e) {
        case "campaign":
          return t;
        case "ad_set":
          return n;
        case "ad":
          return r;
        default:
          return [];
      }
    }
    ((l.filterAdvantagePlusPlacementCampaignGuidance = e),
      (l.filterPlugins = u),
      (l.getPFRHubRequestUUID = d),
      (l.getPFRHubDraftSyncRequestUUID = m),
      (l.getGuidanceCardStatusFromGuidanceType = p),
      (l.computeAdvantageStateFromEligibleGuidanceMap = _),
      (l.getAdObjectsForAdObjectLevel = C));
  },
  98,
);
