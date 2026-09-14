__d(
  "AdsAdgroupScheduledLiveVideoSetDefaultMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        s = e;
      return (
        (s = o("AdsMutators").chain(
          (l = r("AdsAdgroupRecordAccessors")).creative.media_type.set(
            "SCHEDULED_LIVE_VIDEO",
          ),
          l.creative.object_type.set(r("ApiAdObjectTypes").VIDEO),
          l.creative.object_story_spec.delete,
          l.creative.object_story_spec.video_data.delete,
          l.creative.object_story_spec.page_id.set(t),
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
            n,
            a,
          ),
          l.creative.object_story_spec.video_data.page_welcome_message.set(i),
        )(s)),
        s
      );
    }
    l.setDefaultFieldForScheduledLiveVideoAdToSpec = e;
  },
  98,
);
