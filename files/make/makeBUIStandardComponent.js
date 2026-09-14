__d(
  "makeBUIStandardComponent",
  [
    "BUIStyleXSheet",
    "cr:1641505",
    "cr:4656",
    "emptyFunction",
    "gkx",
    "hoist-non-react-statics",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = r("gkx")("20861") && window.location.search.includes("geo_theme=1");
    (r("emptyFunction")(n("cr:1641505")), o("BUIStyleXSheet").inject());
    function d(t) {
      var r = n("cr:4656") != null ? n("cr:4656") : u.Fragment;
      function a(n) {
        var a = o("react-compiler-runtime").c(6),
          i,
          l;
        a[0] !== n
          ? ((l = n.ref),
            (i = babelHelpers.objectWithoutPropertiesLoose(n, e)),
            (a[0] = n),
            (a[1] = i),
            (a[2] = l))
          : ((i = a[1]), (l = a[2]));
        var s;
        return (
          a[3] !== i || a[4] !== l
            ? ((s = u.jsx(r, {
                children: u.jsx(t, babelHelpers.extends({}, i, { ref: l })),
              })),
              (a[3] = i),
              (a[4] = l),
              (a[5] = s))
            : (s = a[5]),
          s
        );
      }
      return a;
    }
    function m(e, t) {
      return (
        t.displayName == null && (t.displayName = e),
        r("hoist-non-react-statics")(c ? d(t) : t, t)
      );
    }
    l.default = m;
  },
  98,
);
