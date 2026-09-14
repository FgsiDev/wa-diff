__d(
  "AdsUEditorCampaignSetInstagramIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetInstagramIdDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.page_id.delete(e);
              return r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.page_id.set(t.pageID, n);
            });
          },
          o("AdsUEditorCampaignSetInstagramIdDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
