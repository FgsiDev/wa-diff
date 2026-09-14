__d(
  "AdsUEditorCampaignResetTargetingAutomationIndividualSettingReducerPlugin",
  [
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignResetTargetingAutomationIndividualSettingActionFlux",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToRegulatedCategoriesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
            campaignIDToObjectivesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
          },
          function (e, t, n) {
            var r = n.account,
              a = n.campaignIDToObjectivesMap,
              i = n.campaignIDToRegulatedCategoriesMap;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t;
              return o(
                "AdsTargetingPGDIndividualSettingUtils",
              ).maybeApplyTargetingAutomationIndividualSetting(
                r,
                e,
                a.get(e.id),
                (t = i.get(e.id)) == null ? void 0 : t.toArray(),
              );
            });
          },
          r(
            "AdsUEditorCampaignResetTargetingAutomationIndividualSettingActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
