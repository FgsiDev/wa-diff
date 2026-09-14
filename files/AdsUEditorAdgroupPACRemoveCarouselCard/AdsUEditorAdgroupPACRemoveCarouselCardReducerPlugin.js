__d(
  "AdsUEditorAdgroupPACRemoveCarouselCardReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupPACRemoveCarouselCardActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "adsPlacementAssetMutationRemoveCarouselCard",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.cardIndex,
                o = t.carouselLabel;
              return r("adsPlacementAssetMutationRemoveCarouselCard")(e, o, n);
            });
          },
          o("AdsUEditorAdgroupPACRemoveCarouselCardActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
