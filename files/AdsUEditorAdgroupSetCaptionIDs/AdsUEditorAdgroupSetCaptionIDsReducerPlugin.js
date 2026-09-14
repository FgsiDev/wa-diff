__d(
  "AdsUEditorAdgroupSetCaptionIDsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPlatformTypes",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCaptionIDsDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "vulture",
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
            r("vulture")("NN0pP25JQuoNR0r9F5XFz6uuQHM=");
            var i = t.adgroupIDs,
              l = t.captionIDs,
              s = t.platform;
            return s === r("AdsPlatformTypes").INSTAGRAM
              ? o("AdsMutators").mutateEach(e, i, function (e) {
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.platform_customizations.instagram.caption_ids.set(
                    l,
                    e,
                  );
                })
              : o("AdsMutators").mutateEach(e, i, function (e, t) {
                  return o("AdsUEditorAdgroupMutators").setVideoCaptionIDs(
                    e,
                    a.get(t),
                    l,
                  );
                });
          },
          o("AdsUEditorAdgroupSetCaptionIDsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
