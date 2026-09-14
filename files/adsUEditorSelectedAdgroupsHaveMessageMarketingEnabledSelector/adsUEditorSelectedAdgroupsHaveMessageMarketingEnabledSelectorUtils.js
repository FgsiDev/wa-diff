__d(
  "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelectorUtils",
  [
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "isAccountEligibleForMessengerMarketingMessages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return !o(
        "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
      ).isAdAccountEligibleForMessageMarketingLiquidity() &&
        !o(
          "isAccountEligibleForMessengerMarketingMessages",
        ).isAccountEligibleForMessengerMarketingMessages()
        ? !1
        : e.some(t);
    }
    l.adsUEditorSelectedAdgroupsHaveMessageMarketingEnableLogic = e;
  },
  98,
);
