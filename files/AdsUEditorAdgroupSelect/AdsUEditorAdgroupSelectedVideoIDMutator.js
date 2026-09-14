__d(
  "AdsUEditorAdgroupSelectedVideoIDMutator",
  ["AdsAdgroupRecordAccessors", "AdsL1VideoFlowOptimizationGK", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return t == null ||
        t.length !== 1 ||
        n == null ||
        !o("AdsL1VideoFlowOptimizationGK").isL1VideoFlowOptimizationEnabled()
        ? e
        : o("AdsMutators").mutateEach(
            e,
            t,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.selected_video_id.set(String(n)),
          );
    }
    function s(e, t) {
      return t == null || t.length === 0
        ? e
        : o("AdsMutators").mutateEach(
            e,
            t,
            r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
              .selected_video_id.delete,
          );
    }
    function u(e) {
      var t;
      return ((t = e.creative) == null || (t = t.creative_sourcing_spec) == null
        ? void 0
        : t.selected_video_id) == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.selected_video_id.delete(e);
    }
    ((l.stampSelectedVideoID = e),
      (l.clearSelectedVideoID = s),
      (l.clearSelectedVideoCommitment = u));
  },
  98,
);
