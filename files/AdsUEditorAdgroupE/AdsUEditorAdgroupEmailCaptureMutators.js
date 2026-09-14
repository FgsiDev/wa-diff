__d(
  "AdsUEditorAdgroupEmailCaptureMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPageUtils",
    "AdsPromoAdsEmailCaptureSettingGKStore",
    "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupSetEmailCaptureOfferDetailsAction",
    "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorHostIDs",
    "FBJSON",
    "IncentivesAdsManagerUtils",
    "ODS",
    "PromoAdsAdSpecUtils",
    "PromoAdsAdsManagerCouponCodeUtils",
    "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerUtils",
    "PromoAdsDoiCooldownGatingUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "gkx",
    "immutable",
    "isFalsey",
    "promiseDone",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r, a, i, l, s) {
      (n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        i === void 0 && (i = null),
        l === void 0 &&
          (l = function () {
            return !0;
          }),
        s === void 0 &&
          (s = function () {
            return !0;
          }));
      var c = {
        emailCaptureSetting: t,
        shouldTurnOffIfInvalid: n,
        isDefaultOptIn: r,
        defaultOptInCallsite: a,
        productCatalogId: i,
        pageID: o("AdsPageUtils").getPageID(e),
        allowedPromoOfferSources: o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(e),
        offerDetails: o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getOfferDetailsArray(e),
      };
      if (
        (o("IncentivesAdsManagerUtils").logEvent(
          o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
            .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SETTING_ATTEMPT,
          e.account_id,
          e.id,
          null,
          o("FBJSON").stringify(c),
          !0,
        ),
        t == null || t.is_unique_code_offer == null)
      )
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
            e.account_id,
            e.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureMutateFromSettingAttemptFailureReason
              .INVALID_SETTING,
            o("FBJSON").stringify(c),
            !0,
          ),
          n
            ? o(
                "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
              ).turnOffEmailCapture(e, r, a)
            : e
        );
      if (t.is_unique_code_offer === !0)
        return t.email_offer_type == null
          ? (o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
              e.account_id,
              e.id,
              o("IncentivesAdsManagerUtils")
                .EmailCaptureMutateFromSettingAttemptFailureReason
                .INVALID_SETTING,
              o("FBJSON").stringify(c),
              !0,
            ),
            o(
              "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
            ).turnOffEmailCapture(e, r, a))
          : l()
            ? (o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SETTING_ATTEMPT_SUCCESS,
                e.account_id,
                e.id,
                null,
                o("FBJSON").stringify(c),
                !0,
              ),
              u(e, r, a, i))
            : (o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
                e.account_id,
                e.id,
                o("IncentivesAdsManagerUtils")
                  .EmailCaptureMutateFromSettingAttemptFailureReason
                  .EXPERIMENT_EXPOSURE,
                o("FBJSON").stringify(c),
                !0,
              ),
              n
                ? o(
                    "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
                  ).turnOffEmailCapture(e, r, a)
                : e);
      var m = t.email_offer_generic_code,
        p = t.email_offer_type;
      if (p == null || m == null)
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
            e.account_id,
            e.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureMutateFromSettingAttemptFailureReason
              .INVALID_SETTING,
            o("FBJSON").stringify(c),
            !0,
          ),
          n
            ? o(
                "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
              ).turnOffEmailCapture(e, r, a)
            : e
        );
      if (p === "FIXED_AMOUNT") {
        var _,
          f = (_ = t.email_offer_amount_off) == null ? void 0 : _.amount;
        if (f == null || isNaN(+f))
          return (
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
              e.account_id,
              e.id,
              o("IncentivesAdsManagerUtils")
                .EmailCaptureMutateFromSettingAttemptFailureReason
                .INVALID_SETTING,
              o("FBJSON").stringify(c),
              !0,
            ),
            n
              ? o(
                  "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
                ).turnOffEmailCapture(e, r, a)
              : e
          );
      } else if (p === "PERCENTAGE") {
        var g = t.email_offer_percentage_off;
        if (g == null)
          return (
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
              e.account_id,
              e.id,
              o("IncentivesAdsManagerUtils")
                .EmailCaptureMutateFromSettingAttemptFailureReason
                .INVALID_SETTING,
              o("FBJSON").stringify(c),
              !0,
            ),
            n
              ? o(
                  "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
                ).turnOffEmailCapture(e, r, a)
              : e
          );
      } else
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
            e.account_id,
            e.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureMutateFromSettingAttemptFailureReason
              .INVALID_SETTING,
            o("FBJSON").stringify(c),
            !0,
          ),
          n
            ? o(
                "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
              ).turnOffEmailCapture(e, r, a)
            : e
        );
      return s()
        ? (o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SETTING_ATTEMPT_SUCCESS,
            e.account_id,
            e.id,
            null,
            o("FBJSON").stringify(c),
            !0,
          ),
          d(e, r, a, i))
        : (o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_MUTATE_FROM_SEETING_ATTEMPT_FAILED,
            e.account_id,
            e.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureMutateFromSettingAttemptFailureReason
              .EXPERIMENT_EXPOSURE,
            o("FBJSON").stringify(c),
            !0,
          ),
          n
            ? o(
                "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
              ).turnOffEmailCapture(e, r, a)
            : e);
    }
    function u(e, t, n, a) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = null),
        a === void 0 && (a = null),
        t && c(e, !0, n, a));
      var i = ["EMAIL_CAPTURE_SHOPIFY"],
        l = ["EMAIL_CAPTURE_GENERIC_CODE"],
        s = e;
      return (
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled() &&
          (s = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.enhance_cta.customizations.text_extraction
              .delete,
          )(e)),
        o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
            r("immutable").List(
              o(
                "AdsUEditorAdgroupPromoAdMutatorUtils",
              ).updateAllowedCouponCodeSources(
                o(
                  "AdsUEditorAdgroupPromoAdMutatorUtils",
                ).getAllowedPromoOfferSourcesArray(e),
                i,
                l,
              ),
            ),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id_for_email_capture.set(
            a,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.offer_details.set(
            r("immutable").List([]),
          ),
        )(s)
      );
    }
    function c(e, t, n, r) {
      o("IncentivesAdsManagerUtils").logEvent(
        o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
          .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_TURN_ON_ADGROUP,
        e.account_id,
        e.id,
        o("IncentivesAdsManagerUtils").PromoAdToggleStatus.ON,
        o("FBJSON").stringify({
          pageID: o("AdsPageUtils").getPageID(e),
          isUniqueCode: t,
          defaultOptInCallsite: n,
          productCatalogId: r,
          isGenericCodeDemandIRevTestGroup: o(
            "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
          ).isDemandIRevTestGroup(),
          genericCodeExperimentGroup: o(
            "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
          ).getEmailCaptureGenericCodeExperimentGroup(),
        }),
      );
    }
    function d(e, t, n, a) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = null),
        a === void 0 && (a = null),
        t && c(e, !1, n, a));
      var i = ["EMAIL_CAPTURE_GENERIC_CODE"],
        l = ["EMAIL_CAPTURE_SHOPIFY"],
        s = e;
      return (
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled() &&
          (s = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.enhance_cta.customizations.text_extraction
              .delete,
          )(e)),
        o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
            r("immutable").List(
              o(
                "AdsUEditorAdgroupPromoAdMutatorUtils",
              ).updateAllowedCouponCodeSources(
                o(
                  "AdsUEditorAdgroupPromoAdMutatorUtils",
                ).getAllowedPromoOfferSourcesArray(e),
                i,
                l,
              ),
            ),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id_for_email_capture.set(
            a,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.offer_details.set(
            r("immutable").List([]),
          ),
        )(s)
      );
    }
    function m(t, n, a, i) {
      var l,
        u,
        c = t.adgroup,
        d = o("AdsPageUtils").getPageID(c),
        m = o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(t, n),
        p = o(
          "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
        ).isEmailCaptureOptedInForAdgroup(c, t.campaign, t.campaignGroup, !0),
        _ = a.emailCaptureDefaultOptInEditedNotOptedInAdgroupIDs,
        f = a.emailCaptureDefaultOptInExclusiveAdgroupIDs,
        g = a.promoAdAccountStickyStoreLoadObject,
        h = null,
        y = !1;
      if (
        o(
          "PromoAdsEmailCaptureUnificationGatingUtils",
        ).isEmailCaptureOfferUnificationEnabled()
      ) {
        var C = o(
            "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
          ).getResolvedCatalogIdForAd(c, t.campaign, t.campaignGroup),
          b = C.getter,
          v = b();
        if (((y = v.isLoading()), !y)) {
          var S, R;
          h =
            v.hasValue() &&
            (S = (R = v.getValue()) == null ? void 0 : R.id) != null
              ? S
              : null;
        }
      }
      var L = o("PromoAdsAdSpecUtils").getPixelProductSetFromAdObjects(
          t.campaign,
          c,
        ),
        E = L.pixelID,
        k = L.productSetID,
        I = o(
          "IncentivesAdsManagerUtils",
        ).getAdOptimizationGoalsObjectivePromotedObjectType(t, n),
        T = I[0],
        D = I[1],
        x = I[2],
        $ = !f.contains(c.id),
        P =
          _.contains(c.id) &&
          o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isPromoAdsSuppressDOIOnEditEnabled(),
        N = {
          pageId: d,
          isAdAccountStickySettingLoading: g.isLoading(),
          adAccountStickySettingError:
            (l = g.getError()) == null ? void 0 : l.message,
          adAccountStickySettingValue: g.getValue(),
          isAdgroupStickySettingEligibleForDefaultOptIn: $,
          defaultOptInCallsite: i,
          shouldShowPAField: m,
          isEmailCaptureOptedIn: p,
          promotedObjectType: D,
          pixelID: E,
          productSetID: k,
          resolvedCatalogIdForEmailCapture: h,
          isResolvedCatalogLoading: y,
          isGenericCodeDemandIRevTestGroup: o(
            "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
          ).isDemandIRevTestGroup(),
          genericCodeExperimentGroup: o(
            "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
          ).getEmailCaptureGenericCodeExperimentGroup(),
        };
      if (
        (o("IncentivesAdsManagerUtils").logEvent(
          o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
            .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT,
          c.account_id,
          c.id,
          p
            ? o("IncentivesAdsManagerUtils").PromoAdToggleStatus.ON
            : o("IncentivesAdsManagerUtils").PromoAdToggleStatus.OFF,
          o("FBJSON").stringify(babelHelpers.extends({}, N)),
          !0,
        ),
        !m)
      )
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .SHOULD_NOT_SHOW_PROMO_ADS_FIELD,
            o("FBJSON").stringify(babelHelpers.extends({}, N)),
            !0,
          ),
          o("AdsUEditorAdgroupTurnOffEmailCaptureMutator").turnOffEmailCapture(
            c,
            !0,
            i,
          )
        );
      if (d == null)
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason.NULL_PAGE_ID,
            o("FBJSON").stringify(babelHelpers.extends({}, N)),
            !0,
          ),
          o("AdsUEditorAdgroupTurnOffEmailCaptureMutator").turnOffEmailCapture(
            c,
            !0,
            i,
          )
        );
      if (y)
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .CATALOG_LOAD_OBJECT_IS_LOADING,
            o("FBJSON").stringify(babelHelpers.extends({}, N)),
            !0,
          ),
          c
        );
      var M = {
          account_id: c.account_id,
          page_id: d,
          pixel_id: E != null ? E : null,
          catalog_id: h != null ? h : null,
          product_set_id: k != null ? k : null,
        },
        w = r("AdsPromoAdsEmailCaptureSettingGKStore").get(M),
        A = babelHelpers.extends({}, N, {
          emailCaptureInput: M,
          isEmailCaptureSettingLoading: w.isLoading(),
          emailCaptureSettingError:
            (u = w.getError()) == null ? void 0 : u.message,
          emailCaptureSettingValue: w.getValue(),
        });
      if (w.isLoading())
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .EMAIL_CAPTURE_SETTING_LOAD_OBJECT_IS_LOADING,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          c
        );
      if (!w.hasValueWithoutError())
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .EMAIL_CAPTURE_SETTING_LOAD_OBJECT_NO_VALUE,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          o("AdsUEditorAdgroupTurnOffEmailCaptureMutator").turnOffEmailCapture(
            c,
            !0,
            i,
          )
        );
      var F = w.getValue();
      if (F == null)
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .NULL_EMAIL_CAPTURE_SETTING,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          o("AdsUEditorAdgroupTurnOffEmailCaptureMutator").turnOffEmailCapture(
            c,
            !0,
            i,
          )
        );
      if (
        !o("PromoAdsAdsManagerUtils").shouldShowEmailCaptureFieldForAdgroup(
          c.id,
          !0,
          F,
          D,
        )
      )
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .SHOULD_NOT_SHOW_EMAIL_CAPTURE_FIELD,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          o("AdsUEditorAdgroupTurnOffEmailCaptureMutator").turnOffEmailCapture(
            c,
            !0,
            i,
          )
        );
      if (
        o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).isEmailCaptureAlwaysOnForAdgroup(c, t.campaign, t.campaignGroup)
      )
        return c;
      if (r("isFalsey")(F.is_offer_eligible_for_default_opt_in))
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .EMAIL_CAPTURE_OFFER_NOT_ELIGIBLE_FOR_DEFAULT_OPT_IN,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          c
        );
      if (!$)
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .ADGROUP_STICKY_SETTING_NOT_ELIGIBLE_FOR_DEFAULT_OPT_IN,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          c
        );
      if (P)
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            6333,
            "promo_ads_doi_on_edit",
            "suppressed_opt_in_email_capture",
          ),
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .SUPPRESSED_DEFAULT_OPT_IN_ON_EDIT,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          c
        );
      if (!g.hasValueWithoutError())
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .ADACCOUNT_STICKY_SETTING_LOAD_OBJECT_NO_VALUE,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          c
        );
      var O = g.getValue();
      if (O == null)
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_SUCCESS,
            c.account_id,
            c.id,
            p
              ? o("IncentivesAdsManagerUtils").PromoAdToggleStatus.ON
              : o("IncentivesAdsManagerUtils").PromoAdToggleStatus.OFF,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          s(c, F, !1, !0, i, h)
        );
      if (r("gkx")("12792"))
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .ADACCOUNT_IN_BLOCKLIST,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          c
        );
      var B = !1;
      return O.is_promo_ad_account_email_capture_default_on_in_cooldown &&
        ((B =
          !r("isFalsey")(F.cm_setting_url) && F.is_unique_code_offer === !0),
        !B)
        ? (o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_FAILED,
            c.account_id,
            c.id,
            o("IncentivesAdsManagerUtils")
              .EmailCaptureDefaultOptInAttemptFailureReason
              .ADACCOUNT_IN_COOLDOWN,
            o("FBJSON").stringify(babelHelpers.extends({}, A)),
            !0,
          ),
          c)
        : (o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_EMAIL_CAPTURE_DEFAULT_OPT_IN_ATTEMPT_SUCCESS,
            c.account_id,
            c.id,
            p
              ? o("IncentivesAdsManagerUtils").PromoAdToggleStatus.ON
              : o("IncentivesAdsManagerUtils").PromoAdToggleStatus.OFF,
            o("FBJSON").stringify(
              babelHelpers.extends({}, A, {
                isEligibleForCooldownBypassExperiment: B,
              }),
            ),
            !0,
          ),
          s(c, F, !1, !0, i, h, function () {
            return (
              !B ||
              o("PromoAdsDoiCooldownGatingUtils").isDoiCooldownDisableEnabled(
                !0,
              )
            );
          }));
    }
    function p(e, t, n, a, i) {
      var l = e.adgroup,
        s = e.campaign;
      if (a === n) return l;
      var u = o("AdsPageUtils").getPageID(l);
      if (u == null)
        return o(
          "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
        ).turnOffEmailCapture(
          l,
          !1,
          o("AdsUEditorAdgroupTurnoffPromoAdMutator")
            .PromoAdDefaultOptOutCallsite.CATALOG_INPUT_CHANGE,
        );
      var c = o("PromoAdsAdSpecUtils").getPixelProductSetFromAdObjects(s, l),
        d = c.pixelID,
        m = c.productSetID,
        p = {
          account_id: l.account_id,
          page_id: u,
          pixel_id: d != null ? d : null,
          catalog_id: a != null ? a : null,
          product_set_id: m != null ? m : null,
        },
        f = r("AdsPromoAdsEmailCaptureSettingGKStore").get(p);
      return f.hasValueWithoutError()
        ? _(e, t, f.getValue(), a, i)
        : f.isLoading()
          ? (r("promiseDone")(
              r("promiseStoreGet")(
                r("AdsPromoAdsEmailCaptureSettingGKStore"),
                function () {
                  return r("AdsPromoAdsEmailCaptureSettingGKStore").get(p);
                },
              ),
              function (n) {
                _(e, t, n, a, !0);
              },
            ),
            l)
          : o(
              "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
            ).turnOffEmailCapture(
              l,
              !1,
              o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                .PromoAdDefaultOptOutCallsite.CATALOG_INPUT_CHANGE,
            );
    }
    function _(e, t, n, a, l) {
      var u = e.adgroup,
        c = o(
          "IncentivesAdsManagerUtils",
        ).getAdOptimizationGoalsObjectivePromotedObjectType(e, t),
        d = c[0],
        m = c[1],
        p = c[2],
        _ =
          o("PromoAdsAdsManagerUtils").shouldShowEmailCaptureFieldForAdgroup(
            u.id,
            !0,
            n,
            m,
          ) &&
          (n == null ? void 0 : n.is_offer_eligible_for_default_opt_in) === !0;
      return l
        ? (r("AdsUEditorAdgroupSetEmailCaptureOfferDetailsAction").dispatch(
            {
              adgroupIDs: [u.id],
              hostID: r("AdsUEditorHostIDs").EDITING,
              isOptedIn: _,
              isShopifyMerchant:
                _ && (n == null ? void 0 : n.is_unique_code_offer) === !0,
              productCatalogId: a,
            },
            {
              line: "879",
              module: "AdsUEditorAdgroupEmailCaptureMutators.js",
              moduleID: i.id,
            },
          ),
          u)
        : _
          ? s(
              u,
              n,
              !0,
              !1,
              o("AdsUEditorAdgroupPromoAdMutatorUtils")
                .PromoAdDefaultOptInCallSite.CATALOG_INPUT_CHANGE,
              a,
            )
          : o(
              "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
            ).turnOffEmailCapture(
              u,
              !1,
              o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                .PromoAdDefaultOptOutCallsite.CATALOG_INPUT_CHANGE,
            );
    }
    function f(e, t, n, a) {
      var i, l;
      n === void 0 && (n = !1);
      var s = e.adgroup,
        u = e.campaign,
        c = e.campaignGroup;
      if (
        !o(
          "PromoAdsEmailCaptureUnificationGatingUtils",
        ).isEmailCaptureOfferUnificationEnabled()
      )
        return s;
      if (!o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(e, t))
        return o(
          "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
        ).turnOffEmailCapture(
          s,
          !1,
          o("AdsUEditorAdgroupTurnoffPromoAdMutator")
            .PromoAdDefaultOptOutCallsite.CATALOG_INPUT_CHANGE,
        );
      var d =
          (i =
            (l = s.creative) == null ||
            (l = l.asset_feed_spec) == null ||
            (l = l.promotional_metadata) == null
              ? void 0
              : l.product_catalog_id_for_email_capture) != null
            ? i
            : null,
        m = o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).getResolvedCatalogIdForAd(s, u, c, a),
        _ = m.getter,
        f = m.store,
        g = _();
      if (g.hasValueWithoutError()) {
        var h,
          y,
          C =
            (h = (y = g.getValue()) == null ? void 0 : y.id) != null ? h : null;
        return p(e, t, d, C, n);
      }
      return g.isLoading()
        ? (r("promiseDone")(r("promiseStoreGet")(f, _), function (n) {
            var r,
              o = (r = n == null ? void 0 : n.id) != null ? r : null;
            p(e, t, d, o, !0);
          }),
          s)
        : o("AdsUEditorAdgroupTurnOffEmailCaptureMutator").turnOffEmailCapture(
            s,
            !1,
            o("AdsUEditorAdgroupTurnoffPromoAdMutator")
              .PromoAdDefaultOptOutCallsite.CATALOG_INPUT_CHANGE,
          );
    }
    ((l.mutateEmailCaptureFromSetting = s),
      (l.optInEmailCaptureForUniqueCode = u),
      (l.optInEmailCaptureForGenericCode = d),
      (l.updateEmailCaptureForDefaultOptIn = m),
      (l.refreshEmailCaptureMetadataOnCatalogChange = f));
  },
  98,
);
