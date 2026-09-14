__d(
  "VideoPlayerVolumeSettings",
  ["FBLogger", "WebStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          ((this.$1 = 1), (this.$2 = 1));
        }
        var n = t.prototype;
        return (
          (n.getVolume = function () {
            var t = (e || (e = r("WebStorage"))).getLocalStorage();
            if (t) {
              var n = t.getItem("videoPlayerControllerVolume");
              return n === null || isNaN(+n) ? 1 : +n;
            }
            return this.$1;
          }),
          (n.getSessionVolume = function () {
            return this.$1;
          }),
          (n.setSessionVolume = function (t) {
            this.$1 = t;
          }),
          (n.saveVolume = function (n) {
            var t = (e || (e = r("WebStorage"))).getLocalStorage();
            if (t) {
              var o = (e || (e = r("WebStorage"))).setItemGuarded(
                t,
                "videoPlayerControllerVolume",
                n.toString(),
              );
              o != null &&
                r("FBLogger")("video")
                  .catching(o)
                  .warn("Attempt to set the video volume failed.");
            }
            this.$1 = n;
          }),
          (n.getLastVolumeBeforeMute = function () {
            var t = (e || (e = r("WebStorage"))).getLocalStorage();
            if (t) {
              var n = t.getItem("videoPlayerControllerLastVolumeBeforeMute");
              return n === null || isNaN(+n) ? 1 : +n;
            }
            return this.$2;
          }),
          (n.saveLastVolumeBeforeMute = function (n) {
            var t = (e || (e = r("WebStorage"))).getLocalStorage();
            if (t) {
              var o = (e || (e = r("WebStorage"))).setItemGuarded(
                t,
                "videoPlayerControllerLastVolumeBeforeMute",
                n.toString(),
              );
              o != null &&
                r("FBLogger")("video")
                  .catching(o)
                  .warn("Attempt to set the video volume failed.");
            }
            this.$2 = n;
          }),
          t
        );
      })(),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
