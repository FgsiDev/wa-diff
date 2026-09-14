__d(
  "adsUEditorGetShouldEnableVideoAutoCropByDefaultThunkSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsAutoflowStickyOptInLOSelector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetShouldEnableVideoAutoCropByMLRecommendationSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          r("adsAutoflowStickyOptInLOSelector"),
          o("AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors")
            .adsUEditorIsEligibleForAutoflowLiteDefaultOnSelector,
          r("adsUEditorGetShouldEnableVideoAutoCropByMLRecommendationSelector"),
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
    l.default = e;
  },
  98,
);
