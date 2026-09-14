__d(
  "AdsUEditorAdgroupSetChildImageURLReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildImageURLDataActionFlux",
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
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return o(
                  "AdsUEditorAdgroupChildAttachmentsMutators",
                ).setChildImageURL(
                  e,
                  r("nullthrows")(
                    a.get(n),
                    "AdsUEditorAdgroupSetChildImageURLReducerPlugin: Plugin must exist for adgroupID in action.",
                  ),
                  t.index,
                  t.imageURL,
                  t.videoThumbnailID,
                  t.videoThumbnailSource,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetChildImageURLDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
