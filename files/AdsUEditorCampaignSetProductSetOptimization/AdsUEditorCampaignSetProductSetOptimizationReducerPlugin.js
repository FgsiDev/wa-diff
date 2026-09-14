__d(
  "AdsUEditorCampaignSetProductSetOptimizationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorBLCConstants",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetProductSetOptimizationDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n;
            return o("AdsMutators").mutateEach(
              e,
              (n = t.campaignIDs) != null ? n : [],
              function (e) {
                var n = e;
                return (
                  (n = t.enabled
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.product_set_optimization.set(
                        o("AdsUEditorBLCConstants")
                          .PRODUCT_SET_OPTIMIZATION_ENABLED,
                        n,
                      )
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.product_set_optimization.delete(n)),
                  n
                );
              },
            );
          },
          r("AdsUEditorCampaignSetProductSetOptimizationDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
