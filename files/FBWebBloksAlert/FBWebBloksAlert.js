__d(
  "FBWebBloksAlert",
  [
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode,
        i,
        l,
        u,
        d;
      if (t[0] !== n || t[1] !== a) {
        var m = n.getSubNode("primary_button"),
          p = n.getSubNode("negative_button"),
          _;
        (t[6] !== n
          ? ((_ = n.get("message")), (t[6] = n), (t[7] = _))
          : (_ = t[7]),
          (i = _));
        var f;
        (t[8] !== n
          ? ((f = n.get("title")), (t[8] = n), (t[9] = f))
          : (f = t[9]),
          (d = f),
          (l = a(m)),
          (u = a(p)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u),
          (t[5] = d));
      } else ((i = t[2]), (l = t[3]), (u = t[4]), (d = t[5]));
      var g = u,
        h = null;
      if (i !== void 0) {
        var y;
        (t[10] !== i
          ? ((y = s.jsx("div", { className: c.body, children: i })),
            (t[10] = i),
            (t[11] = y))
          : (y = t[11]),
          (h = y));
      }
      var C;
      t[12] !== d
        ? ((C = s.jsx("div", {
            className: c.header,
            children: s.jsx("h4", { className: c.title, children: d }),
          })),
          (t[12] = d),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] !== g || t[15] !== l
        ? ((b = s.jsxs("div", { className: c.footer, children: [g, l] })),
          (t[14] = g),
          (t[15] = l),
          (t[16] = b))
        : (b = t[16]);
      var v;
      return (
        t[17] !== h || t[18] !== C || t[19] !== b
          ? ((v = s.jsx("div", {
              className: c.root,
              children: s.jsxs("div", {
                className: c.content,
                children: [C, h, b],
              }),
            })),
            (t[17] = h),
            (t[18] = C),
            (t[19] = b),
            (t[20] = v))
          : (v = t[20]),
        v
      );
    }
    var c = o("WebBloksStyle").createStyles({
      root: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 900,
      },
      title: { margin: 0 },
      content: {
        backgroundColor: "white",
        width: 500,
        borderRadius: 12,
        margin: 32,
        textAlign: "center",
      },
      header: { padding: 10 },
      footer: { display: "flex" },
      body: {
        borderBottom: "1px solid white",
        borderTop: "1px solid white",
        padding: 10,
      },
    });
    l.default = u;
  },
  98,
);
