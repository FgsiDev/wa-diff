__d(
  "AdsOutcomeAdgroupSelectEventReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsODAXAdgroupReducerUtils",
    "AdsOutcomeCampaignSelectEventPromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
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
            getShouldEnableMusicByDefault: r(
              "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
            ),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
          },
          function (e, t, n) {
            return o(
              "AdsODAXAdgroupReducerUtils",
            ).adsAdgroupSetChannelReducerFn(
              e,
              t,
              babelHelpers.extends({}, n, {
                mappedObjective: o("AdsAPIObjectives").EVENT_RESPONSES,
              }),
            );
          },
          o("AdsOutcomeCampaignSelectEventPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
