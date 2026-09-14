__d(
  "AdsUEditorSequencingConfirmSequenceReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorSequencingConfirmSequenceActionFlux",
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
              r("AdsCampaignRecordAccessors").creative_sequence.set(
                r("immutable").List(t.sequence),
              ),
            );
          },
          o("AdsUEditorSequencingConfirmSequenceActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
