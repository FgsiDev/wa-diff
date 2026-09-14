__d(
  "AdsVideoAspectRatioUtils",
  ["AdsVideoCoordinateUtils", "VCEAspectRatio", "objectValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.01;
    function s(e) {
      switch (e) {
        case "1:1":
          return "SQUARE";
        case "9:16":
          return "FULLSCREEN_VERTICAL";
        case "16:9":
          return "FULLSCREEN_LANDSCAPE";
        case "ORIGINAL":
          return "ORIGINAL";
        default:
          return null;
      }
    }
    function u(e) {
      switch (e) {
        case "1:1":
          return 1;
        case "9:16":
          return 9 / 16;
        case "16:9":
          return 16 / 9;
        default:
          return null;
      }
    }
    function c(t) {
      return r("objectValues")(r("VCEAspectRatio"))
        .map(function (e) {
          var t;
          return [e, (t = u(e)) != null ? t : 1 / 0];
        })
        .filter(function (n) {
          var r = n[0],
            o = n[1];
          return Math.abs(o - t) <= e;
        })
        .map(function (e) {
          var t = e[0];
          return s(t);
        })[0];
    }
    function d(e) {
      var t = e.height,
        n = e.width;
      return c(n / t);
    }
    function m(e) {
      switch (e) {
        case "SQUARE":
          return "1:1";
        case "FULLSCREEN_VERTICAL":
          return "9:16";
        case "FULLSCREEN_LANDSCAPE":
          return "16:9";
        case "ORIGINAL":
          return "ORIGINAL";
        case "HORIZONTAL":
          return "1.91:1";
        case "VERTICAL":
          return "4:5";
        default:
          return null;
      }
    }
    function p(e) {
      switch (e) {
        case "SQUARE":
          return 1;
        case "FULLSCREEN_VERTICAL":
          return 9 / 16;
        case "FULLSCREEN_LANDSCAPE":
          return 16 / 9;
        case "HORIZONTAL":
          return 1.91;
        case "VERTICAL":
          return 4 / 5;
        default:
          return null;
      }
    }
    function _(e, t, n) {
      var r,
        a = m(e),
        i = a != null ? s(a) : null;
      return a != null && i != null
        ? ((r = {}),
          (r[a.toString()] = o(
            "AdsVideoCoordinateUtils",
          ).calculateDefaultCoordinates(t, n, p(i), m(e))),
          r)
        : null;
    }
    ((l.getAspectRatioTypeFromCropKey = s),
      (l.getNumericalAspectRatioFromCropKey = u),
      (l.getAspectRatioTypeFromVideo = d),
      (l.getCropKeyFromAspectRatio = m),
      (l.getNumericalRatioFromAspectRatioType = p),
      (l.getCenterCropsForAspectRatioTypeVideo = _));
  },
  98,
);
