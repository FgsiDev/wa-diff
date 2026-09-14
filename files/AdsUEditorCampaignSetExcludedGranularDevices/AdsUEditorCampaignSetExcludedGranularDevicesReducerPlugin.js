__d(
  "AdsUEditorCampaignSetExcludedGranularDevicesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetExcludedGranularDevicesActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.addedDevices,
              a = t.campaignIDs,
              i = t.removedDevices;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t = r("immutable").Set(e.targeting.excluded_user_device),
                a = t.subtract(i).union(n);
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.excluded_user_device.set(r("immutable").List(a), e),
              );
            });
          },
          o("AdsUEditorCampaignSetExcludedGranularDevicesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
