__d(
  "AdsCampaignBulkEditSetDevicePlatformsActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsBulkEditChangeDevicePlatformsActionFlux",
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
        type: o("AdsBulkEditChangeDevicePlatformsActionFlux").actionType,
        fluxInputs: {
          eligibilityInformationMap: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationMap,
        },
        mutate: function (t, n, a) {
          var e = t.adObjectIDs,
            i = t.devicePlatforms,
            l = a.eligibilityInformationMap,
            s = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                e,
              ),
              e,
              function (e, t) {
                return o("AdsPlacementReducerUtils").updatePlacementSpec(
                  o("AdsPlacementReducerUtils").setDevicePlatform(
                    e,
                    i.toJS(),
                    r("nullthrows")(l.get(t)),
                  ),
                );
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys").DEVICE_PLATFORMS,
            e,
            n,
            s,
            r("AdsCampaignRecordAccessors").targeting.device_platforms.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
