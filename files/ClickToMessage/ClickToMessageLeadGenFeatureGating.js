__d(
  "ClickToMessageLeadGenFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "logCTXAutomatedChatEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      return t !== "OUTCOME_ENGAGEMENT"
        ? (r("logCTXAutomatedChatEvent")(
            "ctx_automated_chat_defaulting_drop_off",
            "invalid_objective",
          ),
          !1)
        : n !== r("AdCampaignDestination").MESSENGER
          ? (r("logCTXAutomatedChatEvent")(
              "ctx_automated_chat_defaulting_drop_off",
              "invalid_destination_app",
            ),
            !1)
          : o === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
              o === r("AdsAPIOptimizationGoals").LINK_CLICKS
            ? (e == null
                ? void 0
                : e.is_eligible_for_automated_chat_defaulting) === !0
            : (r("logCTXAutomatedChatEvent")(
                "ctx_automated_chat_defaulting_drop_off",
                "invalid_performance_goal",
              ),
              !1);
    }
    l.enableAutomatedChatDefaulting = e;
  },
  98,
);
