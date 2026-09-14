__d(
  "AdsUEditorAdgroupSetChildMediaFormatReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildMediaFormatDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsStoreToSelector",
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
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
          },
          function (e, t, n) {
            var a = n.cachedStoreState,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n)),
                  s = o("AdsUEditorAdgroupCachedUtils").getChildMediaFormatData(
                    a,
                    n,
                    t.index,
                  ),
                  u = o(
                    "AdsUEditorAdgroupChildAttachmentsMutators",
                  ).setChildMediaFormat(e, l, t.index, t.mediaFormat, s);
                return o(
                  "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                ).mutateChildAttachments(u, [t.index]);
              },
            );
          },
          o("AdsUEditorAdgroupSetChildMediaFormatDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
