__d(
  "AdsFlexibleFormatToggleForDataSourceReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsFlexibleFormatToggleForDataSourceActionFlux",
    "AdsFormatTransformationFormatPlugins",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "SEFunnelLogger",
    "adsFlexibleFormatCreativeReactiveControlSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            reactiveControlState: o(
              "adsFlexibleFormatCreativeReactiveControlSelector",
            ).adsFlexibleFormatCreativeReactiveControlSelector,
          },
          function (e, t, n) {
            var a = n.reactiveControlState;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i = e;
              if (t.enrollStatus === "OPT_OUT") {
                var l = a.eligibleFormatDataSourceMap
                  .filter(function (e) {
                    return e.includes(t.dataSource);
                  })
                  .keySeq()
                  .toArray();
                return (
                  l.forEach(function (e) {
                    var n, r;
                    i = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator(
                      i,
                      e,
                      t.dataSource,
                      (n =
                        (r = a.eligibleFormatDataSourceMap) == null
                          ? void 0
                          : r.get(e)) != null
                        ? n
                        : [],
                      "MANUAL",
                    );
                  }),
                  t.dataSource === "catalog" &&
                    l.includes("da_collection") &&
                    (i = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsDACollectionAssetFeedSpecOptOutMutator(i)),
                  o("SEFunnelLogger").logConsentDivergenceCheck(
                    e.id,
                    i,
                    "reactive_control_data_source_opt_out",
                  ),
                  i
                );
              }
              var s =
                (n = e.creative) == null
                  ? void 0
                  : n.format_transformation_spec;
              if (
                (s instanceof r("immutable").List && (s = s.toJS()), s == null)
              )
                return i;
              if (
                (s.forEach(function (e) {
                  var n = e.format,
                    a = r("AdsFormatTransformationFormatPlugins")
                      .get(n)
                      .supportedSources.includes(t.dataSource);
                  a &&
                    (i = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator(
                      i,
                      n,
                      t.dataSource,
                      "MANUAL",
                    ));
                }),
                t.dataSource === "catalog")
              ) {
                var u = s.some(function (e) {
                  return e.format === "da_collection";
                });
                u &&
                  (i = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsDACollectionAssetFeedSpecOptInMutator(i));
              }
              return (
                o("SEFunnelLogger").logConsentDivergenceCheck(
                  e.id,
                  i,
                  "reactive_control_data_source_opt_in",
                ),
                i
              );
            });
          },
          [r("AdsFlexibleFormatToggleForDataSourceActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
