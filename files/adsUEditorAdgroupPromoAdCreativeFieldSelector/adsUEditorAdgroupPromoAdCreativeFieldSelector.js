__d(
  "adsUEditorAdgroupPromoAdCreativeFieldSelector",
  [
    "$InternalEnum",
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsConnectedSourcesDataProvider",
    "AdsLoadObjectUtils",
    "AdsPromoAdsAdgroupDefaultOptinStickySettingDataProvider",
    "AdsPromoAdsEmailCaptureAdgroupDefaultOptinStickySettingDataProvider",
    "AdsPromoAdsEmailCaptureDataProvider",
    "AdsPromoAdsEmailCaptureToggleStickySettingAction",
    "AdsPromoAdsOfferManagementDataProvider",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAddWebsiteAndInstorePromoAdManualOfferAction",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupSetEmailCaptureOfferDetailsAction",
    "AdsUEditorAdgroupSetExcludedPromoCodesAction",
    "AdsUEditorAdgroupSetPromoAdCodeSourceRadioButtonAction",
    "AdsUEditorAdgroupSetPromoAdManualCouponCodeAction",
    "AdsUEditorAdgroupSetPromoAdOptedInAction",
    "AdsUEditorAdgroupSetPromoAdToggleStickySettingAction",
    "AdsUEditorSelectors",
    "IncentivesAdsManagerUtils",
    "OmniPromoAdsAdsManagerUtils",
    "PromoAdsAdsManagerDefaultOptInUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "PromoAdsOfferSourceConstants",
    "SearchableEntry",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupDefaultProductSetIDSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorAdgroupPromoAdDataSelector",
    "adsUEditorAdgroupPromoAdEligibilitySelector",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
    "adsUEditorAdgroupPublishStatusSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUEditorSelectedPageSelector",
    "adsUeditorAdgroupDestinationUrlSelector",
    "immutable",
    "isStringNullOrEmpty",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = (c = r("adsCreateSelector"))(
        [(d = r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"))],
        function (t) {
          return o(
            "IncentivesAdsManagerUtils",
          ).isMovingAMStaticAdsPromoModuleEnabled()
            ? !1
            : t.some(function (e) {
                var t = e.adgroup,
                  n = e.campaign,
                  r = e.campaignGroup;
                return o(
                  "IncentivesAdsManagerUtils",
                ).isCreativeEndStateEligibleByExperiment(n, t, r);
              });
        },
        { name: i.id + ".isCesIntegrationExperimentAndEligibleSelector" },
      ),
      h = c(
        [(f = r("adsUEditorSelectedAdgroupIDsSelector"))],
        function (t) {
          return t[0];
        },
        { name: i.id + ".adgroupIdSelector" },
      ),
      y = c(
        [
          o("adsUeditorAdgroupDestinationUrlSelector")
            .adsUeditorAdgroupDestinationUrlSelector,
        ],
        function (t) {
          return t.destinationUrl;
        },
        { name: i.id + ".adDestinationUrlSelector" },
      ),
      C = c(
        [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
        function (t) {
          var e,
            n,
            o,
            a,
            i,
            l,
            s,
            u =
              (e = t[0]) == null || (e = e.creative) == null
                ? void 0
                : e.object_story_spec;
          return (
            r("isTruthy")(t[0].creative_link_url) ||
            r("isTruthy")(
              u == null || (n = u.link_data) == null ? void 0 : n.link,
            ) ||
            r("isTruthy")(
              u == null ||
                (o = u.link_data) == null ||
                (o = o.child_attachments) == null ||
                (o = o[0]) == null
                ? void 0
                : o.link,
            ) ||
            r("isTruthy")(
              u == null || (a = u.template_data) == null ? void 0 : a.link,
            ) ||
            r("isTruthy")(
              u == null ||
                (i = u.video_data) == null ||
                (i = i.call_to_action) == null ||
                (i = i.value) == null
                ? void 0
                : i.link,
            ) ||
            r("isTruthy")(
              (l = t[0].creative) == null ? void 0 : l.object_story_id,
            ) ||
            r("isTruthy")(
              (s = t[0].creative) == null ? void 0 : s.instagram_story_id,
            )
          );
        },
        { name: i.id + ".hasWebsiteUrlSelector" },
      ),
      b = c(
        [
          (e = o("AdsUEditorSelectors")).adgroup.bulkByAccessorToJS(
            function (e) {
              var t;
              return (t = e.creative) == null ||
                (t = t.asset_feed_spec) == null ||
                (t = t.promotional_metadata) == null
                ? void 0
                : t.product_catalog_id_for_email_capture;
            },
          ),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t);
        },
        { name: i.id + ".promotionalMetadataEmailCaptureCatalogIdSelector" },
      ),
      v = c(
        [
          e.adgroup.valuesByAccessor(
            (_ = r("AdsAdgroupRecordAccessors")).creative.asset_feed_spec
              .promotional_metadata.allowed_coupon_code_sources.get,
          ),
        ],
        function (t) {
          var e, n, r;
          return (e =
            ((n = t[0]) == null
              ? void 0
              : n.contains("EMAIL_CAPTURE_SHOPIFY")) ||
            ((r = t[0]) == null
              ? void 0
              : r.contains("EMAIL_CAPTURE_GENERIC_CODE"))) != null
            ? e
            : !1;
        },
        { name: i.id + ".isEmailCaptureOptedInSelector" },
      ),
      S = c(
        [
          (s = o("adsUEditorAdgroupPromoAdRelayStoreSelector"))
            .promotionalMetadataPromoCodesCatalogIdSelector,
          b,
          v,
          s.hypCatalogSelector,
        ],
        function (t, n, r, a) {
          if (
            !o(
              "PromoAdsEmailCaptureUnificationGatingUtils",
            ).isEmailCaptureOfferUnificationEnabled()
          )
            return null;
          if (!r) {
            var e, i;
            return (e = n != null ? n : t) != null
              ? e
              : (i = a.getValue()) == null
                ? void 0
                : i.id;
          }
          return n;
        },
        { name: i.id + ".emailCaptureCatalogSelector" },
      ),
      R = c(
        [
          r("adsUEditorSelectedPageSelector"),
          (p = r("adsUEditorAccountSelector")),
          s.promoAdsEmailCaptureSettingStoreSelector,
          s.promoAdsPageOfferItemStoreSelector,
          (u = o("adsUEditorAdgroupPromoAdDataSelector"))
            .secondaryPageIdSelector,
          u.pixelIDSelector,
          u.productSetIDSelector,
          r("adsUEditorAdgroupDefaultProductSetIDSelector"),
          s.promoCodesCatalogSelector,
          S,
        ],
        function (t, n, r, a, i, l, s, u, c, d) {
          return function () {
            var e = n.account_id;
            (t.mapValue(function (t) {
              if (
                !(t == null || t.id === i) &&
                (r({
                  account_id: e,
                  page_id: t.id,
                  pixel_id: l != null ? l : null,
                  catalog_id: d != null ? d : null,
                  product_set_id: s != null ? s : null,
                }).getValue(),
                !c.isLoading())
              ) {
                var u;
                a({
                  account_id: n.account_id,
                  ad_spec_coupon_codes: null,
                  page_id: t.id,
                  catalog_id: (u = c.getValue()) != null ? u : null,
                  pixel_id: l,
                  product_set_id: s,
                  secondary_page_id: i,
                  sources: o("PromoAdsOfferSourceConstants")
                    .PROMO_ADS_OFFER_FETCHING_SOURCES,
                }).getValue();
              }
            }),
              s == null &&
                o("AdsLoadObjectUtils")
                  .all([t, u])
                  .mapValue(function (t) {
                    var s = t[0],
                      u = t[1];
                    if (!(s == null || s.id === i)) {
                      if (!c.isLoading()) {
                        var m;
                        a({
                          account_id: n.account_id,
                          ad_spec_coupon_codes: null,
                          catalog_id: (m = c.getValue()) != null ? m : null,
                          pixel_id: l,
                          page_id: s.id,
                          product_set_id: u,
                          secondary_page_id: i,
                          sources: o("PromoAdsOfferSourceConstants")
                            .PROMO_ADS_OFFER_FETCHING_SOURCES,
                        }).getValue();
                      }
                      r({
                        account_id: e,
                        page_id: s.id,
                        pixel_id: l != null ? l : null,
                        catalog_id: d != null ? d : null,
                        product_set_id: u != null ? u : null,
                      }).getValue();
                    }
                  }));
          };
        },
        { name: i.id + ".cachePagesPromoOffersSelector" },
      ),
      L = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata
              .allowed_coupon_code_sources.get,
          ),
        ],
        function (t) {
          var e, n;
          return (e = (n = t[0]) == null ? void 0 : n.toArray()) != null
            ? e
            : [];
        },
        { name: i.id + ".allowedCouponCodeSourcesSelector" },
      ),
      E = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata.get,
          ),
        ],
        function (t) {
          return t
            .map(function (e) {
              return e != null;
            })
            .every(function (e) {
              return e;
            });
        },
        { name: i.id + ".isOptedInSelector" },
      ),
      k = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata
              .allowed_promo_offer_ids.get,
          ),
        ],
        function (t) {
          var e, n;
          return (e = (n = t[0]) == null ? void 0 : n.toArray()) != null
            ? e
            : [];
        },
        { name: i.id + ".allowedPromoOfferIdsSelector" },
      ),
      I = c(
        [
          e.adgroup.bulkByAccessor(
            _.creative.asset_feed_spec.promotional_metadata.manual_coupon_codes
              .get,
          ),
          e.adgroup.bulkByAccessor(
            _.creative.creative_sourcing_spec.promotion_metadata_spec.get,
          ),
        ],
        function (t, n) {
          var e = o("AdsBulkValueUtils").getUniformValue(n),
            r = o("AdsBulkValueUtils").getUniformValue(t),
            a = r
              ? r
                  .map(function (e) {
                    return {
                      promotion_type: "PROMO_CODE",
                      promotion_value: 0,
                      required_code: e,
                      id: null,
                      start_date: null,
                      end_date: null,
                      promotion_source: "ADVERTISER_INPUT",
                    };
                  })
                  .toArray()
              : [],
            i = e
              ? e
                  .map(function (e) {
                    return o(
                      "AdsUEditorAdgroupPromoAdMutators",
                    ).convertToPromotionMetadataSpec(e);
                  })
                  .toArray()
              : [];
          return a.concat(i);
        },
        { name: i.id + ".manualOffersSelector" },
      ),
      T = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata.manual_coupon_codes
              .get,
          ),
        ],
        function (t) {
          return t[0]
            ? t[0]
                .map(function (e) {
                  return new (r("SearchableEntry"))({
                    dataType: "AD_CREATIVE_MANUAL_COUPON_CODES",
                    title: e == null ? void 0 : e.trim(),
                    uniqueID: e == null ? void 0 : e.trim().toUpperCase(),
                  });
                })
                .toArray()
            : [];
        },
        { name: i.id + ".manualCouponCodesSelector" },
      ),
      D = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata.manual_coupon_codes
              .get,
          ),
          s.promoOfferItemsForAdContextSelector,
        ],
        function (t, n) {
          if (!t[0]) return [null, null];
          var e = t[0].first();
          return [
            e,
            n == null
              ? void 0
              : n.find(function (t) {
                  return t.couponCode === e;
                }),
          ];
        },
        { name: i.id + ".manualSelectedOfferSelector" },
      ),
      x = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata
              .allowed_coupon_code_sources.get,
          ),
        ],
        function (t) {
          return t[0]
            ? o(
                "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
              ).isPromoAdAutomaticOptedIn(t[0])
            : !1;
        },
        { name: i.id + ".isPromoAdAutoOptedInSelector" },
      ),
      $ = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata
              .allowed_coupon_code_sources.get,
          ),
        ],
        function (t) {
          return t[0]
            ? o(
                "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
              ).isPromoAdManualOptedIn(t[0])
            : !1;
        },
        { name: i.id + ".isPromoAdManualOptedInSelector" },
      ),
      P = c(
        [
          f,
          (m = r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING")),
          u.creativeCouponCodeSelector,
          s.promoOfferItemsForAdContextSelector,
          s.promoCodesCatalogSelector,
        ],
        function (t, n, o, a, l) {
          return function (e) {
            var s,
              u,
              c =
                (s =
                  a == null
                    ? void 0
                    : a
                        .map(function (e) {
                          return e.id;
                        })
                        .filter(function (e) {
                          return e !== void 0;
                        })) != null
                  ? s
                  : [];
            (r("AdsUEditorAdgroupSetPromoAdOptedInAction").dispatch(
              {
                adgroupIDs: t,
                hostID: n,
                isOptedIn: e,
                creativeCouponCode: o,
                adInventoryOfferIds: c,
                isDefaultOptIn: !1,
                resolvedCatalogId: (u = l.getValue()) != null ? u : null,
              },
              {
                line: "682",
                module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                moduleID: i.id,
              },
            ),
              r(
                "AdsUEditorAdgroupSetPromoAdToggleStickySettingAction",
              ).dispatch(
                { hostID: n, adgroupIDs: t, isToggledOff: !e },
                {
                  line: "693",
                  module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                  moduleID: i.id,
                },
              ));
          };
        },
        { name: i.id + ".setIsOptedInSelector" },
      ),
      N = c(
        [
          f,
          m,
          u.creativeCouponCodeSelector,
          s.promoCodesCatalogSelector,
          s.isPromoAdOptedInSelector,
        ],
        function (t, n, o, a, l) {
          return function (e) {
            var s,
              u = (s = a.getValue()) != null ? s : null;
            (l ||
              r("AdsUEditorAdgroupSetPromoAdOptedInAction").dispatch(
                {
                  adgroupIDs: t,
                  hostID: n,
                  isOptedIn: !0,
                  creativeCouponCode: o,
                  adInventoryOfferIds: [],
                  isDefaultOptIn: !1,
                  resolvedCatalogId: u,
                },
                {
                  line: "724",
                  module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                  moduleID: i.id,
                },
              ),
              r(
                "AdsUEditorAdgroupSetPromoAdCodeSourceRadioButtonAction",
              ).dispatch(
                {
                  adgroupIDs: t,
                  hostID: n,
                  creativeCouponCode: o,
                  adsPromoAdsCodeSourceRadioButtonOption: e,
                  resolvedCatalogId: u,
                },
                {
                  line: "734",
                  module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                  moduleID: i.id,
                },
              ));
          };
        },
        { name: i.id + ".mutateSelectedCodeSourceForPromoAlwaysOnSelector" },
      ),
      M = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata
              .allowed_coupon_code_sources.get,
          ),
        ],
        function (t) {
          var e, n;
          return (e =
            (n = t[0]) == null
              ? void 0
              : n.contains("DETECTED_FROM_MERCHANT_WEBSITE")) != null
            ? e
            : !1;
        },
        { name: i.id + ".isSourceCodesFromWebsitesSelector" },
      ),
      w = c(
        [T, k, s.availablePromoOfferIdsLoadObjectSelector],
        function (t, n, o) {
          if (o.hasValueWithoutError()) {
            var e = o.getValueEnforcing().reduce(function (e, t) {
                var n = "PROMO_CODE",
                  o = "",
                  a = "";
                return (
                  r("isStringNullOrEmpty")(t.coupon_code)
                    ? t.value_type === "PERCENTAGE"
                      ? ((n = "PERCENTAGE_OFF"),
                        (a = String(t == null ? void 0 : t.percent_off)))
                      : t.value_type === "FIXED_AMOUNT" &&
                        !r("isStringNullOrEmpty")(t.fixed_amount_off) &&
                        ((n = "AMOUNT_OFF"), (a = t.fixed_amount_off))
                    : ((n = "PROMO_CODE"), (o = t.coupon_code)),
                  e.set(
                    t.id,
                    new (r("SearchableEntry"))({
                      dataType: Array.from(t.sources)[0],
                      type: n,
                      uniqueID: t.id,
                      title: o,
                      subtitle: a,
                    }),
                  ),
                  e
                );
              }, new Map()),
              a = [];
            return (
              n.forEach(function (t) {
                var n = e.get(t);
                n && a.push(n);
              }),
              [].concat(t, a)
            );
          } else return t;
        },
        { name: i.id + ".allCouponsInSearchableEntriesSelector" },
      ),
      A = c(
        [f, m, s.promoCodesCatalogSelector],
        function (t, n, o) {
          return function (e, a) {
            var l,
              s = (l = o.getValue()) != null ? l : null;
            r("AdsUEditorAdgroupSetPromoAdManualCouponCodeAction").dispatch(
              {
                adgroupIDs: t,
                hostID: n,
                manualCouponCode: a,
                offerActionType: e,
                resolvedCatalogId: s,
              },
              {
                line: "846",
                module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                moduleID: i.id,
              },
            );
          };
        },
        { name: i.id + ".updateManualCouponCodeSelector" },
      ),
      F = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata
              .allowed_coupon_code_sources.get,
          ),
        ],
        function (t) {
          var e = [
            "AD_CREATIVE_PRIMARY_TEXT",
            "AD_CREATIVE_HEADLINE",
            "AD_CREATIVE_DESCRIPTION",
          ];
          return t[0]
            ? t[0].some(function (t) {
                return e.includes(t);
              })
            : !1;
        },
        { name: i.id + ".isAllowedPromoCodeSourceFromAdCreativeSelector" },
      ),
      O = c(
        [f, m, u.creativeCouponCodeSelector, s.promoCodesCatalogSelector],
        function (t, n, o, a) {
          return function (e) {
            var l,
              s = (l = a.getValue()) != null ? l : null;
            r(
              "AdsUEditorAdgroupSetPromoAdCodeSourceRadioButtonAction",
            ).dispatch(
              {
                adgroupIDs: t,
                hostID: n,
                creativeCouponCode: o,
                adsPromoAdsCodeSourceRadioButtonOption: e,
                resolvedCatalogId: s,
              },
              {
                line: "892",
                module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                moduleID: i.id,
              },
            );
          };
        },
        { name: i.id + ".setChangeCodeSourceRadioButtonOptionSelector" },
      ),
      B = r("adsGetUniformValueSelector")(
        r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
        r("AdsPromotedObjectTypes").NONE,
      ),
      W = c(
        [B, g],
        function (t, n) {
          return {
            promotedObjectType: t,
            isCesIntegrationExperimentAndEligible: n,
          };
        },
        { name: i.id + ".commonLogDataSelector" },
      ),
      q = c(
        [
          p,
          u.creativeCouponCodeSelector,
          s.promoAdsStickySettingStoreSelector,
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          s.promoAdAccountStickyStoreSelector,
          L,
          r(
            "AdsPromoAdsAdgroupDefaultOptinStickySettingDataProvider",
          ).toFluxSelector(),
          r(
            "AdsPromoAdsEmailCaptureAdgroupDefaultOptinStickySettingDataProvider",
          ).toFluxSelector(),
          W,
        ],
        function (t, n, r, a, i, l, s, u, c) {
          return o(
            "PromoAdsAdsManagerDefaultOptInUtils",
          ).getPromoAdsDefaultOptInStatus(t, n, a, i, l, s, u, r, c);
        },
        { name: i.id + ".defaultOptInStatusSelector" },
      ),
      U = c(
        [f, m],
        function (t, n) {
          return function (e) {
            r("AdsUEditorAdgroupSetExcludedPromoCodesAction").dispatch(
              { hostID: n, adgroupIDs: t, excluded_offers: Array.from(e) },
              {
                line: "966",
                module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                moduleID: i.id,
              },
            );
          };
        },
        { name: i.id + ".setExcludedOffersSelector" },
      ),
      V = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata.excluded_offers.get,
          ),
        ],
        function (t) {
          var e, n;
          return (e = (n = t[0]) == null ? void 0 : n.toArray()) != null
            ? e
            : [];
        },
        { name: i.id + ".excludedOffersSelector" },
      ),
      H = c(
        [f, m, S],
        function (t, n, o) {
          return function (e, a, l) {
            (l === void 0 && (l = !0),
              r("AdsUEditorAdgroupSetEmailCaptureOfferDetailsAction").dispatch(
                {
                  hostID: n,
                  adgroupIDs: t,
                  isOptedIn: e,
                  isShopifyMerchant: a,
                  productCatalogId: o,
                },
                {
                  line: "1006",
                  module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                  moduleID: i.id,
                },
              ),
              l &&
                r("AdsPromoAdsEmailCaptureToggleStickySettingAction").dispatch(
                  { hostID: n, adgroupIDs: t, isToggledOff: !e },
                  {
                    line: "1015",
                    module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                    moduleID: i.id,
                  },
                ));
          };
        },
        { name: i.id + ".setEmailCaptureOfferDetailsSelector" },
      ),
      G = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata.offer_details.get,
          ),
        ],
        function (t) {
          var e,
            n = (e = t[0]) == null ? void 0 : e.get(0),
            r = n == null ? void 0 : n.get("promotional_value"),
            o = r != null ? Number(r) : null,
            a = n == null ? void 0 : n.get("promotional_type"),
            i = a != null ? String(a) : null,
            l = n == null ? void 0 : n.get("disclaimer_url"),
            s = l != null ? String(l) : null,
            u = n == null ? void 0 : n.get("coupon_code"),
            c = u != null ? String(u) : null;
          return { offerAmount: o, offerType: i, privacyURL: s, couponCode: c };
        },
        { name: i.id + ".emailCaptureOfferDetailSelector" },
      ),
      z = c(
        [
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          s.promoAdsStickySettingStoreSelector,
        ],
        function (t, n) {
          return r("immutable").Set(
            t.map(function (e) {
              var t = e.adgroup;
              return n(t.id);
            }),
          );
        },
        { name: i.id + ".promoAdAdgroupStickySettingLoadObjectsSelector" },
      ),
      j = c(
        [u.pageIdSelector, p, u.pixelIDSelector, u.productSetIDSelector, S],
        function (t, n, r, o, a) {
          return t != null
            ? {
                account_id: n.account_id,
                page_id: t,
                pixel_id: r != null ? r : null,
                catalog_id: a,
                product_set_id: o != null ? o : null,
              }
            : null;
        },
        { name: i.id + ".emailCaptureOfferQueryVariablesSelector" },
      ),
      K = c(
        [s.promoAdsEmailCaptureSettingStoreSelector, j],
        function (t, n) {
          return n != null ? t(n).getValue() : null;
        },
        { name: i.id + ".emailCaptureOfferSelector" },
      ),
      Q = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.promotional_metadata.offer_details.get,
          ),
        ],
        function (t) {
          var e,
            n = (e = t[0]) == null ? void 0 : e.get(0),
            r = n == null ? void 0 : n.get("applicable_channels"),
            a = null;
          if (r != null) {
            var i,
              l,
              s = Array(r);
            a =
              (i = (l = s[0]) == null ? void 0 : l.toArray()) != null
                ? i
                : null;
          }
          var u = n == null ? void 0 : n.get("disclaimer_text"),
            c = u != null ? String(u) : null,
            d = n == null ? void 0 : n.get("disclaimer_url"),
            m = d != null ? String(d) : null,
            p = n == null ? void 0 : n.get("end_time"),
            _ = p != null ? Number(p) : null,
            f = n == null ? void 0 : n.get("coupon_code"),
            g = f != null ? String(f) : null,
            h = n == null ? void 0 : n.get("title"),
            y = h != null ? String(h) : null,
            C = n == null ? void 0 : n.get("barcode_format"),
            b =
              C != null
                ? o("OmniPromoAdsAdsManagerUtils").getOfferDiscountBarcodeType(
                    String(C),
                  )
                : null;
          return {
            applicableChannels: a,
            barcodeFormat: b,
            disclaimerText: c,
            disclaimerURL: m,
            endTime: _,
            promocode: g,
            title: y,
          };
        },
        { name: i.id + ".WebsiteAndInstoreOfferDetailsSelector" },
      ),
      X = c(
        [f, m],
        function (t, n) {
          return function (e) {
            r(
              "AdsUEditorAdgroupAddWebsiteAndInstorePromoAdManualOfferAction",
            ).dispatch(
              { adgroupIDs: t, hostID: n, promotionSpec: e },
              {
                line: "1198",
                module: "adsUEditorAdgroupPromoAdCreativeFieldSelector.js",
                moduleID: i.id,
              },
            );
          };
        },
        { name: i.id + ".mutateWebsiteAndInStoreManualOfferSelector" },
      ),
      Y = c(
        [r("AdsPromoAdsOfferManagementDataProvider").toFluxSelector()],
        function (t) {
          return t;
        },
        { name: i.id + ".offerManagementDataProviderSelector" },
      ),
      J = c(
        [r("AdsPromoAdsEmailCaptureDataProvider").toFluxSelector()],
        function (t) {
          return t;
        },
        { name: i.id + ".emailOfferUpdateoModalDataProviderSelector" },
      ),
      Z = c(
        [r("AdsConnectedSourcesDataProvider").toFluxSelector()],
        function (t) {
          return t;
        },
        { name: i.id + ".adsConnectedSourcesDataProviderSelector" },
      ),
      ee = c(
        [
          e.adgroup.valuesByAccessor(
            _.creative.object_story_spec.link_data.call_to_action.type.get,
          ),
          e.adgroup.valuesByAccessor(
            _.creative.object_story_spec.video_data.call_to_action.type.get,
          ),
          e.adgroup.valuesByAccessor(
            _.creative.object_story_spec.template_data.call_to_action.type.get,
          ),
          e.adgroup.valuesByAccessor(_.creative.call_to_action_type.get),
          e.adgroup.valuesByAccessor(
            _.creative.asset_feed_spec.call_to_action_types.get,
          ),
        ],
        function (t, n, r, o, a) {
          if (t != null && t[0] != null) return t[0];
          if (n != null && n[0] != null) return n[0];
          if (r != null && r[0] != null) return r[0];
          if (o != null && o[0] != null) return o[0];
          var e = a != null ? a[0] : null;
          if (e != null) {
            var i = e.first == null ? void 0 : e.first();
            if (i != null) return i;
          }
          return null;
        },
        { name: i.id + ".callToActionTypeSelector" },
      ),
      te = c(
        [
          o("AdsUEditorAdgroupBulkSelectors").errorObjectSelectorByPaths(
            r("immutable").List([
              r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                .PROMOTIONAL_METADATA.ALLOWED_COUPON_CODE_SOURCES,
            ]),
          ),
        ],
        function (t) {
          return t == null ? void 0 : t.getValues();
        },
        { name: i.id + ".adsErrorsSelector" },
      ),
      ne = c(
        [d],
        function (t) {
          return t.some(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              r = e.campaignGroup;
            return o(
              "IncentivesAdsManagerUtils",
            ).isCreativeEndStateEligibleByExperiment(n, t, r);
          });
        },
        { name: i.id + ".isCesIntegrationEligibleSelector" },
      ),
      re = o(
        "adsUEditorAdgroupPromoAdEligibilitySelector",
      ).getIsPromoAdsEligible(!1),
      oe = n("$InternalEnum")({
        Available: "available",
        Pending: "pending",
        Unavailable: "unavailable",
      }),
      ae = c(
        [
          d,
          re,
          u.isBrandedContentEnabledSelector,
          s.promoAdsStickySettingStoreSelector,
          r("adsUEditorAdgroupPublishStatusSelector"),
          s.promoCodesCatalogSelector,
          s.hypCatalogSelector,
          e.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.upcoming_events;
          }),
          B,
        ],
        function (t, n, r, a, i, l, s, u, c) {
          var e;
          if (
            t.length !== 1 ||
            !n ||
            r ||
            o(
              "PromoAdsAdsManagerGatingAndExperimentUtils",
            ).isSensitiveTierAdvertiser() ||
            o("IncentivesAdsManagerUtils").isOmniPromoAdExperience(c) ||
            u.getValues().some(function (e) {
              return e != null && e.length > 0;
            })
          )
            return oe.Unavailable;
          if (!l.hasValue()) return oe.Pending;
          if (
            l.getValue() == null ||
            ((e = s.getValue()) == null
              ? void 0
              : e.is_promo_ads_always_on_suitable) === !1
          )
            return oe.Unavailable;
          var d = t[0].adgroup,
            m = a(d.id);
          if (m != null && m.hasValue()) {
            var p = m.getValue();
            if ((p == null ? void 0 : p.is_always_on_enabled_promo) === !0)
              return oe.Available;
          }
          var _ = i.get(d.id);
          return (_ == null ? void 0 : _.isNew) === !0
            ? oe.Available
            : (m == null ? void 0 : m.hasValue()) === !0
              ? oe.Unavailable
              : oe.Pending;
        },
        { name: i.id + ".promoAdsAlwaysOnAvailabilitySelector" },
      ),
      ie = c(
        [ae],
        function (t) {
          return t === oe.Available;
        },
        { name: i.id + ".isPromoAdsAlwaysOnAvailableSelector" },
      ),
      le = c(
        [ae],
        function (t) {
          return t !== oe.Unavailable;
        },
        { name: i.id + ".isPromoAdsAlwaysOnAvailableOrPendingSelector" },
      ),
      se = c(
        [ie],
        function (t) {
          return (
            t &&
            o(
              "PromoAdsAdsManagerGatingAndExperimentUtils",
            ).isPromoAdsAlwaysOnEnabled(!0)
          );
        },
        { name: i.id + ".isPromoAdsAlwaysOnSelector" },
      ),
      ue = c(
        [E, se],
        function (t, n) {
          return t || n;
        },
        { name: i.id + ".isOptedInWithAlwaysOnSelector" },
      ),
      ce = c(
        [s.isPromoAdOptedInSelector, se],
        function (t, n) {
          return t || n;
        },
        { name: i.id + ".isPromoAdOptedInWithAlwaysOnSelector" },
      ),
      de = c(
        [x, se, $],
        function (t, n, r) {
          return t || (n && !r);
        },
        { name: i.id + ".isPromoAdAutoOptedInWithAlwaysOnSelector" },
      ),
      me = c(
        [
          d,
          re,
          u.isBrandedContentEnabledSelector,
          s.promoAdsStickySettingStoreSelector,
          r("adsUEditorAdgroupPublishStatusSelector"),
          S,
          s.hypCatalogSelector,
          K,
          B,
          e.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.upcoming_events;
          }),
        ],
        function (t, n, r, a, i, l, s, u, c, d) {
          var e;
          if (
            t.length !== 1 ||
            !n ||
            r ||
            l == null ||
            !o(
              "PromoAdsEmailCaptureUnificationGatingUtils",
            ).isEmailCaptureOfferUnificationEnabled() ||
            o(
              "PromoAdsAdsManagerGatingAndExperimentUtils",
            ).isSensitiveTierAdvertiser() ||
            o("IncentivesAdsManagerUtils").isOmniPromoAdExperience(c) ||
            d.getValues().some(function (e) {
              return e != null && e.length > 0;
            }) ||
            ((e = s.getValue()) == null
              ? void 0
              : e.is_promo_ads_always_on_suitable) === !1
          )
            return !1;
          var m = t[0].adgroup;
          if (
            !o("PromoAdsAdsManagerUtils").shouldShowEmailCaptureFieldForAdgroup(
              m.id,
              n,
              u,
              c,
            )
          )
            return !1;
          var p = a(m.id);
          if (p != null && p.hasValue()) {
            var _ = p.getValue();
            if ((_ == null ? void 0 : _.is_always_on_enabled_email) === !0)
              return o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isEmailCaptureAlwaysOnEnabled(!0);
          }
          var f = i.get(m.id);
          return (f == null ? void 0 : f.isNew) === !0
            ? o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isEmailCaptureAlwaysOnEnabled(!0)
            : !1;
        },
        { name: i.id + ".isEmailCaptureAlwaysOnSelector" },
      ),
      pe = c(
        [me, K],
        function (t, n) {
          return t && (n == null ? void 0 : n.is_email_capture_opted_in) === !0;
        },
        { name: i.id + ".isEmailCaptureOptedInAlwaysOnSelector" },
      ),
      _e = c(
        [v, me, K],
        function (t, n, r) {
          return n
            ? (r == null ? void 0 : r.is_email_capture_opted_in) === !0
            : t;
        },
        { name: i.id + ".isEmailCaptureOptedInWithAlwaysOnSelector" },
      ),
      fe = c(
        [s.promoAdAccountStickyStoreSelector, h],
        function (t, n) {
          var e, r;
          return (e =
            (r = t.getValue()) == null
              ? void 0
              : r.is_always_on_l1_notice_eligible) != null
            ? e
            : !0;
        },
        { name: i.id + ".isAlwaysOnL1NoticeEligibleSelector" },
      ),
      ge = c(
        [s.promoAdAccountStickyStoreSelector, h],
        function (t, n) {
          var e, r;
          return (e =
            (r = t.getValue()) == null
              ? void 0
              : r.is_always_on_detected_offers_upsell_eligible) != null
            ? e
            : !0;
        },
        { name: i.id + ".isAlwaysOnDetectedOffersUpsellEligibleSelector" },
      ),
      he = c(
        [s.promoAdAccountStickyStoreSelector, h],
        function (t, n) {
          var e, r;
          return (e =
            (r = t.getValue()) == null
              ? void 0
              : r.is_ec_detected_offers_upsell_eligible) != null
            ? e
            : !0;
        },
        { name: i.id + ".isEcDetectedOffersUpsellEligibleSelector" },
      ),
      ye = c(
        [s.promoAdAccountStickyStoreSelector, h],
        function (t, n) {
          var e, r;
          return (e =
            (r = t.getValue()) == null
              ? void 0
              : r.is_ec_shops_only_upsell_eligible) != null
            ? e
            : !0;
        },
        { name: i.id + ".isEcShopsOnlyUpsellEligibleSelector" },
      ),
      Ce = r("adsCreateStructuredSelector")(
        { isEmailCaptureOptedIn: _e, isPromoAdOptedIn: ce },
        i.id + ".promoAdsInitialExpansionSelector",
      ),
      be = r("adsCreateStructuredSelector")(
        {
          emailCaptureOfferDetailFromAdsSpec: G,
          emailCaptureOffers: K,
          hasCatalogNoOffersWithDetectedOffersDisabled:
            s.hasCatalogNoOffersWithDetectedOffersDisabledSelector,
          hasCatalogNoOffersWithDetectedOffersEnabled:
            s.hasCatalogNoOffersWithDetectedOffersEnabledSelector,
          hasCatalogOnlyManualOffersWithDetectedOffersDisabled:
            s.hasCatalogOnlyManualOffersWithDetectedOffersDisabledSelector,
          isEmailCaptureOptedIn: _e,
          isPromoAdManualOptedIn: $,
          isPromoAdOptedIn: ce,
          isPromoAdsAlwaysOn: se,
          isSourceCodesFromWebsites: M,
          manualSelectedOffer: D,
        },
        i.id + ".promoAdsSelectedItemsSelector",
      ),
      ve = r("adsCreateStructuredSelector")(
        {
          adAccount: p,
          adSpecCouponCodes: s.adSpecCouponCodesSelector,
          adgroupId: h,
          adsErrors: te,
          pageId: u.pageIdSelector,
          pixelId: u.pixelIDSelector,
          productSetId: u.productSetIDSelector,
          allCouponCodes: w,
          allowedCouponCodeSources: L,
          cachePagesPromoOffers: R,
          creativeCouponCode: u.creativeCouponCodeSelector,
          destinationUrl: y,
          hasCatalogNoAvailablePromotionsForAlwaysOn:
            s.hasCatalogNoOffersWithDetectedOffersDisabledSelector,
          hasCatalogNoOffersWithDetectedOffersDisabled:
            s.hasCatalogNoOffersWithDetectedOffersDisabledSelector,
          hasCatalogNoOffersWithDetectedOffersEnabled:
            s.hasCatalogNoOffersWithDetectedOffersEnabledSelector,
          hasCatalogOnlyManualOffersWithDetectedOffersDisabled:
            s.hasCatalogOnlyManualOffersWithDetectedOffersDisabledSelector,
          hasWebsiteUrl: C,
          isAllowedPromoCodeSourceFromAdCreative: F,
          isAlwaysOnDetectedOffersUpsellEligible: ge,
          isAlwaysOnL1NoticeEligible: fe,
          isBrandedContentEnabled: u.isBrandedContentEnabledSelector,
          isCrawledOffersEnabled: s.isCrawledOffersEnabledSelector,
          isCesIntegrationExperimentAndEligible: g,
          isEcDetectedOffersUpsellEligible: he,
          isEcShopsOnlyUpsellEligible: ye,
          isSourceCodesFromWebsites: M,
          isOptedIn: ue,
          isPromoAdsAlwaysOn: se,
          manualCouponCodes: T,
          manualOffers: I,
          manualSelectedOffer: D,
          mutateIsOptedIn: P,
          mutateSelectedCodeSource: O,
          mutateSelectedCodeSourceForPromoAlwaysOn: N,
          mutateUpdateManualCouponCode: A,
          availablePromoOfferIdsLoadObject:
            s.availablePromoOfferIdsLoadObjectSelector,
          defaultOptInStatus: q,
          adsPromoAdsStickySettingStore: s.promoAdsStickySettingStoreSelector,
          promoOfferItemsByPage: s.promoOfferItemsForAdContextSelector,
          promotedObjectType: B,
          promoCodesCatalogLoadObject: s.promoCodesCatalogSelector,
          resolvedCatalogIdForEmailCapture: S,
          isPromoAdOptedIn: ce,
          isPromoAdAutoOptedIn: de,
          isPromoAdManualOptedIn: $,
          isEmailCaptureAlwaysOn: me,
          isEmailCaptureAlwaysOnOptedIn: pe,
          isEmailCaptureOptedIn: _e,
          emailCaptureOffers: K,
          mutateEmailCaptureOfferDetails: H,
          emailCaptureOfferDetailFromAdsSpec: G,
          mutateWebsiteAndInStoreManualOffer: X,
          websiteAndInstoreOfferDetailFromAdsSpec: Q,
          promoAdsOfferManagementData: Y,
          creativeSourceData: Z,
          emailCaptureModalData: J,
          mutateExcludedOffers: U,
          excludedOffers: V,
          isShopifyOfferSyncingEligible:
            s.shopifyOfferSyncingEligibilitySelector,
          commonLogData: W,
          secondaryPageId: u.secondaryPageIdSelector,
        },
        i.id + ".adsUEditorAdgroupPromoAdCreativeFieldSelector",
      );
    ((l.isCesIntegrationExperimentAndEligibleSelector = g),
      (l.hasWebsiteUrlSelector = C),
      (l.promotionalMetadataEmailCaptureCatalogIdSelector = b),
      (l.isEmailCaptureOptedInSelector = v),
      (l.emailCaptureCatalogSelector = S),
      (l.cachePagesPromoOffersSelector = R),
      (l.allowedCouponCodeSourcesSelector = L),
      (l.manualOffersSelector = I),
      (l.manualCouponCodesSelector = T),
      (l.isPromoAdAutoOptedInSelector = x),
      (l.isPromoAdManualOptedInSelector = $),
      (l.isSourceCodesFromWebsitesSelector = M),
      (l.commonLogDataSelector = W),
      (l.excludedOffersSelector = V),
      (l.setEmailCaptureOfferDetailsSelector = H),
      (l.promoAdAdgroupStickySettingLoadObjectsSelector = z),
      (l.emailCaptureOfferQueryVariablesSelector = j),
      (l.emailCaptureOfferSelector = K),
      (l.callToActionTypeSelector = ee),
      (l.isCesIntegrationEligibleSelector = ne),
      (l.isPromoAdsAlwaysOnAvailableSelector = ie),
      (l.isPromoAdsAlwaysOnAvailableOrPendingSelector = le),
      (l.isPromoAdsAlwaysOnSelector = se),
      (l.isPromoAdOptedInWithAlwaysOnSelector = ce),
      (l.isPromoAdAutoOptedInWithAlwaysOnSelector = de),
      (l.isEmailCaptureAlwaysOnSelector = me),
      (l.isEmailCaptureOptedInAlwaysOnSelector = pe),
      (l.promoAdsInitialExpansionSelector = Ce),
      (l.promoAdsSelectedItemsSelector = be),
      (l.adsUEditorAdgroupPromoAdCreativeFieldSelector = ve));
  },
  98,
);
