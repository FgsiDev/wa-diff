__d(
  "AdsUEditorAdgroupSetCFSDescriptionAutomationReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCFSDescriptionAutomationActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.description_automation.enroll_status.set(
                t.enrollStatus,
                e,
              );
            });
          },
          r("AdsUEditorAdgroupSetCFSDescriptionAutomationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
