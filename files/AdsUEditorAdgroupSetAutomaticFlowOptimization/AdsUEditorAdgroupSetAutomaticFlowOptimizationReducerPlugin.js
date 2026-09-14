__d(
  "AdsUEditorAdgroupSetAutomaticFlowOptimizationReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAutomaticFlowOptimizationActionFlux",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsStoreToSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
          },
          function (e, t, n) {
            var r = n.cachedStoreState;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              return o(
                "adsAutomaticFlowMutationSetDoFSpec",
              ).adsAutomaticFlowMutationSetDoFSpec(
                e,
                t.enableAutomaticFlow,
                r,
                (n = t.actionMetadataType) != null ? n : "MANUAL",
                t.editSource,
              );
            });
          },
          o("AdsUEditorAdgroupSetAutomaticFlowOptimizationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
