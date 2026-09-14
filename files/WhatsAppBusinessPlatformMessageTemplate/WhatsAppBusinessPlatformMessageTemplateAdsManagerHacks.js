__d(
  "WhatsAppBusinessPlatformMessageTemplateAdsManagerHacks",
  [
    "$InternalEnum",
    "WhatsAppBusinessAccountManagerHSMComponentRecord",
    "WhatsAppBusinessAccountManagerHSMCreationRecord",
    "WhatsAppBusinessAccountManagerHSMFormatValidatorConstants",
    "WhatsAppBusinessPlatformMessageTemplateExampleRecordUtils",
    "WhatsAppBusinessPlatformMessageTemplateFormDecoratorDefaults",
    "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
    "getMergedHeaderAndBodyTextForTemplate",
    "immutable",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "*",
      s = "\n",
      u = /\*([^\n]+)\*\n/,
      c = 2,
      d = 0,
      m = 1,
      p = "\u200B",
      _ = n("$InternalEnum")({
        HEADER: "header",
        BODY: "body",
        LIMITED_TIME_OFFER: "limited_time_offer",
      }),
      f = r("immutable").Map({ first_name: "Jon", last_name: "Doe" }),
      g = function (t) {
        switch (t) {
          case _.HEADER:
            return "header";
          case _.BODY:
            return "body";
          case _.LIMITED_TIME_OFFER:
            return "limited_time_offer";
        }
      },
      h = function (t) {
        return new (r("WhatsAppBusinessAccountManagerHSMCreationRecord"))(
          babelHelpers.extends({}, t.toObject(), {
            interpretation: "DIRECT_MAPPING_OF_FIELDS",
          }),
        );
      },
      y = function (n) {
        var t = n == null ? void 0 : n.match(u),
          r = t != null && t.length === c;
        if (!r) return !1;
        var o = n == null ? void 0 : n.split(s)[0];
        return o == null ? !1 : o[0] === e && o.slice(-1) === e;
      },
      C = function (t) {
        return b(t.body.text);
      },
      b = function (t) {
        var e = t != null ? t : "",
          n = y(e);
        if (!n) return { header: "", body: e };
        var r = e.indexOf(s);
        return r < 0
          ? { header: "", body: e }
          : { header: e.split(s)[0].slice(1, -1), body: e.slice(r + 1) };
      },
      v = function (n) {
        return r("isStringNotNullAndNotWhitespaceOnly")(n)
          ? "" + e + n + e + s
          : null;
      },
      S = function (t) {
        var e;
        if (!r("isStringNotNullAndNotWhitespaceOnly")(t)) return 0;
        var n = /\{\{([^}]+)\}\}/g;
        return ((e = t.match(n)) == null ? void 0 : e.length) || 0;
      },
      R = function (t, n, a, i) {
        var e = r("getMergedHeaderAndBodyTextForTemplate")(t, n),
          l = o(
            "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
          ).getComponentRecordCompatibleStringWithAliasMappings(
            e,
            a.aliases.body,
          ),
          s = l[0],
          u = l[1];
        return [i ? e : s, { header: r("immutable").Map({}), body: u }];
      },
      L = function (t, n) {
        switch (n.format) {
          case "IMAGE":
          case "VIDEO":
          case "DOCUMENT":
          case "LOCATION": {
            var e,
              r = (e = t.text) == null ? void 0 : e.match(u),
              o = r != null && r.length === c;
            return o
              ? "MEDIA_MESSAGE_WITH_HEADER_IN_BODY"
              : "DIRECT_MAPPING_OF_FIELDS";
          }
          case "TEXT":
          default:
            return "DIRECT_MAPPING_OF_FIELDS";
        }
      },
      E = function (t, n) {
        if (t.interpretation === "MEDIA_MESSAGE_WITH_HEADER_IN_BODY")
          return C(t)[n];
        if (n === _.HEADER && t.get(g(n)).format !== "TEXT") return null;
        if (n === _.LIMITED_TIME_OFFER) {
          var e = t.get(g(n)).text;
          return e !== p ? e : "";
        }
        return t.get(g(n)).text;
      },
      k = function (t, n) {
        return t.interpretation === "MEDIA_MESSAGE_WITH_HEADER_IN_BODY"
          ? t.aliases.body
          : t.aliases[n];
      },
      I = function (t, n) {
        var e;
        if (
          t.interpretation !== "DIRECT_MAPPING_OF_FIELDS" ||
          t.header.format !== "TEXT" ||
          !r("isStringNotNullAndNotWhitespaceOnly")(t.header.text)
        )
          return t;
        var a = R(
            o(
              "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
            ).getStringWithAliasReplacements(t.header.text, t.aliases.header),
            o(
              "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
            ).getStringWithAliasReplacements(
              (e = t.body.text) != null ? e : "",
              t.aliases.body,
            ),
            t,
            n,
          ),
          i = a[0],
          l = a[1];
        return new (r("WhatsAppBusinessAccountManagerHSMCreationRecord"))(
          babelHelpers.extends({}, t.toObject(), {
            interpretation: "MEDIA_MESSAGE_WITH_HEADER_IN_BODY",
            header: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))(
              { type: "HEADER", format: "TEXT", text: null },
            ),
            body: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))({
              type: "BODY",
              text: i,
            }),
            aliases: l,
            example: o(
              "WhatsAppBusinessPlatformMessageTemplateExampleRecordUtils",
            ).getExampleRecordFromAliases(l, r("immutable").Map(), t.example),
          }),
        );
      },
      T = function (t, n) {
        var e, a, i;
        if (
          (n === void 0 && (n = !1),
          t.interpretation !== "MEDIA_MESSAGE_WITH_HEADER_IN_BODY")
        )
          return new (r("WhatsAppBusinessAccountManagerHSMCreationRecord"))(
            babelHelpers.extends({}, h(t).toObject(), {
              header: new (r(
                "WhatsAppBusinessAccountManagerHSMComponentRecord",
              ))({ type: "HEADER", format: "TEXT", text: null }),
            }),
          );
        if (t.header.format === "TEXT") return h(t);
        var l = (e = t.body.text) == null ? void 0 : e.match(u);
        if (!l || l.length !== c) return h(t);
        var s = l[m],
          p =
            (a = (i = t.body.text) == null ? void 0 : i.substr(l[d].length)) !=
            null
              ? a
              : "",
          _ = o(
            "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
          ).getComponentRecordCompatibleStringWithAliasMappings(
            s,
            t.aliases.body,
          ),
          f = _[0],
          g = _[1],
          y = o(
            "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
          ).getComponentRecordCompatibleStringWithAliasMappings(
            p,
            t.aliases.body,
          ),
          C = y[0],
          b = y[1],
          v = { header: g, body: b };
        return new (r("WhatsAppBusinessAccountManagerHSMCreationRecord"))(
          babelHelpers.extends({}, t.toObject(), {
            interpretation: "DIRECT_MAPPING_OF_FIELDS",
            header: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))(
              { type: "HEADER", format: "TEXT", text: n ? s : f },
            ),
            body: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))({
              type: "BODY",
              text: n ? p : C,
            }),
            aliases: v,
            example: o(
              "WhatsAppBusinessPlatformMessageTemplateExampleRecordUtils",
            ).getExampleRecordFromAliases(v, r("immutable").Map(), t.example),
          }),
        );
      },
      D = function (t, n, a, i) {
        var e,
          l = R(
            t,
            n,
            a,
            (e =
              i == null
                ? void 0
                : i.isMarketingMessagesInAdsManagerBetaEnabled) != null
              ? e
              : !1,
          ),
          s = l[0],
          u = l[1],
          c,
          d;
        return (
          !r("isStringNotNullAndNotWhitespaceOnly")(t) && s.startsWith("\n")
            ? ((c = "DIRECT_MAPPING_OF_FIELDS"), (d = s.slice(1)))
            : ((c = "MEDIA_MESSAGE_WITH_HEADER_IN_BODY"), (d = s)),
          new (r("WhatsAppBusinessAccountManagerHSMCreationRecord"))(
            babelHelpers.extends({}, a.toObject(), {
              interpretation: c,
              body: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))(
                { type: "BODY", text: d },
              ),
              aliases: u,
              example: o(
                "WhatsAppBusinessPlatformMessageTemplateExampleRecordUtils",
              ).getExampleRecordFromAliases(
                u,
                o(
                  "WhatsAppBusinessPlatformMessageTemplateFormDecoratorDefaults",
                ).getVariablesOrEmptyMap(i),
                a.example,
              ),
            }),
          )
        );
      },
      x = function (t, n, a, i) {
        if (a.header.format && a.header.format !== "TEXT") return D(t, n, a, i);
        var e = o(
            "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
          ).getComponentRecordCompatibleStringWithAliasMappings(
            t,
            a.aliases.header,
          ),
          l = e[0],
          s = e[1],
          u = o(
            "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
          ).getComponentRecordCompatibleStringWithAliasMappings(
            n,
            a.aliases.body,
          ),
          c = u[0],
          d = u[1],
          m = { header: s, body: d };
        return new (r("WhatsAppBusinessAccountManagerHSMCreationRecord"))(
          babelHelpers.extends({}, a.toObject(), {
            header: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))(
              {
                type: "HEADER",
                format: "TEXT",
                text: a.isOnAdsManagerBetaFlow ? t : l,
              },
            ),
            body: new (r("WhatsAppBusinessAccountManagerHSMComponentRecord"))({
              type: "BODY",
              text: a.isOnAdsManagerBetaFlow ? n : c,
            }),
            interpretation: "DIRECT_MAPPING_OF_FIELDS",
            aliases: m,
            example: o(
              "WhatsAppBusinessPlatformMessageTemplateExampleRecordUtils",
            ).getExampleRecordFromAliases(
              m,
              o(
                "WhatsAppBusinessPlatformMessageTemplateFormDecoratorDefaults",
              ).getVariablesOrEmptyMap(i),
              a.example,
            ),
          }),
        );
      },
      $ = function (t, n) {
        if (t == null) return [];
        if (n.interpretation !== "MEDIA_MESSAGE_WITH_HEADER_IN_BODY") return t;
        var e = C(n),
          r =
            o(
              "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
            ).getNumberOfParametersInHeader(n) > 0 &&
            o(
              "WhatsAppBusinessPlatformMessageTemplateParameterUtils",
            ).getNumberOfParametersInBody(n) === 0;
        return t == null
          ? void 0
          : t.map(function (t) {
              if (
                t.hsmSection !== "BODY" ||
                t.violationTitle ===
                  o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                    .HSMFormatViolation.TOO_MANY_CHARACTERS ||
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolation.MISSING_REQUIRED_FIELD
              )
                return t;
              if (
                t.violationTitle !==
                o("WhatsAppBusinessAccountManagerHSMFormatValidatorConstants")
                  .HSMFormatViolation.FLOATING_PARAMETER_RATIO
              ) {
                if (t.startChar >= e.header.length) return t;
              } else if (!r) return t;
              return babelHelpers.extends({}, t, { hsmSection: "HEADER" });
            });
      },
      P = function (t) {
        var e;
        return (e = t == null ? void 0 : t.message) != null
          ? e
          : t == null
            ? void 0
            : t.link_description;
      };
    ((l.TextContentComponent = _),
      (l.ADS_MANAGER_VARIABLES = f),
      (l.bodyContainsMergedHeader = y),
      (l.getMergedHeaderAndBody = C),
      (l.getMergedHeaderAndBodyFromText = b),
      (l.getFormattedHeadlineText = v),
      (l.getNumberOfParametersInHeadlineText = S),
      (l.getInterpretationFromHeaderAndBody = L),
      (l.getTextContent = E),
      (l.getTextAliases = k),
      (l.attemptToMergeTextHeaderIntoBody = I),
      (l.attemptToRecoverTextHeaderFromBody = T),
      (l.updateHeaderAndBodyText = x),
      (l.getSectionCorrectedFormatViolations = $),
      (l.getVideoTemplateTextFromMessageOrLinkDescription = P));
  },
  98,
);
