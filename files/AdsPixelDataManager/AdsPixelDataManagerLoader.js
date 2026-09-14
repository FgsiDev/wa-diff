__d(
  "AdsPixelDataManagerLoader",
  ["AdsGraphAPI", "AdsPixelFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("adspixels")
        .setPriority("HIGH")
        .batched()
        .get({ fields: o("AdsPixelFields").PIXEL_FIELDS });
    }
    l.loadPixels = e;
  },
  98,
);
