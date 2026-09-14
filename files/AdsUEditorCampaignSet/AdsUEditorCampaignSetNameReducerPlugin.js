__d(
  "AdsUEditorCampaignSetNameReducerPlugin",
  [
    "AdsUEditorCampaignInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignMutationUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetNameActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsUEditorCampaignMutationUtils").setNameForEach(
              e,
              t.campaignIDs,
              t.name,
            );
          },
          [
            o("AdsUEditorCampaignSetNameActionFlux").actionType,
            o("AdsUEditorCampaignInstantPublishNameFieldActionFlux").actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
