__d(
  "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
  [
    "AdsCreativeFeaturesUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorCreativeFeaturesEligibilitySelector")],
        function (t) {
          var e,
            n =
              (e = t.getValue()) == null
                ? void 0
                : e.features_eligibility_map.segmentation_group;
          return n === "global_business_group_unmanaged";
        },
        { name: i.id + ".adsUEditorIsGBGUnmanagedSelector" },
      ),
      s = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [r("adsUEditorCreativeFeaturesEligibilitySelector"), e],
          function (t, n) {
            var e = t.mapValue(function (e) {
              return o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                e,
                "AUTOFLOW_LITE_DEFAULT_ON",
              );
            });
            return n === !0
              ? r("LoadObject").withValue(!0, { creatorModuleID: i.id })
              : e;
          },
          { name: i.id },
        ),
      );
    ((l.adsUEditorIsGBGUnmanagedSelector = e),
      (l.adsUEditorIsEligibleForAutoflowLiteDefaultOnSelector = s));
  },
  98,
);
