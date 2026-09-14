__d(
  "AdsUEditorCampaignWhatsAppStatusSelectors",
  [
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementsWhatsAppPlatformPlugin",
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").placementSpecs],
        function (t) {
          return t.some(function (e) {
            return o("AdsPlacementAPISpecReaderUtils").isActiveWhatsAppPosition(
              e,
              "status",
            );
          });
        },
        { name: i.id + ".someHaveWhatsAppStatusPosition" },
      ),
      s = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationSelector],
        function (t) {
          return r("AdsPlacementsWhatsAppPlatformPlugin").isEnabled(
            t.capabilities,
          );
        },
        { name: i.id + ".isWhatsAppStatusAdsEnabledSelector" },
      );
    ((l.someHaveWhatsAppStatusPosition = e),
      (l.isWhatsAppStatusAdsEnabledSelector = s));
  },
  98,
);
