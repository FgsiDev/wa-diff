__d(
  "adsUEditorPlacementCustomizationCanUseMixedFormatsSelector",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsMixedFormatsConstants",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessor(
          r("AdsCampaignGroupRecordAccessors").objective.get,
        ),
        o("AdsAPIObjectives").NONE,
      ),
      s = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaign.bulkByAccessor(
          r("AdsCampaignRecordAccessors").optimization_goal.get,
        ),
        r("AdsAPIOptimizationGoals").NONE,
      ),
      u = r("adsGetUniformValueSelector")(
        r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
        r("AdsPromotedObjectTypes").NONE,
      ),
      c = r("adsCreateSelector")(
        [e, u, s],
        function (t, n, r) {
          var e = o("AdsODAXUtils").maybeTranslateObjective(t, n, r);
          return o("AdsMixedFormatsConstants").ALLOWED_OBJECTIVES.includes(e);
        },
        {
          name:
            i.id +
            ".adsUEditorPlacementCustomizationCanUseMixedFormatsSelector",
        },
      ),
      d = c;
    l.default = d;
  },
  98,
);
