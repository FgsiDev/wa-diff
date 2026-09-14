__d(
  "Alignment",
  ["invariant", "DOMVector", "Style", "containsNode"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = t), (this.$2 = n), (this.$3 = e));
      }
      var t = e.prototype;
      return (
        (t.getElement = function () {
          return this.$3;
        }),
        (t.getX = function () {
          return this.$1;
        }),
        (t.getY = function () {
          return this.$2;
        }),
        (t.isCorner = function () {
          return (
            (this.$1 === e.LEFT || this.$1 === e.RIGHT) &&
            (this.$2 === e.TOP || this.$2 === e.BOTTOM)
          );
        }),
        (t.getPosition = function (t) {
          return r("DOMVector")
            .getElementPosition(this.$3, t)
            .add(
              this.getX() * this.$3.offsetWidth,
              this.getY() * this.$3.offsetHeight,
            );
        }),
        e
      );
    })();
    ((e.LEFT = 0),
      (e.CENTER = 0.5),
      (e.RIGHT = 1),
      (e.TOP = 0),
      (e.MIDDLE = 0.5),
      (e.BOTTOM = 1));
    var u = (function () {
      function t(e, t, n) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          r("containsNode")(e.getElement(), t.getElement()) || s(0, 5861),
          e.isCorner() || s(0, 5862));
      }
      var n = t.prototype;
      return (
        (n.align = function () {
          var e = this;
          t.$4(this.$1, function () {
            return t.measure(e.$2, e.$3);
          });
        }),
        (t.$4 = function (n, o) {
          var t = n.getElement();
          r("Style").apply(t, {
            left: n.getX() === e.LEFT ? "0" : "",
            right: n.getX() === e.RIGHT ? "0" : "",
            top: n.getY() === e.TOP ? "0" : "",
            bottom: n.getY() === e.BOTTOM ? "0" : "",
          });
          var a = o();
          (n.getX() === e.LEFT
            ? r("Style").set(t, "left", a.x + "px")
            : n.getX() === e.RIGHT && r("Style").set(t, "right", -a.x + "px"),
            n.getY() === e.TOP
              ? r("Style").set(t, "top", a.y + "px")
              : n.getY() === e.BOTTOM &&
                r("Style").set(t, "bottom", -a.y + "px"));
        }),
        (t.position = function (n, o) {
          t.$4(n, function () {
            var e = r("DOMVector").getElementPosition(n.getElement());
            return o.convertTo("document").sub(e);
          });
        }),
        (t.measure = function (t, n) {
          var e = t.getPosition("document"),
            r = n.getPosition("document");
          return r.sub(e);
        }),
        t
      );
    })();
    ((u.Anchor = e), (l.default = u));
  },
  98,
);
