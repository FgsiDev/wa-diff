__d(
  "AdsUEditorCrepeAllLevelsSetNameCampaignGroupReducerPlugin",
  [
    "AdsAutoNamingConfig",
    "AdsUEditorCampaignGroupMutationUtils",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCrepeAllLevelsSetNameActionFlux",
    "AdsUEditorCrepeNamingUtils",
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
              o("AdsUEditorCrepeNamingUtils").getCrepeAdsObjectName(
                o("AdsAutoNamingConfig").CATEGORIES.CAMPAIGN_GROUP,
                t.name,
              ),
            );
          },
          [o("AdsUEditorCrepeAllLevelsSetNameActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
