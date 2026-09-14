__d(
  "adsCampaignMessageMarketingHasWhatsAppMessageMarketingChannelSelector",
  [
    "AdsPECampaignSelectors",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "isMessageMarketingChannelSetFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignIDsSelector"),
          o("AdsPECampaignSelectors").getCachedByFieldsSelector,
        ],
        function (t, n) {
          return t.some(function (e) {
            var t;
            return (t = n(e, { targeting: null })
              .mapValue(function (e) {
                return o(
                  "isMessageMarketingChannelSetFromCampaign",
                ).isMessageMarketingChannelSetFromCampaign(e);
              })
              .getValue()) != null
              ? t
              : !1;
          });
        },
        {
          name:
            i.id +
            ".adsCampaignMessageMarketingHasWhatsAppMessageMarketingChannelSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
