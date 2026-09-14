__d(
  "AdsUEditorAdgroupChangeMediaAssetReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChangeMediaAssetDataActionFlux",
    "AdsUEditorAdgroupDegreesOfFreedomMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsVideoStore",
    "FBLogger",
    "adsIsNewVideoThumbnailDataModel",
    "adsPlacementAssetMutationUpdateMediaAsset",
    "adsUEditorAccountSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getVideo: r("AdsVideoStore").getSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getVideo,
              l = n.parentData,
              s = t.asset;
            if (s.format === "video") {
              var u = s.videoID,
                c = u != null && typeof u == "string" ? i(u) : null,
                d = s.thumbnailURL;
              if (
                d == null ||
                (d === "" && c != null && c.preferredThumbnail != null)
              ) {
                var m;
                ((s.thumbnailURL =
                  c == null || (m = c.preferredThumbnail) == null
                    ? void 0
                    : m.uri),
                  (s.thumbnailSource = "generated_default"));
              }
              if (
                r("adsIsNewVideoThumbnailDataModel")() &&
                c != null &&
                c.preferredThumbnail != null
              ) {
                var p =
                  s.thumbnailSource === "generated_default" ||
                  s.thumbnailSource === "assumed_generated_default" ||
                  s.thumbnailSource === "smart_selected";
                s.thumbnailID = p ? "0" : c.preferredThumbnail.ent_id;
              }
            }
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i,
                u,
                c,
                d = null,
                m = e;
              (t.existingLabel instanceof r("immutable").Map
                ? (d = t.existingLabel.get(e.id) || "")
                : (d = t.existingLabel),
                ((n = m.creative) == null ||
                (n = n.degrees_of_freedom_spec) == null
                  ? void 0
                  : n.stories_transformation_types) != null &&
                  (m = o(
                    "AdsUEditorAdgroupDegreesOfFreedomMutators",
                  ).removeTransformations(m, {
                    target: "stories",
                    transformations: r("immutable").List(["PORTAL"]),
                  })),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.ig_glados_feed.get(
                  m,
                ) != null &&
                  (m = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.ig_glados_feed.delete(
                    m,
                  )),
                ((i = m.creative) == null ||
                (i = i.degrees_of_freedom_spec) == null
                  ? void 0
                  : i.image_transformation_types) != null &&
                  (m = o(
                    "AdsUEditorAdgroupDegreesOfFreedomMutators",
                  ).removeTransformations(m, {
                    target: "image",
                    transformations: r("immutable").List([
                      "FB_REELS_IMAGE_DEFAULT",
                      "IG_REELS_IMAGE_PORTAL",
                    ]),
                  })),
                ((u = m.creative) == null ||
                (u = u.degrees_of_freedom_spec) == null
                  ? void 0
                  : u.video_transformation_types) != null &&
                  (m = o(
                    "AdsUEditorAdgroupDegreesOfFreedomMutators",
                  ).removeTransformations(m, {
                    target: "video",
                    transformations: r("immutable").List([
                      "FB_REELS_VIDEO_DEFAULT",
                      "IG_REELS_VIDEO_PORTAL",
                    ]),
                  })));
              var p =
                (c = m.creative) == null || (c = c.asset_feed_spec) == null
                  ? void 0
                  : c.asset_customization_rules;
              if (
                !o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(
                  m,
                ) ||
                !p
              )
                return m;
              var _ = o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).getMediaAssetTypeFromTargetRuleLabel(p, d);
              if (_ === "carousel")
                return (
                  r("FBLogger")("am_feature_pac").mustfix(
                    "Unexpected fromMediaType carousel in AdsUEditorAdgroupChangeMediaAssetReducerPlugin",
                  ),
                  m
                );
              var f = r("nullthrows")(l.get(m.id)),
                g = f.specPlugin;
              return r("adsPlacementAssetMutationUpdateMediaAsset")(
                a,
                m,
                g,
                d,
                _,
                s,
              );
            });
          },
          o("AdsUEditorAdgroupChangeMediaAssetDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
