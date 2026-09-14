__d(
  "AdsUEditorAdgroupSetChildImageAndCropsReducerPlugin",
  [
    "AdsAdgroupMultiProductMutatorUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetChildImageAndCropsDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return o(
                  "AdsAdgroupMultiProductMutatorUtils",
                ).setChildImageAndCrops(
                  t.index,
                  t.childImageCrops,
                  t.childImageHash,
                  t.childImageURL,
                  e,
                  t.childThumbnailURL,
                  t.childThumbnailHeight,
                  t.childThumbnailWidth,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetChildImageAndCropsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
