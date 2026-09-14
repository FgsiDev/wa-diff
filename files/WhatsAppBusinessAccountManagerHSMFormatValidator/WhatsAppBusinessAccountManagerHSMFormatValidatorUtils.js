__d(
  "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
  [
    "EmojiRenderer",
    "WhatsAppBusinessAccountManagerHSMBodyFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMButtonFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMCardFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMFooterFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
    "WhatsAppBusinessAccountManagerHSMHeaderFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
    "WhatsAppBusinessPlatformMessageTemplateFbts",
    "WhatsAppHSMAuthContentRestrictionsConstants",
    "WhatsAppHSMLimitsConfig",
    "WhatsAppMarketingMessageTemplateSerializedFieldSpec",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "\u200B";
    function c(e) {
      var t = e.items;
      return t.map(function (e, t) {
        return s.jsx("li", { children: e }, t);
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = function (t, n, r, a, i, l, s, u) {
        return {
          buttonIndex: i,
          buttonInputType: l,
          cardIndex: u,
          isCarousel: s,
          violationCode: o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
          ).getHSMFormatViolationCode(n),
          violationDescription: o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
          ).getHSMFormatViolationFbt(t, n, a, l),
          violationTitle: n,
          violationType: r,
        };
      },
      m = "Hello {{1}}",
      p = "test",
      _ = 0.3,
      f = function (t) {
        var e =
            t.filter(function (e) {
              return (
                e.violationType ===
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolationType.BLOCK
              );
            }).length > 0,
          n =
            t.filter(function (e) {
              return (
                e.violationType ===
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolationType.WARN
              );
            }).length > 0;
        return [e, n];
      },
      g = function (t) {
        return !r("isStringNotNullAndNotWhitespaceOnly")(t) ||
          !o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
          ).PHONE_NUMBER_REGEX.test(t != null ? t : "")
          ? o("WhatsAppBusinessPlatformMessageTemplateFbts")
              .WHATSAPP_MARKETING_MESSAGE_TEMPLATE_INVALID_PHONE_NUMBER_ERROR
          : null;
      },
      h = function (t, n, r, a, i, l, s, u, c) {
        return (
          u === void 0 && (u = !1),
          g(t) &&
          a ===
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateCreationSurface.ADS_MANAGER
            ? [
                babelHelpers.extends(
                  {
                    endChar: t != null ? t.length - 1 : 0,
                    hsmSection: r,
                    startChar: 0,
                  },
                  d(r, i, n, !0, l, s, u, c),
                ),
              ]
            : []
        );
      },
      y = function (t, n) {
        return n !== p
          ? []
          : t === m
            ? []
            : [
                babelHelpers.extends(
                  {
                    endChar: t.length,
                    hsmSection: "BODY",
                    startChar: t.length,
                  },
                  d(
                    "BODY",
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolation.TEST_TEMPLATE,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolationType.WARN,
                    !1,
                  ),
                ),
              ];
      },
      C = function (t, n, a, i, l, s, u, c, d, m, _) {
        if ((_ === void 0 && (_ = !1), u != null && u === p)) return y(t, u);
        var e =
            l == null
              ? 960
              : r("WhatsAppHSMLimitsConfig")
                  .limited_time_offer_body_text_length,
          f = [];
        return (
          (f = f
            .concat(
              d ===
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .TemplateCreationSurface.ADS_MANAGER
                ? []
                : o(
                    "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
                  ).getInvalidParameterViolations(n, "HEADER"),
            )
            .concat(
              d ===
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .TemplateCreationSurface.ADS_MANAGER
                ? []
                : o(
                    "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
                  ).getInvalidParameterViolations(t, "BODY"),
            )
            .concat(
              o(
                "WhatsAppBusinessAccountManagerHSMHeaderFormatValidatorUtils",
              ).getHSMHeaderFormatViolations(n, m),
            )
            .concat(
              o(
                "WhatsAppBusinessAccountManagerHSMFooterFormatValidatorUtils",
              ).getHSMFooterFormatViolations(
                a,
                d != null
                  ? d
                  : o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).TemplateCreationSurface.WHATSAPP_MANAGER,
                m,
              ),
            )
            .concat(
              d ===
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .TemplateCreationSurface.ADS_MANAGER
                ? v(n, "HEADER")
                : [],
            )
            .concat(
              d ===
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .TemplateCreationSurface.ADS_MANAGER
                ? v(t, "BODY")
                : [],
            )
            .concat(
              o(
                "WhatsAppBusinessAccountManagerHSMBodyFormatValidatorUtils",
              ).getHSMBodyFormatViolations(t, m, !1, !1),
            )
            .concat(
              R(
                t,
                "BODY",
                d != null
                  ? d
                  : o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).TemplateCreationSurface.WHATSAPP_MANAGER,
              ),
            )
            .concat(
              R(
                l != null ? l : "",
                "LIMITED_TIME_OFFER",
                d != null
                  ? d
                  : o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).TemplateCreationSurface.WHATSAPP_MANAGER,
              ),
            )
            .concat(
              b(
                l != null ? l : "",
                r("WhatsAppHSMLimitsConfig")
                  .limited_time_offer_title_text_length,
                "LIMITED_TIME_OFFER",
                d,
              ),
            )
            .concat(b(n, 60, "HEADER", d))
            .concat(
              b(
                t,
                d ===
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .TemplateCreationSurface.ADS_MANAGER
                  ? e
                  : 1024,
                "BODY",
                d,
              ),
            )
            .concat(b(a, 60, "FOOTER", d))),
          s != null && (s == null ? void 0 : s.size) > 0
            ? (f = f.concat(
                o(
                  "WhatsAppBusinessAccountManagerHSMCardFormatValidatorUtils",
                ).getCardValidations(s, d),
              ))
            : (f = f.concat(
                o(
                  "WhatsAppBusinessAccountManagerHSMButtonFormatValidatorUtils",
                ).getButtonValidations(i, d),
              )),
          f.sort(function (e, t) {
            return e.startChar === t.startChar
              ? e.endChar - t.endChar
              : e.startChar - t.startChar;
          }),
          (f = f.concat(
            o(
              "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
            ).getFloatingParameterRatio(t, _),
          )),
          r("isStringNotNullAndNotWhitespaceOnly")(c) &&
            d !==
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .TemplateCreationSurface.ADS_MANAGER &&
            (f = f.concat(L(t, c))),
          f
        );
      },
      b = function (t, n, r, a) {
        if (a == null) return [];
        switch (a) {
          case o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .TemplateCreationSurface.WHATSAPP_MANAGER:
            return [];
          case o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .TemplateCreationSurface.ADS_MANAGER:
            return t.length > n
              ? [
                  babelHelpers.extends(
                    { endChar: t.length, hsmSection: r, startChar: 0 },
                    d(
                      r,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolation.TOO_MANY_CHARACTERS,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolationType.BLOCK,
                      !0,
                    ),
                  ),
                ]
              : [];
        }
      },
      v = function (t, n) {
        var e = [],
          a = Object.keys(
            r("WhatsAppMarketingMessageTemplateSerializedFieldSpec"),
          ).join("|");
        return (
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .INVALID_ALIAS_REGEX(a)
            .exec(t) !== null &&
            e.push(
              babelHelpers.extends(
                { endChar: -1, hsmSection: n, startChar: -1 },
                d(
                  n,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.INVALID_PARAMETER_UNSUPPORTED_ALIAS,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolationType.BLOCK,
                  !0,
                ),
              ),
            ),
          e
        );
      },
      S = function (t, n, r, a, i, l) {
        return (
          i === void 0 && (i = !1),
          t
            ? []
            : [
                babelHelpers.extends(
                  { endChar: 0, hsmSection: n, startChar: 0 },
                  d(
                    n,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolation.FLAG_NOT_CHECKED,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolationType.BLOCK,
                    !0,
                    r,
                    a,
                    i,
                    l,
                  ),
                ),
              ]
        );
      },
      R = function (t, n, a, i, l, s, c) {
        s === void 0 && (s = !1);
        var e =
            !r("isStringNotNullAndNotWhitespaceOnly")(t) &&
            a ===
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .TemplateCreationSurface.ADS_MANAGER &&
            n !== "LIMITED_TIME_OFFER",
          m =
            a ===
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .TemplateCreationSurface.ADS_MANAGER &&
            n === "LIMITED_TIME_OFFER" &&
            t === u;
        return e || m
          ? [
              babelHelpers.extends(
                { endChar: 0, hsmSection: n, startChar: 0 },
                d(
                  n,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.MISSING_REQUIRED_FIELD,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolationType.BLOCK,
                  !0,
                  i,
                  l,
                  s,
                  c,
                ),
              ),
            ]
          : [];
      },
      L = function (t, n) {
        var e = [];
        return (
          (!N(t.toLowerCase(), n.toLowerCase(), _) ||
            !k(t, n, _) ||
            o(
              "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
            ).numberOfParams(t) >
              o(
                "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
              ).numberOfParams(n)) &&
            e.push(
              babelHelpers.extends(
                { endChar: -1, hsmSection: "BODY", startChar: -1 },
                d(
                  "BODY",
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.CHANGES_LIMIT,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolationType.WARN,
                  !1,
                ),
              ),
            ),
          e
        );
      },
      E = function (t) {
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
      k = function (t, n, r) {
        var e = o(
          "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
        ).numberOfWords(n);
        if (e === 0) return !1;
        var a =
          o(
            "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
          ).numberOfWords(t) / e;
        return a >= 1 - r && a <= 1 + r;
      },
      I = function (t) {
        var e = t.match(
          o(
            "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
          ).isTextNonLatinScript(t)
            ? o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .REGEX_WORDS_NON_LATIN
            : o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .REGEX_WORDS,
        );
        return e == null
          ? new Map()
          : [].concat(e).reduce(function (e, t) {
              var n;
              return e.set(t, ((n = e.get(t)) != null ? n : 0) + 1);
            }, new Map());
      },
      T = function (t, n) {
        var e = [];
        for (var r of n.keys()) e.push(t.get(r) || 0);
        return e;
      },
      D = function (t, n) {
        for (var e = 0, r = 0; r < t.length; r++) e += t[r] * n[r];
        return e;
      },
      x = function (t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n] * t[n];
        return Math.sqrt(e);
      },
      $ = function (t, n) {
        return D(t, n) / (x(t) * x(n));
      },
      P = function (t, n) {
        var e = I(t),
          r = I(n),
          o = new Map();
        for (var a of e.keys()) o.set(a, !0);
        for (var i of r.keys()) o.set(i, !0);
        var l = T(e, o),
          s = T(r, o);
        return $(l, s);
      },
      N = function (t, n, r) {
        if (
          o(
            "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
          ).numberOfWords(t) === 0 ||
          o(
            "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
          ).numberOfWords(n) === 0
        )
          return !1;
        var e = P(t, n);
        return e >= 1 - r;
      },
      M = function (t, n, r, o, a, i, l, s, u, c) {
        for (var e = [], m; (m = t.exec(n)) !== null; )
          m !== null &&
            e.push(
              babelHelpers.extends(
                {
                  endChar: m.index + m[0].length - 1,
                  hsmSection: r,
                  startChar: m.index,
                },
                d(r, o, a, i, l, s, u, c),
              ),
            );
        return e;
      },
      w = function (t, n) {
        return M(
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .NEWLINE_REGEX,
          t,
          n,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolation.NEWLINE,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolationType.BLOCK,
          !0,
        );
      },
      A = function (t, n, r, a, i, l, s) {
        return (
          i === void 0 && (i = !1),
          t.length > 0 &&
          !o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
          ).SIGNATURE_HASH_REGEX.test(t)
            ? [
                babelHelpers.extends(
                  { endChar: t.length - 1, hsmSection: n },
                  d(
                    n,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolation.INVALID_SIGNATURE_HASH,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolationType.BLOCK,
                    !0,
                    r,
                    a,
                    i,
                    l,
                  ),
                  { startChar: 0, supportedAppIndex: s },
                ),
              ]
            : []
        );
      },
      F = function (t, n, a, i, l, s, u) {
        return (
          l === void 0 && (l = !1),
          t.length !==
          r("WhatsAppHSMAuthContentRestrictionsConstants")
            .SIGNATURE_HASH_REQUIRED_LENGTH
            ? [
                babelHelpers.extends(
                  { endChar: t.length - 1, hsmSection: n },
                  d(
                    n,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolation.INVALID_SIGNATURE_HASH_LENGTH,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolationType.BLOCK,
                    !0,
                    a,
                    i,
                    l,
                    s,
                  ),
                  { startChar: 0, supportedAppIndex: u },
                ),
              ]
            : []
        );
      },
      O = function (t, n, r, a, i, l, s, u) {
        if (
          (l === void 0 && (l = !1),
          r.filter(function (e) {
            return e.packageName === t && e.signatureHash === n;
          }).length > 1)
        ) {
          var e;
          return [
            babelHelpers.extends(
              { endChar: t.length - 1, hsmSection: a },
              d(
                a,
                (e = o(
                  "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                )).HSMFormatViolation.DUPLICATE_SUPPORTED_APP,
                e.HSMFormatViolationType.BLOCK,
                !0,
                i,
                e.HSMButtonInputType.AUTOFILL_PACKAGE_NAME,
                l,
                s,
              ),
              { startChar: 0, supportedAppIndex: u },
            ),
            babelHelpers.extends(
              { endChar: n.length - 1, hsmSection: a },
              d(
                a,
                e.HSMFormatViolation.DUPLICATE_SUPPORTED_APP,
                e.HSMFormatViolationType.BLOCK,
                !0,
                i,
                e.HSMButtonInputType.AUTOFILL_SIGNATURE_HASH,
                l,
                s,
              ),
              { startChar: 0, supportedAppIndex: u },
            ),
          ];
        }
        return [];
      },
      B = function (t, n) {
        var e = [],
          r = o("EmojiRenderer").parse(t);
        return (
          r.forEach(function (t) {
            e.push(
              babelHelpers.extends(
                {
                  endChar: t.offset + t.length,
                  hsmSection: n,
                  startChar: t.offset,
                },
                d(
                  n,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.EMOJI,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolationType.BLOCK,
                  !0,
                ),
              ),
            );
          }),
          e
        );
      };
    ((l.ViolationListItems = c),
      (l.getHSMFormatViolation = d),
      (l.TEST_TEMPLATE_CONTENT = m),
      (l.TEST_TEMPLATE_NAME = p),
      (l.AUTO_APPROVAL_PERCENTAGE_OF_CHANGES_ALLOW = _),
      (l.getFormatErrorAndWarningStatus = f),
      (l.getPhoneNumberErrorMessage = g),
      (l.getPhoneNumberViolations = h),
      (l.getTestTemplateNameViolations = y),
      (l.getHSMFormatViolations = C),
      (l.getHSMLengthViolations = b),
      (l.getUnsupportedAliasViolation = v),
      (l.getFlagNotSetFormatViolations = S),
      (l.getMissingRequiredFieldsFormatViolations = R),
      (l.getSimilarityViolations = L),
      (l.numberOfParamsLike = E),
      (l.isWordCountDiffWithinReq = k),
      (l.wordCountMap = I),
      (l.isSimilarityWithinReq = N),
      (l.getMatchedViolations = M),
      (l.getNewlineViolations = w),
      (l.getSignatureHashFormatViolations = A),
      (l.getSignatureHashLengthViolations = F),
      (l.getDuplicateSupportedAppViolations = O),
      (l.getEmojiViolations = B));
  },
  98,
);
