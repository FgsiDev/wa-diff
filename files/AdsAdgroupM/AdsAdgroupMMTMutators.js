__d(
  "AdsAdgroupMMTMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t
        ? o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .multi_media_transformation_type.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.multi_media_transformation_type.set(
              "ADSET_IMAGES_TO_VIDEO",
            ),
          )(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.multi_media_transformation_type.delete(
            e,
          );
    }
    l.adsMMTImageToVideoMutationSetDoFSpec = e;
  },
  98,
);
