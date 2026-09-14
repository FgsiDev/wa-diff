__d(
  "AdsAdgroupDraftFragmentHelpers",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSpecUtils",
    "AdsMutators",
    "AdsPEAdgroupLiveSelectors",
    "AdsPagePostUtils",
    "AdsUEditorAdgroupImageMutators",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o = t.id;
      if (!e.has(o) || !((n = e.get(o)) != null && n.hasValue())) return !1;
      var a = (r = e.get(o)) == null ? void 0 : r.getValue();
      if (!a) return !1;
      var i = a.creative,
        l = t.creative;
      return i !== l;
    }
    function s(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.object_story_id;
      return r("isFalsey")(n)
        ? e
        : r("AdsAdgroupRecordAccessors").creative.object_story_id.set(null, e);
    }
    function u(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.object_id;
      return r("isFalsey")(n)
        ? e
        : r("AdsAdgroupRecordAccessors").creative.object_id.set(null, e);
    }
    function c(e, t) {
      var n,
        a = (n = e.creative) == null ? void 0 : n.object_story_id,
        i = o("AdsAdgroupSpecUtils").getInstagramStoryID(e),
        l = o("AdsAdgroupSpecUtils").getSourceInstagramMediaID(e);
      if (t)
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.instagram_story_id.delete,
          r("AdsAdgroupRecordAccessors").creative.source_instagram_media_id
            .delete,
        )(e);
      if (i || l) {
        var s,
          u,
          c = r("AdsAdgroupRecordAccessors").creative.object_story_id.delete(e);
        l
          ? (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.instagram_story_id.delete(c))
          : (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.source_instagram_media_id.delete(c));
        var d = (s = e.creative) == null ? void 0 : s.object_id,
          m =
            (u = e.creative) == null || (u = u.object_story_spec) == null
              ? void 0
              : u.page_id;
        return (
          (d == null || d === "") &&
            (m == null || m === "") &&
            (c = r("AdsAdgroupRecordAccessors").creative.object_id.set(
              o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(a),
              c,
            )),
          c
        );
      }
      return e;
    }
    function d(e, t) {
      return o("AdsMutators").mutateEach(t, t.keys(), function (t) {
        var n,
          a,
          i = t.id;
        if (!e.has(i) || !((n = e.get(i)) != null && n.hasValue())) return t;
        var l =
            (a = e.get(i)) == null || (a = a.getValue()) == null
              ? void 0
              : a.view_tags,
          s = t.view_tags;
        if (l === s) return t;
        if (s == null) {
          var u = o("AdsPEAdgroupLiveSelectors")
              .getCachedByFieldsSelector()(i, { view_tags: null })
              .getValue(),
            c;
          (u && (c = u.view_tags),
            (t = Array.isArray(c)
              ? r("AdsAdgroupRecordAccessors").view_tags.set(
                  r("immutable").List(),
                  t,
                )
              : r("AdsAdgroupRecordAccessors").view_tags.delete(t)));
        }
        return t;
      });
    }
    function m(t, n) {
      return t === n
        ? n
        : o("AdsMutators").mutateEach(n, n.keys(), function (n) {
            return e(t, n)
              ? o("AdsUEditorAdgroupImageMutators").removeRedundantImageURL(n)
              : n;
          });
    }
    function p(t, n) {
      return o("AdsMutators").mutateEach(n, n.keys(), function (n) {
        var r;
        if (!e(t, n)) return n;
        var a = !!(
          (r = n.creative) != null &&
          (r = r.object_story_spec) != null &&
          r.page_id
        );
        if (((n = c(n, a)), !a)) return n;
        var i = n.id,
          l = o("AdsPEAdgroupLiveSelectors")
            .getCachedByFieldsSelector()(i, { status: null })
            .getValue();
        return (
          (n.status === "ARCHIVED" && l && l.status === "ARCHIVED") ||
            ((n = s(n)), (n = u(n))),
          n
        );
      });
    }
    function _(t, n) {
      return o("AdsMutators").mutateEach(n, n.keys(), function (n) {
        var o;
        if (!e(t, n)) return n;
        var a = (o = n.creative) == null ? void 0 : o.asset_feed_id;
        return a
          ? r("AdsAdgroupRecordAccessors").creative.asset_feed_id.set(null, n)
          : n;
      });
    }
    function f(t, n) {
      return o("AdsMutators").mutateEach(n, n.keys(), function (n) {
        var o;
        if (!e(t, n)) return n;
        var a = (o = n.creative) == null ? void 0 : o.creative_id;
        return a
          ? r("AdsAdgroupRecordAccessors").creative.creative_id.delete(n)
          : n;
      });
    }
    function g(e, t) {
      return (
        (t = p(e, t)),
        (t = m(e, t)),
        (t = d(e, t)),
        (t = _(e, t)),
        (t = f(e, t)),
        t
      );
    }
    ((l.removeObjectStoryID = s),
      (l.removeObjectID = u),
      (l.removeInstagramStoryIDOrObjectStoryID = c),
      (l.setViewTagsDefaultValueIfEmpty = d),
      (l.removeRedundantImageURL = m),
      (l.removeRedundantObjectStorySpecFields = p),
      (l.removeRedundantAssetFeedSpecFields = _),
      (l.removeStaleCreativeID = f),
      (l.removeAdgroupRedundantFields = g));
  },
  98,
);
