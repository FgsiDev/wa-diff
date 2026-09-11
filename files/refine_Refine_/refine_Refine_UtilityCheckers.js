__d(
  "refine/Refine_UtilityCheckers",
  ["refine/Refine_Checkers"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("refine/Refine_Checkers")).Path,
      s = e.compose,
      u = e.failure,
      c = e.success;
    function d(e, t) {
      return s(e, function (e) {
        var n = e.value,
          r = e.warnings;
        return c(t(n), r);
      });
    }
    function m(e, t, n) {
      return u(
        e +
          ": " +
          n
            .map(function (e) {
              return e.message + " at " + e.path.toString();
            })
            .join(", "),
        t,
      );
    }
    function p(e, t) {
      return function (n, r) {
        r === void 0 && (r = new l());
        var o = e(n, r);
        if (o.type === "success") return c(o.value, o.warnings);
        var a = t(n, r);
        return a.type === "success"
          ? c(a.value, a.warnings)
          : m("value did not match any types in or()", r, [o, a]);
      };
    }
    function _() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e, n) {
        n === void 0 && (n = new l());
        var r = [];
        for (var o of t) {
          var a = o(e, n);
          if (a.type === "success") return c(a.value, a.warnings);
          r.push(a);
        }
        return m("value did not match any types in union", n, r);
      };
    }
    function f() {
      return _.apply(void 0, arguments);
    }
    function g(e, t) {
      var n = t != null ? t : {},
        r = n.nullWithWarningWhenInvalid,
        o = r === void 0 ? !1 : r;
      return function (t, n) {
        if ((n === void 0 && (n = new l()), t == null)) return c(t, []);
        var r = e(t, n);
        if (r.type === "success") return c(r.value, r.warnings);
        if (o) return c(null, [r]);
        var a = r.message,
          i = r.path;
        return u(a, i);
      };
    }
    function h(e, t) {
      var n = t != null ? t : {},
        r = n.undefinedWithWarningWhenInvalid,
        o = r === void 0 ? !1 : r;
      return function (t, n) {
        if ((n === void 0 && (n = new l()), t === void 0)) return c(void 0, []);
        var r = e(t, n);
        if (r.type === "success") return c(r.value, r.warnings);
        if (o) return c(void 0, [r]);
        var a = r.message,
          i = r.path;
        return u(a, i);
      };
    }
    function y(e, t) {
      return function (n, r) {
        if ((r === void 0 && (r = new l()), n == null)) return c(t, []);
        var o = e(n, r);
        return o.type === "failure" || o.value != null ? o : c(t, []);
      };
    }
    function C(e, t) {
      return s(e, function (e, n) {
        var r = e.value,
          o = e.warnings,
          a = t(r),
          i = typeof a == "boolean" ? [a, "value failed constraint check"] : a,
          l = i[0],
          s = i[1];
        return l ? c(r, o) : u(s, n);
      });
    }
    function b(e) {
      return function (t, n) {
        n === void 0 && (n = new l());
        var r = e();
        return r(t, n);
      };
    }
    function v(e, t) {
      return (
        t === void 0 && (t = "failed to return non-null from custom checker."),
        function (n, r) {
          r === void 0 && (r = new l());
          try {
            var o = e(n);
            return o != null ? c(o, []) : u(t, r);
          } catch (e) {
            var a =
              e instanceof Error
                ? e.message
                : typeof e == "string"
                  ? e
                  : "An error occurred in custom checker";
            return u(a, r);
          }
        }
      );
    }
    a.exports = {
      or: p,
      union: _,
      match: f,
      nullable: g,
      voidable: h,
      withDefault: y,
      constraint: C,
      asType: d,
      lazy: b,
      custom: v,
    };
  },
  null,
);
