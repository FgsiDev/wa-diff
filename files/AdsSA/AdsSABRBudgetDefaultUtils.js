__d(
  "AdsSABRBudgetDefaultUtils",
  [
    "$InternalEnum",
    "AdsAPIObjectiveIntEnumUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsUEditorMessagingDestinationUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === "Mid" || e === "Low" || e === "Tail";
    }
    function u(e, t, n) {
      var r = o("AdsAPIObjectiveIntEnumUtils").convertAPIObjectiveToInt(t),
        a = null;
      if (e != null)
        if (n) {
          var i;
          a =
            e == null ||
            (i = e.sabr_budget_l3) == null ||
            (i = i.find(function (e) {
              return e.objective === r;
            })) == null
              ? void 0
              : i.budget;
        } else {
          var l;
          a =
            e == null ||
            (l = e.sabr_budget_l2) == null ||
            (l = l.find(function (e) {
              return e.objective === r;
            })) == null
              ? void 0
              : l.budget;
        }
      return a;
    }
    var c = n("$InternalEnum")({
      SABR: "sabr",
      SABR_VERTICAL_FALLBACK: "sabr_vertical_fallback",
      STICKY_SETTING_FALLBACK: "sticky_setting_fallback",
    });
    function d(e) {
      return e === "sabr_vertical_fallback"
        ? c.SABR_VERTICAL_FALLBACK
        : e === "sticky_setting_fallback"
          ? c.STICKY_SETTING_FALLBACK
          : c.SABR;
    }
    function m(e, t, n, r) {
      if (r != null && !s(r))
        return { budget: null, recommendationType: c.SABR };
      var a = o("AdsAPIObjectiveIntEnumUtils").convertAPIObjectiveToInt(t),
        i = null,
        l = c.SABR;
      if (e != null)
        if (n) {
          var u, m;
          i =
            (u = e.sabr_budget_l3) == null ||
            (u = u.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : u.budget;
          var p =
            (m = e.recommendation_type_l3) == null ||
            (m = m.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : m.recommendation_type;
          l = d(p);
        } else {
          var _, f;
          i =
            (_ = e.sabr_budget_l2) == null ||
            (_ = _.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : _.budget;
          var g =
            (f = e.recommendation_type_l2) == null ||
            (f = f.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : f.recommendation_type;
          l = d(g);
        }
      return { budget: i, recommendationType: l };
    }
    function p(e, t, n) {
      var o;
      if (t == null) return e;
      var a =
        (o = n ? r("qex")._("2238") : r("qex")._("2335")) != null ? o : !1;
      return a ? t : e;
    }
    function _(e, t) {
      if (
        t == null ||
        (t !== r("AdsAPIObjectives").LINK_CLICKS &&
          t !== r("AdsAPIObjectives").OUTCOME_SALES)
      )
        return !1;
      if (t === r("AdsAPIObjectives").OUTCOME_SALES) {
        var n = r("justknobx")._("4171");
        if (n) return !1;
      }
      if (t === r("AdsAPIObjectives").LINK_CLICKS) {
        var o = r("justknobx")._("373");
        if (o) return !1;
      }
      return e ? r("gkx")("11307") : r("gkx")("11313");
    }
    var f = new Set([
      (e = r("AdsAPIObjectives")).OUTCOME_SALES,
      e.LINK_CLICKS,
      e.OUTCOME_LEADS,
      e.OUTCOME_AWARENESS,
      e.APP_INSTALLS,
    ]);
    function g(e) {
      return e == null ? !1 : f.has(e);
    }
    var h = new Set([
      r("AdsAPIOptimizationGoals").CONVERSATIONS,
      r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
      r("AdsAPIOptimizationGoals").REPLIES,
    ]);
    function y(e, t) {
      return e == null
        ? !1
        : !!(
            h.has(e) ||
            (t != null &&
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).isClickToMessageAdDestination(t))
          );
    }
    function C(e, t, n, r) {
      return !((t != null && !g(t)) || y(n, r));
    }
    function b(e, t, n, r) {
      return !((t != null && !g(t)) || y(n, r));
    }
    ((l.getDefaultSabrBudget = u),
      (l.SabrRecommendationType = c),
      (l.getDefaultSabrBudgetV2 = m),
      (l.selectSabrBudgetTier = p),
      (l.isSABRBudgetDefaultingEnabled = _),
      (l.isObjectiveEligibleForSABRV2 = g),
      (l.isOptimizationGoalExcludedFromSABRV2 = y),
      (l.isSABRBudgetDefaultingV2Enabled = C),
      (l.isSABRGuidanceAndDefaultingCombinedEnabled = b));
  },
  98,
);
