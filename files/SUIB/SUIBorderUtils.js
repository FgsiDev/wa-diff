__d(
  "SUIBorderUtils",
  ["CornerEnum", "Locale", "SideEnum", "prop-types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("prop-types")).arrayOf(e.oneOf(r("SideEnum").values)),
      u = e.arrayOf(e.oneOf(r("CornerEnum").values));
    function c(e, t) {
      var n = t;
      if (e === r("CornerEnum").values)
        return n != null ? { borderRadius: n } : null;
      var a = new Set(e);
      if (a.size === r("CornerEnum").values.length)
        return n != null ? { borderRadius: n } : null;
      n == null && (n = "2px");
      var i = {
        borderTopLeftRadius: a.has("topLeft") ? n : "0",
        borderTopRightRadius: a.has("topRight") ? n : "0",
        borderBottomRightRadius: a.has("bottomRight") ? n : "0",
        borderBottomLeftRadius: a.has("bottomLeft") ? n : "0",
      };
      return o("Locale").isRTL()
        ? {
            borderTopLeftRadius: i.borderTopRightRadius,
            borderTopRightRadius: i.borderTopLeftRadius,
            borderBottomRightRadius: i.borderBottomLeftRadius,
            borderBottomLeftRadius: i.borderBottomRightRadius,
          }
        : i;
    }
    function d(e) {
      if (e === r("SideEnum").values) return null;
      var t = new Set(e);
      if (t.size === r("SideEnum").values.length) return null;
      var n = {
        borderTopWidth: t.has("top") ? "1px" : "0",
        borderRightWidth: t.has("right") ? "1px" : "0",
        borderBottomWidth: t.has("bottom") ? "1px" : "0",
        borderLeftWidth: t.has("left") ? "1px" : "0",
      };
      return o("Locale").isRTL()
        ? babelHelpers.extends({}, n, {
            borderRightWidth: n.borderLeftWidth,
            borderLeftWidth: n.borderRightWidth,
          })
        : n;
    }
    ((l.ALL_CORNERS = r("CornerEnum").values),
      (l.ALL_SIDES = r("SideEnum").values),
      (l.BorderedSidesPropType = s),
      (l.RoundedCornersPropType = u),
      (l.getBorderRadiusStyles = c),
      (l.getBorderWidthStyles = d));
  },
  98,
);
