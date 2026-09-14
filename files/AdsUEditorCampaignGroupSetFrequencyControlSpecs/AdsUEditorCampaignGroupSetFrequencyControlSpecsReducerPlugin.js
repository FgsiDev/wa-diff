__d(
  "AdsUEditorCampaignGroupSetFrequencyControlSpecsReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetFrequencyControlSpecsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).frequency_control_specs.set(
                  r("immutable").fromJS(t.frequencyControlSpecs),
                  e,
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetFrequencyControlSpecsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
