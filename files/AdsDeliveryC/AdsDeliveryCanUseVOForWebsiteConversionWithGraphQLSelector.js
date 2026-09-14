__d(
  "AdsDeliveryCanUseVOForWebsiteConversionWithGraphQLSelector",
  ["adsAccountHasCapabilitySelector", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsAccountHasCapabilitySelector")("CAN_USE_ROAS_VALUE_OPTIMIZATION")],
      function (t) {
        var e;
        return (e = t.getValue()) != null ? e : !1;
      },
      { name: i.id + ".canUseVOForWebsiteConversionWithGraphQLSelector" },
    );
    l.canUseVOForWebsiteConversionWithGraphQLSelector = e;
  },
  98,
);
