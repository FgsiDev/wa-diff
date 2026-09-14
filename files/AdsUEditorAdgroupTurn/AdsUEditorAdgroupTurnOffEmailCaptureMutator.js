__d(
  "AdsUEditorAdgroupTurnOffEmailCaptureMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "FBJSON",
    "IncentivesAdsManagerUtils",
    "PromoAdsAdsManagerCouponCodeUtils",
    "adsPageIDSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a, i, l;
      o("IncentivesAdsManagerUtils").logEvent(
        o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
          .PROMO_ADS_EMAIL_CAPTURE_TURN_OFF_ADGROUP,
        e.account_id,
        e.id,
        null,
        o("FBJSON").stringify({
          pageID: r("adsPageIDSelector")({ adgroup: e }),
          isDefaultOptIn: t,
          allowedPromoOfferSources: o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).getAllowedPromoOfferSourcesArray(e),
          offerDetails: o(
            "AdsUEditorAdgroupPromoAdMutatorUtils",
          ).getOfferDetailsArray(e),
          turnOffEmailCaptureCallsite: n,
          productCatalogId:
            (a = e.creative) == null ||
            (a = a.asset_feed_spec) == null ||
            (a = a.promotional_metadata) == null
              ? void 0
              : a.product_catalog_id_for_email_capture,
        }),
        !0,
      );
      var s =
        (i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.get(e)) == null
          ? void 0
          : i.toObject();
      if (s == null) return e;
      var u = o(
        "AdsUEditorAdgroupPromoAdMutatorUtils",
      ).getPromoAdsSourceFromAllowedCouponSource(
        s == null || (l = s.allowed_coupon_code_sources) == null
          ? void 0
          : l.toArray(),
      );
      if (
        o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).isAdgroupOnlyUsingPromoAdFieldForStaticAdsFromRecord(e) &&
        o("IncentivesAdsManagerUtils").isArrayNullOrEmpty(u)
      )
        return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
          e,
        );
      var c = ["EMAIL_CAPTURE_SHOPIFY", "EMAIL_CAPTURE_GENERIC_CODE"];
      return o("AdsMutators").chain(
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
              [],
              c,
            ),
          ),
        ),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .promotional_metadata.product_catalog_id_for_email_capture.delete,
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .promotional_metadata.offer_details.delete,
      )(e);
    }
    l.turnOffEmailCapture = e;
  },
  98,
);
