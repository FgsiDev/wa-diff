__d(
  "GeoColorSelectors",
  ["cr:21069"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      default: {
        backgroundImage: "x1k7hgvv",
        backgroundColor: null,
        $$css: !0,
      },
      input: { backgroundImage: "x598uhx", backgroundColor: null, $$css: !0 },
    };
    function s(t) {
      var r = t === void 0 ? {} : t,
        o = r.index,
        a = o === void 0 ? 0 : o,
        i = r.isLargeArea,
        l = i === void 0 ? !1 : i,
        s = r.variant,
        u = s === void 0 ? "default" : s;
      return [
        u === "input"
          ? n("cr:21069").glimmerVariantsStyles.input
          : n("cr:21069").glimmerStyles[a],
        l && e[u],
      ];
    }
    function u(e) {
      var t = e.color,
        r = e.isDisabled,
        o = r === void 0 ? !1 : r;
      return [
        !o && n("cr:21069").iconActiveStyles[t],
        o && n("cr:21069").iconDisabledStyles[t],
      ];
    }
    function c(e) {
      var t = e.element,
        r = e.shade;
      return r === "light"
        ? n("cr:21069").progressElementLightStyles[t]
        : n("cr:21069").progressElementDarkStyles[t];
    }
    function d(e) {
      var t = e.isInverted,
        r = t === void 0 ? !1 : t,
        o = e.isMuted,
        a = o === void 0 ? !1 : o,
        i = e.surface,
        l;
      return (
        r
          ? a
            ? (l = n("cr:21069").staticBackgroundInvertedMutedStyles)
            : (l = n("cr:21069").staticBackgroundInvertedStyles)
          : a
            ? (l = n("cr:21069").staticBackgroundMutedStyles)
            : (l = n("cr:21069").staticBackgroundStyles),
        l[i]
      );
    }
    function m(e) {
      var t = e.surface;
      return n("cr:21069").staticFillStyles[t];
    }
    function p(e) {
      var t = e.color,
        r = e.isDisabled,
        o = r === void 0 ? !1 : r,
        a = e.isInverted,
        i = a === void 0 ? !1 : a,
        l = t,
        s = i;
      return (
        l === "inverted"
          ? ((s = !0), (l = "value"))
          : (l === "headingDescription" || l === "valueLabel") &&
            (l = "heading"),
        s
          ? [
              !o && n("cr:21069").textInvertedActiveStyles[l],
              o && n("cr:21069").textInvertedDisabledStyles[l],
            ]
          : [
              !o && n("cr:21069").textActiveStyles[l],
              o && n("cr:21069").textDisabledStyles[l],
            ]
      );
    }
    function _(e) {
      var t = e.color,
        r = e.isDisabled,
        o = r === void 0 ? !1 : r,
        a = e.isMuted,
        i = a === void 0 ? !1 : a,
        l = e.isSecondary,
        s = l === void 0 ? !1 : l,
        u = t === "selected" ? "blue" : t,
        c = [
          !i && !o && n("cr:21069").borderDefaultActiveStyles[u],
          !i && o && n("cr:21069").borderDefaultDisabledStyles[u],
          i && !o && n("cr:21069").borderMutedActiveStyles[u],
          i && o && n("cr:21069").borderMutedDisabledStyles[u],
        ],
        d = [
          !o && n("cr:21069").borderSecondaryActiveStyles[u],
          o && n("cr:21069").borderSecondaryDisabledStyles[u],
        ];
      return s ? d : c;
    }
    function f(e) {
      var t = e.color,
        r = t === "selected" ? "blue" : t;
      return n("cr:21069").strokeMutedActiveStyles[r];
    }
    function g(e) {
      var t = e.color,
        r = t === void 0 ? "teal" : t;
      return n("cr:21069").categoricalBackgroundIdleStyles[r];
    }
    function h(e) {
      var t = e.color,
        r = t === void 0 ? "teal" : t;
      return n("cr:21069").categoricalForegroundTextStyles[r];
    }
    function y(e) {
      var t = e.color,
        r = e.isActive,
        o = r === void 0 ? !1 : r,
        a = e.isDisabled,
        i = a === void 0 ? !1 : a,
        l = e.isFocused,
        s = l === void 0 ? !1 : l;
      return [
        n("cr:21069").interactiveBackgroundTextWeightStyles[t],
        n("cr:21069").interactiveBackgroundTextActiveStyles[t],
        n("cr:21069").interactiveBackgroundIdleStyles[t],
        s && n("cr:21069").interactiveBackgroundFocusedStyles[t],
        o && n("cr:21069").interactiveBackgroundActiveStyles[t],
        i && n("cr:21069").interactiveBackgroundDisabledStyles[t],
        i && n("cr:21069").interactiveBackgroundTextDisabledStyles[t],
      ];
    }
    function C(e) {
      var t = e.color,
        r = e.isActive,
        o = r === void 0 ? !1 : r,
        a = e.isFocused,
        i = a === void 0 ? !1 : a;
      return [
        n("cr:21069").interactiveOverlayColorStyles[t],
        n("cr:21069").interactiveOverlayIdleStyles[t],
        i && n("cr:21069").interactiveOverlayFocusedStyles[t],
        o && n("cr:21069").interactiveOverlayActiveStyles[t],
      ];
    }
    function b(e) {
      var t = e.color,
        r = e.isActive;
      return r
        ? n("cr:21069").outlineActiveStyles[t]
        : n("cr:21069").outlineFocusedStyles[t];
    }
    function v(e) {
      var t = e.color,
        n = e.context,
        r = e.isDisabled;
      return null;
    }
    function S(e) {
      var t = e.variant;
      return [
        n("cr:21069").onboardingTourHighlightStyles[t],
        n("cr:21069").onboardingPulseAnimationStyles[t],
      ];
    }
    function R(e) {
      var t = e.status;
      return n("cr:21069").guidedHighlightAnimationStyles[t];
    }
    function L(e) {
      var t = e.layer,
        r = t === void 0 ? "foreground" : t;
      return n("cr:21069").shimmerStyles[r];
    }
    ((l.glimmerLinearGradientStyle = e),
      (l.selectGlimmer = s),
      (l.selectIconColor = u),
      (l.selectProgressElementColor = c),
      (l.selectStaticBackgroundColor = d),
      (l.selectNuxStaticBackgroundFillColor = m),
      (l.selectTextColor = p),
      (l.selectBorderColor = _),
      (l.selectNuxBorderStrokeColor = f),
      (l.selectCategoricalBackgroundColor = g),
      (l.selectCategoricalForegroundColor = h),
      (l.selectInteractiveColorPalette = y),
      (l.selectInteractiveOverlay = C),
      (l.selectOutline = b),
      (l.selectInteractiveBorder = v),
      (l.selectOnboardingPulseAnimation = S),
      (l.selectHighlightPulseAnimation = R),
      (l.selectShimmer = L));
  },
  98,
);
