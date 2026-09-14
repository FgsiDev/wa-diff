__d(
  "AdsDCOPreviewTokenProviderPlugin",
  ["AdsDCOPreviewTokenDataLoader", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(
          o("AdsDCOPreviewTokenDataLoader").loadDCOAdTokenForPreview,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
