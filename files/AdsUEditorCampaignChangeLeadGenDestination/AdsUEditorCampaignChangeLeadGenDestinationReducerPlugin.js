__d(
  "AdsUEditorCampaignChangeLeadGenDestinationReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppMutationUtils",
    "AdsCallAdsCampaignBudgetPluginCommon",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsLeadGenDestinationType",
    "AdsMutators",
    "AdsODAXCampaignReducerUtils",
    "AdsODAXStoreUtils",
    "AdsOptimizationGoalUtils",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignChangeLeadGenDestinationActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "LeadAdsUpsellNuxUtils",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
      function (e) {
        var t = e.campaignGroup;
        return t;
      },
    );
    function s(e, t) {
      return t.leadGenDestination !==
        r("AdsLeadGenDestinationType").INSTANT_FORM
        ? o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
            r("AdsCampaignRecordAccessors").promoted_object
              .offline_conversion_data_set_id.delete,
          )(e)
        : e;
    }
    var u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsByCampaignID: e,
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a,
              i = n.account,
              l = n.campaignGroupsByCampaignID,
              u = n.eligibilityInformation,
              c = babelHelpers.extends(
                {},
                u,
                t.shouldSetOnAdDestination === !0
                  ? {
                      promotedObjectType: r("AdsPromotedObjectTypes").ON_AD,
                      destinationType: r("AdCampaignDestination").ON_AD,
                    }
                  : {},
                {
                  isClickToCallAds:
                    t.leadGenDestination ===
                    r("AdsLeadGenDestinationType").PHONE_CALL,
                },
              ),
              d = r("AdsCampaignOptimizationPluginResolver").resolve({
                objective: c.objective,
                promotedObjectType:
                  (a = c.promotedObjectType) != null
                    ? a
                    : r("AdsPromotedObjectTypes").NONE,
              });
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var a = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_id.get(e),
                  u = l.get(n),
                  m =
                    (u == null ? void 0 : u.budget_strategy) ===
                    "CAMPAIGN_FLEX_BUDGET";
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsOptimizationMutationUtils",
                    ).resetOptimizationRelatedFields(
                      i,
                      e,
                      d,
                      c.objective,
                      {
                        account: i,
                        campaign: e,
                        productCatalogID: null,
                        productSet: null,
                        hasBackingApplication: !1,
                      },
                      t.shouldSetOnAdDestination === !0
                        ? r("AdsPromotedObjectTypes").PHONE_CALL
                        : void 0,
                    );
                  },
                  t.leadGenDestination ===
                    r("AdsLeadGenDestinationType").PHONE_CALL
                    ? r("AdsCampaignRecordAccessors").destination_type.set(
                        r("AdCampaignDestination").PHONE_CALL,
                      )
                    : t.shouldSetOnAdDestination === !0
                      ? r("AdsCampaignRecordAccessors").destination_type.set(
                          r("AdCampaignDestination").ON_AD,
                        )
                      : r("AdsCampaignRecordAccessors").destination_type.delete,
                  t.leadGenDestination ===
                    r("AdsLeadGenDestinationType").PHONE_CALL
                    ? r("AdsCampaignRecordAccessors").optimization_goal.set(
                        r("AdsAPIOptimizationGoals").QUALITY_CALL,
                      )
                    : r("AdsCampaignRecordAccessors").optimization_goal.set(
                        o(
                          "AdsOptimizationGoalUtils",
                        ).shouldDefaultToQualityLeadOptimizationGoal()
                          ? r("AdsAPIOptimizationGoals").QUALITY_LEAD
                          : r("AdsAPIOptimizationGoals").LEAD_GENERATION,
                      ),
                  function (e) {
                    return o("AdsPlacementReducerUtils").resetPlacement(e, c);
                  },
                  function (e) {
                    if (
                      t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").PHONE_CALL ||
                      o(
                        "AdsOptimizationGoalUtils",
                      ).shouldDefaultToQualityLeadOptimizationGoal()
                    ) {
                      var n,
                        a = (n = r(
                          "AdsCampaignRecordAccessors",
                        )).bid_strategy.set(
                          r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
                          e,
                        );
                      return (
                        (a = n.is_autobid.set(!0, a)),
                        (a = n.cost_bidding_mode.delete(a)),
                        n.bid_amount.delete(a)
                      );
                    }
                    return e;
                  },
                  function (e) {
                    return o(
                      "AdsODAXCampaignReducerUtils",
                    ).maybeSetTargetingExpansion(
                      e,
                      t.shouldSetOnAdDestination === !0,
                      "none",
                    );
                  },
                  r(
                    "AdsCampaignRecordAccessors",
                  ).is_dynamic_creative_optimization.set(!1),
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                      ? o(
                          "AdsCallAdsCampaignBudgetPluginCommon",
                        ).maybeSetDefaultBudgetWhenSwitchingToCalls(
                          e,
                          t.callAdsBudgetRecommendation,
                        )
                      : e;
                  },
                  function (e) {
                    return t.leadGenDestination ===
                      r("AdsLeadGenDestinationType").PHONE_CALL
                      ? o(
                          "LeadAdsUpsellNuxUtils",
                        ).maybeSetCallAdsBusinessHourAdScheduleForCampaign(
                          e,
                          r("AdsPromotedObjectTypes").PHONE_CALL,
                          t.bulkBudgetMode === "daily" ? "daily" : "lifetime",
                          m,
                        )
                      : e;
                  },
                  r("AdsCampaignRecordAccessors").is_dynamic_creative.set(!1),
                  t.shouldSetOnAdDestination === !0
                    ? r("AdsCampaignRecordAccessors").promoted_object.delete
                    : r("AdsCampaignRecordAccessors").promoted_object
                        .product_set_id.delete,
                  function (e) {
                    return s(e, t);
                  },
                  function (e) {
                    if (
                      c.objective === o("AdsAPIObjectives").OUTCOME_LEADS ||
                      t.leadGenDestination ===
                        r("AdsLeadGenDestinationType").PHONE_CALL
                    ) {
                      var n;
                      return o("AdsODAXStoreUtils").maybeRetainOrDefaultPageID(
                        (n = c.promotedObjectType) != null
                          ? n
                          : r("AdsPromotedObjectTypes").NONE,
                        e,
                        a,
                      );
                    }
                    return e;
                  },
                  function (e) {
                    return o("AdsAppMutationUtils").maybeRemoveAppInstallState(
                      e,
                      c.objective,
                    );
                  },
                  r("AdsCampaignRecordAccessors").value_rule_set_id.delete,
                  r("AdsCampaignRecordAccessors")
                    .value_adjustment_rule_collection_id.delete,
                  r("AdsCampaignRecordAccessors").value_rules_entry_point
                    .delete,
                  r("AdsCampaignRecordAccessors").value_rules_spec.delete,
                  r("AdsCampaignRecordAccessors")
                    .conversion_value_expression_spec.delete,
                  function (e) {
                    var t;
                    return o(
                      "AdsCampaignLiveVideoAdsUtils",
                    ).maybeSetLiveVideoAdType(
                      e,
                      u == null || (t = u.promoted_object) == null
                        ? void 0
                        : t.live_video_destination,
                    );
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignChangeLeadGenDestinationActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
