__d(
  "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendationSelector",
  [
    "adsCreateSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendationSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorCreativeFeaturesEligibilitySelector")],
        function (t) {
          return o(
            "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendationSelectorUtils",
          ).adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendation(
            t,
          );
        },
        {
          name:
            i.id +
            ".adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendationSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
