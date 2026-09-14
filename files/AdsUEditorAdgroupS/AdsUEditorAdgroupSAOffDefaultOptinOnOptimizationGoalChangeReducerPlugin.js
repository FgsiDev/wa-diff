__d(
  "AdsUEditorAdgroupSAOffDefaultOptinOnOptimizationGoalChangeReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeActionFlux",
    "ProductBrowsingAdsUtils",
    "ShopAdsProductCatalogToCommerceMerchantSettingsProvider",
    "ShopsAdsOffsiteCheckoutAdsDefaultingUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            identitiesToStorefrontLO: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).preloadedIdentityToStorefrontSelector,
            adgroupProductCatalogIDLoadObject: r(
              "adsUEditorAdgroupProductCatalogIDSelector",
            ),
            pageSetupExtraData: r(
              "adsUEditorAdgroupSetPageReducerExtraDataSelector",
            ),
            productCatalogToCommerceMerchantSettings: r(
              "ShopAdsProductCatalogToCommerceMerchantSettingsProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a,
              i,
              l = n.adgroupProductCatalogIDLoadObject,
              s = n.identitiesToStorefrontLO,
              u = n.pageSetupExtraData,
              c = n.parentData,
              d = n.productCatalogToCommerceMerchantSettings,
              m =
                ((a = t.changedSettings) == null
                  ? void 0
                  : a.optimizationGoal) ===
                r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
              p = o("AdsBulkValueUtils").getUniformValueOrDefault(
                l.getValue(),
                null,
              ),
              _ = null;
            return (
              p != null &&
                (_ = d
                  .get(p)
                  .mapValue(function (e) {
                    var t = e.commerce_merchant_settings;
                    return t == null ? void 0 : t.id;
                  })
                  .getValue()),
              o("AdsMutators").mutateEach(
                e,
                (i = t.adgroupIDs) != null ? i : [],
                function (e, n) {
                  var r = c.get(n),
                    a = e;
                  return (
                    (a = o(
                      "ProductBrowsingAdsUtils",
                    ).maybeUpdateProductBrowsingSpec(
                      a,
                      !1,
                      void 0,
                      r == null ? void 0 : r.campaignGroup,
                      r == null ? void 0 : r.campaign,
                      "optimization_goal_change",
                    )),
                    (a = o(
                      "ShopsAdsOffsiteCheckoutAdsDefaultingUtils",
                    ).maybeDefaultSAOffIdentitiesAndOptIn(
                      t.hostID,
                      m,
                      c,
                      s,
                      l,
                      u,
                      a,
                      o("ShopsAdsOffsiteCheckoutAdsUtils")
                        .SAOffDefaultingTrigger.OPTIMIZATION_GOAL_CHANGE,
                      _,
                    )),
                    a
                  );
                },
              )
            );
          },
          r(
            "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
