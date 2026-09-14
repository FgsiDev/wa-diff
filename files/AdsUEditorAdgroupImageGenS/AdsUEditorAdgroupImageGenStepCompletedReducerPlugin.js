__d(
  "AdsUEditorAdgroupImageGenStepCompletedReducerPlugin",
  [
    "AdsImageGenStepCompletedActionFlux",
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
            return s(e, t);
          });
        },
        r("AdsImageGenStepCompletedActionFlux").actionType,
      ),
    };
    function s(e, t) {
      var n = t.selectedVariants.map(function (e) {
          return u(e, t);
        }),
        r = new Set(t.selectedVariants),
        a = t.allVariants
          .filter(function (e) {
            return !r.has(e);
          })
          .map(function (e) {
            return u(e, t);
          }),
        i =
          t.generationPath === "BACKGROUND_GENERATION"
            ? t.seedImageHash
            : void 0;
      return o("GenAISpecWriter").adoptGenAIVariants(e, {
        adgroupId: e.id,
        imageAssets: n,
        unadoptedImageAssets: a,
        entrypoint: t.entryPoint,
        heroImageHash: i,
        seedImageHash: t.seedImageHash,
      });
    }
    function u(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s = (n = t.variantMetadata) == null ? void 0 : n[e];
      return {
        adImageHash: e,
        metadata: {
          source: t.pregenVariantHashes.includes(e) ? "PREGEN" : "GENERATION",
          generationPath:
            (r =
              (o = s == null ? void 0 : s.generationPath) != null
                ? o
                : c(t.generationPath, e, t.pregenVariantHashes)) != null
              ? r
              : void 0,
          imageVariationId:
            (a = s == null ? void 0 : s.imageVariationId) != null ? a : void 0,
          model: (i = s == null ? void 0 : s.model) != null ? i : void 0,
          recipeName:
            (l = s == null ? void 0 : s.recipeType) != null ? l : void 0,
          seed_asset: { type: "image", image_hash: t.seedImageHash },
        },
      };
    }
    function c(e, t, n) {
      if (e == null) return null;
      switch (e) {
        case "BACKGROUND_GENERATION":
          return "HERO";
        case "FORMAT_AUTOMATION_V2I":
          return n.includes(t) ? "FORMAT_AUTOMATION_V2I" : "HERO";
        default:
          return "NON_HERO";
      }
    }
    var d = e;
    l.default = d;
  },
  98,
);
