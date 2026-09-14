__d(
  "AdsUEditorAdgroupSetPartnershipAdsOrganicPlacementsReducerPlugin",
  [
    "AdsMutators",
    "AdsPartnershipAdsOrganicPlacementsSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPartnershipAdsOrganicPlacementsDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsPartnershipAdsOrganicPlacementsSpecMutators",
              ).setPartnershipAdsOrganicPostPlacementCustomizations(
                e,
                t.placementCustomizationsData,
              );
            });
          },
          r("AdsUEditorAdgroupSetPartnershipAdsOrganicPlacementsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
