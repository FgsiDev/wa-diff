__d(
  "AdsUEditorAdgroupTurnoffPromoAdMutator",
  [
    "$InternalEnum",
    "AdsAdgroupRecordAccessors",
    "FBJSON",
    "IncentivesAdsManagerUtils",
    "PromoAdsAdsManagerCouponCodeUtils",
    "PromoAdsAdsManagerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "SA_TO_DA_COLLECTION_TRANSFORMATION",
      "DA_TO_SA_COLLECTION_TRANSFORMATION",
      "UPDATE_PAGE",
      "CHANGE_LEADGEN_DESTINATION",
      "SET_APP_PROMOTED_OBJECT_TYPE",
      "SET_MESSGENGER_PROMOTED_OBJECT_TYPE",
      "SET_WEB_APP_PROMOTED_OBJECT_TYPE",
      "SET_PHONE_CALL_PROMOTED_OBJECT_TYPE",
      "SET_WHATSAPP_PROMOTED_OBJECT_TYPE",
      "SET_INCOMPATIBLE_APP_LINK_TREATMENT",
      "SET_SPECIAL_AD_CATEGORY",
      "SET_PROFILE_VISIT_EXTENSION",
      "SET_IAB_EXTENSION",
      "ENABLE_SA_OFF",
      "CATALOG_INPUT_CHANGE",
    ]);
    function s(e, t) {
      var n,
        a =
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.get(e)) == null
            ? void 0
            : n.toObject();
      return a == null
        ? e
        : (o("IncentivesAdsManagerUtils").logEvent(
            o("PromoAdsAdsManagerCouponCodeUtils").PromoAdsAdsManagerEvent
              .PROMO_ADS_AUTO_TURN_OFF_ADGROUP,
            e.account_id,
            e.id,
            o("IncentivesAdsManagerUtils").PromoAdToggleStatus.OFF,
            o("FBJSON").stringify({
              manualCouponCodes: a.manual_coupon_codes,
              allowedPromoOfferIDs: a.allowed_promo_offer_ids,
              allowedCouponCodeSources: a.allowed_coupon_code_sources,
              callsite: t,
            }),
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.delete(e));
    }
    function u(e, t) {
      var n = e.adgroup;
      return o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(e)
        ? n
        : s(n, t);
    }
    ((l.PromoAdDefaultOptOutCallsite = e),
      (l.turnOffPromo = s),
      (l.maybeTurnOffPromoWhenIncompatibleWithPromoAd = u));
  },
  98,
);
