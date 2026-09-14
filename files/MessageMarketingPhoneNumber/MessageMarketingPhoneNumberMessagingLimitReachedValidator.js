__d(
  "MessageMarketingPhoneNumberMessagingLimitReachedValidator",
  [
    "fbt",
    "AdsError",
    "GeoLink.react",
    "MessageMarketingIntegrityError",
    "MessageMarketingIntegrityValidationCallsites",
    "getMessageMarketingIntegrityValidationResults",
    "getWhatsAppManagerLink",
    "gkx",
    "isMessageMarketingPhoneNumberMessagingLimitReached",
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
              .PROMOTED_WA_MESSAGING_LIMIT_REACHED;
          }),
          (t.validate = function (t, n) {
            if (
              !r("gkx")("7744") ||
              !r("isMessageMarketingPhoneNumberMessagingLimitReached")(
                t == null ? void 0 : t.promotedWhatsAppNumberData,
              )
            )
              return null;
            var e = r("getWhatsAppManagerLink")(t.businessID, !0),
              a = s._(/*BTDS*/ "Daily messaging limit reached"),
              i = function () {
                var t = s._(
                  /*BTDS*/ "Your business has reached its daily messaging limit so you can\u2019t send marketing messages until the limit is reset. {=m1}",
                  [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("GeoLink.react"), {
                        href: e,
                        target: "_blank",
                        children: s._(
                          /*BTDS*/ "View details in WhatsApp Manager",
                        ),
                      }),
                    ),
                  ],
                );
                switch (n) {
                  case r("MessageMarketingIntegrityValidationCallsites")
                    .AdgroupIdentityInlineIntegrityError:
                    return t;
                  case r("MessageMarketingIntegrityValidationCallsites")
                    .AdgroupRHRIntegrityError:
                    return s._(
                      /*BTDS*/ "Your business has reached its 24-hour messaging limit and can\u2019t send marketing messages right now. Your marketing message will automatically start sending once the limit is reset. {newline}{newline2} This issue doesn\u2019t affect the delivery status of your ad.",
                      [
                        s._param("newline", u.jsx("br", {})),
                        s._param("newline2", u.jsx("br", {})),
                      ],
                    );
                  default:
                    return t;
                }
              },
              l = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__PHONE_NUMBER_MESSAGING_LIMIT_REACHED",
                ),
                i(),
                { level: r("AdsError").Level.RECOMMEND },
              );
            return { header: a, errorEnum: this.getErrorEnum(), error: l };
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
