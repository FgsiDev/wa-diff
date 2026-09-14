__d(
  "AdsUEditorAdgroupSetDynamicMediaVideoAutoCroppingOptInStatusReducerPlugin",
  [
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetDynamicMediaVideoAutoCroppingOptInStatusDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsMediaTypeAutomationMutators",
              ).dynamicMediaVideoCropStyleMutator(
                e,
                t.isOptedIn ? "AUTO" : "NONE",
              );
            });
          },
          o(
            "AdsUEditorAdgroupSetDynamicMediaVideoAutoCroppingOptInStatusDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
