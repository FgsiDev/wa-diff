__d(
  "MessageMarketingUnavailableWABAValidator",
  [
    "fbt",
    "AdsError",
    "GeoLink.react",
    "MessageMarketingIntegrityError",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
    "isMarketingMessagesWAMEEnabled",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getErrorEnum = function () {
            return o("getMessageMarketingIntegrityValidationResults")
              .MessageMarketingIntegrityErrorEnum
              .PROMOTED_WA_PHONE_NUMBER_UNAVAILABLE;
          }),
          (t.validate = function (t, n) {
            var e, a;
            if (!r("gkx")("7744") || t.promotedWhatsAppNumberData != null)
              return null;
            var i =
                "/adsmanager/manage/advertising_settings/messaging_controls?act=" +
                ((e = t.adAccountID) != null ? e : "") +
                "&business_id=" +
                ((a = t.businessID) != null ? a : ""),
              l = r("isMarketingMessagesWAMEEnabled")()
                ? s._(
                    /*BTDS*/ "Your campaign won\u2019t include marketing messages. To send messages, request permission to an existing WhatsApp account or create a new one.",
                  )
                : s._(
                    /*BTDS*/ "Your campaign won\u2019t include marketing messages. To send messages, request permission to an existing WhatsApp Business account or create a new one.",
                  ),
              c = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__PROMOTED_WABA_UNAVAILABLE",
                ),
                l,
                { level: r("AdsError").Level.WARN },
              ),
              d = s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(r("GeoLink.react"), {
                    href: i,
                    target: "_blank",
                    children: s._(/*BTDS*/ "Add phone number"),
                  }),
                ),
              ]),
              m = this.getErrorEnum();
            return { errorEnum: m, error: c, inlineLink: d };
          }),
          e
        );
      })(),
      d = new c(),
      m = d;
    l.default = m;
  },
  226,
);
