__d(
  "MessageMarketingSubscriberPoolAutomationRecommendationValidator",
  [
    "AdsError",
    "LowCustomerBaseSizeWarningFbts",
    "MessageMarketingIntegrityConstants",
    "MessageMarketingIntegrityError",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getErrorEnum = function () {
            return o("getMessageMarketingIntegrityValidationResults")
              .MessageMarketingIntegrityErrorEnum
              .SUBSCRIBER_POOL_AUTOMATION_RECCOMENDATION;
          }),
          (t.validate = function (t, n) {
            if (
              !r("gkx")("13496") ||
              t.campaignSubscriberPoolSizeUpperBound == null ||
              t.campaignSubscriberPoolSizeUpperBound <=
                o("MessageMarketingIntegrityConstants")
                  .LOW_SUBSCRIBER_POOL_SIZE_UPPER_BOUND ||
              t.campaignSubscriberPoolSizeUpperBound >= 5e4 ||
              t.hasAutomationAvailable !== !0
            )
              return null;
            var e = o(
                "MessageMarketingIntegrityError",
              ).messageMarketingErrorCode(
                "MARKETING_MESSAGES__SUBSCRIBER_POOL_AUTOMATION_OFF",
              ),
              a = o(
                "LowCustomerBaseSizeWarningFbts",
              ).getLowCustomerBaseSizeWarningCopy(!1, !0),
              i = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(e, a.message, {
                level: r("AdsError").Level.WARN,
              });
            return {
              errorEnum: this.getErrorEnum(),
              error: i,
              header: a.heading,
              inlineMessage: a.message,
              inlineMessageCTA: o("LowCustomerBaseSizeWarningFbts")
                .LOW_CUSTOMER_BASE_SIZE_SYNC_CONTACTS_BUTTON_LABEL,
            };
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
