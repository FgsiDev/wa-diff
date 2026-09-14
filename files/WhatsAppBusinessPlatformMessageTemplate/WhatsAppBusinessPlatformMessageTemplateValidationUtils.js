__d(
  "WhatsAppBusinessPlatformMessageTemplateValidationUtils",
  [
    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
    "WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t.hsmSection.toString() + ";" + t.violationCode;
      },
      s = function (n) {
        var t = new Set();
        return n.filter(function (n) {
          var r = e(n);
          return t.has(r) ? !1 : (t.add(r), !0);
        });
      },
      u = function (t, n, r) {
        var e,
          a,
          i = o(
            "WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks",
          ).getMergedHeaderAndBody(t),
          l =
            t.interpretation !== "MEDIA_MESSAGE_WITH_HEADER_IN_BODY"
              ? t.header.text
              : i.header,
          s =
            t.interpretation !== "MEDIA_MESSAGE_WITH_HEADER_IN_BODY"
              ? t.body.text
              : i.body;
        return o(
          "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
        ).getHSMFormatViolations(
          s || "",
          l || "",
          t.footer.text || "",
          t.buttons.buttons,
          (e = t.limited_time_offer) == null ||
            (e = e.limited_time_offer) == null
            ? void 0
            : e.text,
          (a = t.cards) == null ? void 0 : a.cards,
          null,
          null,
          n,
          r != null ? r : null,
          t.isOnAdsManagerBetaFlow,
        );
      };
    ((l.getUniqueViolationMessages = s),
      (l.getHSMCreationRecordFormatViolations = u));
  },
  98,
);
