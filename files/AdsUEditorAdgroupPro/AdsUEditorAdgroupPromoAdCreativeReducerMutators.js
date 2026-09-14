__d(
  "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupShopifyPromoCodeAdMutators",
    "PromoAdsAdsManagerAdCreativeUtils",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, u) {
      var c = e.adgroup,
        d = e.campaign,
        m = i == null ? void 0 : i.isShopifyShopAds,
        p = m == null || m === !1;
      if (
        (i == null ? void 0 : i.shouldUpdatePromotionalMetadataCouponCodes) ===
        !0
      ) {
        var _ = o(
            "PromoAdsAdsManagerAdCreativeUtils",
          ).getFirstCouponCodeMessageFromAllMessageVariants(c, n, r, a),
          f = _ ? _.code : "",
          g = _ ? _.source : a;
        return s(c, f, g);
      }
      var h = c;
      if (p) {
        var y = o(
            "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
          ).isPromoAdOptedInForAdgroup(e.adgroup, e.campaign, e.campaignGroup),
          C = o(
            "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
          ).isEmailCaptureOptedInForAdgroup(
            e.adgroup,
            e.campaign,
            e.campaignGroup,
            !0,
          ),
          b = o(
            "PromoAdsAdsManagerAdCreativeUtils",
          ).getFirstCouponCodeMessageFromAllMessageVariants(h, n, r, a);
        if (y === !0) {
          var v;
          ((h = o(
            "AdsUEditorAdgroupPromoAdMutators",
          ).mutatePromoAdsDataFromAdCreative(
            b != null
              ? b
              : { code: "", source: a, extractionFeatureType: null },
            h,
            d,
            t,
            (v = l == null ? void 0 : l.isManualCodeExists) != null ? v : !1,
            u != null ? u : null,
          )),
            C === !1 &&
              l != null &&
              (h = o(
                "AdsUEditorAdgroupEmailCaptureMutators",
              ).updateEmailCaptureForDefaultOptIn(
                { adgroup: h, campaign: d, campaignGroup: e.campaignGroup },
                null,
                l,
                o("AdsUEditorAdgroupPromoAdMutatorUtils")
                  .PromoAdDefaultOptInCallSite.UPDATE_ADCOPY_TEXT,
              )));
        } else
          l != null &&
            ((h = o(
              "AdsUEditorAdgroupPromoAdMutators",
            ).updatePromoAdForDefaultOptIn(
              {
                adgroup: h,
                campaign: e.campaign,
                campaignGroup: e.campaignGroup,
              },
              null,
              t,
              l,
              o("AdsUEditorAdgroupPromoAdMutatorUtils")
                .PromoAdDefaultOptInCallSite.UPDATE_ADCOPY_TEXT,
              b != null
                ? b
                : { code: "", source: a, extractionFeatureType: null },
            )),
            o(
              "AdsUEditorAdgroupEmailCaptureMutators",
            ).updateEmailCaptureForDefaultOptIn(
              {
                adgroup: h,
                campaign: e.campaign,
                campaignGroup: e.campaignGroup,
              },
              null,
              l,
              o("AdsUEditorAdgroupPromoAdMutatorUtils")
                .PromoAdDefaultOptInCallSite.UPDATE_ADCOPY_TEXT,
            ));
      }
      return h;
    }
    function s(e, t, n) {
      if (t === "")
        return o("AdsMutators").chain(
          o("AdsUEditorAdgroupShopifyPromoCodeAdMutators").clearLLMSources,
          o("AdsUEditorAdgroupShopifyPromoCodeAdMutators")
            .clearAdContentCouponCodes,
        )(e);
      var a = e;
      return (
        n === "AD_CREATIVE_PRIMARY_TEXT"
          ? (a = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_primary_text.set(
                r("immutable").List([t]),
              ),
              r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                .promotional_metadata.coupon_codes.ad_creative_headline.delete,
              r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                .promotional_metadata.coupon_codes.ad_creative_description
                .delete,
              o("AdsUEditorAdgroupShopifyPromoCodeAdMutators").clearLLMSources,
            )(e))
          : n === "AD_CREATIVE_HEADLINE"
            ? (a = o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_headline.set(
                  r("immutable").List([t]),
                ),
                r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                  .promotional_metadata.coupon_codes.ad_creative_primary_text
                  .delete,
                r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                  .promotional_metadata.coupon_codes.ad_creative_description
                  .delete,
                o("AdsUEditorAdgroupShopifyPromoCodeAdMutators")
                  .clearLLMSources,
              )(e))
            : n === "AD_CREATIVE_DESCRIPTION" &&
              (a = o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_description.set(
                  r("immutable").List([t]),
                ),
                r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                  .promotional_metadata.coupon_codes.ad_creative_primary_text
                  .delete,
                r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                  .promotional_metadata.coupon_codes.ad_creative_headline
                  .delete,
                o("AdsUEditorAdgroupShopifyPromoCodeAdMutators")
                  .clearLLMSources,
              )(e)),
        a
      );
    }
    ((l.updateAdgroupOptInPromoAndExtractCode = e),
      (l.updatePromotionalMetadataCouponCodes = s));
  },
  98,
);
