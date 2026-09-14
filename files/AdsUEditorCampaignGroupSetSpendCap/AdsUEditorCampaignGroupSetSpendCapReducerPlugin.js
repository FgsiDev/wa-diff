__d(
  "AdsUEditorCampaignGroupSetSpendCapReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetSpendCapActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r("AdsCampaignGroupRecordAccessors").spend_cap.set(
                  t.spendCap,
                  e,
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetSpendCapActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
