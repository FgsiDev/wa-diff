__d(
  "WhatsAppBusinessAccountManagerHSMCardFormatValidatorUtils",
  [
    "WhatsAppBusinessAccountManagerHSMButtonFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e = [];
        return (
          t.forEach(function (t, a) {
            var i;
            e = e
              .concat(
                o(
                  "WhatsAppBusinessAccountManagerHSMButtonFormatValidatorUtils",
                ).getButtonValidations(t.buttons, n, !0, a),
              )
              .concat(
                s(
                  (i = t.bodyText) != null ? i : "",
                  "BODY",
                  n != null
                    ? n
                    : o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).TemplateCreationSurface.WHATSAPP_MANAGER,
                  !0,
                  a,
                  void 0,
                  void 0,
                  r("isStringNotNullAndNotWhitespaceOnly")(t.headerHeadline),
                ),
              );
          }),
          e
        );
      },
      s = function (t, n, a, i, l, s, u, c) {
        var e =
          !r("isStringNotNullAndNotWhitespaceOnly")(t) &&
          a ===
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateCreationSurface.ADS_MANAGER &&
          n !== "LIMITED_TIME_OFFER";
        if (e && c === !1) {
          var d;
          return [
            {
              buttonIndex: s,
              buttonInputType: u,
              cardIndex: l,
              endChar: 0,
              hsmSection: "CAROUSEL",
              isCarousel: i,
              startChar: 0,
              violationCode: (d = o(
                "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
              )).getHSMFormatViolationCode(
                d.HSMFormatViolation.MISSING_REQUIRED_FIELD,
              ),
              violationDescription: d.getHSMFormatViolationFbt(
                n,
                d.HSMFormatViolation.MISSING_REQUIRED_FIELD,
                !0,
                u,
              ),
              violationTitle: d.HSMFormatViolation.MISSING_REQUIRED_FIELD,
              violationType: d.HSMFormatViolationType.BLOCK,
            },
          ];
        }
        return [];
      };
    l.getCardValidations = e;
  },
  98,
);
