__d(
  "AdsOutcomeAdgroupSelectOnAdReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsOutcomeCampaignSelectOnAdPromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignInstagramSelectors",
    "adsUEditorAccountSelector",
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
          },
          function (e, t, n) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var a = r("nullthrows")(n.parentData.get(t)),
                  i = a.campaign,
                  l = a.campaignGroup,
                  s = a.specPlugin,
                  u = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, s),
                  c = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(i.campaign_creation_source)
                    ? e
                    : null;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsODAXAdgroupReducerUtils",
                    ).getDefaultAdgroupForNewMappedObjective(
                      e,
                      t,
                      babelHelpers.extends({}, n, {
                        mappedObjective: o("AdsAPIObjectives").LEAD_GENERATION,
                      }),
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).retainExistingPost({
                      account: n.account,
                      adgroup: e,
                      campaign: i,
                      campaignGroup: l,
                      specPathPlugin: s,
                      getPage: n.getPage,
                      originalData: u,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                    ).retainCreativeData({ adgroup: e, oldAdgroup: c });
                  },
                )(e);
              },
            );
          },
          o("AdsOutcomeCampaignSelectOnAdPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
