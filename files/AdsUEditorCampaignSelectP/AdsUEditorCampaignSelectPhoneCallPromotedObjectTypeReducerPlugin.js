__d(
  "AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsCallAdsCampaignBudgetPluginCommon",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsProfileVisitSABRBudgetRestoreUtils",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "LeadAdsUpsellNuxUtils",
    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
        function (e) {
          var t = e.campaignGroup;
          return t;
        },
      ),
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignGroupsByCampaignID: e,
            account: r("adsUEditorAccountSelector"),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = t.campaignIDs,
              i = n.account,
              l = n.campaignGroupsByCampaignID,
              s = n.eligibilityInformation,
              u = babelHelpers.extends({}, s, {
                promotedObjectType: t.promotedObjectType,
                isClickToCallAds: !0,
              }),
              c = o("AdsMutators").mutateEach(e, a, function (e, n) {
                var a,
                  s = e,
                  c = l.get(n),
                  d = c.objective;
                ((s = o("AdsMutators").chain(
                  (a = r("AdsCampaignRecordAccessors")).promoted_object.delete,
                  a.targeting.user_os.delete,
                  a.targeting.user_device.delete,
                  a.targeting.is_whatsapp_destination_ad.delete,
                  a.targeting.app_install_state.delete,
                  a.destination_type.set(r("AdCampaignDestination").PHONE_CALL),
                  a.optimization_goal.set(
                    r("AdsAPIOptimizationGoals").LINK_CLICKS,
                  ),
                  a.is_dynamic_creative_optimization.set(!1),
                  a.is_dynamic_creative.set(!1),
                )(s)),
                  (s = o(
                    "AdsCallAdsCampaignBudgetPluginCommon",
                  ).maybeSetDefaultBudgetWhenSwitchingToCalls(
                    s,
                    t.callAdsBudgetRecommendation,
                  )),
                  (s = o(
                    "LeadAdsUpsellNuxUtils",
                  ).maybeSetCallAdsBusinessHourAdScheduleForCampaign(
                    s,
                    o("AdsAPICampaignRecordUtils").getDestinationType(s),
                    t.bulkBudgetMode === "daily" ? "daily" : "lifetime",
                    c.budget_strategy === "CAMPAIGN_FLEX_BUDGET",
                  )));
                var m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  d,
                  s,
                );
                s = o(
                  "AdsUEditorCampaignMutators",
                ).updateConversionWindowLength(s, d, m);
                var p = r("AdsCampaignOptimizationPluginResolver").resolve({
                    objective: d,
                    promotedObjectType: m,
                    destinationType: o(
                      "AdsAPICampaignRecordUtils",
                    ).getDestinationType(s),
                  }),
                  _ = r(
                    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
                  )(i, c, s);
                return (
                  (s = o(
                    "AdsOptimizationMutationUtils",
                  ).resetOptimizationRelatedFields(i, s, p, d, _, void 0)),
                  (s = o("AdsPlacementReducerUtils").resetPlacement(s, u)),
                  s
                );
              });
            return o(
              "AdsProfileVisitSABRBudgetRestoreUtils",
            ).restoreSABRDefaultedBudgets(c, a);
          },
          o("AdsUEditorCampaignSelectPhoneCallPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
