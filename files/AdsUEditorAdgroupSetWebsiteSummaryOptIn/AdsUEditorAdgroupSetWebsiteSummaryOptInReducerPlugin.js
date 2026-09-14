__d(
  "AdsUEditorAdgroupSetWebsiteSummaryOptInReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetWebsiteSummaryOptInActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.websiteSummaryOptIn ? "OPT_IN" : "OPT_OUT";
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var o = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.enroll_status.set(
                n,
              )(e);
              if (
                ((o = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.action_metadata.type.set(
                  "MANUAL",
                )(o)),
                t.websiteSummaryOptIn)
              ) {
                var a = r("immutable").List([
                  r("immutable").Map({
                    enroll_status: "OPT_IN",
                    action_metadata: { type: "MANUAL" },
                    feature_name: "selling_points",
                  }),
                  r("immutable").Map({
                    enroll_status: "OPT_IN",
                    action_metadata: { type: "MANUAL" },
                    feature_name: "reviews",
                  }),
                ]);
                o = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.set(
                  a,
                )(o);
              } else
                o = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.delete(
                  o,
                );
              return o;
            });
          },
          r("AdsUEditorAdgroupSetWebsiteSummaryOptInActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
