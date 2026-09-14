__d(
  "AdsUEditorAdgroupSetLinkDescriptionReducerPlugin",
  [
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLinkDescriptionDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUnifiedCreativeAPIFields",
    "DAFlexibleFormatUtils",
    "FBLogger",
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
            u = n.ocrText,
            c = n.parentData,
            d = n.plugins,
            m = n.promoAdDefaultOptinStatus,
            p = n.remindersAdsDefaultOptIn,
            _ = n.resolvedCatalogId,
            f = n.shopifyShopAdsPromotionsEligibility;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
            var g,
              h,
              y,
              C,
              b = c == null ? void 0 : c.get(e.id),
              v = o(
                "AdsUEditorAdgroupUpcomingEventMetadataMutators",
              ).updateAdForUpcomingEventMetadata(
                e,
                l == null ? void 0 : l[e.id],
                t.linkDescription,
                o("AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil")
                  .DetectedDateExtractionField.DESCRIPTION,
                r("nullthrows")(d.get(n)),
                p,
                a,
                (g = b == null ? void 0 : b.campaignGroup.objective) != null
                  ? g
                  : null,
                (h = b == null ? void 0 : b.campaign.optimization_goal) != null
                  ? h
                  : null,
                u,
                (y = b == null ? void 0 : b.campaign) != null ? y : null,
                (C = b == null ? void 0 : b.campaignGroup) != null ? C : null,
              ),
              S = d.get(e.id),
              R =
                (b == null ? void 0 : b.campaign) != null &&
                (b == null ? void 0 : b.campaignGroup) != null &&
                S != null
                  ? o(
                      "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
                    ).updateAdgroupOptInPromoAndExtractCode(
                      {
                        adgroup: v,
                        campaign: b.campaign,
                        campaignGroup: b.campaignGroup,
                      },
                      S,
                      -1,
                      t.linkDescription,
                      "AD_CREATIVE_DESCRIPTION",
                      f,
                      m,
                      _,
                    )
                  : v;
            if (
              (i === !0 &&
                (R = o(
                  "AdsUEditorAdgroupMultiMediaSpecMutators",
                ).maySetMultiTextInMSSForMultiMedia(
                  R,
                  o("AdsMultiMediaUtils").MultiMediaTextType.DESCRIPTION,
                  [t.linkDescription],
                )),
              r("gkx")("12494") &&
                o(
                  "DAFlexibleFormatUtils",
                ).isAdgroupEligibleForDACarouselIntroCardRevamp(R) &&
                o("DAFlexibleFormatUtils").hasDAIntroCard(R) &&
                S != null)
            ) {
              var L = r("AdsAdgroupChildAttachmentsFields").description.get(
                R,
                S,
                1,
              );
              if (L != null && L.supported)
                return R.setIn(L.path, t.linkDescription);
            }
            if (
              o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) &&
              !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
                e,
              ) &&
              !o(
                "AdsAssetFeedUtils",
              ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
            ) {
              var E = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.autotranslate.delete(R),
                k = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                  E,
                  "descriptions",
                );
              return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                s(E, d.get(n)),
                r("nullthrows")(d.get(n)),
                r("AdsUnifiedCreativeAPIFields").linkDescription,
                k,
                "text",
                t.linkDescription,
              );
            } else
              return r("AdsAdgroupSemanticFields").linkDescription.set(
                r("nullthrows")(d.get(n)),
                R,
                t.linkDescription,
              );
          });
        },
        o("AdsUEditorAdgroupSetLinkDescriptionDataActionFlux").actionType,
      ),
    };
    function s(e, t) {
      if (
        t &&
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
        !o("AdsAssetFeedUtils").hasCarouselFormat(e)
      ) {
        var n = o("AdsAssetFeedMutationUtils").countAssets(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").linkDescription,
          ),
          a = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
            e,
            "descriptions",
          );
        if (n > 1 && a === 0) {
          var i;
          return (
            r("FBLogger")("ads_pac").warn(
              "PAC ads should not have multiple descriptions",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.descriptions.set(
              (i = e.creative) == null ||
                (i = i.asset_feed_spec) == null ||
                (i = i.descriptions) == null
                ? void 0
                : i.take(1),
            )(e)
          );
        }
      }
      return e;
    }
    var u = e;
    l.default = u;
  },
  98,
);
