__d(
  "AdsCreativeVideoGenModalContext",
  ["AdsCreativeVideoGenTypes", "emptyFunction", "immutable", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useContext,
      d = {
        currentStep: o("AdsCreativeVideoGenTypes").VideoGenModalStep.PRE_GEN,
        deselectedVideoIDs: [],
        dismissedToasts: r("immutable").Map(),
        generatedVideos: r("immutable").Map(),
        generatingMoreLoadingScreenImages: null,
        hasOptedInOnPreLoadingScreen: !1,
        hasProgressiveScriptingBeenTriggered: !1,
        nestedPanel: null,
        requestID: "",
        sampleVideosCache: null,
        seedAssetForGeneration: null,
        portfolioSelectedIDs: [],
        portfolioRecipeSelectedIDs: [],
        portfolioVideoToVariantMap: {},
        portfolioShadowStatusID: null,
        selectedVideoID: null,
        showMediaSelectionModal: !1,
        sourcedAssetData: null,
        sourcedAssetID: null,
        statusIDsWithGeneration: [],
        usedCachedVideoGen: null,
        cacheHitStage: null,
        pregenCacheHit: null,
        pregenCacheOutcome: o("AdsCreativeVideoGenTypes").PregenCacheOutcome
          .NOT_APPLICABLE,
        videosEditableDataByID: r("immutable").Map(),
        videoStatusID: null,
        videoStatusIDSource: null,
        ignoreSpecRestore: !1,
      },
      m = u({
        dispatch: function () {},
        getMaxScrollDepth: function () {
          return null;
        },
        recordScrollDepth: r("emptyFunction"),
        resetMaxScrollDepth: r("emptyFunction"),
        state: d,
        statusResult: null,
        setStatusResult: r("emptyFunction"),
      });
    function p() {
      return c(m);
    }
    ((l.InitialAdsCreativeVideoGenModalContext = d),
      (l.AdsCreativeVideoGenModalContext = m),
      (l.useAdsCreativeVideoGenModalContext = p));
  },
  98,
);
