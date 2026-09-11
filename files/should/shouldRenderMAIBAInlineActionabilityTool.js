__d(
  "shouldRenderMAIBAInlineActionabilityTool",
  ["actionabilityFeatureGate", "actionabilityTools", "isMAIBAAsyncTaskEnabled"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "create_condition_based_task" ||
        e === "create_scheduled_task"
        ? r("isMAIBAAsyncTaskEnabled")()
        : o("actionabilityFeatureGate").isActionabilityToolCallUIEnabled() &&
            o("actionabilityTools").isActionabilityTool(e);
    }
    l.default = e;
  },
  98,
);
