__d(
  "AdsUEditorCampaignSetAdvantageAudienceReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdvantageAudienceReducerUtils",
    "AdsMutators",
    "AdsTargetingAudienceEditorQESelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupBulkSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetAdvantageAudienceActionFlux",
    "AdsUEditorOpportunityScoreCampaignSetAdvantageAudienceActionFlux",
    "adsTargetingFlatPageSetIDsSelector",
    "adsTargetingRelaxationRolloutSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorPcaUnificationSelectors",
    "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            bulkPromotedPageID: o(
              "AdsUEditorCampaignGroupBulkSelectors",
            ).selectorByCampaignGroupFn(
              o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID,
            ),
            flatPageSetIDsLoadObject: r("adsTargetingFlatPageSetIDsSelector"),
            campaignIDToRegulatedCategoriesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
            targetingTypeIsRetargeting: r(
              "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
            ),
            campaignIDToBuyingTypeMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
            objectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            containsAccountExclusionRule: o(
              "adsTargetingRelaxationRolloutSelectors",
            ).containsAccountExclusionRuleSelector,
            passAdvantageAudienceQE: o("AdsTargetingAudienceEditorQESelectors")
              .passAdvantageAudienceQESelector,
            accountInfo: r("adsUEditorAccountSelector"),
            isL3ProductCatalogPresent: o("adsUEditorPcaUnificationSelectors")
              .isL3ProductCatalogPresentSelector,
          },
          function (e, t, n) {
            var a = n.accountInfo,
              i = n.bulkPromotedPageID,
              l = n.campaignIDToBuyingTypeMap,
              s = n.campaignIDToRegulatedCategoriesMap,
              u = n.containsAccountExclusionRule,
              c = n.flatPageSetIDsLoadObject,
              d = n.isL3ProductCatalogPresent,
              m = n.objectiveMap,
              p = n.passAdvantageAudienceQE,
              _ = n.targetingTypeIsRetargeting;
            return t.campaignIDs == null || t.hostID == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, n) {
                  var f,
                    g,
                    h =
                      (f = t.regulatedCategories) != null
                        ? f
                        : (g = s.get(n)) == null
                          ? void 0
                          : g.toArray();
                  return o(
                    "AdsAdvantageAudienceReducerUtils",
                  ).setAdvantageAudienceAndRelatedEffectsOnSpec({
                    campaign: e,
                    bulkPromotedPageID: i,
                    flatPageSetIDsLoadObject: c,
                    objective: m.get(n, r("AdsAPIObjectives").NONE),
                    regulatedCategories: h,
                    isL3ProductCatalogPresent: d,
                    targetingSpec: t.targetingSpec,
                    targetingAutomationFromAction: t.targetingAutomation,
                    deleteAutomation: t.deleteAutomation,
                    targetingTypeIsRetargeting: _,
                    buyingType: l.get(n),
                    canUseAdvantageAudience:
                      (!u ||
                        o(
                          "adsTargetingRelaxationRolloutSelectors",
                        ).passesEnableAutomationForPharmaAdvertiser()) &&
                      p,
                    accountInfo: a,
                    defaultMinAge: t.defaultMinAge,
                    enableAutomationForPharmaAdvertiser: o(
                      "adsTargetingRelaxationRolloutSelectors",
                    ).passesEnableAutomationForPharmaAdvertiser(),
                  });
                });
          },
          [
            r("AdsUEditorCampaignSetAdvantageAudienceActionFlux").actionType,
            r(
              "AdsUEditorOpportunityScoreCampaignSetAdvantageAudienceActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
