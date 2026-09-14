__d(
  "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
  [
    "WhatsAppBusinessAccountManagerHSMAdsManagerSharedConstants",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 36,
      s = 3584,
      u = 3711,
      c = function (t, n) {
        if (t == null) return [];
        var e;
        switch (n) {
          case o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .TemplateParameterStyle.PARAMETER_NUMBERS:
            e = t.match(
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .REGEX_PARAMS,
            );
            break;
          case o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .TemplateParameterStyle.PARAMETER_ALIASES:
            e = t.match(
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .REGEX_PARAMS_ALIAS,
            );
            break;
        }
        return e == null
          ? []
          : e.map(function (e) {
              return e.slice(2, -2);
            });
      },
      d = function (t, n) {
        var e = [
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .INVALID_PARAMETER_BLOCK_REGEX_1,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .INVALID_PARAMETER_BLOCK_REGEX_2,
        ];
        return _(
          e,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolationType.BLOCK,
          t,
          n,
          !0,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolation.INVALID_PARAMETER,
        );
      },
      m = function (n, r) {
        for (
          var t,
            a = [
              (t = o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex"))
                .INVALID_NAMED_PARAMETER_REGEX,
              t.UPPERCASE_NAMED_PARAMETER_REGEX,
            ],
            i = _(
              a,
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .HSMFormatViolationType.BLOCK,
              n,
              r,
              !0,
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .HSMFormatViolation.INVALID_NAMED_PARAMETER,
            ),
            l = [],
            s = new RegExp(t.REGEX_PARAMS_LIKE.source, "g"),
            u = s.exec(n);
          u !== null;
        )
          (l.push({ index: u.index, match: u[0] }), (u = s.exec(n)));
        var c = new Set(),
          d = new RegExp("^" + t.REGEX_PARAMS_NAMED.source + "$"),
          m = l
            .filter(function (e) {
              var t = e.match;
              return d.test(t);
            })
            .map(function (t) {
              var n = t.index,
                a = t.match,
                i = a.length,
                l = i > e,
                s = c.has(a);
              return (
                c.add(a),
                l || s
                  ? babelHelpers.extends(
                      { endChar: n + i - 1, hsmSection: r, startChar: n },
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                      ).getHSMFormatViolation(
                        r,
                        l
                          ? o(
                              "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                            ).HSMFormatViolation.NAMED_PARAMETER_TOO_LONG
                          : o(
                              "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                            ).HSMFormatViolation.DUPLICATED_NAMED_PARAMETER,
                        o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                        ).HSMFormatViolationType.BLOCK,
                        !0,
                      ),
                    )
                  : null
              );
            })
            .filter(Boolean);
        return i.concat(m);
      },
      p = function (t) {
        for (
          var e = [],
            n = new RegExp(
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .REGEX_PARAMS_NAMED.source,
              "g",
            ),
            r = n.exec(t);
          r != null;
        )
          (e.push(r), (r = n.exec(t)));
        return e;
      },
      _ = function (t, n, r, a, i, l, s, u, c, d) {
        var e = [];
        return (
          t.forEach(function (t) {
            for (var m; (m = t.exec(r)) !== null; )
              if (m !== null) {
                var p =
                  t ===
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                    .INVALID_PARAMETER_BLOCK_REGEX_2
                    ? m.index + m[0].length - 1
                    : m.index;
                e.push(
                  babelHelpers.extends(
                    {
                      endChar: p + m[0].length - 1,
                      hsmSection: a,
                      startChar: p,
                    },
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                    ).getHSMFormatViolation(a, l, n, i, s, u, c, d),
                  ),
                );
              }
          }),
          e
        );
      },
      f = function (t, n, r) {
        (n === void 0 && (n = "POSITIONAL"), r === void 0 && (r = !1));
        var e = 0;
        switch (n) {
          case "POSITIONAL":
            e = k(t, r);
            break;
          case "NAMED":
            e = I(t);
            break;
        }
        return e;
      },
      g = function (t, n, a) {
        if (a !== 1)
          throw r("err")("Only `maxParameters = 1` supported at the moment.");
        var e = t.match(
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .REGEX_PARAMS,
        );
        return e == null || e.length <= a
          ? []
          : [
              babelHelpers.extends(
                { endChar: t.length, hsmSection: n, startChar: 0 },
                o(
                  "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                ).getHSMFormatViolation(
                  n,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.MORE_THAN_ONE_PARAMETER,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolationType.BLOCK,
                  !0,
                ),
              ),
            ];
      },
      h = function (t) {
        var e, n;
        return (
          ((e =
            (n = t.match(
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .REGEX_WORDS_NON_LATIN,
            )) == null
              ? void 0
              : n.length) != null
            ? e
            : 0) > 0
        );
      },
      y = function (t) {
        var e, n;
        return (e =
          (n = t.match(
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
              .REGEX_PARAMS_LIKE,
          )) == null
            ? void 0
            : n.length) != null
          ? e
          : 0;
      },
      C = function () {
        var e = String.fromCodePoint(s),
          t = String.fromCodePoint(u);
        return new RegExp("[" + e + "-" + t + "]", "u");
      };
    function b(e) {
      return C().test(e);
    }
    function v(e) {
      var t = e.match(new RegExp(C().source, "g"));
      if (!t) return 0;
      var n = t.length,
        r = Math.ceil(n / 7),
        o = y(e);
      return r + o;
    }
    var S = function (t) {
        var e,
          n,
          r = t.replace(
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
              .REGEX_INVISIBLE_CHARS,
            "",
          );
        if (b(r)) return v(r);
        var a = h(r);
        if (a) {
          var i,
            l,
            s = y(r);
          return (
            ((i =
              (l = r.match(
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                  .REGEX_WORDS_NON_LATIN,
              )) == null
                ? void 0
                : l.length) != null
              ? i
              : 0) + s
          );
        }
        return (e =
          (n = r.match(
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
              .REGEX_WORDS,
          )) == null
            ? void 0
            : n.length) != null
          ? e
          : 0;
      },
      R = function (t, n, r) {
        (n === void 0 && (n = !1), r === void 0 && (r = "POSITIONAL"));
        var e = [],
          a = f(t, r, n),
          i = S(t);
        return (
          i !== 0 &&
            a / i >
              o("WhatsAppBusinessAccountManagerHSMAdsManagerSharedConstants")
                .TOTAL_PARAMS_TO_TOTAL_WORD_COUNT_ALLOW &&
            e.push(
              babelHelpers.extends(
                { endChar: t.length, hsmSection: "BODY", startChar: t.length },
                o(
                  "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                ).getHSMFormatViolation(
                  "BODY",
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.FLOATING_PARAMETER_RATIO,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolationType.BLOCK,
                  !0,
                ),
              ),
            ),
          e
        );
      },
      L = function (t) {
        var e =
            t.match(
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .FLOATING_NAMED_PARAMETER_ADJ_REGEX,
            ) !== null,
          n =
            t.match(
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .FLOATING_PARAMETER_ADJ_REGEX,
            ) !== null;
        if (!e && !n) return [];
        var r = babelHelpers.extends(
          { endChar: t.length, hsmSection: "BODY", startChar: t.length },
          o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
          ).getHSMFormatViolation(
            "BODY",
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .HSMFormatViolation.FLOATING_PARAMETER_ADJ,
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .HSMFormatViolationType.BLOCK,
            !0,
          ),
        );
        return [r];
      },
      E = function (t) {
        var e,
          n =
            t.match(
              (e = o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex"))
                .LEADING_NAMED_PARAMETER_REGEX,
            ) !== null,
          r = t.match(e.TRAILING_NAMED_PARAMETER_REGEX) !== null,
          a = t.match(e.LEADING_PARAMETER_REGEX) !== null,
          i = t.match(e.TRAILING_PARAMETER_REGEX) !== null;
        if (!n && !r && !a && !i) return [];
        var l = babelHelpers.extends(
          { endChar: t.length, hsmSection: "BODY", startChar: t.length },
          o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
          ).getHSMFormatViolation(
            "BODY",
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .HSMFormatViolation.LEADING_TRAILING_PARAMETER,
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .HSMFormatViolationType.BLOCK,
            !0,
          ),
        );
        return [l];
      },
      k = function (t, n) {
        var e, r;
        return (
          n === void 0 && (n = !1),
          (e =
            (r = t.match(
              n
                ? o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                    .REGEX_PARAMS_ALIAS
                : o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                    .REGEX_PARAMS,
            )) == null
              ? void 0
              : r.filter(function (e, t, n) {
                  return n.indexOf(e) === t;
                }).length) != null
            ? e
            : 0
        );
      },
      I = function (t) {
        var e, n;
        return (e =
          (n = t.match(
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
              .REGEX_PARAMS_NAMED,
          )) == null
            ? void 0
            : n.length) != null
          ? e
          : 0;
      };
    ((l.getParameters = c),
      (l.getInvalidParameterViolations = d),
      (l.getInvalidParameterViolationsForNamedParams = m),
      (l.getNamedParams = p),
      (l.getParamViolations = _),
      (l.numberOfParamsByFormat = f),
      (l.getTooManyParametersViolation = g),
      (l.isTextNonLatinScript = h),
      (l.numberOfWords = S),
      (l.getFloatingParameterRatio = R),
      (l.detectConsecutiveParametersViolation = L),
      (l.detectLeadingTrailingParametersViolation = E),
      (l.numberOfParams = k));
  },
  98,
);
