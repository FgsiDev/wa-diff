__d(
  "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
  [
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
    "WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks",
    "WhatsAppMarketingMessageTemplateSerializedFieldSpec",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.values(
        r("WhatsAppMarketingMessageTemplateSerializedFieldSpec"),
      ),
      s = function (t, n) {
        return t.includes(n) ? t : t.set("" + (t.size + 1), n);
      },
      u = function (t) {
        return o("WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks")
          .attemptToRecoverTextHeaderFromBody(t)
          .aliases.header.count();
      },
      c = function (t) {
        return o("WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks")
          .attemptToRecoverTextHeaderFromBody(t)
          .aliases.body.count();
      },
      d = function (n) {
        return n == null
          ? r("immutable").Map()
          : o("WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils")
              .getParameters(
                n,
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .TemplateParameterStyle.PARAMETER_ALIASES,
              )
              .reduce(function (t, n) {
                return e.indexOf(n) >= 0 ? s(t, n) : t;
              }, r("immutable").Map());
      },
      m = function (t, n) {
        var e = p(t, n),
          r = d(e);
        return (
          r.forEach(function (t, n) {
            return (e = e.replaceAll("{{" + t + "}}", "{{" + n + "}}"));
          }),
          [e, r]
        );
      },
      p = function (t, n) {
        return [].concat(Array.from(n.entries())).reduce(function (e, t) {
          var n = t[0],
            r = t[1];
          return e.replaceAll("{{" + n + "}}", "{{" + r + "}}");
        }, t);
      };
    ((l.getNumberOfParametersInHeader = u),
      (l.getNumberOfParametersInBody = c),
      (l.getParameterNumberToAliasesMapping = d),
      (l.getComponentRecordCompatibleStringWithAliasMappings = m),
      (l.getStringWithAliasReplacements = p));
  },
  98,
);
