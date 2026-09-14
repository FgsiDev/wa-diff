__d(
  "AdsUEditorAdgroupShopsAdsMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsBulkValueUtils",
    "AdsCallAddonUtils",
    "AdsClickToCallAdsUtils",
    "AdsCollectionsAdUtils",
    "AdsDataAtom",
    "AdsDynamicAdsUtils",
    "AdsLinkPostFormat",
    "AdsMutators",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupInstagramUtils",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupSetPageUtils",
    "AdsUEditorAdgroupShopAdsBundle",
    "AdsUEditorAdgroupShopAdsBundleMutators",
    "AdsUniformValue",
    "ApiDynamicCreativeOptimizationTypes",
    "CatalogVertical",
    "NativeCommerceExperienceLoggingUtils",
    "ShopsAdsAdapterAdgroupRulePluginResolver",
    "ShopsAdsAdapterOptInWebsiteAndShopsTransformationRuleSet",
    "SmartDestinationDetectionRecommendationSource",
    "adsConvertAdObjectRecordToPlainJS",
    "cr:37670",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (t, n, o) {
        if (o === r("ApiDynamicCreativeOptimizationTypes").FORMAT_AUTOMATION)
          return !1;
        switch (n) {
          case r("AdsAPIObjectives").CONVERSIONS:
            return t === r("AdsLinkPostFormat").COLLECTIONS;
          case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
            return t !== r("AdsLinkPostFormat").MULTIPLE;
          default:
            return !1;
        }
      };
    function u(e, t, n, a, i) {
      return i === r("AdsLinkPostFormat").SINGLE &&
        a === r("AdsAPIObjectives").CONVERSIONS &&
        o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)
        ? o(
            "AdsUEditorAdgroupDynamicMutators",
          ).transformAdgroupFromTemplateToSingleMediaLinkData(e, t, n, a)
        : e;
    }
    function c(e, t, n, a, i, l) {
      return o("AdsAdgroupLinkPostFormatMutators").setLinkPostFormat_UNPURE(
        r("AdsLinkPostFormat").MULTIPLE,
        n,
        a,
        e,
        i,
        l,
        t,
        r("CatalogVertical").NONE,
        void 0,
        void 0,
      );
    }
    function d(e, t, n, a) {
      return t === r("AdsLinkPostFormat").MULTIPLE &&
        n != null &&
        a !== r("ApiDynamicCreativeOptimizationTypes").FORMAT_AUTOMATION &&
        !o("AdsUEditorAdgroupShopAdsBundle").isShopAdsBundle(e)
        ? o(
            "AdsUEditorAdgroupShopAdsBundleMutators",
          ).processShopAdsBundleEditorState(
            e,
            o("AdsUEditorAdgroupShopAdsBundle")
              .SHOP_ADS_BUNDLE_DEFAULT_EDITOR_STATE,
          )
        : e;
    }
    function m(t, a, l, s, u) {
      var c = s !== "website_and_shops" && s !== "external",
        d = t;
      if (c) {
        var m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.template_url_spec.web.get(t);
        if (
          ((d = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.template_url_spec.delete,
            r("isTruthy")(m)
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.template_url_spec.web.set(m)
              : function (e) {
                  return e;
                },
          )(d)),
          (d = r("AdsAdgroupRecordAccessors").creative.applink_treatment.delete(
            d,
          )),
          l === r("AdsAPIObjectives").CONVERSIONS)
        ) {
          var p = u.getValue();
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            (o("NativeCommerceExperienceLoggingUtils").logNCEInteraction(
              {
                adgroupId: t.id,
                campaignGroupId: null,
                campaignId: null,
                entrypoint: null,
                funnelStep: o("NativeCommerceExperienceLoggingUtils")
                  .NativeCommerceExperienceFunnelStep.INTERACTION,
                isAdPublished: null,
                isOptin: null,
                isToggleDisabled: null,
                nceAdsType: o("AdsDynamicAdsUtils").isDynamicAd(t)
                  ? o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceShopsAdsType.DYNAMIC_ADS
                  : o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceShopsAdsType.STATIC_ADS,
                experienceType: o("NativeCommerceExperienceLoggingUtils")
                  .NativeCommerceExperienceType.COMMON,
                checkingSource: "update_shops_ads_opt_in_destination",
              },
              o("NativeCommerceExperienceLoggingUtils")
                .NativeCommerceExperienceShopsAdsInteractionType
                .CHANGE_LINK_TYPE,
            ),
              n("cr:37670").dispatch(
                {
                  linkType: "website_and_shops",
                  hostID: a,
                  adgroupIDs: [t.id],
                  storefronts: p != null ? new (r("AdsUniformValue"))(p) : null,
                  oldlinkType: o("AdsBulkValueUtils").wrapValue(s),
                },
                {
                  line: "223",
                  module: "AdsUEditorAdgroupShopsAdsMutators.js",
                  moduleID: i.id,
                },
              ));
          });
        }
      }
      return (
        l === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
          (d = o("AdsAdgroupLinkPostFormatMutators").removeAppDeeplinkSpecField(
            d,
          )),
        d
      );
    }
    function p(e, t) {
      return o("AdsAPIAdgroupRecordUtils").getPhoneDataID(e, t) ===
        o("AdsClickToCallAdsUtils").CALL_EXTENSION_PHONE_DATA_ID_PLACEHOLDER
        ? o("AdsCallAddonUtils").clearCallExtensionFields(e, t)
        : e;
    }
    function _(e, t, n, r, a, i) {
      var l,
        s,
        u = (l = n.promoted_object) == null ? void 0 : l.product_catalog_id,
        c = u != null ? r(u) : null,
        d = i == null ? void 0 : i.fb_page_id,
        m =
          d != null
            ? d
            : c == null ||
                (s = c.commerce_merchant_settings) == null ||
                (s = s.merchant_page) == null
              ? void 0
              : s.id,
        p = {},
        _ = e;
      return (
        m != null &&
          ((_ = o("AdsUEditorAdgroupSetPageUtils").setAdgroupPage(
            e,
            e.id,
            [e.id],
            t,
            m,
            null,
            p,
            a,
          )),
          o("AdsUEditorAdgroupInstagramUtils").initiateInstagramDefaulting(
            a.account,
            p,
            m,
            t,
            null,
          )),
        _
      );
    }
    function f(e, t, n, a, i, l, s) {
      var u = e;
      if (l != null && a) {
        var c = o(
            "AdsUEditorAdgroupOnsiteDestinationsMutators",
          ).getStorefrontsForAdgroup(e, t, i),
          d = l == null ? void 0 : l.get(e.id),
          m = d == null ? void 0 : d.get("storefront_id"),
          p = d == null ? void 0 : d.get("product_id"),
          _ = d == null ? void 0 : d.get("product_set_id"),
          f = d == null ? void 0 : d.get("recommendation_source");
        _ != null
          ? (u = o(
              "AdsUEditorAdgroupOnsiteDestinationsMutators",
            ).updateOnsiteDestinationsWithLinkType(
              u,
              n,
              "website_and_shops",
              c,
              {
                destinationType: "shop_collection_product_set_id",
                destinationValue: _,
                recommendationSource: r(
                  "SmartDestinationDetectionRecommendationSource",
                ).cast(f),
              },
              !1,
              s,
            ))
          : p != null
            ? (u = o(
                "AdsUEditorAdgroupOnsiteDestinationsMutators",
              ).updateOnsiteDestinationsWithLinkType(
                u,
                n,
                "website_and_shops",
                c,
                {
                  destinationType: "details_page_product_id",
                  destinationValue: p,
                  recommendationSource: r(
                    "SmartDestinationDetectionRecommendationSource",
                  ).cast(f),
                },
                !1,
                s,
              ))
            : m != null
              ? (u = o(
                  "AdsUEditorAdgroupOnsiteDestinationsMutators",
                ).updateOnsiteDestinationsWithLinkType(
                  u,
                  n,
                  "website_and_shops",
                  c,
                  {
                    destinationType: "storefront_shop_id",
                    destinationValue: m,
                    recommendationSource: r(
                      "SmartDestinationDetectionRecommendationSource",
                    ).cast(f),
                  },
                  !1,
                  s,
                ))
              : (u = o(
                  "AdsUEditorAdgroupOnsiteDestinationsMutators",
                ).updateOnsiteDestinationsWithLinkType(
                  u,
                  n,
                  "website_and_shops",
                  c,
                  null,
                  !1,
                  s,
                ));
      }
      return u;
    }
    function g(e) {
      return (
        (!o("AdsDynamicAdsUtils").isDynamicAd(e) &&
          !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)) ||
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
      );
    }
    function h(e) {
      var t,
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.optimization_type.delete(e),
        a = r("adsConvertAdObjectRecordToPlainJS")(n);
      return o("AdsAssetFeedUtils").isAdgroupUsingOnlyOnsiteDestinations(a) ||
        ((t = n.creative) != null &&
          (t = t.asset_feed_spec) != null &&
          t.isEmpty())
        ? n
        : e;
    }
    function y(e, t) {
      var n = e;
      for (var o of r(
        "ShopsAdsAdapterOptInWebsiteAndShopsTransformationRuleSet",
      ).ad) {
        var a = r("ShopsAdsAdapterAdgroupRulePluginResolver").resolve({
          ruleType: o,
        });
        n = a.transform(n, t);
      }
      return n;
    }
    ((l.shouldUpdateLinkPostFormatToCarousel = s),
      (l.maybeTransformFromTemplateToLinkData = u),
      (l.setLinkPostCarouselFormat = c),
      (l.optIntoShopsBundle = d),
      (l.removeUnsupportedDestinationAndDispatchWebsiteAndShopSelection = m),
      (l.optOutCallExtension = p),
      (l.setCMSConnectedIdentities = _),
      (l.maybeSetOnsiteDestination = f),
      (l.isAdgroupEligibleForOnsiteDestination = g),
      (l.maybeRemoveOptimizationType = h),
      (l.transformAdgroupToShopsAds = y));
  },
  98,
);
