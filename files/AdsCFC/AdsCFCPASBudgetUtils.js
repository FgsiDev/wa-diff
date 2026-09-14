__d(
  "AdsCFCPASBudgetUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignRecordAccessors",
    "AdsUEditorCampaignLiveVideoSectionUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (t == null || n != null) return !1;
      var r = e == null ? void 0 : e.cpas_campaign_group_default_budget;
      return !(r == null || r <= 0);
    }
    function s(e) {
      var t,
        n =
          (t = e == null ? void 0 : e.cpas_campaign_group_default_budget) !=
          null
            ? t
            : 0;
      if (n <= 0) return 0;
      var r = u(n, e == null ? void 0 : e.currency),
        o = d(e, !0);
      return p(m(r, o), e == null ? void 0 : e.min_daily_budget);
    }
    function u(e, t) {
      return t == null || t === "" || t === "USD"
        ? e
        : r("adsCampaignConvertUSDBudgetToCurrency")(t, e);
    }
    var c = 6;
    function d(e, t) {
      var n = t
        ? e == null
          ? void 0
          : e.average_daily_campaign_group_budget
        : e == null
          ? void 0
          : e.average_daily_campaign_budget;
      if (n == null) return null;
      var r = parseInt(n, 10);
      return r > 0 ? r : null;
    }
    function m(e, t) {
      return t != null && t > 0 ? Math.min(e, t * c) : e;
    }
    function p(e, t) {
      var n = t != null && t > 0 ? t : 100;
      return Math.ceil(e / n) * n;
    }
    function _(e, t, n) {
      if (
        o(
          "AdsUEditorCampaignLiveVideoSectionUtils",
        ).shouldApplyLVAOptimizedSettingsForCampaign(e, t, n)
      )
        return t;
      var a = n != null && o("AdsAPICampaignGroupRecordUtils").hasBudget(n);
      if (a || (n == null ? void 0 : n.collaborative_ads_partner_info) == null)
        return t;
      var i = e == null ? void 0 : e.cpas_campaign_default_budget;
      if (i == null || i <= 0) return t;
      var l = u(i, e == null ? void 0 : e.currency),
        s = d(e, !1),
        c = p(m(l, s), e == null ? void 0 : e.min_daily_budget),
        _ = t.daily_budget;
      return _ != null && _ > c
        ? t
        : r("AdsCampaignRecordAccessors").daily_budget.set(c, t);
    }
    ((l.getShouldDefaultCPASBudgetInL3 = e),
      (l.getCPASDefaultBudgetForL3 = s),
      (l.convertCPASBudgetToLocalCurrency = u),
      (l.getAverageAccountBudget = d),
      (l.capCPASDefaultBudget = m),
      (l.roundBudgetUp = p),
      (l.maybeApplyCPASBudgetDefaults = _));
  },
  98,
);
