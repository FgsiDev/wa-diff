__d(
  "AdsUEditorCampaignDestinationSetAutomaticManualDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDestinationSetAutomaticManualDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = e;
              return (
                (n = o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").automatic_manual_state.set(
                    t.automaticManualState,
                  ),
                )(n)),
                n
              );
            });
          },
          [
            r("AdsUEditorCampaignDestinationSetAutomaticManualDataActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
