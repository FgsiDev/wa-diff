__d(
  "AdsInstagramStoryCarouselPreviewFunctionalComponents",
  [
    "ix",
    "Image.react",
    "XUICarouselArrow.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(17);
      if (e.isVisible != null && e.isVisible === !1) {
        var n;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = u.jsx("div", {})), (t[0] = n))
            : (n = t[0]),
          n
        );
      }
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("Image.react"), { src: s("101565") })), (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== e.onClickLeft
        ? ((i = u.jsx(r("XUICarouselArrow.react"), {
            onClick: e.onClickLeft,
            children: a,
          })),
          (t[2] = e.onClickLeft),
          (t[3] = i))
        : (i = t[3]);
      var l = i,
        c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(r("Image.react"), { src: s("101566") })), (t[4] = c))
        : (c = t[4]);
      var d;
      t[5] !== e.onClickRight
        ? ((d = u.jsx(r("XUICarouselArrow.react"), {
            onClick: e.onClickRight,
            children: c,
          })),
          (t[5] = e.onClickRight),
          (t[6] = d))
        : (d = t[6]);
      var m = d,
        p,
        _;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x1n2onr6 xwa60dl x68pp3s" }),
          (_ = {
            className:
              "x1lliihq xwya9rg xuzhngd x10l6tqk x19991ni x13dflua xz4gly6 x1ahifba x1vjfegm x1o7uuvo x1n8ud3w",
          }),
          (t[7] = p),
          (t[8] = _))
        : ((p = t[7]), (_ = t[8]));
      var f;
      t[9] !== l
        ? ((f = u.jsx("div", babelHelpers.extends({}, _, { children: l }))),
          (t[9] = l),
          (t[10] = f))
        : (f = t[10]);
      var g;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            className:
              "x1lliihq xwya9rg xuzhngd x10l6tqk x19991ni x13dflua xz4gly6 x1ahifba x1vjfegm x1o7uuvo x2ss2xj",
          }),
          (t[11] = g))
        : (g = t[11]);
      var h;
      t[12] !== m
        ? ((h = u.jsx("div", babelHelpers.extends({}, g, { children: m }))),
          (t[12] = m),
          (t[13] = h))
        : (h = t[13]);
      var y;
      return (
        t[14] !== f || t[15] !== h
          ? ((y = u.jsxs(
              "div",
              babelHelpers.extends({}, p, { children: [f, h] }),
            )),
            (t[14] = f),
            (t[15] = h),
            (t[16] = y))
          : (y = t[16]),
        y
      );
    }
    l.AdsInstagramStoryCarouselArrows = c;
  },
  98,
);
