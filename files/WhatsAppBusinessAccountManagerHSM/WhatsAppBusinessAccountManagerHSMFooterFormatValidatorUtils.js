__d(
  "WhatsAppBusinessAccountManagerHSMFooterFormatValidatorUtils",
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
    var e = function (t, n, r) {
        var e = s(t, n)
          .concat(
            o(
              "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
            ).getNewlineViolations(t, "FOOTER"),
          )
          .concat(
            o(
              "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
            ).getEmojiViolations(t, "FOOTER"),
          );
        return (
          r != null &&
            r.includes(
              o("WhatsAppHSMAuthenticationRestriction")
                .WhatsAppHSMAuthRestriction.NO_URL_IN_CONTENT,
            ) &&
            o("WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils")
              .getUrlPresentViolations(t, "FOOTER")
              .forEach(function (t) {
                return e.push(t);
              }),
          e
        );
      },
      s = function (t, n) {
        var e =
            n ===
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateCreationSurface.ADS_MANAGER,
          r = e
            ? o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .HSMFormatViolationType.BLOCK
            : o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .HSMFormatViolationType.WARN;
        return o(
          "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
        ).getParamViolations(
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .INVALID_PARAMETER_REGEX_ARRAY,
          r,
          t,
          "FOOTER",
          e,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolation.PARAMETER_IN_FOOTER,
        );
      };
    l.getHSMFooterFormatViolations = e;
  },
  98,
);
