__d(
  "VideoScrubberPreviewSpriteCalculation",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = s(t.maxImagesPerSprite, t.timeIntervalBetweenImages),
        r = Math.floor((e % n) / t.timeIntervalBetweenImages),
        o = Math.floor(r / t.imagesPerRow),
        a = r % t.imagesPerRow;
      return { x: a * t.previewScrubberWidth, y: o * t.previewScrubberHeight };
    }
    function l(e, t, n) {
      var r = s(t, n);
      return Math.floor(e / r) + 1;
    }
    function s(e, t) {
      return e * t;
    }
    ((i.getImageCoordinatesInSpriteByTime = e), (i.getSpriteIndex = l));
  },
  66,
);
