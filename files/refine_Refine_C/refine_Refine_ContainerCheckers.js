__d(
  "refine/Refine_ContainerCheckers",
  ["refine/Refine_Checkers"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("refine/Refine_Checkers")).Path,
      s = e.compose,
      u = e.failure,
      c = e.success;
    function d(e) {
      if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.prototype;
    }
    function m(e) {
      return function (t, n) {
        if ((n === void 0 && (n = new l()), !Array.isArray(t)))
          return u("value is not an array", n);
        for (var r = t.length, o = new Array(r), a = [], i = 0; i < r; i++) {
          var s = t[i],
            d = e(s, n.extend("[" + i + "]"));
          if (d.type === "failure") return u(d.message, d.path);
          ((o[i] = d.value),
            d.warnings.length !== 0 && a.push.apply(a, d.warnings));
        }
        return c(o, a);
      };
    }
    function p() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e, n) {
        if ((n === void 0 && (n = new l()), !Array.isArray(e)))
          return u("value is not an array", n);
        var r = new Array(t.length),
          o = [];
        for (var a of t.entries()) {
          var i = a[0],
            s = a[1],
            d = s(e[i], n.extend("[" + i + "]"));
          if (d.type === "failure") return u(d.message, d.path);
          ((r[i] = d.value),
            d.warnings.length !== 0 && o.push.apply(o, d.warnings));
        }
        return c(r, o);
      };
    }
    function _(e) {
      return function (t, n) {
        if (
          (n === void 0 && (n = new l()),
          typeof t != "object" || t === null || !d(t))
        )
          return u("value is not an object", n);
        var r = {},
          o = [];
        for (var a of Object.entries(t)) {
          var i = a[0],
            s = a[1],
            m = e(s, n.extend("." + i));
          if (m.type === "failure") return u(m.message, m.path);
          ((r[i] = m.value),
            m.warnings.length !== 0 && o.push.apply(o, m.warnings));
        }
        return c(r, o);
      };
    }
    var f = function (t) {
      this.checker = t;
    };
    function g(e) {
      return new f(function (t, n) {
        n === void 0 && (n = new l());
        var r = e(t, n);
        return r.type === "failure"
          ? babelHelpers.extends({}, r, {
              message: "(optional property) " + r.message,
            })
          : r;
      });
    }
    function h(e) {
      var t = Object.keys(e);
      return function (n, r) {
        if (
          (r === void 0 && (r = new l()),
          typeof n != "object" || n === null || !d(n))
        )
          return u("value is not an object", r);
        var o = {},
          a = [];
        for (var i of t) {
          var s = e[i],
            m = void 0,
            p = void 0;
          if (s instanceof f) {
            if (((m = s.checker), !Object.prototype.hasOwnProperty.call(n, i)))
              continue;
            p = n[i];
          } else
            ((m = s),
              (p = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : void 0));
          var _ = m(p, r.extend("." + i));
          if (_.type === "failure") return u(_.message, _.path);
          ((o[i] = _.value),
            _.warnings.length !== 0 && a.push.apply(a, _.warnings));
        }
        return c(o, a);
      };
    }
    function y(e) {
      return function (t, n) {
        if ((n === void 0 && (n = new l()), !(t instanceof Set)))
          return u("value is not a Set", n);
        var r = new Set(),
          o = [];
        for (var a of t) {
          var i = e(a, n.extend("[]"));
          if (i.type === "failure") return u(i.message, i.path);
          (r.add(i.value), i.warnings.length && o.push.apply(o, i.warnings));
        }
        return c(r, o);
      };
    }
    function C(e, t) {
      return function (n, r) {
        if ((r === void 0 && (r = new l()), !(n instanceof Map)))
          return u("value is not a Map", r);
        var o = new Map(),
          a = [];
        for (var i of n.entries()) {
          var s = i[0],
            d = i[1],
            m = e(s, r.extend("[" + s + "] key"));
          if (m.type === "failure") return u(m.message, m.path);
          var p = t(d, r.extend("[" + s + "]"));
          if (p.type === "failure") return u(p.message, p.path);
          (o.set(s, d), a.push.apply(a, m.warnings.concat(p.warnings)));
        }
        return c(o, a);
      };
    }
    function b(e) {
      return s(m(e), function (e) {
        var t = e.value,
          n = e.warnings;
        return c([].concat(t), n);
      });
    }
    function v(e) {
      return s(_(e), function (e) {
        var t = e.value,
          n = e.warnings;
        return c(babelHelpers.extends({}, t), n);
      });
    }
    function S(e) {
      return s(h(e), function (e) {
        var t = e.value,
          n = e.warnings;
        return c(babelHelpers.extends({}, t), n);
      });
    }
    a.exports = {
      array: m,
      tuple: p,
      object: h,
      optional: g,
      dict: _,
      set: y,
      map: C,
      writableArray: b,
      writableDict: v,
      writableObject: S,
    };
  },
  null,
);
