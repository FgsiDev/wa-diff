__d(
  "AdsUEditorAdgroupAdsAutomaticFlowToStandardFlowReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdsAutomaticFlowToStandardFlowActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsAutomaticFlowMutationConvertToDefaultObjectStorySpec",
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
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = r("nullthrows")(n.get(e.id));
              return r(
                "adsAutomaticFlowMutationConvertToDefaultObjectStorySpec",
              )(e, t);
            });
          },
          o("AdsUEditorAdgroupAdsAutomaticFlowToStandardFlowActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
