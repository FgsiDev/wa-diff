__d(
  "AdsUEditorCampaignDeliveryChangeDeliveryTypeReducerPlugin",
  [
    "AdFLEXConfig",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeDeliveryTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "DayPartingUtils",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var a, i;
                if (
                  (r("AdFLEXConfig") == null ||
                  (a = r("AdFLEXConfig").get()) == null
                    ? void 0
                    : a.allowNullPacingType) === !0
                ) {
                  var l;
                  i = o("DayPartingUtils").setPacingType(
                    Array.from((l = e.pacing_type) != null ? l : []),
                    t.pacingType === "no_pacing",
                    t.pacingType === "probabilistic_pacing_v2",
                  );
                } else {
                  var s = r("nullthrows")(e.pacing_type);
                  i = o("DayPartingUtils").setPacingType(
                    s.toJS(),
                    t.pacingType === "no_pacing",
                    t.pacingType === "probabilistic_pacing_v2",
                  );
                }
                return r("AdsCampaignRecordAccessors").pacing_type.set(
                  r("immutable").List(i),
                  e,
                );
              },
            );
          },
          o("AdsUEditorCampaignDeliveryChangeDeliveryTypeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
