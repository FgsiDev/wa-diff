__d(
  "MarketingMessageSetupVisibilityUtils",
  [
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "MarketingMessageMediaCustomizationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        (e.position === "marketing_messages" && e.platform === "whatsapp") ||
        (e.position === "marketing_messages" && e.platform === "messenger")
      );
    }
    var s = function (n) {
      return o(
        "MarketingMessageMediaCustomizationUtils",
      ).passMarketingMessageMediaCustomizationGK()
        ? !1
        : n.size > 0 &&
            n.every(e) &&
            o(
              "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
            ).isAdAccountEligibleForMessageMarketingLiquidity();
    };
    l.isCreativeEditorEligibleForMarketingMessageSetup = s;
  },
  98,
);
