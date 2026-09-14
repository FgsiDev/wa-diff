__d(
  "maybeDefaultCallPromptInStartConversationsTemplate",
  [
    "AdsAPIOptimizationGoals",
    "CallPromptFeatureGating",
    "setCallPromptInStartConversations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        o("CallPromptFeatureGating").isPageEligibleForCallPromptDefaulting(t) ||
        n === r("AdsAPIOptimizationGoals").MEANINGFUL_CALL_ATTEMPT
      ) {
        var a = (t == null ? void 0 : t.is_eligible_for_bic_call_prompt) === !0,
          i = o("CallPromptFeatureGating").isEligibleForWarmCallPrompt(t);
        r("setCallPromptInStartConversations")(e, null, a, i);
      }
      return e;
    }
    l.default = e;
  },
  98,
);
