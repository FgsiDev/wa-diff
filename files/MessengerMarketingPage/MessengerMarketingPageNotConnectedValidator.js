__d(
  "MessengerMarketingPageNotConnectedValidator",
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
              .MessageMarketingIntegrityErrorEnum.MESSENGER_PAGE_NOT_CONNECTED;
          }),
          (t.validate = function (t, n) {
            if (
              !o(
                "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
              ).isAdAccountEligibleForMessengerMarketingLiquidity() ||
              t.hasConnectedPage
            )
              return null;
            var e = s._(
                /*BTDS*/ "No Facebook Page is connected to this campaign. Connect a Page to run Messenger marketing messages.",
              ),
              a = s._(/*BTDS*/ "Page not connected"),
              i = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__MESSENGER_PAGE_NOT_CONNECTED",
                ),
                e,
                { level: r("AdsError").Level.WARN },
              );
            return { errorEnum: this.getErrorEnum(), error: i, header: a };
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
