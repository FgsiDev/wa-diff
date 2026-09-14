__d(
  "AdsAppExperiencesImageUrlExpiry",
  ["ConstUriUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /[?&]oe=([0-9A-Fa-f]+)/,
      s = ["fbcdn", "net"].join(".");
    function u(t) {
      if (t == null || t === "") return null;
      var n = t.match(e);
      if (n == null) return null;
      var r = parseInt(n[1], 16);
      return Number.isNaN(r) ? null : r * 1e3;
    }
    function c(e) {
      var t = u(e);
      return t != null && Date.now() >= t;
    }
    function d(e) {
      return e.some(c);
    }
    function m(e) {
      var t = e.indexOf("?"),
        n = t === -1 ? e : e.slice(0, t),
        r = n.indexOf("//");
      if (r === -1) return n;
      var o = n.indexOf("/", r + 2);
      return o === -1 ? n : n.slice(o);
    }
    function p(e) {
      var t = new Map(),
        n = [];
      for (var r of e) {
        var a,
          i =
            (a = o("ConstUriUtils").getUri(r)) == null ||
            (a = a.getDomain()) == null
              ? void 0
              : a.toLowerCase(),
          l = i != null && (i === s || i.endsWith("." + s)) ? m(r) : r,
          u = t.get(l);
        if (u == null) {
          (t.set(l, n.length), n.push(r));
          continue;
        }
        c(n[u]) && !c(r) && (n[u] = r);
      }
      return n;
    }
    function _(e) {
      var t = p(e);
      return t.length === e.length ? e : r("gkx")("23304") ? t : e;
    }
    ((l.getFbcdnUrlExpiryMs = u),
      (l.isFbcdnUrlExpired = c),
      (l.anyFbcdnUrlExpired = d),
      (l.normalizeFbcdnImageUrl = m),
      (l.dedupeFbcdnImageUrls = p),
      (l.dedupeAppExperiencesRowImageUrls = _));
  },
  98,
);
