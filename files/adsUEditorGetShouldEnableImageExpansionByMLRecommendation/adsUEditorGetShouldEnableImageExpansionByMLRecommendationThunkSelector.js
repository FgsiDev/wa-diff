__d(
  "adsUEditorGetShouldEnableImageExpansionByMLRecommendationThunkSelector",
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
              "image_uncrop",
            );
          });
        },
        { name: i.id },
      ),
    );
    l.default = e;
  },
  98,
);
