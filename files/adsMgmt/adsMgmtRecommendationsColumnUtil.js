__d(
  "adsMgmtRecommendationsColumnUtil",
  ["AdsMgmtColumn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.includes(r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE) &&
        e.includes(r("AdsMgmtColumn").POTENTIAL_OUTCOME) &&
        e.includes(r("AdsMgmtColumn").OPPORTUNITY_SCORE)
      );
    }
    function s(e) {
      return (
        e.includes(r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE) ||
        e.includes(r("AdsMgmtColumn").POTENTIAL_OUTCOME) ||
        e.includes(r("AdsMgmtColumn").OPPORTUNITY_SCORE)
      );
    }
    function u(e) {
      var t = e.findIndex(function (e) {
          return e.columnGroup === r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE;
        }),
        n = e.some(function (e) {
          return e.columnGroup === r("AdsMgmtColumn").POTENTIAL_OUTCOME;
        }),
        o = e.some(function (e) {
          return e.columnGroup === r("AdsMgmtColumn").OPPORTUNITY_SCORE;
        });
      if (t > -1 && (n || o)) {
        var a = e[t],
          i = babelHelpers.extends({}, a, {
            columns: [
              r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE,
              o ? r("AdsMgmtColumn").OPPORTUNITY_SCORE : null,
              n ? r("AdsMgmtColumn").POTENTIAL_OUTCOME : null,
            ].filter(Boolean),
          });
        return []
          .concat(e.slice(0, t), [i], e.slice(t + 1))
          .filter(function (e) {
            return (
              e.columnGroup !== r("AdsMgmtColumn").POTENTIAL_OUTCOME &&
              e.columnGroup !== r("AdsMgmtColumn").OPPORTUNITY_SCORE
            );
          });
      }
      return e;
    }
    ((l.containsAllOSQVColumns = e),
      (l.containsAnyOSQVColumns = s),
      (l.groupOSQVColumns = u));
  },
  98,
);
