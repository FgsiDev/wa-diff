__d(
  "AdsUEditorAdgroupSelectWhatsAppPromotedObjectTypeReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsCallAddonUtils",
    "AdsCampaignRecordAccessors",
    "AdsCanvasConstants",
    "AdsCollectionsAdUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorSelectors",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "AdsUEditorWebsiteMutators",
    "AdsUEditorWhatsAppMutators",
    "CTWAChatBuilderFlowsUtils",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsGetUniformValueSelector",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector",
    "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppBusinessPhoneNumberIDSelector",
    "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppNumberIDSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            destinationType: o("AdsUEditorSelectors").campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").destination_type.get,
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            pageWhatsAppNumberID: r(
              "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppNumberIDSelector",
            ),
            whatsAppBusinessPhoneNumberID: r(
              "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppBusinessPhoneNumberIDSelector",
            ),
            businessWhatsAppBusinessAccountsLoadObject: o(
              "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector",
            ).businessWhatsAppBusinessAccountsSelector,
            optimizationGoal: r("adsGetUniformValueSelector")(
              o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(
                function (e) {
                  return e.optimization_goal;
                },
              ),
              null,
            ),
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.businessWhatsAppBusinessAccountsLoadObject,
              l = n.cachedStoreState,
              s = n.contextualDiscoveryAdsEligibilityState,
              u = n.defaultInstagramID,
              c = n.destinationType,
              d = n.getPage,
              m = n.getShouldEnableAutomaticFlowByDefault,
              p = n.optimizationGoal,
              _ = n.pageWhatsAppNumberID,
              f = n.parentData,
              g = n.whatsAppBusinessPhoneNumberID,
              h = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                c,
              );
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var c,
                  y,
                  C,
                  b = r("nullthrows")(f.get(n)),
                  v = b.campaign,
                  S = b.campaignGroup,
                  R = b.specPlugin,
                  L = (c = v.promoted_object) == null ? void 0 : c.page_id,
                  E = o("AdsUEditorAdgroupCachedUtils").getMetadata(l, n),
                  k = o("AdsUEditorAdgroupCachedUtils").getPageID(l, n),
                  I = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative),
                  T = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    S.objective,
                    v,
                  ),
                  D = o("AdsODAXUtils").maybeTranslateObjective(
                    S.objective,
                    T,
                    v.optimization_goal,
                  ),
                  x = o(
                    "CTWAChatBuilderFlowsUtils",
                  ).getWABAIDForWhatsAppBusinessPhoneNumberID(g, i),
                  $ =
                    e == null ||
                    (y = e.creative) == null ||
                    (y = y.object_story_spec) == null ||
                    (y = y.link_data) == null
                      ? void 0
                      : y.image_hash,
                  P =
                    e == null ||
                    (C = e.creative) == null ||
                    (C = C.object_story_spec) == null ||
                    (C = C.link_data) == null
                      ? void 0
                      : C.message,
                  N = r("isTruthy")(k) ? d(k) : r("isTruthy")(L) ? d(L) : null,
                  M = S.objective;
                return o("AdsMutators").chain(
                  r("AdsAdgroupRecordAccessors").creative.shop_spec.delete,
                  function (e) {
                    return o(
                      "AdsUEditorInstagramMutators",
                    ).maybeSetAdgroupCreativeInstagramAccountID(e, R, u);
                  },
                  function (e) {
                    return r(
                      "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
                    )(e, { campaign: v, campaignGroup: S });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorWebsiteAndAppMutators",
                    ).deleteAdgroupFields(e, R);
                  },
                  function (e) {
                    return r("adsACOIsACOAdgroup")(e)
                      ? r("adsACORemoveACOSpec")(e)
                      : e;
                  },
                  function (e) {
                    return r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.product_set_id.delete(e);
                  },
                  function (e) {
                    return r("AdsAdgroupSemanticFields").offerID.isSupported(
                      R,
                      e,
                    )
                      ? o("AdsUEditorAdgroupOfferMutators").removeOfferIDState(
                          e,
                          R,
                          D,
                        )
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                    ).cleanWebsiteExtensionFields(e);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupClearDataMutatorsUtils",
                    ).clearCTAFields({
                      adgroup: e,
                      callToActionType: null,
                      promotedObjectType: T,
                      specPlugin: R,
                    });
                  },
                  function (e) {
                    return o("AdsCallAddonUtils").clearCallExtensionFields(
                      e,
                      R,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                    ).cleanLeadNurtureChannelsField(e);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupShopAdsUtils",
                    ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorSetPostEditModeMutators",
                    ).setToUsingInlineCreation({
                      adgroup: e,
                      campaign: v,
                      campaignGroup: S,
                      cachedMetadata: E,
                      objective: D,
                      specPathPlugin: R,
                    });
                  },
                  function (e) {
                    return r("AdsAdgroupSemanticFields").linkURL.isSupported(
                      R,
                      e,
                    )
                      ? o("AdsUEditorWebsiteMutators").setWebsiteURL({
                          adgroup: e,
                          campaignGroupPromotedPageID: void 0,
                          objective: D,
                          promotedObjectType: r("AdsPromotedObjectTypes")
                            .WHATSAPP,
                          specPlugin: R,
                          websiteURL: I
                            ? o("AdsCanvasConstants").EMPTY_CANVAS_LINK
                            : "",
                        })
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorWhatsAppMutators",
                    ).setFieldsForSelectingPromotedObjectType({
                      adgroup: e,
                      campaignPromotedPageID: L,
                      objective: D,
                      specPlugin: R,
                      enableMessageTemplateSection: !0,
                      isMultiDestination: h,
                      shouldSaveCreative: t.shouldSaveCreative,
                      pageWhatsAppNumberID: _,
                      page: N,
                      whatsAppBusinessPhoneNumberID: g,
                      whatsAppBusinessPhoneNumberWabaID: x,
                      optimizationGoal: p,
                      campaignGroupObjective: M,
                    });
                  },
                  function (e) {
                    return t.shouldSaveCreative === !0
                      ? o(
                          "AdsUEditorUnifiedCreationAdgroupMutators",
                        ).preserveImageHash(e, $, D, R, t.shouldSaveCreative)
                      : e;
                  },
                  function (e) {
                    return t.shouldSaveCreative === !0
                      ? o(
                          "AdsUEditorUnifiedCreationAdgroupMutators",
                        ).preserveMessage(e, P, D, R, t.shouldSaveCreative)
                      : e;
                  },
                  function (e) {
                    return o(
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsAutomaticFlowLiteSpecMutator(
                      a,
                      { campaign: v, campaignGroup: S, adgroup: e },
                      m,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                    ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                      shouldOptIn: (s == null ? void 0 : s.shouldOptIn) === !0,
                      isExplicitOptOut: s == null ? void 0 : s.isExplicitOptOut,
                      shouldRenderCheckbox:
                        s == null ? void 0 : s.shouldRenderCheckbox,
                      actionMetadataType:
                        s == null ? void 0 : s.actionMetadataType,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupTurnoffPromoAdMutator",
                    ).turnOffPromo(
                      e,
                      o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                        .PromoAdDefaultOptOutCallsite
                        .SET_WHATSAPP_PROMOTED_OBJECT_TYPE,
                    );
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
