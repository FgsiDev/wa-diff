__d(
  "AdsInstagramInteractiveComponentWrappers",
  [
    "AdsInstagramInteractiveComponentConstants",
    "AdsInstagramStoryPreviewConstants",
    "AdsScaleToFitContext",
    "immutable",
    "react",
    "react-compiler-runtime",
    "useInteractiveComponentCreateObjectMove",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useState,
      p = 360;
    function _(e, t, n, r, a, i) {
      var l =
          a != null
            ? (a * o("AdsInstagramStoryPreviewConstants").FRAME_WIDTH) /
              o("AdsInstagramInteractiveComponentConstants")
                .DEFAULT_POLLING_STICKER_WIDTH
            : 1,
        s = i != null ? p * i : 0,
        u = "rotate(" + s + "deg) scale(" + l + ")";
      return { xPosition: n * t, yPosition: r * e, transform: u };
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.mediaHeight,
        r = e.mediaWidth,
        a = e.rotation,
        i = e.width,
        l = e.x,
        u = e.y,
        c;
      t[0] !== n ||
      t[1] !== r ||
      t[2] !== a ||
      t[3] !== i ||
      t[4] !== l ||
      t[5] !== u
        ? ((c = _(n, r, l, u, i, a)),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = c))
        : (c = t[6]);
      var d = c,
        m = d.transform,
        p = d.xPosition,
        f = d.yPosition,
        g;
      if (t[7] !== e.children || t[8] !== m || t[9] !== p || t[10] !== f) {
        var h;
        (t[12] !== m || t[13] !== p || t[14] !== f
          ? ((h = { xPosition: p, yPosition: f, transform: m }),
            (t[12] = m),
            (t[13] = p),
            (t[14] = f),
            (t[15] = h))
          : (h = t[15]),
          (g = s.cloneElement(e.children, h)),
          (t[7] = e.children),
          (t[8] = m),
          (t[9] = p),
          (t[10] = f),
          (t[11] = g));
      } else g = t[11];
      var y;
      return (
        t[16] !== g
          ? ((y = s.jsx(s.Fragment, { children: g })), (t[16] = g), (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    function g(e) {
      var t,
        n,
        a,
        i,
        l = o("react-compiler-runtime").c(33),
        u = e.id,
        p = e.mediaHeight,
        f = e.mediaWidth,
        g = e.onIsMovingChange,
        h = e.rotation,
        y = e.safeZone,
        C = e.width,
        b = e.x,
        v = e.y,
        S;
      l[0] !== p ||
      l[1] !== f ||
      l[2] !== h ||
      l[3] !== C ||
      l[4] !== b ||
      l[5] !== v
        ? ((S = _(p, f, b, v, C, h)),
          (l[0] = p),
          (l[1] = f),
          (l[2] = h),
          (l[3] = C),
          (l[4] = b),
          (l[5] = v),
          (l[6] = S))
        : (S = l[6]);
      var R = S,
        L = R.transform,
        E = R.xPosition,
        k = R.yPosition,
        I = m(null),
        T = I[1],
        D;
      l[7] !== u || l[8] !== p || l[9] !== f || l[10] !== e
        ? ((D = function () {
            e.onEditInteractiveComponent(
              u,
              r("immutable").Map({ x: B / f, y: W / p }),
            );
          }),
          (l[7] = u),
          (l[8] = p),
          (l[9] = f),
          (l[10] = e),
          (l[11] = D))
        : (D = l[11]);
      var x = D,
        $ = r("useInteractiveComponentCreateObjectMove")(x),
        P = $.dx,
        N = $.dy,
        M = $.isMoving,
        w = $.onPressDown,
        A,
        F;
      (l[12] !== u || l[13] !== M || l[14] !== g
        ? ((A = function () {
            g != null && g(M, u);
          }),
          (F = [M, u, g]),
          (l[12] = u),
          (l[13] = M),
          (l[14] = g),
          (l[15] = A),
          (l[16] = F))
        : ((A = l[15]), (F = l[16])),
        d(A, F));
      var O = c(r("AdsScaleToFitContext")),
        B = Math.min(
          Math.max(
            E + P / O.scale,
            ((t = y == null ? void 0 : y.left) != null ? t : 0) / O.scale,
          ),
          Math.min(
            f,
            (f - ((n = y == null ? void 0 : y.right) != null ? n : 0)) /
              O.scale,
          ),
        ),
        W = Math.min(
          Math.max(
            k + N / O.scale,
            ((a = y == null ? void 0 : y.top) != null ? a : 0) / O.scale,
          ),
          Math.min(
            p,
            (p - ((i = y == null ? void 0 : y.bottom) != null ? i : 0)) /
              O.scale,
          ),
        ),
        q;
      l[17] !== u || l[18] !== w || l[19] !== e
        ? ((q = function (n) {
            (w(n),
              e.onSelectInteractiveComponent != null &&
                e.onSelectInteractiveComponent(u));
          }),
          (l[17] = u),
          (l[18] = w),
          (l[19] = e),
          (l[20] = q))
        : (q = l[20]);
      var U = q,
        V;
      if (l[21] !== e.children || l[22] !== L || l[23] !== B || l[24] !== W) {
        var H;
        (l[26] !== L || l[27] !== B || l[28] !== W
          ? ((H = {
              xPosition: B,
              yPosition: W,
              transform: L,
              setStickerElement: T,
            }),
            (l[26] = L),
            (l[27] = B),
            (l[28] = W),
            (l[29] = H))
          : (H = l[29]),
          (V = s.cloneElement(e.children, H)),
          (l[21] = e.children),
          (l[22] = L),
          (l[23] = B),
          (l[24] = W),
          (l[25] = V));
      } else V = l[25];
      var G;
      return (
        l[30] !== U || l[31] !== V
          ? ((G = s.jsx("span", { onMouseDown: U, children: V })),
            (l[30] = U),
            (l[31] = V),
            (l[32] = G))
          : (G = l[32]),
        G
      );
    }
    ((l.NonDraggableWrapper = f), (l.DraggableWrapper = g));
  },
  98,
);
