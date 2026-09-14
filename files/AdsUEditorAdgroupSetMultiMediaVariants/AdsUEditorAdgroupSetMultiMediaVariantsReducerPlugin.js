__d(
  "AdsUEditorAdgroupSetMultiMediaVariantsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMultiMediaVariantsActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              r = t.multiMediaVariantsMap;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o(
                "AdsUEditorAdgroupMultiMediaSpecMutators",
              ).maySetMediaSourcingSpecVariants(e, r);
            });
          },
          o("AdsUEditorAdgroupSetMultiMediaVariantsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
