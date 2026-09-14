__d(
  "AdsUEditorAdgroupSetWebsiteUrlAtIndexReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAppUrlUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsLinkPostFormat",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetWebsiteURLAtIndexDataActionFlux",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
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
          },
          function (e, t, n) {
            var a = n.onsiteDestinations,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n)),
                  s = l.campaign,
                  u = l.campaignGroup,
                  c = l.specPlugin,
                  d = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: s, campaignGroup: u });
                if (
                  !o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)
                )
                  throw r("FBLogger")("am_feature_pac").mustfixThrow(
                    "action should only be fired from ad groups that use asset feeds",
                  );
                var m = e;
                if (d === r("AdsPromotedObjectTypes").WEB_AND_SHOP) {
                  var p = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(e, c),
                    _ =
                      p === r("AdsLinkPostFormat").MULTIPLE
                        ? "dco_carousel"
                        : "dco_single_media",
                    f = o(
                      "AdsUEditorAdgroupOnsiteDestinationsMutators",
                    ).getFirstDestinationID(
                      t.storefronts,
                      a,
                      t.websiteURL,
                      t.adgroupIDs,
                      null,
                      null,
                      null,
                      null,
                      null,
                      _,
                    );
                  m = o(
                    "AdsUEditorAdgroupOnsiteDestinationsMutators",
                  ).updateOnsiteDestinationsWithLinkType(
                    m,
                    s,
                    "website_and_shops",
                    t.storefronts,
                    f,
                    !0,
                    !0,
                  );
                }
                return o(
                  "AdsAssetFeedUtils",
                ).shouldAddObjectStoreURLForTrafficAndPromotedApp(
                  u.objective,
                  d,
                ) && !r("AdsAppUrlUtils").isAppStoreURL(t.websiteURL)
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.web_destination_spec.url.set(
                      t.websiteURL,
                      m,
                    )
                  : o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                      m,
                      c,
                      r("AdsUnifiedCreativeAPIFields").linkURL,
                      0,
                      "website_url",
                      t.websiteURL,
                    );
              },
            );
          },
          o("AdsUEditorAdgroupSetWebsiteURLAtIndexDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
