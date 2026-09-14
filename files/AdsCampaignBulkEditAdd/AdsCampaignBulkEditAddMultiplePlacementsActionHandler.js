__d(
  "AdsCampaignBulkEditAddMultiplePlacementsActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsUEditorCampaignAddMultiplePlacementsActionFlux",
    "AdsUEditorCampaignAddMultiplePlacementsReducerPlugin",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: r("AdsUEditorCampaignAddMultiplePlacementsActionFlux").actionType,
        fluxInputs: {
          eligibilityInformation: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationSelector,
        },
        mutate: function (t, n, a) {
          var e = a.eligibilityInformation,
            i = r(
              "AdsUEditorCampaignAddMultiplePlacementsReducerPlugin",
            ).reduce.reduceFn(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                t.campaignIDs,
              ),
              t,
              { eligibilityInformation: e },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys").PLACEMENT,
            t.campaignIDs,
            n,
            i,
            r("AdsCampaignRecordAccessors").targeting.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
