__d(
  "adsUEditorGetShouldEnableCVTransformationByMLRecommendationSelector",
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
                "cv_transformation",
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
