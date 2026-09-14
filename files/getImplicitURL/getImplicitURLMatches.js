__d(
  "getImplicitURLMatches",
  ["URI", "URLMatchUtils", "URLMatcher"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("URLMatchUtils").canonicalizeURL,
      s = n("URLMatchUtils").isURL;
    function u(t, r, o) {
      for (
        var a = t.getText(), i = 0, u = n("URLMatcher").match(a);
        u != null;
      ) {
        var c = a.indexOf(u),
          d = c + u.length,
          m =
            u.startsWith("http://") || u.startsWith("https://")
              ? u
              : "https://" + u;
        (s(l(u)) && (e || (e = n("URI"))).isValidURI(u) && r(i + c, i + d, m),
          (i += d),
          (a = a.substring(d)),
          (u = n("URLMatcher").match(a)));
      }
    }
    a.exports = u;
  },
  null,
);
