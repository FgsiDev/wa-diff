__d(
  "AdsUEditorCampaignDeliveryChangeBudgetModeReducerPlugin",
  [
    "AdBudgetEndDateGatingUtils",
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsCallAdsDaypartingPresetConstants",
    "AdsCampaignBudgetPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
    "AdsUEditorCampaignDeliveryChangeBudgetModeActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "DateTime",
    "DayPartingUtils",
    "adsCampaignGetDefaultEndDateForBudgetModeChange",
    "adsCampaignGetISODateTimeString",
    "adsUEditorAccountSelector",
    "getByPath",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, c, d) {
      var m = e.daily_budget,
        p = e.lifetime_budget;
      if ((m != null && m > 0) || (m === 0 && p === 0))
        return c === "daily" &&
          s(d) &&
          !u(d) &&
          o("AdBudgetEndDateGatingUtils").isInAdBudgetEndDateTestGroup()
          ? r("AdsCampaignRecordAccessors").end_time.set(null, e)
          : e;
      if (e.end_time != null) return e;
      var _ = r("getByPath")(t, ["timezone_offset_hours_utc"]),
        f = r("DateTime").fromISOString(e.start_time, t.timezone_id).toDate(),
        g = r("AdsCampaignBudgetPluginResolver").resolve({
          objective: n,
          promotedObjectType: a,
          destinationType: i,
        }),
        h = r("adsCampaignGetISODateTimeString")(
          l != null
            ? l
            : r("adsCampaignGetDefaultEndDateForBudgetModeChange")(f, g, n, !0),
          _,
        );
      return r("AdsCampaignRecordAccessors").end_time.set(h, e);
    }
    function s(e) {
      return e.lifetime_budget != null && e.lifetime_budget > 0;
    }
    function u(e) {
      return e.daily_budget != null && e.daily_budget > 0;
    }
    function c(e, t) {
      var n,
        a = o("AdsAPICampaignRecordUtils").getDestinationType(t),
        i = a === r("AdCampaignDestination").PHONE_CALL;
      if (i) {
        var l = t.adset_schedule,
          s = t.pacing_type,
          u = s != null && s.includes("day_parting"),
          c =
            u &&
            l != null &&
            l.size > 0 &&
            o("AdsCallAdsDaypartingPresetConstants").getCTCPresetForSchedule(
              l.toJS(),
            ) != null;
        return o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").daily_budget.set(e.budgetAmount),
          r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
          r("AdsCampaignRecordAccessors").recurring_budget_semantics.set(!0),
          c
            ? function (e) {
                return e;
              }
            : r("AdsCampaignRecordAccessors").adset_schedule.set(
                r("immutable").List(),
              ),
        )(t);
      }
      var d = (n = t.pacing_type) != null ? n : r("immutable").List(),
        m = o("DayPartingUtils").setDayParting(d.toArray(), !1);
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").daily_budget.set(e.budgetAmount),
        r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
        r("AdsCampaignRecordAccessors").pacing_type.set(r("immutable").List(m)),
        r("AdsCampaignRecordAccessors").adset_schedule.set(
          r("immutable").List(),
        ),
        r("AdsCampaignRecordAccessors").recurring_budget_semantics.set(!0),
      )(t);
    }
    function d(e, t, n, a) {
      var i,
        l = o("AdsMutators").chain(
          (i = r("AdsCampaignRecordAccessors")).lifetime_budget.set(
            e.budgetAmount,
          ),
          i.daily_budget.set(0),
          i.recurring_budget_semantics.delete,
          i.time_suggestion.delete,
        )(t),
        s = i.adset_schedule.get(l);
      if (s != null && s.size > 0) {
        var u,
          c = o("AdsAPICampaignRecordUtils").getDestinationType(l),
          d = (u = l.promoted_object) == null ? void 0 : u.page_id,
          m =
            n &&
            o(
              "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
            ).eligibleForCTXAMBusinessHourDaypartingForL2(
              a,
              !1,
              "lifetime",
              c,
              d,
              t.optimization_goal,
            ) &&
            o(
              "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
            ).enableCTXAMBusinessHourDaypartingOrganicHours(!1),
          p = n ? !m : !1;
        if (p)
          l = o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").adset_schedule.set(
              r("immutable").List(),
            ),
            r("AdsCampaignRecordAccessors").pacing_type.set(
              r("immutable").List(["standard"]),
            ),
          )(l);
        else {
          var _ = r("AdsCampaignRecordAccessors").pacing_type.get(l);
          (_ == null || !_.includes("day_parting")) &&
            (l = r("AdsCampaignRecordAccessors").pacing_type.set(
              r("immutable").List(["day_parting"]),
            )(l));
        }
      }
      return l;
    }
    var m = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            isBudgetFlexMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(function (e) {
              return (
                o("AdsUEditorCampaignGroupAdObjectsUtils").getBudgetStrategy(
                  e,
                ) === "CAMPAIGN_FLEX_BUDGET"
              );
            }),
            objectives: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            promotedObjectTypes: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
            ),
            account: r("adsUEditorAccountSelector"),
          },
          function (t, n, a) {
            var i = a.account,
              l = a.isBudgetFlexMap,
              s = a.objectives,
              u = a.promotedObjectTypes,
              m = o("AdsMutators").mutateEach(
                t,
                n.campaignIDsToUpdate,
                function (t, a) {
                  var m = t,
                    p = l.get(a) === !0,
                    _ = r("nullthrows")(s.get(a));
                  switch (n.budgetMode) {
                    case "lifetime":
                      m = d(n, m, p, _);
                      break;
                    case "daily":
                      m = c(n, m);
                      break;
                  }
                  var f = r("nullthrows")(u.get(a)),
                    g = o("AdsAPICampaignRecordUtils").getDestinationType(m);
                  return e(m, i, _, f, g, n.defaultEndDate, n.budgetMode, t);
                },
              );
            return m;
          },
          o("AdsUEditorCampaignDeliveryChangeBudgetModeActionFlux").actionType,
        ),
      },
      p = m;
    l.default = p;
  },
  98,
);
