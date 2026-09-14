__d(
  "WhatsAppBusinessPlatformAdsManagerMessageTemplateValidator",
  [
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks",
    "WhatsAppBusinessPlatformMessageTemplateValidationUtils",
    "WhatsAppBusinessPlatformValidator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = o(
        "WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks",
      ).getSectionCorrectedFormatViolations(
        o(
          "WhatsAppBusinessPlatformMessageTemplateValidationUtils",
        ).getHSMCreationRecordFormatViolations(
          t,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .TemplateCreationSurface.ADS_MANAGER,
        ),
        t,
      );
      return [
        t.set("formatViolations", e),
        e.length === 0
          ? o("WhatsAppBusinessPlatformValidator").ValidationResult.Success
          : o("WhatsAppBusinessPlatformValidator").ValidationResult.Failure,
      ];
    };
    l.WhatsAppBusinessPlatformAdsManagerMessageTemplateValidator = e;
  },
  98,
);
