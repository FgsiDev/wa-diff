__d(
  "AdsUEditorAdgroupSetCatalogIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCatalogIDDataActionFlux",
    "ProductBrowsingAdsUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            identitiesToStorefrontLO: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
          },
          function (e, t, n) {
            var a = t.adgroupIDs,
              i = t.productCatalogID,
              l = n.account,
              s = n.identitiesToStorefrontLO,
              u = n.parentData;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              return o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.shop_spec.delete,
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .template_data.boosted_product_set_id.delete,
                function (e) {
                  var t = r("nullthrows")(
                      u.get(e.id),
                      "Expected parent ad objects extra data to exist for adgroup ID",
                    ),
                    n = s.getValue(),
                    a = t.campaign,
                    c = t.campaignGroup,
                    d = t.specPlugin,
                    m = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      d,
                      e,
                    ),
                    p = r("AdsAdgroupSemanticFields").pageID.get(d, e),
                    _ = o(
                      "ProductBrowsingAdsUtils",
                    ).maybeUpdateProductBrowsingSpec(
                      e,
                      !1,
                      void 0,
                      c,
                      a,
                      "catalog_id_change",
                    );
                  return (
                    (_ = o(
                      "AdsUEditorAdgroupMutators",
                    ).maybeUpdateSAOffDestinationSpec(
                      _,
                      a,
                      c,
                      i,
                      n,
                      p,
                      m,
                      o("ShopsAdsOffsiteCheckoutAdsUtils")
                        .SAOffDefaultingTrigger.CATALOG_ID_CHANGE,
                    )),
                    o(
                      "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                    ).isPromoAdOptedInWithProductCatalogForAdgroup(_) &&
                      (_ = o(
                        "AdsUEditorAdgroupPromoAdMutators",
                      ).refreshPromotionalMetadataOnCatalogChange(
                        { adgroup: _, campaign: a, campaignGroup: c },
                        l,
                        d,
                        !1,
                        i,
                      )),
                    o(
                      "PromoAdsEmailCaptureUnificationGatingUtils",
                    ).isEmailCaptureOfferUnificationEnabled() &&
                      o(
                        "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
                      ).isEmailCaptureOptedInForAdgroup(_, a, c) &&
                      (_ = o(
                        "AdsUEditorAdgroupEmailCaptureMutators",
                      ).refreshEmailCaptureMetadataOnCatalogChange(
                        { adgroup: _, campaign: a, campaignGroup: c },
                        l,
                        !1,
                        i,
                      )),
                    _
                  );
                },
              )(e);
            });
          },
          r("AdsUEditorAdgroupSetCatalogIDDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
