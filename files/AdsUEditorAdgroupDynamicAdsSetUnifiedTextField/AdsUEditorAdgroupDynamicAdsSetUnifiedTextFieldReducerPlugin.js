__d(
  "AdsUEditorAdgroupDynamicAdsSetUnifiedTextFieldReducerPlugin",
  [
    "AdsAdgroupDynamicAdsTextFieldMutators",
    "AdsMutators",
    "AdsUEditorAdgroupDynamicAdsSetUnifiedTextFieldDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "DAFlexibleFormatUtils",
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
                var i = t.fieldType,
                  l = t.value,
                  s = r("nullthrows")(a.get(n)),
                  u = e,
                  c = o("DAFlexibleFormatUtils").getAvailableMediaSources(e);
                return (
                  c.includes("uploaded_media") &&
                    (u = o(
                      "AdsAdgroupDynamicAdsTextFieldMutators",
                    ).mutateDynamicAdsUploadedMediaTextFieldMutator(
                      u,
                      i,
                      l,
                      s,
                    )),
                  c.includes("related_media") &&
                    (u = o(
                      "AdsAdgroupDynamicAdsTextFieldMutators",
                    ).mutateDynamicAdsRelatedMediaTextFieldMutator(u, i, l)),
                  u
                );
              },
            );
          },
          o("AdsUEditorAdgroupDynamicAdsSetUnifiedTextFieldDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
