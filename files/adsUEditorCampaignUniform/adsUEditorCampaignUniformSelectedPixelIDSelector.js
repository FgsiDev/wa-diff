__d(
  "adsUEditorCampaignUniformSelectedPixelIDSelector",
  [
    "AdsDeliveryOmnichannelSelectors",
    "AdsUEditorCampaignWebsitePromotedObjectSelectors",
    "AdsUEditorHostIDs",
    "AdsWebsiteOptimizationUtil",
    "SignalsConversionBulkTypeaheadStateDataProvider",
    "SignalsConversionTypeaheadState",
    "SignalsConversionTypeaheadStateDataProvider",
    "adsCreateSelector",
    "adsSignalsConversionTypeaheadDefaultPixelIDSelector",
    "adsUEditorCampaignIsUniformPixelSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "adsUEditorSelectedCampaignIDsSelector",
    "adsUIEditorSignalsWebsitePromotedObjectEventNameIDToPixelIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
          r("adsUEditorSelectedCampaignIDsSelector"),
          r("SignalsConversionBulkTypeaheadStateDataProvider").toFluxSelector(),
          r("SignalsConversionTypeaheadStateDataProvider").toFluxSelector(),
        ],
        function (t, n, o, a) {
          var e;
          return t === r("AdsUEditorHostIDs").BULK_EDIT_DIALOG
            ? (e = o.get(n[0])) != null
              ? e
              : r("SignalsConversionTypeaheadState")()
            : a;
        },
        { name: i.id + ".uniformSelectedTypeaheadStateData" },
      ),
      s = r("adsCreateSelector")(
        [
          o("AdsDeliveryOmnichannelSelectors")
            .allUsingOmnichannelPromotedObjectTypeSelector,
          o("AdsDeliveryOmnichannelSelectors").selectedPixelIDSelector,
          o("AdsUEditorCampaignWebsitePromotedObjectSelectors")
            .websitePromotedObjectSelector,
          r("adsUEditorCampaignIsUniformPixelSelector"),
          e,
          r("adsSignalsConversionTypeaheadDefaultPixelIDSelector"),
          r(
            "adsUIEditorSignalsWebsitePromotedObjectEventNameIDToPixelIDSelector",
          ),
        ],
        function (t, n, r, a, i, l, s) {
          return t
            ? n
            : o(
                "AdsWebsiteOptimizationUtil",
              ).getSignalsConversionTypeaheadSelectedPixelID(r, a, i, l, s);
        },
        { name: i.id + ".uniformSelectedPixelIDSelector" },
      );
    l.uniformSelectedPixelIDSelector = s;
  },
  98,
);
