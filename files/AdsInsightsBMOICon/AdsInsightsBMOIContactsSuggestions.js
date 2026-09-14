__d(
  "AdsInsightsBMOIContactsSuggestions",
  [
    "AdsInsightsBMOIUpsellMetricsExperiments",
    "AdsInsightsField",
    "AdsInsightsFields",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Contacts",
      s = o("AdsInsightsFields").makeActionID(
        "actions",
        "onsite_conversion.messaging_first_reply",
      ),
      u = o("AdsInsightsFields").makeActionID(
        "cost_per_action_type",
        "onsite_conversion.messaging_first_reply",
      );
    function c() {
      var e = new Set();
      if (
        (e.add({ id: s, explanations: { type: s, value: s } }),
        e.add({ id: u, explanations: { type: u, value: u } }),
        o(
          "AdsInsightsBMOIUpsellMetricsExperiments",
        ).isCTWAUpperFunnelTMCRMCTargetedAdvertiser())
      ) {
        var t;
        (e.add({
          id: (t = r("AdsInsightsField"))
            .ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
          explanations: {
            type: t.ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
            value: t.ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
          },
        }),
          e.add({
            id: t.COST_PER_ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
            explanations: {
              type: t.COST_PER_ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
              value:
                t.COST_PER_ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
            },
          }));
      }
      return r("immutable").OrderedSet(e);
    }
    ((l.CONTACTS_HEADER = e), (l.getContactSuggestedColumns = c));
  },
  98,
);
