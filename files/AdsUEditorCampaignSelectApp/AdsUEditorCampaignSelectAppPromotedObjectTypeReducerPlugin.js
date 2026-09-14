__d(
  "AdsUEditorCampaignSelectAppPromotedObjectTypeReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementReducerUtils",
    "AdsProfileVisitSABRBudgetRestoreUtils",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AppAndWebLPVUtils",
    "adsCampaignIsMobileAppEngagementSupportedObjective",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            objectives: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.campaignGroupMap,
              i = n.eligibilityInformation,
              l = n.objectives,
              s = o("AdsMutators").mutateEach(
                e,
                t.campaignIDs,
                function (e, n) {
                  var s,
                    u = a.get(n),
                    c = r("nullthrows")(l.get(n)),
                    d = o("AdsODAXUtils").maybeTranslateObjective(
                      c,
                      t.promotedObjectType,
                      e.optimization_goal,
                    ),
                    m = babelHelpers.extends({}, i, {
                      promotedObjectType: t.promotedObjectType,
                      objectStoreURL: null,
                      containsOffer: !1,
                    });
                  return o("AdsMutators").chain(
                    function (e) {
                      return o("AdsPlacementReducerUtils").resetPlacement(e, m);
                    },
                    function (e) {
                      return c === r("AdsAPIObjectives").OUTCOME_SALES
                        ? o(
                            "AdsUEditorCampaignMutators",
                          ).updateConversionWindowLength(
                            e,
                            c,
                            t.promotedObjectType,
                          )
                        : o(
                            "AdsUEditorCampaignMutators",
                          ).updateConversionWindowLength(
                            e,
                            d,
                            t.promotedObjectType,
                          );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorCampaignMutators",
                      ).updateOptimizationGoal(e, d, t.promotedObjectType);
                    },
                    (s = r("AdsCampaignRecordAccessors")).destination_type
                      .delete,
                    s.live_video_ad_campaign_config.delete,
                    s.targeting.is_whatsapp_destination_ad.delete,
                    s.value_rule_set_id.delete,
                    s.value_adjustment_rule_collection_id.delete,
                    s.value_rules_entry_point.delete,
                    s.value_rules_spec.delete,
                    s.conversion_value_expression_spec.delete,
                    function (e) {
                      return o(
                        "AdsODAXUtils",
                      ).ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL.has(c) &&
                        c !== r("AdsAPIObjectives").OUTCOME_SALES
                        ? o("AdsMutators").chain(
                            r(
                              "AdsCampaignRecordAccessors",
                            ).is_dynamic_creative_optimization.set(!1),
                            r(
                              "AdsCampaignRecordAccessors",
                            ).is_dynamic_creative.set(!1),
                          )(e)
                        : e;
                    },
                    function (e) {
                      return o(
                        "AdsODAXUtils",
                      ).ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL.has(c)
                        ? r(
                            "AdsCampaignRecordAccessors",
                          ).targeting.targeting_optimization.set(
                            "expansion_all",
                            e,
                          )
                        : e;
                    },
                    function (e) {
                      var n = r(
                        "adsCampaignIsMobileAppEngagementSupportedObjective",
                      )(d);
                      if (
                        n &&
                        o("AdsPromotedObjectAppUtils").isAppType(
                          t.promotedObjectType,
                        )
                      ) {
                        var a =
                          o("AppAndWebLPVUtils").shouldUseAppLpv() &&
                          c === r("AdsAPIObjectives").LINK_CLICKS &&
                          t.promotedObjectType ===
                            r("AdsPromotedObjectTypes").MOBILE_APP &&
                          e.optimization_goal ===
                            r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS;
                        return a
                          ? r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.app_install_state.delete(e)
                          : r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.app_install_state.set("installed", e);
                      }
                      return e;
                    },
                    function (e) {
                      var t,
                        n,
                        a =
                          (t = e.promoted_object) == null
                            ? void 0
                            : t.place_page_set_id,
                        i =
                          (u == null
                            ? void 0
                            : u.collaborative_ads_partner_info) != null &&
                          r("justknobx")._("2728")
                            ? (n = e.promoted_object) == null
                              ? void 0
                              : n.product_set_id
                            : null,
                        l = o("AdsMutators").chain(
                          r("AdsCampaignRecordAccessors").promoted_object
                            .delete,
                          r(
                            "AdsCampaignRecordAccessors",
                          ).promoted_object.place_page_set_id.set(a),
                          r(
                            "AdsCampaignRecordAccessors",
                          ).promoted_object.application_id.set(null),
                          r(
                            "AdsCampaignRecordAccessors",
                          ).promoted_object.object_store_url.set(null),
                        )(e);
                      return i != null
                        ? r(
                            "AdsCampaignRecordAccessors",
                          ).promoted_object.product_set_id.set(i, l)
                        : l;
                    },
                  )(e);
                },
              );
            return o(
              "AdsProfileVisitSABRBudgetRestoreUtils",
            ).restoreSABRDefaultedBudgets(s, t.campaignIDs);
          },
          o("AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
