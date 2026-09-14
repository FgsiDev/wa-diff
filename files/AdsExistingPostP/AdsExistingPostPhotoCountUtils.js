__d(
  "AdsExistingPostPhotoCountUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n, r;
      if (t != null)
        return t.filter(function (e) {
          return e.type === "photo";
        }).length;
      var o =
        (n =
          e == null || (r = e[0]) == null || (r = r.subattachments) == null
            ? void 0
            : r.data) != null
          ? n
          : [];
      return o.filter(function (e) {
        var t;
        return (
          ((t = e.media) == null || (t = t.image) == null ? void 0 : t.src) !=
          null
        );
      }).length;
    }
    i.countExistingPostPhotos = e;
  },
  66,
);
