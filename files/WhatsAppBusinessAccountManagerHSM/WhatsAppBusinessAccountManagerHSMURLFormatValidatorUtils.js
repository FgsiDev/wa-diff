__d(
  "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
  [
    "HSMUrlUtils",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
    "isStringNotNullAndNotWhitespaceOnly",
    "isValidHttpURL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, i, l, s, u, c) {
        if (
          (u === void 0 && (u = !1),
          i !==
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateCreationSurface.ADS_MANAGER)
        )
          return [];
        var e = [];
        return !r("isStringNotNullAndNotWhitespaceOnly")(t) ||
          !r("isValidHttpURL")(t.trim())
          ? (e.push(
              babelHelpers.extends(
                { endChar: t.length - 1, hsmSection: a, startChar: 0 },
                o(
                  "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                ).getHSMFormatViolation(
                  a,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.INVALID_URL,
                  n,
                  !0,
                  l,
                  s,
                  u,
                  c,
                ),
              ),
            ),
            e)
          : (o("HSMUrlUtils").isWhatsAppDomainUrl(t) &&
              e.push(
                babelHelpers.extends(
                  { endChar: t.length - 1, hsmSection: a, startChar: 0 },
                  o(
                    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                  ).getHSMFormatViolation(
                    a,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolation.BUTTONS_DIRECT_LINK_TO_WHATSAPP,
                    n,
                    !0,
                    l,
                    s,
                  ),
                ),
              ),
            e);
      },
      s = function (t, n, r, a, i, l) {
        return (
          i === void 0 && (i = !1),
          o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
          ).getMatchedViolations(
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
              .URL_REGEX,
            t,
            n,
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .HSMFormatViolation.URL_PRESENT,
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .HSMFormatViolationType.BLOCK,
            !0,
            r,
            a,
            i,
            l,
          )
        );
      };
    ((l.getURLViolations = e), (l.getUrlPresentViolations = s));
  },
  98,
);
