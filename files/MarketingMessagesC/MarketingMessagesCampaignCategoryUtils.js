__d(
  "MarketingMessagesCampaignCategoryUtils",
  [
    "$InternalEnum",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecReaderUtilsShared",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "immutable",
    "isMessageMarketingEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "ADS_ONLY",
      "MARKETING_MESSAGES_AND_ADS",
      "MARKETING_MESSAGES_ONLY",
    ]);
    function s(e) {
      if (e == null) return !1;
      var t = o(
        "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
      ).convertCampaignRecordToPlacementSpec(e);
      return JSON.stringify(t) === "{}"
        ? !1
        : o("AdsPlacementAPISpecReaderUtils").isOnlyActiveSelectedPlacements(
            t,
            r("immutable").List([
              { platform: "whatsapp", position: "marketing_messages" },
              { platform: "messenger", position: "marketing_messages" },
            ]),
          );
    }
    function u(e) {
      return e == null
        ? !1
        : o(
              "isMessageMarketingEnabledFromCampaign",
            ).isMessageMarketingEnabledFromCampaign(e)
          ? !0
          : o("AdsPlacementAPISpecReaderUtilsShared").isActiveMessengerPosition(
              o(
                "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
              ).convertCampaignRecordToPlacementSpec(e),
              "marketing_messages",
            );
    }
    function c(t) {
      return s(t)
        ? e.MARKETING_MESSAGES_ONLY
        : u(t)
          ? e.MARKETING_MESSAGES_AND_ADS
          : e.ADS_ONLY;
    }
    ((l.MarketingMessagesCampaignCategory = e),
      (l.isMarketingMessagesOnlyFromCampaignTargeting = s),
      (l.isMarketingMessagesEnabledFromCampaignTargeting = u),
      (l.getMarketingMessagesPlacementStateFromPlacementSpec = c));
  },
  98,
);
