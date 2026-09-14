__d(
  "AdsExistingPostGenAIPostSwitchMutators",
  ["AdsPagePostUtils", "GenAISpecDeleter", "GenAISpecReader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r;
      return (t = (n = e.creative) == null ? void 0 : n.object_story_id) != null
        ? t
        : (r = e.creative) == null
          ? void 0
          : r.source_instagram_media_id;
    }
    function s(e, t) {
      var n = o("AdsPagePostUtils").maybeGetPostIdFromPagePostId(e),
        r = o("AdsPagePostUtils").maybeGetPostIdFromPagePostId(t);
      return n != null && r != null && n === r;
    }
    function u(e, t, n) {
      var r,
        a,
        i =
          o("GenAISpecReader").isGenAIImagesOptedIn(e) ||
          ((r =
            (a = o("GenAISpecReader").getAdoptedImageHashes(e)) == null
              ? void 0
              : a.length) != null
            ? r
            : 0) > 0;
      return t == null || n == null || s(t, n) || !i
        ? e
        : o("GenAISpecDeleter").removeAdoptedVariants(e, {
            assetType: "images",
          });
    }
    ((l.getGenAIExistingPostID = e),
      (l.areExistingPostIDsEqual = s),
      (l.discardAdoptedGenAIImagesOnPostChange = u));
  },
  98,
);
