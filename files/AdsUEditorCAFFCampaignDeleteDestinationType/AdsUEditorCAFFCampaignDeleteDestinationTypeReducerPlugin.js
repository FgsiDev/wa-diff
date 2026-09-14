__d(
  "AdsUEditorCAFFCampaignDeleteDestinationTypeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCAFFCampaignDeleteDestinationTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return r("AdsCampaignRecordAccessors").destination_type.delete(e);
            });
          },
          r("AdsUEditorCAFFCampaignDeleteDestinationTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
