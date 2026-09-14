__d(
  "AdsInstagramStoryCarouselTransformationInfoCardPreviewUtils",
  [
    "fbt",
    "LineClamp.react",
    "NumberFormat",
    "intlSummarizeNumber",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        cardContainer: {
          alignItems: "x1qjc9v5",
          backgroundColor: "x12peec7",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          marginTop: "xugmn4g",
          position: "x10l6tqk",
          width: "x9cd2r9",
          $$css: !0,
        },
        profileIcon: {
          display: "x1lliihq",
          width: "x1guw455",
          height: "x16wdlz0",
          $$css: !0,
        },
        profileIconTransform: { transform: "x2cwziz", $$css: !0 },
        profileIconTransformWithoutBorder: { transform: "x1hbyfgx", $$css: !0 },
        profileIconBorder: {
          borderTop: "xxdvqrq",
          borderInlineEnd: "x1egfxym",
          borderBottom: "xwi42t7",
          borderInlineStart: "x1wahhbg",
          outline: "x19ek92q",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(50),
        a = t.cta,
        i = t.headline,
        l = t.infoTypes,
        u = t.mediaRef,
        m = t.numberOfFollowers,
        p = t.profileIcon,
        _ = t.profileName,
        f = t.shortCaption,
        g = t.showProfileIconBorder,
        h = t.websiteURL,
        y = r("useGeoTheme")(),
        C = y.selectBorderRadius,
        b = parseInt(m != null ? m : "", 10),
        v;
      n[0] !== b
        ? ((v = o("NumberFormat").formatInteger(b)), (n[0] = b), (n[1] = v))
        : (v = n[1]);
      var S = v,
        R = b != null ? b : 0,
        L;
      n[2] !== R
        ? ((L = r("intlSummarizeNumber")(R, 1)), (n[2] = R), (n[3] = L))
        : (L = n[3]);
      var E = L,
        k = m != null && b < 1e4 ? S : E,
        I;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "x78zum5 xifccgj x2b8uid xl56j7k xrpvup7 xayvuls x1q0g3np x6prxxf x1fcty0u x1u7k74 xyinxu5 x1pic42t x1g2khh7 x1onr9mi",
          }),
          (n[4] = I))
        : (I = n[4]);
      var T;
      n[5] !== k
        ? ((T = c.jsx("div", { children: k })), (n[5] = k), (n[6] = T))
        : (T = n[6]);
      var D, x;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx("div", { className: "xf6vk7d" })),
          (x = s._(/*BTDS*/ "Followers")),
          (n[7] = D),
          (n[8] = x))
        : ((D = n[7]), (x = n[8]));
      var $;
      n[9] !== T
        ? (($ = c.createElement(
            "div",
            babelHelpers.extends({}, I, { key: "NUMBER_OF_FOLLOWER_text" }),
            T,
            D,
            x,
          )),
          (n[9] = T),
          (n[10] = $))
        : ($ = n[10]);
      var P = $,
        N;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            className:
              "x78zum5 xifccgj x2b8uid xl56j7k xrpvup7 xayvuls x1q0g3np x6prxxf x1fcty0u x1u7k74 xyinxu5 x1pic42t x1g2khh7 x1onr9mi",
          }),
          (n[11] = N))
        : (N = n[11]);
      var M = i != null ? i : "",
        w;
      n[12] !== M
        ? ((w = c.createElement(
            "div",
            babelHelpers.extends({}, N, { key: "HEADLINE_TEXT" }),
            M,
          )),
          (n[12] = M),
          (n[13] = w))
        : (w = n[13]);
      var A = w,
        F;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = {
            className:
              "x78zum5 xifccgj x2b8uid xl56j7k xrpvup7 xayvuls x1q0g3np x6prxxf x1fcty0u x1u7k74 xyinxu5 x1pic42t x1g2khh7 x1onr9mi",
          }),
          (n[14] = F))
        : (F = n[14]);
      var O = f != null ? f : "",
        B;
      n[15] !== O
        ? ((B = c.createElement(
            "div",
            babelHelpers.extends({}, F, { key: "SHORT_CAPTION_TEXT" }),
            O,
          )),
          (n[15] = O),
          (n[16] = B))
        : (B = n[16]);
      var W = B,
        q = null,
        U = null;
      if (l.length > 0)
        e: switch (l[0]) {
          case "NUMBER_OF_FOLLOWERS": {
            q = P;
            break e;
          }
          case "HEADLINE": {
            q = A;
            break e;
          }
          case "SHORT_CAPTION": {
            q = W;
            break e;
          }
          default:
        }
      if (l.length > 1)
        e: switch (l[1]) {
          case "NUMBER_OF_FOLLOWERS": {
            U = P;
            break e;
          }
          case "HEADLINE": {
            U = A;
            break e;
          }
          case "SHORT_CAPTION": {
            U = W;
            break e;
          }
          default:
        }
      var V, H;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = c.jsx("hr", {
            className: "x78zum5 xjm9jq1 x1ok221b x2b8uid xh8yej3",
          })),
          (H = {
            className:
              "x78zum5 x6prxxf xl56j7k xrpvup7 x1xlr1w8 xvdv3fc x1iorvi4 x11lfxj5 xjkvuk6 x135b78x xr9ek0c xfitlp5",
          }),
          (n[17] = V),
          (n[18] = H))
        : ((V = n[17]), (H = n[18]));
      var G;
      n[19] !== a
        ? ((G = c.jsxs("div", {
            children: [
              V,
              c.createElement(
                "div",
                babelHelpers.extends({}, H, { key: "CTA_BUTTON_TEXT" }),
                a,
              ),
            ],
          })),
          (n[19] = a),
          (n[20] = G))
        : (G = n[20]);
      var z = G,
        j;
      n[21] !== C
        ? ((j = (e || (e = r("stylex"))).props(
            d.cardContainer,
            C({ context: "container" }),
          )),
          (n[21] = C),
          (n[22] = j))
        : (j = n[22]);
      var K;
      n[23] !== C || n[24] !== g
        ? ((K = (e || (e = r("stylex"))).props(
            d.profileIcon,
            C({ context: "rounded" }),
            g && d.profileIconBorder,
            g ? d.profileIconTransform : d.profileIconTransformWithoutBorder,
          )),
          (n[23] = C),
          (n[24] = g),
          (n[25] = K))
        : (K = n[25]);
      var Q;
      n[26] !== u || n[27] !== p || n[28] !== K
        ? ((Q = c.createElement(
            "img",
            babelHelpers.extends({}, K, { key: p, ref: u, src: p }),
          )),
          (n[26] = u),
          (n[27] = p),
          (n[28] = K),
          (n[29] = Q))
        : (Q = n[29]);
      var X;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = {
            className:
              "xayvuls x78zum5 xrpvup7 x6prxxf x1s688f xl56j7k xnz8f0r x16z1lm9 x2b8uid x1bepr8w",
          }),
          (n[30] = X))
        : (X = n[30]);
      var Y;
      n[31] !== _
        ? ((Y = c.jsx(r("LineClamp.react"), { lines: 3, children: _ })),
          (n[31] = _),
          (n[32] = Y))
        : (Y = n[32]);
      var J;
      n[33] !== _ || n[34] !== Y
        ? ((J = c.createElement(
            "div",
            babelHelpers.extends({}, X, { key: _ }),
            Y,
          )),
          (n[33] = _),
          (n[34] = Y),
          (n[35] = J))
        : (J = n[35]);
      var Z;
      n[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = {
            className: "xvijh9v x1ncwhqj xrpvup7 xduw2yx x78zum5 xl56j7k",
          }),
          (n[36] = Z))
        : (Z = n[36]);
      var ee;
      n[37] !== h
        ? ((ee = c.createElement(
            "div",
            babelHelpers.extends({}, Z, { key: h }),
            h,
          )),
          (n[37] = h),
          (n[38] = ee))
        : (ee = n[38]);
      var te;
      n[39] !== U
        ? ((te =
            U &&
            c.jsx("hr", {
              className: "x78zum5 xjm9jq1 x1ok221b x2b8uid x3hqpx7",
            })),
          (n[39] = U),
          (n[40] = te))
        : (te = n[40]);
      var ne;
      return (
        n[41] !== z ||
        n[42] !== q ||
        n[43] !== U ||
        n[44] !== j ||
        n[45] !== Q ||
        n[46] !== J ||
        n[47] !== ee ||
        n[48] !== te
          ? ((ne = c.jsxs(
              "div",
              babelHelpers.extends({}, j, {
                children: [Q, J, ee, q, te, U, z],
              }),
            )),
            (n[41] = z),
            (n[42] = q),
            (n[43] = U),
            (n[44] = j),
            (n[45] = Q),
            (n[46] = J),
            (n[47] = ee),
            (n[48] = te),
            (n[49] = ne))
          : (ne = n[49]),
        ne
      );
    }
    l.AdsInstagramStoryCarouselTransformationInteractiveInfoCard = m;
  },
  226,
);
