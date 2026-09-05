__d(
  "WebBloksBottomSheet",
  [
    "WebBloksAbstractButton",
    "WebBloksBottomSheetBase",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect;
    function m(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.node,
        a;
      t[0] !== n
        ? ((a = n.getExpression("on_dismiss")), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = n.getExpression("trailing_button_on_click")),
          (t[2] = n),
          (t[3] = l))
        : (l = t[3]);
      var u = l,
        c;
      t[4] !== n
        ? ((c = n.get("trailing_button_accessibility_label")),
          (t[4] = n),
          (t[5] = c))
        : (c = t[5]);
      var m = c,
        f;
      t[6] !== n
        ? ((f = n.get("trailing_button_text")), (t[6] = n), (t[7] = f))
        : (f = t[7]);
      var g = f,
        h = n.get("trailing_button_style"),
        y;
      t[8] !== n ? ((y = n.get("title")), (t[8] = n), (t[9] = y)) : (y = t[9]);
      var C = y,
        b;
      t[10] !== n
        ? ((b = n.get("partial_height_percentage")), (t[10] = n), (t[11] = b))
        : (b = t[11]);
      var v = b,
        S = o("WebBloksComponentContext").useWebBloksContext(),
        R;
      t[12] !== S.objectSet.navigationManager
        ? ((R = function () {
            S.objectSet.navigationManager.pop();
          }),
          (t[12] = S.objectSet.navigationManager),
          (t[13] = R))
        : (R = t[13]);
      var L = R,
        E;
      t[14] !== S.objectSet.navigationManager || t[15] !== i
        ? ((E = function () {
            if (i != null) {
              var e;
              (e = S.objectSet.navigationManager.getCurrentModal()) == null ||
                e.setDismissCallback(i);
            }
          }),
          (t[14] = S.objectSet.navigationManager),
          (t[15] = i),
          (t[16] = E))
        : (E = t[16]);
      var k;
      (t[17] !== S || t[18] !== i
        ? ((k = [S, i]), (t[17] = S), (t[18] = i), (t[19] = k))
        : (k = t[19]),
        d(E, k));
      var I,
        T = r("useClickablePropsForWebBloks")(n, u);
      u != null &&
        (I = s.jsx(
          r("WebBloksAbstractButton"),
          babelHelpers.extends(
            {
              trailing: !0,
              accessibility_label: m,
              title: g,
              icon: p(S.objectSet, h),
            },
            T,
          ),
        ));
      var D;
      t[20] !== L || t[21] !== S.objectSet
        ? ((D =
            S.objectSet.navigationManager.getModalCount() > 1
              ? s.jsx(r("WebBloksAbstractButton"), {
                  icon: S.objectSet.getAsset("chevronLeft24"),
                  accessibility_label: "Back",
                  onClick: L,
                })
              : null),
          (t[20] = L),
          (t[21] = S.objectSet),
          (t[22] = D))
        : (D = t[22]);
      var x = D,
        $ = v != null ? v + "%" : "auto",
        P;
      t[23] !== x || t[24] !== C || t[25] !== I
        ? ((P =
            I || x || C != null
              ? s.jsxs("div", {
                  className: _.titleBar,
                  children: [
                    x,
                    s.jsx("div", { className: _.title, children: C }),
                    I,
                  ],
                })
              : null),
          (t[23] = x),
          (t[24] = C),
          (t[25] = I),
          (t[26] = P))
        : (P = t[26]);
      var N = P,
        M;
      t[27] !== S || t[28] !== n
        ? ((M = S.renderNode(n.getSubNode("content"))),
          (t[27] = S),
          (t[28] = n),
          (t[29] = M))
        : (M = t[29]);
      var w = M,
        A;
      return (
        t[30] !== L ||
        t[31] !== w ||
        t[32] !== $ ||
        t[33] !== N ||
        t[34] !== n.styleId
          ? ((A = s.jsx(r("WebBloksBottomSheetBase"), {
              closeDialog: L,
              content: w,
              height: $,
              name: n.styleId,
              navbar: N,
            })),
            (t[30] = L),
            (t[31] = w),
            (t[32] = $),
            (t[33] = N),
            (t[34] = n.styleId),
            (t[35] = A))
          : (A = t[35]),
        A
      );
    }
    function p(e, t) {
      switch (t) {
        case "close":
          return e.getAsset("navCross");
        case "settings":
          return e.getAsset("settings");
        case "overflow":
          return e.getAsset("nav3DotHorizontal");
        default:
          return null;
      }
    }
    var _ = o("WebBloksStyle").createStyles({
      titleBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 52,
        paddingLeft: 16,
        paddingRight: 16,
        fontWeight: "bold",
        borderBottom: "0.5px solid #dbdbdb",
      },
      title: { flex: "1 1 0", textAlign: "center", margin: 8 },
    });
    l.default = m;
  },
  98,
);
