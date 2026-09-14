__d(
  "AdsUEditorCampaignTuneTargetingSpecWithCountriesReducerPlugin",
  [
    "AdsRegulatedCategory",
    "AdsSpecialAdCategoryMutateCampaignBudgetPercentage",
    "AdsSpecialAdCategoryMutateCampaignTargeting",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupTuneAudiencesActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsTargetingRelaxationRolloutSelectors",
    "adsUEditorAccountSelector",
    "areEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToObjectiveMap: (s = o(
              "AdsUEditorCampaignSelectors",
            )).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            campaignIDToRegulatedCategoriesMap: s.adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
            campaignIDToBuyingTypeMap: s.adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
            campaignIdToTargetingOptimisationMap: s.adObjectsList.mapTransform(
              o("AdsUEditorCampaignAdObjectsUtils")
                .getCampaignTargetingOptimization,
            ),
            eligibilityInformationMap: s.eligibilityInformationMap,
          },
          function (t, n, a) {
            var i = a.account,
              l = a.campaignIDToBuyingTypeMap,
              s = a.campaignIDToObjectiveMap,
              u = a.campaignIDToRegulatedCategoriesMap,
              c = a.campaignIdToTargetingOptimisationMap,
              d = a.eligibilityInformationMap;
            if (
              n.campaignIDs == null ||
              (e || (e = r("areEqual")))(n.specialAdCategories, [
                r("AdsRegulatedCategory").NONE,
              ]) ||
              n.specialAdCategories.length === 0 ||
              n.specialAdCategoryCountries.length === 0
            )
              return r("AdsSpecialAdCategoryMutateCampaignBudgetPercentage")(
                t,
                n.campaignIDs,
                n.specialAdCategories,
              );
            var m = o(
              "AdsSpecialAdCategoryMutateCampaignTargeting",
            ).AdsSpecialAdCategoryMutateCampaignTargeting(
              t,
              i.account_id,
              n.campaignIDs,
              n.hostID,
              n.specialAdCategories,
              n.specialAdCategoryCountries,
              {
                account: i,
                campaignIDToObjectiveMap: s,
                campaignIDToRegulatedCategoriesMap: u,
                campaignIDToBuyingTypeMap: l,
                campaignIdToTargetingOptimisationMap: c,
                enableAutomationForPharmaAdvertiser: o(
                  "adsTargetingRelaxationRolloutSelectors",
                ).passesEnableAutomationForPharmaAdvertiser(),
                eligibilityInformationMap: d,
              },
            );
            return r("AdsSpecialAdCategoryMutateCampaignBudgetPercentage")(
              m,
              n.campaignIDs,
              n.specialAdCategories,
            );
          },
          r("AdsUEditorCampaignGroupTuneAudiencesActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
