__d(
  "FBWebBloksSurveyRtfTextQuestion",
  [
    "WebBloksStyle",
    "WebBloksURLUtils",
    "dompurify",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.externalStyle,
        a = e.node,
        i = o("WebBloksStyle").useStyle(a, n),
        l = i.style,
        u = i.wrapper,
        c = i.wrapperProps,
        d;
      t[0] !== a ? ((d = a.get("html")), (t[0] = a), (t[1] = d)) : (d = t[1]);
      var m = d,
        _;
      t[2] !== m
        ? ((_ = r("dompurify").sanitize(m != null ? m : "")),
          (t[2] = m),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g = p,
        h;
      t[4] !== f ? ((h = { __html: f }), (t[4] = f), (t[5] = h)) : (h = t[5]);
      var y;
      t[6] !== l
        ? ((y = babelHelpers.extends({ display: "block" }, l)),
          (t[6] = l),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== h || t[9] !== y || t[10] !== c
        ? ((C = s.jsx(
            "div",
            babelHelpers.extends({}, c, {
              className: o("WebBloksStyle").WebBloksStyles.container,
              dangerouslySetInnerHTML: h,
              onClickCapture: g,
              style: y,
            }),
          )),
          (t[8] = h),
          (t[9] = y),
          (t[10] = c),
          (t[11] = C))
        : (C = t[11]);
      var b;
      return (
        t[12] !== C || t[13] !== u
          ? ((b = u(C)), (t[12] = C), (t[13] = u), (t[14] = b))
          : (b = t[14]),
        b
      );
    }
    function p(e) {
      if (e.target instanceof Element) {
        var t = e.target.closest("a[href]");
        t instanceof HTMLAnchorElement &&
          (e.preventDefault(), o("WebBloksURLUtils").openURL(t.href, !0));
      }
    }
    l.default = m;
  },
  98,
);
