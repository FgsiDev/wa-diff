__d(
  "AdsUEditorCampaignSetAttributionCountTypeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetAttributionCountTypeActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").attribution_count_type.set(
                t.attributionCountType,
                e,
              );
            });
          },
          o("AdsUEditorCampaignSetAttributionCountTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
