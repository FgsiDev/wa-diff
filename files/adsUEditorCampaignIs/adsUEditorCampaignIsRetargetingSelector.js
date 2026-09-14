__d(
  "adsUEditorCampaignIsRetargetingSelector",
  [
    "AdsDynamicTargetingCategories",
    "adsCreateSelector",
    "adsUEditorCampaignTargetingCategorySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorCampaignTargetingCategorySelector")],
      function (t) {
        return t === r("AdsDynamicTargetingCategories").RETARGETING;
      },
      { name: i.id },
    );
    l.default = e;
  },
  98,
);
