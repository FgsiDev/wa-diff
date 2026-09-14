__d(
  "BizAIFeatureLoggingUtils",
  ["AdsCreativeFeaturesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null ? "null" : e ? "true" : "false";
    }
    function s(t) {
      return new Map([
        [
          "l1_prompt",
          e(
            o(
              "AdsCreativeFeaturesUtils",
            ).isBizAIPromptsOptedInFromAdgroupNullable(t),
          ),
        ],
      ]);
    }
    l.getBizAIFeatureStatuses = s;
  },
  98,
);
