__d(
  "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
  [
    "AdsDynamicTargetingCategories",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsProductAudienceSpecsGetTargetingCategory",
    "adsUEditorCampaignProductAudienceBulkTargetingTypeWithDefaultBootloadedSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            r(
              "adsUEditorCampaignProductAudienceBulkTargetingTypeWithDefaultBootloadedSelector",
            ),
          ),
        ],
        function (t) {
          return (
            t != null &&
            r("adsProductAudienceSpecsGetTargetingCategory")(t) ===
              r("AdsDynamicTargetingCategories").RETARGETING
          );
        },
        {
          name:
            i.id +
            ".adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
