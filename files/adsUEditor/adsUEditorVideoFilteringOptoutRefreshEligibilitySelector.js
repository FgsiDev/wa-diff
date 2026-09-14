__d(
  "adsUEditorVideoFilteringOptoutRefreshEligibilitySelector",
  [
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorCreativeFeaturesEligibilitySelector")],
        function (t) {
          return (
            t
              .mapValue(function (e) {
                return o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                  e,
                  "VIDEO_FILTERING_ADOPTION_REFRESH",
                );
              })
              .getValue() === !0
          );
        },
        {
          name:
            i.id + ".adsUEditorVideoFilteringOptoutRefreshEligibilitySelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
