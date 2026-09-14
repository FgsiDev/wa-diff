__d(
  "AdsImageAspectRatioUtils",
  [
    "AdImageAspectRatioTypeSpecs",
    "AdImageSpecCropKeys",
    "AdsImageCoordinatesUtils",
    "AdsImageUtils",
    "immutable",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.9,
      s = 1.3,
      u = r("immutable").Map(
        r("objectValues")(r("AdImageSpecCropKeys")).map(function (e) {
          var t;
          return [e, (t = c(e)) != null ? t : 1 / 0];
        }),
      );
    function c(e) {
      switch (e) {
        case r("AdImageSpecCropKeys")["191x100"]:
          return 191 / 100;
        case r("AdImageSpecCropKeys")["100x72"]:
          return 100 / 72;
        case r("AdImageSpecCropKeys")["110x80"]:
          return 110 / 80;
        case r("AdImageSpecCropKeys")["400x150"]:
          return 400 / 150;
        case r("AdImageSpecCropKeys")["600x360"]:
          return 600 / 360;
        case r("AdImageSpecCropKeys")["254x94"]:
          return 254 / 94;
        case r("AdImageSpecCropKeys")["254x133"]:
          return 254 / 133;
        case r("AdImageSpecCropKeys")["254x143"]:
          return 254 / 143;
        case r("AdImageSpecCropKeys")["284x149"]:
          return 284 / 149;
        case r("AdImageSpecCropKeys")["398x208"]:
          return 398 / 208;
        case r("AdImageSpecCropKeys")["125x90"]:
          return 125 / 90;
        case r("AdImageSpecCropKeys")["320x50"]:
          return 320 / 50;
        case r("AdImageSpecCropKeys")["100x100"]:
          return 100 / 100;
        case r("AdImageSpecCropKeys")["600x600"]:
          return 600 / 600;
        case r("AdImageSpecCropKeys")["400x500"]:
          return 400 / 500;
        case r("AdImageSpecCropKeys")["90x160"]:
          return 90 / 160;
        default:
          return null;
      }
    }
    function d(e, t) {
      return (
        t === void 0 && (t = 0.01),
        u
          .filter(function (n) {
            return Math.abs(e - n) <= t;
          })
          .keySeq()
          .toSet()
      );
    }
    function m(e) {
      switch (e) {
        case r("AdImageSpecCropKeys")["191x100"]:
          return "HORIZONTAL";
        case r("AdImageSpecCropKeys")["100x100"]:
          return "SQUARE";
        case r("AdImageSpecCropKeys")["90x160"]:
          return "FULLSCREEN_VERTICAL";
        case r("AdImageSpecCropKeys")["400x500"]:
          return "VERTICAL";
        case r("AdImageSpecCropKeys").NO_CROP:
          return "ORIGINAL";
        default:
          return null;
      }
    }
    function p(e) {
      switch (e) {
        case "SQUARE":
          return r("AdImageSpecCropKeys")["100x100"];
        case "HORIZONTAL":
          return r("AdImageSpecCropKeys")["191x100"];
        case "FULLSCREEN_VERTICAL":
          return r("AdImageSpecCropKeys")["90x160"];
        case "VERTICAL":
          return r("AdImageSpecCropKeys")["400x500"];
        case "ORIGINAL":
          return r("AdImageSpecCropKeys").NO_CROP;
        default:
          return null;
      }
    }
    function _(e) {
      var t = p(e);
      return c(t);
    }
    function f(e, t, n) {
      var r,
        a = p(e),
        i = a != null ? c(a) : null;
      return a != null && i != null
        ? ((r = {}),
          (r[a.toString()] = o(
            "AdsImageCoordinatesUtils",
          ).calculateDefaultCoordinates(t, n, i)),
          r)
        : null;
    }
    function g(e, t, n) {
      var r = p(e),
        o = f(e, t, n),
        a = r != null ? (o == null ? void 0 : o[r]) : null;
      return a != null && b(e, a) ? o : null;
    }
    function h(e, t) {
      var n,
        r = p(e),
        o = t.get(e);
      return r != null && o != null && b(e, o.crop_values)
        ? ((n = {}), (n[r.toString()] = o.crop_values), n)
        : null;
    }
    function y(e, t, n) {
      var r = n.get(t),
        o = h(t, n),
        a =
          (r == null ? void 0 : r.original_aes_rating) != null &&
          (r == null ? void 0 : r.cropped_aes_rating) != null &&
          r.original_aes_rating < r.cropped_aes_rating,
        i = (r == null ? void 0 : r.is_safe_zone) === !0;
      return o != null && S(e) !== t && (a || i);
    }
    function C(e, t, n) {
      var r = n.get(t),
        o = h(t, n),
        a =
          (r == null ? void 0 : r.original_aes_rating) != null &&
          (r == null ? void 0 : r.cropped_aes_rating) != null &&
          r.original_aes_rating < r.cropped_aes_rating;
      return (
        o != null &&
        S(e) !== t &&
        (a || (r == null ? void 0 : r.is_safe_zone) === !0)
      );
    }
    function b(e, t) {
      var n,
        r,
        o = t[1][0] - t[0][0],
        a = t[1][1] - t[0][1],
        i = p(e),
        l = o / a,
        s = d(l),
        u = i != null && s.has(i),
        c = E(e),
        m = o >= ((n = c == null ? void 0 : c.minWarningWidth) != null ? n : 0),
        _ =
          a >= ((r = c == null ? void 0 : c.minWarningHeight) != null ? r : 0);
      return u && m && _;
    }
    function v(e, t, n) {
      var r;
      return (
        n === void 0 && (n = 0.01),
        (r = d(e / t, n)
          .map(m)
          .filter(Boolean)
          .first()) != null
          ? r
          : null
      );
    }
    function S(e, t) {
      return (t === void 0 && (t = 0.01), v(e.width, e.height, t));
    }
    function R(t, n) {
      if (t <= 0 || n <= 0) return null;
      var r = t / n;
      return r >= e && r <= s
        ? "SQUARE"
        : r < e
          ? "FULLSCREEN_VERTICAL"
          : "HORIZONTAL";
    }
    function L(e) {
      return R(e.width, e.height);
    }
    function E(e) {
      return r("AdImageAspectRatioTypeSpecs")[e];
    }
    function k(e, t, n) {
      var r = n.width / t.width,
        o = n.height / t.height;
      return r <= 0 || o <= 0
        ? null
        : [
            [e[0][0] * r, e[0][1] * o],
            [e[1][0] * r, e[1][1] * o],
          ];
    }
    function I(e, t) {
      var n = t,
        r = t,
        o = c(e);
      return (
        o != null &&
          ((n = Math.round(t * Math.min(o, 1))),
          (r = Math.round(t / Math.max(o, 1)))),
        { width: n, height: r }
      );
    }
    function T(e) {
      return r("objectValues")(r("AdImageSpecCropKeys")).find(function (t) {
        return t === e;
      });
    }
    function D(e, t) {
      return [
        [0, 0],
        [e, t],
      ];
    }
    function x(e, t, n) {
      return e == null
        ? !1
        : o("AdsImageUtils").areCropsSimilar(e, D(t, n), {
            thresholdType: "pixel",
            thresholdX: 2,
            thresholdY: 2,
          });
    }
    function $(e, t) {
      if (t == null) return !0;
      if (e == null || Object.keys(t).length !== 1) return !1;
      var n = t[Object.keys(t)[0]];
      return x(n, e.width, e.height);
    }
    ((l.getAspectRatioFromCropKey = c),
      (l.getCropKeysFromAspectRatio = d),
      (l.getAspectRatioTypeFromCropKey = m),
      (l.getCropKeyFromAspectRatioType = p),
      (l.getAspectRatioFromType = _),
      (l.getCenterCropsForAspectRatioType = f),
      (l.getValidCenterCropsForAspectRatioType = g),
      (l.getValidSmartCropsForAspectRatioType = h),
      (l.isSmartCropBetterThanOriginal = y),
      (l.isSmartCropAvailable = C),
      (l.isAspectRatioTypeCropValid = b),
      (l.getAspectRatioTypeFromDimensions = v),
      (l.getAspectRatioTypeFromImage = S),
      (l.getVariantAspectRatioType = R),
      (l.getVariantAspectRatioTypeFromImage = L),
      (l.getAspectRatioTypeImageSpec = E),
      (l.getScaledCrop = k),
      (l.getDimensionsFromCropKey = I),
      (l.getCropKeyFromString = T),
      (l.getImageOriginalCropValue = D),
      (l.isCropValueOriginal = x),
      (l.isImageUsingOriginalCrops = $));
  },
  98,
);
