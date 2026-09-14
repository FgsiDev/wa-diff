__d(
  "AdsRecommendationsExperimentUtils",
  [
    "AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ? "null" : e === !0 ? "test" : "control";
    }
    function s(t, n, o, a) {
      if (r("gkx")("21423")) return !0;
      if (t == null) return !1;
      var i = null;
      return (
        a
          ? ((i = !1),
            r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
              function () {
                return {
                  ad_account_id: t.account_id,
                  experiment: "aplusc_guidance_revamp_qe_restart",
                  event: "gen_qe_and_log_exposure",
                  qe_group: e(i),
                  exposure_surface: o,
                  recommendation_type: "advantage_plus_creative",
                  experiment_extra_data: {
                    ad_object_ids: JSON.stringify([]),
                    log_exposure: JSON.stringify(a),
                  },
                };
              },
            ))
          : (i = !1),
        i != null ? i : !1
      );
    }
    function u(t) {
      return t == null
        ? "null"
        : r("gkx")("10582")
          ? "test"
          : e(r("qex")._("1295"));
    }
    function c(e, t) {
      e == null || t === "null" || r("gkx")("10582") || r("qex")._("1429");
    }
    function d() {
      return !r("gkx")("12384");
    }
    function m(t, n, o, a, i) {
      if (!d() || t == null) return !1;
      var l = r("qex")._("5014");
      return (
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: t.account_id,
              experiment: "budget_reallocation_high_confidence",
              event: "gen_qe_and_log_exposure",
              qe_group: e(l),
              exposure_surface: n,
              recommendation_type: "budget_reallocation",
              recommendation_stage: "mid_flight_recommendation",
              experiment_extra_data: {
                src_object_id: o,
                src_object_level: a,
                extra_data: JSON.stringify(i),
              },
            };
          },
        ),
        l === !0
      );
    }
    function p(t, n, o, a, i) {
      if (!d() || r("justknobx")._("5421") || t == null) return !1;
      var l = r("qex")._("2345"),
        s = e(l);
      return (
        s === "control"
          ? (r("qex")._("5015"),
            r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
              function () {
                return {
                  ad_account_id: t.account_id,
                  experiment: "budget_reallocation_low_confidence",
                  event: "gen_qe_and_log_exposure",
                  qe_group: s,
                  exposure_surface: n,
                  recommendation_type: "budget_reallocation",
                  recommendation_stage: "mid_flight_recommendation",
                  experiment_extra_data: {
                    src_object_id: o,
                    src_object_level: a,
                    extra_data: JSON.stringify(i),
                  },
                };
              },
            ))
          : s === "test" &&
            r("gkx")("6417") &&
            (r("qex")._("5015"),
            r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
              function () {
                return {
                  ad_account_id: t.account_id,
                  experiment: "budget_reallocation_low_confidence",
                  event: "gen_qe_and_log_exposure",
                  qe_group: s,
                  exposure_surface: n,
                  recommendation_type: "budget_reallocation",
                  recommendation_stage: "mid_flight_recommendation",
                  experiment_extra_data: {
                    src_object_id: o,
                    src_object_level: a,
                    extra_data: JSON.stringify(i),
                  },
                };
              },
            )),
        l === !0
      );
    }
    function _(t) {
      if (t == null) return !1;
      var n = !0;
      return (
        r("AdsDeliveryIntelligenceGuidanceQeExposureFalcoEvent").log(
          function () {
            return {
              ad_account_id: t.account_id,
              experiment: "ads_da_aplusc_debundle_arts",
              event: "gen_qe_and_log_exposure",
              qe_group: e(n),
              exposure_surface: "da_apluc_info_labels",
              recommendation_type: "advantage_plus_creative_catalog",
              experiment_extra_data: { da_redesign_qe: String(!0) },
            };
          },
        ),
        n
      );
    }
    function f(e) {
      return r("gkx")("16575");
    }
    ((l.getQEGroupFromCompositeUtilsResult = e),
      (l.getCanSeeAdvantagePlusCreative = s),
      (l.getSgcDurationQeGroup = u),
      (l.logSgcDurationQeExposure = c),
      (l.getIsUnblockedVisibleBudgetReallocation = d),
      (l.getIsBudgetReallocationHighConfidenceQEVisible = m),
      (l.getIsBudgetReallocationLowConfidenceQEVisible = p),
      (l.getIsInDAAPlusCInfoLabelsTestGroup = _),
      (l.shouldShowCTXEarlyPausePreventionFriction = f));
  },
  98,
);
