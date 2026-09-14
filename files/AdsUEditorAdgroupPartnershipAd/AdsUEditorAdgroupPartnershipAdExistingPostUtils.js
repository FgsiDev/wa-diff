__d(
  "AdsUEditorAdgroupPartnershipAdExistingPostUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.creative,
        n = (t == null ? void 0 : t.source_instagram_media_id) != null,
        r =
          (t == null ? void 0 : t.object_story_id) != null &&
          (t == null ? void 0 : t.object_story_spec) == null;
      return n || r;
    }
    i.isExistingPostSelected = e;
  },
  66,
);
