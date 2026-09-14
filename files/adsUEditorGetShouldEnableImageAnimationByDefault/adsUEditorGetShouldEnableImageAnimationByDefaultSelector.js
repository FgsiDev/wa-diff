__d(
  "adsUEditorGetShouldEnableImageAnimationByDefaultSelector",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAplusCAnimationUtils",
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorGetShouldEnableCVTransformationByMLRecommendationSelector",
    "adsUEditorGetShouldEnableImageTouchupsByDefaultSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            r("adsUEditorCreativeFeaturesEligibilitySelector"),
            r(
              "adsUEditorGetShouldEnableCVTransformationByMLRecommendationSelector",
            ),
            r("adsUEditorGetShouldEnableImageTouchupsByDefaultSelector"),
          ],
          function (t, n, r) {
            var e = t.mapValue(function (e) {
              var t = o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                e,
                "IMAGE_ANIMATION_DEFAULT_ON",
              );
              if (
                o("AdsAplusCAnimationUtils").passAnimationUnificationGK(
                  "silent",
                ) &&
                !t
              ) {
                var a,
                  i,
                  l = o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                    e,
                    "CV_TRANSFORMATION_DEFAULT_ON",
                  ),
                  s = o(
                    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
                  ).overrideWithPersonalizedRecommendation(
                    { shouldOptIn: l, optInSource: "DEFAULT" },
                    n,
                  );
                if (
                  ((t =
                    (a = (i = s.getValue()) == null ? void 0 : i.shouldOptIn) !=
                    null
                      ? a
                      : !1),
                  !t)
                ) {
                  var u, c;
                  t =
                    (u =
                      (c = r().getValue()) == null ? void 0 : c.shouldOptIn) !=
                    null
                      ? u
                      : !1;
                }
              }
              return t;
            });
            return e.mapValue(function (e) {
              var t = o(
                  "AdsAPlusCStickyOptOutUtils",
                ).isAPlusCFeatureStickyOptedOut("image_animation"),
                n = e && !t;
              return { shouldOptIn: n, optInSource: t ? "STICKY" : "DEFAULT" };
            });
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
