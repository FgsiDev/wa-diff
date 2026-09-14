__d(
  "MessengerMarketingSubscriberPoolMissingValidator",
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
              .MESSENGER_SUBSCRIBER_POOL_MISSING_OR_EMPTY;
          }),
          (t.validate = function (t, n) {
            var e;
            if (
              !o(
                "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
              ).isAdAccountEligibleForMessengerMarketingLiquidity() ||
              (t.messengerSubscriberPoolID != null &&
                ((e = t.messengerSubscriberPoolSize) != null ? e : 0) > 0)
            )
              return null;
            var a = new (o(
              "MessageMarketingIntegrityError",
            ).MessageMarketingAdsError)(
              o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__MESSENGER_SUBSCRIBER_POOL_MISSING",
              ),
              s._(
                /*BTDS*/ "This Page doesn't have a messaging customer base. Select a different Page to send marketing messages.",
              ),
              { level: r("AdsError").Level.WARN },
            );
            return {
              errorEnum: this.getErrorEnum(),
              error: a,
              header: s._(/*BTDS*/ "Subscriber pool missing"),
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
