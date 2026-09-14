__d(
  "adsUEditorODAXCampaignPageSetParentPageIDSelector",
  [
    "AdsAPIObjectives",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsPageSetLoadObjectBulkParentPageIDSelector",
    "adsUEditorIsSTOSalesCampaignSelector",
    "adsUEditorLocalPagesCTWASelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsPageSetLoadObjectBulkParentPageIDSelector")
            .adsPageSetLoadObjectBulkParentPageIDSelector,
          r("adsGetUniformValueSelector")(
            r("adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector"),
            o("AdsAPIObjectives").NONE,
          ),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
              function (e) {
                return e.objective;
              },
            ),
          ),
          o("adsUEditorLocalPagesCTWASelector").isLocalPagesCTWASelector,
          r("adsUEditorIsSTOSalesCampaignSelector"),
        ],
        function (t, n, r, a, i) {
          var e =
            (r === o("AdsAPIObjectives").OUTCOME_AWARENESS &&
              n === o("AdsAPIObjectives").STORE_VISITS) ||
            i;
          if (!e && !a) return null;
          var l = t.hasValueWithoutError() ? t.getValue() : null;
          return l != null && l.getValues().length > 0
            ? l.getValues()[0]
            : null;
        },
        { name: i.id + ".adsUEditorODAXCampaignPageSetParentPageIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
