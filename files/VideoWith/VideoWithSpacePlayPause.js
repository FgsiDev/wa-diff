__d(
  "VideoWithSpacePlayPause",
  ["Event", "Run"],
  function (t, n, r, o, a, i, l) {
    var e = 32,
      s = (function () {
        function t(e) {
          this.$1 = e;
          var t = r("Event").listen(window, "keypress", this.$2.bind(this));
          o("Run").onLeave(function () {
            return t.remove();
          });
        }
        var n = t.prototype;
        return (
          (n.$2 = function (n) {
            this.$1.isFullscreen() &&
              n.charCode == e &&
              (this.$1.isState("playing")
                ? this.$1.pause("user_initiated")
                : this.$1.play("user_initiated"));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
