__d(
  "WAWebBizAdCreationAddMediaAffordanceContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = {
        isAddMediaBusy: !1,
        isCreativeCtaVisible: null,
        openMediaPicker: function () {},
        registerOpenMediaPicker: function () {},
        scrollRootElement: null,
        updateAddMediaBusy: function () {},
        updateCreativeCtaVisible: function () {},
      },
      h = c(g);
    function y(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        r = e.scrollRootElement,
        a = r === void 0 ? null : r,
        i = f(null),
        l = i[0],
        u = i[1],
        c = f(!1),
        d = c[0],
        m = c[1],
        p = _(null),
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t) {
            u(t);
          }),
          (t[0] = g))
        : (g = t[0]);
      var y = g,
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            m(t);
          }),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            p.current = t;
          }),
          (t[2] = v))
        : (v = t[2]);
      var S = v,
        R;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            p.current == null || p.current();
          }),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E;
      t[4] !== d || t[5] !== l || t[6] !== a
        ? ((E = {
            isAddMediaBusy: d,
            isCreativeCtaVisible: l,
            openMediaPicker: L,
            registerOpenMediaPicker: S,
            scrollRootElement: a,
            updateAddMediaBusy: b,
            updateCreativeCtaVisible: y,
          }),
          (t[4] = d),
          (t[5] = l),
          (t[6] = a),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I;
      return (
        t[8] !== n || t[9] !== k
          ? ((I = s.jsx(h.Provider, { value: k, children: n })),
            (t[8] = n),
            (t[9] = k),
            (t[10] = I))
          : (I = t[10]),
        I
      );
    }
    function C() {
      return m(h);
    }
    ((l.WAWebBizAdCreationAddMediaAffordanceProvider = y),
      (l.useWAWebBizAdCreationAddMediaAffordance = C));
  },
  98,
);
