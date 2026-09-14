__d(
  "adsUEditorIsSTOSalesCampaignSelector",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorIsSTOCampaignSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessor(
              r("AdsCampaignGroupRecordAccessors").objective.get,
            ),
            r("AdsAPIObjectives").NONE,
          ),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").optimization_goal.get,
            ),
            r("AdsAPIOptimizationGoals").NONE,
          ),
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          r("adsUEditorIsSTOCampaignSelector"),
        ],
        function (t, n, a, i) {
          if (!r("gkx")("3461")) return !1;
          var e = o("AdsODAXUtils").maybeTranslateObjective(t, a, n);
          return (
            e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            n === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
            i
          );
        },
        { name: i.id + ".adsUEditorIsSTOSalesCampaignSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
