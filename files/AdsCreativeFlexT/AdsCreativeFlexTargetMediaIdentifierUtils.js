__d(
  "AdsCreativeFlexTargetMediaIdentifierUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPagePostUtils",
    "AdsRelatedMediaBulkEditUtils",
    "DAFlexibleFormatUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e;
      if (o("AdsPagePostUtils").isVideoPost(e)) {
        var r, a;
        return {
          photoId: null,
          targetMediaType: "VIDEO",
          videoId:
            (r = (a = n.object_id) != null ? a : n.fb_video_copy_id) != null
              ? r
              : null,
        };
      }
      return {
        photoId: (t = n.object_id) != null ? t : null,
        targetMediaType: "IMAGE",
        videoId: null,
      };
    }
    function s(t, n) {
      if (t == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
        return null;
      var r =
          o("AdsAPIAdgroupRecordUtils").getInstagramSourceMediaID(t) != null
            ? "IG"
            : "FB",
        a = n.length > 0 ? n[0] : null,
        i = a != null && a.hasValue() ? a.getValueEnforcing() : null;
      return i == null
        ? r + "_UNKNOWN"
        : r + (e(i).targetMediaType === "VIDEO" ? "_VIDEO" : "_IMAGE");
    }
    function u(e, t) {
      var n;
      if (e == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e))
        return null;
      var r = t.length > 0 ? t[0] : null,
        a = r != null && r.hasValue() ? r.getValueEnforcing() : null;
      if (a == null) return null;
      var i = a;
      return (n = i.type) != null ? n : null;
    }
    var c = {
      isLoading: !1,
      targetMediaIdentifier: null,
      targetMediaFbPostId: null,
      targetMediaIgPostId: null,
      targetMediaType: "IMAGE",
    };
    function d(t, n) {
      var r, a;
      if (t == null) return c;
      var i = n.length > 0 ? n[0] : null,
        l = i != null && i.hasValue() ? i.getValueEnforcing() : null,
        s = l != null ? e(l) : null,
        u = (r = s == null ? void 0 : s.targetMediaType) != null ? r : "IMAGE",
        d = o("AdsAPIAdgroupRecordUtils").getInstagramSourceMediaID(t);
      if (d != null)
        return {
          isLoading: !1,
          targetMediaIdentifier: d,
          targetMediaFbPostId: null,
          targetMediaIgPostId: d,
          targetMediaType: u,
        };
      var m =
        (a = o("AdsAPIAdgroupRecordUtils").getPagePostID(t)) != null ? a : null;
      return i != null && !i.isDone()
        ? {
            isLoading: !0,
            targetMediaIdentifier: null,
            targetMediaFbPostId: m,
            targetMediaIgPostId: null,
            targetMediaType: u,
          }
        : s == null
          ? {
              isLoading: !1,
              targetMediaIdentifier: null,
              targetMediaFbPostId: m,
              targetMediaIgPostId: null,
              targetMediaType: u,
            }
          : u === "VIDEO"
            ? {
                isLoading: !1,
                targetMediaIdentifier: s.videoId,
                targetMediaFbPostId: m,
                targetMediaIgPostId: null,
                targetMediaType: "VIDEO",
              }
            : {
                isLoading: !1,
                targetMediaIdentifier: s.photoId,
                targetMediaFbPostId: m,
                targetMediaIgPostId: null,
                targetMediaType: "IMAGE",
              };
    }
    function m(e) {
      var t;
      return e.isLoading
        ? null
        : (t = e.targetMediaIdentifier) != null
          ? t
          : e.targetMediaFbPostId;
    }
    function p(e, t) {
      return e && (t == null ? void 0 : t.format) === "image" && t.hash == null;
    }
    function _(e, t, n, r) {
      var a, i, l;
      if (r != null)
        return {
          isTargetMediaLoading: r.isLoading,
          targetMediaIdentifier: m(r),
          targetMediaType: r.targetMediaType,
        };
      var s =
        e != null &&
        o(
          "DAFlexibleFormatUtils",
        ).isAdgroupEligibleForDACarouselIntroCardRevamp(e) &&
        o("DAFlexibleFormatUtils").passFlexibleFormatAndRelatedMediaAdexGK(
          "silent",
        );
      if (
        s &&
        (e == null || (a = e.creative) == null ? void 0 : a.product_set_id) !=
          null
      )
        return {
          isTargetMediaLoading: !1,
          targetMediaIdentifier: e.creative.product_set_id,
          targetMediaType: "PRODUCT_SET",
        };
      if (
        o(
          "AdsPCAUnifiedFormatEligibilityUtils",
        ).isDARelatedMediaEnabledForPCAUnifiedL1() &&
        (e == null || (i = e.metadata) == null
          ? void 0
          : i.is_pca_unified_format_ad) === !0 &&
        (e == null ||
        (l = e.creative) == null ||
        (l = l.creative_sourcing_spec) == null
          ? void 0
          : l.associated_product_set_id) != null
      )
        return {
          isTargetMediaLoading: !1,
          targetMediaIdentifier:
            e.creative.creative_sourcing_spec.associated_product_set_id,
          targetMediaType: "PRODUCT_SET",
        };
      if (t != null && t !== "")
        return {
          isTargetMediaLoading: !1,
          targetMediaIdentifier: t,
          targetMediaType: n,
        };
      var u =
        e != null
          ? o("AdsRelatedMediaBulkEditUtils").computeTargetMediaIdentifier(e)
          : null;
      if (u != null) {
        var c = n;
        if (e != null) {
          var d,
            p,
            _,
            f =
              (d = e.creative) == null ||
              (d = d.object_story_spec) == null ||
              (d = d.video_data) == null
                ? void 0
                : d.video_id,
            g =
              (p = e.creative) == null || (p = p.asset_feed_spec) == null
                ? void 0
                : p.videos;
          (u === f ||
            (g != null &&
              g.length > 0 &&
              u === ((_ = g[0]) == null ? void 0 : _.video_id))) &&
            (c = "VIDEO");
        }
        return {
          isTargetMediaLoading: !1,
          targetMediaIdentifier: u,
          targetMediaType: c,
        };
      }
      return {
        isTargetMediaLoading: !1,
        targetMediaIdentifier: null,
        targetMediaType: n,
      };
    }
    ((l.describeExistingPostMedia = e),
      (l.getExistingPostType = s),
      (l.getExistingPostObjectType = u),
      (l.resolveExistingPostTargetMedia = d),
      (l.existingPostAnchor = m),
      (l.isSynthesizedExistingPostImageAsset = p),
      (l.computeTargetMediaIdentifierAndType = _));
  },
  98,
);
