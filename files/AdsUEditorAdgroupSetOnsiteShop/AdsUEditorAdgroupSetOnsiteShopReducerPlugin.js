__d(
  "AdsUEditorAdgroupSetOnsiteShopReducerPlugin",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsPagePostUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetOnsiteShopActionFlux",
    "AdsUEditorAdgroupShopAdsUtils",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "ShopsAdsSelectedShopDataProvider",
    "adsUEditorAdgroupUniversalStorefrontsSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "isTruthy",
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
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            destinationLinkType: o("adsUeditorBulkSelectedLinkTypeSelector")
              .adsUEditorBulkSelectedLinkTypeSelector,
            shopData: r("ShopsAdsSelectedShopDataProvider").toFluxSelector(),
            storefrontsFromIdentityLoadObject: o(
              "adsUEditorAdgroupUniversalStorefrontsSelector",
            ).adsUEditorAdgroupUniversalStorefrontsSelector,
          },
          function (e, t, n) {
            var a = n.destinationLinkType,
              i = n.onsiteDestinations,
              l = n.parentData,
              s = n.shopData,
              u = n.storefrontsFromIdentityLoadObject;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var c,
                  d = e;
                d = o(
                  "AdsUEditorAdgroupShopAdsUtils",
                ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(d);
                var m = t.shopID,
                  p = null;
                if (m != null) {
                  var _ = s.get(m);
                  if (_.hasValueWithoutError()) {
                    var f = _.getValue();
                    f != null &&
                      (p = {
                        facebookStorefront: f.page != null ? f : null,
                        instagramStorefront: f.ig_user != null ? f : null,
                      });
                  }
                } else if (u.hasValueWithoutError()) {
                  var g = u.getValue();
                  r("isTruthy")(g) &&
                    (p = o("AdsBulkValueUtils").getUniformValue(g, null));
                }
                var h = r("nullthrows")(
                    l.get(n),
                    "Parent ad object data must exist for the adgroup being updated",
                  ),
                  y = h.campaign,
                  C = h.specPlugin,
                  b = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, C),
                  v =
                    (c = o("AdsAPIAdgroupRecordUtils").getImageData(e, C)) ==
                    null
                      ? void 0
                      : c.imageHash,
                  S = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.video_data.video_id.get(e),
                  R = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_id.get(e),
                  L = o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(R),
                  E = o("AdsBulkValueUtils").getUniformValue(a),
                  k = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).getFirstDestinationID(
                    p,
                    i,
                    b,
                    t.adgroupIDs,
                    v,
                    null,
                    S,
                    L,
                    null,
                  );
                return (
                  (d = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).updateOnsiteDestinationsWithLinkType(
                    e,
                    y,
                    E,
                    p,
                    k,
                    !0,
                    !0,
                  )),
                  t.shopID == null
                    ? r("AdsAdgroupRecordAccessors").creative.shop_spec.delete(
                        d,
                      )
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.shop_spec.shop_id.set(t.shopID, d)
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetOnsiteShopActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
