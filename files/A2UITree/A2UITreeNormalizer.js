__d(
  "A2UITreeNormalizer",
  ["A2UITreePrimitiveNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["Badge", "Pill"],
        ["Chip", "Pill"],
        ["Code", "CodeBlock"],
        ["CodeSnippet", "CodeBlock"],
        ["DataTable", "Table"],
        ["Dropdown", "ChoicePicker"],
        ["Pre", "CodeBlock"],
        ["Select", "ChoicePicker"],
        ["SourceCode", "CodeBlock"],
        ["StatusTag", "Pill"],
        ["TextInput", "TextField"],
        ["Toggle", "Switch"],
        ["Token", "Pill"],
      ]),
      s = new Map([
        ["accent-solid", "info"],
        ["error", "error"],
        ["info", "info"],
        ["negative-solid", "error"],
        ["positive-solid", "success"],
        ["success", "success"],
        ["warning", "warning"],
        ["warning-solid", "warning"],
      ]);
    function u() {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          a = n[1];
        t.set(o("A2UITreePrimitiveNames").foldA2UIComponentName(r), a);
      }
      return t;
    }
    var c = u();
    function d(e) {
      var t;
      return (t = o("A2UITreePrimitiveNames").resolveA2UIPrimitiveName(e)) !=
        null
        ? t
        : c.get(o("A2UITreePrimitiveNames").foldA2UIComponentName(e));
    }
    var m = new Map([
        ["area", "line_chart"],
        ["bar", "vertical_bar_chart"],
        ["funnel", "funnel_chart"],
        ["horizontal_bar", "horizontal_bar_chart"],
        ["line", "line_chart"],
        ["table", "table"],
      ]),
      p = /^\d{4}-\d{2}-\d{2}/,
      _ = "str",
      f = "date",
      g = "float",
      h = ["value", "id", "key"],
      y = ["label", "text", "title", "name"],
      C = ["options", "choices", "items"];
    function b(e) {
      return typeof e == "string"
        ? e === ""
          ? null
          : e
        : typeof e == "number" || typeof e == "boolean"
          ? String(e)
          : null;
    }
    function v(e) {
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (e != null && typeof e == "object" && !Array.isArray(e)) {
        var t = e.path;
        if (typeof t == "string") return { path: t };
      }
      return null;
    }
    function S(e) {
      var t = b(e);
      if (t != null) return { label: t, value: t };
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var n = e,
        r = null;
      for (var o of y) if (((r = v(n[o])), r != null)) break;
      var a = null;
      for (var i of h) if (((a = b(n[i])), a != null)) break;
      var l = a != null ? a : b(r);
      return l == null ? null : { label: r != null ? r : l, value: l };
    }
    function R(e) {
      var t = e,
        n = C.find(function (e) {
          return Array.isArray(t[e]);
        }),
        r = n == null ? null : t[n];
      if (!Array.isArray(r)) return e;
      var o = n !== "options",
        a = [];
      for (var i of r) {
        var l = S(i);
        if (l == null) {
          o = !0;
          continue;
        }
        if (i == null || typeof i != "object") o = !0;
        else {
          var s = i;
          (s.value !== l.value || s.label !== l.label) && (o = !0);
        }
        a.push(l);
      }
      return o ? babelHelpers.extends({}, e, { options: a }) : e;
    }
    function L(e) {
      var t = e,
        n = e;
      return (
        n.minValue == null &&
          typeof t.min == "number" &&
          (n = babelHelpers.extends({}, n, { minValue: t.min })),
        n.maxValue == null &&
          typeof t.max == "number" &&
          (n = babelHelpers.extends({}, n, { maxValue: t.max })),
        n
      );
    }
    function E(e) {
      return typeof e == "string"
        ? e
        : typeof e == "number" || typeof e == "boolean"
          ? String(e)
          : "";
    }
    function k(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function I(e) {
      var t = e,
        n = t.columns;
      if (!Array.isArray(n)) return e;
      var r = [],
        o = [];
      for (var a of n) {
        if (typeof a == "string") {
          (r.push(a), o.push(a));
          continue;
        }
        var i = k(a),
          l = typeof (i == null ? void 0 : i.key) == "string" ? i.key : null,
          s = typeof (i == null ? void 0 : i.label) == "string" ? i.label : l;
        (r.push(l), o.push(s != null ? s : ""));
      }
      var u = Array.isArray(t.rows) ? t.rows : [],
        c = u.map(function (e) {
          if (Array.isArray(e)) return e.map(E);
          var t = k(e);
          return r.map(function (e) {
            return e == null ? "" : E(t == null ? void 0 : t[e]);
          });
        });
      return babelHelpers.extends({}, e, { headers: o, rows: c });
    }
    function T(e) {
      if (e.component !== "Chart") return e;
      var t = e,
        n = t.chartType,
        r = typeof n == "string" ? m.get(n.toLowerCase()) : null,
        o = Array.isArray(t.data) ? t.data : null,
        a = typeof t.xKey == "string" ? t.xKey : null,
        i = Array.isArray(t.yKeys)
          ? t.yKeys.filter(function (e) {
              return typeof e == "string";
            })
          : [];
      if (r == null || o == null || a == null || i.length === 0) return e;
      var l = o.map(function (e) {
          var t = k(e);
          return [E(t == null ? void 0 : t[a])].concat(
            i.map(function (e) {
              return E(t == null ? void 0 : t[e]);
            }),
          );
        }),
        s =
          l.length > 0 &&
          l.every(function (e) {
            return p.test(e[0]);
          }),
        u = [{ label: a, type: s ? f : _ }].concat(
          i.map(function (e) {
            return { label: e, metric_name: e, type: g };
          }),
        );
      return babelHelpers.extends({}, e, {
        component: "DataViz",
        config: u,
        rows: l,
        variant: r,
      });
    }
    var D = "```",
      x = /^```([A-Za-z0-9+#._-]*)[ \t]*\r?\n([\s\S]*?)\r?\n?```$/;
    function $(e) {
      var t = x.exec(e.trim()),
        n = t == null ? void 0 : t[2];
      if (n == null || n === "" || n.includes(D)) return null;
      var r = t == null ? void 0 : t[1];
      return {
        language: r == null || r === "" ? null : r.toLowerCase(),
        source: n,
      };
    }
    function P(e) {
      if (e.component !== "Text" && e.component !== "MarkdownText") return e;
      var t = e.text;
      if (typeof t != "string") return e;
      var n = $(t);
      if (n == null) return e;
      var r = babelHelpers.extends({}, e, {
        component: "CodeBlock",
        text: n.source,
      });
      return n.language == null
        ? r
        : babelHelpers.extends({}, r, { language: n.language });
    }
    var N = new Map([
      [
        "CodeBlock",
        function (e) {
          var t = e,
            n = e;
          if (n.text == null) {
            var r,
              o = (r = t.code) != null ? r : t.source;
            typeof o == "string" &&
              (n = babelHelpers.extends({}, n, { text: o }));
          }
          n.language == null &&
            typeof t.lang == "string" &&
            (n = babelHelpers.extends({}, n, { language: t.lang }));
          var a = n.text;
          if (typeof a != "string") return n;
          var i = $(a);
          return i == null
            ? n
            : ((n = babelHelpers.extends({}, n, { text: i.source })),
              n.language == null && i.language != null
                ? babelHelpers.extends({}, n, { language: i.language })
                : n);
        },
      ],
      [
        "ChoicePicker",
        function (e) {
          return R(
            e.selections == null && e.value != null
              ? babelHelpers.extends({}, e, { selections: e.value })
              : e,
          );
        },
      ],
      [
        "Icon",
        function (e) {
          var t = e;
          return e.icon == null && typeof t.name == "string"
            ? babelHelpers.extends({}, e, { icon: t.name })
            : e;
        },
      ],
      [
        "Link",
        function (e) {
          var t = e;
          return e.href == null && typeof t.url == "string"
            ? babelHelpers.extends({}, e, { href: t.url })
            : e;
        },
      ],
      ["NumberInput", L],
      [
        "Pill",
        function (e) {
          var t =
            e.label == null && e.text != null
              ? babelHelpers.extends({}, e, { label: e.text })
              : e;
          if (t.status == null && t.variant != null) {
            var n = s.get(t.variant);
            n != null && (t = babelHelpers.extends({}, t, { status: n }));
          }
          return t;
        },
      ],
      ["Slider", L],
      [
        "Switch",
        function (e) {
          return e.value == null && e.checked != null
            ? babelHelpers.extends({}, e, { value: e.checked })
            : e;
        },
      ],
      ["Table", I],
    ]);
    function M(e) {
      var t,
        n,
        r = P(T(e)),
        o = d(r.component),
        a =
          o == null || o === r.component
            ? r
            : babelHelpers.extends({}, r, { component: o });
      return (t = (n = N.get(a.component)) == null ? void 0 : n(a)) != null
        ? t
        : a;
    }
    function w(e) {
      var t = new Map(),
        n = !1;
      for (var r of e.componentMap) {
        var o = r[0],
          a = r[1],
          i = M(a);
        (i !== a && (n = !0), t.set(o, i));
      }
      return n ? babelHelpers.extends({}, e, { componentMap: t }) : e;
    }
    l.normalizeTreeComponents = w;
  },
  98,
);
