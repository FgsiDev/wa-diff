__d(
  "AdsUEditorAdgroupSelectPhoneCallPromotedObjectTypeReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCallAddonUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsEditorPostEditMode",
    "AdsLinkPostFormat",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupCallAdsMutators",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupOfferMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMultiDestinationAdgroupMutators",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "CallAdsConfigurationUtils",
    "ConstUriUtils",
    "LoadObject",
    "XVanityURLControllerRouteBuilder",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsCreateSelector",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupDefaultProductSetIDSelector",
    "adsUEditorAdgroupDefaultProductSetVerticalSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "isTruthy",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "AdsClickToCallPhoneNumberPrefillStore",
      ).__setRef(
        "AdsUEditorAdgroupSelectPhoneCallPromotedObjectTypeReducerPlugin",
      ),
      s = r("adsCreateSelector")(
        [],
        function () {
          return function () {
            return r("LoadObject").loading({ creatorModuleID: i.id });
          };
        },
        { name: i.id + ".getPhoneNumberPrefillSelector" },
      );
    e.onReadyImmediately(function (e) {
      s = e.fluxGetSelector();
    });
    var u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            defaultProductSetID: r(
              "adsUEditorAdgroupDefaultProductSetIDSelector",
            ),
            defaultProductSetVertical: r(
              "adsUEditorAdgroupDefaultProductSetVerticalSelector",
            ),
            getPage: r("AdsPageStore").getSelector,
            getPhoneNumberPrefill: s,
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.cachedStoreState,
              l = n.contextualDiscoveryAdsEligibilityState,
              s = n.defaultInstagramID,
              u = n.defaultProductSetID,
              c = n.defaultProductSetVertical,
              d = n.getPage,
              m = n.getPhoneNumberPrefill,
              p = n.getShouldEnableAutomaticFlowByDefault,
              _ = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n,
                  f = r("nullthrows")(_.get(t)),
                  g = f.campaign,
                  h = f.campaignGroup,
                  y = f.specPlugin,
                  C = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    h.objective,
                    g,
                  ),
                  b = o("AdsODAXUtils").maybeTranslateObjective(
                    h.objective,
                    C,
                    g.optimization_goal,
                  ),
                  v = o("AdsUEditorAdgroupCachedUtils").getCreative(
                    i,
                    t,
                    r("AdsEditorPostEditMode").INLINE,
                  ),
                  S = o("AdsUEditorAdgroupCachedUtils").getMetadata(i, t),
                  R = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(e, y),
                  L = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e),
                  E = o(
                    "AdsUEditorAdgroupCachedUtils",
                  ).getCachedCallToActionLink(i, e.id, "CALL_NOW"),
                  k =
                    (n = e.creative) == null ||
                    (n = n.object_story_spec) == null
                      ? void 0
                      : n.page_id,
                  I = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, y),
                  T = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(g.campaign_creation_source)
                    ? e
                    : null;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorInstagramMutators",
                    ).maybeSetAdgroupCreativeInstagramAccountID(e, y, s);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorMultiDestinationAdgroupMutators",
                    ).cleanMultiDestAdSpecOnConversionLocationChange(e);
                  },
                  function (e) {
                    return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) ||
                      o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)
                      ? r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.delete(e)
                      : e;
                  },
                  function (e) {
                    var t,
                      n,
                      o = e;
                    return (
                      (t = o.creative) != null &&
                        (t = t.asset_feed_spec) != null &&
                        t.call_to_actions &&
                        (o = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.call_to_actions.delete(o)),
                      (n = o.creative) != null &&
                        (n = n.asset_feed_spec) != null &&
                        n.call_to_action_types &&
                        (o = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.call_to_action_types.delete(
                          o,
                        )),
                      o
                    );
                  },
                  function (e) {
                    return r(
                      "AdsAdgroupSemanticFields",
                    ).childAttachments.delete(y, e);
                  },
                  function (e) {
                    return r("adsACOIsACOAdgroup")(e)
                      ? r("adsACORemoveACOSpec")(e)
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorWebsiteAndAppMutators",
                    ).deleteAdgroupFields(e, y);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupClearDataMutatorsUtils",
                    ).clearCTAFields({
                      adgroup: e,
                      callToActionType: "CALL_NOW",
                      promotedObjectType: C,
                      specPlugin: y,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupOfferMutators",
                    ).removeOfferIDState(e, y, b);
                  },
                  function (e) {
                    return L !== r("AdsEditorPostEditMode").INLINE ||
                      R !== r("AdsLinkPostFormat").SINGLE
                      ? o(
                          "AdsUEditorSetPostEditModeMutators",
                        ).setToUsingInlineCreation({
                          adgroup: e,
                          campaign: g,
                          campaignGroup: h,
                          cachedCreative: v,
                          cachedMetadata: S,
                          objective: b,
                          specPathPlugin: y,
                        })
                      : e;
                  },
                  function (e) {
                    return o(
                      "AdsUEditorCallToActionMutators",
                    ).deleteCallToActionValueInstagramProfileDestination(
                      e,
                      y,
                      o("AdsAPIAdgroupRecordUtils").getPostEditMode(e),
                    );
                  },
                  function (e) {
                    return o("AdsCallAddonUtils").clearCallExtensionFields(
                      e,
                      y,
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
                    return r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.set(
                      "PHONE",
                      e,
                    );
                  },
                  function (e) {
                    return r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.product_set_id.delete(e);
                  },
                  function (e) {
                    var t,
                      n = new Map();
                    k != null && n.set(k, d(k));
                    var i = r("isTruthy")(k)
                      ? m({ adAccountID: a.account_id, pageID: k }).getValue()
                      : null;
                    return o("AdsUEditorCallToActionMutators").setCallToAction({
                      callToActionType: "CALL_NOW",
                      pages: n,
                      cachedCallToActionLink: E,
                      adgroup: e,
                      campaignGroupPromotedPageID:
                        (t = h.promoted_object) == null ? void 0 : t.page_id,
                      objective: b,
                      promotedObjectType: r("AdsPromotedObjectTypes")
                        .PHONE_CALL,
                      prefillPhoneNumber: i,
                      specPlugin: y,
                    });
                  },
                  function (e) {
                    var t,
                      n,
                      a =
                        (t = e.creative) == null ||
                        (t = t.object_story_spec) == null
                          ? void 0
                          : t.page_id,
                      i =
                        (n = e.creative) == null ||
                        (n = n.object_story_spec) == null
                          ? void 0
                          : n.video_data;
                    if (a != null && !i) {
                      var l, s;
                      return e.setIn(
                        r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                          .LINK_DATA.LINK,
                        (l =
                          (s = r("XVanityURLControllerRouteBuilder")
                            .buildUri({ vanity: a })
                            .qualifyDomain(
                              o("ConstUriUtils").getUri("https://facebook.com"),
                            )) == null
                            ? void 0
                            : s.toString()) != null
                          ? l
                          : "",
                      );
                    }
                    return e;
                  },
                  function (e) {
                    return o(
                      "AdsCreativeFormatMutatorUtils",
                    ).mutateCreativeMediaType(e, "SINGLE_LINK");
                  },
                  function (e) {
                    return o(
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsAutomaticFlowLiteSpecMutator(
                      a,
                      { campaign: g, campaignGroup: h, adgroup: e },
                      p,
                    );
                  },
                  function (e) {
                    return k == null
                      ? e
                      : o(
                          "CallAdsConfigurationUtils",
                        ).maybeDefaultCallAdsConfiguration(
                          e,
                          d(k),
                          h.objective,
                          g == null ? void 0 : g.destination_type,
                          o(
                            "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
                          ).convertCampaignRecordToPlacementSpec(g),
                        );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                    ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                      shouldOptIn: (l == null ? void 0 : l.shouldOptIn) === !0,
                      isExplicitOptOut: l == null ? void 0 : l.isExplicitOptOut,
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
                        .SET_PHONE_CALL_PROMOTED_OBJECT_TYPE,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupCallAdsMutators",
                    ).defaultPhoneCallAdgroupFromStaticToDynamicSingleMedia(
                      b,
                      C,
                      a,
                      _,
                      e,
                      u,
                      c,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).retainExistingPost({
                      account: a,
                      adgroup: e,
                      campaign: g,
                      campaignGroup: h,
                      specPathPlugin: y,
                      getPage: d,
                      originalData: I,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                    ).retainCreativeData({ adgroup: e, oldAdgroup: T });
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
