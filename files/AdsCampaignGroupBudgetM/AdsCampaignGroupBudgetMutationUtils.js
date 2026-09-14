__d(
  "AdsCampaignGroupBudgetMutationUtils",
  [
    "AdCampaignDestination",
    "AdsAPIBidConstraints",
    "AdsAPIBidStrategies",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecord",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountUtils",
    "AdsBidConstraintsUtils",
    "AdsBudgetUsabilityGKUtils",
    "AdsBuyingTypes",
    "AdsCFCPASBudgetUtils",
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignBudgetPluginResolver",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignGroupWithBudgetLimits.experimental",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
    "AdsConversionWindowUtils",
    "AdsCostStrategyUtils",
    "AdsFrequencyControlEditorConstants",
    "AdsFrequencyControlGKUtils",
    "AdsMutators",
    "AdsOptimizationGoalUtils",
    "AdsOptimizationMutationUtils",
    "AdsOptimizationUtils",
    "AdsPECrepePackages",
    "AdsPromotedObjectTypes",
    "AdsUECampaignIncrementalAttributionUtils",
    "AdsUEditorCampaignLiveVideoSectionUtils",
    "AdsUEditorHostIDs",
    "AdsWebToWhatsAppBudgetRecommendationUtils",
    "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo",
    "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2",
    "ClickToMessageCTMPerformanceFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "ClickToMessagingAdsAdoptionLoggingFalcoEvent",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "DateTime",
    "DayPartingUtils",
    "LifetimeDefaultDurationUtils",
    "LoadObject",
    "WebApiApplication",
    "adsBillingEventGetDefaultDEPRECATED",
    "adsBillingEventIsBillingEventDisabledByCampaignGroupBudget",
    "adsCampaignGetDefaultEndDate",
    "adsCampaignGetISODateTimeString",
    "adsCampaignGroupBudgetGetDefaultCampaignGroupBudgetFromCampaignsBudgets",
    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
    "adsCampaignGroupBudgetGetPacingTypeForBidType",
    "adsCampaignGroupBudgetResolveOptimizationPlugin",
    "first",
    "gkx",
    "immutable",
    "isFalsey",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "daily";
    function s(e, t, n) {
      var a = e.objective,
        i = t.optimization_goal,
        l = t.billing_event,
        s = e.is_autobid,
        u = e.is_average_price_pacing,
        c = e.bid_strategy,
        d = r("adsBillingEventIsBillingEventDisabledByCampaignGroupBudget")(
          a,
          l,
          c,
        ),
        m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, t);
      if (d) {
        var p = r("adsBillingEventGetDefaultDEPRECATED")(
          r("AdsBuyingTypes").AUCTION,
          a,
          i,
          m,
          n,
          c,
          !0,
          s,
          u,
        );
        return p != null
          ? r("AdsCampaignRecordAccessors").billing_event.set(p, t)
          : r("AdsCampaignRecordAccessors").billing_event.delete(t);
      }
      return t;
    }
    function u(e, t) {
      var n = r("AdsCampaignRecordAccessors").destination_type.set(null, t);
      n = r("AdsCampaignRecordAccessors").optimization_goal.set(
        r("AdsAPIOptimizationGoals").VALUE,
        n,
      );
      var a = e.objective,
        i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, n);
      return a === r("AdsAPIObjectives").APP_INSTALLS &&
        i === r("AdsPromotedObjectTypes").MOBILE_APP
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
              .delete,
            r("AdsCampaignRecordAccessors").promoted_object.custom_event_str
              .delete,
          )(n)
        : n;
    }
    function c(e, t, n) {
      var a,
        i = r("adsCampaignGroupBudgetResolveOptimizationPlugin")(t, n),
        l = i.getDefaultFrequencyControlSpecs(
          n.optimization_goal,
          o("AdsAPICampaignRecordUtils").getPromotedObjectType(t.objective, n),
          e,
          (a = t.frequency_control_specs) == null ? void 0 : a.toJS(),
        );
      if (!l)
        return r("AdsCampaignRecordAccessors").frequency_control_specs.delete(
          n,
        );
      var s = n.frequency_control_specs;
      return s
        ? n
        : r("AdsCampaignRecordAccessors").frequency_control_specs.set(
            r("immutable").List(l),
            n,
          );
    }
    function d(e) {
      if (
        !o(
          "AdsFrequencyControlGKUtils",
        ).isAccountEligibleForTargetFrequencyAuctionCBOWriteExperience()
      )
        return e;
      var t = r("AdsCampaignGroupRecordAccessors").frequency_control_specs.get(
          e,
        ),
        n = r("first")(t != null ? t : []);
      return n != null && n.get("type") === "TARGET"
        ? r("AdsCampaignGroupRecordAccessors").frequency_control_specs.set(
            r("immutable").fromJS(
              o("AdsFrequencyControlEditorConstants")
                .DEFAULT_FREQUENCY_CONTROL_SPECS,
            ),
            e,
          )
        : e;
    }
    function m(e, t, n) {
      var r = t.objective,
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(r, n),
        i = o("AdsOptimizationMutationUtils").getDefaultAttributionSpec(
          e,
          r,
          a,
          n.optimization_goal,
          t.bid_strategy,
        );
      return n.merge(i);
    }
    function p(e, t, n) {
      var a = t.objective,
        i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, n),
        l = n.optimization_goal,
        s = !!t.is_autobid,
        u = !!t.is_average_price_pacing,
        c = t.bid_strategy,
        d = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: a,
          promotedObjectType: i,
        }),
        m =
          r("isFalsey")(n == null ? void 0 : n.daily_budget) &&
          r("isFalsey")(n == null ? void 0 : n.lifetime_budget),
        p = o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).isEligibleForCostCapPurchaseOptimization(
          !0,
          n == null ? void 0 : n.destination_type,
          l,
          a,
          m,
          c,
        ),
        _ = o("AdsOptimizationGoalUtils").isValidForBiddingStrategy(
          d,
          a,
          l,
          s,
          u,
          e,
          c,
          p,
        );
      if (!_) {
        var f = r("adsCampaignGroupBudgetGetDefaultOptimizationGoalParams")(
            e,
            t,
            n,
          ),
          g = d.getDefaultOptimizationGoal(f);
        return r("AdsCampaignRecordAccessors").optimization_goal.set(g, n);
      }
      return n;
    }
    function _(e, t) {
      var n = !!e.is_autobid;
      return n
        ? t
        : o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").value_rule_set_id.delete,
            r("AdsCampaignRecordAccessors").value_adjustment_rule_collection_id
              .delete,
            r("AdsCampaignRecordAccessors").value_rules_entry_point.delete,
            r("AdsCampaignRecordAccessors").value_rules_spec.delete,
          )(t);
    }
    function f(e, t) {
      var n,
        a = !!e.is_autobid,
        i = o(
          "AdsUECampaignIncrementalAttributionUtils",
        ).getAllowedBidStrategiesForIncrementalAttribution(),
        l =
          (e.bid_strategy != null &&
            i.has((n = t.bid_strategy) != null ? n : e.bid_strategy)) ||
          a;
      return l || !r("AdsCampaignDraftFragmentStore").isNew(t.id)
        ? t
        : r(
            "AdsCampaignRecordAccessors",
          ).is_incremental_attribution_enabled.set(!1, t);
    }
    function g(e, t) {
      t === void 0 && (t = []);
      var n = h(t),
        a = o("AdsCostStrategyUtils").getBidLegacyFieldsValueByBidStrategy(n),
        i = a.MappedIsAutobid,
        l = a.MappedIsAveragePricePacing;
      return o("AdsMutators").chain(
        r("AdsCampaignGroupRecordAccessors").bid_strategy.set(n),
        r("AdsCampaignGroupRecordAccessors").is_autobid.set(i),
        r("AdsCampaignGroupRecordAccessors").is_average_price_pacing.set(l),
      )(e);
    }
    function h(e) {
      e === void 0 && (e = []);
      var t = e.every(function (e) {
        return (
          e.bid_strategy !== null ||
          (e.is_autobid !== null && e.is_average_price_pacing !== null)
        );
      });
      if (e.length > 0 && t) {
        var n = e.every(function (e) {
          return (
            e.bid_strategy ===
            r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
          );
        });
        if (n) return r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS;
        var o = e.every(function (e) {
          return e.bid_strategy === r("AdsAPIBidStrategies").COST_CAP;
        });
        if (o) return r("AdsAPIBidStrategies").COST_CAP;
        var a = e.some(function (e) {
          return (
            e.bid_strategy ===
              r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP ||
            (e.is_autobid === !1 && e.is_average_price_pacing === !1)
          );
        });
        if (a) return r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP;
        var i = e.some(function (e) {
          return (
            e.bid_strategy === r("AdsAPIBidStrategies").TARGET_COST ||
            e.is_average_price_pacing
          );
        });
        if (i) return r("AdsAPIBidStrategies").TARGET_COST;
      }
      return r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP;
    }
    function y(e, t, n, o, a) {
      var i = t * (a / 100);
      return o
        ? n === "daily"
          ? r("AdsCampaignRecordAccessors").daily_min_spend_target.set(
              String(i),
              e,
            )
          : r("AdsCampaignRecordAccessors").lifetime_min_spend_target.set(
              String(i),
              e,
            )
        : n === "daily"
          ? r("AdsCampaignRecordAccessors").daily_spend_cap.set(String(i), e)
          : r("AdsCampaignRecordAccessors").lifetime_spend_cap.set(
              String(i),
              e,
            );
    }
    function C(t, n, a, i, l) {
      a === void 0 && (a = e);
      var s = o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").daily_min_spend_target.delete,
        r("AdsCampaignRecordAccessors").daily_spend_cap.delete,
        r("AdsCampaignRecordAccessors").lifetime_min_spend_target.delete,
        r("AdsCampaignRecordAccessors").lifetime_spend_cap.delete,
        r("AdsCampaignRecordAccessors").min_budget_spend_percentage.delete,
        r("AdsCampaignRecordAccessors").max_budget_spend_percentage.delete,
      )(n);
      if (a === "daily")
        return o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").end_time.delete,
          r("AdsCampaignRecordAccessors").adset_schedule.delete,
        )(s);
      var u = r("DateTime").now(t.timezone_id),
        c = t.timezone_offset_hours_utc,
        d = r("adsCampaignGetDefaultEndDate")(
          u.toDate(),
          null,
          i != null
            ? i
            : r("AdsCampaignBudgetPluginResolver").resolve({
                objective: r("AdsAPIObjectives").NONE,
                promotedObjectType: r("AdsPromotedObjectTypes").NONE,
              }),
          l,
          !0,
        );
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").start_time.set(
          r("adsCampaignGetISODateTimeString")(u.toDate(), c),
        ),
        r("AdsCampaignRecordAccessors").end_time.set(
          r("adsCampaignGetISODateTimeString")(d, c),
        ),
      )(s);
    }
    function b(e, t, n, a, i, l, s, u, c) {
      var d = t === r("AdsUEditorHostIDs").CREATION;
      !d &&
        !r("justknobx")._("2274") &&
        (d =
          r("AdsCampaignGroupDraftFragmentStore").isNew(n) ||
          r("AdsCampaignGroupDraftFragmentStore").hasDraft(n));
      var m = o(
        "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2",
      ).AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfoV2(
        e,
        d,
        a,
        i,
        l,
        c,
        s,
        u,
        n,
      );
      if (m.isZeroOutcomeBudgetDefaultEligible)
        return {
          isV2Enabled: m.isV2Enabled,
          isZeroOutcomeBudgetDefaultEligible: !0,
          zeroOutcomeDefaultDailyBudget: m.zeroOutcomeDefaultDailyBudget,
        };
      var p = o(
        "AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo",
      ).AdsZeroOutcomeGetBudgetDefaultAllObjectivesEligibleInfo(
        e,
        d,
        a,
        i,
        l,
        c,
      );
      return {
        isV2Enabled: m.isV2Enabled,
        isZeroOutcomeBudgetDefaultEligible:
          p.isZeroOutcomeBudgetDefaultEligible,
        zeroOutcomeDefaultDailyBudget: p.zeroOutcomeDefaultDailyBudget,
      };
    }
    function v(t, n, a, i, l, s) {
      var u, c, d, m;
      (a === void 0 && (a = e),
        i === void 0 && (i = []),
        l === void 0 && (l = r("AdsUEditorHostIDs").CREATION),
        s === void 0 && (s = 0));
      var p = n.objective,
        _ = t == null ? void 0 : t.currency,
        f = (u = n.promoted_object) == null ? void 0 : u.live_video_destination,
        g =
          n.source_campaign_id != null ||
          i.some(function (e) {
            return (e == null ? void 0 : e.source_adset_id) != null;
          });
      if (i.length > 0 && l !== r("AdsUEditorHostIDs").CREATION) {
        var h,
          y,
          C = n.collaborative_ads_partner_info,
          v = null;
        if (
          ((o("AdsCampaignLiveVideoAdsUtils").getShouldDefaultBudgetInL3(
            t,
            f,
            i,
          ) ||
            o(
              "AdsCampaignLiveVideoAdsUtils",
            ).shouldDefaultLiveVideoConversionLocation(!1)) &&
          a === "lifetime"
            ? (v = o("AdsCampaignLiveVideoAdsUtils").getLVADefaultBudget(t))
            : o("AdsCFCPASBudgetUtils").getShouldDefaultCPASBudgetInL3(
                t,
                C,
                f,
              ) && (v = o("AdsCFCPASBudgetUtils").getCPASDefaultBudgetForL3(t)),
          v != null)
        )
          return S(n, a, v, s);
        var R = (h = i[0]) == null ? void 0 : h.optimization_goal,
          L = (y = i[0]) == null ? void 0 : y.destination_type;
        if (!g) {
          var E = b(p, l, n.id, a === "daily", _, t, R, L, !0);
          if (
            E.isV2Enabled &&
            E.isZeroOutcomeBudgetDefaultEligible &&
            a === "daily"
          )
            return S(n, a, E.zeroOutcomeDefaultDailyBudget, s);
        }
        return (
          (v = r(
            "adsCampaignGroupBudgetGetDefaultCampaignGroupBudgetFromCampaignsBudgets",
          )(i, p, a, n.id)),
          S(n, a, v, s)
        );
      }
      var k =
          r("AdsCampaignGroupWithBudgetLimits.experimental")
            .defaultPromotedObjectForObjective[p] ||
          r("AdsPromotedObjectTypes").NONE,
        I = o("AdsCampaignBudgetMutationUtils").getDefaultBudgetByBudgetMode(
          a,
          p,
          k,
          _,
          null,
          t,
          l === r("AdsUEditorHostIDs").CREATION,
          !0,
        ),
        T = o(
          "ClickToMessageCTWAFeatureGating",
        ).isEligibleForCTXOptimizationGoal(
          p,
          (c = i[0]) == null ? void 0 : c.optimization_goal,
        ),
        D = o(
          "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
        ).getIsCTXDestinationInEngagementObjective(i, p),
        x = !1,
        $ = (d = i[0]) == null ? void 0 : d.optimization_goal,
        P = (m = i[0]) == null ? void 0 : m.destination_type,
        N = {
          isV2Enabled: !1,
          isZeroOutcomeBudgetDefaultEligible: !1,
          zeroOutcomeDefaultDailyBudget: 0,
        };
      g || (N = b(p, l, n.id, a === "daily", _, t, $, P, !0));
      var w = o(
        "AdsWebToWhatsAppBudgetRecommendationUtils",
      ).isEligibleCampaignForWTWASABRZO(null, $);
      if (D || T) {
        var A,
          F = o(
            "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
          ).setCTXDefaultBudgetAtCBOEditing(
            t,
            null,
            p,
            a,
            n.start_time,
            n.stop_time,
            $,
          ),
          O =
            (A = F == null ? void 0 : F.ctxZORecommendation) != null ? A : null;
        O != null && O !== 0 && (I = O);
      } else if (w) {
        var B = o(
          "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
        ).setWTWADefaultBudgetAtCBOEditing(
          t,
          null,
          null,
          $,
          a,
          n.start_time,
          n.stop_time,
        );
        B != null &&
          B !== 0 &&
          o(
            "AdsWebToWhatsAppBudgetRecommendationUtils",
          ).isWTWABudgetRecommendationBiggerThanDefaultBudget(B, a) &&
          ((I = B), (x = !0));
      } else
        N.isZeroOutcomeBudgetDefaultEligible &&
          N.zeroOutcomeDefaultDailyBudget !== 0 &&
          (I = N.zeroOutcomeDefaultDailyBudget);
      if (
        (o("AdsCFCPASBudgetUtils").getShouldDefaultCPASBudgetInL3(
          t,
          n.collaborative_ads_partner_info,
          f,
        ) && (I = o("AdsCFCPASBudgetUtils").getCPASDefaultBudgetForL3(t)),
        (o("AdsCampaignLiveVideoAdsUtils").getShouldDefaultBudgetInL3(
          t,
          f,
          i,
        ) ||
          o(
            "AdsCampaignLiveVideoAdsUtils",
          ).shouldDefaultLiveVideoConversionLocation(!1)) &&
          (I = o("AdsCampaignLiveVideoAdsUtils").getLVADefaultBudget(t)),
        o("LifetimeDefaultDurationUtils").shouldUseSevenDayLifetimeBudget(p, a))
      ) {
        var W = o(
          "AdsCampaignBudgetMutationUtils",
        ).getDefaultBudgetByBudgetMode(
          "daily",
          p,
          k,
          _,
          null,
          t,
          l === r("AdsUEditorHostIDs").CREATION,
          !0,
        );
        if (D || T) {
          var q,
            U = o(
              "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
            ).setCTXDefaultBudgetAtCBOEditing(
              t,
              null,
              p,
              "daily",
              n.start_time,
              n.stop_time,
              $,
            ),
            V =
              (q = U == null ? void 0 : U.ctxZORecommendation) != null
                ? q
                : null;
          V != null && V > 0 && (W = V);
        } else if (w) {
          var H = o(
            "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
          ).setWTWADefaultBudgetAtCBOEditing(
            t,
            null,
            null,
            $,
            "daily",
            n.start_time,
            n.stop_time,
          );
          H != null && H > 0 && (W = H);
        } else
          N.isZeroOutcomeBudgetDefaultEligible &&
            N.zeroOutcomeDefaultDailyBudget > 0 &&
            (W = N.zeroOutcomeDefaultDailyBudget);
        I = W * 7;
      }
      var G =
        a === "daily"
          ? r("AdsCampaignGroupWithBudgetLimits.experimental")
              .dailyBudgetMultiplier
          : r("AdsCampaignGroupWithBudgetLimits.experimental")
              .lifetimeBudgetMultiplier;
      ((N.isZeroOutcomeBudgetDefaultEligible ||
        x ||
        o("AdsCampaignLiveVideoAdsUtils").getShouldDefaultBudgetInL3(t, f, i) ||
        o(
          "AdsCampaignLiveVideoAdsUtils",
        ).shouldDefaultLiveVideoConversionLocation(!1) ||
        o("AdsCFCPASBudgetUtils").getShouldDefaultCPASBudgetInL3(
          t,
          n.collaborative_ads_partner_info,
        ) ||
        o("LifetimeDefaultDurationUtils").shouldUseSevenDayLifetimeBudget(
          p,
          a,
        )) &&
        (G = 1),
        (I *= G));
      var z = a === "daily" ? M(n, !1) : n;
      return S(z, a, I, s);
    }
    function S(e, t, n, a) {
      var i = n;
      if (a != null && a > n) {
        var l = r("gkx")("22329"),
          s = r("gkx")("11835");
        (s ||
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: l ? "test" : "control",
              feature_name: "consistent_budget_defaulting",
              hbt_name: "ctx_budget_hbt_wave_1_2026",
              unit_id: e.account_id,
              unit_type: "ad_account_id",
            };
          }),
          l && (i = a));
      }
      var u = String(
        o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(i),
      );
      return (
        t === "daily"
          ? o("AdsMutators").chain(
              r("AdsCampaignGroupRecordAccessors").daily_budget.set(u),
              r("AdsCampaignGroupRecordAccessors").lifetime_budget.delete,
              r("AdsCampaignGroupRecordAccessors").budget_strategy.delete,
            )
          : o("AdsMutators").chain(
              r("AdsCampaignGroupRecordAccessors").lifetime_budget.set(u),
              r("AdsCampaignGroupRecordAccessors").daily_budget.delete,
              r("AdsCampaignGroupRecordAccessors").spend_cap.delete,
              r("AdsCampaignGroupRecordAccessors").time_suggestion.delete,
              r("AdsCampaignGroupRecordAccessors").budget_strategy.delete,
            )
      )(e);
    }
    function R(e, t) {
      t === void 0 && (t = !1);
      var n = [
        r("AdsCampaignGroupRecordAccessors").daily_budget.delete,
        r("AdsCampaignGroupRecordAccessors").lifetime_budget.delete,
        r("AdsCampaignGroupRecordAccessors").start_time.delete,
        r("AdsCampaignGroupRecordAccessors").stop_time.delete,
        r("AdsCampaignGroupRecordAccessors").time_suggestion.delete,
      ];
      if (t) {
        var a;
        n.push(
          (a = r("AdsCampaignGroupRecordAccessors")).budget_strategy.set(
            "CAMPAIGN_FLEX_BUDGET",
          ),
          a.bid_strategy.set(r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP),
          a.is_autobid.set(!0),
          a.is_average_price_pacing.set(!1),
          a.pacing_type.set(r("immutable").List(["standard"])),
        );
      } else {
        var a;
        n.push(
          (a = r("AdsCampaignGroupRecordAccessors")).bid_strategy.delete,
          a.budget_strategy.delete,
          a.is_autobid.delete,
          a.is_average_price_pacing.delete,
          a.pacing_type.delete,
        );
      }
      return o("AdsMutators").chain.apply(o("AdsMutators"), n)(e);
    }
    function L(e) {
      var t = r("AdsCampaignGroupRecordAccessors").frequency_control_specs.get(
          e,
        ),
        n = r("first")(t != null ? t : []);
      return n != null && n.get("type") === "TARGET"
        ? !0
        : e.objective === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
            o(
              "AdsFrequencyControlGKUtils",
            ).isAccountEligibleForTargetFrequencyAuctionDefaulting();
    }
    function E(t, n, a, i) {
      var l;
      i === void 0 && (i = r("AdsUEditorHostIDs").CREATION);
      var s = e,
        u = (l = n.promoted_object) == null ? void 0 : l.live_video_destination;
      if (a.length !== 0) {
        var c =
          a.length > 0 &&
          a.every(function (e) {
            var t = e.lifetime_budget;
            return t != null && t > 0;
          });
        s = c ? "lifetime" : "daily";
      }
      return (
        (o("AdsCampaignLiveVideoAdsUtils").getShouldDefaultBudgetInL3(
          t,
          u,
          a,
        ) ||
          o(
            "AdsCampaignLiveVideoAdsUtils",
          ).shouldDefaultLiveVideoConversionLocation(!1) ||
          L(n)) &&
          (s = "lifetime"),
        o("AdsMutators").chain(
          function (e) {
            return v(t, e, s, a, i);
          },
          function (e) {
            return g(e, a);
          },
          function (e) {
            return F(e, a);
          },
        )(n)
      );
    }
    function k(e, t, n, a) {
      var i,
        l,
        s = o("AdsMutators").chain(
          (l = r("AdsCampaignRecordAccessors")).bid_constraints.delete,
          l.daily_min_spend_target.delete,
          l.daily_spend_cap.delete,
          l.lifetime_min_spend_target.delete,
          l.lifetime_spend_cap.delete,
          l.min_budget_spend_percentage.delete,
          l.max_budget_spend_percentage.delete,
          l.is_average_price_pacing.set(!1),
        )(n),
        u = t.objective,
        c =
          (i = a == null ? void 0 : a.forPromotedObjectType) != null
            ? i
            : o("AdsAPICampaignRecordUtils").getPromotedObjectType(u, n);
      s = T(s, a);
      var d = r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP;
      if (s.attribution_spec != null) {
        var m,
          p,
          _,
          f = o(
            "AdsConversionWindowUtils",
          ).getDefaultConversionWindowMaybeExtended(
            e,
            u,
            (m = s.optimization_goal) != null
              ? m
              : r("AdsAPIOptimizationGoals").NONE,
            c,
            d,
          );
        ((s = o("AdsConversionWindowUtils").setDefaultClickConversionWindow(
          s,
          (p = f.ctConvWindowDays) != null ? p : 1,
        )),
          (s = o("AdsConversionWindowUtils").setDefaultViewConversionWindow(
            s,
            (_ = f.vtConvWindowDays) != null ? _ : 0,
          )));
      }
      return s;
    }
    function I(e, t, n, a) {
      var l,
        s,
        u,
        c,
        d,
        m = function (r) {
          return k(e, t, r, {
            forPromotedObjectType: a == null ? void 0 : a.forPromotedObjectType,
            isBudgetFlexOn: a == null ? void 0 : a.isBudgetFlexOn,
            savedCampaignDailyBudget:
              a == null ? void 0 : a.savedCampaignDailyBudget,
            savedCampaignLifetimeBudget:
              a == null ? void 0 : a.savedCampaignLifetimeBudget,
          });
        },
        p =
          (a == null ? void 0 : a.shouldRetainDayparting) === !0
            ? m(n)
            : o("AdsMutators").chain(
                m,
                r("AdsCampaignRecordAccessors").adset_schedule.delete,
              )(n),
        _ = r("AdsAccountUtils").hasCapability(e, "DIRECT_SALES"),
        f = t.objective,
        g = o("AdsAPICampaignRecordUtils").getDestinationType(p),
        h = p.optimization_goal,
        y =
          (l = a == null ? void 0 : a.forPromotedObjectType) != null
            ? l
            : o("AdsAPICampaignRecordUtils").getPromotedObjectType(f, p),
        C = o("AdsAPICampaignGroupRecordUtils").getPackageConfigID(t),
        v = r("AdsCampaignBudgetPluginResolver").resolve({
          objective: f,
          promotedObjectType: y,
          destinationType: g,
        }),
        S = v.getDefaultBudgetMode(
          (s = o("WebApiApplication").getClientID()) != null ? s : "",
        );
      (C === o("AdsPECrepePackages").CTM_LIVE_BOOSTING_PACKAGE_CONFIG_ID ||
        (a == null ? void 0 : a.shouldDefaultToLifetimeForTargetFrequency) ===
          !0) &&
        (S = "lifetime");
      var R = e.currency,
        L = t.source_campaign_id != null || n.source_adset_id != null,
        E = L
          ? null
          : b(
              f,
              a == null ? void 0 : a.hostIDType,
              t.id,
              S === "daily",
              R,
              e,
              h,
              g,
              !1,
            ),
        I =
          (u = a == null ? void 0 : a.savedCampaignDailyBudget) != null ? u : 0,
        T =
          (c = a == null ? void 0 : a.savedCampaignLifetimeBudget) != null
            ? c
            : 0;
      if ((I > 0 || T > 0) && !L) {
        var D =
            I > 0 &&
            (E == null ? void 0 : E.isZeroOutcomeBudgetDefaultEligible) === !0
              ? E.zeroOutcomeDefaultDailyBudget
              : 0,
          x = I > 0 ? I : T,
          $ =
            x > D &&
            o(
              "AdsBudgetUsabilityGKUtils",
            ).isEligibleForCBOToggleBudgetConsistency();
        if (
          (r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(function () {
            var r, o;
            return {
              event: "ctx_budget_consistency_eligibility_check",
              ad_account_id: e.account_id,
              extra_data: {
                source: "budget_consistency_cbo_toggle_gk",
                campaign_id: n.id != null ? String(n.id) : "null",
                objective: (r = t.objective) != null ? r : "null",
                optimization_goal:
                  (o = n.optimization_goal) != null ? o : "null",
                prev_budget: String(x),
                default_budget: String(D),
                budget_mode: I > 0 ? "daily" : "lifetime",
                is_enabled: $ ? "true" : "false",
              },
            };
          }),
          $)
        )
          return o("AdsCampaignBudgetMutationUtils").setBudget(
            a == null ? void 0 : a.savedCampaignDailyBudget,
            a == null ? void 0 : a.savedCampaignLifetimeBudget,
            _,
            p,
            r("LoadObject").withValue(t, { creatorModuleID: i.id }),
            { isBudgetFlexOn: a == null ? void 0 : a.isBudgetFlexOn },
          );
      }
      if (
        (E == null ? void 0 : E.isZeroOutcomeBudgetDefaultEligible) === !0 &&
        S === "daily"
      )
        return o("AdsCampaignBudgetMutationUtils").setBudget(
          E.zeroOutcomeDefaultDailyBudget,
          0,
          _,
          p,
          r("LoadObject").withValue(t, { creatorModuleID: i.id }),
          { isBudgetFlexOn: a == null ? void 0 : a.isBudgetFlexOn },
        );
      var P =
        ((d = p.promoted_object) == null ? void 0 : d.object_store_url) || "";
      return o("AdsCampaignBudgetMutationUtils").resetBudgetToDefault(
        e,
        f,
        P,
        p,
        r("LoadObject").withValue(t, { creatorModuleID: i.id }),
        S,
        {
          forPromotedObjectType: y,
          isBudgetFlexOn: a == null ? void 0 : a.isBudgetFlexOn,
        },
      );
    }
    function T(e, t) {
      if ((t == null ? void 0 : t.isBudgetFlexOn) === !0)
        return o(
          "AdsCampaignBudgetMutationUtils",
        ).clearBiddingFieldsFromCampaign(e);
      var n;
      return o("AdsMutators").chain(
        (n = r("AdsCampaignRecordAccessors")).bid_strategy.set(
          r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        ),
        n.pacing_type.set(r("immutable").List(["standard"])),
        n.is_autobid.set(!0),
        n.bid_amount.delete,
      )(e);
    }
    function D(e, t, n) {
      return o(
        "AdsUEditorCampaignLiveVideoSectionUtils",
      ).shouldApplyLVAOptimizedSettingsForCampaign(e, t, n)
        ? r("AdsCampaignBudgetPluginResolver").resolve({
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
            destinationType: r("AdCampaignDestination").FACEBOOK_LIVE,
          })
        : null;
    }
    function x(t, n, a) {
      var i,
        l,
        s = C(
          t,
          n,
          (i =
            (l = o("AdsAPICampaignGroupRecordUtils").getBudgetType(a)) != null
              ? l
              : o("AdsAPICampaignRecordUtils").getBudgetMode(n)) != null
            ? i
            : e,
          D(t, n, a),
          a == null ? void 0 : a.objective,
        );
      return (
        (s = o("AdsCampaignBudgetMutationUtils").clearBiddingFieldsFromCampaign(
          s,
        )),
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").is_autobid.delete,
          r("AdsCampaignRecordAccessors").is_average_price_pacing.delete,
          r("AdsCampaignRecordAccessors").pacing_type.delete,
          r("AdsCampaignRecordAccessors").bid_strategy.delete,
          r("AdsCampaignRecordAccessors").full_funnel_exploration_mode.delete,
          r("AdsCampaignRecordAccessors").bid_constraints.delete,
          r("AdsCampaignRecordAccessors").time_suggestion.delete,
        )(s)
      );
    }
    function $(t, n, a) {
      var i,
        l,
        s,
        u,
        c = r("AdsCampaignRecordAccessors").adset_schedule.get(n),
        d =
          c != null &&
          ((i = (l = c.size) != null ? l : c.length) != null ? i : 0) > 0,
        m = C(
          t,
          n,
          (s =
            (u = o("AdsAPICampaignGroupRecordUtils").getBudgetType(a)) != null
              ? u
              : o("AdsAPICampaignRecordUtils").getBudgetMode(n)) != null
            ? s
            : e,
          D(t, n, a),
          a == null ? void 0 : a.objective,
        );
      return (
        (a == null ? void 0 : a.bid_strategy) ===
          r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP &&
          (m = o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").bid_amount.delete,
          )(m)),
        (m = o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").daily_budget.delete,
          r("AdsCampaignRecordAccessors").lifetime_budget.delete,
          r("AdsCampaignRecordAccessors").is_autobid.delete,
          r("AdsCampaignRecordAccessors").is_average_price_pacing.delete,
          r("AdsCampaignRecordAccessors").pacing_type.delete,
          r("AdsCampaignRecordAccessors").bid_strategy.delete,
          r("AdsCampaignRecordAccessors").full_funnel_exploration_mode.delete,
          r("AdsCampaignRecordAccessors").bid_constraints.delete,
          r("AdsCampaignRecordAccessors").time_suggestion.delete,
        )(m)),
        d && (m = r("AdsCampaignRecordAccessors").adset_schedule.set(c, m)),
        m
      );
    }
    function P(e, t) {
      var n = N(e, r("adsCampaignGroupBudgetGetPacingTypeForBidType")(t));
      switch (
        ((n = r("AdsCampaignGroupRecordAccessors").bid_strategy.set(t, n)), t)
      ) {
        case r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP:
          return o("AdsMutators").chain(
            r("AdsCampaignGroupRecordAccessors").is_autobid.set(!0),
            r("AdsCampaignGroupRecordAccessors").is_average_price_pacing.set(
              !1,
            ),
          )(n);
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP:
          return o("AdsMutators").chain(
            r("AdsCampaignGroupRecordAccessors").is_autobid.set(!1),
            r("AdsCampaignGroupRecordAccessors").is_average_price_pacing.set(
              !1,
            ),
          )(n);
        case r("AdsAPIBidStrategies").TARGET_COST:
          return o("AdsMutators").chain(
            r("AdsCampaignGroupRecordAccessors").is_autobid.set(!1),
            r("AdsCampaignGroupRecordAccessors").is_average_price_pacing.set(
              !0,
            ),
          )(n);
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS:
          return o("AdsMutators").chain(
            r("AdsCampaignGroupRecordAccessors").is_autobid.set(!1),
            r("AdsCampaignGroupRecordAccessors").is_average_price_pacing.set(
              !1,
            ),
          )(n);
        case r("AdsAPIBidStrategies").COST_CAP:
          return o("AdsMutators").chain(
            r("AdsCampaignGroupRecordAccessors").is_autobid.set(!1),
            r("AdsCampaignGroupRecordAccessors").is_average_price_pacing.set(
              !0,
            ),
          )(n);
        default:
          return n;
      }
    }
    function N(e, t) {
      var n,
        a,
        i = o("DayPartingUtils").setPacingType(
          Array.from((n = e.pacing_type) != null ? n : []),
          t === "no_pacing",
          t === "probabilistic_pacing_v2",
        );
      return e.merge(((a = {}), (a.pacing_type = r("immutable").List(i)), a));
    }
    function M(e, t) {
      var n, a;
      t === void 0 && (t = !1);
      var i = o("DayPartingUtils").setDayParting(
        Array.from((n = e.pacing_type) != null ? n : []),
        t,
      );
      return e.merge(((a = {}), (a.pacing_type = r("immutable").List(i)), a));
    }
    function w(e, t, n) {
      var a = t.objective,
        i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, n),
        l = r("AdsCampaignOptimizationPluginResolver")
          .resolve({ objective: a, promotedObjectType: i })
          .getDefaultBidAmount(
            n.optimization_goal,
            n.billing_event,
            n,
            e.currency,
            e.business_country_code,
          ),
        s = o("AdsOptimizationUtils").changeUSDCentToLocalCurrency(
          l,
          e.account_currency_ratio_to_usd,
          e.currency,
        );
      return r("AdsCampaignRecordAccessors").bid_amount.set(s, n);
    }
    function A(e) {
      var t,
        n = o("AdsBidConstraintsUtils").getDefaultROASAverageFloor(),
        a = r("immutable").Map(
          ((t = {}), (t[r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR] = n), t),
        );
      return r("AdsCampaignRecordAccessors").bid_constraints.set(a, e);
    }
    function F(e, t) {
      t === void 0 && (t = []);
      var n = N(
          e,
          r("adsCampaignGroupBudgetGetPacingTypeForBidType")(e.bid_strategy),
        ),
        o = O(t);
      return (
        o.forEach(function (e) {
          n = e === "day_parting" ? M(n, !0) : N(n, e);
        }),
        n
      );
    }
    function O(e) {
      e === void 0 && (e = []);
      var t = [];
      if (e.length > 0) {
        var n = e.some(function (e) {
          var t,
            n =
              e instanceof r("AdsAPICampaignRecord")
                ? (t = e.pacing_type) == null
                  ? void 0
                  : t.toJS()
                : e.pacing_type;
          return n != null && n.includes("day_parting");
        });
        n && t.push("day_parting");
        var o = e.every(function (e) {
          var t,
            n =
              e instanceof r("AdsAPICampaignRecord")
                ? (t = e.pacing_type) == null
                  ? void 0
                  : t.toJS()
                : e.pacing_type;
          return n != null && n.includes("no_pacing");
        });
        o ? t.push("no_pacing") : t.push("standard");
      }
      return t;
    }
    function B(e, t, n) {
      var a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, n),
        i = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: t,
          promotedObjectType: a,
        }),
        l = n.optimization_goal,
        s = n.billing_event;
      return i.getCanUseAveragePricePacing(l, s, e);
    }
    function W(e, t, n) {
      var a = B(e, t, n),
        i = n.optimization_goal,
        l =
          r("isFalsey")(n == null ? void 0 : n.daily_budget) &&
          r("isFalsey")(n == null ? void 0 : n.lifetime_budget),
        s = o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).isEligibleForCostCapPurchaseOptimization(
          !0,
          n == null ? void 0 : n.destination_type,
          i,
          t,
          l,
          r("AdsAPIBidStrategies").COST_CAP,
        );
      return o("AdsCostStrategyUtils").isEligibleForCostCap(a, i, s);
    }
    ((l.maybeResetBillingEvent = s),
      (l.setValueOptimizationForAppInstallCampaign = u),
      (l.maybeResetFrequencyControlSpecs = c),
      (l.maybeResetTargetFrequencyToCap = d),
      (l.resetAttributionSpec = m),
      (l.maybeResetOptimizationGoal = p),
      (l.maybeClearValueAdjustmentRuleCollectionID = _),
      (l.maybeResetStandardAttributionType = f),
      (l.resetBiddingTypeFieldsWhenCampaignGroupBudgetEnabled = g),
      (l.getBidStrategyByCampaigns = h),
      (l.fixCampaignPercentageSpendLimits = y),
      (l.resetCampaignBudgetMode = C),
      (l.resetCampaignGroupBudgetMode = v),
      (l.resetCampaignGroupWhenCampaignBudgetEnabled = R),
      (l.shouldDefaultBudgetToLifetimeForTargetFrequency = L),
      (l.resetCampaignGroupWhenCampaignGroupBudgetEnabled = E),
      (l.resetBiddingFieldsWhenCampaignBudgetEnabled = k),
      (l.resetCampaignWhenCampaignBudgetEnabled = I),
      (l.updateBiddingFieldsWhenCampaignBudgetEnabled = T),
      (l.resetCampaignWhenBudgetFlexEnabled = x),
      (l.resetCampaignWhenCampaignGroupBudgetEnabled = $),
      (l.setCampaignGroupBidStrategyAndLegacyFlags = P),
      (l.setCampaignGroupPacingType = N),
      (l.setCampaignGroupDayParting = M),
      (l.setDefaultBidAmount = w),
      (l.setDefaultMinRoasBidConstraints = A),
      (l.resetPacingTypeWhenCampaignGroupBudgetEnabled = F),
      (l.getPacingTypeByCampaigns = O),
      (l.getCanUseAveragePricePacing = B),
      (l.getCanUseCostCap = W));
  },
  98,
);
