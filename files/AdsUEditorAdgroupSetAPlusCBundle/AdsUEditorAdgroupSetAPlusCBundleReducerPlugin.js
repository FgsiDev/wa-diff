__d(
  "AdsUEditorAdgroupSetAPlusCBundleReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAPlusCBundleActionFlux",
    "adsAplusCBundleDoFSpecMutators",
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
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                t.enableImageTemplates === !0 &&
                  (n = o(
                    "adsAplusCBundleDoFSpecMutators",
                  ).adsAPlusCBundleMutationSetImageTemplates(n)),
                t.enableImageTouchups === !0 &&
                  (n = o(
                    "adsAplusCBundleDoFSpecMutators",
                  ).adsAPlusCBundleMutationSetImageTouchups(n)),
                t.enableTextOptimizations === !0 &&
                  (n = o(
                    "adsAplusCBundleDoFSpecMutators",
                  ).adsAPlusCBundleMutationSetTextOptimizations(n)),
                t.enableVideoAutoCrop === !0 &&
                  (n = o(
                    "adsAplusCBundleDoFSpecMutators",
                  ).adsAPlusCBundleMutationSetVideoAutoCrop(n)),
                t.enablePacRelaxation === !0 &&
                  (n = o(
                    "adsAplusCBundleDoFSpecMutators",
                  ).adsAPlusCBundleMutationSetPacRelaxation(n)),
                (t.enableImageTemplates === !0 ||
                  t.enableImageTouchups === !0 ||
                  t.enablePacRelaxation === !0 ||
                  t.enableTextOptimizations === !0 ||
                  t.enableVideoAutoCrop === !0) &&
                  (n = o(
                    "adsAplusCBundleDoFSpecMutators",
                  ).adsAPlusCBundleMutationSetDegreesOfFreedomType(n)),
                n
              );
            });
          },
          r("AdsUEditorAdgroupSetAPlusCBundleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
