__d(
  "AdsInsightsEmailCaptureMetaLeadsSuggestions",
  ["gkx", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("18678");
    }
    function s() {
      var e = new Set();
      return (
        e.add({
          id: "actions:onsite_conversion.lead_grouped",
          explanations: {
            type: "actions:onsite_conversion.lead_grouped",
            value: "actions:onsite_conversion.lead_grouped",
          },
        }),
        r("immutable").OrderedSet(e)
      );
    }
    ((l.genIsAccountEligibleForEmailCaptureSuggestedColumns = e),
      (l.getEmailCaptureSuggestedColumns = s));
  },
  98,
);
