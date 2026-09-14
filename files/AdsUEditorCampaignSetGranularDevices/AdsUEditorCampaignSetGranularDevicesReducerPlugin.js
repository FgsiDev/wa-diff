__d(
  "AdsUEditorCampaignSetGranularDevicesReducerPlugin",
  [
    "AdsAppUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementReducerUtils",
    "AdsPlacementUIUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGranularDevicesActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.addedDevices,
              a = t.removedDevices;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t = r("immutable").Set(e.targeting.user_device);
              if (t.isEmpty() && !(n.isEmpty() && a.isEmpty())) {
                var i = o(
                    "AdsPlacementAPISpecReaderUtils",
                  ).convertCampaignToPlacementSpec_LEGACY(e),
                  l = !!e.targeting.direct_install_devices,
                  s = o("AdsPlacementUIUtils").getDeviceType(i, l);
                t = r("immutable").Set(
                  r("AdsAppUtils").getSupportedDevicesByDeviceType(s),
                );
              }
              var u = t.subtract(a).union(n);
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                r("AdsCampaignRecordAccessors").targeting.user_device.set(
                  r("immutable").List(u),
                  e,
                ),
              );
            });
          },
          o("AdsUEditorCampaignSetGranularDevicesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
