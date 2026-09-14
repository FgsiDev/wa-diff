__d(
  "AdsUEditorAdgroupSetPagePostReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsEPACollageFlexibleFormatMutator",
    "AdsExistingPostGenAIPostSwitchMutators",
    "AdsExistingPostPhotoCountUtils",
    "AdsLinkPostFormat",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsPagePostProvider",
    "AdsPagePostUtils",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPagePostDataActionFlux",
    "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
    "PECatalogStickyOptOutInputs",
    "PartnershipDynamicAdsGatingUtils",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
    "adsUEditorAdgroupLinkPostFormatSelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "adsUEditorPreloadedIdentityToStorefrontSelector",
    "adsUEditorReactiveControlStickySettingSelector",
    "isTruthy",
    "nullthrows",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getShouldEnableAPlusCExistingPostDefault: r(
              "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
            ),
            getShouldEnableMusicDefault: r(
              "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            adsPagePosts: r("AdsPagePostProvider").toFluxSelector(),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            identityToStorefrontMap: o(
              "adsUEditorPreloadedIdentityToStorefrontSelector",
            ).adsUEditorAdgroupWebsiteAndShopIdentityToStorefrontSelector,
            bulkLinkPostFormat: r("adsUEditorAdgroupLinkPostFormatSelector"),
            isPartnershipAdToggleOn: r(
              "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
            ),
            stickyMap: r("adsUEditorReactiveControlStickySettingSelector"),
            userSettings: r("userSettingsSelector"),
          },
          function (e, t, n) {
            var a,
              i,
              l = n.account,
              s = n.adsPagePosts,
              u = n.bulkLinkPostFormat,
              c = n.getShouldEnableAPlusCExistingPostDefault,
              d = n.getShouldEnableMusicDefault,
              m = n.identityToStorefrontMap,
              p = n.isPartnershipAdToggleOn,
              _ = n.onsiteDestinations,
              f = n.parentData,
              g = n.promoAdDefaultOptinStatus,
              h = n.stickyMap,
              y = n.userSettings,
              C = t.adgroupIDs[0],
              b = C != null ? f.get(C) : null,
              v =
                C != null
                  ? (a = e.get(C)) == null
                    ? void 0
                    : a.getValue()
                  : null,
              S = o(
                "PECatalogStickyOptOutInputs",
              ).resolveGranularStickyOptOutInputs(
                b == null || (i = b.campaignGroup) == null
                  ? void 0
                  : i.objective,
                v != null && b != null
                  ? o("PECatalogStickyOptOutInputs").resolveStickyOptOutPageID(
                      v,
                      b.specPlugin,
                    )
                  : null,
                null,
              ),
              R = S.objective,
              L = S.pageId,
              E = S.urlType,
              k = o(
                "AdsMetadataConnectedSourcesUtils",
              ).getExistingPostStickyOptOut(
                l.account_id,
                y == null ? void 0 : y.getValue(),
                R,
                L,
                E,
                t.adgroupIDs[0],
              );
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var a,
                  i,
                  y,
                  C,
                  b,
                  v,
                  S = r("nullthrows")(f.get(n)),
                  R = S.campaign,
                  L = S.campaignGroup,
                  E = e,
                  I =
                    (a = R.destination_type) != null
                      ? a
                      : r("AdCampaignDestination").UNDEFINED,
                  T =
                    o("AdsPagePostUtils").isSesameEligible(t.post, I, !0) ||
                    o("AdsPagePostUtils").isLvaAppInstallSesameEligible(
                      t.post,
                      I,
                      L == null ? void 0 : L.objective,
                    ),
                  D = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.parent_source_facebook_post_id.get(
                    e,
                  ),
                  x = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.parent_source_instagram_media_id.get(
                    e,
                  ),
                  $ =
                    o("AdsBulkValueUtils").getUniformValue(u, null) ===
                      r("AdsLinkPostFormat").COLLECTIONS && p === !0;
                if (
                  (r("isTruthy")(D) || r("isTruthy")(x) || $) &&
                  o(
                    "PartnershipDynamicAdsGatingUtils",
                  ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost()
                ) {
                  var P,
                    N = o("AdsPagePostUtils").maybeGetPostIdFromPagePostId(
                      (P = t.post) == null ? void 0 : P.id,
                    );
                  E = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .parent_source_instagram_media_id.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .instagram_boost_post_access_token.delete,
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.parent_source_facebook_post_id.set(
                      N,
                    ),
                  )(E);
                } else {
                  var M;
                  E = o(
                    "AdsUEditorAdgroupSetPagePostReducerPluginUtils",
                  ).updatedAdgroupWithSelectedPagePost(
                    e,
                    R,
                    L,
                    l,
                    c,
                    d,
                    g,
                    s,
                    _,
                    m,
                    t,
                    (M = t.isEligibleForCTMPEBoostPostExperiment) != null
                      ? M
                      : !1,
                    T,
                    k,
                  );
                }
                return (
                  (E = o(
                    "AdsExistingPostGenAIPostSwitchMutators",
                  ).discardAdoptedGenAIImagesOnPostChange(
                    E,
                    (i =
                      (y = e.creative) == null ? void 0 : y.object_story_id) !=
                      null
                      ? i
                      : (C = e.creative) == null
                        ? void 0
                        : C.source_instagram_media_id,
                    t.pagePostID,
                  )),
                  (E = o(
                    "AdsUEditorAdgroupMediaSourcingSpecMutators",
                  ).mayClearRelatedMediaOnPostChange(
                    E,
                    o(
                      "AdsUEditorAdgroupMediaSourcingSpecMutators",
                    ).getExistingPostID(e),
                    (b = t.post) == null ? void 0 : b.id,
                  )),
                  (E = o(
                    "AdsEPACollageFlexibleFormatMutator",
                  ).optInEligibleEPACollage(
                    E,
                    t.post != null
                      ? o(
                          "AdsExistingPostPhotoCountUtils",
                        ).countExistingPostPhotos(
                          (v = t.post.attachments) == null ? void 0 : v.data,
                          t.post.children_media,
                        )
                      : null,
                    h,
                  )),
                  (E = o(
                    "AdsPartnershipAdsPlacementsMutators",
                  ).maySyncPartnershipAdsOrganicPosts(e, E)),
                  E
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetPagePostDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
