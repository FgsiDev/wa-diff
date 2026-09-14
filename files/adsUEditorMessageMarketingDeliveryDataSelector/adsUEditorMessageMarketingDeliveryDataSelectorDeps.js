__d(
  "adsUEditorMessageMarketingDeliveryDataSelectorDeps",
  ["adsCreateRelayStore", "adsMessageMarketingDeliveryDataServerQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateRelayStore")(
      r("adsMessageMarketingDeliveryDataServerQuery.graphql"),
    ).fluxGetSelector();
    l.adsMessageMarketingDeliveryDataRelaySelector = e;
  },
  98,
);
