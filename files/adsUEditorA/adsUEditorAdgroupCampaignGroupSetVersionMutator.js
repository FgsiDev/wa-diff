__d(
  "adsUEditorAdgroupCampaignGroupSetVersionMutator",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t == null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.catalog_feed_tag.delete(
            e,
          )
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.catalog_feed_tag.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.catalog_feed_tag.customizations.catalog_feed_tag_name.set(
              t,
            ),
          )(e);
    }
    l.default = e;
  },
  98,
);
