__d(
  "AdsUEditorAdgroupSetHeadlineReducerPlugin",
  [
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDPATextGenUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetHeadlineDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUnifiedCreativeAPIFields",
    "DAFlexibleFormatUtils",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
    "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
    "adsUEditorAdgroupsEligibleForEventDetectionSelector",
    "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "gkx",
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
            eligibleForEventDetection: r(
              "adsUEditorAdgroupsEligibleForEventDetectionSelector",
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
                y = u == null ? void 0 : u.get(e.id),
                C = o(
                  "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                ).updateAdForUpcomingEventMetadata(
                  e,
                  l == null ? void 0 : l[e.id],
                  t.headline,
                  o("AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil")
                    .DetectedDateExtractionField.HEADLINE,
                  r("nullthrows")(c.get(e.id)),
                  m,
                  a,
                  (n = y == null ? void 0 : y.campaignGroup.objective) != null
                    ? n
                    : null,
                  (f = y == null ? void 0 : y.campaign.optimization_goal) !=
                    null
                    ? f
                    : null,
                  s,
                  (g = y == null ? void 0 : y.campaign) != null ? g : null,
                  (h = y == null ? void 0 : y.campaignGroup) != null ? h : null,
                ),
                b = c.get(e.id),
                v =
                  y != null && b != null
                    ? o(
                        "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
                      ).updateAdgroupOptInPromoAndExtractCode(
                        {
                          adgroup: C,
                          campaign: y.campaign,
                          campaignGroup: y.campaignGroup,
                        },
                        b,
                        -1,
                        t.headline,
                        "AD_CREATIVE_HEADLINE",
                        _,
                        d,
                        p,
                      )
                    : C;
              i === !0 &&
                (v = o(
                  "AdsUEditorAdgroupMultiMediaSpecMutators",
                ).maySetMultiTextInMSSForMultiMedia(
                  v,
                  o("AdsMultiMediaUtils").MultiMediaTextType.HEADLINE,
                  [t.headline],
                ));
              var S = c.get(e.id);
              if (
                r("gkx")("12494") &&
                o(
                  "DAFlexibleFormatUtils",
                ).isAdgroupEligibleForDACarouselIntroCardRevamp(v) &&
                o("DAFlexibleFormatUtils").hasDAIntroCard(v) &&
                S != null
              ) {
                var R = r("AdsAdgroupChildAttachmentsFields").headline.get(
                  v,
                  S,
                  1,
                );
                if (R.supported) return v.setIn(R.path, t.headline);
              }
              if (
                o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) &&
                !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                  e,
                ) &&
                !o(
                  "AdsAssetFeedUtils",
                ).isDofMessagingDestinationAdgroupFromSpec(e) &&
                !o(
                  "AdsAssetFeedUtils",
                ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e) &&
                !o("AdsDPATextGenUtils").isDynamicAdAndEligibleForTextGenQE(e)
              ) {
                var L = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.autotranslate.delete(v),
                  E = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                    L,
                    "titles",
                  );
                return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                  L,
                  r("nullthrows")(c.get(L.id)),
                  r("AdsUnifiedCreativeAPIFields").headline,
                  E,
                  "text",
                  t.headline,
                );
              } else
                return r("AdsAdgroupSemanticFields").headline.set(
                  r("nullthrows")(c.get(e.id)),
                  v,
                  t.headline,
                );
            });
          },
          o("AdsUEditorAdgroupSetHeadlineDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
