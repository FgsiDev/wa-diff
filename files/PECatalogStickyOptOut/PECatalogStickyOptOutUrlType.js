__d(
  "PECatalogStickyOptOutUrlType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        /\/(cart|checkout|wishlist|thank-?you|order[_-]?(confirm(ation)?|complet(e|ion)?|success)|login|sign(up|in)|register|account|password|policies|privacy|terms|refund|returns|search|faq|contact|unsubscribe|404)\b/,
      l = /^https?:\/\/[^/?#]*\/?(\?|#|$)/,
      s = /\/products?(?:\/|[?#]|$)|\/item\/|\/p\/|\/dp\/|variant=/,
      u = /\/collection|\/category|\/shop\/|\/c\//;
    function c(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return !1;
      }
      return (
        (t.protocol === "http:" || t.protocol === "https:") && t.hostname !== ""
      );
    }
    function d(t) {
      var n,
        r = (n = t == null ? void 0 : t.trim()) != null ? n : "";
      if (!c(r)) return null;
      var o = r.toLowerCase();
      return e.test(o)
        ? null
        : l.test(o)
          ? "homepage"
          : s.test(o)
            ? "pdp"
            : u.test(o)
              ? "collection"
              : null;
    }
    i.getStickyOptOutUrlType = d;
  },
  66,
);
