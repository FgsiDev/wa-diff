__d(
  "AdsOutcomeAdgroupSelectPageReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsODAXStoreUtils",
    "AdsOutcomeCampaignSelectPagePromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsUEditorAccountSelector",
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
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
          },
          function (e, t, n) {
            var a = o(
              "AdsODAXAdgroupReducerUtils",
            ).adsAdgroupSetChannelReducerFn(
              e,
              t,
              babelHelpers.extends({}, n, {
                mappedObjective: o("AdsAPIObjectives").PAGE_LIKES,
              }),
            );
            return o("AdsMutators").mutateEach(
              a,
              t.adgroupIDs,
              function (e, t) {
                var a,
                  i = r("nullthrows")(n.parentData.get(t)),
                  l = i.campaign,
                  s = i.specPlugin;
                return o("AdsODAXStoreUtils").maybeSetDefaultPageLink(
                  e,
                  s,
                  (a = l.promoted_object) == null ? void 0 : a.page_id,
                );
              },
            );
          },
          o("AdsOutcomeCampaignSelectPagePromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
