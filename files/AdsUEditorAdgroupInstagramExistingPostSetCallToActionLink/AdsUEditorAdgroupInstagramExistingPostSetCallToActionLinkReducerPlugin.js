__d(
  "AdsUEditorAdgroupInstagramExistingPostSetCallToActionLinkReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAppUrlUtils",
    "AdsAssetFeedUtils",
    "AdsBulkValueUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupInstagramExistingPostMutators",
    "AdsUEditorAdgroupInstagramExistingPostSetCallToActionLinkDataActionFlux",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
    "AdsUEditorCampaignShopAdsUtils",
    "AdsUEditorWebsiteAndAppMutators",
    "DestinationOptimizationUtils.react",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsConvertAdObjectRecordToPlainJS",
    "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
    "immutable",
    "justknobx",
    "nullthrows",
    "userSettingsSelector",
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
            userSettings: r("userSettingsSelector"),
          },
          function (e, t, n) {
            var a = n.onsiteDestinations,
              i = n.parentData,
              l = n.storefrontsLoadObject,
              s = n.userSettings;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                u = e,
                c = r("nullthrows")(i.get(e.id));
              if (r("justknobx")._("3753")) {
                if (o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e))
                  u = o("AdsUEditorAdgroupUrlMutators").updateWebsiteUrl(
                    e,
                    t.link,
                  );
                else if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) {
                  var d = o(
                      "AdsUEditorAdgroupUrlMutators",
                    ).getDefaultPlacementUrlAssetAndIndex(e),
                    m = d.urls;
                  (m ? (m.website_url = t.link) : (m = { website_url: t.link }),
                    (u = o(
                      "AdsUEditorAdgroupUrlMutators",
                    ).addPlacementCustomizationUrl(
                      u,
                      c == null ? void 0 : c.specPlugin,
                      r("immutable").List(),
                      m,
                      !0,
                    )));
                }
              } else if (
                o(
                  "AdsAssetFeedUtils",
                ).hasAssetFeedSpecWithoutOnlyOnsiteDestinations(e)
              )
                if (o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e))
                  u = o("AdsUEditorAdgroupUrlMutators").updateWebsiteUrl(
                    e,
                    t.link,
                  );
                else {
                  var p = o(
                      "AdsUEditorAdgroupUrlMutators",
                    ).getDefaultPlacementUrlAssetAndIndex(e),
                    _ = p.urls;
                  (_ ? (_.website_url = t.link) : (_ = { website_url: t.link }),
                    (u = o(
                      "AdsUEditorAdgroupUrlMutators",
                    ).addPlacementCustomizationUrl(
                      u,
                      c == null ? void 0 : c.specPlugin,
                      r("immutable").List(),
                      _,
                      !0,
                    )));
                }
              var f = o(
                  "AdsUEditorCampaignShopAdsUtils",
                ).isShopsAdsIncentiveProgram(
                  r("adsConvertAdObjectRecordToPlainJS")(
                    c == null ? void 0 : c.campaign,
                  ),
                ),
                g =
                  ((n = e.creative) == null || (n = n.destination_spec) == null
                    ? void 0
                    : n.destination_type) === "WEBSITE_AND_SHOP";
              if (f || g) {
                var h,
                  y = l.getValue(),
                  C =
                    y != null
                      ? o("AdsBulkValueUtils").getUniformValue(y, null)
                      : null,
                  b =
                    (h = u.creative) == null
                      ? void 0
                      : h.source_instagram_media_id,
                  v =
                    t.link != null && t.link.trim() !== ""
                      ? o(
                          "AdsUEditorAdgroupOnsiteDestinationsMutators",
                        ).getFirstDestinationID(
                          C,
                          a,
                          t.link,
                          t.adgroupIDs,
                          null,
                          null,
                          null,
                          null,
                          b,
                          "existing_post_IG",
                        )
                      : null;
                u = o(
                  "AdsUEditorAdgroupOnsiteDestinationsMutators",
                ).updateOnsiteDestinationsWithLinkType(
                  u,
                  c == null ? void 0 : c.campaign,
                  "website_and_shops",
                  C,
                  v,
                  !0,
                  !0,
                );
              } else
                u = o(
                  "AdsUEditorAdgroupShopAdsUtils",
                ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(u);
              var S = r("nullthrows")(i.get(e.id)),
                R = S.campaign,
                L = S.campaignGroup,
                E = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  L.objective,
                  R,
                );
              if (
                o("AdsAPICampaignRecordUtils").isAppLinkClickAd(L.objective, E)
              ) {
                var k,
                  I =
                    R == null || (k = R.promoted_object) == null
                      ? void 0
                      : k.object_store_url;
                I != null &&
                  r("AdsAppUrlUtils").isAppStoreURL(I) &&
                  (u = o(
                    "AdsUEditorAdgroupInstagramExistingPostMutators",
                  ).setCTAValueField(u, "object_store_urls", I));
              }
              if (
                o(
                  "DestinationOptimizationUtils.react",
                ).destinationOptimizationEnableCampaignApiInfo(R) &&
                o(
                  "DestinationOptimizationUtils.react",
                ).destinationOptimizationEnableAdgroupInfo(e) &&
                o(
                  "DestinationOptimizationUtils.react",
                ).destinationOptimizationExistingPostGK()
              ) {
                var T;
                u = o(
                  "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
                ).setWebsiteDestinationOptimizationStatus(
                  u,
                  o("DestinationOptimizationUtils.react").isHomePageURL(t.link),
                  !0,
                  !1,
                  o("DestinationOptimizationUtils.react")
                    .DestinationOptimizationEditSource.INSTAGRAM_EXISTING_POST,
                  (T = s == null ? void 0 : s.getValue()) != null ? T : null,
                  t.link,
                );
              }
              return (
                (u = o(
                  "AdsUEditorAdgroupInstagramExistingPostMutators",
                ).setCTALink(u, t.link)),
                (u = o(
                  "AdsUEditorWebsiteAndAppMutators",
                ).setCTAValuesFromOmnichannelSpec(
                  u,
                  c == null ? void 0 : c.specPlugin,
                  R,
                  E,
                )),
                (u = o(
                  "AdsUEditorAdgroupInstagramExistingPostMutators",
                ).setEnableThirdPartyDeeplink(u, t.enableThirdPartyDeeplink)),
                u
              );
            });
          },
          o(
            "AdsUEditorAdgroupInstagramExistingPostSetCallToActionLinkDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
