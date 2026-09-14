__d(
  "AdsUEditorCampaignSetDevicePlatformReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetDevicePlatformActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsMutators").chain(
                function (e) {
                  return o("AdsPlacementReducerUtils").setDevicePlatform(
                    e,
                    t.value,
                    t.eligibilityInformation,
                  );
                },
                function (e) {
                  return o("AdsPlacementReducerUtils").updatePlacementSpec(e);
                },
              )(e);
            });
          },
          o("AdsUEditorCampaignSetDevicePlatformActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
