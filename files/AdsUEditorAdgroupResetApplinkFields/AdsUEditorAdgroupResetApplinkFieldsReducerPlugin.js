__d(
  "AdsUEditorAdgroupResetApplinkFieldsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupResetApplinkFieldsDataActionFlux",
    "AdsUEditorAdgroupSetLinkTypeMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupSetLinkTypeMutator",
              ).clearApplinkAndWebToAppFields(e);
            });
          },
          r("AdsUEditorAdgroupResetApplinkFieldsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
