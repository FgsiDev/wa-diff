__d(
  "AdsPreviewSharingAdsCreateCompletedReducerPlugin",
  ["AdsPERouterHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t) {
          if (t.previewSharingKey != null) {
            var e;
            (e = r("AdsPERouterHelper").getRouter()) == null ||
              e.updateParams({ preview_sharing_key: null });
          }
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
