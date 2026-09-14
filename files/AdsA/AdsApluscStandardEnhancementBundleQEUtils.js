__d(
  "AdsApluscStandardEnhancementBundleQEUtils",
  [
    "AdsApluscStandardEnhancementsConstants",
    "AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ? "null" : e === !0 ? "test" : "control";
    }
    function s(e) {
      return e.find(function (e) {
        if (
          e.recommendation_type === "aplusc_standard_enhancements_bundle" &&
          e.recommendation_stage === "MFR"
        ) {
          var t = o(
            "AdsApluscStandardEnhancementsConstants",
          ).getRecommendationTypes(e);
          if (t.length === 1 && t.includes("aplusc_flexible_media")) return !0;
        }
        return !1;
      });
    }
    function u(t, n, o, a) {
      if (o === !0) {
        var i = r("qex")._("2747"),
          l = r("gkx")("20703");
        return l || i;
      }
      var s = r("qex")._("2988");
      s != null &&
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: t,
              experiment: "aplusc_flexible_media_composite",
              event: "gen_qe_and_log_exposure",
              qe_group: e(s),
              exposure_surface: "null",
              recommendation_type: "aplusc_flexible_media",
              experiment_extra_data: {
                ad_object_ids: JSON.stringify(n),
                entry_point: a,
              },
            };
          },
        );
      var u = r("gkx")("20755");
      return u || s;
    }
    function c(e) {
      return e ? "old_new" : "new_only";
    }
    function d(t, n, o, a) {
      var i = null;
      if (
        (a === "old_new"
          ? (i = "aplusc_standard_enhancements_bundle_pfr_old_new")
          : a === "new_only"
            ? (i = "aplusc_standard_enhancements_bundle_pfr_new_only")
            : (i = "aplusc_standard_enhancements_bundle_pfr"),
        o === !0)
      ) {
        var l = r("qex")._("4578");
        return (
          r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
            function () {
              return {
                ad_account_id: t,
                experiment: i,
                event: "gen_qe_without_logging_exposure",
                qe_group: e(l),
                exposure_surface: "null",
                recommendation_type: "aplusc_standard_enhancements_bundle",
                experiment_extra_data: { ad_object_ids: JSON.stringify(n) },
              };
            },
          ),
          l
        );
      }
      var s = r("qex")._("4579");
      return (
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: t,
              experiment: i,
              event: "gen_qe_and_log_exposure",
              qe_group: e(s),
              exposure_surface: "null",
              recommendation_type: "aplusc_standard_enhancements_bundle",
              experiment_extra_data: { ad_object_ids: JSON.stringify(n) },
            };
          },
        ),
        s
      );
    }
    function m() {
      return r("gkx")("110");
    }
    ((l.getFMOnlyMFRRecommendation = s),
      (l.getIsInApluscFlexibleMediaCompositeQETestGroup = u),
      (l.getApluscBundlePocketDeltoidVariant = c),
      (l.getIsInPreflightApluscBundleTestGroup = d),
      (l.getIsPreflightApluscBundleContainerEnabled = m));
  },
  98,
);
