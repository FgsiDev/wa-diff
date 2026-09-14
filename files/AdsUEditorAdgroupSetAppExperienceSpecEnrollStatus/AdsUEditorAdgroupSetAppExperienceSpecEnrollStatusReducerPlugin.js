__d(
  "AdsUEditorAdgroupSetAppExperienceSpecEnrollStatusReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAppExperienceSpecEnrollStatusActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r(
                "AdsAdgroupRecordAccessors",
              ).creative.app_experience_spec.website_summary.selling_points.enroll_status.set(
                t.enrollStatus,
                e,
              );
              if (
                ((n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.app_experience_spec.website_summary.selling_points.action_metadata.type.set(
                  "MANUAL",
                  n,
                )),
                t.enrollStatus === "OPT_IN")
              ) {
                var o,
                  a,
                  i =
                    (o = n.creative) == null ||
                    (o = o.creative_sourcing_spec) == null ||
                    (o = o.website_summary_spec) == null
                      ? void 0
                      : o.enroll_status;
                i !== "OPT_IN" &&
                  ((n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_summary_spec.enroll_status.set(
                    "OPT_IN",
                  )(n)),
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_summary_spec.action_metadata.type.set(
                    "MANUAL",
                  )(n)));
                var l =
                  (a = n.creative) == null ||
                  (a = a.creative_sourcing_spec) == null ||
                  (a = a.website_summary_spec) == null
                    ? void 0
                    : a.subfeatures;
                if (l != null) {
                  var s,
                    u = l.findIndex(function (e) {
                      return e.get("feature_name") === "selling_points";
                    });
                  if (u === -1) {
                    var c = r("immutable").fromJS({
                      feature_name: "selling_points",
                      enroll_status: t.enrollStatus,
                      action_metadata: { type: "MANUAL" },
                    });
                    n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.set(
                      l.push(c),
                    )(n);
                  } else if (
                    ((s = l.get(u)) == null
                      ? void 0
                      : s.get("enroll_status")) !== "OPT_IN"
                  ) {
                    var d = r("immutable").fromJS({
                      feature_name: "selling_points",
                      enroll_status: t.enrollStatus,
                      action_metadata: { type: "MANUAL" },
                    });
                    n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.set(
                      l.set(u, d),
                    )(n);
                  }
                } else {
                  var m = r("immutable").fromJS([
                    {
                      feature_name: "selling_points",
                      enroll_status: t.enrollStatus,
                      action_metadata: { type: "MANUAL" },
                    },
                  ]);
                  n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.set(
                    m,
                  )(n);
                }
              }
              return n;
            });
          },
          o("AdsUEditorAdgroupSetAppExperienceSpecEnrollStatusActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
