__d(
  "AdsUEditorCampaignGroupSetNameReducerPlugin",
  [
    "AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignGroupMutationUtils",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetNameActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsUEditorCampaignGroupMutationUtils").setNameForEach(
              e,
              t.campaignGroupIDs,
              t.name,
            );
          },
          [
            o("AdsUEditorCampaignGroupSetNameActionFlux").actionType,
            o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
