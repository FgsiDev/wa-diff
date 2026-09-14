__d(
  "AdsProfileVisitSABRCreationUtils",
  [
    "AdsAPIObjectives",
    "AdsInterfacesLogger",
    "AdsManagerRelayEnvironment",
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "AdsProfileVisitBudgetDefaultingAction",
    "AdsProfileVisitBudgetDefaultingProvider",
    "AdsProfileVisitSABRCreationUtilsQuery.graphql",
    "AdsProfileVisitSABRDefaultedCampaignsProvider",
    "AdsPromotedObjectTypes",
    "AdsZeroOutcomeBudgetDefaultUtils",
    "FBLogger",
    "Promise",
    "RelayHooks",
    "promiseDone",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1,
      c =
        e !== void 0
          ? e
          : (e = n("AdsProfileVisitSABRCreationUtilsQuery.graphql"));
    function d(e) {
      return u === !0
        ? (s || (s = n("Promise"))).resolve(null)
        : ((u = !0),
          o("RelayHooks")
            .fetchQuery(r("AdsManagerRelayEnvironment"), c, { accountID: e })
            .toPromise()
            .then(function (e) {
              var t;
              (r("AdsProfileVisitBudgetDefaultingAction").dispatch(
                { data: e },
                {
                  line: "61",
                  module: "AdsProfileVisitSABRCreationUtils.js",
                  moduleID: i.id,
                },
              ),
                r("AdsInterfacesLogger").log({
                  eventName: "profile_visit_budget_defaulting",
                  data: {
                    message: "budget_data_fetched",
                    new_value:
                      e == null ||
                      (t = e.ads_manager_profile_visit_sabr_default) == null
                        ? void 0
                        : t.daily_budget_usd,
                  },
                }));
            })
            .catch(function (e) {
              r("FBLogger")("profile_visit_budget_defaulting").warn(
                "Error fetching profile visit budget defaulting data: %s",
                String(e),
              );
            }));
    }
    function m(e) {
      var t;
      u !== !0 && r("promiseDone")(d(e));
      var n = r("AdsProfileVisitBudgetDefaultingProvider")();
      return n == null || (t = n.ads_manager_profile_visit_sabr_default) == null
        ? void 0
        : t.daily_budget_usd;
    }
    function p(e, t, n, a, i) {
      if (
        (_("start eligibility check", i, t, n),
        !(
          t === r("AdsAPIObjectives").LINK_CLICKS &&
          n === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE
        ))
      )
        return (_("skip - invalid objective", i, t, n), !1);
      if (
        (_("valid objective", i, t, n),
        o(
          "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
        ).isCreatedFromDuplicationFlow())
      )
        return (_("skip - duplication flow", i, t, n), !1);
      _("valid creation flow", i, t, n);
      var l = m(e);
      return l == null
        ? (_(
            "skip - no default budget, budgetDataFetched: " + String(u),
            i,
            t,
            n,
          ),
          !1)
        : (_("has default budget", i, t, n),
          a
            ? (_("check QE with exposure", i, t, n), r("qex")._("2976") === !0)
            : (_("check QE without exposure", i, t, n),
              r("qex")._("2979") === !0));
    }
    function _(e, t, n, o) {
      r("AdsInterfacesLogger").log({
        eventName: "profile_visit_budget_defaulting_exposure_checks",
        data: { message: e, caller: t, objective: n, source: o },
      });
    }
    function f(e, t, n, o, a, i) {
      var l;
      if (
        !(
          e !== r("AdsAPIObjectives").LINK_CLICKS ||
          t !== r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE ||
          n === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE
        )
      ) {
        var s = r("AdsProfileVisitSABRDefaultedCampaignsProvider")().get(o[0]);
        if (s != null) {
          var u = s.userEdited !== !0 && a === s.sabrSet ? s.prior : a;
          r("AdsInterfacesLogger").log({
            eventName: "profile_visit_sabr_switch_away",
            data:
              ((l = {}),
              (l.objective = e),
              (l.fragment_id = i),
              (l.new_value = n),
              (l.old_value = t),
              (l.campaign_id = o[0]),
              (l.daily_budget = a),
              (l.next_daily_budget = u),
              l),
          });
        }
      }
    }
    function g(e) {
      var t,
        n = r("AdsProfileVisitBudgetDefaultingProvider")(),
        a =
          n == null || (t = n.ads_manager_profile_visit_sabr_default) == null
            ? void 0
            : t.daily_budget_usd;
      return a == null
        ? null
        : o("AdsZeroOutcomeBudgetDefaultUtils").convertUSDToAccountCurrency(
            e.account_currency_ratio_to_usd,
            a * 100,
            e.currency,
          );
    }
    ((l.fetchProfileVisitDailyBudgetDefault = d),
      (l.getProfileVisitDefaultDailyBudgetInUSD = m),
      (l.getIsProfileVisitSABREnabled = p),
      (l.logProfileVisitSABRSwitchAwayIfNeeded = f),
      (l.getProfileVisitDefaultDailyBudgetInLocalCurrency = g));
  },
  98,
);
