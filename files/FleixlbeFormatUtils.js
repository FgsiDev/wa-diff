__d(
  "FleixlbeFormatUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e
        .map(function (e) {
          return l(e, t);
        })
        .filter(Boolean);
    }
    function l(e, t) {
      var n = e.video_id;
      if (n == null) return null;
      var r = t(n);
      return r == null
        ? null
        : (function () {
            return {
              video_id: n,
              thumbnail_id: "0",
              thumbnail_source: "generated_default",
              image_url: r.preferredThumbnail.uri,
            };
          })();
    }
    ((i.getCagVideoAssetsForFlexibleFormat = e),
      (i.getCagVideoAssetForFlexibleFormat = l));
  },
  66,
);
