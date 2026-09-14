__d(
  "MessageMarketingPhoneNumberRealNumberDisplayNameUnapprovedValidator",
  [
    "fbt",
    "AdsError",
    "GeoLink.react",
    "MessageMarketingIntegrityError",
    "getMessageMarketingIntegrityValidationResults",
    "getWhatsAppManagerLink",
    "gkx",
    "isMessageMarketingPhoneNumberRealNumberDisplayNameUnapproved",
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
              .PROMOTED_WA_PHONE_NUMBER_REAL_NUMBER_DISPLAY_NAME_UNAPPROVED;
          }),
          (t.validate = function (t, n) {
            if (
              !r("gkx")("7744") ||
              !r(
                "isMessageMarketingPhoneNumberRealNumberDisplayNameUnapproved",
              )(t == null ? void 0 : t.promotedWhatsAppNumberData)
            )
              return null;
            var e = r("getWhatsAppManagerLink")(t.businessID, !0),
              a = s._(/*BTDS*/ "WhatsApp Business display name warning"),
              i = s._(
                /*BTDS*/ "The WhatsApp Business display name for this phone number has not been approved yet. If you publish this campaign, people will not see your display name in the chat.",
              ),
              l = s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(r("GeoLink.react"), {
                    href: e,
                    target: "_blank",
                    children: s._(/*BTDS*/ "Check display name status"),
                  }),
                ),
              ]),
              c = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__REAL_NUMBER_DISPLAY_NAME_APPROVAL_FOR_WHATS_APP_BUSINESS",
                ),
                i,
                { level: r("AdsError").Level.RECOMMEND },
              );
            return {
              errorEnum: this.getErrorEnum(),
              error: c,
              header: a,
              footer: l,
              inlineLink: l,
            };
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
