__d(
  "AdsInsightsInsightsEdgePolicy",
  [
    "invariant",
    "AdsInsightsField",
    "AdsInsightsFilter",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      e.breakdowns.length &&
        e.apiFields.indexOf(r("AdsInsightsField").TODAY_SPEND) !== -1 &&
        (e.apiFields.indexOf(r("AdsInsightsField").IMPRESSIONS) === -1 &&
          (e.apiFields = [r("AdsInsightsField").IMPRESSIONS].concat(
            e.apiFields,
          )),
        e.apiFields.indexOf(r("AdsInsightsField").SPEND) === -1 &&
          (e.apiFields = [r("AdsInsightsField").SPEND].concat(e.apiFields)));
    }
    function u(e) {
      if (e.ids) return !1;
      var t = e.filter.some(function (e) {
          var t = o("AdsInsightsFilter").splitFieldWrapper(e.field),
            n = t[0],
            a = t[1];
          return n && a === "id" && r("AdsObjectUtils").toLevel(n) < 4;
        }),
        n = e.filter.length === 1 && e.filter[0].field === "account.id";
      return !(t || n);
    }
    function c(e) {
      return u(e) && e.objectType === r("AdsObjectTypes").ACCOUNT;
    }
    function d(e) {
      var t = e.apiFields.find(function (e) {
        return e === r("AdsInsightsField").RELEVANCE_SCORE;
      });
      if (r("isTruthy")(t)) {
        var n = o("AdsInsightsFilter").extractIDClause(e.filter),
          a = n.idClause;
        (a.field === "adgroup.id" && a.value.length === 1) || s(0, 1187);
      }
      e.objectType = r("isTruthy")(t)
        ? r("AdsObjectTypes").ADGROUP
        : r("AdsObjectTypes").ACCOUNT;
    }
    ((l.applyReachDetectionHack = e),
      (l.shouldUseAsync = u),
      (l.shouldUseAsyncAfterSyncFails = c),
      (l.restrictLevelOnRelevanceScore = d));
  },
  98,
);
