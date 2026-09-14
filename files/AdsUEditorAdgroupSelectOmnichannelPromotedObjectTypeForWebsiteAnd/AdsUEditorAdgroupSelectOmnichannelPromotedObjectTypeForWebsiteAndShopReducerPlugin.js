__d(
  "AdsUEditorAdgroupSelectOmnichannelPromotedObjectTypeForWebsiteAndShopReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsImageIDClasses",
    "AdsImageInfoStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCatalogOptions",
    "AdsUEditorAdgroupCategoryAdsSelectors",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
    "AdsUEditorAdgroupShopsAdsMutators",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorBaseAssetPickerUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignShopAdsOptInDataActionFlux",
    "AdsUEditorPageIGAccountWithAdgroupSelector",
    "ProductCatalogExpensiveStore",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "ShopAdsPageToCommerceMerchantSettingsSelector",
    "ShopsAdsInstagramAccountsSelector",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorAdgroupDefaultProductSetIDSelector",
    "adsUEditorAdgroupDefaultProductSetVerticalSelector",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "adsUEditorAdgroupShopLevelActivationIdentitiesDefaultingSelector",
    "adsUEditorAdgroupStorefrontsSelector",
    "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            selectedLinkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            instagramAccountsData: o("ShopsAdsInstagramAccountsSelector")
              .ShopsAdsInstagramAccountsSelector,
            instagramAccountsFromPageID: o(
              "AdsUEditorPageIGAccountWithAdgroupSelector",
            ).AdsUEditorPageIGAccountWithAdgroupSelector,
            isShopsAdsIncentiveProgram: o(
              "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
            ).adsUEditorCampaignIsSomeShopsAdsIncentiveProgramSelector,
            getShopAdsToCommerceMerchantSettings: r(
              "ShopAdsPageToCommerceMerchantSettingsSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            selectedCatalogOptionMap: o("AdsUEditorAdgroupCategoryAdsSelectors")
              .selectedCatalogOptionMapSelector,
            getPage: r("AdsPageStore").getSelector,
            defaultProductSetID: r(
              "adsUEditorAdgroupDefaultProductSetIDSelector",
            ),
            defaultProductSetVertical: r(
              "adsUEditorAdgroupDefaultProductSetVerticalSelector",
            ),
            isShopAdsBundleAvailable: o(
              "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
            ).adsUEditorShopAdsBundleCreativeEditorSelector,
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            setPageReducerExtraData: r(
              "adsUEditorAdgroupSetPageReducerExtraDataSelector",
            ),
            getProductCatalog: r("ProductCatalogExpensiveStore").getSelector,
            identityToStorefrontMap: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            recommendedIdentitiesWithSAIPAdCredit: o(
              "adsUEditorAdgroupShopLevelActivationIdentitiesDefaultingSelector",
            ).adsUEditorAdgroupShopLevelActivationIdentitiesDefaultingSelector,
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            destinationLinkType: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorBulkSelectedLinkTypeSelector,
            getImage: r("AdsImageInfoStore").getFullSizeSelector,
            storefrontsSDDLoadObject: o(
              "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
            )
              .adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector,
            remindersAdsDefaultEnabled: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bizAIEligibility,
              l = n.cachedStoreState,
              u = n.defaultProductSetID,
              c = n.defaultProductSetVertical,
              d = n.destinationLinkType,
              m = n.getImage,
              p = n.getPage,
              _ = n.getProductCatalog,
              f = n.getShopAdsToCommerceMerchantSettings,
              g = n.getShouldEnableAutomaticFlowByDefault,
              h = n.identityToStorefrontMap,
              y = n.instagramAccountsData,
              C = n.instagramAccountsFromPageID,
              b = n.isShopAdsBundleAvailable,
              v = n.isShopsAdsIncentiveProgram,
              S = n.onsiteDestinations,
              R = n.parentData,
              L = n.recommendedIdentitiesWithSAIPAdCredit,
              E = n.remindersAdsDefaultEnabled,
              k = n.selectedCatalogOptionMap,
              I = n.selectedLinkTypeMap,
              T = n.setPageReducerExtraData,
              D = n.storefrontsSDDLoadObject;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var x,
                  $,
                  P = r("nullthrows")(
                    R.get(n),
                    "Expected parent ad objects data (campaign, campaignGroup, specPlugin) to exist for adgroup ID: " +
                      n,
                  ),
                  N = P.campaign,
                  M = P.campaignGroup,
                  w = P.specPlugin,
                  A = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: N, campaignGroup: M }),
                  F = o("AdsODAXUtils").maybeTranslateObjective(
                    M.objective,
                    A,
                    N.optimization_goal,
                  ),
                  O = o(
                    "adsUEditorAdgroupStorefrontsSelector",
                  ).getStorefrontsForAdObject(
                    { adgroup: e, campaign: N, campaignGroup: M },
                    f,
                    e.account_id,
                    y,
                    C,
                  ),
                  B = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(e, w),
                  W = r("isTruthy")(L)
                    ? L
                    : t.shopsAdsShopsOnboardingRecommendedIdentitiesCouponInfo,
                  q = o(
                    "AdsUEditorAdgroupShopsAdsMutators",
                  ).transformAdgroupToShopsAds(e, {
                    account: a,
                    campaign: N,
                    campaignGroup: M,
                    specPlugin: w,
                    cachedStoreState: l,
                    effectiveObjective: F,
                    getShouldEnableAutomaticFlowByDefault: g,
                    isShopsAdsIncentiveProgram: v,
                    selectedCatalogOption:
                      (x = k.get(e.id)) != null
                        ? x
                        : o("AdsUEditorAdgroupCatalogOptions")
                            .AdsUEditorAdgroupCatalogOptions.MIXED_CRITERIA,
                    storefrontsLoadObject: O,
                    getPage: p,
                    defaultProductSetID: u,
                    defaultProductSetVertical: c,
                    isShopAdsBundleAvailable: b,
                    getProductCatalog: _,
                    isMFRV2Applied: t.isMFRV2Applied,
                    adgroupSDDResponseMap: t.adgroupSDDResponseMap,
                    adgroupToShopSpecShopIDMap: t.adgroupToShopSpecShopIDMap,
                    adgroupToProductSetIDMap: t.adgroupToProductSetIDMap,
                    setPageReducerExtraData: T,
                    identityToStorefrontMap: h.getValue(),
                    hostID: t.hostID,
                    selectedLinkType: I[n],
                    linkPostFormat: B,
                    isEligibleForOnsiteDestination: o(
                      "AdsUEditorAdgroupShopsAdsMutators",
                    ).isAdgroupEligibleForOnsiteDestination(e),
                    recommendedIdentitiesWithSAIPAdCredit: W,
                    remindersAdsDefaultEnabled: E,
                  });
                (o(
                  "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                ).hasSpecificOrigin(e, "creative_asset_groups") &&
                  (q = o(
                    "AdsAdgroupLinkPostFormatMutators",
                  ).removeCreativeAssetGroupsSpecField(q)),
                  (q = o(
                    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
                  ).clearWebsiteDestinationOptimization(q)));
                var U =
                  ($ = o("AdsAPIAdgroupRecordUtils").getImageData(e, w)) == null
                    ? void 0
                    : $.imageHash;
                return (
                  t.updateShopDestinationFromSDD === !0 &&
                    (q = s({
                      adgroup: q,
                      campaign: N,
                      account: a,
                      destinationLinkType: d,
                      storefrontsSDDLoadObject: D,
                      onsiteDestinations: S,
                      adgroupIDs: t.adgroupIDs,
                      getImage: m,
                      isOnsiteDestinationOptimizationDefaultOptIn: !0,
                      imageHash: U,
                    })),
                  (q = o(
                    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                  ).updateBizAIDefaultOptIn(
                    q,
                    i,
                    o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                      .BizAIDefaultOptInCallSite
                      .SELECT_OMNICHANNEL_WEBSITE_AND_SHOP,
                  )),
                  q
                );
              },
            );
          },
          o("AdsUEditorCampaignShopAdsOptInDataActionFlux").actionType,
        ),
      },
      s = function (t) {
        var e,
          n,
          a = t.account,
          i = t.adgroup,
          l = t.adgroupIDs,
          s = t.campaign,
          u = t.destinationLinkType,
          c = t.getImage,
          d = t.imageHash,
          m = t.isOnsiteDestinationOptimizationDefaultOptIn,
          p = t.onsiteDestinations,
          _ = t.storefrontsSDDLoadObject,
          f = o("AdsBulkValueUtils").getUniformValue(u),
          g = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_id.get(i),
          h = o("AdsUEditorBaseAssetPickerUtils").getBaseImageAssetFromAdgroup(
            i,
            a.account_id,
            c,
          ),
          y = h == null ? void 0 : h.baseAsset.id,
          C =
            y && y instanceof o("AdsImageIDClasses").AdsExternalImageID
              ? y.getFacebookID()
              : null,
          b = _.getValue(),
          v =
            b != null ? o("AdsBulkValueUtils").getUniformValue(b, null) : null,
          S =
            (e =
              i == null ||
              (n = i.creative) == null ||
              (n = n.object_story_spec) == null ||
              (n = n.link_data) == null
                ? void 0
                : n.link) != null
              ? e
              : "",
          R = o(
            "AdsUEditorAdgroupOnsiteDestinationsMutators",
          ).getFirstDestinationID(
            v,
            p,
            S,
            l,
            d,
            C,
            g,
            null,
            null,
            "single_media",
          );
        return o(
          "AdsUEditorAdgroupOnsiteDestinationsMutators",
        ).updateOnsiteDestinationsWithLinkType(i, s, f, v, R, !0, m);
      },
      u = e;
    l.default = u;
  },
  98,
);
