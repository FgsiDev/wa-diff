__d(
  "AdsInstagramStoryPreviewUtils",
  [
    "fbt",
    "invariant",
    "$InternalEnum",
    "AdsInstagramStoryPreviewConstants",
    "Button.react",
    "IGAdsSensitiveVerticalsUtils",
    "ShimButton.react",
    "gkx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = 50,
      m = "#FFFFFF",
      p = "#000000",
      _ = "rgba(0, 0, 0, 0.7)",
      f = "#FFFFFF",
      g = "number",
      h = [520003, 520005, 520006],
      y = "xbht0aq-B",
      C = n("$InternalEnum")({ STANDARD: "standard", CAROUSEL: "carousel" });
    function b(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.authorizationDisclaimer,
        a = e.disclaimerCTA,
        i = e.secondaryDisclaimer;
      if (n == null && a == null && i == null) return null;
      var l = n != null ? n : a;
      i != null && (l = l == null ? i : l + " \u2022 " + i);
      var s =
          r("gkx")("15221") &&
          !o("IGAdsSensitiveVerticalsUtils").is_pharma_vertical,
        u,
        d,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            0: {
              className: "xpequ6v x1ey2m1c xtijo5x x5kalc8 x10l6tqk x1o0tod",
            },
            1: {
              className: "x1ibmmqa xjnlgov xtijo5x x5kalc8 x10l6tqk x1o0tod",
            },
          }[!!s << 0]),
          (d = {
            0: "x1awj2ng x117nqv4 x1diwwjn x6ikm8r x10wlt62 x1n2onr6 xwa60dl x1cb1t30",
            1: "x1awj2ng x190qgfh x1diwwjn x6ikm8r x10wlt62 x1n2onr6 xwa60dl x1cb1t30",
          }[!!s << 0]),
          (m = {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }),
          (t[0] = u),
          (t[1] = d),
          (t[2] = m))
        : ((u = t[0]), (d = t[1]), (m = t[2]));
      var p;
      return (
        t[3] !== l
          ? ((p = c.jsx(
              "div",
              babelHelpers.extends({}, u, {
                children: c.jsx("div", { className: d, style: m, children: l }),
              }),
            )),
            (t[3] = l),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.isVisible,
        a = e.onOptIn;
      if (!n) return null;
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Expand story")), (t[0] = i))
        : (i = t[0]);
      var l = i,
        u,
        d,
        m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            display: "inline-block",
            pointerEvents: "auto",
            cursor: "pointer",
            zIndex: 15,
          }),
          (d = c.jsx("div", {
            className:
              "x2izyaf x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1rg5ohu xjm9jq1 xdj266r x2fvf9 xahult9 xdwrcjd x1i1rx1s",
          })),
          (m = c.jsx("div", {
            className:
              "x2x41l1 x1q0q8m5 x16stqrj x3pd3b0 x1t7ytsu x10eyzkn xmn4e3e x13fuv20 x1v8p93f x1rg5ohu xdj266r xnnr8r x1ty9z65 xwklpps",
          })),
          (t[1] = u),
          (t[2] = d),
          (t[3] = m))
        : ((u = t[1]), (d = t[2]), (m = t[3]));
      var p;
      return (
        t[4] !== a
          ? ((p = c.jsxs(r("ShimButton.react"), {
              "aria-label": l,
              onClick: a,
              style: u,
              children: [d, m, l],
            })),
            (t[4] = a),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.shouldShowProgressBarEllipsis;
      if (!n) return null;
      var r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className:
              "x10l6tqk x78zum5 x1q0g3np x13a6bvl x1atx4j1 xo0dc8f xxx7yvo",
          }),
          (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = c.createElement(
              "div",
              babelHelpers.extends({}, r, {
                key: "progressBarEllipsisContainer",
              }),
              c.jsx(
                "div",
                {
                  className:
                    "x17j41np xkqq1k2 x91jh78 x1xkn691 x4oqio7 xagww31 x36qwtl x47corl x10l6tqk x1vjfegm xaoy8p5 x11dcrhx",
                },
                "progress_bar_ellipsis_1",
              ),
              c.jsx(
                "div",
                {
                  className:
                    "x17j41np xkqq1k2 x91jh78 x1xkn691 x4oqio7 xagww31 x36qwtl x47corl x10l6tqk x1vjfegm x1417sux x1s2estf",
                },
                "progress_bar_ellipsis_2",
              ),
              c.jsx(
                "div",
                {
                  className:
                    "x17j41np xkqq1k2 x91jh78 x1xkn691 x4oqio7 xagww31 x36qwtl x47corl x10l6tqk x1vjfegm x1pn5k75 x1k6kfgx",
                },
                "progress_bar_ellipsis_3",
              ),
            )),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.authorizationDisclaimer,
        a = e.carouselCardCount,
        i = e.disclaimerCTA,
        l = e.isVisible,
        u = e.onExpand,
        d = e.secondaryDisclaimer;
      if (!l) return null;
      var m, p, h, C, b, v;
      if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== d) {
        var S = s._(/*BTDS*/ "Show All"),
          R = a - 1,
          L = s._(/*BTDS*/ "Show {number of remaining caoursel cards} more", [
            s._param("number of remaining caoursel cards", R),
          ]);
        C = g === "number" ? L : S;
        var E = n != null || i != null || d != null,
          k;
        (t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = {
              animationDelay: "3s",
              animationDuration: "0.3s",
              animationFillMode: "forwards",
              animationName: y,
            }),
            (t[10] = k))
          : (k = t[10]),
          (p = k));
        var I;
        (t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = {
              fontSize: 10,
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
              border: "0px solid",
              backgroundColor: _,
              color: f,
              fontWeight: 600,
              paddingTop: 2,
              paddingBottom: 2,
              paddingRight: 16,
              paddingLeft: 16,
            }),
            (t[11] = I))
          : (I = t[11]),
          (h = I),
          t[12] !== E
            ? ((v = {
                0: { className: "xdt5ytf x13a6bvl xu9aifs xdg88n9 x10l6tqk" },
                1: { className: "xdt5ytf x13a6bvl xdg88n9 x10l6tqk xc1i04v" },
              }[!!E << 0]),
              (t[12] = E),
              (t[13] = v))
            : (v = t[13]),
          (m = r("Button.react")),
          (b = C.toString()),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = d),
          (t[4] = m),
          (t[5] = p),
          (t[6] = h),
          (t[7] = C),
          (t[8] = b),
          (t[9] = v));
      } else
        ((m = t[4]),
          (p = t[5]),
          (h = t[6]),
          (C = t[7]),
          (b = t[8]),
          (v = t[9]));
      var T;
      t[14] !== p || t[15] !== h
        ? ((T = babelHelpers.extends({}, p, h)),
          (t[14] = p),
          (t[15] = h),
          (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== m || t[18] !== C || t[19] !== u || t[20] !== b || t[21] !== T
        ? ((D = c.jsx(m, { label: b, onClick: u, style: T, children: C })),
          (t[17] = m),
          (t[18] = C),
          (t[19] = u),
          (t[20] = b),
          (t[21] = T),
          (t[22] = D))
        : (D = t[22]);
      var x;
      return (
        t[23] !== v || t[24] !== D
          ? ((x = c.jsx("div", babelHelpers.extends({}, v, { children: D }))),
            (t[23] = v),
            (t[24] = D),
            (t[25] = x))
          : (x = t[25]),
        x
      );
    }
    function L(e, t, n) {
      return t / (e + n.offsetHeight);
    }
    function E(e, t, n) {
      return (
        (e * o("AdsInstagramStoryPreviewConstants").FRAME_WIDTH) / t +
        n.scaledOffsetHeight
      );
    }
    function k(e, t, n, r, a) {
      var i =
          o("AdsInstagramStoryPreviewConstants").FRAME_HEIGHT -
          o("AdsInstagramStoryPreviewConstants").TOP_MARGIN -
          e,
        l = i - n - 3 * o("AdsInstagramStoryPreviewConstants").MIN_SPACE;
      return (
        r >= 1 &&
          (l = t
            ? o("AdsInstagramStoryPreviewConstants")
                .MAX_CAPTION_HEIGHT_WITH_FLAT_MEDIA / 2
            : o("AdsInstagramStoryPreviewConstants")
                .MAX_CAPTION_HEIGHT_WITH_FLAT_MEDIA),
        a === !0 && (l -= d),
        l
      );
    }
    function I(e, t, n, r) {
      return e === "dynamic_ad" && t !== !0
        ? n !== null && n !== "" && r !== null && r !== ""
          ? {
              offsetHeight: o("AdsInstagramStoryPreviewConstants")
                .DYNAMIC_MEDIA_OFFSET_HEIGHT,
              scaledOffsetHeight: o("AdsInstagramStoryPreviewConstants")
                .DYNAMIC_MEDIA_SCALED_OFFSET_HEIGHT,
            }
          : (n === null || n === "") && (r === null || r === "")
            ? { offsetHeight: 0, scaledOffsetHeight: 0 }
            : {
                offsetHeight: o("AdsInstagramStoryPreviewConstants")
                  .DYNAMIC_MEDIA_OFFSET_HEIGHT_ONE_LINE,
                scaledOffsetHeight: o("AdsInstagramStoryPreviewConstants")
                  .DYNAMIC_MEDIA_SCALED_OFFSET_HEIGHT_ONE_LINE,
              }
        : { offsetHeight: 0, scaledOffsetHeight: 0 };
    }
    function T(e, t, n, r, a) {
      if (n == null || r === "saliency") return 0;
      var i = o("AdsInstagramStoryPreviewConstants").BOTTOM_MARGIN_BASE;
      return (
        e
          ? (i = t
              ? o("AdsInstagramStoryPreviewConstants")
                  .BOTTOM_MARGIN_HAS_CTA_HAS_DISCLAIMER
              : o("AdsInstagramStoryPreviewConstants").BOTTOM_MARGIN_HAS_CTA)
          : (i = t
              ? o("AdsInstagramStoryPreviewConstants")
                  .BOTTOM_MARGIN_HAS_DISCLAIMER
              : o("AdsInstagramStoryPreviewConstants").BOTTOM_MARGIN_BASE_V2),
        a &&
          (i += o(
            "AdsInstagramStoryPreviewConstants",
          ).CTA_STICKER_BOTTOM_MARGIN),
        i
      );
    }
    function D(e, t, n, r) {
      return (e == null ? void 0 : e.image_ad_length) != null
        ? (e == null ? void 0 : e.image_ad_length) * 1e3
        : t != null
          ? n
            ? o("AdsInstagramStoryPreviewConstants")
                .VIDEO_STORY_TRUNCATION_LENGTH_IN_SEC * 1e3
            : r != null && r > 0
              ? t * (r + 1) * 1e3
              : t * 1e3
          : (t !== null || u(0, 44889), 0);
    }
    function x(e) {
      return (e == null ? void 0 : e.end_scene_length) != null
        ? e.end_scene_length * 1e3
        : o("AdsInstagramStoryPreviewConstants").DEFAULT_END_SCENE_LENGTH_IN_MS;
    }
    var $ = function (t) {
        var e, n;
        return (
          t instanceof HTMLImageElement &&
            ((e = t.naturalWidth), (n = t.naturalHeight)),
          t instanceof HTMLVideoElement &&
            ((e = t.videoWidth), (n = t.videoHeight)),
          e != null && n != null ? [e, n, e / n] : [0, 0, 0]
        );
      },
      P = function (t) {
        return (
          Math.abs(
            t -
              o("AdsInstagramStoryPreviewConstants")
                .FULLSCREEN_MEDIA_ASPECT_RATIO,
          ) <
          o("AdsInstagramStoryPreviewConstants").MEDIA_ASPECT_RATIO_TOLERNACE
        );
      },
      N = function (t) {
        return t == null
          ? !1
          : t.some(function (e) {
              return e.type === 14;
            });
      };
    ((l.IGSmartCropAndCaptionOptimizationOptions = h),
      (l.CollectionAdPreviewEntryPoint = C),
      (l.AdsInstagramStoryPreviewDisclaimer = b),
      (l.AdsInstagramStoryPreviewCarouselOptInButton = v),
      (l.AdsInstagramPreviewCarouselProgressBarEllipsis = S),
      (l.AdsInstagramStoryPreviewCarouselHighlightedExpandButton = R),
      (l.getAdjustedStoryPreviewMediaRatio = L),
      (l.getStoryPreviewMediaRenderHeight = E),
      (l.getCaptionBlockMaxHeight = k),
      (l.getOffsetMediaOffsetHeights = I),
      (l.getStoryPreviewBottomMargin = T),
      (l.getMediaEndSceneLength = D),
      (l.getEndSceneLength = x),
      (l.calculateMediaDimensions = $),
      (l.isFullscreenMedia = P),
      (l.hasInteractiveComponenetCTASticker = N));
  },
  226,
);
