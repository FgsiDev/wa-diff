__d(
  "adsMessageMarketingWABASelector",
  [
    "AdsAccountStore",
    "AdsUEditorCampaignMarketingMessageReachRedesignSectionContainerSelector",
    "adsAdsManagerWABASelector",
    "adsCreateSelector",
    "filterMarketingMessageWABA",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsAdsManagerWABASelector"),
          o(
            "AdsUEditorCampaignMarketingMessageReachRedesignSectionContainerSelector",
          ).adsCampaignGroupMessageMarketingIsTier6Selector,
          r("AdsAccountStore").getSelectedBusinessID,
        ],
        function (t, n, o) {
          return t.mapValue(function (e) {
            return r("filterMarketingMessageWABA")(e, n != null ? n : !1, o);
          });
        },
        { name: i.id + ".adsMessageMarketingWABASelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
