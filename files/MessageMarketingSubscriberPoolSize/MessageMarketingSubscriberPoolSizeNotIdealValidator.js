__d(
  "MessageMarketingSubscriberPoolSizeNotIdealValidator",
  [
    "AdsError",
    "LowCustomerBaseSizeWarningFbts",
    "MessageMarketingIntegrityConstants",
    "MessageMarketingIntegrityError",
    "getMessageMarketingIntegrityValidationResults",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5e4,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getErrorEnum = function () {
            return o("getMessageMarketingIntegrityValidationResults")
              .MessageMarketingIntegrityErrorEnum
              .SUBSCRIBER_POOL_SIZE_NOT_IDEAL;
          }),
          (n.validate = function (n, a) {
            if (
              n.campaignSubscriberPoolSizeUpperBound == null ||
              n.campaignSubscriberPoolSizeUpperBound <=
                o("MessageMarketingIntegrityConstants")
                  .LOW_SUBSCRIBER_POOL_SIZE_UPPER_BOUND ||
              n.campaignSubscriberPoolSizeUpperBound >= e
            )
              return null;
            var t = new (o(
              "MessageMarketingIntegrityError",
            ).MessageMarketingAdsError)(
              o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                "MARKETING_MESSAGES__SUBSCRIBER_POOL_SIZE_NOT_IDEAL",
              ),
              o("LowCustomerBaseSizeWarningFbts")
                .CUSTOMER_BASE_SIZE_NOT_IDEAL_UPSELL_AUTOMATION_SETTINGS_AND_DFCA_DESCRIPTION,
              { level: r("AdsError").Level.WARN },
            );
            return {
              errorEnum: this.getErrorEnum(),
              error: t,
              header: o("LowCustomerBaseSizeWarningFbts")
                .CUSTOMER_BASE_SIZE_NOT_IDEAL_WARNING_TITLE,
            };
          }),
          t
        );
      })(),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
