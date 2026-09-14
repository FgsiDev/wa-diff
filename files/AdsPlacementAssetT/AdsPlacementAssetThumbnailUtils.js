__d(
  "AdsPlacementAssetThumbnailUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return e.thumbnailUrl != null && e.thumbnailUrl != ""
        ? e.thumbnailUrl
        : (t = e.video.preferredThumbnail) == null
          ? void 0
          : t.uri;
    }
    function l(t) {
      var n = t.media,
        r = n == null ? void 0 : n.getValue();
      return r == null ? null : r.format === "video" ? e(r) : u(r);
    }
    function s(e) {
      var t = e.cards.find(function (e) {
        return e.media != null && e.media.hasValue();
      });
      return t != null ? l(t) : null;
    }
    function u(e) {
      var t;
      return (t = e.thumbnailURL) != null ? t : e.url;
    }
    function c(t) {
      if (t)
        switch (t.format) {
          case "image":
            return u(t);
          case "video":
            return e(t);
          case "carousel":
            return s(t);
        }
      return null;
    }
    ((i.getVideoThumbnail = e),
      (i.getCardThumbnail = l),
      (i.getCarouselThumbnail = s),
      (i.getImageThumbnail = u),
      (i.getMediaThumbnail = c));
  },
  66,
);
