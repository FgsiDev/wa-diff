__d(
  "AdsOutcomeAdgroupSelectReminderReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsOutcomeCampaignSelectReminderPromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUpcomingEventConsts",
    "adsCampaignChangeAdCreationMethodMutator",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "gkx",
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
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
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
          },
          function (e, t, n) {
            return (
              o("AdsODAXAdgroupReducerUtils").adsAdgroupSetChannelReducerFn(
                e,
                t,
                babelHelpers.extends({}, n, {
                  mappedObjective: o("AdsAPIObjectives").LINK_CLICKS,
                }),
              ),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, t) {
                var a = r("nullthrows")(n.parentData.get(e.id)),
                  i = a.specPlugin;
                return o("AdsMutators").chain(
                  function (e) {
                    return r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.delete(e);
                  },
                  function (e) {
                    return r("AdsAdgroupSemanticFields").callToActionType.set(
                      i,
                      e,
                      r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                    );
                  },
                  function (e) {
                    return r("AdsAdgroupSemanticFields").linkURL.set(
                      i,
                      e,
                      o("AdsUEditorAdgroupUpcomingEventConsts")
                        .DEFAULT_UPCOMING_EVENT_DESTINATION_LINK,
                    );
                  },
                  function (e) {
                    return r("adsCampaignChangeAdCreationMethodMutator")(
                      e,
                      n,
                      t,
                      i,
                    );
                  },
                )(e);
              })
            );
          },
          o("AdsOutcomeCampaignSelectReminderPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
