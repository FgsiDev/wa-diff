__d(
  "CatalogUnreadableIDCache",
  ["Promise", "err", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = 33,
      c = new Set();
    function d(e) {
      return e != null && e.code === s && e.error_subcode === u;
    }
    function m(e) {
      return c.has(e);
    }
    function p(e, t) {
      return d(t) ? (c.add(e), !0) : !1;
    }
    function _(e) {
      var t = r("err")(
        "Product catalog %s is not readable by the current viewer",
        e,
      );
      return ((t.code = s), (t.error_subcode = u), t);
    }
    function f(t, o) {
      return r("justknobx")._("2680")
        ? o()
        : m(t)
          ? (e || (e = n("Promise"))).reject(_(t))
          : o().catch(function (e) {
              throw (p(t, e), e);
            });
    }
    function g() {
      c.clear();
    }
    ((l.isPermissionError = d),
      (l.isUnreadable = m),
      (l.recordIfPermissionError = p),
      (l.buildUnreadableError = _),
      (l.guardCatalogRead = f),
      (l.resetForTests = g));
  },
  98,
);
