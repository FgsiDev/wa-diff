__d(
  "MessengerMarketingPageMessagingDisabledValidator",
  [
    "fbt",
    "AdsError",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "MessageMarketingIntegrityError",
    "getMessageMarketingIntegrityValidationResults",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getErrorEnum = function () {
            return o("getMessageMarketingIntegrityValidationResults")
              .MessageMarketingIntegrityErrorEnum
              .MESSENGER_PAGE_MESSAGING_DISABLED;
          }),
          (t.validate = function (t, n) {
            if (
              !o(
                "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
              ).isAdAccountEligibleForMessengerMarketingLiquidity() ||
              !t.hasConnectedPage ||
              t.isMessengerActivated !== !1
            )
              return null;
            var e = new (o(
              "MessageMarketingIntegrityError",
            ).MessageMarketingAdsError)(
              o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__MESSENGER_PAGE_MESSAGING_DISABLED",
              ),
              s._(
                /*BTDS*/ "Messaging is turned off for the connected Facebook Page. Turn on messaging to run Messenger marketing messages.",
              ),
              { level: r("AdsError").Level.WARN },
            );
            return {
              errorEnum: this.getErrorEnum(),
              error: e,
              header: s._(/*BTDS*/ "Messaging disabled"),
            };
          }),
          e
        );
      })(),
      u = new e(),
      c = u;
    l.default = c;
  },
  226,
);
