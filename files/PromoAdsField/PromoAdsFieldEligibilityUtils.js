__d(
  "PromoAdsFieldEligibilityUtils",
  [
    "AdsMetadataConnectedSourcesUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsRegulatedCategory",
    "IncentivesAdsManagerUtils",
    "OffsiteCustomEventType",
    "PromoAdPlacementEligibleFacebookPositions",
    "PromoAdPlacementEligibleInstagramPositions",
    "PromoAdsAdsManagerCouponCodeUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "getJSEnumSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r;
      n === void 0 && (n = !1);
      var a = e.adgroup.id,
        i =
          (r = t == null ? void 0 : t.account_id) != null
            ? r
            : e.adgroup.account_id,
        l = o(
          "IncentivesAdsManagerUtils",
        ).getAdOptimizationGoalsObjectivePromotedObjectType(e, t),
        c = l[0],
        d = l[1],
        m = l[2];
      return s(e, t, n)
        ? d === "WEB_AND_APP"
          ? u(e, t, n)
          : o(
                "IncentivesAdsManagerUtils",
              ).PA_EXPANDED_SUPPORTED_PROMOTED_OBJECT_TYPES.includes(d)
            ? (n &&
                o("IncentivesAdsManagerUtils").logEvent(
                  o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                    .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
                  i,
                  a,
                  o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                    .ELIGIBLE,
                  null,
                  !0,
                ),
              !0)
            : (n &&
                o("IncentivesAdsManagerUtils").logEvent(
                  o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                    .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
                  i,
                  a,
                  o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                    .PROMOTED_OBJECT_NOT_ELIGIBLE,
                  d,
                  !0,
                ),
              !1)
        : !1;
    }
    function s(e, t, n) {
      var a, i, l, s, u, d;
      n === void 0 && (n = !1);
      var m = e.adgroup.id,
        p =
          (a = t == null ? void 0 : t.account_id) != null
            ? a
            : e.adgroup.account_id,
        _ =
          (i = e.campaignGroup.buy_with_integration_partner) != null
            ? i
            : "NONE",
        f = e.adgroup;
      if (
        _ !== "NONE" ||
        ((l = f.creative) == null || (l = l.destination_spec) == null
          ? void 0
          : l.destination_type) === "WEBSITE_AND_SHOP"
      )
        return (
          n &&
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
              p,
              m,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .BUY_WITH_INTEGRATION_NOT_ELIGIBLE,
              null,
              !0,
            ),
          !1
        );
      if (!c(e, t, n)) return !1;
      if (
        r("justknobx")._("4219") &&
        o("IncentivesAdsManagerUtils").isCreativeFormatBlockedForPromoAds(e)
      )
        return (
          n &&
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
              p,
              m,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .CREATIVE_FORMAT_NOT_ELIGIBLE,
              null,
              !0,
            ),
          !1
        );
      var g = o(
          "IncentivesAdsManagerUtils",
        ).getAdOptimizationGoalsObjectivePromotedObjectType(e, t),
        h = g[0],
        y = g[1],
        C = g[2];
      if (!o("IncentivesAdsManagerUtils").SUPPORTED_AD_OBJECTIVES.includes(h))
        return (
          n &&
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
              p,
              m,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .OBJECTIVE_NOT_ELIGIBLE,
              h,
              !0,
            ),
          !1
        );
      var b = e.campaignGroup.objective;
      if (!o("IncentivesAdsManagerUtils").SUPPORTED_AD_OBJECTIVES.includes(b))
        return (
          n &&
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
              p,
              m,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .UNSUPPORTED_OBJECTIVE,
              b,
              !0,
            ),
          !1
        );
      if (
        !o(
          "IncentivesAdsManagerUtils",
        ).SUPPORTED_AD_OPTIMIZATION_GOALS.includes(C)
      )
        return (
          n &&
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
              p,
              m,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .OPTIMIZATION_GOAL_NOT_ELIGIBLE,
              C,
              !0,
            ),
          !1
        );
      var v = e.campaign,
        S = e.campaignGroup,
        R = (s = v.promoted_object) == null ? void 0 : s.custom_event_type;
      if (
        (u = v.promoted_object) != null &&
        (u = u.omnichannel_object) != null &&
        u.offline
      )
        R = "PURCHASE";
      else if (
        R == null &&
        (d = v.promoted_object) != null &&
        (d = d.omnichannel_object) != null &&
        d.app
      ) {
        var L,
          E =
            (L = v.promoted_object) == null ||
            (L = L.omnichannel_object) == null ||
            (L = L.pixel) == null ||
            (L = L.first()) == null
              ? void 0
              : L.toJS();
        R = r("getJSEnumSafe")(
          r("OffsiteCustomEventType"),
          E == null ? void 0 : E.custom_event_type,
        );
      }
      if (
        R == null ||
        !o(
          "IncentivesAdsManagerUtils",
        ).SUPPORTED_CUSTOM_CONVERSION_EVENTS.includes(R)
      ) {
        var k = r("gkx")("729");
        if (!k)
          return (
            n &&
              o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
                p,
                m,
                o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                  .CONVERSION_EVENT_NOT_ELIGIBLE,
                R,
                !0,
              ),
            !1
          );
      }
      if (
        S.special_ad_categories &&
        S.special_ad_categories.size > 0 &&
        !S.special_ad_categories.includes(r("AdsRegulatedCategory").NONE)
      ) {
        if (n) {
          var I,
            T = S.special_ad_categories;
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
            p,
            m,
            o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
              .SPECIAL_AD_CATEGORIES,
            (I = T == null ? void 0 : T.toArray().join(",")) != null ? I : null,
            !0,
          );
        }
        return !1;
      }
      var D = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(v),
        x = Array.from(
          r("PromoAdPlacementEligibleFacebookPositions").members(),
        ).some(function (e) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            D,
            "facebook",
            e,
          );
        }),
        $ = Array.from(
          r("PromoAdPlacementEligibleInstagramPositions").members(),
        ).some(function (e) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            D,
            "instagram",
            e,
          );
        }),
        P = x || $;
      if (!P) {
        if (n) {
          var N;
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
            p,
            m,
            o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
              .PLACEMENT_NOT_ELIGIBLE,
            (N = D.publisher_platforms) == null ? void 0 : N.join(","),
            !0,
          );
        }
        return !1;
      }
      var M = D.device_platforms,
        w =
          M != null &&
          M.some(function (e) {
            return o(
              "IncentivesAdsManagerUtils",
            ).SUPPORTED_DEVICE_PLATFORM.includes(e);
          });
      return w
        ? o("IncentivesAdsManagerUtils").isCallAddOnEnabled(e)
          ? (n &&
              o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
                p,
                m,
                o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                  .CALL_ADD_ON_ENABLED,
                null,
                !0,
              ),
            !1)
          : o("IncentivesAdsManagerUtils").isMessageAddOnEnabled(e)
            ? (n &&
                o("IncentivesAdsManagerUtils").logEvent(
                  o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                    .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
                  p,
                  m,
                  o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                    .MESSAGE_ADD_ON_ENABLED,
                  null,
                  !0,
                ),
              !1)
            : o("IncentivesAdsManagerUtils").isLeadgenInstantFormAddOnEnabled(e)
              ? (n &&
                  o("IncentivesAdsManagerUtils").logEvent(
                    o("PromoAdsAdsManagerCouponCodeUtils")
                      .PromoAdsAdsManagerEvent
                      .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
                    p,
                    m,
                    o("IncentivesAdsManagerUtils")
                      .ShouldShowIncentiveAdFieldSatus
                      .LEAD_GEN_FORM_ADD_ON_ENABLED,
                    null,
                    !0,
                  ),
                !1)
              : !0
        : (n &&
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
              p,
              m,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .PLATFORM_NOT_ELIGIBLE,
              M == null ? void 0 : M.join(","),
              !0,
            ),
          !1);
    }
    function u(e, t, n) {
      var r, a;
      n === void 0 && (n = !1);
      var i = e.adgroup.id,
        l =
          (r = t == null ? void 0 : t.account_id) != null
            ? r
            : e.adgroup.account_id,
        s = e.adgroup;
      if (
        ((a = s.creative) == null ? void 0 : a.applink_treatment) ===
        "deeplink_with_appstore_fallback"
      ) {
        if (n) {
          var u;
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
            l,
            i,
            o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
              .LANDING_DESTINATION_NOT_ELIGIBLE,
            (u = s.creative) == null ? void 0 : u.applink_treatment,
            !0,
          );
        }
        return !1;
      }
      return (
        n &&
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
            l,
            i,
            o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
              .ELIGIBLE,
            null,
            !0,
          ),
        !0
      );
    }
    function c(e, t, n) {
      var r;
      n === void 0 && (n = !1);
      var a = e.adgroup.id,
        i =
          (r = t == null ? void 0 : t.account_id) != null
            ? r
            : e.adgroup.account_id,
        l = e.adgroup;
      return !o(
        "IncentivesAdsManagerUtils",
      ).isMovingAMStaticAdsPromoModuleEnabled() &&
        o("IncentivesAdsManagerUtils").isCreativeEndStateEligibleByExperiment(
          e.campaign,
          l,
          e.campaignGroup,
        ) &&
        !o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForPromotionsByCampaignAndAdgroup(
          e.campaign,
          e.campaignGroup,
          l,
        )
        ? (n &&
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_SHOULD_SHOW_PROMO_AD_FIELD,
              i,
              a,
              o("IncentivesAdsManagerUtils").ShouldShowIncentiveAdFieldSatus
                .CES_CONNECTED_SOURCES_MISMATCH,
              null,
              !0,
            ),
          !1)
        : !0;
    }
    ((l.shouldShowPromoAdField = e), (l.shouldShowPromoAdFieldForWebApp = u));
  },
  98,
);
