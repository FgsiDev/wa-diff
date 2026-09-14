__d(
  "adsUEditorMessageMarketingDeliveryDataSelector",
  [
    "adsCreateSelector",
    "adsMessageMarketingDeliveryDataUtils",
    "adsUEditorMessageMarketingDeliveryDataSelectorDeps",
    "adsUEditorSelectedCampaignIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignIDsSelector"),
          o("adsUEditorMessageMarketingDeliveryDataSelectorDeps")
            .adsMessageMarketingDeliveryDataRelaySelector,
        ],
        function (t, n) {
          return o("adsMessageMarketingDeliveryDataUtils").buildDeliveryDataMap(
            t,
            n,
          );
        },
        { name: i.id + ".adsUEditorMessageMarketingDeliveryDataSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
