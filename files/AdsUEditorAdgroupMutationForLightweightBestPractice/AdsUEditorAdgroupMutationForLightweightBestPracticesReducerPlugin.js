__d(
  "AdsUEditorAdgroupMutationForLightweightBestPracticesReducerPlugin",
  [
    "AdsAccountStore",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
    "AdsUEditorCampaignMutationForLightweightBestPracticesActionFlux",
    "FBLogger",
    "adsExperimentsLightweightTestDynamicAdsMutator",
    "adsExperimentsLightweightTestTextGenMutator",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            adAccountLoader: r("AdsAccountStore").getSelectedAccount,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getPage: r("AdsPageStore").getSelector,
            isShopAdsBundleAvailable: o(
              "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
            ).adsUEditorShopAdsBundleCreativeEditorSelector,
          },
          function (e, t, n) {
            var o = n.adAccountLoader,
              a = n.getPage,
              i = n.isShopAdsBundleAvailable,
              l = n.parentData,
              s = r("ifRequired")(
                "adsExperimentsGetLightweightABTestingPlugin",
                function (e) {
                  return e(t.lightweightType);
                },
              );
            if (s != null) {
              var u;
              if (
                o != null &&
                s != null &&
                (u = s.mutationConfig) != null &&
                u.hasClientSideMutation != null &&
                u.hasClientSideMutation()
              ) {
                var c,
                  d =
                    s == null ||
                    (c = s.mutationConfig) == null ||
                    c.getAdgroupMutator == null
                      ? void 0
                      : c.getAdgroupMutator(e, t, {
                          adAccountLoader: o,
                          getPage: a,
                          isShopAdsBundleAvailable: i,
                          parentData: l,
                        });
                return d != null ? d : e;
              }
            } else {
              if (
                (r("FBLogger")(
                  "ads_experiments",
                  "AdsUEditorAdgroupMutationForLightweightBestPracticesReducerPlugin.js",
                ).mustfix(
                  "expected adgroup lightweight A/B test mutation to correspond to a plugin",
                ),
                t.lightweightType === "CREATIVE_PRIMARY_TEXT_GEN")
              )
                return r("adsExperimentsLightweightTestTextGenMutator")(e, t);
              if (t.lightweightType === "DYNAMIC_ADS")
                return r("adsExperimentsLightweightTestDynamicAdsMutator")(
                  e,
                  t,
                  {
                    adAccountLoader: o,
                    parentData: l,
                    getPage: a,
                    isShopAdsBundleAvailable: i,
                  },
                );
            }
            return e;
          },
          r("AdsUEditorCampaignMutationForLightweightBestPracticesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
