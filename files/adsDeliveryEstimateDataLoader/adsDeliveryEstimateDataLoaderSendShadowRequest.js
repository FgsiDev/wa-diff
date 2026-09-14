__d(
  "adsDeliveryEstimateDataLoaderSendShadowRequest",
  ["AdsGraphAPI", "adsDeliveryEstimateDataLoaderGetParams", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = o("AdsGraphAPI").get(i.id),
        l,
        s = r("adsDeliveryEstimateDataLoaderGetParams")(e, t);
      (r("isTruthy")(n)
        ? (l = a.object("adcampaign", n))
        : (l = a.adaccount(e.accountID)),
        l.edge("delivery_estimate").get(s));
    }
    l.default = e;
  },
  98,
);
