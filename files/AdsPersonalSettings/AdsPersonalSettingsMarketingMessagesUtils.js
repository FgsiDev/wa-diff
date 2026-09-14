__d(
  "AdsPersonalSettingsMarketingMessagesUtils",
  [
    "GeoMetricUtils",
    "WhatsAppBusinessAccountToNumberStatus",
    "WhatsAppMessagingTier",
    "WhatsAppPhoneNumberComputedStatus",
    "castToEnum",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("castToEnum")(
        e,
        r("WhatsAppPhoneNumberComputedStatus"),
        "UNKNOWN",
      );
    }
    function s(e) {
      var t = o("enumUtils").coerceKey(
        e,
        r("WhatsAppBusinessAccountToNumberStatus"),
      );
      return t == null
        ? "deleted"
        : r("WhatsAppBusinessAccountToNumberStatus")[t];
    }
    function u(e) {
      return e === "linked" || e === "manual_review";
    }
    function c(e) {
      return (
        (e == null ? void 0 : e.marketingMessagesRestrictionStatus) ===
          "COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_RESTRICTED" ||
        (e == null ? void 0 : e.marketingMessagesRestrictionStatus) ===
          "COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_BANNED"
      );
    }
    function d(e) {
      return r("castToEnum")(e, r("WhatsAppMessagingTier"), -2);
    }
    function m(e) {
      var t = d(e == null ? void 0 : e.totalConversations);
      return (
        t !== -2 &&
        t !== -1 &&
        (e == null ? void 0 : e.businessInitiatedConversations) != null &&
        (e == null ? void 0 : e.businessInitiatedConversations) !== 0 &&
        (e == null ? void 0 : e.businessInitiatedConversations) >= t
      );
    }
    function p(e) {
      return e == null ? "" : o("GeoMetricUtils").formatValue(e);
    }
    function _(e, t, n) {
      return t === n && (e === "ADMIN" || e === "MANAGE");
    }
    ((l.getPhoneNumberComputedStatus = e),
      (l.getWabaToNumberStatus = s),
      (l.getIsPhoneNumberConnected = u),
      (l.getIsAccountRestricted = c),
      (l.getMessagingLimits = d),
      (l.getShowMessageLimitWarning = m),
      (l.getSubscriberCountText = p),
      (l.isViewerAdminOrAccountManager = _));
  },
  98,
);
