__d(
  "AdsUEditorCampaignPartnershipAdsContentListReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPartnershipAdsContentListActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.contentListId;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).partnership_ad_content_list_id.set(n, e);
            });
          },
          r("AdsUEditorCampaignPartnershipAdsContentListActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
