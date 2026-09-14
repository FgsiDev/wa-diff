__d(
  "AdsUEditorCampaignDeliveryChangeFrequencyControlIntervalReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsFrequencyControlEditorUtils",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeFrequencyControlIntervalActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
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
                var a = e.frequency_control_specs,
                  i = e;
                if (t.frequencyControlType === "CAP") {
                  var l, s;
                  ((i = r("AdsCampaignRecordAccessors").rf_prediction_id.delete(
                    i,
                  )),
                    ((l =
                      (s = e.creative_sequence) == null ? void 0 : s.size) !=
                    null
                      ? l
                      : 0) > 0 &&
                      (i = r(
                        "AdsCampaignRecordAccessors",
                      ).creative_sequence.set(r("immutable").List(), i)));
                }
                if (t.intervalDays === null && t.maxFrequency === null)
                  return (
                    (i = r(
                      "AdsCampaignRecordAccessors",
                    ).frequency_control_specs.set(null, i)),
                    r("AdsCampaignRecordAccessors").rf_prediction_id.delete(i)
                  );
                if (a == null)
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).frequency_control_specs.set(
                    r("immutable").fromJS(
                      o(
                        "AdsFrequencyControlEditorUtils",
                      ).getFrequencyControlSpecs(
                        t.intervalDays,
                        t.maxFrequency,
                        e.optimization_goal,
                        t.frequencyControlType,
                      ),
                    ),
                    i,
                  );
                var u = r("immutable").fromJS({
                  interval_days: t.intervalDays,
                  max_frequency: t.maxFrequency,
                  type: t.frequencyControlType,
                });
                return r(
                  "AdsCampaignRecordAccessors",
                ).frequency_control_specs.set(
                  a.map(function (e) {
                    return e.merge(u);
                  }),
                  i,
                );
              },
            );
          },
          o(
            "AdsUEditorCampaignDeliveryChangeFrequencyControlIntervalActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
