__d(
  "CtxMessagingSuggestedNUXSeen",
  ["AdsMgmtSuggestedColumnsGatingUtils", "nux:1089", "nux:1094"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        r,
        a = o(
          "AdsMgmtSuggestedColumnsGatingUtils",
        ).getIsAccountInSuggestedColumnsExpansionWithoutExposure()
          ? (t = n("nux:1089")) == null
            ? void 0
            : t("ALL_ADVERTISER_ACCOUNTS_SUGGESTED_COLUMNS_NUX")
          : (r = n("nux:1094")) == null
            ? void 0
            : r("CTX_MESSAGING_SUGGESTED_COLUMNS_LAUNCH_NUX");
      return a == null;
    }
    l.hasUserSeenMessage_LEGACY = e;
  },
  98,
);
