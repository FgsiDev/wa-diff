__d(
  "adsPlacementAssetMutationCopyDefaultCustomizations",
  [
    "AdsBrandAwarenessUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupUrlMutators",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = r(
        "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
      )(t, n, e);
      return (
        (i = o("AdsUEditorAdgroupBodyMutators").copyDefaultPlacementBodies(
          i,
          n,
          a,
        )),
        (i = o(
          "AdsUEditorAdgroupHeadlineMutators",
        ).copyDefaultPlacementHeadlines(i, n, a)),
        o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t) &&
          (i = o("AdsUEditorAdgroupUrlMutators").copyDefaultPlacementURL(
            i,
            n,
            a,
          )),
        i
      );
    }
    l.default = e;
  },
  98,
);
