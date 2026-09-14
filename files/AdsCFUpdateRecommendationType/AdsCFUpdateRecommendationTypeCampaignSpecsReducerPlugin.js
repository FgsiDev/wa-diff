__d(
  "AdsCFUpdateRecommendationTypeCampaignSpecsReducerPlugin",
  [
    "AdsCFUpdateRecommendationTypeSpecsActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.recommendationType;
              return e;
            });
          },
          o("AdsCFUpdateRecommendationTypeSpecsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
