__d(
  "AdsInstagramPreviewCommonUtils",
  [
    "fbt",
    "AdsInstagramMediaSpecs",
    "AdsInstagramStoryPreviewConstants",
    "Locale",
    "UnicodeBidi",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 565,
      u = 318,
      c = 66,
      d = 162,
      m = 0.3,
      p = 0.01,
      _ = 3e3,
      f = "";
    function g(e) {
      var t = o("UnicodeBidi").isDirectionRTL(e),
        n = o("Locale").isRTL(),
        r = "";
      return (t && !n ? (r = "rtl") : !t && n && (r = "ltr"), r);
    }
    function h(e, t, n) {
      var r = y(e, t);
      if (r == null)
        return o("AdsInstagramStoryPreviewConstants")
          .IG_STORY_DEFAULT_FONT_SIZE;
      var a = n != null ? e.replace(" ", "").length * n : 0,
        i = r.width;
      return i + a;
    }
    function y(e, t) {
      var n,
        r = (h.canvas = document.createElement("canvas")),
        o = r.getContext("2d");
      if (o == null) return null;
      o.font = t;
      var a = (n = o.measureText(e)) != null ? n : {},
        i = a.actualBoundingBoxAscent + a.actualBoundingBoxDescent;
      return { height: i, width: a.width };
    }
    function C(e, t) {
      var n = y(e, t);
      return n == null ? 0 : n.height;
    }
    function b(e) {
      var t,
        n = e.mediaDataCollection,
        r = e.adFormat === "single_media" ? [e.mediaCard] : e.mediaCards,
        o = e.adFormat === "single_media" ? void 0 : e.carouselDeliveryMode;
      return {
        version: "v2",
        commonData: {
          adType: e.adFormat,
          apiAdFormat: "INSTAGRAM_STORY",
          storyPreviewType: e.storyPreviewType,
        },
        identityData: {
          profileName: e.username,
          profilePictureUrl: e.profilePicUrl,
          brandedContentSponsorName: e.brandedContentSponsorName,
        },
        textData: {
          primaryText: (t = e.caption) != null ? t : "",
          headlines: n.map(function (e) {
            var t;
            return (t = e.headline) != null ? t : "";
          }),
          isAutotranslated:
            e.adFormat === "single_media" ? e.isAutotranslated : void 0,
          descriptions: n.map(function (e) {
            var t;
            return (t = e.description) != null ? t : "";
          }),
          authorizationDisclaimer: e.authorizationDisclaimer,
          portalData: r.map(function (e) {
            return e.portalInfo;
          }),
        },
        mediaData: {
          mediaDataCells: n.map(function (e, t) {
            var n;
            return {
              imageMediaData: {
                imageURL: e.image_url,
                height: void 0,
                width: void 0,
                cropType: (n = r[t].cropType) != null ? n : void 0,
              },
              videoMediaData: {
                videoID: e.video_id,
                videoURL: e.video_url,
                videoSubtitleURL: e.video_subtitle_url,
                videoSubtitleOffset: e.video_subtitle_offset,
                isLongVideo: e.is_long_video,
                isLoopVideo: e.loop_video,
                height: void 0,
                width: void 0,
              },
              interactiveComponents: r[t].interactiveComponents,
              overlay: r[t].overlay,
            };
          }),
        },
        callToActionData: {
          callToActionDataCells: r.map(function (e) {
            var t;
            return {
              cta: e.cta,
              callToActionType: e.ctaType,
              callToActionAppDestination:
                (t = e.ctaAppDestination) != null ? t : void 0,
            };
          }),
          disclaimerCTAData: null,
          secondaryDisclaimer: null,
        },
        customizationData: {
          carouselDeliveryMode: o,
          dynamicStoryCaptionInfo: e.dynamicStoryCaptionInfos,
        },
        error_message: void 0,
      };
    }
    function v() {
      return s._(/*BTDS*/ "Instagram Mobile Feed");
    }
    function S() {
      return s._(/*BTDS*/ "Instagram Mobile Stories");
    }
    function R(e) {
      if (e != null && e.length > 0 && e[0] != null) {
        var t,
          n =
            (t = e[0].displayAspectRatio) != null
              ? t
              : e[0].displayHeight > 0
                ? e[0].displayWidth / e[0].displayHeight
                : null;
        if (
          n != null &&
          n > 1 + r("AdsInstagramMediaSpecs").ASPECT_RATIO_TOLERANCE
        )
          return 60;
      }
      return 20;
    }
    function L(t, n, r, o) {
      var a,
        i = t.portalData;
      if (o === !0) return R(i);
      if (
        i == null ||
        i[0] == null ||
        (i[0].displayAspectRatio == null && i[0].displayWidth === 0) ||
        (r !== null && r === "saliency")
      )
        return 0;
      var l =
          (a = i[0].displayAspectRatio) != null
            ? a
            : i[0].displayWidth / i[0].displayHeight,
        s = u / l,
        c = (e - s) / 2,
        d = (n == null ? void 0 : n.adType) === "collection";
      return d ? E(l, c) : c;
    }
    function E(e, t) {
      var n = e >= 1 * (1 - p);
      return n ? t - m * u : t;
    }
    function k(t, n) {
      var r,
        o,
        a = t.mediaDataCells;
      if (n >= a.length) return 0;
      var i = a[n];
      if (i == null || (i.imageMediaData == null && i.videoMediaData == null))
        return 0;
      var l =
          (r = (o = i.videoMediaData) != null ? o : i.imageMediaData) != null
            ? r
            : {},
        s = l.aspectRatio,
        m = l.height,
        p = l.width;
      if (p == null || m == null || p === 0 || m === 0) return 0;
      var _ = s != null && s > 0 ? u / s : m * (u / p),
        f = e - c - d;
      return _ <= f ? c + (f - _) / 2 : Math.min((e - _) / 2, c);
    }
    function I(t, n) {
      var r = n / t,
        o = u / r;
      return (e - o) / 2;
    }
    function T(e, t) {
      var n,
        r,
        o = e.mediaDataCells,
        a = t != null ? t : 0;
      if (a >= o.length)
        return {
          imageUrl: null,
          imageCropType: null,
          videoUrl: null,
          videoCropType: null,
          thumbnailUrl: null,
          isLoopVideo: !1,
          videoID: null,
          videoHeight: null,
          videoWidth: null,
          videoAspectRatio: null,
        };
      var i = (n = o[a]) != null ? n : {},
        l = i.imageMediaData,
        s = i.videoMediaData;
      return {
        isLoopVideo: (r = s == null ? void 0 : s.isLoopVideo) != null ? r : !1,
        thumbnailUrl: s == null ? void 0 : s.thumbnailURL,
        videoUrl: s == null ? void 0 : s.videoURL,
        imageUrl: l == null ? void 0 : l.imageURL,
        imageCropType: l == null ? void 0 : l.cropType,
        videoCropType: s == null ? void 0 : s.cropType,
        videoID: s == null ? void 0 : s.videoID,
        videoHeight: s == null ? void 0 : s.height,
        videoWidth: s == null ? void 0 : s.width,
        videoAspectRatio: s == null ? void 0 : s.aspectRatio,
      };
    }
    function D(e, t, n) {
      var r = e + "px " + t;
      return (n != null && (r = n + " " + r), r);
    }
    function x(e, t, n, r) {
      for (var o = 0, a = e.length - 1; o <= a; ) {
        var i = Math.floor((o + a) / 2),
          l = e.slice(0, i + 1).join(f);
        h(l, t, n) <= r ? (o = i + 1) : (a = i - 1);
      }
      return o;
    }
    function $(e, t, n, r, o, a, i, l) {
      for (
        var s = [], u = D(t, n, i), c = [], d = 0, m = 0;
        d < e.length || c.length > 0;
      ) {
        if ((m++, m > _)) {
          var p = new Error(
            "something went wrong while rendering caption. please report this issue.",
          );
          throw (p.stack, p);
        }
        var g = void 0;
        if ((c.length > 0 ? (g = c) : (g = e[d]), g.length === 0)) {
          if (l === !0) {
            d++;
            continue;
          }
          (s.push(""), d++);
          continue;
        }
        var h = d === 0 && c.length === 0 && a != null ? o - a : o;
        if (h <= 0) break;
        var y = x(g, u, r, h);
        if (y === 0) {
          var C = x(Array.from(g[0]), u, r, h),
            b = g[0].slice(0, C);
          (s.push(b),
            C < g[0].length
              ? (c = [g[0].slice(C)].concat(g.slice(1, g.length)))
              : (c = g.slice(1, g.length)));
        } else {
          var v = g.slice(0, y).join(f);
          (s.push(v), (c = g.slice(y)));
        }
        c.length > 0 || d++;
      }
      return s;
    }
    ((l.AdsInstagramGetTextDirection = g),
      (l.getTextWidthForAdPreviewCaption = h),
      (l.getTextHeightForAdPreviewCaption = C),
      (l.convertOldToNewAdPreviewProps = b),
      (l.getIGFeedPreviewNaming = v),
      (l.getIGStoryPreviewNaming = S),
      (l.getMarginTopForAdPreviewMedia = L),
      (l.getMarginTopForAdPreviewCarouselMedia = k),
      (l.getMarginTopForSNAdPreviewMedia = I),
      (l.getMediaPropsForAdPreviewMedia = T),
      (l.getFontString = D),
      (l.getMaxWordIndexForWidth = x),
      (l.transformWordsListToInlineSentences = $));
  },
  226,
);
