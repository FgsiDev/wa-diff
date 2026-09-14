__d(
  "adsUEditorGetShouldEnableProminentHeadlineTextExtractionByDefaultSelector",
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
          var e = t.mapValue(function (e) {
            return (
              o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                e,
                "PROMINENT_HEADLINE_TEXT_EXTRACTION_DEFAULT_ON",
              ) && e.features_eligibility_map.is_aco_sensitive_vertical !== !0
            );
          });
          return e;
        },
        {
          name:
            i.id +
            ".adsUEditorGetShouldEnableProminentHeadlineTextExtractionByDefaultSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
