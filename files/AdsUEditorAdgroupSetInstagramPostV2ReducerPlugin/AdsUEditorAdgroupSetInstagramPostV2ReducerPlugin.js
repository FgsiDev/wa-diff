__d(
  "AdsUEditorAdgroupSetInstagramPostV2ReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsBrandedContentModalMutators",
    "AdsBulkValueUtils",
    "AdsExistingPostGenAIPostSwitchMutators",
    "AdsLinkPostFormat",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetInstagramPostV2DataActionFlux",
    "AdsUEditorAdgroupSetInstagramPostV2ReducerPluginUtils",
    "PECatalogStickyOptOutInputs",
    "PartnershipDynamicAdsGatingUtils",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
    "adsUEditorAdgroupLinkPostFormatSelector",
    "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
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
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAPlusCExistingPostDefault: r(
              "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultGetValueSelector",
            ),
            getShouldEnableMusicDefault: r(
              "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
            ),
            bulkLinkPostFormat: r("adsUEditorAdgroupLinkPostFormatSelector"),
            isPartnershipAdToggleOn: r(
              "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
            ),
            userSettings: r("userSettingsSelector"),
          },
          function (e, t, n) {
            var a,
              i,
              l = n.account,
              s = n.bulkLinkPostFormat,
              u = n.getShouldEnableAPlusCExistingPostDefault,
              c = n.getShouldEnableMusicDefault,
              d = n.isPartnershipAdToggleOn,
              m = n.parentData,
              p = n.userSettings,
              _ = t.adgroupIDs[0],
              f = _ != null ? m.get(_) : null,
              g =
                _ != null
                  ? (a = e.get(_)) == null
                    ? void 0
                    : a.getValue()
                  : null,
              h = o(
                "PECatalogStickyOptOutInputs",
              ).resolveGranularStickyOptOutInputs(
                f == null || (i = f.campaignGroup) == null
                  ? void 0
                  : i.objective,
                g != null && f != null
                  ? o("PECatalogStickyOptOutInputs").resolveStickyOptOutPageID(
                      g,
                      f.specPlugin,
                    )
                  : null,
                null,
              ),
              y = h.objective,
              C = h.pageId,
              b = h.urlType,
              v = o(
                "AdsMetadataConnectedSourcesUtils",
              ).getExistingPostStickyOptOut(
                l.account_id,
                p == null ? void 0 : p.getValue(),
                y,
                C,
                b,
                t.adgroupIDs[0],
              );
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a,
                i,
                p = r("nullthrows")(m.get(e.id)),
                _ = p.campaign,
                f = p.campaignGroup,
                g = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.branded_content.parent_source_facebook_post_id.get(
                  e,
                ),
                h = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.branded_content.parent_source_instagram_media_id.get(
                  e,
                ),
                y = e,
                C =
                  o("AdsBulkValueUtils").getUniformValue(s, null) ===
                    r("AdsLinkPostFormat").COLLECTIONS && d === !0;
              return (
                (r("isTruthy")(g) || r("isTruthy")(h) || C) &&
                o(
                  "PartnershipDynamicAdsGatingUtils",
                ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost()
                  ? (y = o(
                      "AdsBrandedContentModalMutators",
                    ).updateAdgroupWithParentSourceInstagramMediaId(
                      y,
                      t.postID,
                      t.partnershipAdsAdCode,
                    ))
                  : (y = o(
                      "AdsUEditorAdgroupSetInstagramPostV2ReducerPluginUtils",
                    ).updateAdgroupWithSelectedInstagramPostV2(
                      e,
                      _,
                      f,
                      l,
                      u,
                      c,
                      t,
                      v,
                    )),
                (y = o(
                  "AdsExistingPostGenAIPostSwitchMutators",
                ).discardAdoptedGenAIImagesOnPostChange(
                  y,
                  (n = (a = e.creative) == null ? void 0 : a.object_story_id) !=
                    null
                    ? n
                    : (i = e.creative) == null
                      ? void 0
                      : i.source_instagram_media_id,
                  t.postID,
                )),
                (y = o(
                  "AdsUEditorAdgroupMediaSourcingSpecMutators",
                ).mayClearRelatedMediaOnPostChange(
                  y,
                  o(
                    "AdsUEditorAdgroupMediaSourcingSpecMutators",
                  ).getExistingPostID(e),
                  t.postID,
                )),
                (y = o(
                  "AdsPartnershipAdsPlacementsMutators",
                ).maySyncPartnershipAdsOrganicPosts(e, y)),
                y
              );
            });
          },
          o("AdsUEditorAdgroupSetInstagramPostV2DataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
