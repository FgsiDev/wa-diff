__d(
  "adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsAPlusCCarouselCDAStickyOptInL0Selector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetShouldEnableCarouselCDAByMLRecommendationSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          r("adsAPlusCCarouselCDAStickyOptInL0Selector"),
          o("AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors")
            .adsUEditorIsEligibleForAutoflowLiteDefaultOnSelector,
          r("adsUEditorGetShouldEnableCarouselCDAByMLRecommendationSelector"),
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
    l.adsUEditorGetShouldEnableAPlusCCarouselCDAByDefaultSelector = e;
  },
  98,
);
