__d(
  "AdsInstagramReelsAdPreviewPropsUtils",
  ["isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = e.callToActionData,
        o = e.identityData,
        a = e.mediaData,
        i = e.textData,
        l = r.callToActionDataCells[0],
        s = (t = a.mediaDataCells[0]) != null ? t : {},
        u = s.imageMediaData,
        c = s.videoMediaData;
      return {
        cta: l == null ? void 0 : l.cta,
        imageUrl: u == null ? void 0 : u.imageURL,
        isLoopVideo: (n = c == null ? void 0 : c.isLoopVideo) != null ? n : !1,
        primaryText: i.primaryText,
        profilePictureUrl: o.profilePictureUrl,
        username: o.profileName,
        videoUrl: c == null ? void 0 : c.videoURL,
      };
    }
    function s(e) {
      var t = e[0];
      return { cta: t == null ? void 0 : t.cta };
    }
    function u(e, t, n) {
      return (
        e == null &&
        t.adType === "single_media" &&
        n.mediaDataCells.length !== 0 &&
        n.mediaDataCells[0].videoMediaData != null
      );
    }
    function c(e, t, n) {
      return (
        e == null &&
        t.adType === "single_media" &&
        n.mediaDataCells.length !== 0 &&
        n.mediaDataCells[0].imageMediaData != null &&
        n.mediaDataCells[0].videoMediaData == null
      );
    }
    function d(e) {
      return s(e.callToActionDataCells).cta != null;
    }
    function m(e, t, n, o, a, i) {
      i === void 0 && (i = !1);
      var l = a.authorizationDisclaimer,
        s = n.disclaimerCTAData,
        m = n.secondaryDisclaimer,
        p = r("isFalsey")(l) ? (r("isFalsey")(s) ? m : s) : l,
        _ = !r("isFalsey")(p);
      return (u(o, e, t) || (c(o, e, t) && i)) && d(n) && !_;
    }
    function p(e) {
      return d(e);
    }
    function _(e) {
      return e === "dynamic_ad" || e === "dynamic_ad_9_16";
    }
    ((l.renderPropsToAdPreviewProps = e),
      (l.getCTAProps = s),
      (l.isSingleImageAd = c),
      (l.isCTAPositionAnimationEnabled = m),
      (l.isSandwichToastCTAEnabled = p),
      (l.isDPAFormatPreviewEnabled = _));
  },
  98,
);
