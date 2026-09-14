__d(
  "adsMessageMarketingDeliveryDataUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.length === 0) return null;
      var n = new Map();
      return (
        e.forEach(function (e) {
          var r = t({ campaign_id: e });
          if (r.hasValue() && !r.hasError()) {
            var o = r.getValue();
            n.set(
              e,
              o == null ? void 0 : o.xfb_message_marketing_delivery_data,
            );
          } else n.set(e, null);
        }),
        r("immutable").Map(n)
      );
    }
    l.buildDeliveryDataMap = e;
  },
  98,
);
