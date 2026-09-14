__d(
  "AdsPartnershipAdsPlacementsMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsPagePostIDUtils",
    "AdsPartnershipAdsPlacementsEligibility",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = (t = e.creative) == null ? void 0 : t.source_instagram_media_id;
      if (r != null) return { post_id: String(r), source: "instagram" };
      var a = (n = e.creative) == null ? void 0 : n.object_story_id;
      if (a != null) {
        var i = o("AdsPagePostIDUtils").getPostIdFromPagePostId_BROKEN(
          String(a),
        );
        return i == null ? null : { post_id: i, source: "facebook" };
      }
      return null;
    }
    function s(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.posts.get(e);
    }
    function u(e, t) {
      var n = s(e);
      if (n == null || n.size !== 1) return !1;
      var r = n.get(0);
      return (
        (r == null ? void 0 : r.get("post_id")) === t.post_id &&
        (r == null ? void 0 : r.get("source")) === t.source
      );
    }
    function c(e) {
      var t = e.creative;
      return o(
        "AdsPartnershipAdsPlacementsEligibility",
      ).isEligibleForPartnershipAdsOrganicPlacements(
        t != null
          ? {
              branded_content_boosting_type: t.branded_content_boosting_type,
              object_story_id: t.object_story_id,
              object_story_spec: t.object_story_spec,
              source_instagram_media_id: t.source_instagram_media_id,
            }
          : null,
        "silent",
      );
    }
    function d(e, t) {
      var n, o;
      if (
        ((n = e.creative) == null ? void 0 : n.branded_content_boosting_type) ==
          null &&
        ((o = t.creative) == null ? void 0 : o.branded_content_boosting_type) ==
          null
      )
        return t;
      var a = s(t);
      return a == null || a.size === 0
        ? t
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.posts.delete(t);
    }
    function m(t, n) {
      if (!c(n)) {
        if (!c(t)) return n;
        var o = s(n);
        return o == null || o.size === 0
          ? n
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.media_sourcing_spec.posts.delete(n);
      }
      var a = e(n);
      return a == null || u(n, a)
        ? n
        : r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.posts.set(
            r("immutable").List([
              r("immutable").Map({ post_id: a.post_id, source: a.source }),
            ]),
            n,
          );
    }
    ((l.clearPartnershipAdsOrganicPostsOnIdentityChange = d),
      (l.maySyncPartnershipAdsOrganicPosts = m));
  },
  98,
);
