__d(
  "AdsCampaignGroupBlockSetObjectivesDataActionLoggerPlugin",
  [
    "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("campaign_group_block_set_objectives", {
            new_value: t.objective,
            old_value: t.oldObjective,
            is_duplicated_object: o(
              "AdsMessagesCampaignBudgetPluginSimilarAdvertiserRecommendationCommon",
            ).isCreatedFromDuplicationFlow(),
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
