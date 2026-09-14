__d(
  "AdsUEditorAdgroupAddCustomizationVideoReducerPlugin",
  [
    "AdsAssetFeedUtils",
    "AdsInteractiveComponentConstants",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationVideoDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupVideoMutators",
    "AdsVideoStore",
    "FBLogger",
    "adsContainsAssetCustomizationPlacement",
    "adsPlacementAssetMutationCopyDefaultCustomizations",
    "adsUEditorAccountSelector",
    "immutable",
    "isFalsey",
    "nullthrows",
    "vulture",
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
              l = n.parentData;
            return (
              r("vulture")("Zsra82Nw1-ZPhTXE8dgUBLBpC3Y="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n;
                r("vulture")("aDIm2pYFyHY_s6fyU9oHdVkaNDE=");
                var s = t.thumbnailURL,
                  u = t.thumbnailID,
                  c =
                    (n = e.creative) == null ||
                    (n = n.object_story_spec) == null ||
                    (n = n.video_data) == null
                      ? void 0
                      : n.video_thumbnail_source,
                  d = null;
                if (r("isFalsey")(s)) {
                  if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) {
                    var m,
                      p =
                        ((m = e.creative) == null ||
                        (m = m.asset_feed_spec) == null
                          ? void 0
                          : m.videos) || r("immutable").List([]),
                      _ = p.find(function (e) {
                        r("vulture")("qZQaH37AnEsC6enaJ9JsuD6r9Ws=");
                        var n =
                          e instanceof r("immutable").Map
                            ? e.get("video_id")
                            : e.video_id;
                        return n === t.videoID;
                      });
                    _ != null &&
                      ((s = _.get("thumbnail_url")),
                      (u = _.get("thumbnail_id")),
                      (c = _.get("thumbnail_source")),
                      (d = _.get("thumbnail_hash")));
                  } else {
                    var f, g;
                    ((s =
                      (f = e.creative) == null ||
                      (f = f.object_story_spec) == null ||
                      (f = f.video_data) == null
                        ? void 0
                        : f.image_url),
                      (u =
                        (g = e.creative) == null ||
                        (g = g.object_story_spec) == null ||
                        (g = g.video_data) == null
                          ? void 0
                          : g.video_thumbnail_id));
                  }
                  if (r("isFalsey")(s)) {
                    var h = i(t.videoID);
                    s = h && h.preferredThumbnail && h.preferredThumbnail.uri;
                  }
                  if (r("isFalsey")(u)) {
                    var y = i(t.videoID);
                    u =
                      y && y.preferredThumbnail && y.preferredThumbnail.ent_id;
                  }
                }
                var C = null,
                  b = t.placements.get(0),
                  v =
                    t.placements.size === 1 &&
                    b != null &&
                    r("adsContainsAssetCustomizationPlacement")(
                      o("AdsInteractiveComponentConstants")
                        .SUPPORTED_PLACEMENTS,
                      b,
                    );
                if (v) {
                  var S;
                  C =
                    (S = e.creative) == null
                      ? void 0
                      : S.interactive_components_spec;
                }
                var R = r("nullthrows")(l.get(e.id)),
                  L = R.campaign,
                  E = R.specPlugin;
                if (
                  (d != null && typeof d != "string") ||
                  (s != null && typeof s != "string") ||
                  (u != null && typeof u != "string")
                )
                  return (
                    r("FBLogger")("am_feature_pac").mustfix(
                      "Unexpected video thumbnail url %s or video thumbnail hash %s",
                      String(s),
                      String(d),
                    ),
                    e
                  );
                if (
                  c != null &&
                  c !== "assumed_custom" &&
                  c !== "assumed_generated_default" &&
                  c !== "custom" &&
                  c !== "generated_default" &&
                  c !== "generated_selected" &&
                  c !== "scrubber_selected" &&
                  c !== "sharpness_entropy_smart_selected" &&
                  c !== "smart_selected" &&
                  c !== "thumbnail_testing" &&
                  c !== "unknown"
                )
                  return (
                    r("FBLogger")("am_feature_pac").mustfix(
                      "Unexpected video thumbnail source %s",
                      String(c),
                    ),
                    e
                  );
                var k = o(
                    "AdsUEditorAdgroupVideoMutators",
                  ).addPlacementCustomizationVideo(
                    e,
                    L,
                    E,
                    a,
                    t.existingLabel,
                    t.isBaseAsset,
                    t.videoID,
                    s,
                    u,
                    t.backgroundColor,
                    c != null ? c : "generated_default",
                    t.placements,
                    "ADD_CUSTOMIZATION_VIDEO",
                    !0,
                    !0,
                    C,
                    d,
                  ),
                  I =
                    o(
                      "AdsAssetFeedUtils",
                    ).isLocalizedPlacementsAdgroupFromRecord(k);
                return I
                  ? k
                  : r("adsPlacementAssetMutationCopyDefaultCustomizations")(
                      a,
                      k,
                      E,
                      t.placements,
                    );
              })
            );
          },
          o("AdsUEditorAdgroupAddCustomizationVideoDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
