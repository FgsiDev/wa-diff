__d(
  "adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsAPlusCCarouselInlineCommentStickyOptInL0Selector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          r("adsAPlusCCarouselInlineCommentStickyOptInL0Selector"),
          o("AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors")
            .adsUEditorIsEligibleForAutoflowLiteDefaultOnSelector,
        ],
        o("adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc")
          .overrideWithSalesSegmentationDefaultOn,
        { name: i.id },
      ),
    );
    l.adsUEditorGetShouldEnableAPlusCCarouselInlineCommentByDefaultSelector = e;
  },
  98,
);
