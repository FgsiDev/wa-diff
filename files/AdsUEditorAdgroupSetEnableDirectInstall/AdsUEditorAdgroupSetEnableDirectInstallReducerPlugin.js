__d(
  "AdsUEditorAdgroupSetEnableDirectInstallReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetEnableDirectInstallDataActionFlux",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t, n) {
            return (
              r("vulture")("gmuYivCC4I5jKUvg1_lW5NuoFQU="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n;
                return (
                  r("vulture")("paAmu62rRb_7bvFx0mp0ACDuFyQ="),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.enable_direct_install.set(
                    (n = t.enableDirectInstall) != null ? n : !1,
                    e,
                  )
                );
              })
            );
          },
          o("AdsUEditorAdgroupSetEnableDirectInstallDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
