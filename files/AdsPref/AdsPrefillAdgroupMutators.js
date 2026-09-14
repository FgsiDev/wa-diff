__d(
  "AdsPrefillAdgroupMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupMediaMutators",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsUnifiedCreativeAPIFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l = e,
        u = o("AdsAPIAdgroupRecordUtils").getSingleMediaType(e);
      return (
        u === "IMAGE"
          ? (e = o("AdsAdgroupMediaMutators").removeImage(e))
          : u === "CAROUSEL" &&
            i.some(function (e) {
              return (
                e.name ===
                r("AdsUnifiedCreativeAPIFields").childAttachments.name
              );
            }) &&
            (l = d(l, t, n, a)),
        i.forEach(function (e, r) {
          l = s(l, t, n, a, e);
        }),
        u === "IMAGE" && (l = m(l, t)),
        l
      );
    }
    function s(e, t, n, r, o) {
      var a = o.getPath(e, t),
        i = o.getValue(n, r);
      return a && i ? e.setIn(a, i) : e;
    }
    function u(e, t, n) {
      return t != null && t.get(n) ? e.set(n, t.get(n)) : e;
    }
    function c(e, t) {
      if (e && t) {
        for (var n = e, r = Math.min(e.size, t.size), o = 0; o < r; o += 1) {
          var a = n.get(o),
            i = t.get(o);
          a == null ||
            i == null ||
            (i.get("video_id")
              ? ((a = a
                  .delete("image_crops")
                  .delete("image_hash")
                  .delete("picture")),
                (a = u(a, i, "video_id")))
              : ((a = a
                  .delete("picture")
                  .delete("image_hash")
                  .delete("video_id")),
                (a = u(a, i, "image_crops")),
                (a = u(a, i, "image_hash"))),
            (a = u(a, i, "picture")),
            (n = n.set(o, a)));
        }
        e = n;
      }
      return e;
    }
    function d(e, t, n, o) {
      var a = r("AdsAdgroupSemanticFields").childAttachments.get(t, e),
        i = r("AdsAdgroupSemanticFields").childAttachments.get(o, n);
      return (
        (a = c(a, i)),
        r("AdsAdgroupSemanticFields").childAttachments.set(t, e, a)
      );
    }
    function m(e, t) {
      var n = r("AdsAdgroupSemanticFields").imageHash.get(t, e);
      n = o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
        n,
        "hash",
      );
      var a = r("AdsAdgroupSemanticFields").imageURL.get(t, e),
        i = o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
          a,
          "url",
        );
      return (
        n && i && (e = r("AdsAdgroupSemanticFields").imageURL.delete(t, e)),
        e
      );
    }
    l.mutateAdgroupToPrefill = e;
  },
  98,
);
