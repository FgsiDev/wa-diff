__d(
  "AdsUEditorAdgroupSetMultiCreatorAdBoostPostsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFormatMutatorUtils",
    "AdsInstagramActorIDUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMultiCreatorAdBoostPostsDataActionFlux",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "adsUEditorAccountSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = [],
                i = e;
              if (
                (t.fbPostIDs.length > 0
                  ? (t.fbPostIDs.forEach(function (e) {
                      var t;
                      return n.push(
                        r("immutable").Map(((t = {}), (t.post_id = e), t)),
                      );
                    }),
                    (i =
                      t.objectStoryID == null
                        ? i
                        : r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_id.set(t.objectStoryID, i)),
                    (i =
                      t.fbPageID == null
                        ? i
                        : r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.facebook_branded_content.sponsor_page_id.set(
                            t.fbPageID,
                            i,
                          )))
                  : (i = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative
                        .facebook_branded_content.delete,
                      r("AdsAdgroupRecordAccessors").creative.object_story_id
                        .delete,
                    )(i)),
                t.igPostIDs.length > 0
                  ? (t.igPostIDs.forEach(function (e) {
                      var t;
                      return n.push(
                        r("immutable").Map(
                          ((t = {}), (t.source_instagram_media_id = e), t),
                        ),
                      );
                    }),
                    (i = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.source_instagram_media_id.set(
                      t.igPostIDs[0],
                      i,
                    )),
                    (i =
                      t.fbPageID == null
                        ? i
                        : o("AdsMutators").chain(
                            r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.object_id.set(t.fbPageID),
                            r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.branded_content_sponsor_page_id.set(
                              t.fbPageID,
                            ),
                            r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.facebook_branded_content.sponsor_page_id.set(
                              t.fbPageID,
                            ),
                          )(i)),
                    (i =
                      t.igBCSponsorID == null
                        ? i
                        : r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.instagram_branded_content.sponsor_id.set(
                            t.igBCSponsorID,
                            i,
                          )))
                  : (i = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative
                        .instagram_branded_content.delete,
                      r("AdsAdgroupRecordAccessors").creative
                        .source_instagram_media_id.delete,
                      r("AdsAdgroupRecordAccessors").creative.object_id.delete,
                    )(i)),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.optimization_type.get(i) !==
                  r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR)
              ) {
                var l,
                  s,
                  u,
                  c = o("AdsInstagramActorIDUtils").getInstagramUserID(e);
                i = o("AdsMutators").chain(
                  (u = r("AdsAdgroupRecordAccessors")).creative
                    .object_story_spec.delete,
                  u.creative.degrees_of_freedom_spec.delete,
                  u.creative.object_type.set(r("ApiAdObjectTypes").PHOTO),
                  u.creative.text_type.set("RAW_TEXT"),
                  o(
                    "AdsInstagramUserIdMigrationUtils",
                  ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(
                    (l = e.creative) == null ? void 0 : l.instagram_actor_id,
                    c,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content_boosting_type.set("SPONSOR_BOOST"),
                  function (e) {
                    return o(
                      "AdsCreativeFormatMutatorUtils",
                    ).mutateBrandedContentAdRenderFormat(e, a);
                  },
                  r("AdsAdgroupRecordAccessors").creative.media_type.set(
                    "EXISTING_INSTAGRAM_POST",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.ad_formats.set(
                    r("immutable").List(["POST"]),
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.optimization_type.set(
                    r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.link_urls.set(
                    (s = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.link_urls.get(i)) != null
                      ? s
                      : r("immutable").List(
                          r("immutable").List([
                            r("immutable").Map({ website_url: "" }),
                          ]),
                        ),
                  ),
                )(
                  o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertToAssetFeedSpec(
                    null,
                    i,
                    null,
                    r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR,
                  ),
                );
              }
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.posts.set(r("immutable").List(n), i);
            });
          },
          r("AdsUEditorAdgroupSetMultiCreatorAdBoostPostsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
