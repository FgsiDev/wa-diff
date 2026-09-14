__d(
  "AdsUEditorAdgroupSetChildVideoIDReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupCarouselCreateVideoIndexSelector",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildVideoIDDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            carouselCreateVideoIndex: r(
              "AdsUEditorAdgroupCarouselCreateVideoIndexSelector",
            ),
          },
          function (e, t, n) {
            var a = n.carouselCreateVideoIndex,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l;
                return o(
                  "AdsUEditorAdgroupChildAttachmentsMutators",
                ).setChildVideoID(
                  e,
                  r("nullthrows")(i.get(n)),
                  t.index != null ? t.index : a != null ? a : 0,
                  t.videoID,
                  t.videoObj,
                  (l = t.videoThumbnail) != null ? l : null,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetChildVideoIDDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
