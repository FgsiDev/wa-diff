__d(
  "AdsCampaignMutatorUtils",
  [
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupUtils",
    "AdsCampaignRecordAccessors",
    "AdsInterfacesLogger",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsUEditorMessagingDestinationUtils",
    "CTMAdsOptimizationStoreUtils",
    "CTXDefaultingStoreUtils",
    "CTXTrafficRemoveLinkClicksUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessagingAdsAdoptionLoggingFalcoEvent",
    "CtxBudgetGuidanceLongTermHoldoutUtils",
    "DateTime",
    "adsCampaignGetISODateTimeString",
    "adsCampaignIsCampaignGroupBudget",
    "adsTargetingLocationEpdAreLocationsEU",
    "gkx",
    "immutable",
    "isFalsey",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "daily";
    function s(e, t, n, a) {
      var i = o("AdsBulkValueUtils").getUniformValueOrDefault(a, !1),
        l =
          t === r("AdsAPIObjectives").MESSAGES ||
          t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          t === r("AdsAPIObjectives").OUTCOME_SALES ||
          o("AdsODAXUtils").isODAXTrafficCampaignGroup(i, t);
      return l
        ? e.withMutations(function (n) {
            var a, l;
            r("AdsCampaignRecordAccessors").billing_event.set(
              r("AdsAPIBillingEvents").IMPRESSIONS,
              n,
            );
            var s =
                e != null
                  ? o("AdsAPICampaignRecordUtils").getDestinationType(n)
                  : null,
              u = (a = e.promoted_object) == null ? void 0 : a.page_id,
              c = u != null ? r("AdsPageStore").get(u) : null,
              d =
                (c == null ? void 0 : c.is_messaging_light_switch_enabled) ===
                !0,
              m =
                t !== r("AdsAPIObjectives").LINK_CLICKS &&
                o(
                  "CTMAdsOptimizationStoreUtils",
                ).getIsCTMPurchaseConversionsOptimizationGoalEligible(u),
              p = o(
                "ClickToMessageAdoptionPerformanceLongTermHoldout",
              ).isAccountInEpdJurisdiction(),
              _ =
                (l = n.targeting) == null || (l = l.geo_locations) == null
                  ? void 0
                  : l.toJS(),
              f =
                o(
                  "adsTargetingLocationEpdAreLocationsEU",
                ).adsTargetingLocationEpdOrTba(_) &&
                o(
                  "AdsUEditorMessagingDestinationUtils",
                ).destinationIncludesWhatsApp(s),
              g = p || f || d,
              h =
                g &&
                o(
                  "AdsUEditorMessagingDestinationUtils",
                ).isMultiDestinationWithWhatsApp(s) &&
                r("gkx")("25149");
            if (g && !h) {
              var y = r("AdsAPIOptimizationGoals").LINK_CLICKS;
              (o(
                "AdsUEditorMessagingDestinationUtils",
              ).destinationIncludesWhatsApp(s) ||
                (y = r("AdsAPIOptimizationGoals").CONVERSATIONS),
                r("AdsCampaignRecordAccessors").optimization_goal.set(y, n));
            } else if (o("AdsUEditorMessagingDestinationUtils").isCTM(s) && m)
              r("AdsCampaignRecordAccessors").optimization_goal.set(
                r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
                n,
              );
            else if (
              (o("AdsUEditorMessagingDestinationUtils").isCTM(s) ||
                o("AdsUEditorMessagingDestinationUtils").isIGDirect(s)) &&
              o("AdsODAXUtils").isODAXTrafficCampaignGroup(i, t) &&
              !o(
                "CTXTrafficRemoveLinkClicksUtils",
              ).shouldRemoveLinkClicksOptimization(
                "AdsCampaignMutatorUtils_linkClicks",
              )
            )
              r("AdsCampaignRecordAccessors").optimization_goal.set(
                r("AdsAPIOptimizationGoals").LINK_CLICKS,
                n,
              );
            else {
              var C = o(
                "CTXDefaultingStoreUtils",
              ).getDefaultOptimizationGoalByObjectiveAndPageID(t, s, u, null);
              if (C != null) {
                var b,
                  v = C[0],
                  S = C[1];
                (r("AdsCampaignRecordAccessors").optimization_goal.set(v, n),
                  r("AdsInterfacesLogger").log({
                    eventName: "ctx_optimization_goal_defaulting",
                    data:
                      ((b = {}),
                      (b.caller =
                        "set_optimization_for_messenger_and_instagram_promoted_object"),
                      (b.campaign_destination_type = s),
                      (b.objective = t),
                      (b.optimization_goal = v),
                      (b.page_id = u),
                      (b.source = S),
                      (b.campaign_id = e.id),
                      b),
                  }));
              } else
                r("AdsCampaignRecordAccessors").optimization_goal.set(
                  r("AdsAPIOptimizationGoals").CONVERSATIONS,
                  n,
                );
            }
            (o("AdsUEditorMessagingDestinationUtils").isMultiDestination(s) &&
              o("AdsODAXUtils").isODAXTrafficCampaignGroup(i, t) &&
              r("AdsCampaignRecordAccessors").optimization_goal.set(
                r("AdsAPIOptimizationGoals").CONVERSATIONS,
                n,
              ),
              r("adsCampaignIsCampaignGroupBudget")(
                n.daily_budget,
                n.lifetime_budget,
              ) ||
                (r("AdsCampaignRecordAccessors").bid_strategy.set(
                  r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
                  n,
                ),
                r("AdsCampaignRecordAccessors").is_autobid.set(!0, n),
                r("AdsCampaignRecordAccessors").is_average_price_pacing.set(
                  !1,
                  n,
                )),
              r("AdsCampaignRecordAccessors").bid_amount.delete(n),
              r("AdsCampaignRecordAccessors").cost_bidding_mode.delete(n));
          })
        : e;
    }
    function u(e) {
      return r("AdsCampaignRecordAccessors").promoted_object.page_id.delete(e);
    }
    function c(e, t) {
      var n,
        a,
        i = t.business_country_code;
      return r("isFalsey")(i) ||
        ((n = e.targeting.geo_locations) == null ? void 0 : n.countries) !=
          null ||
        ((a = e.targeting.geo_locations) == null ? void 0 : a.country_groups) !=
          null
        ? e
        : o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").targeting.geo_locations.delete,
            r(
              "AdsCampaignRecordAccessors",
            ).targeting.geo_locations.countries.set(r("immutable").List([i])),
          )(e);
    }
    function d(e, t, n) {
      var a = r("DateTime").now(e.timezone_id),
        i = e == null ? void 0 : e.timezone_offset_hours_utc,
        l = o("AdsCampaignGroupUtils").adsCampaignGroupGetDefaultEndDateTime(a);
      return o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(t)
        ? o("AdsLiveVideoAdUtils").updateScheduledLiveVideoAdOptmisedTime(
            e,
            t,
            !1,
          )
        : n === "lifetime"
          ? o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").start_time.set(
                r("adsCampaignGetISODateTimeString")(a.toDate(), i),
              ),
              r("AdsCampaignRecordAccessors").end_time.set(
                r("adsCampaignGetISODateTimeString")(l.toDate(), i),
              ),
            )(t)
          : n === "daily"
            ? o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").start_time.set(
                  r("adsCampaignGetISODateTimeString")(a.toDate(), i),
                ),
                r("AdsCampaignRecordAccessors").end_time.delete,
              )(t)
            : t;
    }
    function m(t, n, a, i, l) {
      var s = e;
      if (
        (o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(n) &&
          (s = "lifetime"),
        r("adsCampaignIsCampaignGroupBudget")(
          n.daily_budget,
          n.lifetime_budget,
        ))
      )
        return n;
      var u = d(t, n, s);
      if (
        l &&
        (l === r("AdsAPIObjectives").OUTCOME_SALES ||
          l === r("AdsAPIObjectives").LINK_CLICKS ||
          l === r("AdsAPIObjectives").OUTCOME_LEADS)
      ) {
        var c = n.daily_budget ? "daily" : "lifetime",
          m =
            c === "daily"
              ? n.daily_budget
              : n.lifetime_budget != null
                ? Number(n.lifetime_budget)
                : null,
          p = o("AdsCampaignBudgetMutationUtils").getDefaultBudgetByBudgetMode(
            c,
            a,
            i,
            t.currency,
          );
        if (m != null && c != null) {
          if (
            c === "daily" &&
            p &&
            m > p &&
            o(
              "CtxBudgetGuidanceLongTermHoldoutUtils",
            ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
              !0,
              "consistent_budget",
              "AdsCampaignMutatorUtils_dailyBudget",
            )
          )
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").daily_budget.set(m),
              r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
            )(u);
          if (
            c === "lifetime" &&
            p &&
            m > p &&
            o(
              "CtxBudgetGuidanceLongTermHoldoutUtils",
            ).isCtxBudgetGuidanceLongTermHoldoutEnabled(
              !0,
              "consistent_budget",
              "AdsCampaignMutatorUtils_LifetimeBudget",
            )
          )
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").lifetime_budget.set(m),
              r("AdsCampaignRecordAccessors").daily_budget.set(0),
            )(u);
        }
      } else if (l) {
        var _ = n.daily_budget ? "daily" : "lifetime",
          f =
            _ === "daily"
              ? n.daily_budget
              : n.lifetime_budget != null
                ? Number(n.lifetime_budget)
                : null,
          g = o("AdsCampaignBudgetMutationUtils").getDefaultBudgetByBudgetMode(
            _,
            a,
            i,
            t.currency,
          );
        if (f != null && _ != null) {
          if (_ === "daily" && g && f > g && r("qex")._("3841") === !0)
            return (
              r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(
                function () {
                  return {
                    event: "ctx_abo_budget_preservation_debug",
                    ad_account_id: t.account_id,
                    extra_data: {
                      campaign_id: n.id != null ? String(n.id) : "null",
                      objective: l,
                      prev_budget: String(f),
                      default_budget: String(g),
                      budget_mode: "daily",
                      preservation: "true",
                    },
                  };
                },
              ),
              o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").daily_budget.set(f),
                r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
              )(u)
            );
          if (_ === "lifetime" && g && f > g && r("qex")._("3841") === !0)
            return (
              r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(
                function () {
                  return {
                    event: "ctx_abo_budget_preservation_debug",
                    ad_account_id: t.account_id,
                    extra_data: {
                      campaign_id: n.id != null ? String(n.id) : "null",
                      objective: l,
                      prev_budget: String(f),
                      default_budget: String(g),
                      budget_mode: "lifetime",
                      preservation: "true",
                    },
                  };
                },
              ),
              o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").lifetime_budget.set(f),
                r("AdsCampaignRecordAccessors").daily_budget.set(0),
              )(u)
            );
          r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(function () {
            return {
              event: "ctx_abo_budget_preservation_debug",
              ad_account_id: t.account_id,
              extra_data: {
                campaign_id: n.id != null ? String(n.id) : "null",
                objective: l,
                prev_budget: f != null ? String(f) : "null",
                default_budget: g != null ? String(g) : "null",
                budget_mode: _,
                preservation: "false",
              },
            };
          });
        }
      }
      var h = o("AdsCampaignBudgetMutationUtils").getDefaultBudgetByBudgetMode(
        s,
        a,
        i,
        t.currency,
      );
      return s === "daily"
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").daily_budget.set(h),
            r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
          )(u)
        : o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").lifetime_budget.set(h),
            r("AdsCampaignRecordAccessors").daily_budget.set(0),
          )(u);
    }
    ((l.setOptimizationForMessengerandInstagramPromotedObject = s),
      (l.removePromotedObjectPageID = u),
      (l.setCountryForMessagingPromotedObjects = c),
      (l.resetCampaignSchedule = d),
      (l.setDefaultBudgetForCampaign = m));
  },
  98,
);
