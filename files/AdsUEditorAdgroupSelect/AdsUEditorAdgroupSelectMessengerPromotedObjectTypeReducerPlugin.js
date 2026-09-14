__d(
  "AdsUEditorAdgroupSelectMessengerPromotedObjectTypeReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAssetFeedUtils",
    "AdsBulkValueUtils",
    "AdsCallAddonUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
    "AdsUEditorExistingPostMutators",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessengerMutators",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "AdsUEditorSelectors",
    "AdsUEditorWebsiteAndAppMutators",
    "AdsUEditorWebsiteMutators",
    "AdsUEditorWhatsAppMutators",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelector",
    "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
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
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountID,
            defaultPageID: r(
              "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelector",
            ),
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
            placementSpecs: o("AdsUEditorAdgroupSelectors").placementSpecsMap,
            getPage: r("AdsPageStore").getSelector,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bulkIsODAXCampaignGroup,
              l = n.cachedStoreState,
              s = n.contextualDiscoveryAdsEligibilityState,
              u = n.defaultInstagramID,
              c = n.defaultPageID,
              d = n.getInstagramAccount,
              m = n.getPage,
              p = n.getShouldEnableAutomaticFlowByDefault,
              _ = n.parentData,
              f = n.placementSpecs,
              g = o("AdsBulkValueUtils").getUniformValueOrDefault(i, !1);
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n,
                  i,
                  h,
                  y = e,
                  C = r("nullthrows")(_.get(t)),
                  b = C.campaign,
                  v = C.campaignGroup,
                  S = C.specPlugin,
                  R = v.objective,
                  L = r(
                    "AdsAdgroupSemanticFields",
                  ).multiShareEndCard.isSupported(S, y),
                  E = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(v),
                  k = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: b, campaignGroup: v }),
                  I = o(
                    "AdsUEditorAdgroupCachedUtils",
                  ).getCachedCallToActionLink(l, t, null),
                  T = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, S),
                  D = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(b.campaign_creation_source)
                    ? e
                    : null;
                ((y = o(
                  "AdsUEditorMultiDestinationAdgroupMutators",
                ).cleanMultiDestAdSpecOnConversionLocationChange(y)),
                  (y = r("adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported")(
                    y,
                    { campaign: b, campaignGroup: v },
                  )),
                  r("AdsAdgroupSemanticFields").offerID.isSupported(S, y) &&
                    (y = o("AdsUEditorAdgroupOfferMutators").removeOfferIDState(
                      y,
                      S,
                      R,
                    )),
                  (y = o(
                    "AdsUEditorInstagramMutators",
                  ).maybeSetAdgroupCreativeInstagramAccountID(y, S, u)),
                  (y = o("AdsUEditorWebsiteAndAppMutators").deleteAdgroupFields(
                    y,
                    S,
                  )),
                  (y = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.shop_spec.delete,
                  )(y)),
                  (y = o(
                    "AdsUEditorAdgroupShopAdsUtils",
                  ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(y)),
                  (y = o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
                    y,
                    o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                      .PromoAdDefaultOptOutCallsite
                      .SET_MESSGENGER_PROMOTED_OBJECT_TYPE,
                  )),
                  (y = o("AdsCallAddonUtils").clearCallExtensionFields(y, S)),
                  (y = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).cleanWebsiteExtensionFields(y)),
                  (y = o(
                    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                  ).cleanLeadNurtureChannelsField(y)),
                  r("AdsAdgroupSemanticFields").linkURL.isSupported(S, y) &&
                    (y = o("AdsUEditorWebsiteMutators").setWebsiteURL({
                      adgroup: y,
                      campaignGroupPromotedPageID: void 0,
                      objective: R,
                      promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
                      specPlugin: S,
                      websiteURL: "",
                    })),
                  (y = o("AdsUEditorCallToActionMutators").setCallToAction({
                    callToActionType: null,
                    pages: null,
                    cachedCallToActionLink: I,
                    adgroup: y,
                    campaignGroupPromotedPageID: E,
                    objective: R,
                    promotedObjectType: k,
                    specPlugin: S,
                  })),
                  (y = o(
                    "AdsUEditorWhatsAppMutators",
                  ).deleteWhatsAppDestinationFields({
                    adgroup: y,
                    specPlugin: r("AdsAdgroupSpecPathPluginResolver").resolve({
                      accountType: "REGULAR",
                      objective: r("AdsAPIObjectives").MESSAGES,
                      promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
                    }),
                    supportPageEndCard: L,
                    removeWebsiteURL: !0,
                  })),
                  (y = o(
                    "AdsUEditorAdgroupClearDataMutatorsUtils",
                  ).clearCTAFields({
                    adgroup: y,
                    callToActionType: null,
                    promotedObjectType: k,
                    specPlugin: S,
                  })),
                  (R === r("AdsAPIObjectives").LINK_CLICKS ||
                    R === r("AdsAPIObjectives").CONVERSIONS) &&
                    (y = r("adsACOIsACOAdgroup")(y)
                      ? r("adsACORemoveACOSpec")(y)
                      : y));
                var x = c != null ? m(c) : null,
                  $ = f.get(y.id);
                ((y = o(
                  "AdsUEditorMessengerMutators",
                ).setMessengerDestinationFields({
                  adgroup: y,
                  campaignGroupPromotedPageID: E,
                  objective: R,
                  promotedObjectType: k,
                  specPlugin: S,
                  supportPageEndCard: L,
                  capabilities: a.capabilities,
                  optimizationGoal: b.optimization_goal,
                  account: a,
                  campaign: b,
                  placementSpecs: $ != null ? [$] : [],
                  page: x,
                })),
                  o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(
                    y,
                  ) &&
                    (y = o(
                      "AdsUEditorAdgroupAssetFeedMutators",
                    ).convertFromAssetFeedSpec(
                      o("AdsAssetFeedUtils").getTargetObjectType(y),
                      y,
                      v.objective,
                    )),
                  o("AdsODAXUtils").ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL.has(
                    R,
                  ) &&
                    ((n = y.creative) == null || (n = n.asset_feed_spec) == null
                      ? void 0
                      : n.optimization_type) ===
                      r("ApiDynamicCreativeOptimizationTypes").ACO_AUTOFLOW &&
                    (y = o(
                      "AdsUEditorAdgroupAssetFeedMutators",
                    ).convertFromAssetFeedSpec(
                      r("ApiAdObjectTypes").SHARE,
                      y,
                      o("AdsODAXUtils").maybeTranslateObjective(
                        v.objective,
                        o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                          v.objective,
                          b,
                        ),
                        b.optimization_goal,
                      ),
                    )),
                  o("AdsODAXUtils").ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL.has(
                    R,
                  ) &&
                    o("AdsDCODegreesOfFreedomUtils").isTextLiquidityEnabled(
                      e,
                    ) &&
                    (y = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.delete(y)),
                  (y = o(
                    "adsAutomaticFlowMutationSetDoFSpec",
                  ).adsAutomaticFlowLiteSpecMutator(
                    a,
                    { campaign: b, campaignGroup: v, adgroup: y },
                    p,
                  )),
                  (y = o(
                    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                  ).updateContextualDiscoveryAdsEligibilitySpec(y, {
                    shouldOptIn: (s == null ? void 0 : s.shouldOptIn) === !0,
                    isExplicitOptOut: s == null ? void 0 : s.isExplicitOptOut,
                    shouldRenderCheckbox:
                      s == null ? void 0 : s.shouldRenderCheckbox,
                    actionMetadataType:
                      s == null ? void 0 : s.actionMetadataType,
                  })),
                  (y = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.link_data.multi_share_end_card.delete(
                    y,
                  )),
                  o("AdsODAXUtils").isODAXTrafficCampaignGroup(g, R) &&
                    (y = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.page_id.set(
                      E != null ? E : c,
                      y,
                    )),
                  (E != null || c != null) &&
                    r("AdsAdgroupRecordAccessors").creative.branded_content.get(
                      y,
                    ) != null &&
                    (y = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.promoted_page_id.set(
                      E != null ? E : c,
                      y,
                    )),
                  o(
                    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                  ).hasSpecificOrigin(e, "creative_asset_groups") &&
                    (y = o(
                      "AdsAdgroupLinkPostFormatMutators",
                    ).removeCreativeAssetGroupsSpecField(y)));
                var P = (i = b.promoted_object) == null ? void 0 : i.page_id,
                  N = u != null ? d(u, t) : null,
                  M = o("AdsAPIAdgroupRecordUtils").getPageID(e, S),
                  w = new Map();
                return (
                  M != null && w.set(M, m(M)),
                  (y =
                    (h = o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).tryRetainExistingPost({
                      account: a,
                      adgroup: y,
                      campaign: b,
                      campaignGroup: v,
                      specPathPlugin: S,
                      getPage: m,
                      originalData: T,
                    })) != null
                      ? h
                      : o(
                          "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                        ).setUseLiveVideoPostDefaulting(y, S, M, a, b, v)),
                  (y = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).retainCreativeData({ adgroup: y, oldAdgroup: D })),
                  o(
                    "AdsUEditorExistingPostMutators",
                  ).maybeDefaultToExistingPostForCTX(y, S, b, v, P, N, w, M)
                );
              },
            );
          },
          o("AdsUEditorCampaignSelectMessengerPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
