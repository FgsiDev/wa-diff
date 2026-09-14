__d(
  "AdsUEditorAdgroupSetLinkDescriptionAtIndexReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLinkDescriptionAtIndexDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUnifiedCreativeAPIFields",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
    "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
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
            remindersAdsDefaultOptIn: r(
              "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
            ),
            ocrText: r("adsUEditorAdgroupOCRTextSelector"),
            isMultiUploadEligible: o(
              "adsUEditorIsAdgroupMultiUploadEligibleSelector",
            ).adsUEditorIsAdgroupMSSMultiTextEligibleSelector,
          },
          function (e, t, n) {
            var a = n.eligibleForEventDetection,
              i = n.isMultiUploadEligible,
              l = n.linkTypeMap,
              s = n.ocrText,
              u = n.parentData,
              c = n.plugins,
              d = n.promoAdDefaultOptinStatus,
              m = n.remindersAdsDefaultOptIn,
              p = n.resolvedCatalogId,
              _ = n.shopifyShopAdsPromotionsEligibility;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                f,
                g,
                h,
                y,
                C,
                b =
                  t.assetIndex >= 0
                    ? t.assetIndex
                    : ((n =
                        (f = e.creative) == null ||
                        (f = f.asset_feed_spec) == null
                          ? void 0
                          : f.descriptions) != null
                        ? n
                        : r("immutable").List()
                      ).size,
                v = u == null ? void 0 : u.get(e.id),
                S = o(
                  "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                ).updateAdForUpcomingEventMetadata(
                  e,
                  l == null ? void 0 : l[e.id],
                  t.linkDescription,
                  o("AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil")
                    .DetectedDateExtractionField.DESCRIPTION,
                  r("nullthrows")(c.get(e.id)),
                  m,
                  a,
                  (g = v == null ? void 0 : v.campaignGroup.objective) != null
                    ? g
                    : null,
                  (h = v == null ? void 0 : v.campaign.optimization_goal) !=
                    null
                    ? h
                    : null,
                  s,
                  (y = v == null ? void 0 : v.campaign) != null ? y : null,
                  (C = v == null ? void 0 : v.campaignGroup) != null ? C : null,
                ),
                R = c.get(e.id),
                L =
                  v != null && R != null
                    ? o(
                        "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
                      ).updateAdgroupOptInPromoAndExtractCode(
                        {
                          adgroup: S,
                          campaign: v.campaign,
                          campaignGroup: v.campaignGroup,
                        },
                        R,
                        t.assetIndex,
                        t.linkDescription,
                        "AD_CREATIVE_DESCRIPTION",
                        _,
                        d,
                        p,
                      )
                    : S;
              if (i === !0)
                return (
                  (L = o(
                    "AdsUEditorAdgroupMultiMediaSpecMutators",
                  ).maySetMultiTextInMSSForMultiMediaAtIndex(
                    L,
                    o("AdsMultiMediaUtils").MultiMediaTextType.DESCRIPTION,
                    t.linkDescription,
                    t.assetIndex,
                  )),
                  L
                );
              var E = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                L,
                r("nullthrows")(c.get(e.id)),
                r("AdsUnifiedCreativeAPIFields").linkDescription,
                b,
                "text",
                t.linkDescription,
                !0,
              );
              return t.assetSource != null
                ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    E,
                    r("nullthrows")(c.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").linkDescription,
                    b,
                    "asset_source",
                    t.assetSource,
                  )
                : E;
            });
          },
          o("AdsUEditorAdgroupSetLinkDescriptionAtIndexDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
