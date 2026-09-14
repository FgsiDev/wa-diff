__d(
  "adsUEditorGetShouldEnableDAAddOverlaysByDefaultSelector",
  [
    "AdsCreativeFeaturesUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [r("adsUEditorCreativeFeaturesEligibilitySelector")],
          function (t) {
            var e = t.mapValue(function (e) {
              return (
                o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                  e,
                  "DA_ADD_OVERLAYS_DEFAULT_ON",
                ) && e.features_eligibility_map.is_aco_sensitive_vertical !== !0
              );
            });
            return o(
              "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
            ).overrideWithSalesSegmentationDefaultOn(
              r("LoadObject").withValue(!1, { creatorModuleID: i.id }),
              function () {
                return e;
              },
            );
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
