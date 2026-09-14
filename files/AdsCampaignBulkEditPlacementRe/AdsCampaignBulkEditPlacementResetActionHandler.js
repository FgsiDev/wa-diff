__d(
  "AdsCampaignBulkEditPlacementResetActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsBulkEditPlacementResetActionFlux",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignSelectors",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsBulkEditPlacementResetActionFlux").actionType,
        fluxInputs: {
          eligibilityInformationMap: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationMap,
        },
        mutate: function (t, n, a) {
          var e = a.eligibilityInformationMap,
            i = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                t.campaignIDs,
              ),
              t.campaignIDs,
              function (t, n) {
                return o("AdsPlacementReducerUtils").resetPlacement(
                  t,
                  r("nullthrows")(e.get(n)),
                );
              },
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
