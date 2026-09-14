__d(
  "MessageMarketingPhoneNumberVirtualNumberDisplayNameUnapprovedValidator",
  [
    "fbt",
    "AdsError",
    "GeoLink.react",
    "MessageMarketingIntegrityError",
    "WhatsAppNameVerificationSummaryStatus",
    "getMessageMarketingIntegrityValidationResults",
    "getWhatsAppManagerLink",
    "gkx",
    "isMessageMarketingPhoneNumberVirtualNumberDisplayNameUnapproved",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      return e
        ? {
            header: s._(/*BTDS*/ "Marketing messages can't be sent"),
            errorMessageContent: s._(
              /*BTDS*/ "The display name for this phone number was rejected. Select a different phone number to send now, or request a review in advertising settings.",
            ),
            footer: s._(/*BTDS*/ "{=m0}", [
              s._implicitParam(
                "=m0",
                u.jsx(r("GeoLink.react"), {
                  href: n,
                  target: "_blank",
                  children: s._(/*BTDS*/ "Request a review"),
                }),
              ),
            ]),
          }
        : t
          ? {
              header: s._(/*BTDS*/ "Marketing messages pending approval"),
              errorMessageContent: s._(
                /*BTDS*/ "The display name for this phone number is pending approval. Select a different phone number to send now, or wait for it to send once approved.",
              ),
              footer: s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(r("GeoLink.react"), {
                    href: n,
                    target: "_blank",
                    children: s._(/*BTDS*/ "Check display name status"),
                  }),
                ),
              ]),
            }
          : {
              header: s._(/*BTDS*/ "Marketing messages can't be sent"),
              errorMessageContent: s._(
                /*BTDS*/ "The WhatsApp Business display name for this phone number has not been approved yet, so you can't include marketing messages in this campaign.",
              ),
              footer: s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(r("GeoLink.react"), {
                    href: n,
                    target: "_blank",
                    children: s._(/*BTDS*/ "Check display name status"),
                  }),
                ),
              ]),
            };
    }
    var d = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getErrorEnum = function () {
            return o("getMessageMarketingIntegrityValidationResults")
              .MessageMarketingIntegrityErrorEnum
              .PROMOTED_WA_PHONE_NUMBER_VIRTUAL_NUMBER_DISPLAY_NAME_UNAPPROVED;
          }),
          (t.validate = function (t, n) {
            var e, a;
            if (
              (!r("gkx")("7744") && !r("gkx")("23124")) ||
              !r(
                "isMessageMarketingPhoneNumberVirtualNumberDisplayNameUnapproved",
              )(t == null ? void 0 : t.promotedWhatsAppNumberData)
            )
              return null;
            var i = r("gkx")("23124"),
              l =
                (e = r("WhatsAppNameVerificationSummaryStatus").cast(
                  t == null || (a = t.promotedWhatsAppNumberData) == null
                    ? void 0
                    : a.displayNameVerificationRequestStatus,
                )) != null
                  ? e
                  : "NONE",
              s = i && l === "REJECTED",
              u = i && l === "PENDING",
              d = r("getWhatsAppManagerLink")(t.businessID, !0),
              m = c(s, u, d),
              p = m.errorMessageContent,
              _ = m.footer,
              f = m.header,
              g = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__VIRTUAL_NUMBER_DISPLAY_NAME_APPROVAL_FOR_WHATS_APP_BUSINESS",
                ),
                p,
                { level: r("AdsError").Level.WARN },
              );
            return {
              errorEnum: this.getErrorEnum(),
              error: g,
              header: f,
              footer: _,
              inlineLink: _,
            };
          }),
          e
        );
      })(),
      m = new d(),
      p = m;
    l.default = p;
  },
  226,
);
