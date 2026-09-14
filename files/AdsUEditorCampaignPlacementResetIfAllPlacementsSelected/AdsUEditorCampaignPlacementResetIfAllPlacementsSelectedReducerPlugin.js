__d(
  "AdsUEditorCampaignPlacementResetIfAllPlacementsSelectedReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignPlacementResetIfAllPlacementsSelectedActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsCampaignPlacementResetMutator",
    "adsUEditorCampaignPlacementAllPositionsSelectedSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            areAllPositionsSelected: o(
              "adsUEditorCampaignPlacementAllPositionsSelectedSelector",
            ).adsUEditorCampaignPlacementAllPositionsAndDevicesSelectedSelector,
          },
          function (e, t, n) {
            var a = n.areAllPositionsSelected,
              i = t.campaignIDs,
              l = t.eligibilityInformation;
            return a
              ? o("AdsMutators").mutateEach(e, i, function (e) {
                  return r("adsCampaignPlacementResetMutator")(e, l);
                })
              : e;
          },
          [
            o(
              "AdsUEditorCampaignPlacementResetIfAllPlacementsSelectedActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
