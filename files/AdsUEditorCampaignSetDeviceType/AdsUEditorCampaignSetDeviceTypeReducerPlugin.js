__d(
  "AdsUEditorCampaignSetDeviceTypeReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetDeviceTypeActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              r = t.value;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                o("AdsPlacementReducerUtils").setMobileDeviceType(e, r),
              );
            });
          },
          o("AdsUEditorCampaignSetDeviceTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
