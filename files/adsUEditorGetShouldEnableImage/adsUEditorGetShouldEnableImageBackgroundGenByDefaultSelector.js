__d(
  "adsUEditorGetShouldEnableImageBackgroundGenByDefaultSelector",
  [
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsUEditorAPlusCStickyOptInL0Selector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "small_business_group",
        "global_business_group_unmanaged",
        "global_business_group",
      ],
      s = r("adsCreateSelector")(
        [
          r("adsUEditorCreativeFeaturesEligibilitySelector"),
          o("adsUEditorAPlusCStickyOptInL0Selector")
            .adsUEditorAPlusCStickyOptInL0Selector,
        ],
        function (n, r) {
          var t = r("image_background_gen");
          if (t.getValue() === !1)
            return n.mapValue(function () {
              return !1;
            });
          var a = n.mapValue(function (t) {
            var n = o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                t,
                "IMAGE_BACKGROUND_GEN_DEFAULT_ON",
              ),
              r = e.includes(t.features_eligibility_map.segmentation_group);
            return n && r;
          });
          return a;
        },
        {
          name:
            i.id +
            ".adsUEditorGetShouldEnableImageBackgroundGenByDefaultSelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
