__d(
  "VideoPlayerUIComponentDrawer",
  ["EventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.$VideoPlayerUIComponentDrawer$p_1 = t),
          (r.$VideoPlayerUIComponentDrawer$p_2 = n),
          (r.$VideoPlayerUIComponentDrawer$p_4 = !1),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.reserve = function () {
          this.$VideoPlayerUIComponentDrawer$p_4 ||
            ((this.$VideoPlayerUIComponentDrawer$p_4 = !0),
            this.emit("reserve"));
        }),
        (n.release = function () {
          this.$VideoPlayerUIComponentDrawer$p_4 &&
            ((this.$VideoPlayerUIComponentDrawer$p_4 = !1),
            this.emit("release"));
        }),
        (n.getPriority = function () {
          return this.$VideoPlayerUIComponentDrawer$p_1;
        }),
        (n.getHeight = function () {
          return this.$VideoPlayerUIComponentDrawer$p_2;
        }),
        (n.setHeight = function (t) {
          ((this.$VideoPlayerUIComponentDrawer$p_2 = t),
            this.emit("heightChange"));
        }),
        (n.emit = function (n) {
          for (
            var t,
              r = arguments.length,
              o = new Array(r > 1 ? r - 1 : 0),
              a = 1;
            a < r;
            a++
          )
            o[a - 1] = arguments[a];
          (n === "reposition" &&
            (this.$VideoPlayerUIComponentDrawer$p_3 = o[0]),
            (t = e.prototype.emit).call.apply(t, [this, n].concat(o)));
        }),
        (n.reposition = function () {
          this.emit("reposition", this.$VideoPlayerUIComponentDrawer$p_3);
        }),
        (n.isReserved = function () {
          return this.$VideoPlayerUIComponentDrawer$p_4;
        }),
        t
      );
    })(r("EventEmitter"));
    ((e.priorities = {
      EmbeddedControls: 0,
      AdBreakStartingIndicator: 1,
      ClickForMore: 2,
      PollCard: 5,
      GameshowCard: 6,
      Subtitles: 3,
      SphericalMouseAnimation: 4,
    }),
      (l.default = e));
  },
  98,
);
