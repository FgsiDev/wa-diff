__d(
  "AdsUEditorAdgroupMultiMediaSwitchExperienceReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupMultiMediaSwitchExperienceActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              r = t.isCurrentFlowMultiMedia;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return r
                ? o(
                    "AdsUEditorAdgroupMultiMediaSpecMutators",
                  ).mayDeleteMultiMediaContentFromMSS(e)
                : e;
            });
          },
          r("AdsUEditorAdgroupMultiMediaSwitchExperienceActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
