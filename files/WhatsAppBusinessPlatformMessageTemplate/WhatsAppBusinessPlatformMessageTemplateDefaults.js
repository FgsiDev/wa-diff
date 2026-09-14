__d(
  "WhatsAppBusinessPlatformMessageTemplateDefaults",
  [
    "WhatsAppBusinessAccountManagerHSMButtonRecord",
    "WhatsAppBusinessAccountManagerHSMComponentRecord",
    "WhatsAppBusinessAccountManagerHSMCreationRecord",
    "WhatsAppBusinessAccountManagerHSMExampleRecordExt",
    "WhatsAppBusinessPlatformAdsManagerMessageTemplateValidator",
    "err",
    "immutable",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o(
        "WhatsAppBusinessPlatformAdsManagerMessageTemplateValidator",
      ).WhatsAppBusinessPlatformAdsManagerMessageTemplateValidator(
        new (r("WhatsAppBusinessAccountManagerHSMCreationRecord"))({
          interpretation: "DIRECT_MAPPING_OF_FIELDS",
          tag: "MARKETING",
          language: "en_US",
          buttons: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))({
            type: "BUTTONS",
            buttons: r("immutable").List([
              new (r("WhatsAppBusinessAccountManagerHSMButtonRecord"))({
                type: "URL",
              }),
            ]),
          }),
          aliases: { header: r("immutable").Map(), body: r("immutable").Map() },
          example: new (r(
            "WhatsAppBusinessAccountManagerHSMExampleRecordExt",
          ))(),
        }),
      )[0],
      s = function (t) {
        var e = t.aliases,
          n = t.body,
          r = t.buttons,
          o = t.example,
          a = t.footer,
          i = t.formatViolations,
          l = t.header,
          s = t.interpretation,
          c = t.language,
          d = t.name,
          m = t.tag;
        return JSON.stringify({
          data: {
            name: d,
            tag: m,
            language: c,
            interpretation: s,
            components: [l, n, a, r]
              .filter(function (e) {
                return !u(e);
              })
              .map(function (e) {
                return JSON.parse(JSON.stringify(e));
              }),
            aliases: e,
            example: o,
            formatViolations: i,
          },
        });
      },
      u = function (t) {
        switch (t.type) {
          case "BODY":
          case "FOOTER":
          case "LIMITED_TIME_OFFER":
            return !r("isStringNotNullAndNotWhitespaceOnly")(t.text);
          case "GREETING":
          case "HEADER":
            return c(t);
          case "BUTTONS":
            return !1;
          case "ALBUM":
            return !1;
          case "CAROUSEL":
            return !1;
          case "CALL_PERMISSION_REQUEST":
            return !1;
          case "TAP_TARGET_CONFIGURATION":
            return !1;
          case "ATTACHMENT":
            return !1;
          default:
            throw (t.type, r("err")("exhaustive switch case"));
        }
      },
      c = function (t) {
        switch (t.format) {
          case "IMAGE":
          case "VIDEO":
          case "DOCUMENT":
            return !1;
          case "LOCATION":
            return !1;
          case "TEXT":
          default:
            return !r("isStringNotNullAndNotWhitespaceOnly")(t.text);
        }
      };
    ((l.DEFAULT_MESSAGE_TEMPLATE = e), (l.getJSONString = s));
  },
  98,
);
