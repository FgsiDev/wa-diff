__d(
  "AdsUEditorAdgroupImageGenAdoptPreGenReducerPlugin",
  [
    "AdsExistingPostGenAIPostSwitchMutators",
    "AdsMediaPickerImageGenAdoptPreGenActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "GenAISpecWriter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n, r, a;
              if (
                t.expectedExistingPostID != null &&
                !o(
                  "AdsExistingPostGenAIPostSwitchMutators",
                ).areExistingPostIDsEqual(
                  o(
                    "AdsExistingPostGenAIPostSwitchMutators",
                  ).getGenAIExistingPostID(e),
                  t.expectedExistingPostID,
                )
              )
                return e;
              var i = t.clearExistingGenAIAdoption,
                l =
                  (n = t.entrypoint) != null
                    ? n
                    : "ads_manager__awareness_card",
                s =
                  i != null
                    ? o("GenAISpecWriter").removeAdoptedVariants(e, {
                        assetType: i,
                      })
                    : e;
              if (t.mssOnly === !0)
                return o("GenAISpecWriter").adoptGenAIImageVariantsToMSS(s, {
                  adgroupId: e.id,
                  entrypoint: l,
                  imageAssets: t.preGenHashes.map(function (e) {
                    var t = e[0];
                    return { adImageHash: t };
                  }),
                  seedImageHash:
                    t.seedImageHash !== "" ? t.seedImageHash : void 0,
                  videoAssets: [],
                });
              var u = o("GenAISpecWriter").adoptGenAIVariants(s, {
                adgroupId: e.id,
                entrypoint: l,
                imageAssets: t.preGenHashes.map(function (e) {
                  var n,
                    r,
                    o = e[0],
                    a = e[1];
                  return {
                    adImageHash: o,
                    metadata: {
                      source: "GENERATION",
                      generationPath:
                        a != null
                          ? a === "BACKGROUND_GENERATION"
                            ? "HERO"
                            : "NON_HERO"
                          : void 0,
                      model:
                        (n = (r = t.variantModels) == null ? void 0 : r[o]) !=
                        null
                          ? n
                          : void 0,
                    },
                  };
                }),
                heroImageHash: (r = t.seedImageHash) != null ? r : void 0,
                seedImageHash: (a = t.seedImageHash) != null ? a : void 0,
                mergeWithExistingGAS: !0,
              });
              return u;
            });
          },
          r("AdsMediaPickerImageGenAdoptPreGenActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
