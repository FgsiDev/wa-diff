__d(
  "AdsUEditorAdgroupApplyOptimizationChangeSetsReducerPlugin",
  [
    "AdsCFPApplyChangeSetMutators",
    "AdsCFPDataProvider",
    "AdsCreativeFeaturesPlatformMutators",
    "AdsMutators",
    "AdsUEditorAdgroupApplyOptimizationChangeSetsActionFlux",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupReducerUtils",
    "AdsVideoBundleTestSeedMutator",
    "adsStoreToSelector",
    "adsUEditorAdgroupEligibleForCFPSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableVideoFilteringByDefaultSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map(),
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            isEligibleForCFP: r("adsUEditorAdgroupEligibleForCFPSelector"),
            cfpData: r("AdsCFPDataProvider").toFluxSelector(),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            creativeFeaturesEligibility: r(
              "adsUEditorCreativeFeaturesEligibilitySelector",
            ),
            getDefaultAutoflowOptInStatus: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            getVideoFilteringDefaultOn: r(
              "adsUEditorGetShouldEnableVideoFilteringByDefaultSelector",
            ),
          },
          function (t, n, a) {
            var i,
              l = a.cachedStoreState,
              s = a.cfpData,
              u = a.creativeFeaturesEligibility,
              c = a.getDefaultAutoflowOptInStatus,
              d = a.getVideoFilteringDefaultOn,
              m = a.isEligibleForCFP;
            if (!m && n.availableToolPlugins != null)
              i = n.availableToolPlugins
                .getArray()
                .filter(function (e) {
                  return (
                    e.mutateAdgroup != null &&
                    n.optimizationChangeSets.has(e.key)
                  );
                })
                .map(function (t) {
                  return function (r) {
                    var o;
                    return (o =
                      t.mutateAdgroup == null
                        ? void 0
                        : t.mutateAdgroup(
                            r,
                            e,
                            n.optimizationChangeSets.get(t.key),
                            n.extraData.get(t.key),
                            n.optimizationChangeSets,
                          )) != null
                      ? o
                      : r;
                  };
                });
            else {
              var p,
                _,
                f,
                g,
                h,
                y,
                C,
                b,
                v,
                S,
                R,
                L,
                E,
                k,
                I,
                T,
                D,
                x,
                $,
                P,
                N,
                M,
                w,
                A,
                F,
                O,
                B,
                W,
                q,
                U = s.availableTools,
                V = s.globalChangeSet,
                H = s.toolsEdit,
                G = H.get("productExtensions"),
                z = r("immutable").Map(
                  babelHelpers.extends(
                    {
                      dynamicExperiences: H.has("dynamicExperiences")
                        ? "MANUAL"
                        : c().optInSource,
                      imageTemplate:
                        (p = H.get("imageTemplate")) != null
                          ? p
                          : c().optInSource,
                      imageTouchup:
                        (_ = H.get("imageTouchup")) != null
                          ? _
                          : c().optInSource,
                      textOptimization:
                        (f = H.get("textOptimization")) != null
                          ? f
                          : c().optInSource,
                      videoAutoCrop:
                        (g = H.get("videoAutoCrop")) != null
                          ? g
                          : c().optInSource,
                      inlineComment:
                        (h = H.get("inlineComment")) != null ? h : "DEFAULT",
                      imageBackgroundGen:
                        (y = H.get("imageBackgroundGen")) != null
                          ? y
                          : "DEFAULT",
                      DAProductMetadataAutomation:
                        (C = H.get("DAProductMetadataAutomation")) != null
                          ? C
                          : "DEFAULT",
                    },
                    G ? { productExtensions: G } : {},
                    {
                      aPlusCProductExtensions:
                        (b = H.get("aPlusCProductExtensions")) != null
                          ? b
                          : "DEFAULT",
                      aPlusCAdsWithBenefits:
                        (v = H.get("aPlusCAdsWithBenefits")) != null
                          ? v
                          : "DEFAULT",
                      imageAnimation:
                        (S = H.get("imageAnimation")) != null ? S : "DEFAULT",
                      igReelsVideoSubtitles:
                        (R = H.get("igReelsVideoSubtitles")) != null
                          ? R
                          : "DEFAULT",
                      imageUncrop:
                        (L = H.get("imageUncrop")) != null ? L : "DEFAULT",
                      addOverlays:
                        (E = H.get("addOverlays")) != null ? E : "DEFAULT",
                      DAAddTextOverlays:
                        (k = H.get("DAAddTextOverlays")) != null
                          ? k
                          : "DEFAULT",
                      textTranslation:
                        (I = H.get("textTranslation")) != null ? I : "DEFAULT",
                      DAHidePrice:
                        (T = H.get("DAHidePrice")) != null ? T : "DEFAULT",
                      showSummary:
                        (D = H.get("showSummary")) != null ? D : "DEFAULT",
                      imageBrightnessAndContrast:
                        (x = H.get("imageBrightnessAndContrast")) != null
                          ? x
                          : "DEFAULT",
                      videoFiltering:
                        ($ = H.get("videoFiltering")) != null
                          ? $
                          : d().optInSource,
                      videoUncrop:
                        (P = H.get("videoUncrop")) != null ? P : "DEFAULT",
                      enhanceCTA:
                        (N = H.get("enhanceCTA")) != null ? N : "DEFAULT",
                      aPlusCLocalStoreExtension:
                        (M = H.get("aPlusCLocalStoreExtension")) != null
                          ? M
                          : "DEFAULT",
                      pacRelaxationAPlusC:
                        (w = H.get("pacRelaxationAPlusC")) != null
                          ? w
                          : "DEFAULT",
                      bizAI: (A = H.get("bizAI")) != null ? A : "DEFAULT",
                      revealDetailsOverTime:
                        (F = H.get("revealDetailsOverTime")) != null
                          ? F
                          : "DEFAULT",
                      showDestinationBlurbs:
                        (O = H.get("showDestinationBlurbs")) != null
                          ? O
                          : "DEFAULT",
                      creativeStickers:
                        (B = H.get("creativeStickers")) != null ? B : "DEFAULT",
                      replaceMediaText:
                        (W = H.get("replaceMediaText")) != null ? W : "DEFAULT",
                      productBrowsing:
                        (q = H.get("productBrowsing")) != null ? q : "DEFAULT",
                    },
                  ),
                ),
                j = u.hasValue()
                  ? u.getValueEnforcing().features_eligibility_map
                      .eligible_features
                  : null;
              i = n.adgroupIDs.map(function (e) {
                return function (e) {
                  var t = o(
                      "AdsCFPApplyChangeSetMutators",
                    ).applyChangeSetByAvailablePlugin(
                      e,
                      V,
                      l,
                      Array.from(U.keys()),
                      n.isAllToosOn,
                      z,
                      n.extraData,
                    ),
                    a = r("AdsVideoBundleTestSeedMutator")(t),
                    i = n.isAdAlreadyPublished === !0;
                  return o(
                    "AdsCreativeFeaturesPlatformMutators",
                  ).mutateAdgroupForVideoBundleRecommendation(a, j, i);
                };
              });
            }
            return i != null
              ? o("AdsMutators").mutateEach(
                  t,
                  n.adgroupIDs,
                  o("AdsMutators").chain.apply(
                    o("AdsMutators"),
                    n.croppingMutators.concat(i),
                  ),
                )
              : o("AdsMutators").mutateEach(
                  t,
                  n.adgroupIDs,
                  o("AdsMutators").chain.apply(
                    o("AdsMutators"),
                    n.croppingMutators,
                  ),
                );
          },
          o("AdsUEditorAdgroupApplyOptimizationChangeSetsActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
