__d(
  "MessageMarketingWABAPolicyWarningL1Validator",
  [
    "fbt",
    "AdsError",
    "AdsMessageMarketingTopBlockReasonContentTextUtils",
    "AdsMessageMarketingTopBlockReasonContentUtils",
    "GeoLink.react",
    "MessageMarketingIntegrityError",
    "MessageMarketingIntegrityValidationCallsites",
    "WhatsAppBusinessViolationType",
    "WhatsAppViolationReviewUtils",
    "XAdsAccountQualityControllerRouteBuilder",
    "getJSEnumSafe",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
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
              .PROMOTED_WABA_POLICY_WARNING_L1;
          }),
          (t.validate = function (t, n) {
            var e, a, i, l, c, d;
            if (!r("gkx")("13496") || t.promotedWhatsAppNumberData == null)
              return null;
            var m =
              (e = t.promotedWhatsAppNumberData) == null
                ? void 0
                : e.marketingMessagesIntegrityData;
            if (m == null) return null;
            var p = m.accountStatus,
              _ = m.violations;
            if (
              p == null ||
              p !== "COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_POLICY_WARNING"
            )
              return null;
            var f =
                (a =
                  (i = t.promotedWhatsAppNumberData) == null
                    ? void 0
                    : i.whatsAppBusinessAccountName) != null
                  ? a
                  : "",
              g =
                _ == null
                  ? void 0
                  : _.find(function (e) {
                      return e.isActionable === !0 && e.isRenderable === !0;
                    }),
              h = r("getJSEnumSafe")(
                r("WhatsAppBusinessViolationType"),
                g == null ? void 0 : g.violationType,
              ),
              y = r("getJSEnumSafe")(
                r("WhatsAppBusinessViolationType"),
                g == null ? void 0 : g.violationSubtype,
              );
            if (h == null) return null;
            var C = o(
                "WhatsAppViolationReviewUtils",
              ).getWhatsAppViolationReason(h, y),
              b = function () {
                var e = s._(/*BTDS*/ "{violationReasonForInlineMessage}", [
                  s._param(
                    "violationReasonForInlineMessage",
                    o(
                      "AdsMessageMarketingTopBlockReasonContentTextUtils",
                    ).getWABAPolicyWarningInlineMessage(f, C),
                  ),
                ]);
                switch (n) {
                  case r("MessageMarketingIntegrityValidationCallsites")
                    .AdgroupIdentityInlineIntegrityError:
                    return e;
                  case r("MessageMarketingIntegrityValidationCallsites")
                    .AdgroupRHRIntegrityError:
                    return s._(
                      /*BTDS*/ "{violationReason}{newline1}{newline2}{action header}{newline3} Review the {=m7} for best practices.",
                      [
                        s._param(
                          "violationReason",
                          o(
                            "AdsMessageMarketingTopBlockReasonContentUtils",
                          ).getContentForWABAWarningWithRestrictionReason(C, f),
                        ),
                        s._param("newline1", u.jsx("br", {})),
                        s._param("newline2", u.jsx("br", {})),
                        s._param(
                          "action header",
                          u.jsx("strong", { children: "What you can do" }),
                        ),
                        s._param("newline3", u.jsx("br", {})),
                        s._implicitParam(
                          "=m7",
                          u.jsx(r("GeoLink.react"), {
                            href: "https://business.whatsapp.com/policy",
                            target: "_blank",
                            children: s._(
                              /*BTDS*/ "WhatsApp Business Messaging policy",
                            ),
                          }),
                        ),
                      ],
                    );
                  default:
                    return e;
                }
              },
              v = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o("MessageMarketingIntegrityError").messageMarketingErrorCode(
                  "MARKETING_MESSAGES__WABA_POLICY_WARNING",
                ),
                b(),
                { level: r("AdsError").Level.RECOMMEND },
              ),
              S = r("XAdsAccountQualityControllerRouteBuilder").buildURL({
                primary_id: (l = t.businessID) != null ? l : void 0,
                secondary_id:
                  t.businessID != null &&
                  (c =
                    (d = t.promotedWhatsAppNumberData) == null
                      ? void 0
                      : d.whatsAppBusinessAccountID) != null
                    ? c
                    : void 0,
              }),
              R = s._(
                /*BTDS*/ "Request a review on {=m2} if you think we made a mistake.",
                [
                  s._implicitParam(
                    "=m2",
                    u.jsx(r("GeoLink.react"), {
                      href: S,
                      target: "_blank",
                      children: s._(/*BTDS*/ "Business Support Home"),
                    }),
                  ),
                ],
              ),
              L = this.getErrorEnum();
            return { errorEnum: L, error: v, inlineLink: R };
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
