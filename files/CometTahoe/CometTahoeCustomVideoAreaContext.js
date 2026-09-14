__d(
  "CometTahoeCustomVideoAreaContext",
  ["emptyFunction", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState,
      m = s.createContext({
        customVideoAreaHidden: !0,
        setCustomVideoAreaHidden: r("emptyFunction"),
      });
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = d(!0),
        a = r[0],
        i = r[1],
        l;
      t[0] !== a
        ? ((l = { customVideoAreaHidden: a, setCustomVideoAreaHidden: i }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      return (
        t[2] !== n || t[3] !== u
          ? ((c = s.jsx(m.Provider, { value: u, children: n })),
            (t[2] = n),
            (t[3] = u),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    ((l.CometTahoeCustomVideoAreaContext = m),
      (l.CometTahoeCustomVideoAreaContextProvider = p));
  },
  98,
);
