__d(
  "AdsUEditorAdgroupSetChildDescriptionReducerPlugin",
  [
    "invariant",
    "AdsAdgroupChildAttachmentsFields",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildDescriptionDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
    "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            resolvedCatalogId: o("adsUEditorAdgroupPromoAdRelayStoreSelector")
              .resolvedPromoCodesCatalogIdSelector,
            shopifyShopAdsPromotionsEligibility: o(
              "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
            ).adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector,
          },
          function (e, t, n) {
            var a = n.parentData,
              i = n.plugins,
              l = n.promoAdDefaultOptinStatus,
              s = n.resolvedCatalogId,
              u = n.shopifyShopAdsPromotionsEligibility;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var c = t.childIndex,
                  d = t.description,
                  m = r("nullthrows")(i.get(n)),
                  p = r("AdsAdgroupChildAttachmentsFields").description.get(
                    e,
                    m,
                    c,
                  ),
                  _ = p.supported ? e.setIn(p.path, d) : e,
                  f = a == null ? void 0 : a.get(n);
                return (
                  f != null &&
                    (_ = o(
                      "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
                    ).updateAdgroupOptInPromoAndExtractCode(
                      {
                        adgroup: _,
                        campaign: f.campaign,
                        campaignGroup: f.campaignGroup,
                      },
                      m,
                      -1,
                      d,
                      "AD_CREATIVE_DESCRIPTION",
                      u,
                      l,
                      s,
                    )),
                  _
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetChildDescriptionDataActionFlux").actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
