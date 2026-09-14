__d(
  "AdsUEditorCampaignSelectDonationPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsOptimizationMutationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectDonationPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "LoadObject",
    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
    "adsUEditorAccountSelector",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.account,
              l = n.campaignGroupMap,
              s = n.eligibilityInformation,
              u = babelHelpers.extends({}, s, {
                promotedObjectType: r("AdsPromotedObjectTypes").DONATION,
                objectStoreURL: null,
                containsOffer: !1,
              });
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                var n = r("nullthrows")(l.get(t)),
                  s = r("LoadObject").withValue(n, { creatorModuleID: i.id }),
                  c = r(
                    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
                  )(a, n, e);
                c.prefilledOptimizationGoal = r(
                  "AdsAPIOptimizationGoals",
                ).LINK_CLICKS;
                var d = r("AdsCampaignOptimizationPluginResolver").resolve({
                  objective: n.objective,
                  promotedObjectType: r("AdsPromotedObjectTypes").DONATION,
                  destinationType: o(
                    "AdsAPICampaignRecordUtils",
                  ).getDestinationType(e),
                });
                return o("AdsMutators").chain(
                  function (e) {
                    var t;
                    return o("AdsMutators").chain(
                      (t = r("AdsCampaignRecordAccessors")).targeting
                        .is_whatsapp_destination_ad.delete,
                      t.targeting.user_os.delete,
                      t.targeting.user_device.delete,
                      t.targeting.app_install_state.delete,
                    )(e);
                  },
                  function (e) {
                    return o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").promoted_object.delete,
                      r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.custom_event_type.set("DONATE"),
                    )(e);
                  },
                  function (e) {
                    return o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(
                      n,
                    )
                      ? e
                      : o(
                          "AdsCampaignBudgetMutationUtils",
                        ).resetBudgetToDefault(a, n.objective, void 0, e, s);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorCampaignMutators",
                    ).updateConversionWindowLength(
                      e,
                      n.objective,
                      r("AdsPromotedObjectTypes").DONATION,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsOptimizationMutationUtils",
                    ).resetOptimizationRelatedFields(
                      a,
                      e,
                      d,
                      n.objective,
                      c,
                      void 0,
                    );
                  },
                  function (e) {
                    return o("AdsPlacementReducerUtils").resetPlacement(e, u);
                  },
                  r("AdsCampaignRecordAccessors").optimization_goal.set(
                    r("gkx")("21757")
                      ? r("AdsAPIOptimizationGoals").ONSITE_CONVERSIONS
                      : r("AdsAPIOptimizationGoals").LINK_CLICKS,
                  ),
                  r("AdsCampaignRecordAccessors").destination_type.set(
                    r("AdCampaignDestination").DONATION,
                  ),
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSelectDonationPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
