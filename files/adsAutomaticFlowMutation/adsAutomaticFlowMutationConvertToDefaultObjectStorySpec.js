__d(
  "adsAutomaticFlowMutationConvertToDefaultObjectStorySpec",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsInstagramActorIDUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "ApiAdObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsInstagramActorIDUtils").getInstagramActorID(e),
        a = o("AdsInstagramActorIDUtils").getInstagramUserID(e),
        i =
          o("AdsAPIAdgroupRecordUtils").getPageID(e, t) ||
          o("AdsAPIAdgroupRecordUtils").getPagePostID(e);
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.delete,
        r("AdsAdgroupRecordAccessors").creative.object_type.set(
          r("ApiAdObjectTypes").SHARE,
        ),
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
          i,
        ),
        o(
          "AdsInstagramUserIdMigrationUtils",
        ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
          n,
          a,
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.type.set(
          r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
        ),
        r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
          "not_carousel",
        ),
      )(e);
    }
    l.default = e;
  },
  98,
);
