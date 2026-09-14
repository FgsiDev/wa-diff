__d(
  "VideoPlayerHTML5ApiWebVttState",
  ["Bootloader", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this,
          n = e.captionsDisplay,
          o = e.onCaptionsLoaded,
          a = e.onReady;
        ((this.$1 = null),
          (this.source = null),
          (this.captionsDisplay = null),
          (this.$1 = r("Bootloader").loadModules(
            ["VideoPlayerWebVttCaptionsSource"],
            function (e) {
              var r = new e({
                onCaptionsLoaded: o,
                onCaptionsChanged: function (n, r) {
                  t.captionsDisplay &&
                    t.captionsDisplay.handleCaptionsChanged(n, r);
                },
              });
              ((t.source = r), (t.captionsDisplay = n), a(t));
            },
            "VideoPlayerHTML5ApiWebVttState",
          )));
      }
      var t = e.prototype;
      return (
        (t.loadFromUrl = function (t) {
          var e = this.source;
          if (!e)
            throw r("FBLogger")("video_captions").mustfixThrow(
              "[VideoPlayerHTML5ApiWebVttState] Called loadFromUrl when not ready; call from onReady callback.",
            );
          e.loadFromUrl(t);
        }),
        (t.getCurrentScreenRepresentation = function () {
          return this.source
            ? this.source.getCurrentScreenRepresentation()
            : null;
        }),
        (t.destroy = function () {
          (this.$1 && (this.$1.remove(), (this.$1 = null)),
            this.captionsDisplay &&
              (this.captionsDisplay.destroy(), (this.captionsDisplay = null)),
            this.source && (this.source.destroy(), (this.source = null)));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
