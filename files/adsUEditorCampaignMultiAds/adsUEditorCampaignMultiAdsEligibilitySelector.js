__d(
  "adsUEditorCampaignMultiAdsEligibilitySelector",
  [
    "adsCreateSelector",
    "adsUEditorCampaignMultiAdsCheckboxEligibilitySelector",
    "adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelector",
    "adsUEditorIsAccountEligibleForAdsDefaultOnSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorIsAccountEligibleForAdsDefaultOnSelector"),
          r("adsUEditorCampaignMultiAdsL2MigrationFlowEligibilitySelector"),
          r("adsUEditorCampaignMultiAdsCheckboxEligibilitySelector"),
        ],
        function (t, n, r) {
          var e;
          return {
            shouldDefaultOptIn:
              ((e = t()) == null ? void 0 : e.getValue()) === !0 && r === !0,
            shouldRenderCheckbox: r && n,
          };
        },
        { name: i.id + ".adsUEditorCampaignMultiAdsEligibilitySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
