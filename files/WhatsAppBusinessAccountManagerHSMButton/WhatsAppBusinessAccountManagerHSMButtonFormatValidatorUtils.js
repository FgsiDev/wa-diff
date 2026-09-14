__d(
  "WhatsAppBusinessAccountManagerHSMButtonFormatValidatorUtils",
  [
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
    "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
    "WhatsAppHSMAuthContentRestrictionsConstants",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t === !0 ? "CAROUSEL" : "BUTTONS";
      },
      s = function (t, n, r, a, i, l) {
        if (
          i !==
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateCreationSurface.ADS_MANAGER ||
          a !== "BUTTONS"
        )
          return [];
        if (t == null || n == null) return [];
        if (t.length !== 0 || n.length !== 0) return [];
        var e = [];
        return (
          t.length === 0 &&
            e.push(
              babelHelpers.extends(
                { endChar: 0, hsmSection: a, startChar: 0 },
                o(
                  "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                ).getHSMFormatViolation(
                  a,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.EMPTY_PRECONFIGURED_RESPONSE,
                  r,
                  !0,
                  l,
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMButtonInputType.PRECONFIGURED_RESPONSE,
                ),
              ),
            ),
          e
        );
      },
      u = function (t, n) {
        if (
          n !==
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .TemplateCreationSurface.ADS_MANAGER
        )
          return [];
        var e = new Set(),
          a = [];
        return (
          t.forEach(function (t, n) {
            if (r("isStringNotNullAndNotWhitespaceOnly")(t.text)) {
              if (!e.has(t.text)) {
                e.add(t.text);
                return;
              }
              a.push(
                babelHelpers.extends(
                  {
                    endChar: t.text.length - 1,
                    hsmSection: "BUTTONS",
                    startChar: 0,
                  },
                  o(
                    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                  ).getHSMFormatViolation(
                    "BUTTONS",
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolation.DUPLICATE_BUTTON_LABEL,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolationType.BLOCK,
                    !0,
                    n,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMButtonInputType.BUTTON_LABEL,
                  ),
                ),
              );
            }
          }),
          a
        );
      },
      c = function (n, r, a, i, l) {
        l === void 0 && (l = !1);
        var t = [];
        if (
          r ===
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateCreationSurface.ADS_MANAGER &&
          !l &&
          (n == null || n.size === 0)
        ) {
          var c = 0,
            m = 0;
          t.push(
            babelHelpers.extends(
              { endChar: m, hsmSection: "BUTTONS", startChar: c },
              o(
                "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
              ).getHSMFormatViolation(
                "BUTTONS",
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolation.ONLY_ONE_BUTTON_PRESENT,
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolationType.BLOCK,
                !0,
              ),
            ),
          );
        }
        return (
          n != null &&
            (n == null ? void 0 : n.size) > 0 &&
            ((t = t.concat(u(n, r))),
            n.forEach(function (n, l) {
              t = t
                .concat(
                  d(
                    n.text,
                    l,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMButtonInputType.BUTTON_LABEL,
                    r != null
                      ? r
                      : o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                        ).TemplateCreationSurface.WHATSAPP_MANAGER,
                    a,
                    i,
                  ),
                )
                .concat(
                  o(
                    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                  ).getMissingRequiredFieldsFormatViolations(
                    n.text,
                    e(a),
                    r != null
                      ? r
                      : o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                        ).TemplateCreationSurface.WHATSAPP_MANAGER,
                    l,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMButtonInputType.BUTTON_LABEL,
                    a,
                    i,
                  ),
                );
              var u = n.get("type"),
                c = e(a),
                m =
                  r != null
                    ? r
                    : o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).TemplateCreationSurface.WHATSAPP_MANAGER;
              if (u === "PHONE_NUMBER") {
                var f;
                t = t
                  .concat(
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                    ).getPhoneNumberViolations(
                      n.get("phone_number"),
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolationType.BLOCK,
                      c,
                      m,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolation.INVALID_PHONE_NUMBER,
                      l,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMButtonInputType.PHONE_NUMBER,
                      a,
                      i,
                    ),
                  )
                  .concat(
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                    ).getMissingRequiredFieldsFormatViolations(
                      (f = n.get("phone_number")) != null ? f : "",
                      c,
                      m,
                      l,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMButtonInputType.PHONE_NUMBER,
                      a,
                      i,
                    ),
                  );
              }
              if (u === "URL") {
                var g, h;
                t = t
                  .concat(
                    o(
                      "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
                    ).getURLViolations(
                      (g = n.get("url")) != null ? g : "",
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolationType.BLOCK,
                      c,
                      m,
                      l,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMButtonInputType.URL,
                      a,
                      i,
                    ),
                  )
                  .concat(
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                    ).getMissingRequiredFieldsFormatViolations(
                      (h = n.get("url")) != null ? h : "",
                      c,
                      m,
                      l,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMButtonInputType.URL,
                      a,
                      i,
                    ),
                  );
              }
              if (u === "COPY_CODE") {
                var y,
                  C = (y = n.get("example")) == null ? void 0 : y.at(0),
                  b = o(
                    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                  ).getMissingRequiredFieldsFormatViolations(
                    C != null ? C : "",
                    c,
                    m,
                    l,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMButtonInputType.COPY_CODE,
                    a,
                    i,
                  );
                t = t.concat(b);
              }
              if (
                (u === "QUICK_REPLY" &&
                  (t = t.concat(
                    s(
                      n.get("preconfigured_response"),
                      n.get("quick_reply_payload"),
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMFormatViolationType.BLOCK,
                      c,
                      m,
                      l,
                    ),
                  )),
                u === "OTP")
              ) {
                var v = n.get("otp_type");
                if (v === "COPY_CODE") {
                  var S;
                  t = t.concat(
                    o(
                      "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
                    ).getUrlPresentViolations(
                      (S = n.get("text")) != null ? S : "",
                      c,
                      l,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMButtonInputType.BUTTON_LABEL,
                      a,
                      i,
                    ),
                  );
                } else if (v === "ONE_TAP" || v === "ZERO_TAP") {
                  var R, L, E;
                  t = t
                    .concat(
                      o(
                        "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
                      ).getUrlPresentViolations(
                        (R = n.get("text")) != null ? R : "",
                        c,
                        l,
                        o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                        ).HSMButtonInputType.BUTTON_LABEL,
                        a,
                        i,
                      ),
                    )
                    .concat(
                      o(
                        "WhatsAppBusinessAccountManagerHSMURLFormatValidatorUtils",
                      ).getUrlPresentViolations(
                        (L = n.get("autofill_text")) != null ? L : "",
                        c,
                        l,
                        o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                        ).HSMButtonInputType.AUTOFILL_BUTTON_LABEL,
                        a,
                        i,
                      ),
                    );
                  var k = (E = n.get("supported_apps")) != null ? E : [];
                  k.forEach(function (e, n) {
                    var r;
                    t = t
                      .concat(
                        o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                        ).getSignatureHashFormatViolations(
                          e.signature_hash,
                          c,
                          l,
                          (r = o(
                            "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                          )).HSMButtonInputType.AUTOFILL_SIGNATURE_HASH,
                          a,
                          i,
                          n,
                        ),
                      )
                      .concat(
                        o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                        ).getSignatureHashLengthViolations(
                          e.signature_hash,
                          c,
                          l,
                          r.HSMButtonInputType.AUTOFILL_SIGNATURE_HASH,
                          a,
                          i,
                          n,
                        ),
                      )
                      .concat(
                        p(
                          e.package_name,
                          c,
                          l,
                          r.HSMButtonInputType.AUTOFILL_PACKAGE_NAME,
                          a,
                          i,
                          n,
                        ),
                      )
                      .concat(
                        _(
                          e.package_name,
                          c,
                          l,
                          r.HSMButtonInputType.AUTOFILL_PACKAGE_NAME,
                          a,
                          i,
                          n,
                        ),
                      )
                      .concat(
                        o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                        ).getDuplicateSupportedAppViolations(
                          e.package_name,
                          e.signature_hash,
                          k
                            .map(function (e) {
                              var t = e.package_name,
                                n = e.signature_hash;
                              return { packageName: t, signatureHash: n };
                            })
                            .toArray(),
                          c,
                          l,
                          a,
                          i,
                          n,
                        ),
                      );
                  });
                }
                if (v === "ZERO_TAP") {
                  var I;
                  t = t.concat(
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                    ).getFlagNotSetFormatViolations(
                      (I = n.get("zero_tap_terms_accepted")) != null ? I : !1,
                      c,
                      l,
                      o(
                        "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                      ).HSMButtonInputType.ZERO_TAP_FLAG,
                      a,
                      i,
                    ),
                  );
                }
              }
            })),
          t
        );
      },
      d = function (t, n, r, a, i, l) {
        return (
          i === void 0 && (i = !1),
          m(t, n, r, a).concat(
            o(
              "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
            ).getMatchedViolations(
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
                .FORMATTING_MARKUP_REGEX,
              t,
              i === !0 ? "CAROUSEL" : "BUTTONS",
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .HSMFormatViolation.FORMATTING_STYLE,
              o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                .HSMFormatViolationType.BLOCK,
              !0,
              n,
              r,
              i,
              l,
            ),
          )
        );
      },
      m = function (t, n, r, a) {
        var e =
            a ===
            o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
              .TemplateCreationSurface.ADS_MANAGER,
          i = o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolationType.BLOCK;
        return o(
          "WhatsAppBusinessAccountManagerHSMParamsFormatValidatorUtils",
        ).getParamViolations(
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorRegex")
            .INVALID_PARAMETER_REGEX_ARRAY,
          i,
          t,
          "BUTTONS",
          e,
          o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
            .HSMFormatViolation.PARAMETER_IN_BUTTON_TEXT,
          n,
          r,
        );
      },
      p = function (t, n, r, a, i, l, s) {
        return (
          i === void 0 && (i = !1),
          t.length > 0 &&
          !o(
            "WhatsAppBusinessAccountManagerHSMFormatValidatorRegex",
          ).PACKAGE_NAME_REGEX.test(t)
            ? [
                babelHelpers.extends(
                  { endChar: t.length - 1, hsmSection: n },
                  o(
                    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                  ).getHSMFormatViolation(
                    n,
                    o(
                      "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                    ).HSMFormatViolation.INVALID_PACKAGE_NAME,
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
      _ = function (t, n, a, i, l, s, u) {
        return (
          l === void 0 && (l = !1),
          t.length === 0 ||
          t.length >
            r("WhatsAppHSMAuthContentRestrictionsConstants")
              .PACKAGE_NAME_LENGTH_LIMIT
            ? [
                babelHelpers.extends(
                  { endChar: t.length - 1, hsmSection: n },
                  o(
                    "WhatsAppBusinessAccountManagerHSMFormatValidatorUtils",
                  ).getHSMFormatViolation(
                    n,
                    t.length === 0
                      ? o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                        ).HSMFormatViolation.MISSING_REQUIRED_FIELD
                      : o(
                          "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
                        ).HSMFormatViolation.TOO_MANY_CHARACTERS,
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
      };
    ((l.getQuickReplyViolations = s),
      (l.getButtonValidations = c),
      (l.getHSMCTAButtonInputFormatViolations = d),
      (l.getPackageNameFormatViolations = p),
      (l.getPackageNameLengthViolations = _));
  },
  98,
);
