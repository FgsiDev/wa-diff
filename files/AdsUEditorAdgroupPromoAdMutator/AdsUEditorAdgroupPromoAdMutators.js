__d(
  "AdsUEditorAdgroupPromoAdMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPromoAdsCodeSourceRadioButtonOptions",
    "AdsPromoAdsPageOfferItemsGKStore",
    "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupSetPromoAdOptedInAction",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorAdgroupWebsiteAndInStorePromoAdsChannelAvailabilityPicker.react",
    "AdsUEditorHostIDs",
    "FBJSON",
    "IncentivesAdsManagerUtils",
    "ODS",
    "PromoAdsAdsManagerAdCreativeUtils",
    "PromoAdsAdsManagerCouponCodeUtils",
    "PromoAdsAdsManagerDefaultOptInUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerOfferManagementTypes",
    "PromoAdsAdsManagerOfferTypeUtils",
    "PromoAdsAdsManagerUtils",
    "PromotionSource",
    "PromotionType",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "immutable",
    "isStringNullOrEmpty",
    "promiseDone",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["offerIds", "storeGetter"],
      s,
      u = ["EMAIL_CAPTURE_SHOPIFY", "EMAIL_CAPTURE_GENERIC_CODE"],
      c = [
        "DETECTED_FROM_MERCHANT_ADS",
        "PROVIDED_BY_MERCHANT",
        "DETECTED_FROM_MERCHANT_WEBSITE",
      ];
    function d(e) {
      return e
        ? e.filter(function (e) {
            return u.includes(e);
          })
        : [];
    }
    function m(e) {
      var t;
      return (
        ((t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.get(
          e,
        )) == null
          ? void 0
          : t.toArray()) || []
      );
    }
    function p(e) {
      if (typeof e == "string" && Object.values(r("PromotionType")).includes(e))
        switch (e) {
          case "FREE_SHIPPING":
            return "FREE_SHIPPING";
          case "FREE_RETURN":
            return "FREE_RETURN";
          case "PERCENTAGE_OFF":
            return "PERCENTAGE_OFF";
          case "AMOUNT_OFF":
            return "AMOUNT_OFF";
        }
      return "PERCENTAGE_OFF";
    }
    function _(e) {
      if (
        typeof e == "string" &&
        Object.values(r("PromotionSource")).includes(e)
      )
        switch (e) {
          case "ADVERTISER_INPUT":
            return "ADVERTISER_INPUT";
          case "LIVE_CRAWL":
            return "LIVE_CRAWL";
          case "EXISTING_UNEDITED":
            return "EXISTING_UNEDITED";
        }
      return "ADVERTISER_INPUT";
    }
    function f(e) {
      var t = e.get("promotion_value"),
        n = e.get("promotion_type"),
        r = e.get("required_code"),
        o = e.get("id"),
        a = e.get("start_date"),
        i = e.get("end_date"),
        l = e.get("promotion_source");
      return {
        promotion_value: typeof t == "number" ? t : 0,
        promotion_type: p(n),
        required_code: typeof r == "string" ? r : null,
        id: typeof o == "string" ? o : null,
        start_date: typeof a == "number" ? a : null,
        end_date: typeof i == "number" ? i : null,
        promotion_source: _(l),
      };
    }
    function g(e, t) {
      var n,
        r =
          (n = e.creative) == null ||
          (n = n.asset_feed_spec) == null ||
          (n = n.promotional_metadata) == null
            ? void 0
            : n.allowed_coupon_code_sources;
      return r ? r.includes(t) : !1;
    }
    function h(e, t, n, r, a, i, l, s) {
      s === void 0 && (s = !1);
      var u = o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(e, t),
        c = o(
          "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
        ).isPromoAdOptedInForAdgroup(
          e.adgroup,
          e.campaign,
          e.campaignGroup,
          !1,
        ),
        d = babelHelpers.extends({}, r, {
          shouldShowPromoAdField: u,
          defaultOptInCallsite: a,
          isChangingCreationSource: l,
        });
      return y(e.adgroup, r, i, u, c, e.campaign, e.campaignGroup, n, l, d, s);
    }
    function y(e, t, n, a, i, l, u, c, d, m, p) {
      p === void 0 && (p = !1);
      var _ = m;
      if (a) {
        var f, g, h, y, C, b;
        if (
          o(
            "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
          ).isPromoAdsAlwaysOnForAdgroup(e, l, u)
        )
          return e;
        o("IncentivesAdsManagerUtils").logEvent(
          o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
            .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT,
          e.account_id,
          e.id,
          null,
          o("FBJSON").stringify(_),
          !0,
        );
        var S = e,
          R = !i,
          L =
            d === !0 &&
            ((f = S.creative) == null ||
            (f = f.asset_feed_spec) == null ||
            (f = f.promotional_metadata) == null ||
            (f = f.allowed_coupon_code_sources) == null
              ? void 0
              : f.some(function (e) {
                  return (
                    e === "AD_CREATIVE_PRIMARY_TEXT" ||
                    e === "AD_CREATIVE_HEADLINE" ||
                    e === "AD_CREATIVE_DESCRIPTION"
                  );
                })) === !0,
          E = null;
        n != null
          ? !r("isStringNullOrEmpty")(n.code) &&
            o(
              "PromoAdsAdsManagerCouponCodeUtils",
            ).getShouldUseExtractedCodeFromCodeSourcePair(n) &&
            (E = n)
          : t.creativeCouponCodeSourcePair != null &&
            !r("isStringNullOrEmpty")(
              (g = t.creativeCouponCodeSourcePair) == null ? void 0 : g.code,
            ) &&
            ((h = t.creativeCouponCodeSourcePair) == null
              ? void 0
              : h.source) != null &&
            o(
              "PromoAdsAdsManagerCouponCodeUtils",
            ).getShouldUseExtractedCodeFromCodeSourcePair(
              t.creativeCouponCodeSourcePair,
            ) &&
            (E = t.creativeCouponCodeSourcePair);
        var k =
            ((y = t.promoAdsDefaultOptInEditedNotOptedInAdgroupIDs) == null
              ? void 0
              : y.includes(e.id)) === !0,
          I = o(
            "PromoAdsAdsManagerDefaultOptInUtils",
          ).isPromoAdsAdgroupEligibleForDefaultOptIn(
            t.shouldEnablePromoAdToggleByDefaultInvalidReason,
            E,
            (C = t.promoAdsDefaultOptInExclusiveAdgroupIDs) == null
              ? void 0
              : C.includes(e.id),
            k,
          ),
          T =
            R &&
            k &&
            !I &&
            o(
              "PromoAdsAdsManagerDefaultOptInUtils",
            ).isPromoAdsAdgroupEligibleForDefaultOptIn(
              t.shouldEnablePromoAdToggleByDefaultInvalidReason,
              E,
              (b = t.promoAdsDefaultOptInExclusiveAdgroupIDs) == null
                ? void 0
                : b.includes(e.id),
              !1,
            );
        return (
          T &&
            (s || (s = o("ODS"))).bumpEntityKey(
              6333,
              "promo_ads_doi_on_edit",
              "suppressed_opt_in",
            ),
          (_ = babelHelpers.extends({}, _, {
            shouldEnablePromoAdToggleByDefault: I,
            isPromoAdOptedOut: R,
            isChangingCreationSourceWithCreationSourceOptedIn: L,
            suppressedDefaultOptInOnEdit: T,
          })),
          L || (R && I)
            ? v(e, E, I, c, _, l, u, p)
            : (o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_FAILED,
                e.account_id,
                e.id,
                null,
                o("FBJSON").stringify(_),
                !0,
              ),
              S)
        );
      } else
        return o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
          e,
          m.defaultOptInCallsite,
        );
    }
    function C(e, t, n, r) {
      var a,
        i,
        l =
          (a = o("AdsUEditorAdgroupPromoAdMutatorStoreUtils")
            .getAllowedPromoOfferIDFromAdObjects(e, t, n, r)
            .getValue()) != null
            ? a
            : [],
        s = l.length,
        u = o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).getAllowedPromoOfferDataFromAdObjectsWithValidationFiltering(
          e,
          t,
          n,
          r,
        ),
        c =
          (i =
            u == null
              ? void 0
              : u
                  .mapValue(function (e) {
                    var t;
                    return (t = e != null ? e : []) == null
                      ? void 0
                      : t.map(function (e) {
                          return e.id;
                        });
                  })
                  .getValue()) != null
            ? i
            : [],
        d = c.length,
        m = function () {
          return o(
            "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
          ).getAllowedPromoOfferDataFromAdObjectsWithValidationFiltering(
            e,
            t,
            n,
            r,
          );
        };
      return {
        offerIds: c,
        storeGetter: m,
        isQualitySignalFilteringEnabled: !0,
        offerCountBeforeQualityFiltering: s,
        offerCountAfterQualityFiltering: d,
      };
    }
    function b(t, n, a, l, s, u, c, d, m) {
      (d === void 0 && (d = !1), m === void 0 && (m = !1));
      var p = C(t, n, a, c != null ? c : null),
        _ = p.offerIds,
        f = p.storeGetter,
        g = babelHelpers.objectWithoutPropertiesLoose(p, e),
        h = babelHelpers.extends({}, u, { allowedOfferItemIdsFromStore: _ }, g);
      return _.length === 0 &&
        (S(t, f, l, s, h, c != null ? c : null, m),
        c != null && !f().hasValue())
        ? t
        : _.length === 0 && !l && !m
          ? (o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_OFFER_NOT_FOUND_INLINE,
              t.account_id,
              t.id,
              null,
              o("FBJSON").stringify(babelHelpers.extends({}, h)),
              !0,
            ),
            t)
          : s
            ? (o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_SUCCESS_INLINE,
                t.account_id,
                t.id,
                null,
                o("FBJSON").stringify(babelHelpers.extends({}, h)),
                !0,
              ),
              d
                ? (r("AdsUEditorAdgroupSetPromoAdOptedInAction").dispatch(
                    {
                      adgroupIDs: [t.id],
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      isOptedIn: !0,
                      creativeCouponCode: l,
                      adInventoryOfferIds: _,
                      isDefaultOptIn: !0,
                      resolvedCatalogId: c != null ? c : null,
                    },
                    {
                      line: "507",
                      module: "AdsUEditorAdgroupPromoAdMutators.js",
                      moduleID: i.id,
                    },
                  ),
                  t)
                : k(t, l, !0, _, !0, c != null ? c : null))
            : (o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_FAILED,
                t.account_id,
                t.id,
                null,
                o("FBJSON").stringify(h),
                !0,
              ),
              t);
    }
    function v(e, t, n, a, i, l, s, u) {
      u === void 0 && (u = !1);
      var c = o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).getResolvedCatalogIdForAd(e, l, s),
        d = c.getter,
        m = c.store,
        p = d();
      if (p.hasValue()) {
        var _,
          f,
          g =
            (_ = (f = p.getValue()) == null ? void 0 : f.id) != null ? _ : null;
        return (
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_OFFER_UNIFICATION_CATALOG_RESOLUTION,
            e.account_id,
            e.id,
            null,
            o("FBJSON").stringify(
              babelHelpers.extends({}, i, {
                resolution_type: "sync",
                resolved_catalog_id: g,
              }),
            ),
            !0,
          ),
          b(e, l, a, t, n, i, g, u)
        );
      }
      return (
        r("promiseDone")(
          r("promiseStoreGet")(m, d),
          function (r) {
            var s,
              u = (s = r == null ? void 0 : r.id) != null ? s : null;
            (o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_OFFER_UNIFICATION_CATALOG_RESOLUTION,
              e.account_id,
              e.id,
              null,
              o("FBJSON").stringify(
                babelHelpers.extends({}, i, {
                  resolution_type: "async",
                  resolved_catalog_id: u,
                }),
              ),
              !0,
            ),
              b(e, l, a, t, n, i, u, !0));
          },
          function (t) {
            o("IncentivesAdsManagerUtils").logEvent(
              o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_OFFER_NOT_FOUND_ASYNC,
              e.account_id,
              e.id,
              null,
              o("FBJSON").stringify(
                babelHelpers.extends({}, i, {
                  error: "catalog_resolution_failed",
                }),
              ),
              !0,
            );
          },
        ),
        e
      );
    }
    function S(e, t, n, a, l, s, u) {
      (u === void 0 && (u = !1),
        r("promiseDone")(
          r("promiseStoreGet")(r("AdsPromoAdsPageOfferItemsGKStore"), t),
          function (t) {
            var c = o(
              "PromoAdsAdsManagerOfferTypeUtils",
            ).convertToCouponCodesForPromotionalMetadata(t != null ? t : []);
            if (u || (c.length > 0 && a) || n != null) {
              var d =
                c.length > 0
                  ? o(
                      "PromoAdsAdsManagerAdCreativeUtils",
                    ).filterCouponCodesForPromotionalMetadata(c)
                  : [];
              (o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_SUCCESS_ASYNC,
                e.account_id,
                e.id,
                null,
                o("FBJSON").stringify(babelHelpers.extends({}, l)),
                !0,
              ),
                r("AdsUEditorAdgroupSetPromoAdOptedInAction").dispatch(
                  {
                    adgroupIDs: [e.id],
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    isOptedIn: !0,
                    creativeCouponCode: n,
                    adInventoryOfferIds: d,
                    isDefaultOptIn: !0,
                    resolvedCatalogId: s,
                  },
                  {
                    line: "656",
                    module: "AdsUEditorAdgroupPromoAdMutators.js",
                    moduleID: i.id,
                  },
                ));
            } else
              o("IncentivesAdsManagerUtils").logEvent(
                o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
                  .PROMO_ADS_DEFAULT_OPT_IN_ATTEMPT_OFFER_NOT_FOUND_ASYNC,
                e.account_id,
                e.id,
                null,
                o("FBJSON").stringify(babelHelpers.extends({}, l)),
                !0,
              );
          },
        ));
    }
    function R(e) {
      var t = o(
        "AdsUEditorAdgroupPromoAdMutatorUtils",
      ).getAllowedPromoOfferSourcesArray(e);
      return (
        t.includes("AD_CREATIVE_PRIMARY_TEXT") ||
        t.includes("AD_CREATIVE_HEADLINE") ||
        t.includes("AD_CREATIVE_DESCRIPTION") ||
        t.includes("AD_CREATIVE_MANUAL_COUPON_CODES")
      );
    }
    function L(e, t, n, a, l, s) {
      return l === a
        ? e
        : R(e)
          ? s
            ? (r("AdsUEditorAdgroupSetPromoAdOptedInAction").dispatch(
                {
                  adgroupIDs: [e.id],
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  isOptedIn: !0,
                  creativeCouponCode: null,
                  adInventoryOfferIds: [],
                  isDefaultOptIn: !1,
                  preserveExistingCodes: !0,
                  resolvedCatalogId: l,
                },
                {
                  line: "711",
                  module: "AdsUEditorAdgroupPromoAdMutators.js",
                  moduleID: i.id,
                },
              ),
              e)
            : l != null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.set(
                  l,
                )(e)
              : r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.delete(
                  e,
                )
          : b(
              e,
              t,
              n,
              null,
              !0,
              {
                defaultOptInCallsite: o("AdsUEditorAdgroupPromoAdMutatorUtils")
                  .PromoAdDefaultOptInCallSite.CATALOG_INPUT_CHANGE,
              },
              l,
              s,
              !0,
            );
    }
    function E(e, t, n, a, i) {
      var l, s;
      a === void 0 && (a = !1);
      var u = e.adgroup,
        c = e.campaign,
        d = e.campaignGroup;
      if (!o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(e, t))
        return o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
          u,
          o("AdsUEditorAdgroupTurnoffPromoAdMutator")
            .PromoAdDefaultOptOutCallsite.CATALOG_INPUT_CHANGE,
        );
      var m =
        (l =
          (s = u.creative) == null ||
          (s = s.asset_feed_spec) == null ||
          (s = s.promotional_metadata) == null
            ? void 0
            : s.product_catalog_id) != null
          ? l
          : null;
      if (i === null) return L(u, c, n, m, null, !1);
      var p = o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).getResolvedCatalogIdForAd(u, c, d, i),
        _ = p.getter,
        f = p.store,
        g = _();
      if (g.hasValue()) {
        var h,
          y,
          C =
            (h = (y = g.getValue()) == null ? void 0 : y.id) != null ? h : null;
        return L(u, c, n, m, C, a);
      }
      return (
        r("promiseDone")(r("promiseStoreGet")(f, _), function (e) {
          var t,
            r = (t = e == null ? void 0 : e.id) != null ? t : null;
          L(u, c, n, m, r, !0);
        }),
        u
      );
    }
    function k(e, t, n, a, i, l) {
      if (
        (i === void 0 && (i = !1),
        l === void 0 && (l = null),
        i &&
          o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_DEFAULT_OPT_IN_TURN_ON_ADGROUP,
            e.account_id,
            e.id,
            n
              ? o("IncentivesAdsManagerUtils").PromoAdToggleStatus.ON
              : o("IncentivesAdsManagerUtils").PromoAdToggleStatus.OFF,
            o("FBJSON").stringify({
              primaryTextCode: t,
              tokenizerCodes: a,
              resolvedCatalogId: l,
            }),
          ),
        n)
      ) {
        var s = o(
            "AdsUEditorAdgroupUpcomingEventsMutator",
          ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
            e,
            o("AdsUEditorAdgroupUpcomingEventsMutator")
              .ResetUpcomingEventSpecReason.PROMO_CODE_ADDED,
          ),
          u = P(s, t, a, l);
        return o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled()
          ? o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
                .creative_features_spec.enhance_cta.customizations
                .text_extraction.delete,
            )(u)
          : u;
      } else {
        var c,
          m,
          p = o(
            "AdsUEditorAdgroupUpcomingEventMetadataMutators",
          ).removeUpcomingEventMetadataDisabledReason(e, "IS_PROMO_AD"),
          _ =
            (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.promotional_metadata.get(p)) == null
              ? void 0
              : c.toObject(),
          f = d(
            _ == null || (m = _.allowed_coupon_code_sources) == null
              ? void 0
              : m.toArray(),
          );
        if (
          o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).isAdgroupOnlyUsingPromoAdFieldForStaticAdsFromRecord(p) &&
          o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(f)
        )
          return o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
            r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
              .promotion_metadata_spec.delete,
          )(p);
        if (
          _ != null &&
          !o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(f)
        ) {
          var g;
          return o("AdsMutators").chain(
            (g = r(
              "AdsAdgroupRecordAccessors",
            )).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
              r("immutable").List(f),
            ),
            g.creative.asset_feed_spec.promotional_metadata
              .allowed_promo_offer_ids.delete,
            g.creative.asset_feed_spec.promotional_metadata.manual_coupon_codes
              .delete,
            g.creative.asset_feed_spec.promotional_metadata
              .is_auto_update_allowed.delete,
            g.creative.asset_feed_spec.promotional_metadata.product_catalog_id
              .delete,
            g.creative.creative_sourcing_spec.promotion_metadata_spec.delete,
          )(p);
        }
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .promotional_metadata.delete,
          r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
            .promotion_metadata_spec.delete,
        )(p);
      }
    }
    function I(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.excluded_offers.set(
          r("immutable").List(t),
        ),
      )(e);
    }
    function T(e, t, n, a) {
      a === void 0 && (a = null);
      var i = m(e),
        l = o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(e),
        s = [],
        u = [];
      switch (t) {
        case o("PromoAdsAdsManagerOfferManagementTypes")
          .AdsPromoManualOfferSelectionActionType.ADD:
          (i.push(n),
            i.length === 1 && s.push("AD_CREATIVE_MANUAL_COUPON_CODES"));
          break;
        case o("PromoAdsAdsManagerOfferManagementTypes")
          .AdsPromoManualOfferSelectionActionType.REMOVE:
          i = i.filter(function (e) {
            return e !== n;
          });
          break;
        case o("PromoAdsAdsManagerOfferManagementTypes")
          .AdsPromoManualOfferSelectionActionType.CLEAR:
          ((i = [n]), s.push("AD_CREATIVE_MANUAL_COUPON_CODES"));
          break;
      }
      var c = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.set(
          r("immutable").List(i),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
          r("immutable").List(
            o(
              "AdsUEditorAdgroupPromoAdMutatorUtils",
            ).updateAllowedCouponCodeSources(l, s, u),
          ),
        ),
      )(e);
      return a != null &&
        !o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(
          o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).getAllowedPromoOfferSourcesArray(c),
        )
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.set(
            a,
          )(c)
        : c;
    }
    function D(e, t, n, a, i, l) {
      l === void 0 && (l = null);
      var s = [],
        u = [],
        c = [],
        d = e == null ? void 0 : e.source;
      if (
        !r("isStringNullOrEmpty")(e.code) &&
        o(
          "PromoAdsAdsManagerCouponCodeUtils",
        ).getShouldUseExtractedCodeFromCodeSourcePair(e)
      )
        (c.push(e.code), s.push(d));
      else if (g(t, d)) {
        (s.push("DETECTED_FROM_MERCHANT_ADS"),
          s.push("PROVIDED_BY_MERCHANT"),
          s.push("DETECTED_FROM_MERCHANT_WEBSITE"));
        var m = o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).getAllowedPromoOfferDataFromAdObjects(t, n, a);
        if (m.hasValueWithoutError()) {
          var p,
            _ = o(
              "PromoAdsAdsManagerOfferTypeUtils",
            ).convertToCouponCodesForPromotionalMetadata(
              (p = m.getValueEnforcing()) != null ? p : [],
            );
          u = _.filter(function (e) {
            return (
              e.sources.has("DETECTED_FROM_MERCHANT_ADS") ||
              e.sources.has("PROVIDED_BY_MERCHANT") ||
              e.sources.has("DETECTED_FROM_MERCHANT_WEBSITE")
            );
          }).map(function (e) {
            return e.id;
          });
        }
        u.length === 0 && (s = []);
      } else return t;
      var f = M(t, c, s, i);
      return l != null &&
        !o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(
          o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).getAllowedPromoOfferSourcesArray(f),
        ) &&
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.get(
          f,
        ) == null &&
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isPromoAdsAlwaysOnEnabled(!1)
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.set(
            l,
          )(f)
        : f;
    }
    function x(e, t, n) {
      var r = o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(e, n);
      if (!r)
        return o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
          e.adgroup,
          o("AdsUEditorAdgroupTurnoffPromoAdMutator")
            .PromoAdDefaultOptOutCallsite.UPDATE_PAGE,
        );
      var a = o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(e.adgroup),
        i = [],
        l = g(e.adgroup, "AD_CREATIVE_PRIMARY_TEXT"),
        s = a.includes("AD_CREATIVE_MANUAL_COUPON_CODES"),
        u = a.includes("DETECTED_FROM_MERCHANT_WEBSITE"),
        c = o(
          "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
        ).getAllowedPromoOfferDataFromAdObjects(e.adgroup, e.campaign, t);
      if (c.hasValueWithoutError()) {
        var d,
          m = o(
            "PromoAdsAdsManagerOfferTypeUtils",
          ).convertToCouponCodesForPromotionalMetadata(
            (d = c.getValueEnforcing()) != null ? d : [],
          );
        i = m
          .filter(function (e) {
            return (
              e.sources.has("DETECTED_FROM_MERCHANT_ADS") ||
              e.sources.has("PROVIDED_BY_MERCHANT") ||
              (u && e.sources.has("DETECTED_FROM_MERCHANT_WEBSITE"))
            );
          })
          .map(function (e) {
            return e.id;
          });
      }
      return w(e.adgroup, i, l, s);
    }
    function $(e, t, n, a) {
      a === void 0 && (a = null);
      var i =
          n === r("AdsPromoAdsCodeSourceRadioButtonOptions").AUTO_SOURCE_CODE,
        l = o(
          "PromoAdsAdsManagerCouponCodeUtils",
        ).filterCreativeCouponCodeForEmptyCodeOrIneligibleSource(t),
        s = d(
          o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).getAllowedPromoOfferSourcesArray(e),
        ),
        u = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.set(
            i && l ? r("immutable").List([l.code]) : r("immutable").List([]),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
            i
              ? l
                ? r("immutable").List(
                    o(
                      "AdsUEditorAdgroupPromoAdMutatorUtils",
                    ).updateAllowedCouponCodeSources(s, [l.source], []),
                  )
                : r("immutable").List(
                    o(
                      "AdsUEditorAdgroupPromoAdMutatorUtils",
                    ).updateAllowedCouponCodeSources(s, c, []),
                  )
              : r("immutable").List(
                  o(
                    "AdsUEditorAdgroupPromoAdMutatorUtils",
                  ).updateAllowedCouponCodeSources(
                    s,
                    ["AD_CREATIVE_MANUAL_COUPON_CODES"],
                    [],
                  ),
                ),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.is_auto_update_allowed.set(
            l ? !0 : null,
          ),
          function (e) {
            return i
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.promotion_metadata_spec.delete(
                  e,
                )
              : e;
          },
        )(e);
      return a != null &&
        !o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(
          o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).getAllowedPromoOfferSourcesArray(u),
        )
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.set(
            a,
          )(u)
        : u;
    }
    function P(e, t, n, a) {
      var i;
      a === void 0 && (a = null);
      var l = d(
          o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).getAllowedPromoOfferSourcesArray(e),
        ),
        s = o(
          "PromoAdsAdsManagerCouponCodeUtils",
        ).filterCreativeCouponCodeForEmptyCodeOrIneligibleSource(t),
        c = N(s, l, n),
        m = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.set(
            s ? r("immutable").List([s.code]) : r("immutable").List([]),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
            r("immutable").List(c),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.allowed_promo_offer_ids.set(
            r("immutable").List([]),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.is_auto_update_allowed.set(
            !s && !o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(n)
              ? !0
              : null,
          ),
        )(e),
        p =
          (i =
            c == null
              ? void 0
              : c.some(function (e) {
                  return !u.includes(e);
                })) != null
            ? i
            : !1;
      return a != null && p
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.set(
            a,
          )(m)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.delete(
            m,
          );
    }
    function N(e, t, n) {
      return e
        ? o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).updateAllowedCouponCodeSources(t, [e.source], [])
        : o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(n)
          ? t
          : o(
              "AdsUEditorAdgroupPromoAdMutatorUtils",
            ).updateAllowedCouponCodeSources(t, c, []);
    }
    function M(e, t, n, a) {
      var i = d(
        o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(e),
      );
      if (a) return e;
      var l = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
          r("immutable").List(
            o(
              "AdsUEditorAdgroupPromoAdMutatorUtils",
            ).updateAllowedCouponCodeSources(i, n, []),
          ),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_promo_offer_ids.set(
          r("immutable").List([]),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.set(
          r("immutable").List(t),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.is_auto_update_allowed.set(
          !o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(n) &&
            !n.includes("AD_CREATIVE_PRIMARY_TEXT")
            ? !0
            : null,
        ),
      )(e);
      return o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(
        o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(l),
      )
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.delete(
            l,
          )
        : l;
    }
    function w(e, t, n, a) {
      var i = d(
        o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(e),
      );
      if (n || a) return e;
      var l = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
          o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(t)
            ? r("immutable").List(i)
            : r("immutable").List(
                r("immutable").List(
                  o(
                    "AdsUEditorAdgroupPromoAdMutatorUtils",
                  ).updateAllowedCouponCodeSources(i, c, []),
                ),
              ),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_promo_offer_ids.set(
          r("immutable").List([]),
        ),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .promotional_metadata.manual_coupon_codes.delete,
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.is_auto_update_allowed.set(
          o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(t) ? null : !0,
        ),
      )(e);
      return o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(
        o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(l),
      )
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.delete(
            l,
          )
        : l;
    }
    function A(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f = [];
      return (
        t.channelAvailability ===
        o(
          "AdsUEditorAdgroupWebsiteAndInStorePromoAdsChannelAvailabilityPicker.react",
        ).PromoChannelAvailabilityValues.ONLINE_AND_INSTORE
          ? (f = ["WEB", "IN_STORE"])
          : t.channelAvailability ===
              o(
                "AdsUEditorAdgroupWebsiteAndInStorePromoAdsChannelAvailabilityPicker.react",
              ).PromoChannelAvailabilityValues.ONLINE
            ? (f = ["WEB"])
            : (f = ["IN_STORE"]),
        o("AdsMutators").chain(
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
            0,
          ).applicable_channels) == null
            ? void 0
            : n.set(f),
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
            0,
          ).coupon_code) == null
            ? void 0
            : a.set(t.couponCode),
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
            0,
          ).title) == null
            ? void 0
            : i.set(t.title),
          t.disclaimerText != null && t.disclaimerText.length > 0
            ? (l = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
                0,
              ).disclaimer_text) == null
              ? void 0
              : l.set(t.disclaimerText)
            : (s = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
                  0,
                ).disclaimer_text) == null
              ? void 0
              : s.delete,
          t.disclaimerURL != null && t.disclaimerURL.length > 0
            ? (u = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
                0,
              ).disclaimer_url) == null
              ? void 0
              : u.set(t.disclaimerURL)
            : (c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
                  0,
                ).disclaimer_url) == null
              ? void 0
              : c.delete,
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
            0,
          ).end_time) == null
            ? void 0
            : d.set((m = t.endDate) == null ? void 0 : m.valueOf()),
          t.barcodeFormat != null
            ? (p = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
                0,
              ).barcode_format) == null
              ? void 0
              : p.set(t.barcodeFormat)
            : (_ = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.offer_details.at(
                  0,
                ).barcode_format) == null
              ? void 0
              : _.delete,
        )(e)
      );
    }
    ((l.convertToPromotionMetadataSpec = f),
      (l.updatePromoAdForDefaultOptIn = h),
      (l.refreshPromotionalMetadataOnCatalogChange = E),
      (l.updatePromoAdsOptInStatus = k),
      (l.mutateExcludedCodes = I),
      (l.updateManualCouponCode = T),
      (l.mutatePromoAdsDataFromAdCreative = D),
      (l.mutateUpdatePromoAdsDataFromPageId = x),
      (l.updateCodeSourceFromSourceRadioOptions = $),
      (l.mutateWebsiteAndInStorePromotionDetails = A));
  },
  98,
);
