__d(
  "AdsUEditorAdgroupCampaignDeliveryChangeCustomEventTypeReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignDeliveryChangeCustomEventTypeActionFlux",
    "ProductBrowsingAdsUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "nullthrows",
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
          },
          function (e, t, n) {
            var a = n.adgroupProductCatalogIDLoadObject,
              i = n.identitiesToStorefrontLO,
              l = n.parentData;
            return t.adgroupIDs != null
              ? o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, t) {
                  var n = r("nullthrows")(l.get(t)),
                    s = n.campaign,
                    u = n.campaignGroup,
                    c = n.specPlugin,
                    d = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      c,
                      e,
                    ),
                    m = r("AdsAdgroupSemanticFields").pageID.get(c, e),
                    p = o(
                      "ProductBrowsingAdsUtils",
                    ).maybeUpdateProductBrowsingSpec(
                      e,
                      !1,
                      void 0,
                      u,
                      s,
                      "custom_event_type_change",
                    );
                  return (
                    (p = o(
                      "AdsUEditorAdgroupMutators",
                    ).maybeUpdateSAOffDestinationSpec(
                      p,
                      s,
                      u,
                      o("AdsBulkValueUtils").getUniformValueOrDefault(
                        a.getValue(),
                        null,
                      ),
                      i.getValue(),
                      m,
                      d,
                      o("ShopsAdsOffsiteCheckoutAdsUtils")
                        .SAOffDefaultingTrigger.CUSTOM_EVENT_TYPE_CHANGE,
                    )),
                    p
                  );
                })
              : e;
          },
          o("AdsUEditorCampaignDeliveryChangeCustomEventTypeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
