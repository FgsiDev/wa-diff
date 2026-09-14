__d(
  "AdsPixelProviderPlugin",
  ["AdsLoadState_LEGACY", "AdsPixelDataManager", "LoadObjectMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = r("LoadObjectMap").create(function (e) {
        s(t, { pixelIDs: e });
      });
      return {
        isPixelRefreshing: !1,
        pixelListLoadState: r("AdsLoadState_LEGACY").NOT_LOADED,
        pixels: e,
      };
    };
    function s(e, t) {
      e(function (e) {
        return (
          t.pixelIDs.forEach(function (e) {
            o("AdsPixelDataManager").loadPixel(e);
          }),
          babelHelpers.extends({}, e, {
            pixels: e.pixels.setLoading(Array.from(t.pixelIDs)),
          })
        );
      });
    }
    var u = {
        initialState: function (n) {
          return e(n);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
