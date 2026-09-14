__d(
  "AdsConversionPixelDataLoader",
  ["AdsGraphAPI", "GraphAPIPaging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "last_firing_time", "name", "tag", "js_pixel"],
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getAdsAPIFetchPromiseForPixels = function (n) {
            return o("AdsGraphAPI")
              .get(i.id)
              .adaccount(n)
              .edge("offsitepixels")
              .setPriority("HIGH")
              .get({ fields: e })
              .then(o("GraphAPIPaging").allPages());
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
