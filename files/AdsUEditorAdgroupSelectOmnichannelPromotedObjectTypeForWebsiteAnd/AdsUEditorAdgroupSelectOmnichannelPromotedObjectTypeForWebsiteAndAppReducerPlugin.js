__d(
  "AdsUEditorAdgroupSelectOmnichannelPromotedObjectTypeForWebsiteAndAppReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsMDOWeblinkPrefillMutator",
    "AdsMutators",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
    "AdsUEditorCampaignToggleWebAppChannelDataActionFlux",
    "AdsUEditorRestoreOmnichannelAppDataMutator",
    "AdsUEditorWebsiteAndAppMutators",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "gkx",
    "justknobx",
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
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
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
                var n = r("nullthrows")(m.get(t)),
                  p = n.campaign,
                  _ = n.campaignGroup,
                  f = n.specPlugin,
                  g = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, f),
                  h = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(p.campaign_creation_source)
                    ? e
                    : null,
                  y = o(
                    "AdsUEditorWebsiteAndAppMutators",
                  ).selectWebsiteAndAppPromotedObjectTypeForAdgroup(
                    a,
                    l,
                    t,
                    e,
                    p,
                    _,
                    f,
                    r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                    d,
                    s,
                    u,
                  );
                return (
                  (y = o(
                    "AdsMDOWeblinkPrefillMutator",
                  ).applyMDOWeblinkPrefillIfEligible(
                    y,
                    r("AdsPromotedObjectTypes").WEB_AND_APP,
                    _.objective,
                    c,
                  )),
                  o(
                    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                  ).hasSpecificOrigin(e, "creative_asset_groups") &&
                    (y = o(
                      "AdsAdgroupLinkPostFormatMutators",
                    ).removeCreativeAssetGroupsSpecField(y)),
                  (y = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).retainExistingPost({
                    account: a,
                    adgroup: y,
                    campaign: p,
                    campaignGroup: _,
                    specPathPlugin: f,
                    getPage: c,
                    originalData: g,
                  })),
                  (y = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).retainCreativeData({ adgroup: y, oldAdgroup: h })),
                  (y = o(
                    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                  ).updateBizAIDefaultOptIn(
                    y,
                    i,
                    o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                      .BizAIDefaultOptInCallSite
                      .SELECT_OMNICHANNEL_WEBSITE_AND_APP,
                  )),
                  r("justknobx")._("49") ||
                    (y = o(
                      "AdsUEditorRestoreOmnichannelAppDataMutator",
                    ).restoreOmnichannelAppDataFromCampaign(y, p, f)),
                  y
                );
              },
            );
          },
          [
            o(
              "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
            ).actionType,
            r("AdsUEditorCampaignToggleWebAppChannelDataActionFlux").actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
