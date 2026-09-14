__d(
  "AdsLeadGenConversionValueExpressionUpdateSpecReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsLeadGenConversionValueExpressionUpdateSpecActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.isLeadAdsConversionValueExpressionEnabled,
                o = t.updatedSpec;
              if (!n)
                return r(
                  "AdsCampaignRecordAccessors",
                ).conversion_value_expression_spec.delete(e);
              var a = r(
                "AdsCampaignRecordAccessors",
              ).conversion_value_expression_spec.set(
                r("immutable").fromJS(o),
                e,
              );
              return a;
            });
          },
          r("AdsLeadGenConversionValueExpressionUpdateSpecActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
