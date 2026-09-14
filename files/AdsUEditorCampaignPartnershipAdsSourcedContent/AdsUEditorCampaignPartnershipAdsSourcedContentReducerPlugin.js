__d(
  "AdsUEditorCampaignPartnershipAdsSourcedContentReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPartnershipAdsSourcedContentActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.briefID;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).sourced_content_brief_id.set(n, e);
            });
          },
          r("AdsUEditorCampaignPartnershipAdsSourcedContentActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
