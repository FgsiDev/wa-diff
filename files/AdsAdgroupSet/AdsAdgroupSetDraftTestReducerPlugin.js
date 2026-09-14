__d(
  "AdsAdgroupSetDraftTestReducerPlugin",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsLeadGenFormRedesignExperiment",
    "AdsMutators",
    "adsAdgroupDraftFragmentCreateReducer",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (e, t) {
            var n = -1;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var o = e;
              if (t.studyID == null)
                return (
                  (o = r(
                    "AdsAdgroupRecordAccessors",
                  ).include_in_ad_study_id.delete(o)),
                  (o = r(
                    "AdsAdgroupRecordAccessors",
                  ).include_in_ad_study_cell_id.delete(o)),
                  (o = r(
                    "AdsAdgroupRecordAccessors",
                  ).lightweight_split_test.delete(o)),
                  o
                );
              (n++,
                (o = r("AdsAdgroupRecordAccessors").include_in_ad_study_id.set(
                  t.studyID,
                  o,
                )),
                (t.studyCellIDs != null && n < t.studyCellIDs.length) ||
                  s(0, 92645));
              var a = t.studyCellIDs == null ? null : t.studyCellIDs[n];
              if (
                ((o = r(
                  "AdsAdgroupRecordAccessors",
                ).include_in_ad_study_cell_id.set(a, o)),
                t.leadGenFormID != null &&
                  r("AdsLeadGenFormRedesignExperiment").canSeeABTestingForms)
              ) {
                var i, l;
                ((o = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.call_to_action.value.lead_gen_form_id.set(
                  t.leadGenFormID,
                  o,
                )),
                  ((i = o.creative) == null ||
                  (i = i.object_story_spec) == null ||
                  (i = i.video_data) == null ||
                  (i = i.call_to_action) == null
                    ? void 0
                    : i.value) != null &&
                    (o = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.video_data.call_to_action.value.lead_gen_form_id.set(
                      t.leadGenFormID,
                      o,
                    )),
                  ((l = o.creative) == null || (l = l.call_to_action) == null
                    ? void 0
                    : l.value) != null &&
                    (o = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.call_to_action.value.lead_gen_form_id.set(
                      t.leadGenFormID,
                      o,
                    )));
              }
              return o;
            });
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
