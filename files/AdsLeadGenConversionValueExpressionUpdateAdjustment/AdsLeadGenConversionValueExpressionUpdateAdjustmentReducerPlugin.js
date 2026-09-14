__d(
  "AdsLeadGenConversionValueExpressionUpdateAdjustmentReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsCampaignRecordAccessors",
    "AdsLeadGenConversionValueExpressionUpdateAdjustmentActionFlux",
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
              var n =
                  e.conversion_value_expression_spec == null
                    ? []
                    : e.conversion_value_expression_spec.toJS(),
                o = t.adjustmentSign,
                a = t.adjustmentWeight,
                i = t.destination,
                l = t.isLeadAdsConversionValueExpressionEnabled;
              if (!l)
                return r(
                  "AdsCampaignRecordAccessors",
                ).conversion_value_expression_spec.delete(e);
              var s = {
                  destination_type: i,
                  adjustment_sign: o,
                  adjustment_weight: a,
                },
                u = n.filter(function (e) {
                  return e.destination_type !== i;
                }),
                c =
                  i === r("AdCampaignDestination").WEBSITE
                    ? [s].concat(u)
                    : [].concat(u, [s]),
                d = r(
                  "AdsCampaignRecordAccessors",
                ).conversion_value_expression_spec.set(
                  r("immutable").fromJS(c),
                  e,
                );
              return d;
            });
          },
          r("AdsLeadGenConversionValueExpressionUpdateAdjustmentActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
