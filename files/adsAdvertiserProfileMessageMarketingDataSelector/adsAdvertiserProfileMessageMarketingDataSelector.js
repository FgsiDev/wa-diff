__d(
  "adsAdvertiserProfileMessageMarketingDataSelector",
  [
    "AdsAccountStore",
    "adsAdvertiserProfileMessageMarketingDataSelectorUtils",
    "adsAdvertiserProfileMessageMarketingDataStoreSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("adsAdvertiserProfileMessageMarketingDataStoreSelector"),
        ],
        function (t, n) {
          return o(
            "adsAdvertiserProfileMessageMarketingDataSelectorUtils",
          ).adsAdvertiserProfileMessageMarketingData(t, n);
        },
        { name: i.id + ".adsAdvertiserProfileMessageMarketingDataSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
