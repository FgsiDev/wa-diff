__d(
  "adsCampaignGroupBudgetGetDefaultCampaignGroupBudgetFromCampaignsBudgets",
  [
    "AdsBudgetUsabilityGKUtils",
    "AdsCampaignBudgetConstants.experimental",
    "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
    "AdsEditingCampaignEditorContext",
    "AdsMessagesCampaignBudgetPluginEndDateCommon",
    "AdsWebToWhatsAppBudgetRecommendationUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "ClickToMessagingAdsAdoptionLoggingFalcoEvent",
    "LifetimeDefaultDurationUtils",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGroupBudgetGetCampaignsBudgetMode",
    "adsCampaignIsCampaignActive",
    "adsCampaignIsCampaignDeleted",
    "adsCampaignIsCampaignPaused",
    "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l =
          (i = r("adsCampaignGroupBudgetGetCampaignsBudgetMode")(e)) != null
            ? i
            : n,
        u = o(
          "AdsBudgetUsabilityGKUtils",
        ).isEligibleForCBOEnableBudgetConsistency(),
        c = 0;
      l === "lifetime" && (c = s(e));
      var d = o("LifetimeDefaultDurationUtils").shouldUseSevenDayLifetimeBudget(
          t,
          l,
        ),
        m = o(
          "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
        ).getIsCTXDestinationInEngagementObjective(e, t),
        p = e
          .filter(function (e) {
            return r("adsCampaignIsCampaignActive")(e);
          })
          .map(function (e) {
            var n,
              i,
              s =
                l === "lifetime"
                  ? (n = e.lifetime_budget) != null
                    ? n
                    : o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                        .DEFAULT_LIFETIME_BUDGET
                  : (i = e.daily_budget) != null
                    ? i
                    : o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                        .DEFAULT_DAILY_BUDGET;
            if (d && l === "lifetime") {
              var c;
              s =
                ((c = e.daily_budget) != null
                  ? c
                  : o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                      .DEFAULT_DAILY_BUDGET) * 7;
            }
            var p = o(
                "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
              ).shouldEnableCTXBudgetDurationDefaultQEParamsSelector(
                r("AdsEditingCampaignEditorContext"),
              ),
              _ = p.account,
              f = p.endTime,
              g = p.isCreationPackageEnabled,
              h = p.pageID,
              y = p.startTime,
              C = o(
                "ClickToMessageCTWAFeatureGating",
              ).isEligibleForCTXOptimizationGoal(t, e.optimization_goal);
            if (m || C) {
              var b,
                v = o(
                  "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
                ).setCTXDefaultBudgetAtCBOEditing(
                  _,
                  h,
                  t,
                  l,
                  y,
                  f,
                  e.optimization_goal,
                  a,
                  e.id,
                ),
                S =
                  (b = v == null ? void 0 : v.ctxZORecommendation) != null
                    ? b
                    : null;
              if (u) {
                if (S != null && S > s) return S;
              } else if (S != null) return S;
            }
            var R = o(
              "AdsWebToWhatsAppBudgetRecommendationUtils",
            ).isEligibleCampaignForWTWASABRZO(
              e.destination_type,
              e.optimization_goal,
            );
            if (R) {
              var L = o(
                "AdsClickToMessageBudgetGuidanceInCBOFlowStoreUtils",
              ).setWTWADefaultBudgetAtCBOEditing(
                _,
                h,
                e.destination_type,
                e.optimization_goal,
                l,
                y,
                f,
              );
              if (u) {
                if (
                  r("isTruthy")(L) &&
                  o(
                    "AdsWebToWhatsAppBudgetRecommendationUtils",
                  ).isWTWABudgetRecommendationBiggerThanDefaultBudget(L, l) &&
                  L > s
                )
                  return L;
              } else if (
                r("isTruthy")(L) &&
                o(
                  "AdsWebToWhatsAppBudgetRecommendationUtils",
                ).isWTWABudgetRecommendationBiggerThanDefaultBudget(L, l)
              )
                return L;
            }
            var E = o(
              "ClickToMessageCTMAdoptionFeatureGating",
            ).eligibleCTXAMSABRZOCombinedBudgetGuidance(
              !1,
              e.destination_type,
              e.optimization_goal,
            );
            if (
              r("isTruthy")(t) &&
              E &&
              (g
                ? o(
                    "ClickToMessageCTMAdoptionFeatureGating",
                  ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceCreationPackagesQE(
                    !1,
                  )
                : o(
                    "ClickToMessageCTMAdoptionFeatureGating",
                  ).enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE(
                    !1,
                    "CTXAMSABRZOCombinedBudgetGuidance",
                    "adsCampaignGroupBudgetGetDefaultCampaignGroupBudgetFromCampaignsBudgets",
                  ))
            ) {
              var k = r("adsCampaignConvertUSDBudgetToCurrency")(
                  _.currency,
                  o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                    .DEFAULT_LIFETIME_BUDGET,
                ),
                I = r("adsCampaignConvertUSDBudgetToCurrency")(
                  _.currency,
                  o("AdsMessagesCampaignBudgetPluginEndDateCommon")
                    .DEFAULT_DAILY_BUDGET,
                );
              u
                ? (s = Math.max(s, l === "daily" ? I : k))
                : (s = l === "daily" ? I : k);
            }
            return s;
          })
          .reduce(function (e, t) {
            return (t != null ? t : 0) + e;
          }, 0),
        _ = l === "daily" ? 2e3 : 35e3,
        f = p + c === 0 ? _ : p + c;
      return (
        r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(function () {
          return {
            event: "ctx_budget_consistency_eligibility_check",
            extra_data: {
              source: "budget_consistency_cbo_enable_gk",
              campaign_group_id: a != null ? String(a) : "null",
              objective: t != null ? t : "null",
              optimization_goal:
                e.length > 0
                  ? e
                      .map(function (e) {
                        var t;
                        return (t = e.optimization_goal) != null ? t : "null";
                      })
                      .join(",")
                  : "null",
              budget_mode: l != null ? l : "unknown",
              computed_budget: String(f),
              is_enabled: u ? "true" : "false",
            },
          };
        }),
        f
      );
    }
    function s(e) {
      var t = e
          .filter(function (e) {
            return r("adsCampaignIsCampaignPaused")(e);
          })
          .map(function (e) {
            var t;
            return +((t = e.lifetime_spent) != null ? t : 0);
          })
          .reduce(function (e, t) {
            return t + e;
          }, 0),
        n = e
          .filter(function (e) {
            return r("adsCampaignIsCampaignDeleted")(e);
          })
          .map(function (e) {
            var t;
            return +((t = e.lifetime_spent) != null ? t : 0);
          })
          .reduce(function (e, t) {
            return t + e;
          }, 0);
      return Math.floor(
        t * r("AdsCampaignBudgetConstants.experimental").CURRENT_SPEND_COEF + n,
      );
    }
    l.default = e;
  },
  98,
);
