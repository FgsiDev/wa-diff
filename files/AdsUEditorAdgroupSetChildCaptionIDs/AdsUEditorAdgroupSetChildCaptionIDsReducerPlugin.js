__d(
  "AdsUEditorAdgroupSetChildCaptionIDsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildCaptionIDsDataActionFlux",
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
                ).setChildCaptionIDs(
                  e,
                  r("nullthrows")(a.get(n)),
                  t.index,
                  t.captionIDs,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetChildCaptionIDsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
