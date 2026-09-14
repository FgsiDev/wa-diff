__d(
  "MarketingMessagesDefaultPhoneNumberUtils",
  ["AdsPersonalSettingsMarketingMessagesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        o("AdsPersonalSettingsMarketingMessagesUtils").getWabaToNumberStatus(
          e,
        ) !== "deleted"
      );
    }
    l.getIsValidDefaultPhoneNumberStatus = e;
  },
  98,
);
