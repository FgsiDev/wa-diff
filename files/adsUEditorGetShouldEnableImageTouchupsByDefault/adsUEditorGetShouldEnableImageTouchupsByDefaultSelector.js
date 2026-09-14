__d(
  "adsUEditorGetShouldEnableImageTouchupsByDefaultSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsAutoflowStickyOptInLOSelector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCropAndExpandPlacementGroupStickyOptInL0Selector",
    "adsUEditorGetShouldEnableCropAndExpandSegmentDefaultOnGetValueSelector",
    "adsUEditorGetShouldEnableImageTouchupsByMLRecommendationSelector",
    "computeImageTouchupsByDefaultOptInStatus",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            r("adsAutoflowStickyOptInLOSelector"),
            o("AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors")
              .adsUEditorIsEligibleForAutoflowLiteDefaultOnSelector,
            r(
              "adsUEditorGetShouldEnableImageTouchupsByMLRecommendationSelector",
            ),
            r(
              "adsUEditorGetShouldEnableCropAndExpandSegmentDefaultOnGetValueSelector",
            ),
            o("adsUEditorCropAndExpandPlacementGroupStickyOptInL0Selector")
              .adsUEditorCropAndExpandPlacementGroupStickyOptInL0Selector,
          ],
          function (t, n, o, a, i) {
            return r("computeImageTouchupsByDefaultOptInStatus")(
              r("gkx")("12853"),
              t,
              n,
              o,
              a,
              i,
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
