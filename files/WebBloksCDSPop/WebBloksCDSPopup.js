__d(
  "WebBloksCDSPopup",
  [
    "WebBloksComponentContext",
    "WebBloksLegacyTraverser",
    "WebBloksPortal",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.node,
        a;
      t[0] !== n
        ? ((a = n.get("x_offset")), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = n.get("y_offset")), (t[2] = n), (t[3] = l))
        : (l = t[3]);
      var u = l,
        m = n.getSubNodes("children"),
        _ = n.get("anchor_view_id"),
        f = o("WebBloksComponentContext").useWebBloksContext(),
        g = f.objectSet,
        h = f.renderChildren,
        y = f.treeManager,
        C = d(),
        b = o("WebBloksLegacyTraverser").findComponentByServerId(
          y,
          _,
          g.environment.traversalKeys,
        ),
        v = g.environment.isRtl,
        S;
      t[4] !== b || t[5] !== v || t[6] !== i || t[7] !== u
        ? ((S = function () {
            var e;
            if (b != null) {
              var t =
                  (e = b.uiMutableContainer.domNode) == null
                    ? void 0
                    : e.current,
                n = C.current;
              if (!(t == null || n == null)) {
                var r = t.getBoundingClientRect(),
                  o = r.bottom + (u != null ? u : 0);
                ((n.style.width = r.width + "px"),
                  (n.style.top = o + "px"),
                  v
                    ? (n.style.right = r.right + (i != null ? i : 0) + "px")
                    : (n.style.left = r.left + (i != null ? i : 0) + "px"));
                var a = o - n.getBoundingClientRect().top;
                a > 0 && (n.style.top = o + a + "px");
              }
            }
          }),
          (t[4] = b),
          (t[5] = v),
          (t[6] = i),
          (t[7] = u),
          (t[8] = S))
        : (S = t[8]);
      var R;
      (t[9] !== b || t[10] !== i || t[11] !== u
        ? ((R = [b, i, u]), (t[9] = b), (t[10] = i), (t[11] = u), (t[12] = R))
        : (R = t[12]),
        c(S, R));
      var L = r("WebBloksPortal"),
        E = p,
        k = h(m),
        I;
      t[13] !== E.root || t[14] !== k
        ? ((I = s.jsx("div", { ref: C, className: E.root, children: k })),
          (t[13] = E.root),
          (t[14] = k),
          (t[15] = I))
        : (I = t[15]);
      var T;
      return (
        t[16] !== L || t[17] !== I
          ? ((T = s.jsx(L, { children: I })),
            (t[16] = L),
            (t[17] = I),
            (t[18] = T))
          : (T = t[18]),
        T
      );
    }
    var p = o("WebBloksStyle").createStyles({ root: { position: "fixed" } });
    l.default = m;
  },
  98,
);
