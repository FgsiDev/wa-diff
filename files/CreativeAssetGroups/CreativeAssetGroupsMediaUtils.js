__d(
  "CreativeAssetGroupsMediaUtils",
  ["AdsLoadState_LEGACY"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e
        .map(function (e) {
          return s(e, t);
        })
        .filter(Boolean);
    }
    function s(e, t) {
      var n = e.video_id;
      if (n == null) return null;
      var o = t(n);
      return o != null && o.loadState !== r("AdsLoadState_LEGACY").LOADING
        ? {
            video_id: n,
            thumbnail_id: o.preferredThumbnail.id,
            thumbnail_source: "generated_default",
            image_url: o.preferredThumbnail.uri,
          }
        : null;
    }
    l.getCagVideoAssetsForCAG = e;
  },
  98,
);
