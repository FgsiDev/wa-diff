__d(
  "AdsUEditorAdgroupSelectAppPromotedObjectTypeReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCallAddonUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsEditorPostEditMode",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
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
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessengerMutators",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCallToActionGetDefaultCallToActionType",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
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
              .eligibleInstagramAccountIDWithBusiness,
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.cachedStoreState,
              l = n.contextualDiscoveryAdsEligibilityState,
              s = n.defaultInstagramID,
              u = n.getPage,
              c = n.getShouldEnableAutomaticFlowByDefault,
              d = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (n, m) {
                var p = n,
                  _ = r("nullthrows")(d.get(m)),
                  f = _.campaign,
                  g = _.campaignGroup,
                  h = _.specPlugin,
                  y = g.objective,
                  C = o("AdsODAXUtils").maybeTranslateObjective(
                    g.objective,
                    o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                      g.objective,
                      f,
                    ),
                    f.optimization_goal,
                  ),
                  b = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(g),
                  v = r("adsCallToActionGetDefaultCallToActionType")(
                    C,
                    t.promotedObjectType,
                  ),
                  S = o(
                    "AdsUEditorAdgroupCachedUtils",
                  ).getCachedCallToActionLink(i, m, v),
                  R = r(
                    "AdsAdgroupSemanticFields",
                  ).multiShareEndCard.isSupported(h, n),
                  L = o("AdsUEditorAdgroupCachedUtils").getCreative(
                    i,
                    m,
                    r("AdsEditorPostEditMode").INLINE,
                  ),
                  E = o("AdsUEditorAdgroupCachedUtils").getMetadata(i, m),
                  k = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(n, h),
                  I = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(f.campaign_creation_source)
                    ? n
                    : null,
                  T = s,
                  D = n.adset_id;
                if (D != null)
                  for (var x of e.entries()) {
                    var $ = x[0],
                      P = x[1];
                    if ($ !== m) {
                      var N =
                        P == null || P.getValue == null ? void 0 : P.getValue();
                      if (N != null && N.adset_id === D) {
                        var M,
                          w =
                            (M = N.creative) == null ||
                            (M = M.object_story_spec) == null
                              ? void 0
                              : M.instagram_actor_id;
                        if (w != null) {
                          T = w;
                          break;
                        }
                      }
                    }
                  }
                return (
                  (p = o("AdsMutators").chain(
                    function (e) {
                      return o(
                        "AdsUEditorInstagramMutators",
                      ).maybeSetAdgroupCreativeInstagramAccountID(e, h, T);
                    },
                    r("AdsAdgroupRecordAccessors").creative.shop_spec.delete,
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupShopAdsUtils",
                      ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupClearDataMutatorsUtils",
                      ).clearCTAFields({
                        adgroup: e,
                        callToActionType: v,
                        promotedObjectType: t.promotedObjectType,
                        specPlugin: h,
                      });
                    },
                    function (e) {
                      return y === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
                        ? o("AdsMutators").chain(
                            r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.object_type.set(
                              r("ApiAdObjectTypes").SHARE,
                            ),
                            r("AdsAdgroupRecordAccessors").creative
                              .object_story_spec.video_data.delete,
                          )(e)
                        : e;
                    },
                    function (e) {
                      return r(
                        "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
                      )(e, { campaign: f, campaignGroup: g });
                    },
                    function (e) {
                      return o(
                        "AdsODAXUtils",
                      ).ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL.has(y) &&
                        y !== r("AdsAPIObjectives").OUTCOME_SALES &&
                        o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)
                        ? o("AdsMutators").chain(
                            r("AdsAdgroupRecordAccessors").creative
                              .asset_feed_spec.delete,
                            r("AdsAdgroupRecordAccessors").creative
                              .degrees_of_freedom_spec.delete,
                          )(e)
                        : e;
                    },
                    function (e) {
                      return o(
                        "AdsUEditorWebsiteAndAppMutators",
                      ).deleteAdgroupFields(e, h, t.promotedObjectType);
                    },
                    function (e) {
                      return r("adsACOIsACOAdgroup")(e)
                        ? r("adsACORemoveACOSpec")(e)
                        : e;
                    },
                    function (e) {
                      var t;
                      return o(
                        "AdsODAXUtils",
                      ).ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL.has(y) &&
                        ((t = e.creative) == null ||
                        (t = t.asset_feed_spec) == null
                          ? void 0
                          : t.optimization_type) ===
                          r("ApiDynamicCreativeOptimizationTypes").ACO_AUTOFLOW
                        ? o(
                            "AdsUEditorAdgroupAssetFeedMutators",
                          ).convertFromAssetFeedSpec(
                            r("ApiAdObjectTypes").SHARE,
                            e,
                            C,
                          )
                        : e;
                    },
                    function (e) {
                      return o(
                        "AdsODAXUtils",
                      ).ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL.has(y) &&
                        o("AdsDCODegreesOfFreedomUtils").isTextLiquidityEnabled(
                          e,
                        )
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.degrees_of_freedom_spec.delete(e)
                        : e;
                    },
                    function (e) {
                      return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
                        ? o(
                            "AdsUEditorSetPostEditModeMutators",
                          ).setToUsingInlineCreation({
                            adgroup: e,
                            campaign: f,
                            campaignGroup: g,
                            cachedCreative: L,
                            cachedMetadata: E,
                            objective: C,
                            specPathPlugin: h,
                          })
                        : e;
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupOfferMutators",
                      ).removeOfferIDState(e, h, C);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorMultiDestinationAdgroupMutators",
                      ).cleanMultiDestAdSpecOnConversionLocationChange(e);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorMessengerMutators",
                      ).deleteMessengerDestinationFields({
                        adgroup: e,
                        specPlugin: h,
                        supportPageEndCard: R,
                      });
                    },
                    function (e) {
                      return (y === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
                        y === r("AdsAPIObjectives").LINK_CLICKS) &&
                        o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.template_data.delete(e)
                        : e;
                    },
                    function (e) {
                      return o("AdsAPIAdgroupRecordUtils").isCollectionsAd(e, h)
                        ? e
                        : o("AdsUEditorCallToActionMutators").setCallToAction({
                            callToActionType: v,
                            cachedCallToActionLink: S,
                            adgroup: e,
                            campaignGroupPromotedPageID: b,
                            objective: C,
                            promotedObjectType: t.promotedObjectType,
                            specPlugin: h,
                          });
                    },
                    function (e) {
                      return o(
                        "AdsAssetFeedUtils",
                      ).hasPlacementCustomizationFromRecord(e)
                        ? o(
                            "AdsUEditorAdgroupAssetFeedMutators",
                          ).removeMissingAdlabelsFromCustomizationRules(e)
                        : e;
                    },
                    function (e) {
                      return r(
                        "AdsAdgroupSemanticFields",
                      ).callToActionValue.delete(h, e);
                    },
                    function (e) {
                      return o("AdsCallAddonUtils").clearCallExtensionFields(
                        e,
                        h,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).cleanWebsiteExtensionFields(e);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                      ).cleanLeadNurtureChannelsField(e);
                    },
                    function (e) {
                      return o(
                        "adsAutomaticFlowMutationSetDoFSpec",
                      ).adsAutomaticFlowLiteSpecMutator(
                        a,
                        { campaign: f, campaignGroup: g, adgroup: e },
                        c,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                      ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                        shouldOptIn:
                          (l == null ? void 0 : l.shouldOptIn) === !0,
                        isExplicitOptOut:
                          l == null ? void 0 : l.isExplicitOptOut,
                        shouldRenderCheckbox:
                          l == null ? void 0 : l.shouldRenderCheckbox,
                        actionMetadataType:
                          l == null ? void 0 : l.actionMetadataType,
                      });
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupTurnoffPromoAdMutator",
                      ).turnOffPromo(
                        e,
                        o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                          .PromoAdDefaultOptOutCallsite
                          .SET_APP_PROMOTED_OBJECT_TYPE,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                      ).hasSpecificOrigin(e, "creative_asset_groups")
                        ? o(
                            "AdsAdgroupLinkPostFormatMutators",
                          ).removeCreativeAssetGroupsSpecField(e)
                        : e;
                    },
                    function (e) {
                      var t;
                      return (t = o(
                        "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                      ).tryRetainExistingPost({
                        account: a,
                        adgroup: e,
                        campaign: f,
                        campaignGroup: g,
                        specPathPlugin: h,
                        getPage: u,
                        originalData: k,
                      })) != null
                        ? t
                        : o(
                            "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                          ).setUseLiveVideoPostDefaulting(
                            e,
                            h,
                            o("AdsAPIAdgroupRecordUtils").getPageID(e, h),
                            a,
                            f,
                            g,
                          );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                      ).retainCreativeData({ adgroup: e, oldAdgroup: I });
                    },
                  )(p)),
                  p
                );
              },
            );
          },
          o("AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
