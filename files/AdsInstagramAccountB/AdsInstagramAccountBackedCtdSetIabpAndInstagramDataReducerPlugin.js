__d(
  "AdsInstagramAccountBackedCtdSetIabpAndInstagramDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsObjectStorySpecUtils",
    "adsAdgroupDraftFragmentCreateReducer",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = o("AdsObjectStorySpecUtils").isUsingObjectStorySpec(a),
        l = a;
      return (
        i &&
          ((l = o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.delete(
            l,
          )),
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.page_id.delete(l))),
        (l = o(
          "AdsInstagramUserIdMigrationUtils",
        ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
          t,
          n,
          l,
        )),
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.page_id.set(e, l)),
        (l = o(
          "AdsInstagramUserIdMigrationUtils",
        ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(t, n, l)),
        l
      );
    }
    var s = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (t, n) {
            var a = n.adgroupIDs;
            if (
              a != null &&
              (r("gkx")("15865")
                ? n.instagramUserID != null
                : n.instagramActorID != null) &&
              n.iabpID != null
            ) {
              var i = n.instagramActorID,
                l = n.instagramUserID,
                s = n.iabpID;
              return o("AdsMutators").mutateEach(t, a, function (t) {
                return e(s, i, l, t);
              });
            }
            return t;
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
