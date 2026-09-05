__d(
  "FBWebBloksPullToRefreshContainerFallback",
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
      var t = o("react-compiler-runtime").c(6),
        n = e.node,
        a;
      t[0] !== n
        ? ((a = n.getExpression("on_click")), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = o("WebBloksComponentContext").useWebBloksContext(),
        u = l.executeCatch,
        d;
      if (t[2] !== u || t[3] !== n || t[4] !== i) {
        var m = function () {
          i != null && u(n, i, []);
        };
        ((d = s.jsx(r("WebBloksAbstractButton"), {
          title: "Refresh",
          onClick: m,
          className: c.alertButton,
        })),
          (t[2] = u),
          (t[3] = n),
          (t[4] = i),
          (t[5] = d));
      } else d = t[5];
      return d;
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
