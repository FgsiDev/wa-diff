__d(
  "AdsCampaignCreation",
  [
    "AdsAPIObjectives",
    "AdsBiddingOptimizationUtils",
    "AdsBuyingTypes",
    "AdsCampaignBudgetPluginResolver",
    "AdsCampaignGroupUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsFrequencyControlEditorUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsOptimizationUtils",
    "AdsPromotedObjectUtilsShared",
    "Currency",
    "DateConsts",
    "DateTime",
    "ImmutableObject",
    "adsBillingEventGetDefaultDEPRECATED",
    "adsCampaignGetDefaultDailyBudget",
    "adsCampaignGetDefaultDestinationType",
    "adsCampaignGetDefaultLifetimeBudget",
    "adsDeliveryUpdateClickThroughAttributionWindow",
    "adsTargetingGetDefaultTargetingAndPlacement",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("ImmutableObject"))(((e = {}), (e.status = "ACTIVE"), e)),
      u = "daily";
    function c(e, t) {
      var n;
      return ((n = { account_id: e.account_id }), (n.campaign_id = t), n);
    }
    function d(e, t, n) {
      var a;
      n && o("AdsLoadStateUtils_LEGACY").enforceLoaded(n);
      var i = r("adsTargetingGetDefaultTargetingAndPlacement")(e, t),
        l = e.objective,
        c = o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(l),
        d = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: l,
          promotedObjectType: c,
          destinationType: r("adsCampaignGetDefaultDestinationType")(l),
        }),
        _ = d.getDefaultOptimizationGoal({
          account: t,
          hasBackingApplication: !1,
        }),
        f = r("adsCampaignGetDefaultDestinationType")(l),
        C = babelHelpers.extends(
          {},
          s,
          ((a = { account_id: t.account_id }),
          (a.campaign_id = e.id),
          (a.pacing_type = ["standard"]),
          (a.attribution_spec = r(
            "adsDeliveryUpdateClickThroughAttributionWindow",
          )([], d.getDefaultConversionWindowLength(_, t))),
          (a.destination_type = f),
          (a.targeting = i),
          a),
          m(e, t),
          p(e, t, u, n),
          g(e, n),
          h(e),
          y(e, t, u, n),
        );
      return (
        (e.daily_budget || e.lifetime_budget) &&
          (delete C.daily_budget,
          delete C.lifetime_budget,
          delete C.pacing_type,
          delete C.is_autobid),
        C
      );
    }
    function m(e, t) {
      var n = e.buying_type,
        a = e.objective;
      if (!o("AdsOptimizationUtils").supportsOptimizationFields(n)) return null;
      var i = o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(a),
        l = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: a,
          promotedObjectType: i,
          destinationType: r("adsCampaignGetDefaultDestinationType")(a),
        }),
        s = l.getDefaultOptimizationGoal({
          account: t,
          hasBackingApplication: !1,
        }),
        u = a && s && r("adsBillingEventGetDefaultDEPRECATED")(n, a, s, i, t),
        c = o("AdsBiddingOptimizationUtils").canUseAutoBid(a, s, u),
        d =
          s &&
          o(
            "AdsFrequencyControlEditorUtils",
          ).computeDefaultFrequencyControlSpecs(a, s, i, t),
        m = {
          optimization_goal: s,
          billing_event: u,
          is_autobid: c,
          bid_amount: c
            ? null
            : o("AdsBiddingOptimizationUtils").getDefaultBidAmount(a, s, u),
        };
      return d
        ? babelHelpers.extends({}, m, { frequency_control_specs: d })
        : m;
    }
    function p(e, t, n, r) {
      return r ? _(e, t, r) : f(e, t, n);
    }
    function _(e, t, n) {
      if (n.is_bonus_line) return { daily_budget: 0, lifetime_budget: 0 };
      var r = o("Currency").getOffset(t.currency);
      return {
        daily_budget: 0,
        lifetime_budget: Math.round(Number(n.func_line_amount) * r),
      };
    }
    function f(e, t, n) {
      var a = e.buying_type,
        i = e.objective,
        l = r("AdsCampaignBudgetPluginResolver").resolve({
          objective: i,
          promotedObjectType: o(
            "AdsPromotedObjectUtilsShared",
          ).getDefaultPromotedObjectType(i),
        });
      return a === r("AdsBuyingTypes").FIXED_PRICE || n == "lifetime"
        ? {
            daily_budget: 0,
            lifetime_budget: r("adsCampaignGetDefaultLifetimeBudget")(
              t.currency,
              l,
            ),
          }
        : {
            daily_budget: r("adsCampaignGetDefaultDailyBudget")(t.currency, l),
            lifetime_budget: 0,
          };
    }
    function g(e, t) {
      if (!t)
        return {
          lifetime_reach: null,
          lifetime_imps: null,
          line_number: null,
          topline_id: null,
        };
      var n = e.buying_type;
      return {
        lifetime_imps:
          n === r("AdsBuyingTypes").FIXED_PRICE ? t.impressions : null,
        line_number: t.line_number,
        topline_id: t.id,
      };
    }
    function h(e) {
      var t = null,
        n = e.objective,
        o = n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES;
      return (
        o && (t = { custom_event_type: "PURCHASE" }),
        { promoted_object: t }
      );
    }
    function y(e, t, n, a) {
      if (a) return C(e, t, a);
      var i = r("DateTime").now(t.timezone_id),
        l = o("AdsCampaignGroupUtils").adsCampaignGroupGetDefaultEndDateTime(i);
      return n == "daily"
        ? { end_time: null, start_time: i.toISOString() }
        : { end_time: l.toISOString(), start_time: i.toISOString() };
    }
    function C(e, t, n) {
      var a = t.timezone_id,
        i = r("DateTime").fromLegacyArgs(
          n.flight_start_date * o("DateConsts").MS_PER_SEC,
          a,
        ),
        l = i.startOfDay(),
        s = r("DateTime").now(a),
        u = l.getUnixTimestampSeconds() > s.getUnixTimestampSeconds() ? l : s,
        c = r("DateTime")
          .fromLegacyArgs(n.flight_end_date * o("DateConsts").MS_PER_SEC, a)
          .setHours(23)
          .setMinutes(59);
      return { end_time: c.toISOString(), start_time: u.toISOString() };
    }
    ((l.DEFAULT_VALUES = s),
      (l.getDefaultsForCreateFlow = c),
      (l.getDefaults = d),
      (l.getDefaultPricing = m),
      (l.getDefaultBudget = p),
      (l.getDefaultToplineBudget = _),
      (l.getDefaultNonToplineBudget = f),
      (l.getDefaultsForTopline = g),
      (l.getDefaultPromotedObject = h),
      (l.getDefaultTimes = y),
      (l.getTimesForTopline = C));
  },
  98,
);
