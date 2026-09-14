__d(
  "AdsImageUtils",
  [
    "cx",
    "invariant",
    "AdsImageCollectionViews",
    "AdsImageCoordinatesUtils",
    "AdsImageLegacy",
    "AdsValidationIconType",
    "ApiAdObjectTypes",
    "react",
    "shiftPoints",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = 1,
      m = 1.91,
      p = 9 / 16,
      _ = 0.03;
    function f(e, t, n) {
      var r = n[0][0],
        o = n[0][1],
        a = "0px",
        i = "0px",
        l = h(e, t, n);
      return (
        (a = -Math.floor(r * l) + "px"),
        (i = -Math.floor(o * l) + "px"),
        a + " " + i
      );
    }
    function g(e, t, n) {
      var r = n[1][0] - n[0][0],
        o = n[1][1] - n[0][1],
        a = t / e,
        i = o / r;
      return a > i ? Math.min(t / o, e / r) : Math.max(t / o, e / r);
    }
    function h(e, t, n) {
      var r = n[0][0],
        o = n[1][0],
        a = n[0][1],
        i = n[1][1],
        l = o - r,
        s = i - a;
      return Math.min(t / s, e / l);
    }
    function y(e, t, n) {
      var a,
        i = t.map(function (e) {
          var t = new (r("AdsImageLegacy"))(e);
          return (
            n && (n === t.getUrl() || n === t.getAdAccountHash()) && (a = t),
            t
          );
        });
      return (
        e.addImagesToFront(i, o("AdsImageCollectionViews").views.LIBRARY),
        a && e.setImageSelected(a, !0),
        e
      );
    }
    function C(e, t, n, a, i, l, s, u, d, m) {
      var p = 1,
        _ = "0px 0px",
        h = "100%";
      if (!l) {
        var y = t / n;
        l = o("AdsImageCoordinatesUtils").calculateDefaultCoordinates(a, i, y);
      }
      ((_ = f(t, n, l)), (p = g(a, i, l)), (h = Math.round(p * 100) + "%"));
      var C = {
          backgroundImage: "url(" + e + ")",
          backgroundSize: h,
          backgroundPosition: _,
          backgroundRepeat: "no-repeat",
          height: n,
          opacity: m,
          position: "relative",
          width: t,
        },
        b = d === r("AdsValidationIconType").ERROR_IMAGE;
      return c.jsx("div", {
        className: b ? "_70at" : "",
        onContextMenu: s,
        style: C,
        children: u,
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t, n, r, o) {
      var a = "0px 0px",
        i = "100%",
        l = o / r,
        s = n / t,
        u = Math.min(n / o, t / r);
      (l > s
        ? (a = (t - u * r) / 2 + "px 0px")
        : (a = "0px " + (n - u * o) / 2 + "px"),
        (i = Math.round(u * 100) + "%"));
      var d = {
        backgroundImage: "url(" + e + ")",
        backgroundSize: i,
        backgroundPosition: a,
        backgroundRepeat: "no-repeat",
        height: o,
        position: "relative",
        width: r,
      };
      return c.jsx("div", { style: d });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t, n, r) {
      (e > 0 && t > 0 && n > 0 && r > 0) || u(0, 96);
      var o = e / t,
        a = n / r;
      return o >= a ? { width: n, height: n / o } : { width: r * o, height: r };
    }
    function S(e, t, n) {
      return v(e, 1, t, n);
    }
    function R(e) {
      return (
        e === r("ApiAdObjectTypes").DOMAIN ||
        e === r("ApiAdObjectTypes").PAGE ||
        e === r("ApiAdObjectTypes").SHARE
      );
    }
    function L(e, t, n, r, o) {
      var a = 0,
        i = 0,
        l = null,
        s = null;
      if (o == null) {
        var u = e / t;
        if (u >= d && u <= m) return null;
        if (t > e) ((l = e), (i = (t - e) / 2), (s = i + e));
        else {
          s = t;
          var c = t * m,
            p = e / 2;
          ((a = p - c / 2), (l = p + c / 2));
        }
      } else ((a = o[0][0]), (i = o[0][1]), (l = o[1][0]), (s = o[1][1]));
      var _ = v(e, t, n, r),
        f = _.width,
        g = _.height,
        h = (a / e) * f,
        y = (l / e) * f,
        C = (i / t) * g,
        b = (s / t) * g,
        S = y - h,
        R = b - C,
        L = Math.min(n / S, r / R),
        E = f / 2,
        k = g / 2,
        I = (y + h) / 2,
        T = (b + C) / 2,
        D = E - I,
        x = k - T;
      return {
        clip: "rect(" + C + "px, " + y + "px, " + b + "px, " + h + "px)",
        transform: "scale(" + L + ") translate(" + D + "px, " + x + "px) ",
      };
    }
    function E(e) {
      var t = e[0],
        n = t[0],
        r = t[1],
        o = e[1],
        a = o[0],
        i = o[1];
      return Math.abs((n - a) / (r - i));
    }
    function k(e) {
      var t = e[0],
        n = t[0],
        r = t[1],
        o = e[1],
        a = o[0],
        i = o[1];
      return { height: Math.abs(r - i), width: Math.abs(n - a) };
    }
    function I(e, t, n) {
      if (e === t) return !0;
      if (e == null || t == null) return !1;
      var r = 0,
        o = 0;
      return (
        n.thresholdType === "pixel"
          ? ((r = n.thresholdX), (o = n.thresholdY))
          : ((r = (n.imageWidth * n.threshold) / 100),
            (o = (n.imageHeight * n.threshold) / 100)),
        e.every(function (e, n) {
          var a = e[0],
            i = e[1],
            l = t[n],
            s = l[0],
            u = l[1];
          return (
            Math.abs(a - s) <= Math.abs(r) && Math.abs(i - u) <= Math.abs(o)
          );
        })
      );
    }
    function T(e) {
      var t = e.cropHeight,
        n = e.cropWidth,
        r = e.imageHeight,
        o = e.imageWidth,
        a = e.maxScaling,
        i = a === void 0 ? 3.5 : a,
        l = o / n,
        s = r / t,
        u = s > l;
      return (
        u && s > i
          ? ((l = i * (l / s)), (s = i))
          : !u && l > i && ((s = i * (s / l)), (l = i)),
        [l, s]
      );
    }
    function D(e, t, n, o, a) {
      var i = e[0],
        l = i[0],
        s = i[1],
        u = e[1],
        c = u[0],
        d = u[1],
        m = [l, c],
        p = [0, t],
        _ = [s, d],
        f = [0, n],
        g = r("shiftPoints")(m, o, p),
        h = g[0],
        y = g[1],
        C = r("shiftPoints")(_, a, f),
        b = C[0],
        v = C[1];
      return [
        [h, b],
        [y, v],
      ];
    }
    function x(e) {
      return Math.abs(e - p) <= _;
    }
    function $(e) {
      var t = null;
      if (e != null && Object.keys(e).length > 0) {
        var n = Object.keys(e)[0];
        t = e[n];
      }
      var r = t != null ? k(t) : null;
      return { crop: t, cropSize: r };
    }
    function P(e, t) {
      return !e && !t
        ? !0
        : (e == null ? void 0 : e.height) === (t == null ? void 0 : t.height) &&
            (e == null ? void 0 : e.width) === (t == null ? void 0 : t.width);
    }
    ((l.calculateCroppedPosition = f),
      (l.calculateBackgroundScale = g),
      (l.calculateCroppedScale = h),
      (l.addToImageCollection = y),
      (l.renderScaledCroppedImage = C),
      (l.renderScaledImage = b),
      (l.scaleImageFitIntoBox = v),
      (l.scaleImageFitIntoBoxByAspectRatio = S),
      (l.canCropStaticImageForPlatform = R),
      (l.getImageTransformForBounds = L),
      (l.calculateCropAspectRatio = E),
      (l.calculateCropSize = k),
      (l.areCropsSimilar = I),
      (l.getPreviewCropDragScaling = T),
      (l.shiftCrop = D),
      (l.isNineBySixteenRatio = x),
      (l.getCropValueSizeFromCrops = $),
      (l.areCropSizesEqual = P));
  },
  98,
);
