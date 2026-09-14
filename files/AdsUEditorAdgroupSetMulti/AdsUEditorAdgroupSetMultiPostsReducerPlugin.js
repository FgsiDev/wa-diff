__d(
  "AdsUEditorAdgroupSetMultiPostsReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPagePostUtils",
    "AdsUEditorAdgroupMultiPostSpecUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMultiPostsDataActionFlux",
    "GenAISpecDeleter",
    "GenAISpecReader",
    "adsPlacementAssetMutatorRemovePACForMultiPost",
    "immutable",
    "justknobx",
    "nullthrows",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t === !0 || e == null || e === "" || r("justknobx")._("3568")
        ? r("uuidv4")().toString()
        : e;
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a,
                i,
                l,
                s = t,
                u = o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).getCustomizationsForSelectedPosts(t, !1);
              if (n.orderedPostIDs.length <= 1) {
                var c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative_asset_groups_spec.groups.get(t);
                return c == null || c.size === 0
                  ? t
                  : o("AdsMutators").chain(
                      o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators")
                        .deleteAllOrigins,
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative_asset_groups_spec.groups.set(
                        r("immutable").List([]),
                      ),
                    )(s);
              }
              ((o("GenAISpecReader").isGenAIImagesOptedIn(t) ||
                ((a =
                  (i = o("GenAISpecReader").getAdoptedImageHashes(t)) == null
                    ? void 0
                    : i.length) != null
                  ? a
                  : 0) > 0) &&
                (s = o("GenAISpecDeleter").removeAdoptedVariants(s, {
                  assetType: "images",
                })),
                (o("GenAISpecReader").isGenAIVideosOptedIn(t) ||
                  o("GenAISpecReader").hasAdoptedGenAIVideo(t)) &&
                  (s = o("GenAISpecDeleter").removeAdoptedVariants(s, {
                    assetType: "videos",
                  })));
              var d = o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).getCagGroupAtIndex(t, 0),
                m = o(
                  "AdsUEditorAdgroupMultiPostSpecUtils",
                ).buildMultiPostsWithPreservedOverrides(u, n.orderedPostIDs),
                p = n.orderedPostIDs[0];
              if (p != null)
                if (p.isInstagramPost)
                  ((s = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.source_instagram_media_id.set(p.postId, s)),
                    (s = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_id.delete(s)),
                    (s =
                      n.fbPageID == null
                        ? s
                        : r("AdsAdgroupRecordAccessors").creative.object_id.set(
                            n.fbPageID,
                            s,
                          )));
                else {
                  var _ = n.fbPageID;
                  (o("AdsPagePostUtils").isPagePostId_BROKEN(p.postId)
                    ? (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_id.set(p.postId, s))
                    : _ != null &&
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_id.set(
                        o("AdsPagePostUtils").generatePagePostId_BROKEN(
                          _,
                          r("nullthrows")(p.postId),
                        ),
                        s,
                      )),
                    (s = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative
                        .source_instagram_media_id.delete,
                      r("AdsAdgroupRecordAccessors").creative.object_id.delete,
                    )(s)));
                }
              else
                s = o("AdsMutators").chain(
                  r("AdsAdgroupRecordAccessors").creative.object_story_id
                    .delete,
                  r("AdsAdgroupRecordAccessors").creative
                    .source_instagram_media_id.delete,
                  r("AdsAdgroupRecordAccessors").creative.object_id.delete,
                )(s);
              var f = r("immutable").Map(
                ((l = {}),
                (l.group_uuid = e(
                  d == null ? void 0 : d.group_uuid,
                  n.forceRegenerateGroupUUID,
                )),
                (l.posts = r("immutable").List(
                  m.map(function (e) {
                    return r("immutable").Map(e);
                  }),
                )),
                l),
              );
              return (
                (s = r("adsPlacementAssetMutatorRemovePACForMultiPost")(s)),
                o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                    ).setOrigins(e, ["multi_post_to_single_post_pre_test"]);
                  },
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative_asset_groups_spec.groups.set(
                    r("immutable").List([f]),
                  ),
                )(s)
              );
            });
          },
          o("AdsUEditorAdgroupSetMultiPostsDataActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
