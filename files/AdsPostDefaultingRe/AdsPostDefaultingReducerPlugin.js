__d(
  "AdsPostDefaultingReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            r,
            o,
            a,
            i,
            l,
            s,
            u = t.wasEverDefaulted || n.isPostDefaulted,
            c = n.isPostDefaulted
              ? (e = (r = t.originalDefaultedPostID) != null ? r : n.postID) !=
                null
                ? e
                : null
              : t.originalDefaultedPostID,
            d = n.isPostDefaulted
              ? (o = t.originalDefaultType) != null
                ? o
                : n.isIGMedia === !0
                  ? "ig"
                  : "fb"
              : t.originalDefaultType;
          return {
            isPostDefaulted: n.isPostDefaulted,
            originalDefaultType: d,
            originalDefaultedPostID: c,
            pageID: (a = n.pageID) != null ? a : null,
            postID: (i = n.postID) != null ? i : null,
            isIGMedia: (l = n.isIGMedia) != null ? l : null,
            recommendationSource:
              (s = n.recommendationSource) != null ? s : null,
            wasEverDefaulted: u,
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
