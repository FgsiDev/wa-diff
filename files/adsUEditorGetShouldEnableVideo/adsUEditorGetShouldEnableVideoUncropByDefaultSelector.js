__d(
  "adsUEditorGetShouldEnableVideoUncropByDefaultSelector",
  [
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAplusCVidoeUncropStickyOptInL0Selector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            r("adsUEditorCreativeFeaturesEligibilitySelector"),
            o("adsUEditorAplusCVidoeUncropStickyOptInL0Selector")
              .adsUEditorAplusCVideoUncropStickyOptInL0Selector,
          ],
          function (t, n) {
            var e = t.mapValue(function (e) {
                return (
                  o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                    e,
                    "VIDEO_UNCROP_DEFAULT_ON",
                  ) &&
                  e.features_eligibility_map.is_aco_sensitive_vertical !== !0 &&
                  e.features_eligibility_map.is_luxury_vertical !== !0
                );
              }),
              a = e.getValue() === !0;
            if (!r("justknobx")._("3294"))
              return { shouldOptIn: a, optInSource: "DEFAULT" };
            var i = o(
                "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
              ).mergeStickyOptInWithDefaultOn(n, a),
              l = i.getValue();
            return l == null
              ? o("adsUEditorGetShouldEnableAutoflowByDefaultSelector")
                  .AUTOFLOW_OPT_OUT_DEFAULT_STATUS
              : l;
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
