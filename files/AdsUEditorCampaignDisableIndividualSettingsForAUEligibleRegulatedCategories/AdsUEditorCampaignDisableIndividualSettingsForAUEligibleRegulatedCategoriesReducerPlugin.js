__d(
  "AdsUEditorCampaignDisableIndividualSettingsForAUEligibleRegulatedCategoriesReducerPlugin",
  [
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignDisableIndividualSettingsForAUEligibleRegulatedCategoriesActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignIDToRegulatedCategoriesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
          },
          function (e, t, n) {
            var r = n.campaignIDToRegulatedCategoriesMap;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t;
              return o(
                "AdsTargetingPGDIndividualSettingUtils",
              ).maybeDisableIndividualSettingsForAUEligibleRegulatedCategories(
                (t = r.get(e.id)) == null ? void 0 : t.toArray(),
              )(e);
            });
          },
          r(
            "AdsUEditorCampaignDisableIndividualSettingsForAUEligibleRegulatedCategoriesActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
