__d(
  "AdsConversionPixelDataDispatcher",
  [
    "AdsConversionPixelDataLoader",
    "AdsConversionPixelServerActions",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.loadPixels = function (t) {
            r("promiseDone")(
              r("AdsConversionPixelDataLoader")
                .getAdsAPIFetchPromiseForPixels(t)
                .then(
                  function (e) {
                    return o("AdsConversionPixelServerActions").updatePixels(
                      e.data,
                    );
                  },
                  function (e) {
                    return o("AdsConversionPixelServerActions").loadingError(e);
                  },
                ),
            );
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
