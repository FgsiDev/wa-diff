__d(
  "adsUEditorGetShouldEnableStandardEnhancementsByMLRecommendationSelector",
  [
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [r("adsUEditorCreativeFeaturesEligibilitySelector")],
          function (t) {
            return t.mapValue(function (e) {
              return o("AdsCreativeFeaturesUtils").isAPlusCFeatureRecommendedOn(
                e,
                "standard_enhancements",
              );
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
