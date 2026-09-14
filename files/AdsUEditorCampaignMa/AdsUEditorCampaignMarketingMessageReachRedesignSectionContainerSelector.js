__d(
  "AdsUEditorCampaignMarketingMessageReachRedesignSectionContainerSelector",
  [
    "adsCampaignGroupMessageMarketingBusinessTierInfraSelector",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
    "isMessageMarketingTier6",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorInjectEditingCampaignGroupContext")(
            r("adsCampaignGroupMessageMarketingBusinessTierInfraSelector"),
          ),
        ],
        function (t) {
          if (t.hasValueWithoutError())
            return r("isMessageMarketingTier6")(t.getValue());
        },
        { name: i.id + ".adsCampaignGroupMessageMarketingIsTier6Selector" },
      ),
      s = r("adsCreateStructuredSelector")(
        { isTier6: e },
        i.id +
          ".adsUEditorCampaignMarketingMessageReachRedesignSectionContainerSelector",
      );
    ((l.adsCampaignGroupMessageMarketingIsTier6Selector = e),
      (l.adsUEditorCampaignMarketingMessageReachRedesignSectionContainerSelector =
        s));
  },
  98,
);
