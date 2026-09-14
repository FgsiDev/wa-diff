__d(
  "ShopsAdsAdapterCampaignPlacementsRulePlugin",
  [
    "AdsEditingCampaignEditorContext",
    "AdsPlacementAPISpecReaderUtilsShared",
    "AdsPlacementRawSpecUtils",
    "AdsPlacementValues",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_rule",
        key: "shops_ads_placements_rule",
        isCompatible: function (t) {
          var e = o("AdsPlacementRawSpecUtils").getPlacementValue(
              o("AdsUEditorCampaignSelectors").rawEligibilityInformationMap(
                r("AdsEditingCampaignEditorContext"),
              ),
            ),
            n = o("AdsUEditorCampaignSelectors").placementSpecs(
              r("AdsEditingCampaignEditorContext"),
            );
          return e === r("AdsPlacementValues").AUTOMATIC ||
            (n != null &&
              o("AdsPlacementAPISpecReaderUtilsShared").isMDSASupportedPosition(
                n[0],
              ))
            ? null
            : "placement";
        },
        pivots: { ruleType: "shops_ads_placements_rule" },
        transform: function (t, n) {
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
