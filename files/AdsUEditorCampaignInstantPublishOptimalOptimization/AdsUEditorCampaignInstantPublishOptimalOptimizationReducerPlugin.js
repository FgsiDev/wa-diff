__d(
  "AdsUEditorCampaignInstantPublishOptimalOptimizationReducerPlugin",
  [
    "AdsAPIBillingEvents",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.optimizationGoal,
              i = t.optimizationType,
              l = t.requestSource;
            return o("AdsMutators").mutateEach(
              e,
              n,
              o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").optimization_goal.set(a),
                r("AdsCampaignRecordAccessors").billing_event.set(
                  r("AdsAPIBillingEvents").IMPRESSIONS,
                ),
                function (e) {
                  var t, n;
                  return e.set(
                    "metrics_metadata",
                    ((n = {}),
                    (n.delivery_growth_optimizations = [
                      ((t = {}),
                      (t.optimization_type = i),
                      (t.request_source = l),
                      t),
                    ]),
                    n),
                  );
                },
              ),
            );
          },
          o("AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
