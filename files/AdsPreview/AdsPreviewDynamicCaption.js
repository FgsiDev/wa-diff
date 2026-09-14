__d(
  "AdsPreviewDynamicCaption",
  [
    "cx",
    "AdsInstagramPreviewCommonUtils",
    "InstagramAdsPreview",
    "filterNulls",
    "react",
    "react-compiler-runtime",
    "useBoolean",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "... ",
      d = "";
    function m(e, t, n) {
      if (e.length === 0 || n == null) return 1 / 0;
      var r = o(
        "AdsInstagramPreviewCommonUtils",
      ).getTextHeightForAdPreviewCaption(e[0], t);
      return Math.floor(n / r);
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(17),
        n,
        r,
        a;
      if (t[0] !== e) {
        var i = [],
          l = e.children,
          s = e.maxLines;
        n = l;
        var m = e.inlineSentencesList;
        s > 0 && m != null && m.length >= s && (i = m[s - 1].split(d));
        var p = o(
            "AdsInstagramPreviewCommonUtils",
          ).getTextWidthForAdPreviewCaption(
            c + e.ellipsis,
            e.font,
            e.letterSpacing,
          ),
          _ = o("AdsInstagramPreviewCommonUtils").getMaxWordIndexForWidth(
            i,
            e.font,
            e.letterSpacing,
            e.maxWidth - p,
          );
        r = i.slice(0, _).join(d);
        var f = m.slice(0, e.maxLines - 1);
        ((a =
          n != null
            ? n([].concat(f, [r]))
            : f.map(function (t, n) {
                return u.jsxs(
                  "div",
                  { style: e.lineStyles, children: [t, u.jsx("br", {})] },
                  n,
                );
              })),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a));
      } else ((n = t[1]), (r = t[2]), (a = t[3]));
      var g = a,
        h = e.isThreadsCaption === !0 ? e.lineStyles : void 0,
        y = n == null ? r : null,
        C = e.isDynamicPlacement !== !0 ? e.toggleShowMore : void 0,
        b;
      t[4] !== e.ellipsis || t[5] !== e.ellipsisStyle || t[6] !== C
        ? ((b = u.jsx("button", {
            className: "_8hfd _auk5",
            onClick: C,
            style: e.ellipsisStyle,
            children: e.ellipsis,
          })),
          (t[4] = e.ellipsis),
          (t[5] = e.ellipsisStyle),
          (t[6] = C),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== e.textDirection || t[9] !== y || t[10] !== b
        ? ((v = u.jsxs(
            "span",
            { direction: e.textDirection, children: [y, c, b] },
            "lastCaption",
          )),
          (t[8] = e.textDirection),
          (t[9] = y),
          (t[10] = b),
          (t[11] = v))
        : (v = t[11]);
      var S;
      return (
        t[12] !== e.textDirection || t[13] !== h || t[14] !== v || t[15] !== g
          ? ((S = u.jsxs("span", {
              className: "_8rs5 _9hvh _auk3 _auk4",
              direction: e.textDirection,
              style: h,
              children: [g, v],
            })),
            (t[12] = e.textDirection),
            (t[13] = h),
            (t[14] = v),
            (t[15] = g),
            (t[16] = S))
          : (S = t[16]),
        S
      );
    }
    function _(e) {
      var t,
        n,
        a = e.children,
        i = r("useBoolean")(!1),
        l = i.toggle,
        s = i.value,
        c = (t = e.isThreadsCaption) != null ? t : !1,
        d = e.text.split("\n").map(o("InstagramAdsPreview").tokenizeCaption),
        _ = r("filterNulls")(
          o(
            "AdsInstagramPreviewCommonUtils",
          ).transformWordsListToInlineSentences(
            d,
            e.fontSize,
            e.fontFamily,
            e.letterSpacing,
            e.maxWidth,
            e.offsetWidth,
            e.fontWeight,
            e.eliminateEmptyLine,
          ),
        ),
        f = o("AdsInstagramPreviewCommonUtils").getFontString(
          e.fontSize,
          e.fontFamily,
          e.fontWeight,
        ),
        g = m(_, f, e.maxHeight),
        h = Math.min(g, e.maxLines),
        y = o("AdsInstagramPreviewCommonUtils").AdsInstagramGetTextDirection(
          (n = _[0]) != null ? n : "",
        ),
        C = _.length > h && !s,
        b = e.fontSize,
        v = babelHelpers.extends({}, e.lineStyles, { fontSize: b + "px" }),
        S = babelHelpers.extends({}, v, { display: "inline" }),
        R = y === "ltr",
        L = y === "rtl",
        E =
          (R ? "_5wjy" : "") +
          (R ? " _5wjz" : "") +
          (L ? " _5wj-" : "") +
          (L ? " _5wj_" : "");
      if (C)
        return u.jsx("span", {
          className: E,
          children: u.jsx(p, {
            ellipsis: e.ellipsis,
            ellipsisStyle: e.ellipsisStyle,
            font: f,
            inlineSentencesList: _,
            isDynamicPlacement: e.isDynamicPlacement,
            isThreadsCaption: c,
            letterSpacing: e.letterSpacing,
            lineStyles: S,
            maxLines: h,
            maxWidth: e.maxWidth,
            textDirection: y,
            toggleShowMore: l,
            children: a,
          }),
        });
      var k = _.length;
      return u.jsx("span", {
        className: "_8rs5 _9hvh _auk3 _auk4",
        "data-ad-preview": "ig-message",
        direction: y,
        style: c ? v : void 0,
        children:
          a != null
            ? u.jsx("span", { style: v, children: a(_) })
            : _.map(function (e, t) {
                return u.jsxs(
                  "div",
                  {
                    className: E,
                    style: t === 0 && !c ? S : v,
                    children: [e, t !== k - 1 && u.jsx("br", {})],
                  },
                  t,
                );
              }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
