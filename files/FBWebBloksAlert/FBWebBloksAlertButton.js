__d(
  "FBWebBloksAlertButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.node,
        a;
      t[0] !== n ? ((a = n.get("text")), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = n.getExpression("on_click")), (t[2] = n), (t[3] = l))
        : (l = t[3]);
      var u = l,
        d = o("WebBloksComponentContext").useWebBloksContext(),
        m = d.executeCatch,
        p = d.objectSet,
        _;
      t[4] !== m || t[5] !== n || t[6] !== p.navigationManager || t[7] !== u
        ? ((_ = function () {
            (p.navigationManager.pop(), u != null && m(n, u, []));
          }),
          (t[4] = m),
          (t[5] = n),
          (t[6] = p.navigationManager),
          (t[7] = u),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      return (
        t[9] !== _ || t[10] !== i
          ? ((f = s.jsx(r("WebBloksAbstractButton"), {
              title: i,
              onClick: _,
              className: c.alertButton,
            })),
            (t[9] = _),
            (t[10] = i),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    var c = o("WebBloksStyle").createStyles({
      alertButton: function (t) {
        var e;
        return (
          (e = {}),
          (e["div" + t] = {
            display: "block",
            borderTop: "1px solid #CED0D4",
            cursor: "pointer",
            lineHeight: 24 / 16,
            padding: "12px 10px",
            pointerEvents: "auto !important",
            marginLeft: "0px !important",
            color: "#1877F2",
            flex: "1 1 0",
          }),
          (e[t + " + " + t] = { borderLeft: "1px solid #CED0D4" }),
          e
        );
      },
    });
    l.default = u;
  },
  98,
);
