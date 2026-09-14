__d(
  "AdImageSharedAspectRatioTypeSpecs",
  ["AdImageSpecCropKeys", "getTranslatableRatio"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        ((e = {}),
        (e.FULLSCREEN_VERTICAL = {
          width: 1080,
          height: 1920,
          minWarningWidth: 500,
          minWarningHeight: 889,
          aspectRatio: 0.5625,
          cropKey: (s = r("AdImageSpecCropKeys"))["90x160"],
        }),
        (e.HORIZONTAL = {
          width: 1200,
          height: 628,
          minWarningWidth: 254,
          minWarningHeight: 133,
          aspectRatio: 1.91,
          displayRatio: r("getTranslatableRatio")(1.91, 1),
          cropKey: s["191x100"],
        }),
        (e.SQUARE = {
          width: 1080,
          height: 1080,
          minWarningWidth: 400,
          minWarningHeight: 400,
          aspectRatio: 1,
          displayRatio: r("getTranslatableRatio")(1, 1),
          cropKey: s["100x100"],
        }),
        (e.VERTICAL = {
          width: 400,
          height: 500,
          minWarningWidth: 400,
          minWarningHeight: 400,
          aspectRatio: 0.8,
          cropKey: s["400x500"],
        }),
        e),
      c = u;
    l.default = c;
  },
  98,
);
