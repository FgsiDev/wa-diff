__d(
  "FacebookReelsOverlayVideoValidator",
  [
    "AdsError",
    "AdsFacebookReelsOverlayVideoErrorUtils",
    "AdsVideoValidationMigrationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [];
      if (
        (o("AdsVideoValidationMigrationUtils").inRange(
          e.length,
          t.minWarningLength,
          t.maxWarningLength,
        ) ||
          n.push(
            o("AdsFacebookReelsOverlayVideoErrorUtils").getInvalidLengthError(
              r("AdsError").Level.RECOMMEND,
            ),
          ),
        e.height && e.width)
      ) {
        var a = e.width / e.height;
        o("AdsVideoValidationMigrationUtils").isValidAspectRatio(a, t) ||
          n.push(
            o(
              "AdsFacebookReelsOverlayVideoErrorUtils",
            ).getInvalidAspectRatioError(r("AdsError").Level.RECOMMEND),
          );
      }
      return (
        e.creator_product === 5 &&
          n.push(
            o("AdsFacebookReelsOverlayVideoErrorUtils").getSlideShowError(
              r("AdsError").Level.RECOMMEND,
            ),
          ),
        e.spherical &&
          n.push(
            o("AdsFacebookReelsOverlayVideoErrorUtils").getSphericalError(
              r("AdsError").Level.RECOMMEND,
            ),
          ),
        n
      );
    }
    l.validateFacebookReelsOverlayVideo = e;
  },
  98,
);
