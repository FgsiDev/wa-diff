__d(
  "AdsOutcomeAdgroupSelectPixelReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsOutcomeCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorCampaignInstagramSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
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
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var r = n.account,
              a = n.getPage,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var l = i.get(t);
                if (!l) return e;
                var s = l.campaign,
                  u = l.campaignGroup,
                  c = l.specPlugin,
                  d = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, c),
                  m = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(s.campaign_creation_source)
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
                        mappedObjective: o("AdsAPIObjectives").CONVERSIONS,
                      }),
                    );
                  },
                  function (e) {
                    var t;
                    return (t = o(
                      "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                    ).tryRetainExistingPost({
                      account: r,
                      adgroup: e,
                      campaign: s,
                      campaignGroup: u,
                      specPathPlugin: c,
                      getPage: a,
                      originalData: d,
                    })) != null
                      ? t
                      : o(
                          "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                        ).setUseLiveVideoPostDefaulting(
                          e,
                          c,
                          o("AdsAPIAdgroupRecordUtils").getPageID(e, c),
                          r,
                          s,
                          u,
                        );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                    ).retainCreativeData({ adgroup: e, oldAdgroup: m });
                  },
                )(e);
              },
            );
          },
          o("AdsOutcomeCampaignSelectPixelPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
