__d(
  "AdsUEditorAdgroupExistingPostUpdateOnsiteDestinationSpecReducerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsMutatePostCTASuccessDataActionFlux",
    "AdsMutators",
    "AdsPagePostUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorCampaignShopAdsUtils",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsConvertAdObjectRecordToPlainJS",
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
            storefrontsLoadObject: o(
              "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
            )
              .adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector,
          },
          function (e, t, n) {
            var a = n.onsiteDestinations,
              i = n.parentData,
              l = n.storefrontsLoadObject;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                s = r("nullthrows")(
                  i.get(e.id),
                  "Parent ad object data must exist for the adgroup being mutated",
                ),
                u = o(
                  "AdsUEditorCampaignShopAdsUtils",
                ).isShopsAdsIncentiveProgram(
                  r("adsConvertAdObjectRecordToPlainJS")(
                    s == null ? void 0 : s.campaign,
                  ),
                ),
                c =
                  ((n = e.creative) == null || (n = n.destination_spec) == null
                    ? void 0
                    : n.destination_type) === "WEBSITE_AND_SHOP",
                d = t.link;
              if (t.cta !== "NO_BUTTON" && (u || c) && d != null) {
                var m = l.getValue(),
                  p =
                    m != null
                      ? o("AdsBulkValueUtils").getUniformValue(m, null)
                      : null,
                  _ = t.pagePostIDs
                    .map(o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN)
                    .at(0),
                  f = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).getFirstDestinationID(
                    p,
                    a,
                    d,
                    t.adgroupIDs,
                    null,
                    null,
                    null,
                    _,
                    null,
                    "existing_post_FB",
                  );
                return o(
                  "AdsUEditorAdgroupOnsiteDestinationsMutators",
                ).updateOnsiteDestinationsWithLinkType(
                  e,
                  s == null ? void 0 : s.campaign,
                  "website_and_shops",
                  p,
                  f,
                  !0,
                  !0,
                );
              } else
                return o(
                  "AdsUEditorAdgroupShopAdsUtils",
                ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e);
            });
          },
          r("AdsMutatePostCTASuccessDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
