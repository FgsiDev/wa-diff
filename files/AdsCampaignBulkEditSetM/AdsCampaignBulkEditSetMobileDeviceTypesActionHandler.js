__d(
  "AdsCampaignBulkEditSetMobileDeviceTypesActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsBulkEditChangeMobileDeviceTypeActionFlux",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsBulkEditChangeMobileDeviceTypeActionFlux").actionType,
        mutate: function (t, n) {
          var e = t.adObjectIDs,
            a = t.userOS,
            i = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                e,
              ),
              e,
              function (e, t) {
                return o("AdsPlacementReducerUtils").updatePlacementSpec(
                  o("AdsPlacementReducerUtils").setMobileDeviceType(
                    e,
                    a.first(),
                  ),
                );
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys").MOBILE_DEVICE_TYPES,
            e,
            n,
            i,
            r("AdsCampaignRecordAccessors").targeting.user_os.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
