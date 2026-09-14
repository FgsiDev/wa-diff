__d(
  "AdsInsightsBMOIConversationSuggestions",
  ["AdsInsightsFields", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Conversations",
      s = o("AdsInsightsFields").makeActionID(
        "actions",
        "onsite_conversion.messaging_conversation_started_7d",
      ),
      u = o("AdsInsightsFields").makeActionID(
        "cost_per_action_type",
        "onsite_conversion.messaging_conversation_started_7d",
      );
    function c() {
      var e = new Set();
      return (
        e.add({ id: s, explanations: { type: s, value: s } }),
        e.add({ id: u, explanations: { type: u, value: u } }),
        r("immutable").OrderedSet(e)
      );
    }
    ((l.CONVERSATIONS_HEADER = e), (l.getConversationsSuggestedColumns = c));
  },
  98,
);
