__d(
  "WhatsAppBusinessPlatformMessageTemplateExampleRecordUtils",
  [
    "WhatsAppBusinessAccountManagerHSMExampleRecordExt",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
    "immutable",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map({ first_name: "Jon", last_name: "Doe" }),
      s = function (t, n) {
        return u(t.aliases, n, t.example);
      },
      u = function (n, o, a) {
        var t = null,
          i = n.header.get("1", "");
        i !== "" && (t = o.get(i, e.get(i)));
        var l = !1,
          s = new Array(n.body.count());
        for (var u of n.body.entries()) {
          var c = u[0],
            d = u[1],
            m = o.get(d, e.get(d));
          (l || (l = m == null), (s[parseInt(c, 10) - 1] = m));
        }
        return new (r("WhatsAppBusinessAccountManagerHSMExampleRecordExt"))(
          babelHelpers.extends({}, a == null ? void 0 : a.toObject(), {
            headerExample: t,
            bodyExamples: l ? null : r("immutable").List(s),
          }),
        );
      },
      c = function (t, n) {
        var e, r;
        return d(
          (e = t.body.text) != null ? e : "",
          (r = t.header.text) != null ? r : "",
          n,
          t.example,
        );
      },
      d = function (n, a, i, l) {
        var t = o(
            "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
          ).getParameters(
            a,
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateParameterStyle.PARAMETER_ALIASES,
          ),
          s = t.length > 0 ? t.at(0) : null,
          u = s != null ? i.get(s, e.get(s, "")) : null,
          c = o(
            "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
          ).getParameters(
            n,
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateParameterStyle.PARAMETER_ALIASES,
          ),
          d = c.map(function (t) {
            return i.get(t, e.get(t, ""));
          }),
          m = d.some(r("isStringNullOrEmpty"));
        return new (r("WhatsAppBusinessAccountManagerHSMExampleRecordExt"))(
          babelHelpers.extends({}, l == null ? void 0 : l.toObject(), {
            headerExample: r("isStringNullOrEmpty")(u) ? null : u,
            bodyExamples: !m && d.length > 0 ? r("immutable").List(d) : null,
          }),
        );
      };
    ((l.DEFAULTS = e),
      (l.getExampleRecord = s),
      (l.getExampleRecordFromAliases = u),
      (l.getExampleRecordWithoutAliases = c),
      (l.getExampleRecordByInferringAliasesFromText = d));
  },
  98,
);
