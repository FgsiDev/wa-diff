__d(
  "adsUEditorCampaignBudgetPluginSelector",
  [
    "AdsAPIObjectives",
    "AdsCampaignBudgetPluginResolver",
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignDestinationTypeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
        function (e) {
          return e.objective;
        },
      ),
      s = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(e, r("AdsAPIObjectives").NONE),
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          o("adsUEditorCampaignDestinationTypeSelector")
            .adsUEditorCampaignDestinationTypeSelector,
        ],
        function (t, n, o) {
          return r("AdsCampaignBudgetPluginResolver").resolve({
            objective: t,
            promotedObjectType: n,
            destinationType: o,
          });
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
