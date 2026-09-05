__d(
  "MAIBALatestTurnBoundary",
  ["MAIBAMessageContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null);
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.userRowIndexFromBottom,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = s.jsx(m.Provider, { value: r, children: n })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function _() {
      var e = o("MAIBAMessageContext").useMAIBAMessageContext(),
        t = e.rowIndexFromBottom,
        n = d(m);
      return t == null || n == null ? !0 : t < n;
    }
    ((l.MAIBALatestTurnBoundaryProvider = p), (l.useIsInLatestTurn = _));
  },
  98,
);
