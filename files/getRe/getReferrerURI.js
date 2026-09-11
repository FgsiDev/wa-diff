__d(
  "getReferrerURI",
  ["ErrorGuard", "URI", "isFacebookURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      if (t.PageTransitions && t.PageTransitions.isInitialized())
        return t.PageTransitions.getReferrerURI();
      var n = (e || (e = r("ErrorGuard"))).applyWithGuard(
        function (e) {
          return (s || (s = r("URI"))).tryParseURI(e);
        },
        null,
        [document.referrer],
      );
      return n && r("isFacebookURI")(n) ? n : null;
    }
    l.default = u;
  },
  98,
);
