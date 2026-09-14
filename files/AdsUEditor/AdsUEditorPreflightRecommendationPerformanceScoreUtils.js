__d(
  "AdsUEditorPreflightRecommendationPerformanceScoreUtils",
  ["isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = Array.from(t.metric_to_performance_score_data.values()),
          n = Array.from(t.metric_to_performance_score_data.keys()),
          r = t.metric_to_performance_score_data.size;
        return {
          performanceScoreData: r > 0 ? e[0] : null,
          performanceScoreOSVersion: r > 0 ? n[0] : null,
        };
      },
      s = function (t, n) {
        if (r("isFalsey")(n)) return null;
        var e = n.rec_type_to_performance_score_map,
          o = 0;
        return (
          e.forEach(function (e, n) {
            t.includes(n) && (o += e);
          }),
          o
        );
      };
    function u(e) {
      var t = new Set(),
        n = e.rec_type_to_performance_score_map,
        r = e.totalScore;
      r === 0 && t.add(c.OS_SCORE_IS_ZERO);
      var o = 100 - r,
        a = Array.from(n.values()).reduce(function (e, n) {
          return (n === 0 && t.add(c.GUIDANCE_SCORE_IS_ZERO), e + n);
        }, 0);
      return (
        a > o
          ? t.add(c.GUIDANCE_SCORES_ADD_TO_MORE_THAN_HUNDRED)
          : a < o && t.add(c.GUIDANCE_SCORES_ADD_TO_LESS_THAN_HUNDRED),
        a === o && t.size === 0 && t.add(c.OS_SCORE_AS_EXPECTED),
        Array.from(t)
      );
    }
    var c = {
      OS_SCORE_AS_EXPECTED: "os_score_as_expected",
      OS_SCORE_IS_ZERO: "os_score_is_zero",
      GUIDANCE_SCORE_IS_ZERO: "guidance_score_is_zero",
      GUIDANCE_SCORES_ADD_TO_MORE_THAN_HUNDRED:
        "guidance_scores_add_to_more_than_hundred",
      GUIDANCE_SCORES_ADD_TO_LESS_THAN_HUNDRED:
        "guidance_scores_add_to_less_than_hundred",
    };
    ((l.getPerformanceScoreData = e),
      (l.getPerformanceScoreForRecType = s),
      (l.processPerformanceScoreDataForLogging = u),
      (l.PFR_OS_SCORE_LOGGING_TAGS = c));
  },
  98,
);
