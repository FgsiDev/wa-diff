__d(
  "VideoScrubberPreviewComponent",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(t, n) {
        var o = this;
        if (!n) throw r("err")("VideoScrubberPreview Component config null.");
        ((this.$3 = n),
          (this.$4 = t),
          (this.$1 = n.hasPreviewThumbnails),
          (this.$2 = e.getSpriteURIs(n.spriteIndexToURIMap)),
          this.$5(),
          this.$4.addListener("switchedToFullVideo", function () {
            return o.$5();
          }));
      }
      var t = e.prototype;
      return (
        (t.hasPreviewThumbnails = function () {
          return this.$1;
        }),
        (t.$5 = function () {
          var e = this;
          (this.$4.registerOption(
            "VideoScrubberPreviewComponent",
            "scrubberPreviewSprites",
            function () {
              return e.getSprites();
            },
          ),
            this.$4.registerOption(
              "VideoScrubberPreviewComponent",
              "hasPreviewThumbnails",
              function () {
                return e.hasPreviewThumbnails();
              },
            ),
            this.$4.registerOption(
              "VideoScrubberPreviewComponent",
              "previewThumbnailInformation",
              function () {
                return e.getPreviewThumbnailInformation();
              },
            ));
        }),
        (t.getSprites = function () {
          return this.$2;
        }),
        (t.getPreviewThumbnailInformation = function () {
          return (
            this.hasPreviewThumbnails()
              ? (this.$3.imagesPerColumn =
                  this.$3.maxImagesPerSprite / this.$3.imagesPerRow)
              : (this.$3.imagesPerColumn = 0),
            this.$3
          );
        }),
        (e.getSpriteURIs = function (t) {
          var e = new Map();
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.set(parseInt(n, 10), t[n]);
          return e;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
