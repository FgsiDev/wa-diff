__d(
  "AdsCampaignBudgetMutationUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAccountUtils",
    "AdsBudgetUsabilityGKUtils",
    "AdsBuyingTypes",
    "AdsCampaignBudgetPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "BudgetClampingConfig",
    "ClickToMessagingAdsAdoptionLoggingFalcoEvent",
    "DayPartingUtils",
    "ads-budgetImpsConverter",
    "adsCampaignGetBudgetMode",
    "adsCampaignGetDefaultDailyBudget",
    "adsCampaignGetDefaultLifetimeBudget",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = Math.round(+(e != null ? e : 0));
      return !Number.isFinite(t) ||
        t > r("BudgetClampingConfig").BUDGET_CLAMPING_CONFIG
        ? r("BudgetClampingConfig").BUDGET_CLAMPING_CONFIG
        : t;
    }
    function s(e, t, n, a, i, l, s) {
      var c,
        d = 0,
        p = 0,
        _ = o(
          "AdsBudgetUsabilityGKUtils",
        ).isEligibleForH22025UsabilityBudgetConsistency();
      if (_) {
        var f, g;
        ((p = (f = a.daily_budget) != null ? f : 0),
          (d = (g = a.lifetime_budget) != null ? g : 0));
      }
      var h =
          (c = s == null ? void 0 : s.forPromotedObjectType) != null
            ? c
            : o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, a),
        y =
          l || r("adsCampaignGetBudgetMode")(a.daily_budget, a.lifetime_budget),
        C = e.currency,
        b = o("AdsAPICampaignRecordUtils").getDestinationType(a);
      (y === "daily"
        ? ((p = Math.max(m("daily", t, h, C, b), p)), (d = 0))
        : ((d = Math.max(m("lifetime", t, h, C, b), d)), (p = 0)),
        r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(function () {
          var n, r, o;
          return {
            event: "ctx_budget_consistency_eligibility_check",
            ad_account_id: e.account_id,
            extra_data: {
              source: "budgets_consistent_defaulting_exp",
              campaign_id: a.id != null ? String(a.id) : "null",
              objective: t,
              optimization_goal: (n = a.optimization_goal) != null ? n : "null",
              is_enabled: _ ? "true" : "false",
              prev_daily_budget: String((r = a.daily_budget) != null ? r : 0),
              prev_lifetime_budget: String(
                (o = a.lifetime_budget) != null ? o : 0,
              ),
              budget_mode: y === "daily" ? "daily" : "lifetime",
              budget_applied: String(p || d),
            },
          };
        }));
      var v = r("AdsAccountUtils").hasCapability(e, "DIRECT_SALES");
      return u(p, d, v, a, i, {
        isBudgetFlexOn: s == null ? void 0 : s.isBudgetFlexOn,
      });
    }
    function u(e, t, n, o, a, i) {
      return (
        (o = r("AdsCampaignRecordAccessors").lifetime_budget.set(
          Math.round(+t),
          o,
        )),
        (o = r("AdsCampaignRecordAccessors").daily_budget.set(
          Math.round(+e),
          o,
        )),
        !n && t && (o = c(t, o, a)),
        e && (i == null ? void 0 : i.isBudgetFlexOn) !== !0 && (o = p(o)),
        o
      );
    }
    function c(e, t, n) {
      var a = n.getValue();
      if (a) {
        var i = a.buying_type;
        if (i === r("AdsBuyingTypes").FIXED_PRICE) {
          var l = t.external_bid,
            s = o("ads-budgetImpsConverter").Converter.convertToImps(
              e,
              Number(l),
              1,
            );
          t = r("AdsCampaignRecordAccessors").lifetime_imps.set(s, t);
        }
      }
      return t;
    }
    function d(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsCampaignRecordAccessors")).bid_amount.delete,
        t.bid_strategy.delete,
        t.cost_bidding_mode.delete,
        t.is_autobid.delete,
        t.is_average_price_pacing.delete,
        t.pacing_type.delete,
      )(e);
    }
    function m(e, t, n, o, a, i, l, s) {
      o = o || "USD";
      var u = r("AdsCampaignBudgetPluginResolver").resolve({
        objective: t,
        promotedObjectType: n,
        destinationType: a,
      });
      return e === "daily"
        ? r("adsCampaignGetDefaultDailyBudget")(o, u, t, l, i, s)
        : r("adsCampaignGetDefaultLifetimeBudget")(o, u, null, null, t);
    }
    function p(e) {
      var t,
        n = (t = e.pacing_type) != null ? t : [];
      return (
        (n = Array.isArray(n)
          ? n.slice()
          : r("immutable").List.isList(n)
            ? n.toArray()
            : []),
        _(o("DayPartingUtils").setDayParting(n, !1), e)
      );
    }
    function _(e, t) {
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").pacing_type.set(r("immutable").List(e)),
        r("AdsCampaignRecordAccessors").adset_schedule.set(void 0),
      )(t);
    }
    ((l.safeRoundForGraphQL = e),
      (l.resetBudgetToDefault = s),
      (l.setBudget = u),
      (l.clearBiddingFieldsFromCampaign = d),
      (l.getDefaultBudgetByBudgetMode = m));
  },
  98,
);
