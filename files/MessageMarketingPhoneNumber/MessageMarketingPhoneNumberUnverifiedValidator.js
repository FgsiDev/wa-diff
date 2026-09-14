__d(
  "MessageMarketingPhoneNumberUnverifiedValidator",
  [
    "fbt",
    "AdsError",
    "GeoLink.react",
    "MessageMarketingIntegrityError",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
    "isLinkedWhatsAppNumber",
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
              .PROMOTED_WA_PHONE_NUMBER_STATUS_UNVERIFIED;
          }),
          (t.validate = function (t, n) {
            var e, a, i;
            if (
              !r("gkx")("7744") ||
              r("isLinkedWhatsAppNumber")(
                t == null || (e = t.promotedWhatsAppNumberData) == null
                  ? void 0
                  : e.whatsAppNumberConnectionStatus,
              )
            )
              return null;
            var l =
                "/adsmanager/manage/advertising_settings/messaging_controls?act=" +
                ((a = t.adAccountID) != null ? a : "") +
                "&business_id=" +
                ((i = t.businessID) != null ? i : ""),
              c = s._(/*BTDS*/ "Marketing messages can't be sent"),
              d = s._(
                /*BTDS*/ "Your campaign won\u2019t include marketing messages because your phone number is not verified. To send messages, verify your phone number.",
              ),
              m = s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(r("GeoLink.react"), {
                    href: l,
                    target: "_blank",
                    children: s._(/*BTDS*/ "Verify number"),
                  }),
                ),
              ]),
              p = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__WHATS_APP_BUSINESS_PHONE_NUMBER_UNVERIFIED",
                ),
                d,
                { level: r("AdsError").Level.WARN },
              ),
              _ = s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(r("GeoLink.react"), {
                    href: l,
                    target: "_blank",
                    children: s._(/*BTDS*/ "Verify phone number"),
                  }),
                ),
              ]),
              f = this.getErrorEnum();
            return {
              errorEnum: f,
              error: p,
              header: c,
              footer: m,
              inlineLink: _,
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
