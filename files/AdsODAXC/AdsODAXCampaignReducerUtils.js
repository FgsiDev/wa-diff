__d(
  "AdsODAXCampaignReducerUtils",
  [
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAppMutationUtils",
    "AdsBudgetUsabilityGKUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsConvergenceCampaignPluginResolver",
    "AdsMutators",
    "AdsODAXStoreUtils",
    "AdsODAXUtils",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "ClickToMessagingAdsAdoptionLoggingFalcoEvent",
    "EngagementUnitificationGating",
    "PromoChannelAdsManagerUtils",
    "adsCampaignGetBudgetMode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return t
        ? r("AdsCampaignRecordAccessors").targeting.targeting_optimization.set(
            n,
            e,
          )
        : e;
    }
    function s(e, t) {
      return t === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT
        ? r("AdsCampaignRecordAccessors").destination_type.set(
            r("AdCampaignDestination").ON_VIDEO,
            e,
          )
        : e;
    }
    function u(e, t, n, a) {
      if (
        (n !== r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL &&
          n !== r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES) ||
        (t !== o("AdsAPIObjectives").OUTCOME_LEADS &&
          t !== o("AdsAPIObjectives").OUTCOME_SALES)
      )
        return e;
      var i = r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get(e);
      i == null &&
        a != null &&
        a.map(function (e) {
          var t = Array.from(e.keys());
          i = t[0];
        });
      var l = "LEAD";
      return (
        t === o("AdsAPIObjectives").OUTCOME_SALES && (l = "PURCHASE"),
        i !== null
          ? o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object.pixel_id.set(i),
              r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.custom_event_type.set(l),
            )(e)
          : e
      );
    }
    function c(e, t, n, a) {
      if (
        n !== r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM ||
        (t !== o("AdsAPIObjectives").OUTCOME_LEADS &&
          t !== o("AdsAPIObjectives").OUTCOME_SALES)
      )
        return e;
      var i = r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get(e);
      i == null &&
        a != null &&
        a.map(function (e) {
          var t = Array.from(e.keys());
          i = t[0];
        });
      var l = "LEAD";
      return (
        t === o("AdsAPIObjectives").OUTCOME_SALES && (l = "PURCHASE"),
        i !== null
          ? o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object.pixel_id.set(i),
              r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.custom_event_type.set(l),
            )(e)
          : e
      );
    }
    function d(e, t, n) {
      var a = n.account,
        i = n.campaignGroupsMap,
        l = n.defaultIABPID,
        s = n.defaultPageID,
        d = n.destinationType,
        m = n.eligibilityInformation,
        p = n.pixelList,
        _ = n.prefilledOptimizationGoal,
        f = n.promotedObjectType,
        g = n.safrConfig;
      return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, t) {
        var n,
          h,
          y,
          C,
          b,
          v = i.get(t),
          S = r("AdsCampaignRecordAccessors").promoted_object.page_id.get(e),
          R = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.product_set_id.get(e),
          L = v.objective,
          E = o("AdsODAXUtils").maybeTranslateObjective(
            L,
            f,
            e.optimization_goal,
          ),
          k = v.buying_type,
          I = {
            account: a,
            buyingType: k,
            objective: L,
            promotedObjectType: f,
            storeTrafficData: null,
            safrConfig: g != null ? g : {},
            pageID: o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(
              v,
            ),
            catalogSalesData: null,
            isODAXSwitchChannel: !0,
          },
          T = r("AdsConvergenceCampaignPluginResolver")
            .resolve({ objective: E })
            .mergeStaticDefaults(e, I),
          D = o("AdsAPICampaignGroupRecordUtils").hasBudget(v);
        if (D)
          T = o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetCampaignWhenCampaignGroupBudgetEnabled(a, T, v);
        else {
          var x, $, P, N;
          T = o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetCampaignWhenCampaignBudgetEnabled(a, v, T, {
            forPromotedObjectType: f,
          });
          var M = (x = e.daily_budget) != null ? x : 0,
            w = ($ = e.lifetime_budget) != null ? $ : 0,
            A = (P = T.daily_budget) != null ? P : 0,
            F = (N = T.lifetime_budget) != null ? N : 0,
            O = r("adsCampaignGetBudgetMode")(
              e.daily_budget,
              e.lifetime_budget,
            ),
            B = O === "daily",
            W = B ? M : w,
            q = B ? A : F,
            U =
              W > q &&
              o(
                "AdsBudgetUsabilityGKUtils",
              ).isEligibleForOptGoalBudgetConsistency();
          (r("ClickToMessagingAdsAdoptionLoggingFalcoEvent").log(function () {
            var n;
            return {
              event: "ctx_budget_consistency_eligibility_check",
              ad_account_id: a.account_id,
              extra_data: {
                source: "budget_consistency_conv_loc_gk",
                campaign_id: String(t),
                objective: L != null ? L : "null",
                optimization_goal:
                  (n = e.optimization_goal) != null ? n : "null",
                destination_type: d,
                prev_budget: String(W),
                default_budget: String(q),
                budget_mode: B ? "daily" : "lifetime",
                would_preserve: U ? "true" : "false",
              },
            };
          }),
            U
              ? (T = B
                  ? o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").daily_budget.set(M),
                      r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
                    )(T)
                  : o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").lifetime_budget.set(w),
                      r("AdsCampaignRecordAccessors").daily_budget.set(0),
                    )(T))
              : o("EngagementUnitificationGating").getEULaunch1BudgetExperiment(
                  !1,
                ) &&
                (T = B
                  ? o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").daily_budget.set(A),
                      r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
                    )(T)
                  : o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").lifetime_budget.set(F),
                      r("AdsCampaignRecordAccessors").daily_budget.set(0),
                    )(T)));
        }
        var V = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: L,
          promotedObjectType: f,
          destinationType: d,
        });
        ((T = o("AdsOptimizationMutationUtils").clearOptimizationFields(T)),
          (T = o("AdsOptimizationMutationUtils").resetOptimizationRelatedFields(
            a,
            T,
            V,
            L,
            {
              account: a,
              campaign: T,
              campaignGroup: v,
              prefilledOptimizationGoal: _ != null ? _ : null,
              productCatalogID: null,
              productSet: null,
              hasBackingApplication: !1,
            },
            f,
          )),
          (T = o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").name.set(e.name),
            r("AdsCampaignRecordAccessors").id.set(t),
            r("AdsCampaignRecordAccessors").campaign_id.set(e.campaign_id),
            r("AdsCampaignRecordAccessors").status.set(e.status),
            r("AdsCampaignRecordAccessors").destination_type.set(d),
            r("AdsCampaignRecordAccessors").targeting.is_whatsapp_destination_ad
              .delete,
            r("AdsCampaignRecordAccessors").promoted_object.delete,
            r(
              "AdsCampaignRecordAccessors",
            ).is_dynamic_creative_optimization.set(!1),
            r("AdsCampaignRecordAccessors").is_dynamic_creative.set(!1),
            function (e) {
              var t;
              return o("AdsCampaignLiveVideoAdsUtils").maybeSetLiveVideoAdType(
                e,
                v == null || (t = v.promoted_object) == null
                  ? void 0
                  : t.live_video_destination,
              );
            },
          )(T)),
          (T = o("AdsPlacementReducerUtils").resetPlacement(
            T,
            babelHelpers.extends({}, m, {
              objective: E,
              promotedObjectType: f,
              destinationType: d,
            }),
          )),
          (T = o("AdsODAXStoreUtils").maybeRetainOrDefaultPageID(
            f,
            T,
            (n = S != null ? S : s) != null ? n : l,
          )),
          (T = o("AdsAppMutationUtils").maybeRemoveAppInstallState(T, L)));
        var H =
          T.is_autobid ||
          ((h = v == null ? void 0 : v.is_autobid) != null ? h : !1);
        return (
          (T = o("AdsODAXStoreUtils").maybeClearValueAdjustmentRuleCollectionID(
            L,
            f,
            (y = T.promoted_object) == null ? void 0 : y.variation,
            T.optimization_goal,
            H,
            T,
            (C = T.bid_strategy) != null ? C : "NONE",
            (b = v == null ? void 0 : v.bid_strategy) != null ? b : "NONE",
          )),
          (T = o("AdsODAXStoreUtils").maybeSetConversionValueExpressionSpec(
            H,
            L,
            f,
            T,
          )),
          (T = o("PromoChannelAdsManagerUtils").maybeResetForPromoChannel(
            f,
            T,
          )),
          (T = u(T, L, f, p)),
          (T = c(T, L, f, p)),
          (f === r("AdsPromotedObjectTypes").MESSENGER ||
            f === r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES) &&
            R != null &&
            (v == null ? void 0 : v.collaborative_ads_partner_info) != null &&
            (T = r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.product_set_id.set(R, T)),
          T
        );
      });
    }
    ((l.maybeSetTargetingExpansion = e),
      (l.maybeSetDestinationForVideo = s),
      (l.adsCampaignSetChannelReducerFn = d));
  },
  98,
);
