__d(
  "AdsPixelStoreSetPixelListLoadingReducerPlugin",
  ["AdsLoadState_LEGACY", "AdsPixelDataManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = babelHelpers.extends({}, t);
          return (
            e.pixelListLoadState === r("AdsLoadState_LEGACY").NOT_LOADED &&
              ((e.pixelListLoadState = r("AdsLoadState_LEGACY").LOADING),
              o("AdsPixelDataManager").loadPixels()),
            e
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
