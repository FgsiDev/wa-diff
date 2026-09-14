__d(
  "AdsUEditorCampaignSetOmniValueRuleReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetOmniValueRuleActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              if (t.clear === !0 || t.conversion_value_expression_spec == null)
                return r(
                  "AdsCampaignRecordAccessors",
                ).conversion_value_expression_spec.delete(e);
              var n = [t.conversion_value_expression_spec];
              return r(
                "AdsCampaignRecordAccessors",
              ).conversion_value_expression_spec.set(
                r("immutable").fromJS(n),
                e,
              );
            });
          },
          r("AdsUEditorCampaignSetOmniValueRuleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
