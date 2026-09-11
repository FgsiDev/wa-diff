__d(
  "adsDescribeRuntimeType",
  ["Promise", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3,
      u = 200,
      c = 32,
      d = 8192,
      m = "<truncated>",
      p = "<unreadable>",
      _ = /^[a-zA-Z_$][a-zA-Z0-9_$]{0,63}$/,
      f = Object.getPrototypeOf({});
    function g(e, t) {
      try {
        var n = e();
        return Number.isInteger(n) && n > 0 ? n : t;
      } catch (e) {
        return t;
      }
    }
    function h() {
      return {
        maxDepth: g(function () {
          return r("justknobx")._("5844");
        }, s),
        maxElementsScanned: g(function () {
          return r("justknobx")._("5845");
        }, c),
        maxKeys: g(function () {
          return r("justknobx")._("5846");
        }, u),
        maxLength: g(function () {
          return r("justknobx")._("5847");
        }, d),
      };
    }
    function y(t) {
      return t instanceof Date
        ? "Date"
        : t instanceof RegExp
          ? "RegExp"
          : t instanceof Map
            ? "Map"
            : t instanceof Set
              ? "Set"
              : t instanceof WeakMap
                ? "WeakMap"
                : t instanceof WeakSet
                  ? "WeakSet"
                  : t instanceof (e || (e = n("Promise")))
                    ? "Promise"
                    : t instanceof Error
                      ? "Error"
                      : null;
    }
    function C(e) {
      try {
        return Object.entries(e).map(function (e) {
          var t = e[0],
            n = e[1];
          return [String(t), n];
        });
      } catch (e) {
        return null;
      }
    }
    function b(e) {
      for (var t of e) {
        var n = t[0];
        if (!_.test(n)) return !1;
      }
      return !0;
    }
    function v(e, t, n) {
      if (e.length === 0) return "?";
      if (t >= n.limits.maxDepth) return m;
      var r = new Set(),
        o = 0;
      for (var a of e) {
        if (n.budget.remaining <= 0) {
          r.add(m);
          break;
        }
        if (o >= n.limits.maxElementsScanned) {
          r.add(m);
          break;
        }
        var i = n.budget.remaining,
          l = R(a, t + 1, n);
        (r.has(l) ? (n.budget.remaining = i) : r.add(l), o++);
      }
      return Array.from(r).sort().join(" | ");
    }
    function S(e, t, n) {
      var r = C(e);
      if (r == null) return "{" + p + "}";
      if (r.length === 0) return "{}";
      if (t >= n.limits.maxDepth) return "{" + m + "}";
      if (r.length > n.limits.maxKeys) {
        var o = r.map(function (e) {
          var t = e[1];
          return t;
        });
        return "{[string]: " + v(o, t, n) + ", " + m + "}";
      }
      if (!b(r)) {
        var a = r.map(function (e) {
          var t = e[1];
          return t;
        });
        return "{[string]: " + v(a, t, n) + "}";
      }
      var i = [],
        l = !1;
      for (var s of r) {
        var u = s[0],
          c = s[1];
        if (n.budget.remaining <= 0) {
          l = !0;
          break;
        }
        i.push(u + ": " + R(c, t + 1, n));
      }
      return (i.sort(), l && i.push(m), "{" + i.join(", ") + "}");
    }
    function R(e, t, n) {
      if (n.budget.remaining <= 0) return m;
      var r = n.budget.remaining,
        o = L(e, t, n),
        a = r - n.budget.remaining;
      return ((n.budget.remaining -= Math.max(0, o.length - a)), o);
    }
    function L(e, t, n) {
      if (e === null) return "null";
      if (e === void 0) return "void";
      if (typeof e == "function") return "Function";
      if (typeof e != "object") return typeof e;
      if (n.seen.has(e)) return "<circular>";
      var r = y(e);
      if (r != null) return r;
      n.seen.add(e);
      try {
        if (Array.isArray(e)) return "Array<" + v(e, t, n) + ">";
        var o = S(e, t, n),
          a = Object.getPrototypeOf(e);
        return a == null || a === f ? o : "interface " + o;
      } finally {
        n.seen.delete(e);
      }
    }
    function E(e, t) {
      return e.length <= t ? e : e.slice(0, t) + m;
    }
    function k(e) {
      try {
        var t = h(),
          n = {
            budget: { remaining: t.maxLength },
            limits: t,
            seen: new Set(),
          };
        return E(R(e, 0, n), t.maxLength);
      } catch (e) {
        return p;
      }
    }
    ((l.DEFAULT_MAX_DEPTH = s),
      (l.DEFAULT_MAX_KEYS = u),
      (l.DEFAULT_MAX_ELEMENTS_SCANNED = c),
      (l.DEFAULT_MAX_LENGTH = d),
      (l.TRUNCATION_MARKER = m),
      (l.UNREADABLE = p),
      (l.adsDescribeRuntimeType = k));
  },
  98,
);
