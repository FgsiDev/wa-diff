__d(
  "adsVideoUploadInFlightSelectors",
  [
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsLocalVideoSelectors",
    "AdsPEIsUploadingVideoSelectors",
    "adsCreateSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          o("AdsLocalVideoSelectors").isLocalVideoUploading,
          o("AdsPEIsUploadingVideoSelectors").areSelectedAdgroupsUploadingVideo,
        ],
        function (t, n, r) {
          var e;
          if (n || r || t.length !== 1) return !1;
          var a = t[0];
          if (
            o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
              a,
              "multi_media",
            )
          )
            return !1;
          var i = a == null ? void 0 : a.creative,
            l =
              i == null || (e = i.creative_sourcing_spec) == null
                ? void 0
                : e.selected_video_id;
          if (l == null || l === "") return !1;
          var s = i == null ? void 0 : i.object_story_spec,
            u = [
              (s == null ? void 0 : s.link_data) != null,
              (s == null ? void 0 : s.photo_data) != null,
              (s == null ? void 0 : s.product_data) != null,
              (s == null ? void 0 : s.template_data) != null,
              (s == null ? void 0 : s.text_data) != null,
              (s == null ? void 0 : s.video_data) != null,
            ].filter(Boolean).length;
          if (u > 1) return !1;
          var c = s == null ? void 0 : s.video_data;
          return c == null ||
            !o("AdsAdgroupTypeUtils").isVideoAdFromSpec(a) ||
            o("AdsAssetFeedUtils").usesAssetFeedVideoWritePath(a)
            ? !1
            : c.video_id !== l;
        },
        { name: i.id + ".hasPendingSelectedVideo" },
      ),
      s = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          o("AdsLocalVideoSelectors").isLocalVideoUploading,
          o("AdsPEIsUploadingVideoSelectors").areSelectedAdgroupsUploadingVideo,
          e,
        ],
        function (t, n, r, o) {
          return t.length !== 1 ? !1 : n || r || o;
        },
        { name: i.id + ".isVideoUploadInFlight" },
      );
    ((l.hasPendingSelectedVideo = e), (l.isVideoUploadInFlight = s));
  },
  98,
);
