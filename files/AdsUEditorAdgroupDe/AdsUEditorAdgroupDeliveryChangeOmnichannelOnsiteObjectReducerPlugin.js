__d(
  "AdsUEditorAdgroupDeliveryChangeOmnichannelOnsiteObjectReducerPlugin",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageUtils",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignDeliveryChangeOmnichannelOnsiteObjectActionFlux",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "ShopAdsPageToCommerceMerchantSettingsStore",
    "adsCreateStoreSelector",
    "adsUEditorAdgroupSetPageReducerExtraDataSelector",
    "adsUEditorAdgroupShopSpecSelectedShopSelector",
    "adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("ShopAdsPageToCommerceMerchantSettingsStore")],
        function () {
          return r("ShopAdsPageToCommerceMerchantSettingsStore").getLoadedMap();
        },
        {
          name:
            i.id + ".getShopAdsPageToCommerceMerchantSettingsLoadedMapSelector",
        },
      ),
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            selectedShopInShopSpec: o(
              "adsUEditorAdgroupShopSpecSelectedShopSelector",
            ).adsUEditorAdgroupShopSpecSelectedShopSelector,
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            pagesToCMSMap: e,
            setPageReducerExtraData: r(
              "adsUEditorAdgroupSetPageReducerExtraDataSelector",
            ),
            shouldCallSDDAndUpdateShopDestination: r(
              "adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
            ),
          },
          function (e, t, n) {
            var a = n.onsiteDestinations,
              i = n.pagesToCMSMap,
              l = n.parentData,
              s = n.plugins,
              u = n.selectedShopInShopSpec,
              c = n.setPageReducerExtraData,
              d = n.shouldCallSDDAndUpdateShopDestination;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var m,
                  p = e;
                if (
                  (t.shouldDeleteStaticProductTags &&
                    (p = o(
                      "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                    ).removeInteractiveComponents(e, n, null, { plugins: s })),
                  u.hasValue() &&
                    ((m = u.getValue()) == null ||
                    (m = m.commerce_merchant_settings) == null
                      ? void 0
                      : m.id) !== t.commerceMerchantSettingsID &&
                    (p = o(
                      "AdsUEditorAdgroupShopAdsUtils",
                    ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(p)),
                  c.isShopsAdsIncentiveProgram)
                ) {
                  var _,
                    f,
                    g,
                    h,
                    y =
                      (_ =
                        (f = t.recommendedIdentitiesWithSAIPAdCredit) == null
                          ? void 0
                          : f.fb_page_id) != null
                        ? _
                        : o(
                            "AdsDeliveryOmnichannelUtils",
                          ).getPageConnectedToCMS(
                            t.commerceMerchantSettingsID,
                            i,
                          ),
                    C = {};
                  p = o("AdsUEditorAdgroupSetPageUtils").setAdgroupPage(
                    p,
                    n,
                    t.adgroupIDs,
                    t.hostID,
                    y != null ? y : "",
                    t.identityToStorefront,
                    C,
                    c,
                    !0,
                    (g = t.recommendedIdentitiesWithSAIPAdCredit) == null
                      ? void 0
                      : g.ig_user_id,
                    (h = t.recommendedIdentitiesWithSAIPAdCredit) == null
                      ? void 0
                      : h.ig_user_fbidv2,
                  );
                }
                if (d) {
                  var b,
                    v,
                    S = r("nullthrows")(
                      l.get(n),
                      "Parent data (campaign and specPlugin) must exist for adgroup ID when updating omnichannel onsite destinations.",
                    ),
                    R = S.campaign,
                    L = S.specPlugin,
                    E = t.adgroupIDToLinkType.get(n),
                    k = o(
                      "AdsUEditorAdgroupOnsiteDestinationsMutators",
                    ).getStorefrontsForAdgroup(
                      p,
                      L,
                      t.identityToStorefront,
                      t.commerceMerchantSettingsID,
                    ),
                    I = o(
                      "AdsDeliveryOmnichannelUtils",
                    ).setCommerceMerchantSettingsForOmnichannelObject(
                      R,
                      t.commerceMerchantSettingsID,
                    );
                  I =
                    t.defaultConversionEvent != null
                      ? o(
                          "AdsDeliveryOmnichannelUtils",
                        ).setEventTypeForOmnichannelPixelObject(
                          I,
                          (b = t.defaultConversionEvent) == null
                            ? void 0
                            : b.offsiteCustomEventType,
                        )
                      : I;
                  var T = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, L),
                    D =
                      (v = o("AdsAPIAdgroupRecordUtils").getImageData(e, L)) ==
                      null
                        ? void 0
                        : v.imageHash,
                    x = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.video_data.video_id.get(e),
                    $ = o(
                      "AdsUEditorAdgroupOnsiteDestinationsMutators",
                    ).getFirstDestinationID(
                      k,
                      a,
                      T,
                      [n],
                      D,
                      null,
                      x,
                      null,
                      null,
                      "unknown",
                    );
                  p = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).updateOnsiteDestinationsWithLinkType(p, I, E, k, $, !0, !0);
                }
                return p;
              },
            );
          },
          r("AdsUEditorCampaignDeliveryChangeOmnichannelOnsiteObjectActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
