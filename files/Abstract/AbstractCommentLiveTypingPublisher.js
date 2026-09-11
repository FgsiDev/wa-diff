__d(
  "AbstractCommentLiveTypingPublisher",
  ["destroyOnUnload", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = 10 * 1e3,
      u = 200,
      c = (function () {
        function t() {
          var e = this;
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = -1),
            r("gkx")("20935") ||
              r("destroyOnUnload")(function () {
                return e.destroy();
              }),
            window.addEventListener("unload", function () {
              e.destroy();
            }));
        }
        var n = t.prototype;
        return (
          (n.destroy = function () {
            (this.$4(), this.$5(), this.$6());
          }),
          (n.handleStartEvent = function () {
            (this.$7() || this.$8(), this.$9());
          }),
          (n.handleStopEvent = function () {
            this.$4();
          }),
          (n.publishStartEvent = function () {
            var e = new Error(
              "publishStartEvent should be overridden by subclass",
            );
            throw (e.stack, e);
          }),
          (n.publishStopEvent = function () {
            var e = new Error(
              "publishStopEvent should be overridden by subclass",
            );
            throw (e.stack, e);
          }),
          (n.$7 = function () {
            return !!this.$1;
          }),
          (n.$5 = function () {
            this.$2 && (clearTimeout(this.$2), (this.$2 = null));
          }),
          (n.$6 = function () {
            this.$1 && (clearTimeout(this.$1), (this.$1 = null));
          }),
          (n.$9 = function () {
            var e = this,
              t = Date.now(),
              n = this.$3;
            t > n + u &&
              ((this.$3 = t),
              this.$5(),
              (this.$2 = setTimeout(function () {
                e.$4();
              }, s)));
          }),
          (n.$4 = function () {
            (this.$7() && (this.publishStopEvent(), this.$6()), this.$5());
          }),
          (n.$8 = function () {
            var t = this;
            (this.publishStartEvent(),
              this.$6(),
              (this.$1 = setTimeout(function () {
                t.$8();
              }, e)));
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
