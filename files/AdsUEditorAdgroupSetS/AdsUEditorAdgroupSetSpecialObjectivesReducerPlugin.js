__d(
  "AdsUEditorAdgroupSetSpecialObjectivesReducerPlugin",
  [
    "AdsPostDefaultingProvider",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignGroupSetSpecialObjectivesActionFlux",
    "adsCreateSelector",
    "adsPromotablePagesForAccountSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupContextualDiscoveryAdsOptInSelector",
    "adsUEditorAdgroupSetObjectiveReduceFn",
    "adsUEditorFilterPagesSelector_LEGACY",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorFilterPagesSelector_LEGACY"),
          r("adsPromotablePagesForAccountSelector"),
        ],
        function (t, n) {
          return t(n).map(function (e) {
            return e
              .map(function (e) {
                return e.id;
              })
              .toSet();
          });
        },
        { name: i.id + ".pageIDSelector" },
      ),
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignsMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaign;
              return t;
            }),
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
            shouldRenderContextualDiscoveryAdsExperienceCheckbox: r(
              "adsUEditorAdgroupContextualDiscoveryAdsOptInSelector",
            ),
            promotablePageIDs: e,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            postDefaultingData: r("AdsPostDefaultingProvider").toFluxSelector(),
          },
          r("adsUEditorAdgroupSetObjectiveReduceFn"),
          o("AdsUEditorCampaignGroupSetSpecialObjectivesActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
