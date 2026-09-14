__d(
  "AdsUEditorAdgroupCachedSetCallToActionLinkActionHandler",
  [
    "AdsUEditorAdgroupCachedCallToActionMutators",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCallToActionLinkDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupSetCallToActionLinkDataActionFlux")
          .actionType,
        fluxInputs: {
          plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
            o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
              .getAdgroupSpecPathPlugin,
          ),
        },
        mutate: function (t, n, r) {
          var e = r.plugins,
            a = t.adgroupIDs,
            i = t.adgroupsToCache;
          return i
            ? o(
                "AdsUEditorAdgroupCachedCallToActionMutators",
              ).updateCacheForAdgroupIDs(i, a, n, e, t.link)
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
