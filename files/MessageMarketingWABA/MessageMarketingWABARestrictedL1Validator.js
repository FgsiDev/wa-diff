__d(
  "MessageMarketingWABARestrictedL1Validator",
  [
    "fbt",
    "AdsError",
    "AdsMessageMarketingTopBlockReasonContentUtils",
    "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
    "AdsUEditorAdgroupMessageMarketingCTAStrings",
    "MessageMarketingIntegrityError",
    "MessageMarketingIntegrityValidationCallsites",
    "WhatsAppBusinessViolationType",
    "WhatsAppViolationReviewUtils",
    "formatDate",
    "getJSEnumSafe",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
    "isMarketingMessagesWAMEEnabled",
    "isMessageMarketingWABARestricted",
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
              .MessageMarketingIntegrityErrorEnum.PROMOTED_WABA_RESTRICTED_L1;
          }),
          (t.validate = function (t, n) {
            var e, a, i;
            if (!r("gkx")("13496") || t.promotedWhatsAppNumberData == null)
              return null;
            var l =
              (e = t.promotedWhatsAppNumberData) == null
                ? void 0
                : e.marketingMessagesIntegrityData;
            if (
              l == null ||
              !r("isMessageMarketingWABARestricted")(
                t.promotedWhatsAppNumberData,
              )
            )
              return null;
            var c = l.accountStatus,
              d = l.restrictionEndTimestamp,
              m = l.violations;
            if (c == null) return null;
            var p =
                (a =
                  (i = t.promotedWhatsAppNumberData) == null
                    ? void 0
                    : i.whatsAppBusinessAccountName) != null
                  ? a
                  : "",
              _ =
                m == null
                  ? void 0
                  : m.find(function (e) {
                      return e.isActionable === !0 && e.isRenderable === !0;
                    }),
              f = r("getJSEnumSafe")(
                r("WhatsAppBusinessViolationType"),
                _ == null ? void 0 : _.violationType,
              ),
              g = r("getJSEnumSafe")(
                r("WhatsAppBusinessViolationType"),
                _ == null ? void 0 : _.violationSubtype,
              );
            if (f == null) return null;
            var h = d === null ? "" : r("formatDate")(d, "M j, Y"),
              y = o("WhatsAppViolationReviewUtils").getWhatsAppViolationReason(
                f,
                g,
              ),
              C =
                (_ == null ? void 0 : _.appealStatus) === "IN_APPEAL" ||
                (_ == null ? void 0 : _.appealStatus) === "REJECTED",
              b =
                _ != null &&
                (_.appealStatus === null || _.appealStatus === "NOT_STARTED"),
              v = r("isMarketingMessagesWAMEEnabled")()
                ? s._(
                    /*BTDS*/ "You requested a review of your WhatsApp account.",
                  )
                : s._(
                    /*BTDS*/ "You requested a review of your WhatsApp Business account.",
                  ),
              S = C
                ? v
                : s._(
                    /*BTDS*/ "{violationReason}{newline1}{newline2}{action header}{newline3} Request a review if you think we made a mistake.",
                    [
                      s._param(
                        "violationReason",
                        o(
                          "AdsMessageMarketingTopBlockReasonContentUtils",
                        ).getContentForWABARestrictedWithRestrictionReason(
                          y,
                          h,
                          p,
                        ),
                      ),
                      s._param("newline1", u.jsx("br", {})),
                      s._param("newline2", u.jsx("br", {})),
                      s._param(
                        "action header",
                        u.jsx("strong", { children: "What you can do" }),
                      ),
                      s._param("newline3", u.jsx("br", {})),
                    ],
                  ),
              R = function () {
                switch (n) {
                  case r("MessageMarketingIntegrityValidationCallsites")
                    .AdgroupIdentityInlineIntegrityError:
                    return o(
                      "AdsMessageMarketingTopBlockReasonContentUtils",
                    ).getWABARestrictedInlineMessage(p, y);
                  case r("MessageMarketingIntegrityValidationCallsites")
                    .AdgroupRHRIntegrityError:
                    return S;
                  default:
                    return S;
                }
              },
              L = new (o(
                "MessageMarketingIntegrityError",
              ).MessageMarketingAdsError)(
                o(
                  "AdsMessageMarketingTopBlockReasonErrorCodeUtils",
                ).getWABARestrictedErrorCodeForL1EditorPreviewSection(C, b),
                R(),
                { level: r("AdsError").Level.WARN },
              ),
              E = this.getErrorEnum();
            return {
              errorEnum: E,
              error: L,
              inlineLink: null,
              inlineMessageCTA: b
                ? o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                    .MARKETING_MESSAGE_REQUEST_REVIEW_BUTTON_LABEL
                : C
                  ? o("AdsUEditorAdgroupMessageMarketingCTAStrings")
                      .MARKETING_MESSAGE_REQUEST_REVIEW_APPEAL_STATUS_BUTTON_LABEL
                  : null,
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
