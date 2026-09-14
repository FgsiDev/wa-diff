__d(
  "AdsValueAdjustmentRuleCriteriaTypeUtils",
  ["AdsValueAdjustmentRuleConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r;
      return (n =
        e == null || (r = e.personas) == null
          ? void 0
          : r.some(function (e) {
              var n;
              return (n = e.criterias) == null
                ? void 0
                : n.some(function (e) {
                    return e.criteriaType === t;
                  });
            })) != null
        ? n
        : !1;
    }
    function s(e) {
      var t,
        n = new Set();
      return (
        e == null ||
          (t = e.personas) == null ||
          t.forEach(function (e) {
            var t;
            return (t = e.criterias) == null
              ? void 0
              : t.forEach(function (e) {
                  e.criteriaType != null && n.add(e.criteriaType);
                });
          }),
        Array.from(n).join(",")
      );
    }
    function u(e) {
      return e === "increase" ? "_inc" : "_dec";
    }
    function c(e) {
      var t, n;
      return (t =
        e == null || (n = e.personas) == null
          ? void 0
          : n
              .map(function (e) {
                var t = e.bidPreset;
                return t == null
                  ? ""
                  : t === "none"
                    ? t
                    : "" + t + u(e.adjustmentSign);
              })
              .join(",")) != null
        ? t
        : "";
    }
    function d(e, t) {
      return e.criterias.some(function (e) {
        return e.criteriaType === t;
      });
    }
    function m(e) {
      return d(e, "omni_channel");
    }
    function p(e) {
      return d(e, "placement");
    }
    function _(e) {
      return o("AdsValueAdjustmentRuleConstants").AUDIENCE_CRITERIA_TYPES.some(
        function (t) {
          return d(e, t);
        },
      );
    }
    function f(e, t, n) {
      return e.criterias.some(function (e, r) {
        return r !== t && e.criteriaType === n;
      });
    }
    ((l.ruleCollectionHasCriteriaType = e),
      (l.collectionCriteriaTypes = s),
      (l.collectionBidPresets = c),
      (l.personaHasChannel = m),
      (l.personaHasPlacement = p),
      (l.personaHasAudience = _),
      (l.personaHasCriteriaTypeAtDifferentIndex = f));
  },
  98,
);
