__d(
  "DocumentFocusForMutedVideoAutoplayRule",
  ["VideoAutoplayRule"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        return e.call(this, t) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.calculateAutoplayScore = function () {
          return this.isEnabled()
            ? this.$DocumentFocusForMutedVideoAutoplayRule$p_1()
            : 1;
        }),
        (n.$DocumentFocusForMutedVideoAutoplayRule$p_1 = function () {
          var e = this.videoUnit.getVideoPlayerController();
          return e && e.isMuted() ? (document.hasFocus() ? 1 : 0) : 1;
        }),
        t
      );
    })(r("VideoAutoplayRule"));
    l.default = e;
  },
  98,
);
