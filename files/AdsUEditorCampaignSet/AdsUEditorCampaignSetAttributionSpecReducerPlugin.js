__d(
  "AdsUEditorCampaignSetAttributionSpecReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetAttributionSpecActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").attribution_spec.set(
                r("immutable").fromJS(t.attributionSpec),
                e,
              );
            });
          },
          r("AdsUEditorCampaignSetAttributionSpecActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
