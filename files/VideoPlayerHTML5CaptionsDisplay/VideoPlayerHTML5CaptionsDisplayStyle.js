__d(
  "VideoPlayerHTML5CaptionsDisplayStyle",
  ["cx", "CSS", "isTruthy"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        Black: "20, 22, 26",
        Blue: "0, 0, 255",
        Green: "0, 255, 0",
        Cyan: "0, 255, 255",
        Red: "255, 0, 0",
        Magenta: "255, 0, 255",
        White: "255, 255, 255",
        Yellow: "255, 255, 0",
      },
      u = {
        DEFAULT_BACKGROUND_COLOR: "Black",
        DEFAULT_BACKGROUND_OPACITY: 45,
        DEFAULT_TEXT_COLOR: "White",
        DEFAULT_TEXT_SIZE: 100,
        DEFAULT_TEXT_OPACITY: 100,
      },
      c = (function () {
        function t(e, t, n, r) {
          ((this.$5 = "center"),
            (this.$1 = e),
            (this.$2 = t),
            this.setBackgroundColor(n.background.color),
            this.setBackgroundOpacity(n.background.opacity),
            this.setTextColor(n.text.color),
            this.setTextSize(n.text.size),
            this.setTextOpacity(n.text.opacity),
            this.setTextTypeface(n.text.typeface),
            this.setTextEdge(n.text.edge),
            this.setTextAlignment(r),
            this.updateStyle());
        }
        var n = t.prototype;
        return (
          (n.setBackgroundColor = function (n) {
            n != null && Object.prototype.hasOwnProperty.call(e, n)
              ? (this.$3 = n)
              : (this.$3 = u.DEFAULT_BACKGROUND_COLOR);
          }),
          (n.setBackgroundOpacity = function (t) {
            r("isTruthy")(t) && t >= -1 && t <= 100
              ? (this.$4 = t)
              : (this.$4 = u.DEFAULT_BACKGROUND_OPACITY);
          }),
          (n.setTextColor = function (n) {
            n != null && Object.prototype.hasOwnProperty.call(e, n)
              ? (this.$6 = n)
              : (this.$6 = u.DEFAULT_TEXT_COLOR);
          }),
          (n.setTextSize = function (t) {
            t != null && t >= 50 && t <= 200
              ? (this.$7 = t)
              : (this.$7 = u.DEFAULT_TEXT_SIZE);
          }),
          (n.setTextOpacity = function (t) {
            t != null && t >= 25 && t <= 100
              ? (this.$8 = t)
              : (this.$8 = u.DEFAULT_TEXT_OPACITY);
          }),
          (n.setTextTypeface = function (t) {
            this.$9 = t;
          }),
          (n.setTextEdge = function (t) {
            this.$10 = t;
          }),
          (n.setTextAlignment = function (t) {
            this.$5 = t != null ? t : "center";
          }),
          (n.updateStyle = function () {
            var t,
              n,
              r = this.$4;
            (this.$4 === -1 && (r = 0),
              (r = r != null ? r : u.DEFAULT_BACKGROUND_OPACITY));
            var a = (t = this.$3) != null ? t : u.DEFAULT_BACKGROUND_COLOR,
              i = r / 100,
              l = "rgba(" + e[a] + ", " + i + ")";
            ((this.$1.style.backgroundColor = l),
              (this.$1.style.color =
                (n = this.$6) != null ? n : u.DEFAULT_TEXT_COLOR));
            var s =
              "0 0 10px rgb(" + e[a] + "), 0 0 5px rgba(" + e[a] + ", .8)";
            this.$1.style.textShadow = s;
            var c = this.$7 != null && this.$7 != null ? this.$7 : 100;
            (o("CSS").conditionClass(this.$2, "_5z64", c <= 50),
              o("CSS").conditionClass(this.$2, "_5z65", c > 50 && c <= 75),
              o("CSS").conditionClass(this.$2, "_5z66", c > 100 && c <= 125),
              o("CSS").conditionClass(this.$2, "_5z67", c > 125 && c <= 150),
              o("CSS").conditionClass(this.$2, "_5z68", c > 150 && c <= 175),
              o("CSS").conditionClass(this.$2, "_5z69", c > 175),
              o("CSS").conditionClass(this.$2, "_6mk2", this.$5 === "left"),
              o("CSS").conditionClass(this.$1, "_6mk2", this.$5 === "left"));
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
