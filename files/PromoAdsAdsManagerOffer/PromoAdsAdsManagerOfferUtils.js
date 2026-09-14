__d(
  "PromoAdsAdsManagerOfferUtils",
  [
    "fbt",
    "LocalDate",
    "PromoAdsAdsManagerCouponCodeUtils",
    "PromoAdsAdsManagerOfferManagementTypes",
    "PromoAdsOfferManagementFieldStrings",
    "ServerTime",
    "Timezone",
    "XFBCatalogPartnerPlatformUtils.facebook",
    "isStringNullOrEmpty",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("LocalDate").today(o("Timezone").UTC),
      u = "promo_ads_offer_management_offer_setup_form",
      c = "promo_ads_email_offer_update_form";
    function d(e) {
      var t;
      return (
        ((t = e.offerDetectionSources) == null
          ? void 0
          : t.includes("PROVIDED_BY_MERCHANT_OFFER_MANAGEMENT")) === !0
      );
    }
    function m(e) {
      var t;
      return (
        ((t = e.offerDetectionSources) == null
          ? void 0
          : t.includes("PROVIDED_BY_MERCHANT")) === !0
      );
    }
    function p(e) {
      var t = e.offerDetectionSources;
      return (
        t != null &&
        (t.includes("PROVIDED_BY_MERCHANT") ||
          t.includes("PROVIDED_BY_MERCHANT_OFFER_MANAGEMENT"))
      );
    }
    function _(e) {
      var t;
      return (
        r("isTruthy")(e == null ? void 0 : e.percentOff) &&
        ((t = e == null ? void 0 : e.percentOff) != null ? t : 0) >= 100
      );
    }
    function f(e) {
      return e == null
        ? null
        : _(e)
          ? { type: "free_shipping", value: 0 }
          : r("isTruthy")(e.percentOff)
            ? { type: "percent_off", value: e.percentOff }
            : r("isTruthy")(e.fixedAmountOff)
              ? { type: "fixed_amount", value: e.fixedAmountOff }
              : null;
    }
    function g(e, t) {
      return e === "FREE_SHIPPING"
        ? o(
            "PromoAdsOfferManagementFieldStrings",
          ).PROMO_OFFER_MANAGEMENT_OFFER_TYPE_FREE_SHIPPING_LABEL.toString()
        : e === "PERCENTAGE"
          ? s
              ._(/*BTDS*/ "{promotion amount}\u0025 off", [
                s._param("promotion amount", Math.round(t)),
              ])
              .toString()
          : e === "FIXED_AMOUNT"
            ? s
                ._(/*BTDS*/ "${promotion amount} off", [
                  s._param("promotion amount", Math.round(t)),
                ])
                .toString()
            : "";
    }
    function h(e, t) {
      var n = r("isTruthy")(e)
          ? r("LocalDate").fromInstant(e, o("Timezone").UTC)
          : null,
        a = r("isTruthy")(t)
          ? r("LocalDate").fromInstant(t, o("Timezone").UTC)
          : null,
        i = "";
      return (
        n !== null && (i += n.format("M j, Y") + " - "),
        a !== null && (i += a.format("M j, Y")),
        i
      );
    }
    function y(e) {
      if (!r("isTruthy")(e)) return "";
      var t = r("LocalDate").fromInstant(e, o("Timezone").UTC);
      return s
        ._(/*BTDS*/ "Ends {formatted end date}", [
          s._param("formatted end date", t.format("M j, Y")),
        ])
        .toString();
    }
    function C(e) {
      var t = e.validEndDateTime;
      return (
        t != null &&
        t !== 0 &&
        t < Math.floor(o("ServerTime").getMillis() / 1e3)
      );
    }
    function b(e) {
      var t = [],
        n = y(e.validEndDateTime);
      n !== "" && t.push(n);
      var r = v(e, !1);
      return (r !== "" && t.push(r), t.join(" \xB7 "));
    }
    function v(e, t) {
      t === void 0 && (t = !0);
      var n = "",
        a = "",
        i = h(e.validStartDateTime, e.validEndDateTime);
      (_(e)
        ? (n = g("FREE_SHIPPING", 0))
        : r("isTruthy")(e.fixedAmountOff) && e.fixedAmountOff > 0
          ? (n = g("FIXED_AMOUNT", e.fixedAmountOff))
          : r("isTruthy")(e.percentOff) &&
            e.percentOff > 0 &&
            (n = g("PERCENTAGE", e.percentOff)),
        r("isTruthy")(e.minimumSubtotal) && e.minimumSubtotal > 0
          ? (a = o(
              "PromoAdsOfferManagementFieldStrings",
            ).PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_MINIMUM_SUBTOTAL_HEADER.toString())
          : r("isTruthy")(e.minimumQuantity) &&
            e.minimumQuantity > 0 &&
            (a = o(
              "PromoAdsOfferManagementFieldStrings",
            ).PROMO_OFFER_MANAGEMENT_VIEW_CONDITIONS_MINIMUM_QUANTITY_HEADER.toString()));
      var l = r("isStringNullOrEmpty")(n) ? "" : n;
      return (
        r("isStringNullOrEmpty")(a) ||
          (r("isStringNullOrEmpty")(l) || (l += ", "), (l += a)),
        t && (r("isStringNullOrEmpty")(l) || (l += ", "), (l += i)),
        l
      );
    }
    function S(e) {
      var t = {};
      if (
        (r("isTruthy")(e.id) && (t.offer_id = e.id),
        e.promoCode && (t.coupon_code = e.promoCode),
        r("isTruthy")(e.promotionValue) &&
          (e.promotionType === "percent_off"
            ? (t.percent_off = e.promotionValue)
            : e.promotionType === "fixed_amount" &&
              (t.fixed_amount_off = {
                amount: String(e.promotionValue),
                currency: "USD",
              })),
        e.startDate)
      )
        if (typeof e.startDate == "string") {
          var n = r("LocalDate").fromISOString(e.startDate);
          t.valid_start_date_time = n.toInstant(o("Timezone").UTC);
        } else
          t.valid_start_date_time = e.startDate.toInstant(o("Timezone").UTC);
      if (e.endDate)
        if (typeof e.endDate == "string") {
          var a = r("LocalDate").fromISOString(e.endDate);
          t.valid_end_date_time = a.toInstant(o("Timezone").UTC);
        } else t.valid_end_date_time = e.endDate.toInstant(o("Timezone").UTC);
      return (
        (r("isTruthy")(e.minimumSubtotal) || e.minimumSubtotal === 0) &&
          (t.minimum_subtotal = {
            amount: String(e.minimumSubtotal),
            currency: "USD",
          }),
        (r("isTruthy")(e.minimumQuantity) || e.minimumQuantity === 0) &&
          (t.minimum_quantity = e.minimumQuantity),
        (r("isTruthy")(e.maxDiscount) || e.maxDiscount === 0) &&
          (t.max_discount = { amount: String(e.maxDiscount), currency: "USD" }),
        r("isStringNullOrEmpty")(e.title) || (t.title = e.title),
        r("isStringNullOrEmpty")(e.description) ||
          (t.description = e.description),
        (t.offer_detection_source = ["PROVIDED_BY_MERCHANT_OFFER_MANAGEMENT"]),
        t
      );
    }
    function R(e) {
      var t = [];
      return (
        e == null ||
          e.forEach(function (e) {
            var n,
              o,
              a,
              i,
              l = { id: e.id };
            if (
              r("isTruthy")(
                (n = e.public_coupon_code) == null ? void 0 : n.code,
              )
            ) {
              var s;
              l.couponCode =
                (s = e.public_coupon_code) == null ? void 0 : s.code;
            }
            if (
              r("isTruthy")(
                (o = e.fixed_amount_off) == null ? void 0 : o.amount,
              )
            ) {
              var u;
              l.fixedAmountOff = parseFloat(
                (u = e.fixed_amount_off) == null ? void 0 : u.amount,
              );
            }
            if (
              r("isTruthy")((a = e.max_discount) == null ? void 0 : a.amount)
            ) {
              var c;
              l.maxDiscount = parseFloat(
                (c = e.max_discount) == null ? void 0 : c.amount,
              );
            }
            if (
              (r("isTruthy")(e.min_quantity) &&
                (l.minimumQuantity = e.min_quantity),
              r("isTruthy")((i = e.min_subtotal) == null ? void 0 : i.amount))
            ) {
              var d;
              l.minimumSubtotal = parseFloat(
                (d = e.min_subtotal) == null ? void 0 : d.amount,
              );
            }
            (r("isTruthy")(e.percent_off) && (l.percentOff = e.percent_off),
              r("isStringNullOrEmpty")(e.value_type) ||
                (l.valueType = e.value_type),
              r("isStringNullOrEmpty")(e.offeritem_title) ||
                (l.title = e.offeritem_title),
              r("isStringNullOrEmpty")(e.offeritem_description) ||
                (l.description = e.offeritem_description),
              r("isTruthy")(e.offeritem_valid_start_date) &&
                (l.validStartDateTime = e.offeritem_valid_start_date),
              r("isTruthy")(e.offeritem_valid_end_date) &&
                (l.validEndDateTime = e.offeritem_valid_end_date),
              r("isTruthy")(e.detection_sources) &&
                (l.offerDetectionSources = e.detection_sources),
              r("isTruthy")(e.is_offer_synced_from_shopify) &&
                (l.isOfferSyncedFromShopify = e.is_offer_synced_from_shopify),
              r("isTruthy")(e.offer_ingestion_partner_platform) &&
                (l.offerIngestionPartnerPlatform =
                  e.offer_ingestion_partner_platform),
              r("isTruthy")(e.promo_ads_domain_validation_status) &&
                (l.promo_ads_domain_validation_status =
                  e.promo_ads_domain_validation_status),
              e.is_deleted === !0 && (l.isDeleted = !0),
              e.is_blocked_by_detected_offer_toggle === !0 &&
                (l.isBlockedByDetectedOfferToggle = !0),
              t == null || t.push(l));
          }),
        t
      );
    }
    function L(t, n) {
      var a, i, l;
      return r("isTruthy")(t)
        ? {
            id: t.id,
            startDate: r("isTruthy")(t.validStartDateTime)
              ? r("LocalDate").fromInstant(
                  t.validStartDateTime,
                  o("Timezone").UTC,
                )
              : e,
            endDate: r("isTruthy")(t.validEndDateTime)
              ? r("LocalDate").fromInstant(
                  t.validEndDateTime,
                  o("Timezone").UTC,
                )
              : null,
            promotionType: (a = f(t)) == null ? void 0 : a.type,
            promotionValue: (i = f(t)) == null ? void 0 : i.value,
            title: t.title,
            description: t.description,
            firstTimePurchaseOnly: !1,
            minimumQuantity: t.minimumQuantity,
            minimumSpendType: r("isTruthy")(t.minimumQuantity)
              ? o("PromoAdsAdsManagerOfferManagementTypes")
                  .AdsPromoOfferMinimumSpendType.MINIMUM_QUANTITY
              : r("isTruthy")(t.minimumSubtotal)
                ? o("PromoAdsAdsManagerOfferManagementTypes")
                    .AdsPromoOfferMinimumSpendType.MINIMUM_SUBTOTAL
                : null,
            minimumSubtotal: t.minimumSubtotal,
            maxDiscount: t.maxDiscount,
            promoCode: (l = t.couponCode) != null ? l : "",
          }
        : {
            id: null,
            startDate: e,
            endDate: null,
            promotionType: "percent_off",
            promotionValue: null,
            title: null,
            description: null,
            firstTimePurchaseOnly: !1,
            minimumQuantity: null,
            minimumSpendType: null,
            minimumSubtotal: null,
            maxDiscount: null,
            promoCode: n != null ? n : "",
          };
    }
    function E(e, t) {
      return r("isStringNullOrEmpty")(e)
        ? [
            "info",
            o("PromoAdsOfferManagementFieldStrings")
              .PROMO_OFFER_MANAGEMENT_PROMO_CODE_INPUT_INFO_MESSAGE_LABEL,
          ]
        : e.length > 20 ||
            o(
              "PromoAdsAdsManagerCouponCodeUtils",
            ).MANUAL_COUPON_CODE_REGEX.test(e) === !1
          ? [
              "error",
              o("PromoAdsOfferManagementFieldStrings")
                .PROMO_OFFER_MANAGEMENT_PROMO_CODE_INPUT_ERROR_MESSAGE_LABEL,
            ]
          : t != null && t.includes(e)
            ? [
                "error",
                o("PromoAdsOfferManagementFieldStrings")
                  .PROMO_OFFER_MANAGEMENT_PROMO_CODE_DUPLICATEDCODE_ERROR_MESSAGE_LABEL,
              ]
            : ["valid", ""];
    }
    function k(e) {
      return r("isTruthy")(e) && e >= 1 && e <= 100;
    }
    function I(e) {
      return e.offerDetectionSources == null ||
        !e.offerDetectionSources.includes("PROVIDED_BY_MERCHANT")
        ? null
        : o("XFBCatalogPartnerPlatformUtils.facebook").toJSEnum(
            e.offerIngestionPartnerPlatform,
          );
    }
    function T(e, t, n) {
      if (t == null || t === "") return n && $(e, !0, n);
      var r = e.promo_ads_domain_validation_status;
      if (r == null || r.length === 0) return n && !p(e);
      var o = r.find(function (e) {
        return (e == null ? void 0 : e.domain) === t;
      });
      if (o == null) return n && !p(e);
      if (n) return o.is_v3_quality_passing !== !0;
      var a = o.validation_status;
      return a != null && a === "VERIFIED_NOT_WORKING";
    }
    function D(e, t, n, r) {
      return e.filter(function (e) {
        return (n != null && e.couponCode === n) || !T(e, t, r);
      });
    }
    function x(e, t, n) {
      return e == null || e.length === 0
        ? []
        : t == null
          ? e
          : e.filter(function (e) {
              return !T(e, t, n);
            });
    }
    function $(e, t, n) {
      if (!t || p(e)) return !1;
      var r = e.promo_ads_domain_validation_status;
      return r == null || r.length === 0
        ? n
        : n
          ? r.every(function (e) {
              return (e == null ? void 0 : e.is_v3_quality_passing) !== !0;
            })
          : r.every(function (e) {
              return (
                (e == null ? void 0 : e.validation_status) ===
                "VERIFIED_NOT_WORKING"
              );
            });
    }
    function P(e, t) {
      return e.filter(function (e) {
        return !$(e, !0, t);
      });
    }
    ((l.TODAY = e),
      (l.FORM_ID = u),
      (l.EMAIL_FORM_ID = c),
      (l.hasAMOfferManagementDetectionSource = d),
      (l.hasShopifySyncedDetectionSource = m),
      (l.hasManualDetectionSource = p),
      (l.isFreeShippingOffer = _),
      (l.getPromotionType = f),
      (l.formatOfferAmountString = g),
      (l.getFormattedDateRange = h),
      (l.getFormattedEndDate = y),
      (l.isPromoOfferExpired = C),
      (l.getFormattedV3DropdownSubtitle = b),
      (l.getFormattedOfferDescription = v),
      (l.populateOfferDetailsInput = S),
      (l.populatePromoOfferItemsFromGraphQL = R),
      (l.getOfferManagementEditFormType = L),
      (l.getPromoCodeInputBoxStatusAndMessage = E),
      (l.isPercentageInputValid = k),
      (l.getCatalogPartnerPlatform = I),
      (l.isOfferInvalidForDomain = T),
      (l.filterOutOffersInvalidForDomain = D),
      (l.filterOffersByDomainValidation = x),
      (l.shouldHideOfferFromManagementView = $),
      (l.filterOutOffersHiddenFromManagementView = P));
  },
  226,
);
