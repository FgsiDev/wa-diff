__d(
  "VideoPlayerHTML5TrackNodeManager",
  ["BlobFactory", "DOM"],
  function (t, n, r, o, a, i, l) {
    var e = t.URL || t.webkitURL,
      s = (function () {
        function t(e) {
          var t = e.parsedSubRipText,
            n = e.videoEl;
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$2 = n),
            (this.$3 = t),
            this.$4());
        }
        var n = t.prototype;
        return (
          (n.$4 = function () {
            if (!(!e || !r("BlobFactory").isSupported())) {
              if (this.$3) {
                var t = r("BlobFactory").getBlob([this.$3.renderVTT()], {
                    type: "text/vtt",
                  }),
                  n = e.createObjectURL(t);
                ((this.$1 = r("DOM").create("track", {
                  kind: "captions",
                  src: n,
                })),
                  r("DOM").appendContent(this.$2, this.$1));
              }
              if (this.$2)
                for (var o = this.$2.textTracks, a = 0; a < o.length; a++) {
                  var i = o[a];
                  i && (i.mode = "hidden");
                }
            }
          }),
          (n.destroy = function () {
            this.$1 && (r("DOM").remove(this.$1), (this.$1 = null));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
