__d(
  "adsUEditorAdgroupProminentHeadlineTextExtractionInitOptInStatusSelector",
  [
    "adsCreateSelector",
    "adsUEditorGetShouldEnableProminentHeadlineTextExtractionByDefaultSelector",
    "adsUEditorGetShouldEnableTextOptimizationsByMLRecommendationSelector",
    "adsUEditorInjectEditingAdgroupContext",
    "adsUEditorIsTextExtractionEligibleSelectors",
    "adsUEditorTextOptimizationsTextExtractionStickyOptInL0Selector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorTextOptimizationsTextExtractionStickyOptInL0Selector")
            .adsUEditorTextOptimizationsTextExtractionStickyOptInL0Selector,
          r(
            "adsUEditorGetShouldEnableProminentHeadlineTextExtractionByDefaultSelector",
          ),
          r("adsUEditorInjectEditingAdgroupContext")(
            o("adsUEditorIsTextExtractionEligibleSelectors")
              .adsUEditorIsTextExtractionEligibleSelector,
          ),
          r(
            "adsUEditorGetShouldEnableTextOptimizationsByMLRecommendationSelector",
          ),
        ],
        function (t, n, r, a) {
          if (!r) return null;
          var e = o("adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc")
              .overrideWithSalesSegmentationDefaultOn(t, function () {
                return n;
              })
              .mapValue(function (e) {
                return o(
                  "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
                ).overrideWithPersonalizedRecommendation(e, a);
              }),
            i = e.getValue();
          return i == null
            ? null
            : { shouldOptIn: i.shouldOptIn, optInSource: i.optInSource };
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupProminentHeadlineTextExtractionInitOptInStatusSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
