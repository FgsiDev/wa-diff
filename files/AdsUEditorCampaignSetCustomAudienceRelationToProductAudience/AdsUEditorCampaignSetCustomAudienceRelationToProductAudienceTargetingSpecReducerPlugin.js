__d(
  "AdsUEditorCampaignSetCustomAudienceRelationToProductAudienceTargetingSpecReducerPlugin",
  [
    "AdsCustomAudienceProductAudienceUnionUtils",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetCustomAudienceRelationToProductAudienceActionFlux",
    "CustomAudienceRelationToProductAudience",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              switch (t.relation) {
                case r("CustomAudienceRelationToProductAudience").UNION:
                  return o(
                    "AdsCustomAudienceProductAudienceUnionUtils",
                  ).transformToUnion(e);
                case r("CustomAudienceRelationToProductAudience").INTERSECTION:
                  return o(
                    "AdsCustomAudienceProductAudienceUnionUtils",
                  ).transformToIntersection(e);
                case r("CustomAudienceRelationToProductAudience").NOT_SUPPORTED:
                  return e;
              }
            });
          },
          r(
            "AdsUEditorCampaignSetCustomAudienceRelationToProductAudienceActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
