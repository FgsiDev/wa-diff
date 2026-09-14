__d(
  "AdsInsightsBMOIPurchaseSuggestions",
  ["AdsInsightsFields", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "Purchases",
      u = (e = o("AdsInsightsFields")).makeActionID("actions", "omni_purchase"),
      c = e.makeActionID("action_values", "omni_purchase"),
      d = e.makeActionID("cost_per_unique_action_type", "omni_purchase"),
      m = e.makeActionID("purchase_roas", "omni_purchase");
    function p() {
      var e = new Set();
      return (
        e.add({ id: u, explanations: { type: u, value: u } }),
        e.add({ id: c, explanations: { type: c, value: c } }),
        e.add({ id: d, explanations: { type: d, value: d } }),
        e.add({ id: m, explanations: { type: m, value: m } }),
        r("immutable").OrderedSet(e)
      );
    }
    ((l.PURCHASES_HEADER = s), (l.getPurchasesSuggestedColumns = p));
  },
  98,
);
