__d(
  "AdsInstagramReelsAdPreviewBottomRowStyles",
  ["AdsInstagramReelsAdPreviewConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "xdcksgr-B",
      s = "xgaidgz-B",
      u = "x5gcpgv-B",
      c = {
        bottomRowContainerStyle: {
          paddingBottom: "xr1496l",
          paddingInlineStart: "x1onr9mi",
          paddingInlineEnd: "x1pic42t",
          width: "x544807",
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          $$css: !0,
        },
        showLeftFlyInCTAStyle: {
          position: "x1n2onr6",
          animationName: "xhrt097",
          animationDuration: "xdz8niu",
          animationTimingFunction: "x1enefj4",
          $$css: !0,
        },
        hideLeftFlyInCTAStyle: {
          position: "x1n2onr6",
          insetInlineStart: "x10q2zoy",
          left: null,
          right: null,
          opacity: "xg01cxk",
          $$css: !0,
        },
        showBottomFlyInCTAContainerStyle: {
          position: "x1n2onr6",
          transitionProperty: "x1ieri9u",
          transitionDuration: "x97pzxe",
          bottom: "x1ey2m1c",
          opacity: "x1hc1fzr",
          $$css: !0,
        },
        legacyHideBottomFlyInCTAContainerStyle: {
          position: "x1n2onr6",
          bottom: "xfwxh34",
          marginTop: "xaci4zi",
          opacity: "xg01cxk",
          $$css: !0,
        },
        hideBottomFlyInCTAContainerStyle: {
          display: "x1s85apg",
          position: "x1n2onr6",
          $$css: !0,
        },
        solidCTAStyle: {
          animationFillMode: "x1u6ievf",
          animationName: "xomrijl",
          animationDuration: "xemfg65",
          animationDelay: "xeai4wr",
          backgroundColor: "x2izyaf",
          color: "xogfrqt",
          $$css: !0,
        },
        transparentCTAStyle: {
          backgroundColor: "x1ipv3xg",
          color: "xg32yw2",
          $$css: !0,
        },
        pillCTAInitialStyle: {
          backgroundColor: "xx7lb7",
          color: "xg32yw2",
          $$css: !0,
        },
        pillToFullCTAStyle: {
          animationFillMode: "x1u6ievf",
          animationName: "xvay5t0",
          animationDuration: "xemfg65",
          animationDelay: "xeai4wr",
          backgroundColor: "x2izyaf",
          color: "xogfrqt",
          $$css: !0,
        },
        topPositionCtaSpacing: { marginBottom: "x1c436fg", $$css: !0 },
        disclaimerStyle: { color: "xg32yw2", marginTop: "x1aawmmo", $$css: !0 },
        newAspectRatioDisclaimerStyle: { marginTop: "xzbgwbi", $$css: !0 },
        disclaimerIconStyle: {
          marginTop: "xvijh9v",
          marginInlineEnd: "xnnr8r",
          transform: "xn3lh7j",
          $$css: !0,
        },
      };
    function d(e, t) {
      switch (e) {
        case o("AdsInstagramReelsAdPreviewConstants")
          .IGReelsAdsPreviewCTAPositionAnimationType.BOTTOM_UP:
          return t
            ? c.showBottomFlyInCTAContainerStyle
            : c.hideBottomFlyInCTAContainerStyle;
        case o("AdsInstagramReelsAdPreviewConstants")
          .IGReelsAdsPreviewCTAPositionAnimationType.LEFT_IN:
          return t ? c.showLeftFlyInCTAStyle : c.hideLeftFlyInCTAStyle;
      }
    }
    function m(e, t, n, r) {
      return (
        r === void 0 && (r = !1),
        r
          ? e
            ? c.pillCTAInitialStyle
            : n
              ? c.pillToFullCTAStyle
              : c.pillCTAInitialStyle
          : e
            ? c.transparentCTAStyle
            : t
              ? n
                ? c.solidCTAStyle
                : c.transparentCTAStyle
              : c.solidCTAStyle
      );
    }
    ((l.bottomRowStyles = c),
      (l.getCTAPositionAnimationStyle = d),
      (l.getCTAColorStyle = m));
  },
  98,
);
