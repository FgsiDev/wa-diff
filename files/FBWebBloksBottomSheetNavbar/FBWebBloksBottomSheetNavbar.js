__d(
  "FBWebBloksBottomSheetNavbar",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksNavbarBackButton",
    "WebBloksStyle",
    "WebBloksTheme",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.objectSet,
        l = a.renderNode,
        u = o("WebBloksEnvironmentContext").useDataBloksName(),
        m = i.navigationManager,
        _;
      t[0] !== n ? ((_ = n.get("title")), (t[0] = n), (t[1] = _)) : (_ = t[1]);
      var f = _,
        g = n.get("trailing_button"),
        h = o("WebBloksBooleanUtils").isTrue(n.get("hide_header_divider")),
        y = m.getScreenCount(!0) > 1,
        C = d(),
        b = d(),
        v,
        S;
      (t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            var e = C.current,
              t = b.current;
            if (!(e == null || t == null)) {
              var n = Math.abs(e.clientWidth - t.clientWidth);
              e.clientWidth > t.clientWidth
                ? (t.style.marginLeft = n + "px")
                : (e.style.marginRight = n + "px");
            }
          }),
          (S = []),
          (t[2] = v),
          (t[3] = S))
        : ((v = t[2]), (S = t[3])),
        c(v, S));
      var R;
      t[4] !== u || t[5] !== n.styleId
        ? ((R = u(n.styleId)), (t[4] = u), (t[5] = n.styleId), (t[6] = R))
        : (R = t[6]);
      var L = h ? null : p.divider,
        E;
      t[7] !== L
        ? ((E = o("WebBloksStyle").classNames(p.root, L)),
          (t[7] = L),
          (t[8] = E))
        : (E = t[8]);
      var k;
      t[9] !== m || t[10] !== y
        ? ((k = y
            ? s.jsx(r("WebBloksNavbarBackButton"), {
                onClick: function () {
                  return m.pop();
                },
              })
            : null),
          (t[9] = m),
          (t[10] = y),
          (t[11] = k))
        : (k = t[11]);
      var I;
      t[12] !== k
        ? ((I = s.jsx("div", {
            className: p.backButtonContainer,
            ref: C,
            children: k,
          })),
          (t[12] = k),
          (t[13] = I))
        : (I = t[13]);
      var T;
      t[14] !== f
        ? ((T = s.jsx("div", {
            className: p.titleContainer,
            children: s.jsx("div", { className: p.title, children: f }),
          })),
          (t[14] = f),
          (t[15] = T))
        : (T = t[15]);
      var D = p,
        x = l(g),
        $;
      t[16] !== D.trailingButton || t[17] !== x
        ? (($ = s.jsx("div", {
            className: D.trailingButton,
            ref: b,
            children: x,
          })),
          (t[16] = D.trailingButton),
          (t[17] = x),
          (t[18] = $))
        : ($ = t[18]);
      var P;
      return (
        t[19] !== $ || t[20] !== R || t[21] !== E || t[22] !== I || t[23] !== T
          ? ((P = s.jsxs(
              "div",
              babelHelpers.extends({}, R, {
                className: E,
                children: [I, T, $],
              }),
            )),
            (t[19] = $),
            (t[20] = R),
            (t[21] = E),
            (t[22] = I),
            (t[23] = T),
            (t[24] = P))
          : (P = t[24]),
        P
      );
    }
    var p = o("WebBloksStyle").createStyles({
      root: {
        backgroundColor: o("WebBloksTheme").WebBloksThemeVars["navbar-bg"],
        boxSizing: "border-box",
        display: "flex",
        height: 52,
        justifyContent: "center",
        padding: 8,
        width: "100%",
        zIndex: 1,
      },
      divider: {
        borderBottomStyle: "solid",
        borderBottomColor: o("WebBloksTheme").WebBloksThemeVars.separator,
        borderBottomWidth: 1,
      },
      backButtonContainer: { display: "flex" },
      titleContainer: {
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        fontWeight: 600,
        justifyContent: "center",
      },
      title: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        overflow: "hidden",
        textAlign: "center",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      trailingButton: {
        display: "flex",
        flexShrink: 0,
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "center",
      },
    });
    l.default = m;
  },
  98,
);
