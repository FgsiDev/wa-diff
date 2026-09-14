__d(
  "AdsUEditorAdgroupSetMediaUpdateOnsiteDestinationSpecReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "ShopsAdsSetMediaUpdateOnsiteDestinationActionFlux",
    "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
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
            storefronts: o(
              "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
            )
              .adsUEditorAdgroupStorefrontsFromShopSpecOrIdentityUniformValueSelector,
          },
          function (e, t, n) {
            var a = n.onsiteDestinations,
              i = n.parentData,
              l = n.storefronts;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var s = r("nullthrows")(
                    i.get(e.id),
                    "Parent ad objects data must exist for the adgroup being mutated",
                  ),
                  u = s.campaign,
                  c = s.specPlugin,
                  d = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).maybeUpdateOnsiteDestinationsForImageOrVideo(
                    e,
                    u,
                    c,
                    t.imageURL,
                    t.imageHash,
                    t.videoID,
                    a,
                    l.getValue(),
                    [n],
                  );
                return d;
              },
            );
          },
          r("ShopsAdsSetMediaUpdateOnsiteDestinationActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
