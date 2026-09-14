__d(
  "MessageMarketingDefaultSubscriberPoolMissingValidator",
  [
    "fbt",
    "AdsError",
    "MessageMarketingIntegrityError",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getErrorEnum = function () {
            return o("getMessageMarketingIntegrityValidationResults")
              .MessageMarketingIntegrityErrorEnum
              .DEFAULT_SUBSCRIBER_POOL_MISSING;
          }),
          (t.validate = function (t, n) {
            if (!r("gkx")("11469") || t.isMissingDefaultSubscriberPool !== !0)
              return null;
            var e = s._(
                /*BTDS*/ "Your messaging customer base has not been set up. You\u2019ll need to set a customer base for this ad account to run campaigns that include marketing messages.",
              ),
              a = s._(/*BTDS*/ "No messaging customer base set"),
              i = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__DEFAULT_SUBSCRIBER_POOL_IS_MISSING",
                ),
                e,
                { level: r("AdsError").Level.WARN },
              ),
              l = { errorEnum: this.getErrorEnum(), error: i, header: a };
            return l;
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
