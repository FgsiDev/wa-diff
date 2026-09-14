__d(
  "AdsUEditorAdgroupMessageMarketingMediaMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "ApiAdObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
          .delete,
        r("AdsAdgroupRecordAccessors").creative.object_type.set(
          r("ApiAdObjectTypes").SHARE,
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.link.set("example.com"),
      )(e);
    }
    function s(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
          .image_hash.delete,
      )(e);
    }
    ((l.deleteVideoFromCreativeSpec = e), (l.deleteImageFromCreativeSpec = s));
  },
  98,
);
