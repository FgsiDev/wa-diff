__d(
  "WebARIAComboboxProvider",
  ["emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState,
      m = s.createContext({
        activeDescendant: null,
        setActiveDescendant: r("emptyFunction"),
      });
    function p(e) {
      var t = e.children,
        n = d(null),
        r = n[0],
        o = n[1],
        a = c(
          function () {
            return { activeDescendant: r, setActiveDescendant: o };
          },
          [r],
        );
      return s.jsx(m.Provider, { value: a, children: t });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.WebARIAComboboxContext = m),
      (l.WebARIAComboboxProvider = p));
  },
  98,
);
