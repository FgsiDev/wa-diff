__d(
  "AdsUEditorAdgroupCampaignSelectWebsitePromotedObjectReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux",
    "adsCallToActionGetDefaultCallToActionType",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorAdgroupCampaignSelectWebsitePromotedObjectMutator",
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
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
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
              i = n.bizAIEligibility,
              l = n.cachedStoreState,
              s = n.contextualDiscoveryAdsEligibilityState,
              u = n.defaultInstagramID,
              c = n.getPage,
              d = n.getShouldEnableAutomaticFlowByDefault,
              m = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = e,
                  p = r("nullthrows")(m.get(t)),
                  _ = p.campaign,
                  f = p.campaignGroup,
                  g = p.specPlugin,
                  h = f.objective,
                  y = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: _, campaignGroup: f }),
                  C = o(
                    "AdsUEditorAdgroupCachedUtils",
                  ).getCachedCallToActionLink(l, t, null),
                  b = r("adsCallToActionGetDefaultCallToActionType")(h, y),
                  v = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, g),
                  S = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(_.campaign_creation_source)
                    ? e
                    : null;
                return (
                  (n = o("AdsMutators").chain(
                    function (e) {
                      return r(
                        "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
                      )(e, { campaign: _, campaignGroup: f });
                    },
                    function (e) {
                      return o(
                        "adsUEditorAdgroupCampaignSelectWebsitePromotedObjectMutator",
                      ).selectWebsitePromotedObjectCommonMutator(
                        a,
                        e,
                        g,
                        _,
                        f,
                        u,
                        d,
                        b,
                        C,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                      ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                        shouldOptIn:
                          (s == null ? void 0 : s.shouldOptIn) === !0,
                        isExplicitOptOut:
                          s == null ? void 0 : s.isExplicitOptOut,
                        shouldRenderCheckbox:
                          s == null ? void 0 : s.shouldRenderCheckbox,
                        actionMetadataType:
                          s == null ? void 0 : s.actionMetadataType,
                      });
                    },
                    function (e) {
                      var t, n;
                      return o(
                        "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                      ).updateBizAIDefaultOptIn(
                        e,
                        {
                          isEligibleForDefaultOptIn:
                            (i == null
                              ? void 0
                              : i.isEligibleForDefaultOptIn) === !0,
                          isL1SectionVisible:
                            (i == null ? void 0 : i.isL1SectionVisible) === !0,
                          isStickyOptInEligible:
                            (t =
                              i == null ? void 0 : i.isStickyOptInEligible) !=
                            null
                              ? t
                              : null,
                          isAPlusCStickyOptInEligible:
                            (n =
                              i == null
                                ? void 0
                                : i.isAPlusCStickyOptInEligible) != null
                              ? n
                              : null,
                        },
                        o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                          .BizAIDefaultOptInCallSite
                          .SELECT_WEBSITE_PROMOTED_OBJECT,
                      );
                    },
                    function (e) {
                      var t;
                      return (t = o(
                        "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                      ).tryRetainExistingPost({
                        account: a,
                        adgroup: e,
                        campaign: _,
                        campaignGroup: f,
                        specPathPlugin: g,
                        getPage: c,
                        originalData: v,
                      })) != null
                        ? t
                        : o(
                            "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                          ).setUseLiveVideoPostDefaulting(
                            e,
                            g,
                            o("AdsAPIAdgroupRecordUtils").getPageID(e, g),
                            a,
                            _,
                            f,
                          );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                      ).retainCreativeData({ adgroup: e, oldAdgroup: S });
                    },
                  )(n)),
                  n
                );
              },
            );
          },
          o("AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
