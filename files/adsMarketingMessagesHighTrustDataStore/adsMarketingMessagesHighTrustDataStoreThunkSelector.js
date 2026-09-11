__d(
  "adsMarketingMessagesHighTrustDataStoreThunkSelector",
  ["MarketingMessagesHighTrustDataStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("MarketingMessagesHighTrustDataStore"),
      function (e) {
        return r("MarketingMessagesHighTrustDataStore").get(e);
      },
    );
    l.default = e;
  },
  98,
);
