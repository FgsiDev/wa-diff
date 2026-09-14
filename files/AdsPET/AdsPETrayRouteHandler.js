__d(
  "AdsPETrayRouteHandler",
  ["fbt", "AdsPERouteName"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Edit");
    }
    function u() {
      return s._(/*BTDS*/ "Insights");
    }
    function c() {
      return s._(/*BTDS*/ "App");
    }
    function d() {
      return s._(/*BTDS*/ "Goals");
    }
    function m() {
      return s._(/*BTDS*/ "History");
    }
    function p(e, t) {
      var n = t.getPreviousParams(),
        o = t.getNextParams();
      !o.selected_adset_ids &&
        n.selected_adset_ids &&
        t.redirectTo(r("AdsPERouteName").ADSETS);
    }
    function _(e, t) {
      var n = t.getPreviousParams(),
        o = t.getNextParams();
      !o.selected_ad_ids &&
        n.selected_ad_ids &&
        t.redirectTo(r("AdsPERouteName").ADS);
    }
    function f(e, t) {
      var n = t.getPreviousParams(),
        o = t.getNextParams();
      !o.selected_campaign_ids &&
        n.selected_campaign_ids &&
        t.redirectTo(r("AdsPERouteName").CAMPAIGNS);
    }
    ((l.getEditTitle = e),
      (l.getInsightsTitle = u),
      (l.getAppTitle = c),
      (l.getGoalsTitle = d),
      (l.getHistoryTitle = m),
      (l.campaignsRouteWillUpdate = p),
      (l.adgroupsRouteWillUpdate = _),
      (l.campaignGroupsRouteWillUpdate = f));
  },
  226,
);
