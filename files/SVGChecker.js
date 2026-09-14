__d(
  "SVGChecker",
  [],
  function (t, n, r, o, a, i) {
    a.exports = {
      isSVG: function (t) {
        return !!t.ownerSVGElement || t.tagName.toLowerCase() === "svg";
      },
      isDisplayed: function (t) {
        try {
          var e = t.getBBox();
          if (e && (e.height === 0 || e.width === 0)) return !1;
        } catch (e) {
          return !1;
        }
        return !0;
      },
    };
  },
  null,
);
