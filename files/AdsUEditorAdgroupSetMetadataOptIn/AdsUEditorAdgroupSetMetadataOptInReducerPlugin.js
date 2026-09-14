__d(
  "AdsUEditorAdgroupSetMetadataOptInReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMetadataOptInActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.appInfoOptIn ? "OPT_IN" : "OPT_OUT";
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t;
              return o("AdsMutators").chain(
                (t = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.creative_sourcing_spec.app_info_spec.enroll_status.set(
                  n,
                ),
                t.creative.creative_sourcing_spec.app_info_spec.action_metadata.type.set(
                  "MANUAL",
                ),
                t.creative.creative_sourcing_spec.app_info_spec.app_information.enroll_status.set(
                  n,
                ),
                t.creative.creative_sourcing_spec.app_info_spec.media.enroll_status.set(
                  n,
                ),
                t.creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.enroll_status.set(
                  n,
                ),
              )(e);
            });
          },
          r("AdsUEditorAdgroupSetMetadataOptInActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
