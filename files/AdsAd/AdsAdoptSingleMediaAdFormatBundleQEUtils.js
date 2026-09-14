__d(
  "AdsAdoptSingleMediaAdFormatBundleQEUtils",
  [
    "AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent",
    "AdsRecommendationsExperimentUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      if (r("gkx")("1764")) return !0;
      if (n !== !0) return r("qex")._("5388");
      var i = r("qex")._("5389");
      return (
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: e,
              experiment:
                "preflight_adopt_single_media_ad_format_bundle_launch_test",
              event: "gen_qe_and_log_exposure",
              qe_group: o(
                "AdsRecommendationsExperimentUtils",
              ).getQEGroupFromCompositeUtilsResult(i),
              exposure_surface: a != null ? a : "null",
              recommendation_type: "adopt_single_media_ad_format_bundle",
              experiment_extra_data: { ad_object_ids: JSON.stringify(t) },
            };
          },
        ),
        i
      );
    }
    function s() {
      return r("justknobx")._("3377");
    }
    ((l.getIsInPreflightFormatsBundleTestGroup = e),
      (l.getIsPreflightFormatsBundleContainerEnabled = s));
  },
  98,
);
