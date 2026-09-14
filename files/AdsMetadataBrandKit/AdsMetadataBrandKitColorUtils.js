__d(
  "AdsMetadataBrandKitColorUtils",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { bannerColors: [], primaryColors: [], secondaryColors: [] };
    function s(e) {
      return {
        bannerColors: [e == null ? void 0 : e[1]].map(c).filter(Boolean),
        primaryColors: [e == null ? void 0 : e[0]].map(c).filter(Boolean),
        secondaryColors: [e == null ? void 0 : e[2]].map(c).filter(Boolean),
      };
    }
    function u(e) {
      return ("#" + e).replace("##", "#");
    }
    function c(e) {
      return e == null ? void 0 : e.replace("#", "");
    }
    function d(e) {
      if (e != null)
        return [e.primaryColors[0], e.bannerColors[0], e.secondaryColors[0]];
    }
    function m(e) {
      var t,
        n,
        r,
        o = e != null ? e : {},
        a = o.banner_color,
        i = o.primary_colors,
        l = o.secondary_colors;
      return [
        (t = i == null ? void 0 : i[0]) != null ? t : null,
        (n = a == null ? void 0 : a[0]) != null ? n : null,
        (r = l == null ? void 0 : l[0]) != null ? r : null,
      ];
    }
    function p(e) {
      var t = e.map(c),
        n = t[0],
        r = t[1],
        o = t[2];
      return {
        BannerColor: r == null ? [] : [r],
        PrimaryColors: n == null ? [] : [n],
        SecondaryColors: o == null ? [] : [o],
      };
    }
    function _(e, t) {
      function n(e, t) {
        var n = e != null ? e : [],
          r = t != null ? t : [];
        return (n.sort(), r.sort(), n.join(",") === r.join(","));
      }
      return ["primaryColors", "secondaryColors", "bannerColors"].every(
        function (r) {
          return n(e == null ? void 0 : e[r], t == null ? void 0 : t[r]);
        },
      );
    }
    function f(e) {
      var t,
        n,
        r,
        o = e == null ? void 0 : e.color;
      return (o == null ? void 0 : o.primary_colors) == null &&
        (o == null ? void 0 : o.secondary_colors) == null &&
        (o == null ? void 0 : o.banner_color) == null
        ? null
        : {
            primaryColors: [].concat(
              (t = o == null ? void 0 : o.primary_colors) != null ? t : [],
            ),
            secondaryColors: [].concat(
              (n = o == null ? void 0 : o.secondary_colors) != null ? n : [],
            ),
            bannerColors: [].concat(
              (r = o == null ? void 0 : o.banner_color) != null ? r : [],
            ),
          };
    }
    var g = /^#?[\da-f]{6}$/i,
      h = function (t) {
        return g.test(t != null ? t : "");
      };
    function y(e, t) {
      var n = function (t) {
          var e = parseInt(t.slice(1, 3), 16) / 255,
            n = parseInt(t.slice(3, 5), 16) / 255,
            r = parseInt(t.slice(5, 7), 16) / 255,
            o = function (t) {
              return t <= 0.03928
                ? t / 12.92
                : Math.pow((t + 0.055) / 1.055, 2.4);
            };
          return 0.2126 * o(e) + 0.7152 * o(n) + 0.0722 * o(r);
        },
        r = function (t, n) {
          return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
        },
        o = n(u(t)),
        a = n(u(e));
      return r(o, a) > 4.5;
    }
    var C = function (t) {
      var e = t.replaceAll("#", ""),
        n = parseInt(e.substring(0, 2), 16),
        o = parseInt(e.substring(2, 4), 16),
        a = parseInt(e.substring(4, 6), 16),
        i = [n, o, a];
      if (
        i.some(function (e) {
          return isNaN(e) || Number.isNaN(e) || e > 255 || e < 0;
        })
      )
        throw r("err")("Invalid hex cannot be converted to RGB: " + t);
      return i;
    };
    function b(e, t) {
      return (
        (t ? "" : "#") +
        e
          .map(function (e) {
            return e.toString(16).padStart(2, "0").toUpperCase();
          })
          .join("")
      );
    }
    ((l.EmptyBrandKitColorMap = e),
      (l.getBrandKitColorMap = s),
      (l.getPrefixedHexColor = u),
      (l.getBrandKitColors = d),
      (l.getBrandKitColorsFromPresetColors = m),
      (l.getGqlColorMapFromBrandKitColors = p),
      (l.isBrandKitColorMatched = _),
      (l.getBrandKitColorMapFromPreset = f),
      (l.validateHexColor = h),
      (l.doColorsContrast = y),
      (l.convertHexToRgb = C),
      (l.convertRgbToHex = b));
  },
  98,
);
