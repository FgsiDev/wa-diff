__d(
  "AdsConversionPixelServerActions",
  [
    "AdsConversionPixelBatchLoadErrorDataAction",
    "AdsConversionPixelUpdatePixelsDataAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("AdsConversionPixelBatchLoadErrorDataAction").dispatch(
        { error: e },
        {
          line: "18",
          module: "AdsConversionPixelServerActions.js",
          moduleID: i.id,
        },
      );
    }
    function s(e, t) {
      r("AdsConversionPixelUpdatePixelsDataAction").dispatch(
        { lastPage: t, pixels: e },
        {
          line: "25",
          module: "AdsConversionPixelServerActions.js",
          moduleID: i.id,
        },
      );
    }
    ((l.loadingError = e), (l.updatePixels = s));
  },
  98,
);
