__d(
  "AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaReducerPlugin",
  [
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupDynamicCarouselMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaActionFlux",
    "PERelevanceUtils",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getPage: r("AdsPageStore").getSelector,
            isShopsAdsIncentiveProgram: o(
              "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
            ).adsUEditorCampaignIsSomeShopsAdsIncentiveProgramSelector,
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
          },
          function (e, t, n) {
            var a = n.bizAIEligibility,
              i = n.getPage,
              l = n.isShopsAdsIncentiveProgram,
              s = n.parentData,
              u = n.promoAdDefaultOptinStatus;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var c = r("nullthrows")(s.get(n)),
                  d = c.campaign,
                  m = c.campaignGroup,
                  p = c.specPlugin,
                  _ = e;
                return (
                  l &&
                    (_ = o(
                      "AdsUEditorAdgroupShopAdsUtils",
                    ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e)),
                  (_ =
                    o(
                      "PERelevanceUtils",
                    ).mayBeDeleteAdExtensionsRelevancySpecFromAdgroup(_)),
                  o(
                    "AdsUEditorAdgroupDynamicCarouselMutators",
                  ).transformStaticToDynamicCarouselMedia(
                    _,
                    { campaignGroup: m, campaign: d },
                    p,
                    t.disablePAC,
                    t.defaultProductSetID,
                    t.defaultProductSetVertical,
                    t.isShopAdsBundleAvailable,
                    i,
                    u,
                    void 0,
                    t.defaultProductSetCatalogItemType,
                    a,
                  )
                );
              },
            );
          },
          o("AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
