__d(
  "AdsUEditorCrepeAllLevelsSetNameCampaignReducerPlugin",
  [
    "AdsAutoNamingConfig",
    "AdsUEditorCampaignMutationUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCrepeAllLevelsSetNameActionFlux",
    "AdsUEditorCrepeNamingUtils",
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
              o("AdsUEditorCrepeNamingUtils").getCrepeAdsObjectName(
                o("AdsAutoNamingConfig").CATEGORIES.CAMPAIGN,
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
