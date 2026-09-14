__d(
  "AdsRuleUtils",
  ["fbt", "memoizeWithArgsByKey"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return e === "ADGROUP"
        ? { level: "ADGROUP", adgroups: t }
        : e === "CAMPAIGN"
          ? { level: "CAMPAIGN", campaigns: t }
          : e === "CAMPAIGN_GROUP"
            ? { level: "CAMPAIGN_GROUP", campaign_groups: t }
            : { level: "NONE" };
    }
    var u = r("memoizeWithArgsByKey")(e),
      c = s._(/*BTDS*/ "Create rule");
    function d(e, t) {
      return u(t, e, t);
    }
    function m(e) {
      return _(e).length === 0;
    }
    function p(e) {
      return _(e).length;
    }
    function _(e) {
      return e.level === "ADGROUP"
        ? e.adgroups
        : e.level === "CAMPAIGN"
          ? e.campaigns
          : e.level === "CAMPAIGN_GROUP"
            ? e.campaign_groups
            : [];
    }
    function f(e) {
      var t = e.level;
      return t === "NONE" ? null : t;
    }
    function g(e) {
      return e.action_type === "INCREASE_DAILY_BUDGET" ||
        e.action_type === "DECREASE_DAILY_BUDGET" ||
        e.action_type === "SCALE_DAILY_BUDGET" ||
        e.action_type === "INCREASE_LIFETIME_BUDGET" ||
        e.action_type === "DECREASE_LIFETIME_BUDGET" ||
        e.action_type === "SCALE_LIFETIME_BUDGET" ||
        e.action_type === "INCREASE_BID" ||
        e.action_type === "DECREASE_BID" ||
        e.action_type === "SCALE_BID"
        ? e
        : null;
    }
    function h(e) {
      return e.action_type === "INCREASE_DAILY_BUDGET" ||
        e.action_type === "DECREASE_DAILY_BUDGET" ||
        e.action_type === "SCALE_DAILY_BUDGET" ||
        e.action_type === "INCREASE_LIFETIME_BUDGET" ||
        e.action_type === "DECREASE_LIFETIME_BUDGET" ||
        e.action_type === "SCALE_LIFETIME_BUDGET"
        ? e
        : null;
    }
    ((l.CREATE_RULE_TEXT = c),
      (l.getSelectionFromTypeAndIDs = d),
      (l.isEmptySelection = m),
      (l.getObjectCountFromSelection = p),
      (l.getIDsFromSelection = _),
      (l.getObjectTypeFromSelection = f),
      (l.getChangeMoneyActionOrNull = g),
      (l.getChangeBudgetActionOrNull = h));
  },
  226,
);
