__d(
  "adsUEditorAdgroupPromoAdRelayStoreSelector",
  [
    "AdsAccountStore",
    "AdsAdDestinationUrlUtils",
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsConnectedSourcesDataProvider",
    "AdsPromoAdsAdAccountDataStore",
    "AdsPromoAdsDefaultCatalogStore",
    "AdsPromoAdsEmailCaptureSettingGKStore",
    "AdsPromoAdsPageOfferItemsGKStore",
    "AdsPromoAdsShopifyOfferSyncingEligibilityStore",
    "AdsPromoAdsStickySettingGKStore",
    "AdsUEditorSelectors",
    "IncentivesAdsManagerUtils",
    "LoadObject",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerOfferTypeUtils",
    "PromoAdsAdsManagerOfferUtils",
    "PromoAdsOfferSourceConstants",
    "adsChooseSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupConnectedSourcesProductSetSelector",
    "adsUEditorAdgroupPCAUnificationCatalogSelector",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorAdgroupPromoAdDataSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUeditorAdgroupDestinationUrlSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("AdsPromoAdsStickySettingGKStore").fluxGetSelector(),
      c = r("AdsPromoAdsEmailCaptureSettingGKStore").fluxGetSelector(),
      d = r("adsCreateStoreSelector")(
        [r("AdsAccountStore"), r("AdsPromoAdsAdAccountDataStore")],
        function () {
          var e = r("AdsAccountStore").getSelectedAccountID();
          return e != null
            ? r("AdsPromoAdsAdAccountDataStore").get(e)
            : r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".promoAdAccountStickyStoreSelector" },
      ),
      m = r("AdsPromoAdsPageOfferItemsGKStore").fluxGetSelector(),
      p = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").adgroup.valuesByAccessor(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .promotional_metadata.manual_coupon_codes.get,
          ),
        ],
        function (t) {
          var e,
            n = (e = t[0]) == null ? void 0 : e.toArray();
          return n != null && n.length > 0 ? n : null;
        },
        { name: i.id + ".adSpecCouponCodesSelector" },
      ),
      _ = r("adsCreateStoreSelector")(
        [],
        function () {
          return function (e) {
            return r("LoadObject").empty({ creatorModuleID: i.id });
          };
        },
        { name: i.id + ".defaultCatalogStoreEmptySelector" },
      ),
      f =
        (e =
          r("AdsPromoAdsDefaultCatalogStore") == null
            ? void 0
            : r("AdsPromoAdsDefaultCatalogStore").fluxGetSelector()) != null
          ? e
          : _,
      g = r("adsCreateSelector")(
        [
          r("adsUEditorAdgroupPCAUnificationCatalogSelector"),
          r("adsUEditorAdgroupProductCatalogIDSelector"),
          r("adsUEditorAdgroupConnectedSourcesProductSetSelector"),
          r("adsUEditorAccountSelector"),
          o("adsUEditorAdgroupPromoAdDataSelector").pageIdSelector,
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          o("adsUEditorAdgroupPromoAdDataSelector").pixelIDSelector,
          r("AdsConnectedSourcesDataProvider").toFluxSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
        ],
        function (t, n, r, a, i, l, s, u, c) {
          var e,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C = n.getValue(),
            b = C != null ? o("AdsBulkValueUtils").getUniformValue(C) : null,
            v =
              (e = (d = r.getValue()) == null ? void 0 : d.catalogID) != null
                ? e
                : null,
            S =
              (m = (p = t != null ? t : b) != null ? p : v) != null ? m : null,
            R =
              (_ =
                u == null ||
                (f = u.pluginState) == null ||
                (f = f.catalog) == null
                  ? void 0
                  : f.productSetID) != null
                ? _
                : null;
          return i == null && S == null && R == null
            ? null
            : {
                account_id: a.account_id,
                adgroup_maybe_draft_id: (g = c[0]) != null ? g : null,
                destination_url:
                  (h = o("AdsAdDestinationUrlUtils").getAdDestinationUrl(
                    l == null || (y = l[0]) == null || (y = y.creative) == null
                      ? void 0
                      : y.object_story_spec,
                  )) != null
                    ? h
                    : null,
                page_id: i,
                pixel_id: s != null ? s : null,
                product_set_id: R,
                resolved_catalog_id: S,
              };
        },
        { name: i.id + ".promoAdsCatalogResolutionInputsSelector" },
      ),
      h = r("adsCreateSelector")(
        [g, f],
        function (t, n) {
          return t == null
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : n(t);
        },
        { name: i.id + ".hypCatalogSelector" },
      ),
      y = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null ||
              (t = t.promotional_metadata) == null
              ? void 0
              : t.product_catalog_id;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t);
        },
        { name: i.id + ".promotionalMetadataPromoCodesCatalogIdSelector" },
      ),
      C = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").adgroup.valuesByAccessor(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .promotional_metadata.allowed_coupon_code_sources.get,
          ),
        ],
        function (t) {
          return t[0]
            ? o(
                "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
              ).isPromoAdOptedIn(t[0])
            : !1;
        },
        { name: i.id + ".isPromoAdOptedInSelector" },
      ),
      b = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").adgroup.valuesByAccessor(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .promotional_metadata.allowed_coupon_code_sources.get,
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
      v = r("adsCreateSelector")(
        [
          y,
          o("adsUEditorAdgroupPromoAdDataSelector")
            .isBrandedContentEnabledSelector,
          C,
          h,
        ],
        function (t, n, o, a) {
          return n
            ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
            : o
              ? r("LoadObject").withValue(t, { creatorModuleID: i.id })
              : t != null
                ? r("LoadObject").withValue(t, { creatorModuleID: i.id })
                : a.hasError()
                  ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
                  : a.mapValue(function (e) {
                      var t;
                      return (t = e == null ? void 0 : e.id) != null ? t : null;
                    });
        },
        { name: i.id + ".promoCodesCatalogSelector" },
      ),
      S = r("adsCreateSelector")(
        [v],
        function (t) {
          var e;
          return (e = t.getValue()) != null ? e : null;
        },
        { name: i.id + ".resolvedPromoCodesCatalogIdSelector" },
      ),
      R = r("adsCreateSelector")(
        [v, h],
        function (t, n) {
          var e, r;
          return t.isLoading() || t.hasError() || t.getValue() == null
            ? null
            : (e =
                  (r = n.getValue()) == null
                    ? void 0
                    : r.is_crawled_offers_enabled) != null
              ? e
              : null;
        },
        { name: i.id + ".isCrawledOffersEnabledSelector" },
      ),
      L = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("adsUEditorAdgroupPromoAdDataSelector").pageIdSelector,
          o("adsUEditorAdgroupPromoAdDataSelector").secondaryPageIdSelector,
          o("adsUEditorAdgroupPromoAdDataSelector").pixelIDSelector,
          o("adsUEditorAdgroupPromoAdDataSelector").productSetIDSelector,
          m,
          v,
          p,
          b,
        ],
        function (t, n, a, l, s, u, c, d, m) {
          var e;
          if (n == null)
            return r("LoadObject").withValue(null, { creatorModuleID: i.id });
          if (c.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var p = (e = c.getValue()) != null ? e : null;
          return u({
            account_id: t.account_id,
            ad_spec_coupon_codes: m ? d : null,
            catalog_id: p,
            page_id: n,
            pixel_id: l,
            product_set_id: s,
            secondary_page_id: a,
            sources: o("PromoAdsOfferSourceConstants")
              .PROMO_ADS_OFFER_FETCHING_SOURCES,
          });
        },
        { name: i.id + ".promoOfferItemsRawFromAdContextSelector" },
      ),
      E = r("adsCreateSelector")(
        [L],
        function (t) {
          var e = t.getValue();
          if (e == null) return null;
          var n = o(
            "PromoAdsAdsManagerOfferUtils",
          ).populatePromoOfferItemsFromGraphQL(e);
          return n;
        },
        { name: i.id + ".promoOfferItemsForAdContextSelector" },
      ),
      k = r("adsCreateSelector")(
        [L],
        function (t) {
          return t.mapValue(function (e) {
            return o(
              "PromoAdsAdsManagerOfferTypeUtils",
            ).convertToCouponCodesForPromotionalMetadata(e != null ? e : []);
          });
        },
        { name: i.id + ".availablePromoOfferIdsLoadObjectSelector" },
      ),
      I = r("adsCreateStoreSelector")(
        [],
        function () {
          return function () {
            return r("LoadObject").withValue(null, { creatorModuleID: i.id });
          };
        },
        {
          name:
            i.id + ".promoAdsShopifyOfferSyncingEligibilityStoreEmptySelector",
        },
      ),
      T =
        (s =
          r("AdsPromoAdsShopifyOfferSyncingEligibilityStore") == null
            ? void 0
            : r(
                "AdsPromoAdsShopifyOfferSyncingEligibilityStore",
              ).fluxGetSelector()) != null
          ? s
          : I,
      D = r("adsCreateSelector")(
        [o("adsUEditorAdgroupPromoAdDataSelector").pageIdSelector, T],
        function (t, n) {
          var e;
          if (t == null) return !1;
          var r = n({ page_id: t }).getValue();
          return (e = r == null ? void 0 : r.is_eligible) != null ? e : !1;
        },
        { name: i.id + ".shopifyOfferSyncingEligibilitySelector" },
      ),
      x = r("adsCreateSelector")(
        [
          p,
          E,
          o("adsUeditorAdgroupDestinationUrlSelector").adDestinationUrlSelector,
        ],
        function (t, n, r) {
          var e = o("IncentivesAdsManagerUtils").getDomainFromURL(r);
          return (
            t == null &&
            n != null &&
            !n.some(function (t) {
              return (
                t.isDeleted !== !0 &&
                t.isBlockedByDetectedOfferToggle !== !0 &&
                !o("PromoAdsAdsManagerOfferUtils").isOfferInvalidForDomain(
                  t,
                  e,
                  !0,
                )
              );
            })
          );
        },
        { name: i.id + ".hasCatalogNoOffersUngatedForAlwaysOnSelector" },
      ),
      $ = r("adsCreateSelector")(
        [x, R],
        function (t, n) {
          return t && n === !1;
        },
        {
          name:
            i.id +
            ".hasCatalogNoOffersWithDetectedOffersDisabledUngatedSelector",
        },
      ),
      P = r("adsChooseSelector")(
        function () {
          return o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isVanillaPromoAlwaysOnNoOffersNewUIEnabled();
        },
        $,
        r("adsCreateSelector")(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".hasCatalogNoOffersWithDetectedOffersDisabledSelector",
      ),
      N = r("adsCreateSelector")(
        [E, R],
        function (t, n) {
          return (
            t != null &&
            n === !1 &&
            t.every(function (e) {
              return (
                e.isDeleted === !0 ||
                e.isBlockedByDetectedOfferToggle === !0 ||
                (o(
                  "PromoAdsAdsManagerOfferUtils",
                ).hasAMOfferManagementDetectionSource(e) &&
                  !o(
                    "PromoAdsAdsManagerOfferUtils",
                  ).hasShopifySyncedDetectionSource(e))
              );
            })
          );
        },
        {
          name:
            i.id +
            ".hasCatalogOnlyManualOffersWithDetectedOffersDisabledUngatedSelector",
        },
      ),
      M = r("adsChooseSelector")(
        function () {
          return o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isVanillaPromoAlwaysOnNoOffersNewUIEnabled();
        },
        N,
        r("adsCreateSelector")(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".hasCatalogOnlyManualOffersWithDetectedOffersDisabledSelector",
      ),
      w = r("adsCreateSelector")(
        [x, R],
        function (t, n) {
          return t && n === !0;
        },
        {
          name:
            i.id +
            ".hasCatalogNoOffersWithDetectedOffersEnabledUngatedSelector",
        },
      ),
      A = r("adsChooseSelector")(
        function () {
          return o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isVanillaPromoAlwaysOnNoOffersNewUIEnabled();
        },
        w,
        r("adsCreateSelector")(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".hasCatalogNoOffersWithDetectedOffersEnabledSelector",
      );
    ((l.promoAdsStickySettingStoreSelector = u),
      (l.promoAdsEmailCaptureSettingStoreSelector = c),
      (l.promoAdAccountStickyStoreSelector = d),
      (l.promoAdsPageOfferItemStoreSelector = m),
      (l.adSpecCouponCodesSelector = p),
      (l.promoAdsCatalogResolutionInputsSelector = g),
      (l.hypCatalogSelector = h),
      (l.promotionalMetadataPromoCodesCatalogIdSelector = y),
      (l.isPromoAdOptedInSelector = C),
      (l.promoCodesCatalogSelector = v),
      (l.resolvedPromoCodesCatalogIdSelector = S),
      (l.isCrawledOffersEnabledSelector = R),
      (l.promoOfferItemsForAdContextSelector = E),
      (l.availablePromoOfferIdsLoadObjectSelector = k),
      (l.shopifyOfferSyncingEligibilitySelector = D),
      (l.hasCatalogNoOffersWithDetectedOffersDisabledSelector = P),
      (l.hasCatalogOnlyManualOffersWithDetectedOffersDisabledSelector = M),
      (l.hasCatalogNoOffersWithDetectedOffersEnabledSelector = A));
  },
  98,
);
