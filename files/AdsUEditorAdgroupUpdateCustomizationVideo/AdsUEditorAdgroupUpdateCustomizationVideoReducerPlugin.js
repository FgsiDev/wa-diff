__d(
  "AdsUEditorAdgroupUpdateCustomizationVideoReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpdateCustomizationVideoDataActionFlux",
    "AdsVideoStore",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            getVideo: r("AdsVideoStore").getSelector,
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.getVideo,
              i = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.isBaseAsset,
                l = t.videoID,
                s = t.thumbnailURL,
                u = t.thumbnailID,
                c = t.thumbnailSource,
                d = r("nullthrows")(i.get(e.id)),
                m = t.videoID != null ? a(t.videoID) : null,
                p = m == null ? void 0 : m.preferredThumbnail;
              return o("AdsUEditorAdgroupMutators").setCustomizationVideo({
                adgroup: e,
                videoID: l,
                specPathPlugin: d,
                actionThumbnailURL: s,
                actionThumbnailID: u,
                preferredThumbnail: p,
                thumbnailSource: c,
                video: m,
                isBaseAsset: n,
                label: t.label,
              });
            });
          },
          o("AdsUEditorAdgroupUpdateCustomizationVideoDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
