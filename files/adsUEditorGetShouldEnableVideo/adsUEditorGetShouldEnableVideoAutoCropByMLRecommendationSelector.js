__d(
  "adsUEditorGetShouldEnableVideoAutoCropByMLRecommendationSelector",
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
                "video_auto_crop",
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
