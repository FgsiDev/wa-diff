__d(
  "RecommendedDestinationsUtils",
  ["AdsChildAttachmentsUtils", "AdsImageIDClasses", "filterNulls", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getValues(),
        n = r("immutable").Set(
          r("filterNulls")(
            t
              .map(function (e) {
                var t,
                  n,
                  r = e.facebookStorefront,
                  o = e.instagramStorefront;
                return [
                  r == null || (t = r.commerce_merchant_settings) == null
                    ? void 0
                    : t.id,
                  o == null || (n = o.commerce_merchant_settings) == null
                    ? void 0
                    : n.id,
                ];
              })
              .flat(),
          ),
        ),
        o = r("immutable").Set(
          r("filterNulls")(
            t
              .map(function (e) {
                var t = e.facebookStorefront,
                  n = e.instagramStorefront;
                return [t == null ? void 0 : t.id, n == null ? void 0 : n.id];
              })
              .flat(),
          ),
        );
      return { storefrontIDs: o, uniqueCMSIDs: n };
    }
    function s(e) {
      var t = null,
        n = o("AdsImageIDClasses").AdsImageID.fromExternalURL(e);
      return (
        n &&
          n instanceof o("AdsImageIDClasses").AdsExternalImageID &&
          (t = n.getFacebookID()),
        t
      );
    }
    function u(e) {
      var t = o("AdsChildAttachmentsUtils").getChildAttachments(e);
      if (t == null || t.length === 0)
        return { imageHash: null, link: null, pictureID: null, videoID: null };
      var n = t.filter(function (e) {
        return e.image_hash !== "EMPTY_CHILD_ATTACHMENTS_PLACEHOLDER";
      });
      if (n.length === 0)
        return {
          imageHash: null,
          link: t[0].link,
          pictureID: null,
          videoID: null,
        };
      var r = n[0],
        a = null,
        i = null,
        l = null;
      return (
        r.image_hash != null && (l = r.image_hash),
        r.video_id != null
          ? ((a = r.video_id), (i = null))
          : r.picture != null && (i = s(r.picture)),
        { imageHash: l, link: r.link, pictureID: i, videoID: a }
      );
    }
    ((l.getStorefrontAndCMSIDs = e),
      (l.getPictureFBIDFromCDNURL = s),
      (l.extractFirstChildAssetData = u));
  },
  98,
);
