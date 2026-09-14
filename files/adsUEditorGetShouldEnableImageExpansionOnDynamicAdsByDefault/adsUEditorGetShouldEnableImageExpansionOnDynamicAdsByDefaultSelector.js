__d(
  "adsUEditorGetShouldEnableImageExpansionOnDynamicAdsByDefaultSelector",
  [
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorGetShouldEnableImageExpansionByMLRecommendationSelector",
    "adsUEditorImageExpansionStickyOptInL0Selector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          o("adsUEditorImageExpansionStickyOptInL0Selector")
            .adsUEditorImageExpansionStickyOptInL0Selector,
          r("adsUEditorCreativeFeaturesEligibilitySelector"),
          r(
            "adsUEditorGetShouldEnableImageExpansionByMLRecommendationSelector",
          ),
        ],
        function (t, n, r) {
          var e = n.mapValue(function (e) {
            return (
              o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                e,
                "IMAGE_EXPANSION_DEFAULT_ON",
              ) &&
              e.features_eligibility_map.is_aco_sensitive_vertical !== !0 &&
              e.features_eligibility_map.segmentation_group ===
                "small_business_group"
            );
          });
          return o("adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc")
            .overrideWithSalesSegmentationDefaultOn(t, function () {
              return e;
            })
            .mapValue(function (e) {
              return o(
                "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
              ).overrideWithPersonalizedRecommendation(e, r);
            });
        },
        { name: i.id },
      ),
    );
    l.default = e;
  },
  98,
);
