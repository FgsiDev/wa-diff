__d(
  "AdsCampaignAdSequencingSetSequenceReducerPlugin",
  [
    "AdsCampaignAdSequencingSetSequenceActionFlux",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
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
                var o,
                  a = r("AdsCampaignRecordAccessors").creative_sequence.set(
                    r("immutable").List((o = t.sequence) != null ? o : []),
                    e,
                  );
                return t.repetitionPattern != null
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).creative_sequence_repetition_pattern.set(
                      t.repetitionPattern,
                      a,
                    )
                  : a;
              },
            );
          },
          r("AdsCampaignAdSequencingSetSequenceActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
