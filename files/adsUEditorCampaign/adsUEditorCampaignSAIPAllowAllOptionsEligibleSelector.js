__d(
  "adsUEditorCampaignSAIPAllowAllOptionsEligibleSelector",
  [
    "AdsSAIPAllowAllSpecUtils",
    "adsCreateSelector",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors")
          .adsUEditorCampaignIsAllShopsAdsIncentiveProgramSelector,
      ],
      function (t) {
        return s(t);
      },
      { name: i.id + ".adsUEditorCampaignSAIPAllowAllOptionsEligibleSelector" },
    );
    function s(e) {
      return o("AdsSAIPAllowAllSpecUtils").isSAIPAllowAllOptionsEligible(e);
    }
    ((l.adsUEditorCampaignSAIPAllowAllOptionsEligibleSelector = e),
      (l.adsUEditorCampaignSAIPAllowAllOptionsEligible = s));
  },
  98,
);
