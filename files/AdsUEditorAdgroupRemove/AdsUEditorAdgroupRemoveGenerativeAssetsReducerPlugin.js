__d(
  "AdsUEditorAdgroupRemoveGenerativeAssetsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveGenerativeAssetsDataActionFlux",
    "GenAISpecWriter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.assetType;
      return o("GenAISpecWriter").removeAdoptedVariants(e, {
        assetType:
          n === "images" ? "images" : n === "videos" ? "videos" : "all",
        gasOnly: t.removeGasSpecOnly === !0,
      });
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              return e(t, n);
            });
          },
          r("AdsUEditorAdgroupRemoveGenerativeAssetsDataActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
