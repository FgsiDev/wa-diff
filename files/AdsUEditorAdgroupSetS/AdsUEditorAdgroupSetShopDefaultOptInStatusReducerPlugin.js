__d(
  "AdsUEditorAdgroupSetShopDefaultOptInStatusReducerPlugin",
  [
    "AdDraftFragmentSource",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetShopDefaultOptInStatusActionFlux",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorAdgroupUniversalStorefrontsSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdDraftFragmentSource")).CLICK_AD_DUPLICATE,
        e.CLICK_CAMPAIGN_DUPLICATE,
        e.CLICK_CAMPAIGN_GROUP_DUPLICATE,
        e.CLICK_AD_DUPLICATE_BY_IMAGES,
        e.DUPLICATE_AD_FROM_CLIPBOARD,
        e.DUPLICATE_CAMPAIGN_FROM_CLIPBOARD,
        e.DUPLICATE_CAMPAIGN_GROUP_FROM_CLIPBOARD,
        e.DUPLICATE_UPGRADE_AD_FROM_CLIPBOARD,
        e.DUPLICATE_UPGRADE_CAMPAIGN_FROM_CLIPBOARD,
        e.DUPLICATE_UPGRADE_CAMPAIGN_GROUP_FROM_CLIPBOARD,
      ],
      u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            identityToStorefrontMap: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            adgroupProductCatalogIDLoadObject: r(
              "adsUEditorAdgroupProductCatalogIDSelector",
            ),
            adsUEditorAdgroupUniversalStorefronts: o(
              "adsUEditorAdgroupUniversalStorefrontsSelector",
            ).adsUEditorAdgroupUniversalStorefrontsSelector,
          },
          function (e, t, n) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t,
                a,
                i = n.parentData,
                l = i.get(e.id);
              if (l == null) return e;
              var u = r("AdsAdgroupDraftFragmentStore").getSourceSelector()(
                  e.id,
                ),
                c = s.includes(u);
              if (c) return e;
              var d = l.campaign,
                m = l.campaignGroup,
                p = l.specPlugin,
                _ = r("AdsAdgroupSemanticFields").instagramActorID.get(p, e),
                f = r("AdsAdgroupSemanticFields").pageID.get(p, e);
              return o(
                "AdsUEditorAdgroupMutators",
              ).maybeUpdateSAOffDestinationSpec(
                e,
                d,
                m,
                o("AdsBulkValueUtils").getUniformValueOrDefault(
                  n.adgroupProductCatalogIDLoadObject.getValue(),
                  null,
                ),
                (t = n.identityToStorefrontMap) == null ? void 0 : t.getValue(),
                f,
                _,
                o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
                  .INITIAL_LOAD_WITH_DOI_AD_SPEC_TRACKING,
                (a = n.adsUEditorAdgroupUniversalStorefronts) == null
                  ? void 0
                  : a.getValue(),
              );
            });
          },
          r("AdsUEditorAdgroupSetShopDefaultOptInStatusActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
