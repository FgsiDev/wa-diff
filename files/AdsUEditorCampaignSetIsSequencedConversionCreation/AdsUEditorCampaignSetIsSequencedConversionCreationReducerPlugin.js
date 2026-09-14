__d(
  "AdsUEditorCampaignSetIsSequencedConversionCreationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetIsSequencedConversionCreationActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).is_sequenced_conversion_creation.set(
                t.isSequencedConversionCreation,
                e,
              );
            });
          },
          o("AdsUEditorCampaignSetIsSequencedConversionCreationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
