__d(
  "AdsUEditorAdgroupSetPACRelaxationSpecReducerPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupPACRelaxationSpecMutators",
    "AdsMutators",
    "AdsPACRelaxationUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPACRelaxationSpecActionFlux",
    "AdsUserSettingsDataManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
          },
          function (e, t, n) {
            var a = n.userSettingsID;
            return (
              a != null &&
                o("AdsPACRelaxationUtils").isGBGAdAccount() &&
                r("AdsUserSettingsDataManager").setPacRelaxationOptInStatus(
                  a,
                  t.enrollStatus ? "OPTED_IN" : "OPTED_OUT",
                ),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                return o(
                  "AdsAdgroupPACRelaxationSpecMutators",
                ).adsPACRelaxationSpecMutator(e, t.enrollStatus);
              })
            );
          },
          r("AdsUEditorAdgroupSetPACRelaxationSpecActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
