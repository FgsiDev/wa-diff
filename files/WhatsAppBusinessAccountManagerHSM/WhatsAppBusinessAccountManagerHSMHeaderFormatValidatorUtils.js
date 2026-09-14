__d(
  "WhatsAppBusinessAccountManagerHSMHeaderFormatValidatorUtils",
  [
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
    "WhatsAppHSMAuthenticationRestriction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = function (t, n) {
        return o(
          "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
        ).getMatchedViolations(
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .ASTERISK_REGEX,
          t,
          n,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolation.ASTERISK_CHARACTERS,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolationType.BLOCK,
          !0,
        );
      },
      u = function (t, n, r, a) {
        var e = [];
        return (
          o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
          ).FORMATTING_STYLE_REGEX_ARRAY.forEach(function (i) {
            e = e.concat(
              o(
                "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
              ).getMatchedViolations(
                i,
                t,
                n,
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolation.FORMATTING_STYLE,
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolationType.BLOCK,
                !0,
                r,
                a,
              ),
            );
          }),
          e
        );
      },
      c = function (n, r) {
        var t = o("WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils")
          .getTooManyParametersViolation(n, "HEADER", e)
          .concat(u(n, "HEADER"))
          .concat(
            o(
              "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
            ).getNewlineViolations(n, "HEADER"),
          )
          .concat(s(n, "HEADER"))
          .concat(
            o(
              "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
            ).getEmojiViolations(n, "HEADER"),
          );
        return (
          r != null &&
            r.includes(
              o("WhatsAppHSMAuthenticationRestriction")
                .WhatsAppHSMAuthRestriction.NO_URL_IN_CONTENT,
            ) &&
            o("WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils")
              .getUrlPresentViolations(n, "HEADER")
              .forEach(function (e) {
                return t.push(e);
              }),
          t
        );
      };
    l.getHSMHeaderFormatViolations = c;
  },
  98,
);
