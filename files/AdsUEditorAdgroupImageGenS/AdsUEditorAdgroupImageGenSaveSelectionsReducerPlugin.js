__d(
  "AdsUEditorAdgroupImageGenSaveSelectionsReducerPlugin",
  [
    "AdsCreativeFlexSpecCheckUtils",
    "AdsImageGenSaveSelectionsActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "GenAISpecWriter",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e,
                a = t.selectedVariantHashes.filter(function (e) {
                  return t.allVariantHashes.includes(e);
                });
              if (a.length === 0)
                return (
                  (n = o("GenAISpecWriter").removeAdoptedVariants(n, {
                    assetType: "images",
                    imageHashes: t.allVariantHashes,
                  })),
                  o("AdsCreativeFlexSpecCheckUtils").isCreativeFlexOptedInAd(
                    n,
                  ) &&
                    (n = o(
                      "AdsUEditorAdgroupMediaSourcingSpecMutators",
                    ).maySetCreativeFlexInCAG(n, r("uuidv4")().toString(), !1)),
                  n
                );
              var i = a.map(function (e) {
                  return { adImageHash: e };
                }),
                l = t.allVariantHashes
                  .filter(function (e) {
                    return !t.selectedVariantHashes.includes(e);
                  })
                  .map(function (e) {
                    return { adImageHash: e };
                  });
              return o("GenAISpecWriter").adoptGenAIVariants(n, {
                adgroupId: n.id,
                entrypoint: "ads_manager__media_picker",
                imageAssets: i,
                unadoptedImageAssets: l,
                seedImageHash:
                  t.seedImageHash !== "" ? t.seedImageHash : void 0,
              });
            });
          },
          r("AdsImageGenSaveSelectionsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
