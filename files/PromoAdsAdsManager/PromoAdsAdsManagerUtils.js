__d(
  "PromoAdsAdsManagerUtils",
  [
    "AdsPromotedObjectTypes",
    "AdsUEditorUtils",
    "IncentivesAdsManagerUtils",
    "LocalDate",
    "PromoAdsAdsManagerCouponCodeUtils",
    "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsFieldEligibilityUtils",
    "Timezone",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = null;
      return (
        t == null
          ? (r = o("IncentivesAdsManagerUtils")
              .ShouldEnablePromoAdToggleByDefaultStatus
              .AD_ACCOUNT_STICKY_SETTING_IS_NOT_LOADED)
          : t.is_promo_ad_account_default_on_blocked
            ? (r = o("IncentivesAdsManagerUtils")
                .ShouldEnablePromoAdToggleByDefaultStatus.AD_ACCOUNT_IS_BLOCKED)
            : t.is_promo_ad_account_default_on_in_cooldown &&
              (r = o("IncentivesAdsManagerUtils")
                .ShouldEnablePromoAdToggleByDefaultStatus
                .AD_ACCOUNT_IS_IN_COOLDOWN),
        o("IncentivesAdsManagerUtils").logEvent(
          o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
            .PROMO_ADS_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT,
          (n = e == null ? void 0 : e.account_id) != null ? n : "null",
          "null",
          r != null
            ? r
            : o("IncentivesAdsManagerUtils")
                .ShouldEnablePromoAdToggleByDefaultStatus
                .AD_ACCOUNT_SHOULD_ENABLE_DEFAULT_OPT_IN,
          null,
          !0,
        ),
        r
      );
    }
    function s(e) {
      return r("immutable").Set(
        e
          .map(function (e) {
            var t = e.adgroup;
            return d(t) ? t.id : null;
          })
          .filter(Boolean),
      );
    }
    function u(e, t, n, o) {
      return r("immutable").Set(
        e
          .map(function (e) {
            var r,
              a = e.adgroup,
              i = n(a.id),
              l = i.isDone(),
              s =
                ((r = i.getValue()) == null ? void 0 : r.turn_off_promo) === !0,
              u = o.includes(a.id);
            return m(a.id, t, s || u, l) ? null : a.id;
          })
          .filter(Boolean),
      );
    }
    function c(e, t, n, o) {
      return r("immutable").Set(
        e
          .map(function (e) {
            var r,
              a = e.adgroup,
              i = n(a.id),
              l = i.isDone(),
              s =
                ((r = i.getValue()) == null ? void 0 : r.turn_off_email) === !0,
              u = o.includes(a.id);
            return p(a.id, a.created_time, t, s || u, l) ? null : a.id;
          })
          .filter(Boolean),
      );
    }
    function d(e) {
      var t = e.created_time;
      return t != null
        ? r("LocalDate")
            .fromISOString(t)
            .addMonths(2)
            .subtractDays(1)
            .isBefore(r("LocalDate").today(o("Timezone").UTC))
        : !1;
    }
    function m(e, t, n, r) {
      var a;
      if (!r) return !1;
      if (n) {
        var i;
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT,
            (i = t == null ? void 0 : t.account_id) != null ? i : "null",
            e,
            o("IncentivesAdsManagerUtils")
              .ShouldEnablePromoAdToggleByDefaultStatus
              .ADGROUP_TURN_OFF_DEFAULT_OPT_IN_BY_STICKY_SETTING,
            null,
            !0,
          ),
          !1
        );
      }
      return (
        o("IncentivesAdsManagerUtils").logEvent(
          o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
            .PROMO_ADS_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT,
          (a = t == null ? void 0 : t.account_id) != null ? a : "null",
          e,
          o("IncentivesAdsManagerUtils")
            .ShouldEnablePromoAdToggleByDefaultStatus
            .ADGROUP_SHOULD_ENABLE_DEFAULT_OPT_IN,
          null,
          !0,
        ),
        !0
      );
    }
    function p(e, t, n, a, i) {
      var l;
      if (t != null) {
        var s = r("LocalDate")
          .fromISOString(t)
          .addMonths(2)
          .subtractDays(1)
          .isBefore(r("LocalDate").today(o("Timezone").UTC));
        if (s) {
          var u;
          return (
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_EMAIL_CAPTURE_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT,
              (u = n == null ? void 0 : n.account_id) != null ? u : "null",
              e,
              o("IncentivesAdsManagerUtils")
                .ShouldEnablePromoAdToggleByDefaultStatus
                .ADGROUP_TURN_OFF_DEFAULT_OPT_IN_BY_CREATION_TIME,
              null,
              !0,
            ),
            !1
          );
        }
      }
      if (!i) return !1;
      if (a) {
        var c;
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT,
            (c = n == null ? void 0 : n.account_id) != null ? c : "null",
            e,
            o("IncentivesAdsManagerUtils")
              .ShouldEnablePromoAdToggleByDefaultStatus
              .ADGROUP_TURN_OFF_DEFAULT_OPT_IN_BY_STICKY_SETTING,
            null,
            !0,
          ),
          !1
        );
      }
      return (
        o("IncentivesAdsManagerUtils").logEvent(
          o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
            .PROMO_ADS_EMAIL_CAPTURE_SHOULD_ENABLE_DEFAULT_OPT_IN_FOR_AD_ACCOUNT,
          (l = n == null ? void 0 : n.account_id) != null ? l : "null",
          e,
          o("IncentivesAdsManagerUtils")
            .ShouldEnablePromoAdToggleByDefaultStatus
            .ADGROUP_SHOULD_ENABLE_DEFAULT_OPT_IN,
          null,
          !0,
        ),
        !0
      );
    }
    function _(e, t) {
      if (!o("PromoAdsFieldEligibilityUtils").shouldShowPromoAdField(e, t))
        return !1;
      var n = o(
          "IncentivesAdsManagerUtils",
        ).getAdOptimizationGoalsObjectivePromotedObjectType(e, t),
        r = n[0],
        a = n[1],
        i = n[2];
      return !!o("IncentivesAdsManagerUtils")
        .COMMON_SUPPORTED_PROMOTED_OBJECT_TYPES.map(function (e) {
          return e;
        })
        .includes(a);
    }
    function f(e, t, n, o, a, i) {
      return (
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        g(
          null,
          e,
          t,
          r("isTruthy")(n),
          (n == null ? void 0 : n.is_unique_code_offer) === !0,
          o,
          a,
          i,
        )
      );
    }
    function g(e, t, n, a, i, l, s, u) {
      return (
        s === void 0 && (s = !1),
        u === void 0 && (u = !1),
        !n ||
        l === r("AdsPromotedObjectTypes").WEB_AND_APP ||
        o("PromoAdsAdsManagerGatingAndExperimentUtils").isPharmaHoldout()
          ? !1
          : a
            ? i
              ? (o("IncentivesAdsManagerUtils").logEvent(
                  "should_show_promo_email_capture_field",
                  e,
                  t,
                  o("IncentivesAdsManagerUtils")
                    .ShouldShowPromoEmailCaptureFieldSatus.ELIGIBLE_UNIQUE_CODE,
                ),
                !0)
              : o(
                    "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
                  ).isGenericCodeOpenBetaEnabled() ||
                  o(
                    "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
                  ).isEmailCaptureGenericCodeEligible(s)
                ? (o("IncentivesAdsManagerUtils").logEvent(
                    "should_show_promo_email_capture_field",
                    e,
                    t,
                    o("IncentivesAdsManagerUtils")
                      .ShouldShowPromoEmailCaptureFieldSatus
                      .ELIGIBLE_GENERIC_CODE,
                  ),
                  !0)
                : (o("IncentivesAdsManagerUtils").logEvent(
                    "should_show_promo_email_capture_field",
                    e,
                    t,
                    o("IncentivesAdsManagerUtils")
                      .ShouldShowPromoEmailCaptureFieldSatus
                      .AD_ACCOUNT_NOT_ELIGIBLE,
                  ),
                  !1)
            : u
              ? !0
              : (o("IncentivesAdsManagerUtils").logEvent(
                  "should_show_promo_email_capture_field",
                  e,
                  t,
                  o("IncentivesAdsManagerUtils")
                    .ShouldShowPromoEmailCaptureFieldSatus.PAGE_NOT_ELIGIBLE,
                ),
                !1)
      );
    }
    function h(e) {
      if (
        o("PromoAdsFieldEligibilityUtils").shouldShowPromoAdField(
          e.adObjects,
          e.account,
          !0,
        )
      ) {
        var t = o(
            "IncentivesAdsManagerUtils",
          ).isCreativeEndStateEligibleByExperiment(
            e.adObjects.campaign,
            e.adObjects.adgroup,
            e.adObjects.campaignGroup,
          ),
          n =
            t &&
            !o(
              "IncentivesAdsManagerUtils",
            ).isMovingAMStaticAdsPromoModuleEnabled()
              ? { promoAdsPostCESAdCopyCodeNoticeField: !0 }
              : { promoAdField: !0 };
        return o("AdsUEditorUtils").boolMapToSet(r("immutable").Map(n));
      } else return r("immutable").Set();
    }
    function y(e) {
      var t,
        n,
        r,
        o,
        a = e.creative;
      if (a == null) return null;
      if (
        ((t = a.object_story_spec) == null ||
        (t = t.link_data) == null ||
        (t = t.call_to_action) == null
          ? void 0
          : t.type) != null
      )
        return a.object_story_spec.link_data.call_to_action.type;
      if (
        ((n = a.object_story_spec) == null ||
        (n = n.video_data) == null ||
        (n = n.call_to_action) == null
          ? void 0
          : n.type) != null
      )
        return a.object_story_spec.video_data.call_to_action.type;
      if (
        ((r = a.object_story_spec) == null ||
        (r = r.template_data) == null ||
        (r = r.call_to_action) == null
          ? void 0
          : r.type) != null
      )
        return a.object_story_spec.template_data.call_to_action.type;
      if (a.call_to_action_type != null) return a.call_to_action_type;
      var i = (o = a.asset_feed_spec) == null ? void 0 : o.call_to_action_types;
      return i != null && !i.isEmpty() ? i.first() : null;
    }
    ((l.shouldEnablePromoAdToggleByDefault = e),
      (l.getOldAdgroupIDs = s),
      (l.getPromoAdsDefaultOptInExclusiveAdgroupIDs = u),
      (l.getEmailCaptureDefaultOptInExclusiveAdgroupIDs = c),
      (l.shouldShowEmailCaptureFieldForAdgroupAccordingToFormat = _),
      (l.shouldShowEmailCaptureFieldForAdgroup = f),
      (l.getPromoAdField = h),
      (l.getCallToActionTypeFromAdgroup = y),
      (l.shouldShowPromoAdField = o(
        "PromoAdsFieldEligibilityUtils",
      ).shouldShowPromoAdField),
      (l.shouldShowPromoAdFieldForWebApp = o(
        "PromoAdsFieldEligibilityUtils",
      ).shouldShowPromoAdFieldForWebApp));
  },
  98,
);
