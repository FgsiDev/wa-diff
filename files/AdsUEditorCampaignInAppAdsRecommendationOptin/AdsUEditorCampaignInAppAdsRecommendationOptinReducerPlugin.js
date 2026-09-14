__d(
  "AdsUEditorCampaignInAppAdsRecommendationOptinReducerPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignInAppAdsRecommendationOptinActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "IsAppAdUtils",
    "adsCampaignDeliveryChangeOptimizationGoalMutation",
    "adsUEditorAccountSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            objectives: (e = o(
              "AdsUEditorCampaignSelectors",
            )).adObjectsList.mapTransform(
              (s = o("AdsUEditorCampaignGroupAdObjectsUtils")).getObjective,
            ),
            buyingTypes: e.adObjectsList.mapTransform(s.getBuyingType),
            promotedObjectTypes: e.adObjectsList.mapTransform(
              o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
            ),
            bidStrategyFromCampaignGroup: e.adObjectsList.mapTransform(
              s.getBidStrategy,
            ),
            budgetStrategyFromCampaignGroup: e.adObjectsList.mapTransform(
              s.getBudgetStrategy,
            ),
            pacingTypeFromCampaignGroup: e.adObjectsList.mapTransform(
              s.getPacingType,
            ),
            frequencyControlSpecsFromCampaignGroup:
              e.adObjectsList.mapTransform(s.getFrequencyControlSpecs),
            isIos14PlusApp: e.adObjectsList.mapTransform(
              s.getHasCampaignGroupPromotedApp,
            ),
            liveVideoDestinations: e.adObjectsList.mapTransform(
              s.getLiveVideoDestination,
            ),
            account: r("adsUEditorAccountSelector"),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bidStrategyFromCampaignGroup,
              l = n.budgetStrategyFromCampaignGroup,
              s = n.buyingTypes,
              u = n.frequencyControlSpecsFromCampaignGroup,
              c = n.isIos14PlusApp,
              d = n.liveVideoDestinations,
              m = n.objectives,
              p = n.pacingTypeFromCampaignGroup,
              _ = n.promotedObjectTypes;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var f = r("nullthrows")(m.get(n)),
                  g = c.get(n),
                  h = {
                    bid_strategy: i.get(n),
                    budget_strategy: l.get(n),
                    buying_type: r("nullthrows")(s.get(n)),
                    frequency_control_specs: u.get(n),
                    objective: f,
                    pacing_type: p.get(n),
                    is_ios_14_plus_app: g,
                    promoted_object: { live_video_destination: d.get(n) },
                  },
                  y = r("adsCampaignDeliveryChangeOptimizationGoalMutation")(
                    e,
                    r("AdsAPIOptimizationGoals").VALUE,
                    a,
                    h,
                    _.get(n),
                    t.isNewCampaign,
                    t.defaultConversionWindowLength,
                    t.defaultViewConversionWindowLength,
                    t.defaultEngagedVideoViewWindowLength,
                    !0,
                    !1,
                  );
                if (
                  ((y = o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.custom_event_type.set("AD_IMPRESSION"),
                    r("AdsCampaignRecordAccessors").promoted_object
                      .custom_event_str.delete,
                  )(y)),
                  e.bid_strategy != null &&
                    !r("IsAppAdUtils").isAppVoSupportedBidStrategy(
                      e.bid_strategy,
                    ))
                ) {
                  var C;
                  y = o("AdsMutators").chain(
                    (C = r("AdsCampaignRecordAccessors")).bid_constraints
                      .roas_average_floor.delete,
                    C.bid_strategy.set(
                      r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
                    ),
                    C.is_autobid.set(!0),
                    C.bid_amount.delete,
                    C.cost_bidding_mode.delete,
                  )(y);
                }
                return y;
              },
            );
          },
          o("AdsUEditorCampaignInAppAdsRecommendationOptinActionFlux")
            .actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
