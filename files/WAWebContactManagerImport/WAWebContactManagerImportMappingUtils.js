__d(
  "WAWebContactManagerImportMappingUtils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportCSVValidation",
    "WAWebContactImportFileTypeValidator",
    "WAWebContactImportSmartColumnDetection",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactImportTypedError",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.name.toLowerCase();
      return t.endsWith(".csv")
        ? o("WAWebContactImportFileTypeValidator").FileType.CSV
        : t.endsWith(".xls") ||
            t.endsWith(".xlsx") ||
            o("WAWebContactImportFileTypeValidator").isFileOfType(
              e,
              o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
            )
          ? o("WAWebContactImportFileTypeValidator").FileType.EXCEL
          : o("WAWebContactImportFileTypeValidator").FileType.CSV;
    }
    var c = [
        "fullName",
        "firstName",
        "lastName",
        "phone",
        "leadStage",
        "email",
        "address",
        "notes",
        "acquisitionSource",
      ],
      d = {
        acquisitionSource: "Source",
        address: "Address",
        email: "Email",
        firstName: "First name",
        fullName: "Full name",
        lastName: "Last name",
        leadStage: "Lead stage",
        notes: "Notes",
        phone: "Phone number",
      };
    function m(e) {
      return d[e];
    }
    function p(e) {
      var t = new Set();
      for (var n of e)
        t.add(o("WAWebContactImportSmartColumnDetection").normalizeHeader(n));
      return t;
    }
    var _ = p([
        "email",
        "e-mail",
        "e mail",
        "email address",
        "e mail address",
        "e-mail address",
        "correo",
        "correo electronico",
      ]),
      f = p([
        "address",
        "direccion",
        "direcci\xF3n",
        "endereco",
        "endere\xE7o",
        "adresse",
        "alamat",
      ]),
      g = p(["lead stage", "leadstage", "stage", "etapa", "fase"]),
      h = p([
        "notes",
        "note",
        "remark",
        "remarks",
        "comment",
        "comments",
        "nota",
        "notas",
        "observaciones",
        "observacao",
      ]),
      y = p([
        "source",
        "acquisition source",
        "acquisition",
        "origen",
        "origem",
        "fonte",
      ]),
      C = [
        {
          aliases: (s = o("WAWebContactImportSmartColumnDetection"))
            .PHONE_HEADER_ALIASES,
          key: "phone",
        },
        { aliases: s.FIRST_NAME_HEADER_ALIASES, key: "firstName" },
        { aliases: s.FULL_NAME_HEADER_ALIASES, key: "fullName" },
        { aliases: s.LAST_NAME_HEADER_ALIASES, key: "lastName" },
        { aliases: g, key: "leadStage" },
        { aliases: _, key: "email" },
        { aliases: f, key: "address" },
        { aliases: h, key: "notes" },
        { aliases: y, key: "acquisitionSource" },
      ];
    function b(e) {
      return e === "fullName"
        ? ["firstName", "lastName"]
        : e === "firstName" || e === "lastName"
          ? ["fullName"]
          : [];
    }
    function v() {
      return {
        acquisitionSource: null,
        address: null,
        email: null,
        firstName: null,
        fullName: null,
        lastName: null,
        leadStage: null,
        notes: null,
        phone: null,
      };
    }
    function S(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        d = {};
      for (var m of e)
        if (m.trim() !== "") {
          for (var p of C)
            if (
              d[p.key] == null &&
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                m,
                p.aliases,
              )
            ) {
              d[p.key] = m;
              break;
            }
        }
      var _ = d.firstName != null || d.lastName != null;
      return {
        acquisitionSource: (t = d.acquisitionSource) != null ? t : null,
        address: (n = d.address) != null ? n : null,
        email: (r = d.email) != null ? r : null,
        firstName: (a = d.firstName) != null ? a : null,
        fullName: _ ? null : (i = d.fullName) != null ? i : null,
        lastName: (l = d.lastName) != null ? l : null,
        leadStage: (s = d.leadStage) != null ? s : null,
        notes: (u = d.notes) != null ? u : null,
        phone: (c = d.phone) != null ? c : null,
      };
    }
    function R(e) {
      return e.phone != null && e.phone.trim() !== "";
    }
    function L(e) {
      return e != null && String(e).trim() !== "";
    }
    function E(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return e != null ? String(e) : "";
          })
        : null;
    }
    function k(e) {
      for (var t = 0; t < e.length; t++) {
        var n = E(e[t]);
        if (
          n != null &&
          n.some(function (e) {
            return (
              typeof e == "string" &&
              o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName(e)
            );
          })
        )
          return { headerIndex: t, headers: n };
      }
      for (var r = 0; r < e.length; r++) {
        var a = E(e[r]);
        if (a != null && a.some(L)) return { headerIndex: r, headers: a };
      }
      return null;
    }
    function I(e) {
      for (var t = 0; t < e.length; t++) {
        var n = E(e[t]);
        if (n != null) {
          var r = S(n);
          if (r.phone != null && T(n)) return { data: n, index: t };
        }
      }
      return null;
    }
    function T(e) {
      var t = [];
      for (var n of e) t.push.apply(t, n.split(/[;\t]/));
      var r = S(t);
      return c.some(function (e) {
        return e !== "phone" && r[e] != null;
      });
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (
              u(t) === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ) {
              var n = yield t.arrayBuffer(),
                a = yield r("JSResourceForInteraction")("xlsx")
                  .__setRef("WAWebContactManagerImportMappingUtils")
                  .load(),
                i = a.read(n, { type: "array" }),
                l = i.Sheets[i.SheetNames[0]],
                s = a.utils
                  .sheet_to_json(l, { header: 1, raw: !1 })
                  .map(function (e) {
                    return e.map(function (e) {
                      return e != null ? String(e) : "";
                    });
                  });
              return k(s);
            }
            var c = yield t.text(),
              d = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(c),
              m = yield o(
                "WAWebContactImportCSVValidation",
              ).recoverUndetectableCSVDelimiter(c, d, I),
              p = m.result;
            o("WAWebContactImportCSVValidation").validateCSVParseResult(c, p);
            var _ = k(p.data);
            return (
              _ != null &&
                o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
                  c,
                  p,
                  _.headerIndex,
                  m.separator,
                ),
              _
            );
          } catch (t) {
            if (
              t instanceof
              o("WAWebContactImportTypedError").WAWebContactImportTypedError
            )
              throw t;
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] header extraction failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-extract-headers-failed"),
              null
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      var n = new Map();
      for (var r of c) {
        var a = t[r];
        a != null && a !== "" && n.set(a, d[r]);
      }
      if (n.size === 0) return [].concat(e);
      var i = new Set(n.values());
      return e.map(function (e) {
        var t = n.get(e);
        if (t != null) return t;
        if (
          o(
            "WAWebContactImportTemplateParsingUtils",
          ).isParsedNameOrPhoneFieldName(e)
        )
          return "";
        var r = e.trim().toLowerCase();
        for (var a of i) if (r !== "" && r === a.toLowerCase()) return "";
        return e;
      });
    }
    function P(e) {
      return /[\",\n\r]/.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e;
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n),
            a = yield o(
              "WAWebContactImportCSVValidation",
            ).recoverUndetectableCSVDelimiter(n, r, I),
            i = a.result;
          o("WAWebContactImportCSVValidation").validateCSVParseResult(n, i);
          var l = i.data.map(function (e) {
              return e.map(function (e) {
                return e != null ? String(e) : "";
              });
            }),
            s = k(l);
          if (s == null) return e;
          (o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
            n,
            i,
            s.headerIndex,
            a.separator,
          ),
            (l[s.headerIndex] = [].concat($(l[s.headerIndex], t))));
          var u = l
            .map(function (e) {
              return e.map(P).join(",");
            })
            .join("\n");
          return new File([u], e.name, { type: "text/csv" });
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            o = yield r("JSResourceForInteraction")("xlsx")
              .__setRef("WAWebContactManagerImportMappingUtils")
              .load(),
            a = o.read(n, { type: "array" }),
            i = a.SheetNames[0],
            l = a.Sheets[i],
            s = o.utils
              .sheet_to_json(l, { header: 1, raw: !1 })
              .map(function (e) {
                return e.map(function (e) {
                  return e != null ? String(e) : "";
                });
              }),
            u = k(s);
          if (u == null) return e;
          o.utils.sheet_add_aoa(l, [[].concat($(s[u.headerIndex], t))], {
            origin: { c: 0, r: u.headerIndex },
          });
          var c = o.write(a, { bookType: "xlsx", type: "array" });
          return new File([c], e.name, {
            type:
              e.type ||
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return u(e) ===
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ? w(e, t)
            : N(e, t);
        })),
        O.apply(this, arguments)
      );
    }
    ((l.getContactManagerImportFileType = u),
      (l.TARGET_ORDER = c),
      (l.canonicalHeaderFor = m),
      (l.conflictingNameTargets = b),
      (l.emptyMapping = v),
      (l.suggestImportMapping = S),
      (l.isMappingComplete = R),
      (l.findHeaderRowInMatrix = k),
      (l.findContactManagerHeaderRowForDelimiterRecovery = I),
      (l.extractImportHeaders = D),
      (l.renameHeaderRow = $),
      (l.applyMappingToFile = F));
  },
  98,
);
