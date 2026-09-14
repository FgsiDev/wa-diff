__d(
  "AdsInsightsBMOIOrdersSuggestions",
  ["AdsInsightsFields", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Orders",
      s = o("AdsInsightsFields").makeActionID(
        "actions",
        "onsite_conversion.messaging_order_created_v2",
      ),
      u = o("AdsInsightsFields").makeActionID(
        "actions",
        "onsite_conversion.messaging_order_shipped_v2",
      );
    function c() {
      var e = new Set();
      return (
        e.add({ id: s, explanations: { type: s, value: s } }),
        e.add({ id: u, explanations: { type: u, value: u } }),
        r("immutable").OrderedSet(e)
      );
    }
    ((l.ORDERS_HEADER = e), (l.getOrdersSuggestedColumns = c));
  },
  98,
);
