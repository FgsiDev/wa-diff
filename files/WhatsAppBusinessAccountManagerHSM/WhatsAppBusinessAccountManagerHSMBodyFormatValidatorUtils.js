__d(
  "WhatsAppBusinessAccountManagerHSMBodyFormatValidatorUtils",
  [
    "EmojiRenderer",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
    "WhatsAppHSMAuthenticationRestriction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 6,
      u = function (t, n, r) {
        var e = [],
          a = o("EmojiRenderer").countEmoji(t);
        return (
          a > r &&
            e.push(
              babelHelpers.extends(
                { endChar: t.length, hsmSection: n, startChar: 0 },
                o(
                  "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                ).getHSMFormatViolation(
                  n,
                  r === 10
                    ? o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolation.EMOJI_LIMIT
                    : o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolation.UTILITY_EMOJI_LIMIT,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolationType.BLOCK,
                  !0,
                ),
              ),
            ),
          e
        );
      },
      c = function (t, n) {
        return o(
          "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
        ).getMatchedViolations(
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .MULTIPLE_NEWLINES_REGEX,
          t,
          n,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolation.MULTIPLE_NEWLINES,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolationType.BLOCK,
          !0,
        );
      },
      d = function (n, r, a, i) {
        var t = a === !0,
          l = i === !0,
          d = l ? s : e,
          m = c(n, "BODY").concat(t || l ? u(n, "BODY", d) : []);
        return (
          r != null &&
            r.includes(
              o("WhatsAppHSMAuthenticationRestriction")
                .WhatsAppHSMAuthRestriction.NO_URL_IN_CONTENT,
            ) &&
            o("WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils")
              .getUrlPresentViolations(n, "BODY")
              .forEach(function (e) {
                return m.push(e);
              }),
          m
        );
      };
    l.getHSMBodyFormatViolations = d;
  },
  98,
);
