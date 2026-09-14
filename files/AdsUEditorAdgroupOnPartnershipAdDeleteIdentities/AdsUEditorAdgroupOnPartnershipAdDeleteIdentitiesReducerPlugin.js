__d(
  "AdsUEditorAdgroupOnPartnershipAdDeleteIdentitiesReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsDynamicAdsUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLinkPostFormat",
    "AdsMutators",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnPartnershipAdDeleteIdentitiesDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorSetPostEditModeMutators",
    "PartnershipDynamicAdsGatingUtils",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
                  l = i.specPlugin,
                  s = e,
                  u = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(s),
                  c =
                    o("AdsDynamicAdsUtils").isDynamicAd(s) &&
                    o("AdsAPIAdgroupRecordUtils").isCollectionsAd(s, l),
                  d =
                    o("AdsDynamicAdsUtils").isDynamicAd(s) &&
                    o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(s, l) ===
                      r("AdsLinkPostFormat").MULTIPLE;
                if (
                  (t.isPrimaryIdentity
                    ? (s = o("AdsMutators").chain(
                        o("AdsInstagramUserIdMigrationUtils")
                          .IGIDV2MigrationAccessors.creative.instagram_user_id
                          .delete,
                        r("AdsAdgroupRecordAccessors").creative
                          .instagram_user_id.delete,
                        r("AdsAdgroupRecordAccessors").creative.object_id
                          .delete,
                      )(s))
                    : (s = o("AdsMutators").chain(
                        r("AdsAdgroupRecordAccessors").creative
                          .facebook_branded_content.sponsor_page_id.delete,
                        r("AdsAdgroupRecordAccessors").creative
                          .instagram_branded_content.delete,
                      )(s)),
                  (s = o("AdsMutators").chain(
                    r("AdsAdgroupRecordAccessors").creative.object_story_id
                      .delete,
                    r("AdsAdgroupRecordAccessors").creative.instagram_story_id
                      .delete,
                    r("AdsAdgroupRecordAccessors").creative
                      .source_instagram_media_id.delete,
                    r("AdsAdgroupRecordAccessors").creative
                      .branded_content_boosting_type.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .instagram_boost_post_access_token.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .facebook_boost_post_access_token.delete,
                    r("AdsAdgroupRecordAccessors").creative.branded_content
                      .content_search_input.delete,
                  )(s)),
                  (s = o(
                    "AdsPartnershipAdsPlacementsMutators",
                  ).clearPartnershipAdsOrganicPostsOnIdentityChange(e, s)),
                  u)
                ) {
                  var m;
                  s = o("AdsMutators").chain(
                    (m = r("AdsAdgroupRecordAccessors")).creative.product_set_id
                      .delete,
                    m.creative.body.delete,
                    m.creative.title.delete,
                    m.creative.portrait_customizations.delete,
                    m.creative.interactive_components_spec.delete,
                    m.creative.instant_checkout_setting.delete,
                    m.creative.degrees_of_freedom_spec.ad_handle_type.delete,
                    m.creative.asset_feed_spec.delete,
                    m.creative.object_story_spec.delete,
                    m.creative.product_set_id.delete,
                  )(s);
                } else
                  c
                    ? t.isPrimaryIdentity &&
                      ((s = o(
                        "AdsInstagramUserIdMigrationUtils",
                      ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.delete(
                        s,
                      )),
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.instagram_user_id.delete(s)),
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.page_id.delete(s)))
                    : d
                      ? (s = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.branded_content.product_set_partner_selection_status.delete(
                          s,
                        ))
                      : t.isPrimaryIdentity &&
                        ((s = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.object_story_spec.set(
                          o("AdsUEditorSetPostEditModeMutators")
                            .EMPTY_OBJECT_STORY_SPEC,
                          s,
                        )),
                        (s = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.product_set_id.delete(s)));
                return (
                  o(
                    "PartnershipDynamicAdsGatingUtils",
                  ).shouldEnableContentSearchForPartnershipAdsDynamicAds() &&
                    (c || d) &&
                    (s = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.branded_content
                        .parent_source_facebook_post_id.delete,
                      r("AdsAdgroupRecordAccessors").creative.branded_content
                        .parent_source_instagram_media_id.delete,
                    )(s)),
                  s
                );
              },
            );
          },
          r("AdsUEditorAdgroupOnPartnershipAdDeleteIdentitiesDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
