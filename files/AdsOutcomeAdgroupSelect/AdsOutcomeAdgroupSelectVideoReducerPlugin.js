__d(
  "AdsOutcomeAdgroupSelectVideoReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsOutcomeCampaignSelectVideoPromotedObjectTypeDataActionFlux",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorCampaignInstagramSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupIsPostClickExperienceSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
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
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            getPage: r("AdsPageStore").getSelector,
            isPostClickExperience: o(
              "adsUEditorAdgroupIsPostClickExperienceSelector",
            ).isPostClickExperienceSelector,
          },
          function (e, t, n) {
            var r = n.account,
              a = n.parentData,
              i = o("AdsODAXAdgroupReducerUtils").adsAdgroupSetChannelReducerFn(
                e,
                t,
                babelHelpers.extends({}, n, {
                  shouldDefaultForVideoEngagementTypeSelection:
                    t.shouldDefaultForVideoEngagementTypeSelection === !0,
                  mappedObjective: o("AdsAPIObjectives").VIDEO_VIEWS,
                }),
              );
            return o("AdsMutators").mutateEach(
              i,
              t.adgroupIDs,
              function (e, t) {
                var n = a.get(t);
                if (!n) return e;
                var i = n.campaign,
                  l = n.campaignGroup,
                  s = n.specPlugin,
                  u = o("AdsAPIAdgroupRecordUtils").getPageID(e, s);
                return o(
                  "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                ).setUseLiveVideoPostDefaulting(e, s, u, r, i, l);
              },
            );
          },
          o("AdsOutcomeCampaignSelectVideoPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
