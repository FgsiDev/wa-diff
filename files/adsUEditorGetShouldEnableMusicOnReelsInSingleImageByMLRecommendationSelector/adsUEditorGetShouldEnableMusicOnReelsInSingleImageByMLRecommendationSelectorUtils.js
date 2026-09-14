__d(
  "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendationSelectorUtils",
  ["AdsCreativeFeaturesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function () {
        return e.mapValue(function (e) {
          return o("AdsCreativeFeaturesUtils").isAPlusCFeatureRecommendedOn(
            e,
            "audio",
          );
        });
      };
    }
    l.adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendation = e;
  },
  98,
);
