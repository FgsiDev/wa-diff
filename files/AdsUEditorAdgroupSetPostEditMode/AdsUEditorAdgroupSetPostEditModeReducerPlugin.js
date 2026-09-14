__d(
  "AdsUEditorAdgroupSetPostEditModeReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsCampaignRecordAccessors",
    "AdsEditorPostEditMode",
    "AdsInstagramProfileUtils",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageRecommendedPostMutator",
    "AdsUEditorAdgroupSetPostEditModeDataActionFlux",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorHostIDs",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUnifiedProfileVisitUtils",
    "adsIsIGLoginSelector",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupDefaultPagePostSelector",
    "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
    "adsUEditorAdgroupPrefillersExtraDataSelector",
    "adsUEditorBlockListAccountListSelector",
    "adsUEditorCampaignDCOToggleForDeprecationSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "isTruthy",
    "isUPVBPScopedPickersEnabled",
    "isUPVL2InstagramPickerEnabled",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            accountBlockLists: r("adsUEditorBlockListAccountListSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            prefillersExtraDataMap: r(
              "adsUEditorAdgroupPrefillersExtraDataSelector",
            ),
            defaultPagePost: r("adsUEditorAdgroupDefaultPagePostSelector"),
            placementEligibilityInformationMap: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationMap,
            isBrandedContentToggleOn: r(
              "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            isDCOToggleOn: r(
              "adsUEditorCampaignDCOToggleForDeprecationSelector",
            ),
            getPage: r("AdsPageStore").getSelector,
            isIGLogin: r("adsIsIGLoginSelector"),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.accountBlockLists,
              l = n.cachedStoreState,
              s = n.defaultInstagramID,
              u = n.defaultPagePost,
              c = n.getInstagramAccount,
              d = n.getPage,
              m = n.isBrandedContentToggleOn,
              p = n.isDCOToggleOn,
              _ = n.isIGLogin,
              f = n.parentData,
              g = n.placementEligibilityInformationMap,
              h = n.prefillersExtraDataMap,
              y = n.promoAdDefaultOptinStatus,
              C = e;
            return (
              t.hostID === r("AdsUEditorHostIDs").CREATION &&
                t.postEditMode === r("AdsEditorPostEditMode").EXISTING &&
                (C = C.slice(0, 1)),
              o("AdsMutators").mutateEach(C, t.adgroupIDs, function (e, n) {
                var C,
                  b = r("nullthrows")(f.get(n)),
                  v = b.campaign,
                  S = b.campaignGroup,
                  R = b.specPlugin,
                  L = S.objective,
                  E = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    L,
                    v,
                  ),
                  k = o("AdsODAXUtils").maybeTranslateObjective(
                    L,
                    E,
                    v.optimization_goal,
                  ),
                  I = o("AdsUEditorAdgroupCachedUtils").getCreative(
                    l,
                    n,
                    t.postEditMode,
                  ),
                  T = o("AdsUEditorAdgroupCachedUtils").getMetadata(l, n),
                  D = o("AdsUEditorAdgroupCachedUtils").getPageID(l, n),
                  x = h.get(n),
                  $ = g.get(v.id),
                  P = R,
                  N =
                    (C = e.creative) == null ||
                    (C = C.object_story_spec) == null
                      ? void 0
                      : C.page_id,
                  M = new Map();
                switch ((N != null && M.set(N, d(N)), t.postEditMode)) {
                  case r("AdsEditorPostEditMode").INLINE: {
                    var w = e;
                    return (
                      (w = o(
                        "AdsUEditorSetPostEditModeMutators",
                      ).setToUsingInlineCreation({
                        adgroup: e,
                        cachedCreative: I,
                        cachedMetadata: T,
                        campaign: v,
                        campaignGroup: S,
                        instagramAccount: s != null ? c(s, n) : null,
                        objective: k,
                        specPathPlugin: P,
                        promotedObjectType: E,
                        enableNewBrandedContentFlow: m,
                        account: a,
                        pages: M,
                        promoAdDefaultOptinStatus: y,
                      })),
                      r("isTruthy")(p) &&
                        (w = o(
                          "AdsAdgroupLinkPostFormatMutators",
                        ).changeToCreativeAssetGroups(a, w, v, S, L, E)),
                      w
                    );
                  }
                  case r("AdsEditorPostEditMode").EXISTING: {
                    var A = r(
                        "AdsCampaignRecordAccessors",
                      ).destination_type.get(v),
                      F =
                        !_ &&
                        o(
                          "AdsUnifiedProfileVisitUtils",
                        ).getIsUnifiedProfileVisitsDestination(A) &&
                        r("isUPVBPScopedPickersEnabled")(),
                      O =
                        r("isUPVL2InstagramPickerEnabled")() || F
                          ? r("AdsAdgroupSemanticFields").instagramActorID.get(
                              P,
                              e,
                            )
                          : null,
                      B = O != null ? O : s,
                      W = o(
                        "AdsUEditorSetPostEditModeMutators",
                      ).setToUsingExistingPost({
                        adgroup: e,
                        cachedCreative: I,
                        cachedPageID: D,
                        campaign: v,
                        campaignGroup: S,
                        defaultPagePost: t.adgroupIDs.length === 1 ? u : null,
                        specPathPlugin: P,
                        enableNewBrandedContentFlow: m,
                        account: a,
                        skipLoadingPrexistingPost: t.skipLoadingPrexistingPost,
                        isInstagramProfileVisitAd: o(
                          "AdsInstagramProfileUtils",
                        ).getIsInstagramProfileConversionUnderTrafficObjective(
                          L,
                          E,
                        ),
                        instagramAccount: B != null ? c(B, n) : null,
                        promoAdDefaultOptinStatus: y,
                        pages: M,
                        promotedObjectType: E,
                      });
                    return o(
                      "AdsUEditorAdgroupSetPageRecommendedPostMutator",
                    ).setRecommendedPostAfterManualSwitch(
                      t.isUserInitiatedExistingPostSwitch,
                      a,
                      W,
                      v,
                      S,
                      P,
                      N,
                      d,
                    );
                  }
                  case r("AdsEditorPostEditMode").USE_MOCKUP: {
                    var q = e;
                    return (
                      (q = o(
                        "AdsUEditorSetPostEditModeMutators",
                      ).setToUsingMockup({
                        account: a,
                        accountBlockLists: i,
                        adgroup: e,
                        cachedCreative: I,
                        cachedMetadata: T,
                        campaign: v,
                        campaignGroup: S,
                        hostID: t.hostID,
                        mockupAdObjects: t.mockupAdObjects,
                        objective: L,
                        placementEligibilityInformation: $,
                        prefillersExtraData: x,
                        promotedObjectType: E,
                        specPathPlugin: P,
                        enableNewBrandedContentFlow: m,
                        promoAdDefaultOptinStatus: y,
                      })),
                      r("isTruthy")(p) &&
                        (q = o(
                          "AdsAdgroupLinkPostFormatMutators",
                        ).changeToCreativeAssetGroups(a, q, v, S, L, E)),
                      q
                    );
                  }
                  case r("AdsEditorPostEditMode").USE_PREVIEW_SHARING_LINK:
                    return o(
                      "AdsUEditorSetPostEditModeMutators",
                    ).setToUsingPreviewSharingLink({
                      account: a,
                      accountBlockLists: i,
                      adgroup: e,
                      cachedCreative: I,
                      cachedMetadata: T,
                      campaign: v,
                      campaignGroup: S,
                      hostID: t.hostID,
                      previewSharingAdObjects: t.previewSharingAdObjects,
                      objective: L,
                      prefillersExtraData: x,
                      promotedObjectType: E,
                      specPathPlugin: P,
                    });
                  case r("AdsEditorPostEditMode").USE_SCHEDULED_LIVE_VIDEO: {
                    var U = e;
                    return (
                      (U = o(
                        "AdsUEditorAdgroupClearDataMutatorsUtils",
                      ).clearData({
                        adgroup: e,
                        adgroupID: n,
                        cachedStoreState: l,
                        effectiveObjective: k,
                        specPlugin: R,
                      })),
                      (U = o("AdsMutators").chain(
                        r("AdsAdgroupRecordAccessors").creative.media_type.set(
                          "SCHEDULED_LIVE_VIDEO",
                        ),
                      )(U)),
                      r("isTruthy")(p) &&
                        (U = o(
                          "AdsAdgroupLinkPostFormatMutators",
                        ).changeToCreativeAssetGroups(a, U, v, S, L, E)),
                      U
                    );
                  }
                  default:
                    return e;
                }
              })
            );
          },
          o("AdsUEditorAdgroupSetPostEditModeDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
