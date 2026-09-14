__d(
  "AdsUEditorCampaignGroupSetSourceRecommendationTypeReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsCrepeCreateCompletedActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "getGraphQLEnumSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("AdAccountRecommendationType").__setRef(
        "AdsUEditorCampaignGroupSetSourceRecommendationTypeReducerPlugin",
      ),
      s = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (t, n) {
            var a = n.sourceRecommendationType;
            return a == null
              ? t
              : o("AdsMutators").mutateEach(
                  t,
                  n.campaignGroupIDs,
                  function (t) {
                    var n = null;
                    return (
                      e.onReadyImmediately(function (e) {
                        n = r("getGraphQLEnumSafe")(e, a);
                      }),
                      r(
                        "AdsCampaignGroupRecordAccessors",
                      ).source_recommendation_type.set(n, t)
                    );
                  },
                );
          },
          o("AdsCrepeCreateCompletedActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
