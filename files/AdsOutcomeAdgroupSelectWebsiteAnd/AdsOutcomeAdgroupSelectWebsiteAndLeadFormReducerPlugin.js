__d(
  "AdsOutcomeAdgroupSelectWebsiteAndLeadFormReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsMDOWeblinkPrefillMutator",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectWebsiteAndLeadFormPromotedObjectTypeDataActionFlux",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
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
            campaignsMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaign;
              return t;
            }),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            specialAdCategoriesMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t.special_ad_categories;
            }),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            getShouldEnableMusicByDefault: r(
              "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
            ),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, a) {
                var i = r("nullthrows")(n.parentData.get(a)),
                  l = i.campaign,
                  s = i.campaignGroup,
                  u = i.specPlugin,
                  c = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, u),
                  d = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(l.campaign_creation_source)
                    ? e
                    : null;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsODAXAdgroupReducerUtils",
                    ).getDefaultAdgroupForNewMappedObjective(
                      e,
                      a,
                      babelHelpers.extends({}, n, {
                        mappedObjective: o("AdsAPIObjectives").CONVERSIONS,
                      }),
                      t.oldPromotedObjectType,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsMDOWeblinkPrefillMutator",
                    ).applyMDOWeblinkPrefillIfEligible(
                      e,
                      r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM,
                      s.objective,
                      n.getPage,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).retainExistingPost({
                      account: n.account,
                      adgroup: e,
                      campaign: l,
                      campaignGroup: s,
                      specPathPlugin: u,
                      getPage: n.getPage,
                      originalData: c,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                    ).retainCreativeData({ adgroup: e, oldAdgroup: d });
                  },
                )(e);
              },
            );
          },
          o(
            "AdsUEditorCampaignSelectWebsiteAndLeadFormPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
