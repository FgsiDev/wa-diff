__d(
  "AdsUEditorAdgroupSetMessageReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDPATextGenUtils",
    "AdsMessengerLinkUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMessageDataActionFlux",
    "AdsUEditorAdgroupShopifyPromoCodePrimaryTextMutators",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOCRTextSelector",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
    "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
    "adsUEditorAdgroupsEligibleForEventDetectionSelector",
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
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            account: r("adsUEditorAccountSelector"),
            linkTypeMap: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorAdsAdObjectLinkTypeMapSelector,
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
              c = n.promoAdDefaultOptinStatus,
              d = n.remindersAdsDefaultOptIn,
              m = n.resolvedCatalogId,
              p = n.shopifyShopAdsPromotionsEligibility;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var _ = r("nullthrows")(u.get(n)),
                  f = _.campaign,
                  g = _.campaignGroup,
                  h = _.specPlugin,
                  y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    g.objective,
                    f,
                  ),
                  C = o("AdsODAXUtils").maybeTranslateObjective(
                    g.objective,
                    y,
                    f.optimization_goal,
                  ),
                  b = o(
                    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                  ).updateAdForUpcomingEventMetadata(
                    e,
                    l == null ? void 0 : l[n],
                    t.message,
                    o("AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil")
                      .DetectedDateExtractionField.PRIMARY_TEXT,
                    h,
                    d,
                    a,
                    g.objective,
                    f.optimization_goal,
                    s,
                    f,
                    g,
                  ),
                  v = o(
                    "AdsUEditorAdgroupPromoAdCreativeReducerMutators",
                  ).updateAdgroupOptInPromoAndExtractCode(
                    { adgroup: b, campaign: f, campaignGroup: g },
                    h,
                    -1,
                    t.message,
                    "AD_CREATIVE_PRIMARY_TEXT",
                    p,
                    c,
                    m,
                  ),
                  S = p == null ? void 0 : p.isShopifyShopAds;
                if (
                  (S === !0 &&
                    p.shouldUpdatePromotionalMetadataManualCouponCodes &&
                    (v = o(
                      "AdsUEditorAdgroupShopifyPromoCodePrimaryTextMutators",
                    ).mutateShopifyPromoCodeManualCouponCodesDataFromPrimaryText(
                      t.message,
                      e,
                    )),
                  i &&
                    (v = o(
                      "AdsUEditorAdgroupMultiMediaSpecMutators",
                    ).maySetMultiTextInMSSForMultiMedia(
                      v,
                      o("AdsMultiMediaUtils").MultiMediaTextType.MESSAGE,
                      [t.message],
                    )),
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(v))
                ) {
                  var R = r(
                    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
                  )(v, h);
                  return o(
                    "AdsUEditorAdgroupBodyMutators",
                  ).addPlacementCustomizationBody(
                    R,
                    h,
                    r("immutable").List(),
                    r("immutable").List([t.message]),
                    !0,
                  );
                }
                if (
                  o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(v) &&
                  !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(
                    v,
                  ) &&
                  !o(
                    "AdsAssetFeedUtils",
                  ).isDofMessagingDestinationAdgroupFromSpec(v) &&
                  !o(
                    "AdsAssetFeedUtils",
                  ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(v) &&
                  !o("AdsDPATextGenUtils").isDynamicAdAndEligibleForTextGenQE(v)
                ) {
                  var L = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                        .autotranslate.delete,
                    )(v),
                    E = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                      L,
                      "bodies",
                    );
                  return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    L,
                    h,
                    r("AdsUnifiedCreativeAPIFields").message,
                    E,
                    "text",
                    t.message,
                  );
                }
                if (
                  !o(
                    "AdsAssetFeedUtils",
                  ).isDofMessagingDestinationAdgroupFromSpec(v) &&
                  !o(
                    "AdsAssetFeedUtils",
                  ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(v) &&
                  o("AdsDPATextGenUtils").isDynamicAdAndEligibleForTextGenQE(
                    v,
                  ) &&
                  o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(v)
                ) {
                  var k = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                        .autotranslate.delete,
                    )(v),
                    I = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                      k,
                      "bodies",
                    ),
                    T = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                      k,
                      h,
                      r("AdsUnifiedCreativeAPIFields").message,
                      I,
                      "text",
                      t.message,
                    );
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.template_data.message.set(
                    t.message,
                    T,
                  );
                }
                var D = r("AdsAdgroupSemanticFields").message.set(
                  h,
                  v,
                  t.message,
                );
                return o(
                  "AdsMessengerLinkUtils",
                ).addMessageCTAForMessagingLinkInText(D, t.message, h, C);
              },
            );
          },
          o("AdsUEditorAdgroupSetMessageDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
