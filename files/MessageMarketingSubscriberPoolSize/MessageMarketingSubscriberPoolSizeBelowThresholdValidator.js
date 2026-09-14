__d(
  "MessageMarketingSubscriberPoolSizeBelowThresholdValidator",
  [
    "AdsError",
    "LowCustomerBaseSizeWarningFbts",
    "MessageMarketingIntegrityConstants",
    "MessageMarketingIntegrityError",
    "MessageMarketingIntegrityValidationCallsites",
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
              .SUBSCRIBER_POOL_SIZE_BELOW_THRESHOLD;
          }),
          (t.validate = function (t, n) {
            if (
              !r("gkx")("6177") ||
              t.campaignSubscriberPoolSizeUpperBound == null ||
              t.campaignSubscriberPoolSizeUpperBound >
                o("MessageMarketingIntegrityConstants")
                  .LOW_SUBSCRIBER_POOL_SIZE_UPPER_BOUND
            )
              return null;
            var e =
                n ===
                  r("MessageMarketingIntegrityValidationCallsites")
                    .CampaignInlineIntegrityError ||
                n ===
                  r("MessageMarketingIntegrityValidationCallsites")
                    .CampaignRHRIntegrityError,
              a = o("LowCustomerBaseSizeWarningFbts").getBelowThresholdMessage(
                e,
                t.hasAutomationAvailable === !0,
              ),
              i = o(
                "LowCustomerBaseSizeWarningFbts",
              ).CUSTOMER_BASE_SIZE_BELOW_THRESHOLD_WARNING_TITLE,
              l = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__SUBSCRIBER_POOL_SIZE_BELOW_THRESHOLD",
                ),
                a,
                { level: r("AdsError").Level.WARN },
              ),
              s = { errorEnum: this.getErrorEnum(), error: l, header: i };
            return s;
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
