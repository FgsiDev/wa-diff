__d(
  "adsUEditorGetShouldEnableTextOptimizationsByDefaultSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsAutoflowStickyOptInLOSelector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAdgroupProminentHeadlineTextExtractionInitOptInStatusSelector",
    "adsUEditorGetShouldEnableTextOptimizationsByMLRecommendationSelector",
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
            r(
              "adsUEditorGetShouldEnableTextOptimizationsByMLRecommendationSelector",
            ),
            r(
              "adsUEditorAdgroupProminentHeadlineTextExtractionInitOptInStatusSelector",
            ),
          ],
          function (t, n, r, a) {
            return o("adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc")
              .overrideWithSalesSegmentationDefaultOn(t, n)
              .mapValue(function (e) {
                return o(
                  "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
                ).overrideWithPersonalizedRecommendation(e, r);
              })
              .mapValue(function (e) {
                return o(
                  "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
                ).mergeWithTextExtractionDefaultOn(e, a);
              });
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
