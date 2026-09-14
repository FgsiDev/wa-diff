__d(
  "adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsAPlusCUseExistingPostStickyOptInL0Selector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetShouldEnableStandardEnhancementsByMLRecommendationSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          r("adsAPlusCUseExistingPostStickyOptInL0Selector"),
          o("AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors")
            .adsUEditorIsEligibleForAutoflowLiteDefaultOnSelector,
          r(
            "adsUEditorGetShouldEnableStandardEnhancementsByMLRecommendationSelector",
          ),
        ],
        function (t, n, r) {
          return o("adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc")
            .overrideWithSalesSegmentationDefaultOn(t, n)
            .mapValue(function (e) {
              return o(
                "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
              ).overrideWithPersonalizedRecommendation(e, r);
            });
        },
        { name: i.id },
      ),
    );
    l.adsUEditorGetShouldEnableAPlusCUseExistingPostByDefaultSelector = e;
  },
  98,
);
