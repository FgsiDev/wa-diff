__d(
  "updateValueAdjustmentRuleCollectionIDForCampaigns",
  ["AdsCampaignRecordAccessors", "AdsMutators", "AdsValueGkUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
      return o("AdsMutators").chain.apply(
        o("AdsMutators"),
        [
          r("AdsCampaignRecordAccessors").value_rules_applied.set(n != null),
          r("AdsCampaignRecordAccessors").value_rule_set_id.set(n),
          r(
            "AdsCampaignRecordAccessors",
          ).value_adjustment_rule_collection_id.set(n),
        ].concat(
          o("AdsValueGkUtils").isAdsValueRulesFederatedEnabled3B()
            ? [
                r("AdsCampaignRecordAccessors").value_rules_entry_point.set(
                  n != null && a != null ? a : null,
                ),
              ]
            : [],
        ),
      )(t);
    };
    l.updateValueAdjustmentRuleCollectionIDForCampaignRecord = e;
  },
  98,
);
