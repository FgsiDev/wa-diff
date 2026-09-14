__d(
  "AdsOutcomeAdgroupSelectMessengerReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXAdgroupReducerUtils",
    "AdsOutcomeCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorExistingPostMutators",
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
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            getPage: r("AdsPageStore").getSelector,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
          },
          function (e, t, n) {
            var r = n.account,
              a = n.defaultInstagramID,
              i = n.getInstagramAccount,
              l = n.getPage,
              s = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var u = s.get(t);
                if (!u) return e;
                var c = u.campaign,
                  d = u.campaignGroup,
                  m = u.specPlugin,
                  p = o(
                    "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                  ).createExistingPostRetentionOriginalData(e, m),
                  _ = o(
                    "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                  ).shouldRetainCreativeData(c.campaign_creation_source)
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
                        mappedObjective: o("AdsAPIObjectives").MESSAGES,
                      }),
                    );
                  },
                  function (e) {
                    var n,
                      s,
                      u = (n = c.promoted_object) == null ? void 0 : n.page_id,
                      f = a != null && i != null ? i(a, t) : null,
                      g = o("AdsAPIAdgroupRecordUtils").getPageID(e, m),
                      h = new Map();
                    g != null && l != null && h.set(g, l(g));
                    var y = e;
                    return (
                      (y =
                        (s = o(
                          "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
                        ).tryRetainExistingPost({
                          account: r,
                          adgroup: y,
                          campaign: c,
                          campaignGroup: d,
                          specPathPlugin: m,
                          getPage: l,
                          originalData: p,
                        })) != null
                          ? s
                          : o(
                              "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                            ).setUseLiveVideoPostDefaulting(y, m, g, r, c, d)),
                      (y = o(
                        "AdsUEditorAdgroupConversionLocationCreativeRetentionMutator",
                      ).retainCreativeData({ adgroup: y, oldAdgroup: _ })),
                      o(
                        "AdsUEditorExistingPostMutators",
                      ).maybeDefaultToExistingPostForCTX(
                        y,
                        m,
                        c,
                        d,
                        u,
                        f,
                        h,
                        g,
                        !0,
                      )
                    );
                  },
                )(e);
              },
            );
          },
          o("AdsOutcomeCampaignSelectMessengerPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
