__d(
  "adsCampaignMessageMarketingDarkPageIDSelector",
  [
    "MessageMarketingWabaDarkPageDataProvider",
    "adsCampaignMessageMarketingPromotedWhatsAppPhoneNumberIDSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("MessageMarketingWabaDarkPageDataProvider").toFluxSelector(),
          r("adsCampaignMessageMarketingPromotedWhatsAppPhoneNumberIDSelector"),
        ],
        function (t, n) {
          return n == null ? null : t.get(n);
        },
        { name: i.id + ".adsCampaignMessageMarketingDarkPageIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
