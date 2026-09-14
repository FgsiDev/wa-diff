__d(
  "shouldRenderMAIBAInlineActionabilityTool",
  ["actionabilityFeatureGate", "actionabilityTools"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("actionabilityTools").shouldRenderToolInActionabilitySection(
        e,
        o("actionabilityFeatureGate").isActionabilityToolCallUIEnabled(),
      );
    }
    l.default = e;
  },
  98,
);
