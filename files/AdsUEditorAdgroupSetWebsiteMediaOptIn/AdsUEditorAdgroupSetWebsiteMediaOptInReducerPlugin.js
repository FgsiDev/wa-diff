__d(
  "AdsUEditorAdgroupSetWebsiteMediaOptInReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetWebsiteMediaOptInActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              if (t.websiteMediaOptIn) {
                var n,
                  a,
                  i =
                    (n = t.mediaData) != null
                      ? n
                      : (a = e.creative) == null ||
                          (a = a.creative_sourcing_spec) == null ||
                          (a = a.website_media_spec) == null
                        ? void 0
                        : a.media;
                if (i == null || i.isEmpty()) return e;
                var l = o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_media_spec.enroll_status.set(
                    "OPT_IN",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_media_spec.action_metadata.type.set(
                    "MANUAL",
                  ),
                )(e);
                return (
                  (l = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_media_spec.media.set(
                    i,
                  )(l)),
                  t.imageClusters != null &&
                    (l = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_media_spec.image_clusters.set(
                      t.imageClusters,
                    )(l)),
                  l
                );
              } else
                return o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_media_spec.enroll_status.set(
                    "OPT_OUT",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_media_spec.action_metadata.type.set(
                    "MANUAL",
                  ),
                  r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                    .website_media_spec.media.delete,
                )(e);
            });
          },
          r("AdsUEditorAdgroupSetWebsiteMediaOptInActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
