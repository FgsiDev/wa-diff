__d(
  "refine/Refine_PrimitiveCheckers",
  ["refine/Refine_Checkers"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("refine/Refine_Checkers")).Path,
      s = e.compose,
      u = e.failure,
      c = e.success;
    function d() {
      return m;
    }
    var m = function (t) {
      return c(t, []);
    };
    function p(e) {
      var t = function (t) {
        return JSON.stringify(t);
      };
      return function (n, r) {
        var o;
        return (
          r === void 0 && (r = new l()),
          n === e
            ? c(e, [])
            : u("value is not literal " + ((o = t(e)) != null ? o : "void"), r)
        );
      };
    }
    function _() {
      return function (e, t) {
        return (
          t === void 0 && (t = new l()),
          typeof e == "boolean" ? c(e, []) : u("value is not a boolean", t)
        );
      };
    }
    function f() {
      return function (e, t) {
        return (
          t === void 0 && (t = new l()),
          typeof e == "number" ? c(e, []) : u("value is not a number", t)
        );
      };
    }
    function g(e) {
      return function (t, n) {
        return (
          n === void 0 && (n = new l()),
          typeof t != "string"
            ? u("value is not a string", n)
            : e != null && !e.test(t)
              ? u("value does not match regex: " + e.toString(), n)
              : c(t, [])
        );
      };
    }
    function h(e) {
      return function (t, n) {
        if ((n === void 0 && (n = new l()), typeof t != "string"))
          return u("value must be a string", n);
        var r = e[t];
        return r == null
          ? u("value is not one of " + Object.keys(e).join(", "), n)
          : c(r, []);
      };
    }
    function y(e) {
      var t = Object.keys(e).reduce(function (t, n) {
          var r;
          return babelHelpers.extends(
            {},
            t,
            ((r = {}), (r[String(e[n])] = e[n]), r),
          );
        }, {}),
        n = h(t);
      return function (e, t) {
        t === void 0 && (t = new l());
        var r = typeof e == "number" ? e.toString() : e,
          o = n(r, t);
        return o.type === "success" && typeof o.value != typeof e
          ? u("input must be the same type as the enum values", t)
          : o;
      };
    }
    function C() {
      return function (e, t) {
        return (
          t === void 0 && (t = new l()),
          e instanceof Date
            ? isNaN(e)
              ? u("invalid date", t)
              : c(e, [])
            : u("value is not a date", t)
        );
      };
    }
    function b() {
      return s(g(), function (e, t) {
        var n = e.value,
          r = e.warnings,
          o = new Date(n);
        return Number.isNaN(o)
          ? u("value is not valid date string", t)
          : c(o, r);
      });
    }
    a.exports = {
      mixed: d,
      literal: p,
      bool: _,
      number: f,
      string: g,
      stringLiterals: h,
      date: C,
      jsonDate: b,
      enumObject: y,
    };
  },
  null,
);
