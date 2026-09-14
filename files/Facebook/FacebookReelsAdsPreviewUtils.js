__d(
  "FacebookReelsAdsPreviewUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 565,
      s = 671,
      u = 318,
      c = 318,
      d = 60,
      m = 680;
    function p(e) {
      var t, n;
      return (
        e.styleRenderer === "multi_share_no_end_card" &&
        ((t = e.media) == null ? void 0 : t.mediaFormat) === "VIDEO" &&
        ((n = e.media) == null || (n = n.imageMediaData) == null
          ? void 0
          : n.hscrollCardId) !== null
      );
    }
    function _(t) {
      var n,
        r,
        o,
        a = t.media;
      if (
        a == null ||
        ((n = a.videoMediaData) == null ? void 0 : n.originalDimensions) ==
          null ||
        ((r = a.videoMediaData) == null
          ? void 0
          : r.originalDimensions.width) === 0
      )
        return 0;
      if (t.styleRenderer === "rich_media_collection") return d;
      var i = (o = a.videoMediaData) == null ? void 0 : o.originalDimensions,
        l = i.height,
        s = i.width,
        c = l * (u / s);
      return p(t) ? (e - c) / 4 : (e - c) / 2;
    }
    function f(e) {
      var t, n, r;
      return (
        e.styleRenderer === "multi_share_no_end_card" &&
        ((t = e.media) == null ? void 0 : t.mediaFormat) === "TEMPLATE_VIDEO" &&
        ((n = e.media) == null || (n = n.imageMediaData) == null
          ? void 0
          : n.hscrollCardId) !== null &&
        ((r = e.media) == null || (r = r.imageMediaData) == null
          ? void 0
          : r.hscrollCardId) !== void 0
      );
    }
    function g(e) {
      var t,
        n,
        r,
        o =
          (t = e[0]) == null || (t = t.attachmentDataList) == null
            ? void 0
            : t.filter(function (e) {
                var t,
                  n = (t = e.media) == null ? void 0 : t.imageMediaData;
                return (
                  n != null && n.imageURI != null && n.hscrollCardId != null
                );
              }),
        a = L((n = e[0]) == null ? void 0 : n.attachmentDataList),
        i = E((r = e[0]) == null ? void 0 : r.attachmentDataList);
      return !((o == null ? void 0 : o.length) === 0 || (a && !i));
    }
    function h(t) {
      var n,
        o,
        a,
        i =
          (n = (o = t[0]) == null ? void 0 : o.attachmentDataList[0]) != null
            ? n
            : null;
      if (
        i.styleRenderer === "rich_media_collection" &&
        ((a = i.media) == null ? void 0 : a.mediaFormat) !== "TEMPLATE_VIDEO"
      )
        return d;
      var l = y(i);
      if (f(i)) return e - m;
      if (
        i.styleRenderer === "multi_share_no_end_card" &&
        g(t) &&
        k(i) &&
        r("gkx")("16104")
      )
        return e - l;
      var s = (e - l) / 2;
      return i.styleRenderer === "multi_share_no_end_card" ? Math.min(0, s) : s;
    }
    function y(e) {
      if (e.media == null) return 0;
      if (e.media.mediaFormat === "TEMPLATE_VIDEO") return s;
      var t = v(e);
      return t.height * (u / t.width);
    }
    function C(e, t) {
      return e != null &&
        e.originalImageSize &&
        (e == null ? void 0 : e.originalImageSize[t]) != null
        ? e.originalImageSize[t]
        : 0;
    }
    function b(e) {
      var t = e == null ? void 0 : e.finalImageSize;
      return (t == null ? void 0 : t.width) != null &&
        (t == null ? void 0 : t.height) != null
        ? { width: t.width, height: t.height }
        : { width: C(e, "width"), height: C(e, "height") };
    }
    function v(e) {
      if (e.media == null) return { height: 0, width: 0 };
      if (e.styleRenderer === "rich_media_collection")
        return { width: u, height: c };
      var t = e.media.imageMediaData;
      return b(t);
    }
    function S(e) {
      return (
        e.styleRenderer === "multi_share_no_end_card" ||
        e.styleRenderer === "multi_share" ||
        e.styleRenderer === "multi_share_carousel_free_scroll" ||
        e.styleRenderer === "multi_share_carousel_free_scroll_snap_center"
      );
    }
    function R(e) {
      var t,
        n,
        r = (t = e.media) == null ? void 0 : t.videoMediaData,
        o = (n = e.media) == null ? void 0 : n.mediaFormat;
      return S(e)
        ? (r != null && r.videoID != null) || (o != null && o === "VIDEO")
        : !1;
    }
    function L(e) {
      var t = e[0],
        n = t == null ? void 0 : t.media;
      return n == null ? !1 : n.isVideoCarousel === !0;
    }
    function E(e) {
      var t = e.filter(function (e) {
        return R(e);
      });
      return t.length === 1 && t[0] === e[0];
    }
    function k(e) {
      var t,
        n = (t = e.media) == null ? void 0 : t.dynamicVideoMediaData;
      if (n == null || n.bitmaps == null) return !1;
      try {
        var r = n.bitmaps,
          o = Object.values(r);
        return o.every(function (e) {
          var t = new Image();
          if (
            ((t.src = e),
            t.complete && t.naturalWidth > 0 && t.naturalHeight > 0)
          )
            return t.naturalWidth === t.naturalHeight;
          var n = e.match(/[_\s]s(\d+)x(\d+)[_\s]/);
          if (n) {
            var r = parseInt(n[1], 10),
              o = parseInt(n[2], 10);
            return r === o;
          }
          return !1;
        });
      } catch (e) {
        return !1;
      }
    }
    ((l.FB_REELS_AD_PREVIEW_MEDIA_FRAME_HEIGHT = e),
      (l.FB_REELS_AD_PREVIEW_MEDIA_FRAME_WIDTH = u),
      (l.getMarginTopForAdPreviewVideo = _),
      (l.isHscrollEligible = g),
      (l.getMarginTopForAdPreviewImage = h),
      (l.getRenderHeightForAdPreviewImage = y),
      (l.getIsVideoCarousel = L),
      (l.getIsVideoIntroCardCarousel = E),
      (l.hasAllSquareImages = k));
  },
  98,
);
