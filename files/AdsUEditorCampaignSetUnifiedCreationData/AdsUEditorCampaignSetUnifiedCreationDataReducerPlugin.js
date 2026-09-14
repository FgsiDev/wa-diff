__d(
  "AdsUEditorCampaignSetUnifiedCreationDataReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignMutatorUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPageStore",
    "AdsPlacementAPISpecReaderUtils",
    "AdsTargetingAsSignalUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupRegulatedCategorySelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetUnifiedCreationDataActionFlux",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorSelectors",
    "CallOptimizationGoalGating",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "adsTargetingLocationEpdAreLocationsEU",
    "adsUEditorAccountSelector",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            hasRegulatedCategories: o(
              "AdsUEditorCampaignGroupRegulatedCategorySelectors",
            ).isSelectedRegulatedCategorySelector,
            account: r("adsUEditorAccountSelector"),
            getPage: r("AdsPageStore").getSelector,
            objectives: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            bulkIsODAXCampaignGroup: o(
              "AdsUEditorSelectors",
            ).campaignGroup.bulkByAccessorToJS(function (e) {
              return e.is_odax_campaign_group;
            }),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bulkIsODAXCampaignGroup,
              l = n.getPage,
              s = n.hasRegulatedCategories,
              u = n.objectives,
              c = t.destinationType;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").destination_type.set(
                  t.isL1MultiDestination === !0 &&
                    !(
                      c === r("AdCampaignDestination").WHATSAPP &&
                      r("qex")._("4553") === !0
                    )
                    ? e.destination_type
                    : c,
                ),
                r("AdsCampaignRecordAccessors").is_dc_follow_optimized.set(!1),
                r("AdsCampaignRecordAccessors").targeting
                  .is_whatsapp_destination_ad.delete,
                function (e) {
                  return o(
                    "AdsUEditorMessagingDestinationUtils",
                  ).isMultiDestinationWithWhatsApp(c) ||
                    (!s &&
                      o(
                        "AdsUEditorMessagingDestinationUtils",
                      ).isMessengerOrInstagramOrComboDestination(c))
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.targeting_optimization.set("expansion_all", e)
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.targeting_optimization.set("none", e);
                },
                function (e) {
                  var t,
                    n = o(
                      "AdsTargetingAsSignalUtils",
                    ).isTargetingAsSignalBitSetForType(
                      e.targeting_as_signal,
                      0,
                    ),
                    a =
                      ((t = e.targeting) == null ||
                      (t = t.targeting_automation) == null
                        ? void 0
                        : t.advantage_audience) === 1;
                  return n && !a
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.targeting_optimization.delete(e)
                    : e;
                },
                function (e) {
                  var n,
                    s,
                    d = u.get(e.id),
                    m =
                      d === r("AdsAPIObjectives").MESSAGES ||
                      d === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
                      d === r("AdsAPIObjectives").OUTCOME_SALES ||
                      d === r("AdsAPIObjectives").OUTCOME_LEADS ||
                      d === r("AdsAPIObjectives").OUTCOME_AWARENESS,
                    p = o(
                      "ClickToMessageAdoptionPerformanceLongTermHoldout",
                    ).isAccountInEpdJurisdiction(),
                    _ =
                      (n = e.targeting) == null || (n = n.geo_locations) == null
                        ? void 0
                        : n.toJS(),
                    f =
                      o(
                        "adsTargetingLocationEpdAreLocationsEU",
                      ).adsTargetingLocationEpdOrTba(_) &&
                      o(
                        "AdsUEditorMessagingDestinationUtils",
                      ).destinationIncludesWhatsApp(c),
                    g =
                      p ||
                      f ||
                      (t.pageID != null &&
                        ((s = l(t.pageID)) == null
                          ? void 0
                          : s.is_messaging_light_switch_enabled) === !0),
                    h = t.isL1MultiDestination === !0,
                    y =
                      !h &&
                      c ===
                        r("AdCampaignDestination")
                          .MESSAGING_INSTAGRAM_DIRECT_WHATSAPP &&
                      (e.optimization_goal ===
                        r("AdsAPIOptimizationGoals")
                          .MESSAGING_PURCHASE_CONVERSION ||
                        (e.optimization_goal ===
                          r("AdsAPIOptimizationGoals").LEAD_GENERATION &&
                          (d === r("AdsAPIObjectives").MESSAGES ||
                            d === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)));
                  return m &&
                    !h &&
                    (y ||
                      (g &&
                        ((c === r("AdCampaignDestination").WHATSAPP &&
                          r("qex")._("4675")) ||
                          o(
                            "AdsUEditorMessagingDestinationUtils",
                          ).isMultiDestinationWithWhatsApp(c))))
                    ? o(
                        "AdsCampaignMutatorUtils",
                      ).setOptimizationForMessengerandInstagramPromotedObject(
                        e,
                        u.get(e.id),
                        a,
                        i,
                      )
                    : e;
                },
                function (e) {
                  var n = o(
                    "AdsPlacementAPISpecReaderUtils",
                  ).convertCampaignToPlacementSpec(e);
                  return t.pageID != null &&
                    o(
                      "CallOptimizationGoalGating",
                    ).shouldDefaultForCallOptimization(
                      a,
                      l(t.pageID),
                      u.get(e.id),
                      r("AdsCampaignRecordAccessors").destination_type.get(e),
                      [n],
                    )
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").optimization_goal.set(
                          r("AdsAPIOptimizationGoals").MEANINGFUL_CALL_ATTEMPT,
                        ),
                      )(e)
                    : e;
                },
              )(e);
            });
          },
          o("AdsUEditorCampaignSetUnifiedCreationDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
