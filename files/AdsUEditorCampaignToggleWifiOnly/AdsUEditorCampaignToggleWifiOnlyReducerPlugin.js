__d(
  "AdsUEditorCampaignToggleWifiOnlyReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignToggleWifiOnlyDataActionFlux",
    "AdsWirelessCarriers",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                r("AdsCampaignRecordAccessors").targeting.wireless_carrier.set(
                  t.isWifiEnabled
                    ? r("immutable").List([r("AdsWirelessCarriers").WIFI])
                    : r("immutable").List(),
                  e,
                ),
              );
            });
          },
          o("AdsUEditorCampaignToggleWifiOnlyDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
