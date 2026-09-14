__d(
  "ShowreelNativeDOMProgressUtils",
  ["ExecutionEnvironment", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 0,
      c = "data-sn-progress-id",
      d = (function () {
        function e() {
          ((this.$1 = {}), (this.$2 = {}));
        }
        var t = e.prototype;
        return (
          (t.getID = function (t) {
            return t == null ? void 0 : t.getAttribute(c);
          }),
          (t.getOrCreateID = function (t) {
            var e,
              n = (e = this.getID(t)) != null ? e : String(u++);
            return (t.setAttribute(c, n), n);
          }),
          (t.set = function (t, n) {
            var e = this.getOrCreateID(t);
            this.$1[e] = n;
          }),
          (t.setTimeout = function (t, n) {
            var e = this.getOrCreateID(t);
            this.$2[e] = n;
          }),
          (t.get = function (t) {
            var e = this.getID(t);
            return e != null ? this.$1[e] : null;
          }),
          (t.getTimeout = function (t) {
            var e = this.getID(t);
            return e != null ? this.$2[e] : null;
          }),
          (t.has = function (t) {
            return this.getID(t) != null;
          }),
          (t.remove = function (t, n) {
            var e = this.getID(t);
            e != null && (delete this.$1[e], n && t.removeAttribute(c));
          }),
          (t.removeTimeout = function (t, n) {
            var e = this.getID(t);
            e != null && (delete this.$2[e], n && t.removeAttribute(c));
          }),
          e
        );
      })(),
      m = new d();
    function p(t) {
      var n = m.get(t);
      if (n != null) {
        var o,
          a = (o = n.getProgress()) != null ? o : 0;
        return a * 100;
      }
      var i = m.getTimeout(t);
      if (i != null) {
        var l = i[0],
          s = i[1],
          u = ((e || (e = r("performanceNow")))() - l) % s,
          c = u / s;
        return c * 100;
      }
      return 0;
    }
    function _(e) {
      return m.has(e);
    }
    function f() {
      if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
        var e = document.createElement("div");
        return (m.set(e, null), e);
      }
      return null;
    }
    function g(e, t) {
      m.set(e, t);
    }
    function h(t, n) {
      m.setTimeout(t, [(e || (e = r("performanceNow")))(), n]);
    }
    function y(e) {
      m.remove(e, !1);
    }
    function C(e) {
      m.removeTimeout(e, !1);
    }
    ((l.getShowreelNativeProgress = p),
      (l.hasShowreelNativeProgress = _),
      (l.getNewMedia = f),
      (l.linkMediaToRenderer = g),
      (l.linkMediaToTimeout = h),
      (l.unlinkFromRenderer = y),
      (l.unlinkFromTimeout = C));
  },
  98,
);
