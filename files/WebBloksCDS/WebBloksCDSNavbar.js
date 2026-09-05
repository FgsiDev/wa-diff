__d(
  "WebBloksCDSNavbar",
  ["WebBloksComponentContext", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode,
        i;
      if (t[0] !== n || t[1] !== a) {
        var l = n.get("content_component");
        ((i = a(l)), (t[0] = n), (t[1] = a), (t[2] = i));
      } else i = t[2];
      return i;
    }
    l.default = e;
  },
  98,
);
