__d(
  "AdsUEditorCampaignSetValueRulesSpecReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetValueRulesSpecActionFlux",
    "immutable",
    "updateBidAdjustmentsForCampaigns",
    "updateValueAdjustmentRuleCollectionIDForCampaigns",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        return r("AdsCampaignRecordAccessors").value_rules_spec.set(
          e != null ? r("immutable").fromJS(e) : null,
          t,
        );
      };
    }
    var s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, n) {
            var a = n.newValueAdjustmentRuleCollectionID,
              i =
                n.valueRulesSpec != null
                  ? {
                      value_rule_set:
                        n.valueRulesSpec.value_rule_set != null
                          ? babelHelpers.extends(
                              {},
                              n.valueRulesSpec.value_rule_set,
                              {
                                rules:
                                  n.valueRulesSpec.value_rule_set.rules != null
                                    ? n.valueRulesSpec.value_rule_set.rules.map(
                                        function (e) {
                                          return babelHelpers.extends({}, e, {
                                            id: null,
                                            criterias:
                                              e.criterias != null
                                                ? e.criterias.map(function (e) {
                                                    return babelHelpers.extends(
                                                      {},
                                                      e,
                                                      { id: null },
                                                    );
                                                  })
                                                : null,
                                          });
                                        },
                                      )
                                    : null,
                              },
                            )
                          : null,
                    }
                  : null;
            return n.unlinkPreviousSpec === !0
              ? o("AdsMutators").mutateEach(t, n.campaignIDs, function (t) {
                  var n;
                  return o("AdsMutators").chain(
                    (n = r("AdsCampaignRecordAccessors"))
                      .value_adjustment_rule_collection_id.delete,
                    n.value_rule_set_id.delete,
                    n.value_rules_entry_point.delete,
                    n.value_rules_applied.set(!0),
                    e(i),
                  )(t);
                })
              : a !== void 0
                ? o("AdsMutators").mutateEach(
                    t,
                    n.campaignIDs,
                    o("AdsMutators").chain(
                      function (e) {
                        return o(
                          "updateValueAdjustmentRuleCollectionIDForCampaigns",
                        ).updateValueAdjustmentRuleCollectionIDForCampaignRecord(
                          e,
                          a,
                          n.valueRulesEntryPoint,
                        );
                      },
                      function (e) {
                        var t,
                          n =
                            (e == null || (t = e.bid_adjustments) == null
                              ? void 0
                              : t.user_groups) != null,
                          r = (e == null ? void 0 : e.daily_budget) == null;
                        return n && !r
                          ? o(
                              "updateBidAdjustmentsForCampaigns",
                            ).updateBidAdjustmentsForCampaigns(e, a)
                          : e;
                      },
                      r("AdsCampaignRecordAccessors").value_rules_applied.set(
                        !0,
                      ),
                      e(i),
                    ),
                  )
                : o("AdsMutators").mutateEach(
                    t,
                    n.campaignIDs,
                    o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").value_rules_applied.set(
                        !0,
                      ),
                      e(i),
                    ),
                  );
          },
          o("AdsUEditorCampaignSetValueRulesSpecActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
