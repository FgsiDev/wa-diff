__d(
  "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsAutoflowStickyOptInLOSelector",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorGetShouldEnableStandardEnhancementsByMLRecommendationSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { shouldOptIn: !1, optInSource: "DEFAULT" },
      s = { shouldOptIn: !0, optInSource: "DEFAULT" },
      u = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            r("adsAutoflowStickyOptInLOSelector"),
            o("AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors")
              .adsUEditorIsEligibleForAutoflowLiteDefaultOnSelector,
            r(
              "adsUEditorGetShouldEnableStandardEnhancementsByMLRecommendationSelector",
            ),
          ],
          function (t, n, r) {
            return o("adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc")
              .overrideWithSalesSegmentationDefaultOn(t, n)
              .mapValue(function (e) {
                return o(
                  "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
                ).overrideWithPersonalizedRecommendation(e, r);
              });
          },
          { name: i.id },
        ),
      );
    ((l.AUTOFLOW_OPT_OUT_DEFAULT_STATUS = e),
      (l.AUTOFLOW_OPT_IN_DEFAULT_STATUS = s),
      (l.adsUEditorGetShouldEnableAutoflowByDefaultSelector = u));
  },
  98,
);
