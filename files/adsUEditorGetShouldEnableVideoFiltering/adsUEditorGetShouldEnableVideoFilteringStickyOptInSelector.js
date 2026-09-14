__d(
  "adsUEditorGetShouldEnableVideoFilteringStickyOptInSelector",
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
            var e = t.mapValue(function (e) {
              return o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                e,
                "VIDEO_FILTERING_STICKY_OPT_IN",
              );
            });
            return e.getValue() === !0;
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
