__d(
  "AdsExistingPostProductTagPreservationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r,
        o,
        a =
          ((r = e.creative) == null ? void 0 : r.object_story_id) != null ||
          ((o = e.creative) == null ? void 0 : o.source_instagram_media_id) !=
            null;
      return !t && a && n == null;
    }
    i.shouldPreserveExistingPostFromProductTagging = e;
  },
  66,
);
