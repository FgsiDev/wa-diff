__d(
  "WebBloksFBSearchVideo",
  [
    "AdPreviewWebBloksGlobalRefMap",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(42),
        n = e.externalStyle,
        r = e.node,
        a = o("WebBloksStyle").useStyle(r, n),
        i = a.style,
        l = a.wrapperProps,
        u = r.get("video_versions"),
        m = u == null ? void 0 : u[0],
        p = d(null),
        _;
      if (t[0] !== r) {
        var f;
        ((_ =
          (f = r.get("player_identifier")) == null
            ? void 0
            : f.get("media_id")),
          (t[0] = r),
          (t[1] = _));
      } else _ = t[1];
      var g = _,
        h = m == null ? void 0 : m.get("url"),
        y,
        C;
      if (
        (t[2] !== g
          ? ((y = function () {
              if (g != null)
                return (
                  p.current != null &&
                    !o(
                      "AdPreviewWebBloksGlobalRefMap",
                    ).webBloksVideoPlayerIDToRefMap.has(g) &&
                    o(
                      "AdPreviewWebBloksGlobalRefMap",
                    ).webBloksVideoPlayerIDToRefMap.set(g, p),
                  function () {
                    o(
                      "AdPreviewWebBloksGlobalRefMap",
                    ).webBloksVideoPlayerIDToRefMap.delete(g);
                  }
                );
            }),
            (C = [p, g]),
            (t[2] = g),
            (t[3] = y),
            (t[4] = C))
          : ((y = t[3]), (C = t[4])),
        c(y, C),
        h == null)
      )
        return null;
      var b, v, S, R, L, E, k, I, T, D, x;
      if (t[5] !== r || t[6] !== i || t[7] !== l) {
        var $ = r.get("preview_versions"),
          P = $ == null ? void 0 : $[0],
          N;
        t[19] !== r
          ? ((N = r.get("autoplay")), (t[19] = r), (t[20] = N))
          : (N = t[20]);
        var M = N,
          w = M === !0 || M === 1,
          A;
        t[21] !== r
          ? ((A = r.get("loop")), (t[21] = r), (t[22] = A))
          : (A = t[22]);
        var F = A,
          O = F === !0 || F === 1,
          B;
        t[23] !== r
          ? ((B = r.get("mute_on_mount")), (t[23] = r), (t[24] = B))
          : (B = t[24]);
        var W = B,
          q = W === !0 || W === 1;
        ((S = l),
          t[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = "xl56j7k"), (t[25] = R))
            : (R = t[25]),
          (L = i),
          t[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = { className: "x5yr21d x67bb7w xh8yej3 xl1xv1r" }),
              (t[26] = E))
            : (E = t[26]),
          (k = w),
          (I = !1),
          (T = "nofullscreen nodownload noremoteplayback noplaybackrate"),
          (D = !0),
          (x = O),
          (b = q),
          (v = P == null ? void 0 : P.get("url")),
          (t[5] = r),
          (t[6] = i),
          (t[7] = l),
          (t[8] = b),
          (t[9] = v),
          (t[10] = S),
          (t[11] = R),
          (t[12] = L),
          (t[13] = E),
          (t[14] = k),
          (t[15] = I),
          (t[16] = T),
          (t[17] = D),
          (t[18] = x));
      } else
        ((b = t[8]),
          (v = t[9]),
          (S = t[10]),
          (R = t[11]),
          (L = t[12]),
          (E = t[13]),
          (k = t[14]),
          (I = t[15]),
          (T = t[16]),
          (D = t[17]),
          (x = t[18]));
      var U;
      t[27] !== b ||
      t[28] !== v ||
      t[29] !== E ||
      t[30] !== k ||
      t[31] !== I ||
      t[32] !== T ||
      t[33] !== D ||
      t[34] !== x ||
      t[35] !== h
        ? ((U = s.jsx(
            "video",
            babelHelpers.extends({}, E, {
              autoPlay: k,
              controls: I,
              controlsList: T,
              disablePictureInPicture: D,
              loop: x,
              muted: b,
              poster: v,
              ref: p,
              src: h,
            }),
          )),
          (t[27] = b),
          (t[28] = v),
          (t[29] = E),
          (t[30] = k),
          (t[31] = I),
          (t[32] = T),
          (t[33] = D),
          (t[34] = x),
          (t[35] = h),
          (t[36] = U))
        : (U = t[36]);
      var V;
      return (
        t[37] !== S || t[38] !== R || t[39] !== L || t[40] !== U
          ? ((V = s.jsx(
              "div",
              babelHelpers.extends({}, S, {
                className: R,
                style: L,
                children: U,
              }),
            )),
            (t[37] = S),
            (t[38] = R),
            (t[39] = L),
            (t[40] = U),
            (t[41] = V))
          : (V = t[41]),
        V
      );
    }
    l.default = m;
  },
  98,
);
