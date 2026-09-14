__d(
  "ContextualLayerOrientation",
  [
    "ContextualLayerAlignmentEnum",
    "ContextualLayerPositionEnum",
    "emptyFunction",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { above: "below", below: "above", left: "right", right: "left" },
      s = r("gkx")("17507"),
      u = (function () {
        function t() {
          ((this.$1 = {
            $2: "left",
            $3: 0,
            $4: 0,
            $5: 0,
            $6: "above",
            $7: s,
            $8: !0,
          }),
            (this.$9 = this.$1.$2),
            (this.$10 = this.$1.$3),
            (this.$11 = this.$1.$4),
            (this.$12 = this.$1.$5),
            (this.$13 = this.$1.$6),
            (this.$14 = this.$1.$7),
            (this.$15 = this.$1.$8));
        }
        var n = t.prototype;
        return (
          (n.setPosition = function (t) {
            return ((this.$13 = c(t)), this);
          }),
          (n.setAlignment = function (t) {
            return ((this.$9 = d(t)), this);
          }),
          (n.getOppositePosition = function () {
            return e[this.getPosition()];
          }),
          (n.invalidate = function () {
            return ((this.$15 = !1), this);
          }),
          (n.getPosition = function () {
            return this.$13 || "above";
          }),
          (n.getAlignment = function () {
            return this.$9 || "left";
          }),
          (n.getOffsetX = function () {
            var e = this.$11 || 0;
            return (
              this.isVertical()
                ? this.$1.$2 !== this.$9 && (e *= -1)
                : this.$1.$6 !== this.$13 && (e *= -1),
              e
            );
          }),
          (n.getOffsetY = function () {
            var e = this.$12 || 0;
            return (
              this.isVertical() && this.$1.$6 !== this.$13 && (e *= -1),
              e
            );
          }),
          (n.getClassName = function () {
            var e = this.getAlignment(),
              t = this.getPosition();
            return t === "below"
              ? e === "left"
                ? "uiContextualLayerBelowLeft"
                : e === "right"
                  ? "uiContextualLayerBelowRight"
                  : "uiContextualLayerBelowCenter"
              : t === "above"
                ? e === "left"
                  ? "uiContextualLayerAboveLeft"
                  : e === "right"
                    ? "uiContextualLayerAboveRight"
                    : "uiContextualLayerAboveCenter"
                : t === "left"
                  ? "uiContextualLayerLeft"
                  : "uiContextualLayerRight";
          }),
          (n.isValid = function () {
            return this.$15;
          }),
          (n.isVertical = function () {
            return (
              this.getPosition() === "above" || this.getPosition() === "below"
            );
          }),
          (n.reset = function () {
            return (
              (this.$9 = this.$1.$2),
              (this.$10 = this.$1.$3),
              (this.$11 = this.$1.$4),
              (this.$12 = this.$1.$5),
              (this.$13 = this.$1.$6),
              (this.$14 = this.$1.$7),
              (this.$15 = this.$1.$8),
              this
            );
          }),
          (n.setDefaultPosition = function (t) {
            var e = this.$1.$6;
            return ((this.$1.$6 = c(t)), e !== t);
          }),
          (n.setDefaultAlignment = function (t) {
            var e = this.$1.$2;
            return ((this.$1.$2 = d(t)), e !== t);
          }),
          (n.setDefaultOffsetX = function (t) {
            var e = this.$1.$4;
            return ((this.$1.$4 = t), e !== t);
          }),
          (n.setArrowOffset = function (t) {
            var e = this.$1.$3;
            return ((this.$1.$3 = t), e !== t);
          }),
          (n.getArrowOffset = function () {
            return this.$1.$3 || 0;
          }),
          (n.setDefaultOffsetY = function (t) {
            var e = this.$1.$5;
            return ((this.$1.$5 = t), e !== t);
          }),
          (n.setPreferMoreContentShownRect = function (t) {
            var e = this.$1.$7;
            return ((this.$1.$7 = t), e !== t);
          }),
          (n.getPreferMoreContentShownRect = function () {
            return this.$1.$7;
          }),
          t
        );
      })(),
      c = r("emptyFunction").thatReturnsArgument,
      d = r("emptyFunction").thatReturnsArgument;
    l.default = u;
  },
  98,
);
