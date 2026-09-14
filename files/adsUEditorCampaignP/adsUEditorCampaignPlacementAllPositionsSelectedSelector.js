__d(
  "adsUEditorCampaignPlacementAllPositionsSelectedSelector",
  [
    "AdsUEditorCampaignPlacementUIBulkSpecByPositionGroupSelector",
    "AdsUEditorCampaignSelectors",
    "adsCampaignMessageMarketingHasWhatsAppMessageMarketingChannelSelector",
    "adsCreateSelector",
    "adsPlacementIsAllCheckboxesSelectedUnificationUtil",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignPlacementUIBulkSpecByPositionGroupSelector")
            .AdsUEditorCampaignPlacementUIBulkSpecByPositionGroupSelector,
          o("AdsUEditorCampaignSelectors").eligibilityInformationSelector,
          r(
            "adsCampaignMessageMarketingHasWhatsAppMessageMarketingChannelSelector",
          ),
        ],
        function (t, n, r) {
          return (
            t != null &&
            o(
              "adsPlacementIsAllCheckboxesSelectedUnificationUtil",
            ).adsPlacementIsAllCheckboxesSelectedUtil(t, n, r)
          );
        },
        {
          name:
            i.id + ".adsUEditorCampaignPlacementAllPositionsSelectedSelector",
        },
      ),
      s = r("adsCreateSelector")(
        [e, o("AdsUEditorCampaignSelectors").eligibilityInformationSelector],
        function (t, n) {
          return (
            t &&
            o(
              "adsPlacementIsAllCheckboxesSelectedUnificationUtil",
            ).adsPlacementAreAllDevicesSelectedOrNullUtil(n)
          );
        },
        {
          name:
            i.id +
            ".adsUEditorCampaignPlacementAllPositionsAndDevicesSelectedSelector",
        },
      );
    l.adsUEditorCampaignPlacementAllPositionsAndDevicesSelectedSelector = s;
  },
  98,
);
